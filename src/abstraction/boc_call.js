import axios from "axios";

//abstraction layer to call the bank of canadas valet api and get the rate. This can be substituted for another 
//api or database. It also builds the options for the call and url.

export default class BOCCall {
    #url
    #observationCode
    #dateRange
    #outputType
    #amt
    #response
    #rate

    constructor(details, outputType) {
        this.#observationCode = 'FX' + details.codeFrom + details.codeTo; 
        this.#dateRange = this.#formatDateRange(details.date);            
        this.#outputType = this.#validateOuputType(outputType);
        this.#url = `https://www.bankofcanada.ca/valet/observations/${this.#observationCode}/${this.#outputType}${this.#dateRange}`;                  
    }
                           
    async callAPI() {    
        const p =  new Promise(async (resolve, reject) => {
            const response = await axios.get(this.#url).catch((error) => {
                if (error.response) {
                    // Request made and server responded
                    console.error(`***ERROR*** - ${error.response.status} - ${error.response.data.message}`);
                    reject(error.response);
                    process.exit(1);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.error(error.request);
                    reject(error.request);
                    process.exit(1);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.error('Error', error.message);
                    reject(error.message);
                    process.exit(1);
                }
            });
            if (!response.data.observations[0]) {
                //error occurs on weekends dates and Canadian holidays
                console.error('Error - API returned empty observations array. This is most likely due to the date being on the weekend or a Canadian holiday.');
                reject('Error - API returned empty observations array. This is most likely due to the date being on the weekend or a Canadian holiday.');
                process.exit(1);
            } else {    
                //take the rate and parse it into rate property
                this.#rate = parseFloat(response.data.observations[0][this.#observationCode].v);
                this.#response = response;
                resolve(response);
            }
        });
        return p;
    }
    
    //converts date to string and splits it into and array by the time indicator and takes 
    //the first element and stores it into temporary variable. It then uses that variable to 
    //build the date range options for the url
    #formatDateRange(dt) {
        let sConvDate = dt.toISOString().split('T')[0];
        return `?start_date=${sConvDate}&end_date=${sConvDate}`;           
    }
    
    #validateOuputType(outputType = "json") {
        //functionally the code is only prepared to handle json responses in the future 
        //it can be built out to handle other format types
        switch(outputType.toLocaleLowerCase()) {
            case "json":
            case "xml":
            case "csv":
                return "json";
                break;
            default:
                return "json";
        }

    }

    //returns the rate. It will also call the api with the stored information 
    //if no response already exists
    getRate() {
        if (!this.#response) {  
            this.callAPI();
        }
        return this.#rate;
    }

}

