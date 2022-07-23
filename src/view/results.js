//This class displays the final results to the user

export default class Results {
    #exchangeRate
    #outputValue
    #currSymbol
    #date
    //constructor formats the data provided by the exchange details and stores it
    constructor (details) {
        this.#exchangeRate = this.#formatAmounts(details.rate);
        this.#outputValue = this.#formatAmounts(details.amtTo);
        this.#currSymbol = details.currencySymbol;
        this.#date = this.#formatDate(details.date);
    }

    //formats any amount provided to 4 decmial places rounded
    #formatAmounts(rt) {
        return rt.toFixed(4);
    }

    //removes time from the date and returns the string
    #formatDate(dt) {
        return dt.toISOString().split('T')[0]
    }

    
    displayResults() {
        //formatting of the output value to include a comma in the thousands and million positions
        //universal format for every country and language French canadians would use ',' 
        // for '.' for exmaple.
        console.log('\n\noutput value   | conversion rate used   | date of conversion');
        console.log('=============================================================');
        console.log(`${this.#currSymbol} ${this.#outputValue}               ${this.#exchangeRate}               ${this.#date}`);
    }
}