import currSymbols from "./data/currencySymbols.json";

//The exchange class contains all the basic details for the rate conversion calculation 
//and formulas used for the rate conversion.

export default class Exchange {
    //construct details from answers provided by user
    constructor(answers) {
        this.details = {
            amtFrom: parseFloat(answers.amt) || 0.0000,
            amtTo: 0.0000,
            rate: 0.0000,
            codeFrom: answers.convFrom || '',
            codeTo: answers.convTo || '',
            date: answers.convDate || new Date(),
            currencySymbol: currSymbols[answers.convTo]
        }
    }

    //calculate the final amount after the rate has been added
    calculateAmtTo() {
        this.details.amtTo = parseFloat(this.details.rate) * parseFloat(this.details.amtFrom);
    }

    //sets the rate. If the rate is not a number it will default to zero
    setRate(rt) {
        if (!isNaN(rt) && rt != null && rt != '') {
            this.details.rate = rt;
        } else {
            this.details.rate = 0.0000;
        }
    }

    getDetails() {
        return this.details;
    }
}