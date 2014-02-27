/*historic.js*/


/* 

Constructor: Historic container

Arguments:
	NA

Return:
	NA
*/
function Historic(){
	this.elementArray = []
}


/*

Description : Add an element in the list

Arguments :
	timestamp : Time the uri is accessed
	uri : The uri accessed
	endpoint : The endpoint 

Return:
	NA
*/
Historic.prototype.add = function(timeStamp,uri,endpoint){
	this.elementArray.push([timeStamp,uri,endpoint])
}

/*

Description : Remove an element from the list

Arguments :
	index : Index of the element to remove

Return :
	The removed element
*/

Historic.prototype.remove = function(index){
	return this.elementArray.splice(index,1);
}


/*

Description : Access the elements of the history

Arguments :
	NA

Return :
	The list of the elements

*/
Historic.prototype.getElements = function(){
	return this.elementArray;
}





/*

Description : Return all accessed endpoints

Arguments :
	NA

Return :
	List of endpoints
*/
Historic.prototype.getEndpoints = function(){

}

/*

Description : Returns the list of element accessed between 2 dates

Arguments : 
	startDate : Lower bracket
	endDate : Upper bracket

Return :
	An array of elements

*/
Historic.prototype.getElementsByDate=function(startDate,endDate){

}


/*

Description : 

Arguments :
	endpoint : The specific endpoint the user wants the element from

Return :
	An array of elements

*/
Historic.prototype.getElementsByEndpoint=function(endpoint){
}



/*

Description : Save the historic on the device 

Arguments : 
	fileName???? : 

Return :
	NA

*/
Historic.prototype.save=function(fileName){
	return 0
}


/*

Description : Load the historic from the device

Arguments :
	fileName??? :

Return :
	NA

*/
Historic.prototype.load=function(fileName){
	return 0;
}








////////////////////////////// OLD HISTORIC CODE ////////////////////////////////////


/* Append to historic scroll the element a visited element */
/*var historicArray = [];*/

/*function historicPush(stringElem){*/

/*var indexOfElemen = historicArray.indexOf(stringElem);*/

/*// alert(stringElem);*/

/*if(indexOfElemen > -1){*/
/*historicArray.splice(indexOfElemen,1);*/
/*}*/

/*historicArray.push(stringElem);*/

/*$('#historic').empty();*/

/*for(var i in historicArray){*/
/*$('#historic').prepend(historicArray[i]);*/
/*console.log(historicArray[i]);*/
/*};*/

/*// $('#historic').trigger("updatelayout");*/

/*$('#historic ul').trigger("refresh");*/

/*}*/


// function eventHistoric (){
//   $('#historic li').on("click", function(){
//     alert("YO");
//   });
// }
