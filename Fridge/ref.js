(function(){
	

	
	//var table = document.getElementById("userTable");
	var firstYear = document.getElementById("firstYear");
	var lastYear = document.getElementById("lastYear");
	var firstMonth = document.getElementById("firstMonth");
	var lastMonth = document.getElementById("lastMonth");
	var firstDay = document.getElementById("firstDay")
	var nowDate = new Date();
		firstYear.value = nowDate.getFullYear();
		lastYear.value = nowDate.getFullYear();
		firstMonth.value = nowDate.getMonth() + 1;
		firstDay.value = nowDate.getDate();
		lastMonth.value = nowDate.getMonth() + 1;
	var prodList = ['milk', 'cream', 'meat'];
	var unitsList = ['units','kg','l'];
	var typeList = ['no type','from milk', 'vegetables', 'dishes'];

	var firstDate = new Date(firstYear.value,firstMonth.value - 1 ,firstDay.value);
	var lastDate = null;
	var productName = document.getElementById("productName");
	var unitMenu = document.getElementById("unitsList");
	var typeItem = document.getElementById("typeItem");
	var optProduct = document.getElementById("optProduct");
	var optUnits = document.getElementById("optUnits");
	var optType = document.getElementById("optType");
	var productArray = [];
	var rowArray = [];	
	var tableArray = [];
	var btnArrRemove = []; 
	var btnArrMove = [];
	var tFreez = document.getElementById("freezTable");
	var tCamera = document.getElementById("cameraTable");
	var box = document.getElementById('tableSection');
	var option = document.getElementById("optionSection");
	var lang = 'en';

//createTypeTable();
getOldData();
if(lang == 'en'){
	inEnglish();
} else {
	inUcraine();

}
//------------change language---------------
	$('#langEn').click(function(evt){
		lang = 'en';
		inEnglish();
		setObjectData();
	});
	$('#langUa').click(function(evt){
		lang = 'ua';
		inUcraine();
		setObjectData();
	});
	
	function inEnglish(){		
		$('h1').text('Refrigerator');
		$('h2').text('Add new product');
		$('#productName').prev('label').text('Product');
		$('#amountNumber').prev('label').text('amount');
		$('#firstDay').prev('label').text('Date buy');
		$('#lastDay').prev('label').text('Best before');
		$('#remindDay').prev('label').text('Remind for');
		$('#remindDay').next('p').text('days');
		$('#leaveNum').prev('label').text('or when leave');
		$('#leaveNum').next('p').text('product units');
		$('#place').prev('label').text('Put in');
		var partFridge = $('#place').children();
		partFridge[0].textContent = 'Store cold';
		partFridge[1].textContent = 'Freezer';
		$('#typeItem').prev('label').text('type of product');
		$('#btnAdd').text('add');
		$('h3').text('Setup list');
		var labelsOpt = $('#optionSection').find('label');
		labelsOpt[0].textContent = 'Product';
		labelsOpt[1].textContent = 'Unit';
		labelsOpt[2].textContent = 'Type item';
		$('#freezTable').next('caption').text('Freezer');
		var tabHead = $('#freezTable').siblings('thead').find('th');
		var tabTitles = ['Product','amount','units','Buy date',
		'End date', 'remind','remove move',
		'day','month','year','day','month','year'];
		for (var i = 0; i < tabHead.length; i++) {
			tabHead[i].textContent = tabTitles[i];
		}
		tabHead = $('#cameraTable').siblings('thead').find('th');
		for (var i = 0; i < tabHead.length; i++) {
			tabHead[i].textContent = tabTitles[i];
		}
		$('#cameraTable').next('caption').text('Store cold');
		$('#removeData').text('Clear all data');
		$('#addInfo').attr('title','To add the product in the \'fridge\' choose the product in list, type its amount and choose unit. When you fill data click on button \'add\'.');
		$('#prodInfo').attr('title','Choose the product in list, type its amount and choose unit. You can add element in lists on \'Setup list\' panel.');
		$('#endDateInfo').attr('title','You can specify final shelf life for the product. So \'fridge\' can attend when time is over for the product and highlight it with red color.');
		$('#remindInfo').attr('title','You can specify for how many days until storage time is over \'fridge\' remind you that it\'s time-limit to use the product. In this case, the product highlight yellow.');
		$('#leaveInfo').attr('title','You can specify the amount of product that when the product remains as much or less marked, \'fridge \' indicating that you need to purchase this product, amount of product highlight orange.');
		$('#typeInfo').attr('title','Product type you can use to sort product in cold store.');
		$('#listInfo').attr('title','In this part you can edit list for other part which add product. \nYou can add an element by clicking \'+\' button or delete an element by clicking \'-\' button.');
		
	}
	function inUcraine(){
		
		$('h1').text('Холодильник');
		$('h2').text('Додати новий продукт');
		$('#productName').prev('label').text('Продукти');
		$('#amountNumber').prev('label').text('кількість');
		$('#firstDay').prev('label').text('Дата покупки');
		$('#lastDay').prev('label').text('Кінцева дата');
		$('#remindDay').prev('label').text('Нагадати за');
		$('#remindDay').next('p').text('днів');
		$('#leaveNum').prev('label').text('або коли залишилось');
		$('#leaveNum').next('p').text('одиниць продукту');
		$('#place').prev('label').text('Покласти у');
		var partFridge = $('#place').children();
		partFridge[0].textContent = 'Камера охолодження';
		partFridge[1].textContent = 'Морозильна камера';
		$('#typeItem').prev('label').text('тип продукту');
		$('#btnAdd').text('додати');
		$('h3').text('Редагувати списки');
		var labelsOpt = $('#optionSection').find('label');
		labelsOpt[0].textContent = 'Продукт';
		labelsOpt[1].textContent = 'Одиниці';
		labelsOpt[2].textContent = 'Тип продукту';
		$('#freezTable').next('caption').text('Морозильна камера');
		var tabHead = $('#freezTable').siblings('thead').find('th');
		var tabTitles = ['Продукт','кількість','одиниці','Дата придбання',
		'Кінцева дата', 'нагадати','видалити перенести',
		'день','місяць','рік','день','місяць','рік'];
		for (var i = 0; i < tabHead.length; i++) {
			tabHead[i].textContent = tabTitles[i];
		}
		tabHead = $('#cameraTable').siblings('thead').find('th');
		for (var i = 0; i < tabHead.length; i++) {
			tabHead[i].textContent = tabTitles[i];
		}		
		$('#cameraTable').next('caption').text('Камера охолодження');
		$('#removeData').text('Видалити всі дані');
		$('#addInfo').attr('title','Щоб додати продукти у \'холодильнік\' виберіть продукт зі списку, вкажіть кількість та виберить одиниці. Коли Ви заповнили потрібні Вам дані, натисніть кнопку \'додати\'');
		$('#prodInfo').attr('title','Виберіть продукт зі списку, вкажіть кількість та виберіть одиниці. Додати елементи до списків ви можете на панелі \'Редагувати списки\'.');
		$('#endDateInfo').attr('title','Ви можете вказати кінцеву дату споживання продукту, і \'холодильник\' відмітить продукт червоним кольором, коли термін придатності закінчиться.');
		$('#remindInfo').attr('title','Ви можете вказати за скільки днів до кінцевої дати \'холодильник\' нагадає Вам, що час використати продукт. у цьому випадку продукт підсвітиться жовтим.');
		$('#leaveInfo').attr('title','Ви можете вказати кількість продукту, яку відмітить оранжевим кольором \'холодильник\', коли продукта залишиться стільки або меньше відзначеного, показуючи, що Вам потрібно докупити цей продукт.');
		$('#typeInfo').attr('title',' Тип продукта Ви можете визначити для сортування у холодильній камері.');
		$('#listInfo').attr('title','У цьому розділі Ви можете редагувати списки, \nякі використовуються для додавання продуктів. \nВи можете як додавати нові елементи списку, за допомогою кнопок \'+\', \nтак і видаляти, за допомогою кнопки \'-\'.');
	}
//---------------------------------------------
	fillOption(productName, prodList);
	fillOption(optProduct, prodList);
	fillOption(unitMenu, unitsList);
	fillOption(optUnits, unitsList);
	fillOption(typeItem, typeList);	
	fillOption(optType, typeList);
	
function fillOption(elem, arrList)	{
		var childElem = elem.getElementsByTagName('Option');		
		
		if (elem.firstChild){				
				
			while(elem.firstChild){
				elem.removeChild(elem.firstChild);				
			}			
		}
		for (var i = 0; i < arrList.length; i++) {
			var opt = document.createElement('Option');
			opt.setAttribute('value',arrList[i]);
			opt.textContent = arrList[i];
			elem.appendChild(opt);
			
		}
}
function createTypeTables(){
	for (var i = 0; i < typeList.length; i++) {
		createOneTable(typeList[i]);
	}
}

function createOneTable(tableName){	
		var newTable = document.createElement('Table')
		newTable.setAttribute('name', tableName);
		newName = document.createElement('Caption');
		newName.textContent = tableName;
		newTable.appendChild(newName);
		box.appendChild(newTable);
		tableArray.push(newTable);	
}

function removeTypeTable(tableName){
	
	var allTable = box.childNodes;
	//console.log(allTable);
	for (var i = 0; i < allTable.length; i++) {
		if(allTable[i].tagName == 'TABLE'){
			if(allTable[i].getAttribute('name') == tableName){
	 			if(allTable[i].childNodes.length > 1){
	 				var message;
	 				if(lang == 'en') message = 'Cannot remove table with type '+ tableName +' because it conteins product';
	 				else message = 'Не можу видалити таблицю з типом ' + tableName +', тому що в ній знаходяться дані';
	 				alert(message);
	 				//console.log('Can not remove table');
	 				return false;
	 			}
	 			//console.log(tableName);
	 			box.removeChild(allTable[i]);
	 			return true;
	 		}		
		}		
	} 
}
//------check for no dubble input data in list----------------
function checkDubbleOptionData(arr, str){
	for (var i = 0; i < arr.length; i++) {
		
		if (arr[i]== str){
			return false;
		}
			
	}
	return true;
}
//------------product constructor-------------------------
function Product(name, amount, unit, firstDate, lastDate,
				 remind, leave, placeType, itemType){
	this.name = name;
	this.amount = amount;
	this.unit = unit;
	this.firstDate = firstDate;
	this.lastDate = lastDate;
	this.remind = remind;
	this.leave = leave;
	this.placeType = placeType;
	this.itemType = itemType;
	this.attention = false;
	this.endDate = false;
	
	this.checkDate = function(){
		var currentDate = new Date();
		if(this.lastDate){
			if(this.remind > 0){
				var difference = this.lastDate.getTime() - currentDate.getTime();
				difference = Math.floor(difference / (1000*60*60*24)) + 1 ;
				if(difference <= this.remind){
					this.attention = true;
					//console.log('remind '+ difference + " " + this.attention);
				}
			}//if remind
			if((currentDate.getTime() - (1000*60*60*24)) > this.lastDate.getTime() ){
				this.endDate = true;
			}

			if(currentDate.getDate() == this.lastDate.getDate() ){
				console.log("curren day equal end day "+ this.lastDate.getDate());
				this.attention = true;	
			}
		
		}	
	}
	
}
//------------------------------------------------------

$('#btnAdd').click(addProduct);

//-------------display one row in table-----------------------
function writeInTable(product, ind){
	
	var tableRow = document.createElement("Tr");
	switch(product.placeType){
		case 'Freezer':
				tFreez.appendChild(tableRow);
				rowArray.push([ind, 0, tFreez.childNodes.length - 1]);
				
				break;
		case 'Camera':			
				for (var i = 0; i < tableArray.length; i++) {
									
					if(product.itemType == tableArray[i].getAttribute('name')){
						
						tableArray[i].appendChild(tableRow);						
						rowArray.push([ind, i + 1, tableArray[i].childNodes.length - 1]);
											
					}					
				}				
				break;
	}
	//console.log(rowArray);
		var lastDate = {
			day:null,
			month:null,
			year:null
					};
		if(product.lastDate){
		lastDate.day = product.lastDate.getDate();
		lastDate.month = product.lastDate.getMonth()+ 1;
		lastDate.yaer = product.lastDate.getFullYear();
		}
		var dataArr = [product.name,product.amount,product.unit,
						product.firstDate.getDate(),product.firstDate.getMonth() + 1,
						product.firstDate.getFullYear(), 
						lastDate.day, lastDate.month, lastDate.yaer,
						product.remind];
		for (var i = 0; i < dataArr.length; i++) {
		var newRow = document.createElement("Td");
		newRow.textContent = dataArr[i];	
		tableRow.appendChild(newRow);
		}
		var newRow =  document.createElement("Td");
		var btnR =  document.createElement("Button");
		var btnM = document.createElement("Button");
		
		tableRow.appendChild(newRow);
		newRow.appendChild(btnM);
		newRow.appendChild(btnR);
		
		var imgM = document.createElement("Img");
		var imgR = document.createElement("Img");
		
		imgM.setAttribute('src', 'Move.svg');
		imgR.setAttribute('src', 'Remove.svg');
		btnM.appendChild(imgM);
		btnR.appendChild(imgR);
		btnArrMove[ind] = btnM;
		btnArrRemove[ind] = btnR;
		
	//-----chech if amount less then we wont--------------
		if(product.leave){
			//console.log('leave option');			
			if(Number(product.leave) >= Number(product.amount)){
				tableRow.childNodes[1].setAttribute('class','leaveSelect');
			}
		}
//--------attention 
		if(product.attention){
			tableRow.setAttribute('class','remind');
		}
		if(product.endDate){
			tableRow.setAttribute('class','endDate');
		}
		
}
//-------------------------------------------------

//------------add new product in array---------------
function addProduct(evt){
	
	var amountNumber = document.getElementById("amountNumber");	
	var lastDay = document.getElementById("lastDay");
	var remindDay = document.getElementById("remindDay");
	var placeType = document.getElementById("place");
	var leaveNum = document.getElementById("leaveNum");
	//console.log("click");

	//if($('#amountNumber')[0].checkValidity() && firstDay.validity.valid){
	if( amountNumber.validity.valid && firstDay.validity.valid){		
	firstDate = new Date(firstYear.value,firstMonth.value - 1 ,firstDay.value);	
		
		if(lastDay.value){
			var endDate = new Date(lastYear.value,lastMonth.value - 1,lastDay.value);
		 	if(firstDate.getTime() <= endDate.getTime()){
		 	lastDate = endDate;
			}
		}else{
			remindDay.value = null;
		}

		productArray.push(new Product(productName.value,
			amountNumber.value, unitMenu.value, firstDate, lastDate,
			remindDay.value, leaveNum.value, placeType.value, typeItem.value));	
		console.log('product '+ productArray[productArray.length - 1].leave);
		productArray[productArray.length - 1].checkDate();
		writeInTable(productArray[productArray.length - 1], productArray.length - 1);
		setObjectData();
	}
	lastDate = null;	
	evt.preventDefault();		
}

function setObjectData(){
	var data = {checkDate:new Date(),
				language:lang,
				prodList:prodList,
				unitsList:unitsList,
				typeList:typeList,
				product:[],
				amount:[],
				units:[],
				firstDay:[],
				firstMonth:[],
				firstYear:[],
				lastDay:[],
				lastMonth:[],
				lastYear:[],
				remind:[],
				leave:[],
				place:[],
				typeItem:[]
				
	}
	
	for (var i = 0; i < productArray.length; i++) {		
		data.product.push(productArray[i].name);
		data.amount.push(productArray[i].amount);
		data.units.push(productArray[i].unit);
		data.firstDay.push(productArray[i].firstDate.getDate());
		data.firstMonth.push(productArray[i].firstDate.getMonth());
		data.firstYear.push(productArray[i].firstDate.getFullYear());
		
		if(productArray[i].lastDate){
		data.lastDay.push(productArray[i].lastDate.getDate());
		data.lastMonth.push(productArray[i].lastDate.getMonth());
		data.lastYear.push(productArray[i].lastDate.getFullYear());
		} else{
			data.lastDay.push(null);
			data.lastMonth.push(null);
			data.lastYear.push(null);
		}
		data.remind.push(productArray[i].remind);
		data.leave.push(productArray[i].leave);
		data.place.push(productArray[i].placeType);
		data.typeItem.push(productArray[i].itemType);
	}
	localStorage.setItem('fridge', JSON.stringify(data));
	//console.log(data);
	
}
	
function getOldData(){
	var oldData = JSON.parse(localStorage.getItem('fridge'));
	//console.log(oldData);
	if(oldData){
		prodList = oldData.prodList;
		unitsList = oldData.unitsList;
		typeList = oldData.typeList;
		lang = oldData.language;
		createTypeTables();
		for (var i = 0; i < oldData.product.length; i++) {	
			var lastDate = null;
			if(oldData.lastDay[i]){
				lastDate = new Date(oldData.lastYear[i], oldData.lastMonth[i], oldData.lastDay[i]);
			}

				productArray.push(new Product(oldData.product[i],
			oldData.amount[i], oldData.units[i],
			new Date(oldData.firstYear[i], oldData.firstMonth[i], oldData.firstDay[i]),
			lastDate,
			oldData.remind[i], oldData.leave[i], oldData.place[i], oldData.typeItem[i]));	
					
		productArray[productArray.length - 1].checkDate();

		writeInTable(productArray[productArray.length - 1], productArray.length - 1);
			
		}//for
	
	}//if oldData
	else{
		createTypeTables();
	}

}

function lastCheck(oldTime, newTime) {
	var diff = newTime.getTime() - oldTime.getTime()
	if(diff < 1000*60*60*24){
		return true;		
	}
}

box.addEventListener('click', workWithTable, false);
//tCamera.addEventListener('click', workWithTable, false);

function workWithTable(evt){
	
	var curBtn;
	if(evt.target.tagName == 'IMG'){
		curBtn = evt.target.parentNode;
	} else if(evt.target.tagName == 'BUTTON'){
		curBtn = evt.target;
	}
	for (var i = 0; i < btnArrRemove.length; i++) {

		if(curBtn == btnArrRemove[i]){
			var parentElem = btnArrRemove[i].parentNode.parentNode.parentNode;
			console.log('remove row');
			parentElem.removeChild(btnArrRemove[i].parentNode.parentNode);
			productArray.splice(i,1);
			btnArrRemove.splice(i,1);
			btnArrMove.splice(i,1);
			for (var ii = 0; ii < rowArray.length; ii++) {
				if(rowArray[ii][0]== i){
					rowArray.splice(ii,1);
				}				
			}			
			setObjectData();
			return;
		}
	}
	for (var i = 0; i < btnArrMove.length; i++) {
		if(curBtn == btnArrMove[i]){
			var parentElem = btnArrRemove[i].parentNode.parentNode.parentNode;
			parentElem.removeChild(btnArrRemove[i].parentNode.parentNode);
			
			if( parentElem == tFreez){
				productArray[i].placeType = 'Camera';
			}else {
				productArray[i].placeType = 'Freezer';
			}			
			for (var ii = 0; ii < rowArray.length; ii++) {
				if(rowArray[ii][0]== i){
					rowArray.splice(ii,1);
				}				
			}	
			writeInTable(productArray[i],i);
			setObjectData();
			return;
		}
	}
	
	if(evt.target.tagName == 'TD'){
		chooseRecord(evt.target);
	}
	
	
}

function chooseRecord(elem){
	
	var parentElem = elem.parentNode;	

	if(elem == parentElem.childNodes[1] ||
		elem == parentElem.childNodes[6] ||
		elem == parentElem.childNodes[7] ||
		elem == parentElem.childNodes[8] ||
		elem == parentElem.childNodes[9] ){

	var num = elem.textContent;
	elem.textContent = "";
	var input = document.createElement("Input");
	input.setAttribute('type', 'number')
	input.value = num;
	elem.appendChild(input);
	input.focus();

		input.addEventListener("blur", changeDataInTable, false);
	}

}
function changeDataInTable(evt){

	var input = evt.target;
	var elem = input.parentNode;
	var row = input.parentNode.parentNode.childNodes;
	var ind = searchIndex(elem);
	if(elem == row[1]){
		//console.log('amount');
		elem.textContent = input.value;
		productArray[ind].amount = input.value;
		console.log(productArray[ind].leave);
		if(productArray[ind].leave){
			console.log('leave option');
			if(productArray[ind].leave >= productArray[ind].amount){
				console.log('leave alse'+ productArray[ind].amount);
				elem.setAttribute('class','leaveSelect');
			}
		}
	}else if(elem == row[6]){
		//console.log('lastDay');	
		var check = changeDate(ind, input.value, 'day');
		if(check) elem.textContent = input.value;
		else elem.textContent = productArray[ind].lastDate.getDate();
	}else if(elem == row[7]){		
		changeDate(ind, input.value, 'month');
		if(check) elem.textContent = input.value;
		else elem.textContent = productArray[ind].lastDate.getMonth() + 1;
	}else if(elem == row[8]){		
		changeDate(ind, input.value, 'year');
		if(check) elem.textContent = input.value;
		else elem.textContent = productArray[ind].lastDate.getFullYear();
	}else if(elem == row[9]){
		elem.textContent = input.value;
		productArray[ind].remind = input.value;
	}
	
	setObjectData();

}
function changeDate(ind, val, DMY){
	var oldD;
	 if(productArray[ind].lastDate){
	 	oldD = productArray[ind].lastDate;
	 } else{
	 	oldD = new Date();
	 }

	var newD;
	switch (DMY){
		case 'day':
			newD = new Date(oldD.getFullYear(), oldD.getMonth(), val);
			break;
		case 'month':
			newD = new Date(oldD.getFullYear(), val - 1, oldD.getDate());
			break;
		case 'year':
			newD = new Date(val, oldD.getMonth(), oldD.getDate());
			break;
	}
	if(productArray[ind].firstDate > newD){
		return false;
	} 
	productArray[ind].lastDate = newD;
	return true;
}
function searchIndex(elem){
	var arrSearch = [];	
	if(elem.parentNode.parentNode == tFreez){
		arrSearch.push(0);
	} else {
		for (var i = 0; i < tableArray.length; i++) {
			if(elem.parentNode.parentNode == tableArray[i]){
				arrSearch.push(i + 1);
			}
			
		}
	}
	var bodyChilds = elem.parentNode.parentNode.childNodes;
	for (var i = 0; i < bodyChilds.length; i++) {
		if(elem.parentNode == bodyChilds[i]){
			arrSearch.push(i);
		}
	}
	
	for (var i = 0; i < rowArray.length; i++) {
			if(arrSearch[0] == rowArray[i][1] 
				&& arrSearch[1] == rowArray[i][2]){
				//console.log(rowArray[i][0]);
				return rowArray[i][0];
			}
		}	
}

option.addEventListener('click', changeOption, false);

function changeOption(evt){
	var btnOpt = option.getElementsByTagName('Button');
	for (var i = 0; i < btnOpt.length; i++) {
		if(evt.target == btnOpt[i]){
			var parentForm = btnOpt[i].parentNode;
			var input = parentForm.getElementsByTagName('Input');
			if(input[0].value){
				if(btnOpt[i].className == 'decrease'){
					switch (input[0].name){
							case 'optProd':
								for (var i = 0; i < prodList.length; i++) {
									if(prodList[i] == input[0].value){
										prodList.splice(i,1);
									}
								}
								//console.log(prodList);
								fillOption(productName, prodList);
								fillOption(optProduct, prodList);
								break;
							case 'optUnit':
								for (var i = 0; i < unitsList.length; i++) {
									if(unitsList[i] == input[0].value){
										unitsList.splice(i,1);
									}
								}
								fillOption(unitMenu, unitsList);
								fillOption(optUnits, unitsList);
								break;
							case 'optType':
								
								var rem = removeTypeTable(input[0].value);
								console.log(rem);
								if(rem){
									for (var i = 0; i < typeList.length; i++) {
										if(typeList[i] == input[0].value){
											typeList.splice(i,1);
										}
									}
									fillOption(typeItem, typeList);	
									fillOption(optType, typeList);	
								}															
								break;
					}				
					
				} else{
					switch (input[0].name){
							case 'optProd':

								if(checkDubbleOptionData(prodList, input[0].value)){
									prodList.push(input[0].value);									
									fillOption(productName, prodList);
									fillOption(optProduct, prodList);
									console.log(prodList);
								}
								break;
							case 'optUnit':
								unitsList.push(input[0].value);
								fillOption(unitMenu, unitsList);
								fillOption(optUnits, unitsList);
								//console.log(unitsList);
								break;
							case 'optType':
								typeList.push(input[0].value);
								fillOption(typeItem, typeList);	
								fillOption(optType, typeList);
								createOneTable(input[0].value);
								break;
					}					
				}	
			setObjectData();
			}
		}
	}	
	evt.preventDefault();
}
var clearBtn = document.getElementById('removeData');
clearBtn.addEventListener('click', removeAll, false);



function removeAll(e){
	//confirm('All your data will be remove!');
	var message;
	if(lang == 'en')message = 'All your data will be remove!';
	else message = 'Усі Ваші дані будуть видаленні!';
	if(confirm(message)){
		localStorage.removeItem('fridge');
		productArray = [];
		rowArray = [];
		while(tFreez.firstChild){
			tFreez.removeChild(tFreez.firstChild);
		}
		for (var i = 0; i < tableArray.length; i++) {
			while(tableArray[i].firstChild){
			tableArray[i].removeChild(tableArray[i].firstChild);
			}
			
		}
	}
}


})();




  
