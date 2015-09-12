function CurrencyObjectFactory(name, conversion){
	var currencyObj = new Object();

	currencyObj.name = name;
	currencyObj.conversion = conversion;

	return currencyObj;
}


