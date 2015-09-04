//Begin with the document ready function
$(function(){

//Begin work on the Checking Account
 var deposit = 0
 var checkingBalance = $('#checkingBalance');
		//Checking account deposit function
$('#depositChecking').on('click', function(){
	 var amountChecking = parseInt($('#amountChecking').val());
	 deposit += amountChecking;
	 $('#checkingBalance').html(deposit);

});
 $('#withdrawChecking').on('click', function(){
 	var amountChecking = parseInt($('#amountChecking').val());
 	if($('#amountChecking').val() > $('#checkingBalance').val()){
 		$('#checkingBalance').html(0);
 	}
 	deposit -= amountChecking;
 	$('#checkingBalance').html(deposit);

 });

 
 //redo everything for saving balance and use if statements to stop at zero

			//Get value from the amountChecking input field

			//On click of the depositChecking button

				//Take that value and add it to the existing value in the checkingBalance div

		//Checking account withdrawl funtion 

			//Get value from the amountChecking input field
			
			//On click of the withdrawChecking button

				// If that value is greater than the value in the account ignore that action
				// In other words if this would put the account into a negative balance do not allow it

				//Else subtract that value from the current amount in the checking account

	//Begin work on the Savings account

		//Savings account deposit function

		 		//Get value from the amountSavings input field

		 		//On click of the depositSavings button

		 			//Take that value and add it to the existing value in the savingsBalance div

		//Savings account withdraw funtion 

		 		//Get value from the amountSavings input field
				
		 		//On click of the withdrawl button

		 			//If that value is greater than the value in the account ignore that action
		 			//In other words if this would put the account into a negative balance do not allow it

		 			//Else subtract that value from the current amount in the savings account
});



// Bonus-- get the two accounts to work with each other and allow for overdraft protection

// Double Bonus-- This isnt very DRY.  Using the keyword "this" see if you can make the withdraw and deposit functions work for both accounts

