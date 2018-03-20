// writing modules with a module pattern 
// these controllers stand alone, they do not know about eachother values and methods 
// because we wraped them in IIFE-s BUT we can use the controllers themselves (budgetController, UIController)
// coz they are in the outer scope
// so we need some way to connect them
// budgetController is an IIFE(anonymous function wraped in parenthesis) that will return an object



// BUDGET CONTROLLER
var budgetController = (function(){
	// var x = 23;
	// var add = function(a) {
	// 	return x + a;
	// }

	// return {
	// 	// it can be called like publicTest(5) and then the result is gonna be 28
	// 	// because if closure publicTest can reach x and add but we can not reach these by themselves
	// 	publicTest: function(b) {
	// 		return add(b);
	// 	}
	// }

	// it is capital coz this is a function constructor
	var Expense = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};

	var Income = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};

	var data = {
		allItems: {
			exp: [],
			inc: []
		},
		totals: {
			exp: 0,
			inc: 0
		}
	};

	return {
		addItem: function(type, des, val) {
			var newItem, ID;

			// create new id, we need ifelse in case of emty array
			if (data.allItems[type].lenght > 0) {
				ID = data.allItems[type][data.allItems[type].lenght - 1].id + 1;
			} else {
				ID = 0;
			}

			// create new item based in inc or exp
			if (type === 'exp') {
				newItem = new Expense(ID, des, val);
			} else if (type === 'inc') {
				newItem = new Income(ID, des, val);
			}

			// push it into our data structure
			data.allItems[type].push(newItem);
			// return the new element
			return newItem;
		},

		testing: function() {
			console.log(data);
		}
	};

})();



// UI CONTROLLER
var UIController = (function(){
	
	var DOMstrings = {
		inputType: '.add__type',
		inputDescription: '.add__description',
		inputValue: '.add__value',
		inputBtn: '.add__btn',
		incomeContainer: '.income__list',
		expensesContainer: '.expenses__list'
	};

	return {
		// here we return a function that returns an object insted of declaring variables(type, desc, val)
		// inside the function and then return those properties... this way it is more DRY
		getInput: function() {
			// we return an obj coz this is the simply way to return 3 values at the same time
			return {
				type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
				description: document.querySelector(DOMstrings.inputDescription).value,
				value: document.querySelector(DOMstrings.inputValue).value
			};
		},

		addListItem: function(obj, type) {

			var html, newHtml, element;
			// create HTML strinf with placeholder text
			if (type === 'inc') {
				element = DOMstrings.incomeContainer;
				html = '<div class="item clearfix" id="income-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>'
			} else if (type === 'exp') {
				element = DOMstrings.expensesContainer;
				html = '<div class="item clearfix" id="expense-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__percentage">21%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>'	
			}

			// replace the placeholder text with some actual data
			newHtml = html.replace('%id%', obj.id);
			newHtml = newHtml.replace('%description%', obj.description);
			newHtml = newHtml.replace('%value%', obj.value);

			// insert the HTML into the DOM
			// 'beforeend' makes that all of the html will be inserted as a child into the container as a last child
			document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);

		},

		getDOMstrings: function() {
			return DOMstrings;
		}
	};
})();



// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl){

	// var z =  budgetCtrl.publicTest(5);

	// return {
	// 	anotherPublic: function(){
	// 		console.log(z);
	// 	}
	// }

	var setupEventListeners = function() {

		var DOM = UIController.getDOMstrings();
		
		document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItme);

		// global eventlustener that happens everywhere on the document
		document.addEventListener('keypress', function(event){
			//console.log(event); to get the keycode

			if (event.keyCode === 13) {
				ctrlAddItme();
			}

		});
	
	};


	// this function is called when someone hit return or click inputBtn
	var ctrlAddItme = function() {

		var input, newItem;
		// 1. get the field input data
		// getInput is the public method that we can access
		input = UICtrl.getInput();
		console.log(input);

		// 2. add the item to the budget controller
		newItem = budgetCtrl.addItem(input.type, input.description, input.value)

		// 3. add the new item to the UI
		UICtrl.addListItem(newItem, input.type)

		// 4. Calculate the budget

		// 5. Display the budget on the UI 
	}

	return {
		init: function() {
			console.log('app is set up');
			setupEventListeners();
		}
	};

})(budgetController, UIController);

controller.init();









