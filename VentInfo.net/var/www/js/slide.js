/*
 slide.js
 Nicholas Poorman - 2010
 This is the jquery javascript script that controls the sliding panel at the top of the index page
 This script is not yet finished as live validation should be done on the forms as data is entered
	The forms use ajax calls to POST their data to the respective scripts
*/

$(document).ready(function() {
	
	// Expand Panel
	$("#open").click(function(){
		$("div#panel").slideDown("slow");
	
	});	
	
	// Collapse Panel
	$("#close").click(function(){
		$("div#panel").slideUp("slow");	
	});		
	
	// Switch buttons from "Log In | Register" to "Close Panel" on click
	$("#toggle a").click(function () {
		$("#toggle a").toggle();
	});		
		
	//control the registration form
	$(".bt_register").click(function() {
		var name = $("input#signup").val();
		var email = $("input#email").val();		
		var dataString = 'name='+ name + '&email=' + email;
		
		//alert('it worked');
				
		$.ajax({  
			type: "POST",
			url: "./register/show",
			data: dataString,
			success: function(ret) {
				$('#panel').html(ret)
					.hide()
					.fadeIn('slow', function() {
					});
			}
		});
	return false;		
	});
	
	//control the login form
	$(".bt_login").click(function() {
		var name = $("input#log").val();
		var password = $("input#pwd").val();		
		var dataString = 'name='+ name + '&password=' + password;
		
		//alert('it worked');
				
		$.ajax({  
			type: "POST",
			url: "./login/show",
			data: dataString,
			success: function(ret) {
				$('#panel').html(ret)
					.hide()
					.fadeIn('slow', function() {
					});
			}
		});
	return false;		
	});


});
