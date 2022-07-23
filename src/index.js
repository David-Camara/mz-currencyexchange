import UserPrompt from "./view/user_prompt.js";
import Exchange from "./exchange.js";
import BOCCall from "./abstraction/boc_call.js";
import Results from "./view/results.js"

//instantiate user prompts and display to user
const up = new UserPrompt();
await up.promptUser();
const answers = up.getUserAnswers();

//pass user answers to the exchange class constructor
const fExchange = new Exchange(answers);

//pass the exchange details to the bank of canada abstraction layer
const apiCaller = new BOCCall(fExchange.getDetails(), "json");
await apiCaller.callAPI();

//set the rate in the exchange details and calculate out the amount based on rate
fExchange.setRate(apiCaller.getRate());
fExchange.calculateAmtTo();

//pass the details to the results and display them to the user
const res = new Results(fExchange.getDetails());
res.displayResults();








