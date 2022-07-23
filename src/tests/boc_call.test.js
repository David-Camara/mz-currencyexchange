import BOCCall from "../abstraction/boc_call.js";
//const BOCCall = require("../abstraction/boc_call.js");

let details = {
    codeFrom: '',
    codeTo: '',
    date: new Date('2022-07-21')
}



//call each CAD to and from USD, EUR, JPY, GBP, AUD, CHF, CNY, HKD, MXN, INR
describe('Tests for the bank of canada object', () => {    
    test('BOC call retrieves a valid rate for FXCADUSD', async () => {
        details.codeFrom = 'CAD';
        details.codeTo = 'USD';
        const apiCaller = new BOCCall(details, "json");
        await apiCaller.callAPI();
        expect(apiCaller.getRate()).toEqual(0.7755);
    });

    test('BOC call retrieves a valid rate for FXUSDCAD', async () => {
        details.codeFrom = 'USD';
        details.codeTo = 'CAD';
        const apiCaller = new BOCCall(details, "json");
        await apiCaller.callAPI();
        expect(apiCaller.getRate()).toEqual(1.2895);
    });

    test('BOC call retrieves a valid rate for FXCADEUR', async () => {
        details.codeFrom = 'CAD';
        details.codeTo = 'EUR';
        const apiCaller = new BOCCall(details, "json");
        await apiCaller.callAPI();
        expect(apiCaller.getRate()).toEqual(0.7604);
    });

    test('BOC call retrieves a valid rate for FXEURCAD', async () => {
        details.codeFrom = 'EUR';
        details.codeTo = 'CAD';
        const apiCaller = new BOCCall(details, "json");
        await apiCaller.callAPI();
        expect(apiCaller.getRate()).toEqual(1.3151);
    }); 

    test('BOC call retrieves a valid rate for FXCADJPY', async () => {
        details.codeFrom = 'CAD';
        details.codeTo = 'JPY';
        const apiCaller = new BOCCall(details, "json");
        await apiCaller.callAPI();
        expect(apiCaller.getRate()).toEqual(107.0664);
    });      

    test('BOC call retrieves a valid rate for FXJPYCAD', async () => {
        details.codeFrom = 'JPY';
        details.codeTo = 'CAD';
        const apiCaller = new BOCCall(details, "json");
        await apiCaller.callAPI();
        expect(apiCaller.getRate()).toEqual(0.00934);
    }); 

    test('BOC call retrieves a valid rate for FXCADGBP', async () => {
        details.codeFrom = 'CAD';
        details.codeTo = 'GBP';
        const apiCaller = new BOCCall(details, "json");
        await apiCaller.callAPI();
        expect(apiCaller.getRate()).toEqual(0.6488);
    }); 
    
    test('BOC call retrieves a valid rate for FXGBPCAD', async () => {
        details.codeFrom = 'GBP';
        details.codeTo = 'CAD';
        const apiCaller = new BOCCall(details, "json");
        await apiCaller.callAPI();
        expect(apiCaller.getRate()).toEqual(1.5414);
    });     

    test('BOC call retrieves a valid rate for FXCADAUD', async () => {
        details.codeFrom = 'CAD';
        details.codeTo = 'AUD';
        const apiCaller = new BOCCall(details, "json");
        await apiCaller.callAPI();
        expect(apiCaller.getRate()).toEqual(1.1246);
    }); 
    
    test('BOC call retrieves a valid rate for FXAUDCAD', async () => {
        details.codeFrom = 'AUD';
        details.codeTo = 'CAD';
        const apiCaller = new BOCCall(details, "json");
        await apiCaller.callAPI();
        expect(apiCaller.getRate()).toEqual(0.8892);
    });     

    test('BOC call retrieves a valid rate for FXCADCHF', async () => {
        details.codeFrom = 'CAD';
        details.codeTo = 'CHF';
        const apiCaller = new BOCCall(details, "json");
        await apiCaller.callAPI();
        expect(apiCaller.getRate()).toEqual(0.7519);
    }); 
    
    test('BOC call retrieves a valid rate for FXCHFCAD', async () => {
        details.codeFrom = 'CHF';
        details.codeTo = 'CAD';
        const apiCaller = new BOCCall(details, "json");
        await apiCaller.callAPI();
        expect(apiCaller.getRate()).toEqual(1.3299);
    }); 

    test('BOC call retrieves a valid rate for FXCADCNY', async () => {
        details.codeFrom = 'CAD';
        details.codeTo = 'CNY';
        const apiCaller = new BOCCall(details, "json");
        await apiCaller.callAPI();
        expect(apiCaller.getRate()).toEqual(5.2466);
    }); 
    
    test('BOC call retrieves a valid rate for FXCNYCAD', async () => {
        details.codeFrom = 'CNY';
        details.codeTo = 'CAD';
        const apiCaller = new BOCCall(details, "json");
        await apiCaller.callAPI();
        expect(apiCaller.getRate()).toEqual(0.1906);
    }); 

    test('BOC call retrieves a valid rate for FXCADHKD', async () => {
        details.codeFrom = 'CAD';
        details.codeTo = 'HKD';
        const apiCaller = new BOCCall(details, "json");
        await apiCaller.callAPI();
        expect(apiCaller.getRate()).toEqual(6.0868);
    }); 
    
    test('BOC call retrieves a valid rate for FXHKDCAD', async () => {
        details.codeFrom = 'HKD';
        details.codeTo = 'CAD';
        const apiCaller = new BOCCall(details, "json");
        await apiCaller.callAPI();
        expect(apiCaller.getRate()).toEqual(0.1643);
    }); 

    test('BOC call retrieves a valid rate for FXCADMXN', async () => {
        details.codeFrom = 'CAD';
        details.codeTo = 'MXN';
        const apiCaller = new BOCCall(details, "json");
        await apiCaller.callAPI();
        expect(apiCaller.getRate()).toEqual(16.0026);
    }); 
    
    test('BOC call retrieves a valid rate for FXMXNCAD', async () => {
        details.codeFrom = 'MXN';
        details.codeTo = 'CAD';
        const apiCaller = new BOCCall(details, "json");
        await apiCaller.callAPI();
        expect(apiCaller.getRate()).toEqual(0.06249);
    }); 

    test('BOC call retrieves a valid rate for FXCADINR', async () => {
        details.codeFrom = 'CAD';
        details.codeTo = 'INR';
        const apiCaller = new BOCCall(details, "json");
        await apiCaller.callAPI();
        expect(apiCaller.getRate()).toEqual(61.9195);
    }); 
    
    test('BOC call retrieves a valid rate for FXINRCAD', async () => {
        details.codeFrom = 'INR';
        details.codeTo = 'CAD';
        const apiCaller = new BOCCall(details, "json");
        await apiCaller.callAPI();
        expect(apiCaller.getRate()).toEqual(0.01615);
    }); 

    // test('BOC call errors for FXQQQZZZ', async () => {
    //     details.codeFrom = 'QQQ';
    //     details.codeTo = 'ZZZ';
    //     const apiCaller = new BOCCall(details, "json");
    //     await apiCaller.callAPI();
    //     expect(apiCaller.getRate()).toEqual(0.01615);
    // });

});

