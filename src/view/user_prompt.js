import readline from "readline";
import currSymbols from "../data/currencySymbols.json";

//This class is to provide the end user a series of questions from the command prompt.
//verify the answers and return them 

export default class UserPrompt {

    #rl;
    #currDate;
    #userAnswers;

    constructor(){
        this.#rl = readline.createInterface(process.stdin, process.stdout);
        this.#userAnswers = {
            convFrom: "", //: String
            convTo: "", //: String
            amt: 0, //: Number
            convDate: this.#addDayToDate(-1) //: Date
        }
        this.#currDate =this.#addDayToDate(-1);
    }

    //provide questions to the user to answer
    async promptUser() {
        await this.#question1();
        await this.#question2();
        this.#verifyCADCode();
        await this.#question3();
        await this.#question4();
        this.#rl.close();                            
    }

    //prompt question 1 and verify the answer and store it as an uppercase value
    #question1 () {
        return new Promise((resolve, reject) => {
            this.#rl.question("1) What is the currency code you would like to convert from  ? ", (from)=>{            
                this.#verifyCountryCode(from.toUpperCase());
                this.#userAnswers.convFrom = from.toUpperCase();                               
                resolve();
            })
        })
    }

    //prompt question 2 and verify the answer and store it as an uppercase value
    #question2 () {
        return new Promise((resolve, reject) => {
            this.#rl.question("2) What is the currency code you would like to convert to ? ", (to) => {
                this.#verifyCountryCode(to.toUpperCase());                
                this.#userAnswers.convTo = to.toUpperCase();                          
                resolve();
            })
        })
    }

    //prompt question 3. If the value is empty it will default to 0. It will then verify the answer and store it
    #question3 () {
        return new Promise((resolve, reject) => {
            this.#rl.question("3) What is the amount you wish to convert ? ", (val) => {
                this.#userAnswers.amt = val || 0;
                this.#verifyAmt(this.#userAnswers.amt);                     
                resolve();
            })
        })
    }

    //prompt question 4. If the value is empty it will default to yesterdays date. It will then verify the answer and store it
    #question4 () {
        return new Promise((resolve, reject) => {
            this.#rl.question(`4) Please specify the date of the conversion (<ENTER> for ${this.#currDate.toISOString().split('T')[0]}) ? `, async (dt) => {
                dt = dt || this.#currDate;    
                this.#verifyDate(dt);
                this.#userAnswers.convDate = new Date(dt);                      
                resolve();
            })
        })
    }

    //check if the date entered is a date
    #isDate(dt = new Date()) {
        const isValidDate = Date.parse(dt);                
        return !isNaN(isValidDate);
    }

    //check if the country code is in the currency symbols data
    #verifyCountryCode(code) {
        //if code does not exist in currency symbol data throw error
        if (!currSymbols[code]) {
            console.error(`INVALID COUNTRY CODE : ${code}`);
            this.#rl.close();
            process.exit(9);
        }
    }

    #verifyCADCode() {
        //validate that at least one of the answers is CAD
        if (this.#userAnswers.convFrom != 'CAD' && this.#userAnswers.convTo != 'CAD') {
            console.error(`INVALID COUNTRY CODE : ${this.#userAnswers.convFrom}, ${this.#userAnswers.convTo} - At least one code needs to be Canadian currency (CAD)`);
            this.#rl.close();
            process.exit(9);            
        }
    }

    //verify that the date is a date and if not throw and error
    #verifyDate(dt) {
        if (!this.#isDate(dt)) {
            console.error(`INVALID DATE : ${dt}`);
            this.#rl.close();
            process.exit(9);
        }
    }


    //verify that the amount is numeric, if not an error is thrown
    #verifyAmt() {
        if (isNaN(this.#userAnswers.amt)) {
            console.error(`INVALID AMOUNTT : ${this.#userAnswers.amt}`);
            this.#rl.close();
            process.exit(9);                
        }
    }

    //add days to a date negative numbers go in the past and positive numbers go in the future
    #addDayToDate(iDay = 0, dt = new Date()) {
        dt = new Date(dt);    
        if (this.#isDate(dt) &&  !isNaN(iDay)) {            
            dt = new Date(dt.setDate(dt.getDate()+iDay));    
            return dt
        } else return dt;
    };

    getUserAnswers() {
        return this.#userAnswers;
    }
}