var link = document.getElementById('getNumber'); // Gets the link
link.onclick = getNumber; // Runs the function on click

var bingoSquare1 = ['#1x1', '#1x2', '#1x3', '#1x4', '#1x5'];
var bingoSquare2 = ['#2x1', '#2x2', '#2x3', '#2x4', '#2x5'];
var bingoSquare3 = ['#3x1', '#3x2', '#3x3', '#3x4', '#3x5'];
var bingoSquare4 = ['#4x1', '#4x2', '#4x3', '#4x4', '#4x5'];
var bingoSquare5 = ['#5x1', '#5x2', '#5x3', '#5x4', '#5x5'];

var userB = [0, 0, 0, 0, 0, 0,];
var userI = [0, 0, 0, 0, 0, 0,];
var userN = [0, 0, 0, 0, 0, 0,];
var userG = [0, 0, 0, 0, 0, 0,];
var userO = [0, 0, 0, 0, 0, 0,];

var allNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75];
// initialize array
var caller = ["<b>Previously Called: </b><br>"];
var actualCaller = [0];

function getSingleNumber(min,max) {
    var randomnumber = Math.floor(Math.random() * (max - min + 1)) + min; // Generates random number
    return randomnumber; // Returns false just to tidy everything up
}

function deleteElement(element){
	var index = allNumbers.indexOf(element);
	if (index > -1) {
    	allNumbers.splice(index, 1);
	}
}

function callNumber(){
	var arrayLength = allNumbers.length;
	var Index = getSingleNumber(0,arrayLength);
	var numberCall = allNumbers[Index];
	if (allNumbers.length == 0){
		return 0;
	}
	actualCaller.push(numberCall);
		if ((1 <= numberCall) && (numberCall <= 15)){
			str1 = "B-";
			str2 = numberCall;
			str3 = " ";
			var str = str1.concat(str2);
			var res = str.concat(str3); 
			$('#numberCall').html(str);
			caller.push(res);
			$('#listNum').html(caller);
			deleteElement(numberCall);
			return 0;
		}
		if ((16 <= numberCall) && (numberCall <= 30)){
			str1 = "I-";
			str2 = numberCall;
			str3 = " ";
			var str = str1.concat(str2);
			var res = str.concat(str3); 
			$('#numberCall').html(str);
			caller.push(res);
			$('#listNum').html(caller);
			deleteElement(numberCall);
			return 0;
		}
		if ((31 <= numberCall) && (numberCall <= 45)){
			str1 = "N-";
			str2 = numberCall;
			str3 = " ";
			var str = str1.concat(str2);
			var res = str.concat(str3); 
			$('#numberCall').html(str);
			caller.push(res);
			$('#listNum').html(caller);
			deleteElement(numberCall);
			return 0;
		}
		if ((46 <= numberCall) && (numberCall <= 60)){
			str1 = "G-";
			str2 = numberCall;
			str3 = " ";
			var str = str1.concat(str2);
			var res = str.concat(str3); 
			$('#numberCall').html(str);
			caller.push(res);
			$('#listNum').html(caller);
			deleteElement(numberCall);
			return 0;
		}
		if ((61 <= numberCall) && (numberCall <= 75)){
			str1 = "O-";
			str2 = numberCall;
			str3 = " ";
			var str = str1.concat(str2);
			var res = str.concat(str3); 
			$('#numberCall').html(str);
			caller.push(res);
			$('#listNum').html(caller);
			deleteElement(numberCall);
			return 0;
		}
	
}

function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
}

function createRow(array, min, max, bingoSquare){
	while (hasDuplicates(array) == true){
		for (count = 0; count < array.length; count++){
			var randomnumber = getSingleNumber(min,max);
			$(bingoSquare[count]).html(randomnumber);
			array[count] = randomnumber;
		}
	}
	return;

}

function getNumber() {
	createRow(userB, 1, 15, bingoSquare1);
	createRow(userI, 16, 30, bingoSquare2);
	createRow(userN, 31, 45, bingoSquare3);
	createRow(userG, 46, 60, bingoSquare4);
	createRow(userO, 61, 75, bingoSquare5);
	$(bingoSquare3[2]).html("FREE");
	userN[2] = 0;
}

