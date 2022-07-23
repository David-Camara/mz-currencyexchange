# mz-currencyexchange
Converts between foreign currencies and Canadian dollars, and from Canadian dollars to foreign currencies

# Minimum Application Requirements
Node.js     - v16.13.2
npm         - v8.1.2

# Steps to Run The Application
1. Open code in IDE
2. From a terminal in the IDE navigate to the project folder's root
3. run the command 'npm i' to install the modules required for the application
4. Once the modules have been installed, run the command 'npm run start'. If that command doesn't work run "node --experimental-json-modules  --no-warnings ./src/index.js"
5. You will then be prompted in the terminal to answer a series of questions. 
6. Questions 1 and 2 will prompt you for a currency code based on (ISO 4217) standards. CAD must be one of the submitted values.
6. Questions 3 will ask you for the monetary amount that you wish to exchange
7. Questions 4 will ask you for the date of the exchange rate. You may press enter for yesterdays exchange rate date
8. Once all questions have been answered correctly then you will be presented  a table with the output value which is the exchanged amount. The conversion rate that was used will aslo display and the exchange rate date.

# Assignment Requirements
Your application should meet the following requirements:

1. Convert between foreign currencies and Canadian dollars, and from Canadian dollars to foreign currencies
2. Use the daily average exchange rate published by the Bank of Canada for conversion between foreign currencies and Canadian dollars
3. Permit the user to specify the amount of currency to convert
4. Permit the user to specify the foreign currency to convert to/from by currency code (ISO 4217)
5. Permit the user to optionally specify the date of the conversion (for converting historical values)
6. Display the output value, the conversion rate used, and the date of conversion
7. Display the output value to a precision of 4 decimal places
8. Convert at least the following foreign currencies: USD, EUR, JPY, GBP, AUD, CHF, CNY, HKD, MXN, INR
