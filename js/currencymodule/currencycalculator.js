function CurrencyCalculatorFactory(){

	var currencyCalculator = new Object();

	currencyCalculator.currencyObjCollection = [];

	currencyCalculator.RequestData = function (url) {
		var request = new XMLHttpRequest();
		request.open("GET", url);
		request.onreadystatechange = function(){
			if((request.status==200) && (request.readyState ==4)){
				console.log(request.responseText);
				console.log("inside if statement");
			}
		}
		request.send();
	}

	currencyCalculator.convert = function (value){

	}

	currencyCalculator.Display = function (){

	}
	currencyCalculator.RequestData("http://coinabul.com/api.php");
	return currencyCalculator;


}
CurrencyCalculatorFactory();