function markerChecker(i, userArray){
	if (actualCaller.includes(userArray[i])){
		return true;
	}
		return false; 
}

function bingoCheck(){
	var obj = document.getElementById("bingotype");
	var selected = obj.options[obj.selectedIndex].text
		if (selected == "Vertical"){
			if ((markerChecker(0, userB)) &&
    			(markerChecker(1, userB)) &&
    			(markerChecker(2, userB)) &&
    			(markerChecker(3, userB)) &&
    			(markerChecker(4, userB))) {
    				reDirect();
    				return 0;
    			}
    		if ((markerChecker(0, userI)) &&
    			(markerChecker(1, userI)) &&
    			(markerChecker(2, userI)) &&
    			(markerChecker(3, userI)) &&
    			(markerChecker(4, userI))) {
    				reDirect();
    				return 0;
    			} 
    		if ((markerChecker(0, userN)) &&
    			(markerChecker(1, userN)) &&
    			(markerChecker(2, userN)) &&
    			(markerChecker(3, userN)) &&
    			(markerChecker(4, userN))) {
    				reDirect();
    				return 0;
    			} 
    		if ((markerChecker(0, userG)) &&
    			(markerChecker(1, userG)) &&
    			(markerChecker(2, userG)) &&
    			(markerChecker(3, userG)) &&
    			(markerChecker(4, userG))) {
    				reDirect();
    				return 0;
    			} 
    		if ((markerChecker(0, userO)) &&
    			(markerChecker(1, userO)) &&
    			(markerChecker(2, userO)) &&
    			(markerChecker(3, userO)) &&
    			(markerChecker(4, userO))) {
    				reDirect();
    				return 0;
    			}  
    		alert("You don't have a BINGO yet! - Keep playing!");
    		return 0; 
    	}
    	if (selected == "Horizontal"){
    		for (i=0; i<6; i++){
    			if ((markerChecker(i, userB)) &&
    				(markerChecker(i, userI)) &&
    				(markerChecker(i, userN)) &&
    				(markerChecker(i, userG)) &&
    				(markerChecker(i, userO))) {
    					reDirect();
    					return 0;
    				}
    			} 
    		alert("You don't have a BINGO yet! - Keep playing!");
    		return 0; 
    	}
    	if (selected == "Diagonal"){
    		if ((markerChecker(0, userB)) &&
    			(markerChecker(1, userI)) &&
    			(markerChecker(2, userN)) &&
    			(markerChecker(3, userG)) &&
    			(markerChecker(4, userO))) {
    				reDirect();
    				return 0;
    			}
    		if ((markerChecker(4, userB)) &&
    			(markerChecker(3, userI)) &&
    			(markerChecker(2, userN)) &&
    			(markerChecker(1, userG)) &&
    			(markerChecker(0, userO))) {
    				reDirect();
    				return 0;
    			} else {
    				alert("You don't have a BINGO yet! - Keep playing!");
    				return 0; 
    			} 
    		}
    	if (selected == "Four Corners"){
    		if((markerChecker(0, userB)) &&
    			(markerChecker(4, userB)) &&
    			(markerChecker(0, userO)) &&
    			(markerChecker(4, userO))) {
    				reDirect();
    				return 0;
    		} else {
    			alert("You don't have a BINGO yet! - Keep playing!");
    			return 0; 
    		}
    	}
    	if (selected == "Full Card") {
    		var win = 0;
    		for (i=0; i<5; i++){
    			if ((markerChecker(i,userB)) &&
    				(markerChecker(i,userI)) &&
    				(markerChecker(i,userN)) &&
    				(markerChecker(i,userG)) &&
    				(markerChecker(i,userO))){
    					win = win+1;
    			}
    		}
    		if (win == 5){
    			reDirect();
    			return 0;
    		} else {
    			alert("You don't have a BINGO yet! - Keep playing!");
    			return 0; 
    		}
    	}
	}

function marker(id){
	var div = document.getElementById(id); 
	if (div.style.backgroundColor == "lightpink") {
		div.style.backgroundColor = "white";
	} else {
		div.style.backgroundColor = "lightpink";
	}
}

function reDirect() {
    location.replace("http://52.60.89.137/14aad4/bingo/congrats.html")
}