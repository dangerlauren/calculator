//Begin with the document ready function
$(function(){

 var input = 0
 
 var result = $('#resultCalc');

 	 function clearInputs(){
	 	$('#calculator').trigger('reset');
	 }
	 //  function clearOutputs(){
	 // 	$('#resultCalc');
	 // }

// addition
		
$('#addCalc').on('click', function(){
	 var amountAdd = parseInt($('#amountAdd').val());
	 if(isNaN(amountAdd)){
	 	amountAdd = 0;
	 }
	 input += amountAdd;
	 $('#resultCalc').html(input);
	 clearInputs();
});

// subtraction

 $('#subtractCalc').on('click', function(){
 	var amountAdd = parseInt($('#amountAdd').val());
 	if(isNaN(amountAdd)){
	 	amountAdd = 0;
	 }
 	input -= amountAdd
 	$('#resultCalc').html(input);
 	clearInputs();
 });

// multiply

  $('#multiplyCalc').on('click', function(){
 	var amountAdd = parseInt($('#amountAdd').val());
 	if(isNaN(amountAdd)){
	 	amountAdd = 0;
	 }
 	input *= amountAdd
 	$('#resultCalc').html(input);
 	clearInputs();
 });

// divide

   $('#divideCalc').on('click', function(){
 	var amountAdd = parseInt($('#amountAdd').val());
 	if(isNaN(amountAdd)){
	 	amountAdd = 0;
	 }
 	input /= amountAdd
 	$('#resultCalc').html(input);
 	clearInputs();
 });
 
 //clears input field when clear button is clicked
 
$('#clearCalc').on('click', function () {
    input = 0;
    $('#resultCalc').html(input);
});

// trying to make an equals button work

// $('#equalsCalc').on('click', function () {
//     result = ;
//     $('#resultCalc').html(result);
// });
 
});