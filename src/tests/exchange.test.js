import Exchange from "../exchange.js";

let answers = {
    convFrom: "", //: String
    convTo: "", //: String
    amt: 0, //: Number
    convDate: new Date('2022-07-21') //: Date
}

//validate public methods and constructor with extreme values
describe('Tests for the Exchange object', () => {
    test('Verify the rate gets set properly', () => {
        const fExchange = new Exchange(answers);
        fExchange.setRate(1.1);
        expect(fExchange.getDetails().rate).toEqual(1.1);
    });
    
    test('Verify the rate property is set to 0 when given a string value', () => {
        const fExchange = new Exchange(answers);
        fExchange.setRate('asd');
        expect(fExchange.getDetails().rate).toEqual(0.0000);
    });

    test('Verify the rate property is set to 0 when given a null value', () => {
        const fExchange = new Exchange(answers);
        fExchange.setRate(null);
        expect(fExchange.getDetails().rate).toEqual(0.0000);
    });   

    test('Verify the rate property is set to 0 when given an undefined value', () => {
        const fExchange = new Exchange(answers);
        fExchange.setRate(undefined);
        expect(fExchange.getDetails().rate).toEqual(0.0000);
    }); 
    
    test('Verify the rate property is set to 0 when given a blank string', () => {
        const fExchange = new Exchange(answers);
        fExchange.setRate('');
        expect(fExchange.getDetails().rate).toEqual(0.0000);
    });     

    test('Verify the rate property is set to 0 when given a false value', () => {
        const fExchange = new Exchange(answers);
        fExchange.setRate(false);
        expect(fExchange.getDetails().rate).toEqual(0.0000);
    });         

    test('Verify the method that calculates the end amount gives a valid amount when given a valid rate and amount', () => {
        answers.amt = 12;        
        const fExchange = new Exchange(answers);
        fExchange.setRate(10);
        fExchange.calculateAmtTo();
        expect(fExchange.getDetails().amtTo).toEqual(120.0000);
    });

    test('Verify the method that calculates the end amount is zero when constructed with an string rate', () => {
        answers.amt = 12;        
        const fExchange = new Exchange(answers);
        fExchange.setRate('asd');
        fExchange.calculateAmtTo();
        expect(fExchange.getDetails().amtTo).toEqual(0.0000);        
    });

    test('Verify the method that calculates the end amount is zero when constructed with a null rate', () => {
        answers.amt = 12;        
        const fExchange = new Exchange(answers);
        fExchange.setRate(null);
        fExchange.calculateAmtTo();
        expect(fExchange.getDetails().amtTo).toEqual(0.0000);        
    });

    test('Verify the method that calculates the end amount is zero when constructed with an undefined rate', () => {
        answers.amt = 12;        
        const fExchange = new Exchange(answers);
        fExchange.setRate(undefined);
        fExchange.calculateAmtTo();
        expect(fExchange.getDetails().amtTo).toEqual(0.0000);        
    });    

    test('Verify the method that calculates the end amount is zero when constructed with a blank string rate', () => {
        answers.amt = 12;        
        const fExchange = new Exchange(answers);
        fExchange.setRate('');
        fExchange.calculateAmtTo();
        expect(fExchange.getDetails().amtTo).toEqual(0.0000);        
    });      

    test('Verify the method that calculates the end amount is zero when constructed with a false rate', () => {
        answers.amt = 12;        
        const fExchange = new Exchange(answers);
        fExchange.setRate(false);
        fExchange.calculateAmtTo();
        expect(fExchange.getDetails().amtTo).toEqual(0.0000);        
    });

     test('Verify the method that calculates the end amount is zero when constructed with a string amount', () => {
        answers.amt = 'aasd';        
        const fExchange = new Exchange(answers);
        fExchange.setRate(10);
        fExchange.calculateAmtTo();
        expect(fExchange.getDetails().amtTo).toEqual(0.0000);          
     });

     test('Verify the method that calculates the end amount is zero when constructed with a null amount', () => {
        answers.amt = null;        
        const fExchange = new Exchange(answers);
        fExchange.setRate(10);
        fExchange.calculateAmtTo();
        expect(fExchange.getDetails().amtTo).toEqual(0.0000);  
     });

     test('Verify the method that calculates the end amount is zero when constructed with an undefined amount', () => {
        answers.amt = undefined;        
        const fExchange = new Exchange(answers);
        fExchange.setRate(10);
        fExchange.calculateAmtTo();
        expect(fExchange.getDetails().amtTo).toEqual(0.0000);  
     });

     test('Verify the method that calculates the end amount is zero when constructed with a blank string amount', () => {
        answers.amt = '';        
        const fExchange = new Exchange(answers);
        fExchange.setRate(10);
        fExchange.calculateAmtTo();
        expect(fExchange.getDetails().amtTo).toEqual(0.0000);          
     });

     test('Verify the method that calculates the end amount is zero when constructed with a false amount', () => {
        answers.amt = false;        
        const fExchange = new Exchange(answers);
        fExchange.setRate(10);
        fExchange.calculateAmtTo();
        expect(fExchange.getDetails().amtTo).toEqual(0.0000);             
     });

    test('Verify get details method gets the valid details', () => {
        answers.amt = 12
        answers.convDate = new Date('2022-07-21');
        answers.convFrom = 'CAD';
        answers.convTo = 'CAD';
        const fExchange = new Exchange(answers);
        expect(fExchange.getDetails()).toEqual({"amtFrom": 12, "amtTo": 0, "codeFrom": "CAD", "codeTo": "CAD", "currencySymbol": "$", "date": new Date('2022-07-21T00:00:00.000Z'), "rate": 0});
    });
});