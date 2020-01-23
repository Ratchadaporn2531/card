$(document).ready(function($) {

	// hide messages 
	$(".error").hide();
	$(".success").hide();
	
	$('#registerForm input').click(function(e) {
        $(".error").fadeOut();
    });
	
	// on submit...
	$("#registerForm #submit").click(function() {
		$(".error").hide();
		
		//required:
		
		//name
		var name = $("input#personal_name").val();
		if(name == ""){
			//$("#error").fadeIn().text("Name required.");
			$('#fpersonal_name').fadeIn('slow');
			$("input#personal_name").focus();
			return false;
		}
		
		//surname
		var surname = $("input#personal_surname").val();
		if(surname == ""){
			//$("#error").fadeIn().text("Name required.");
			$('#fpersonal_surname').fadeIn('slow');
			$("input#personal_surname").focus();
			return false;
		}		

		//personal_id
		var personal_id = $("input#personal_id").val();
		if(personal_id == ""){
			//$("#error").fadeIn().text("Name required.");
			$('#fpersonal_id').fadeIn('slow');
			$("input#personal_id").focus();
			return false;
		}

		//phone
		/*var phone = $("input#personal_phone").val();
		if(phone == ""){
			//$("#error").fadeIn().text("Name required.");
			$('#fpersonal_phone').fadeIn('slow');
			$("input#personal_phone").focus();
			return false;
		}*/
		
		//mobile
		var mobile = $("input#personal_mobile").val();
		if(mobile == ""){
			//$("#error").fadeIn().text("Name required.");
			$('#fpersonal_mobile').fadeIn('slow');
			$("input#personal_mobile").focus();
			return false;
		}		
		
		

		function isValidEmailAddress(emailAddress) {
			var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
			return pattern.test(emailAddress);
		};

		
		//company_name
		var company_name = $("input#company_name").val();
		if(company_name == ""){
			//$("#error").fadeIn().text("Name required.");
			$('#fcompany_name').fadeIn('slow');
			$("input#company_name").focus();
			return false;
		}
		
		
		/*
		//company_regno
		var regno = $("input#company_regno").val();
		if(regno == ""){
			//$("#error").fadeIn().text("Name required.");
			$('#fcompany_regno').fadeIn('slow');
			$("input#company_regno").focus();
			return false;
		}
		
		//company_regdate
		var regdate = $("input#company_regdate").val();
		if(regdate == ""){
			//$("#error").fadeIn().text("Name required.");
			$('#fcompany_regdate').fadeIn('slow');
			$("input#company_regdate").focus();
			return false;
		}
		
		//company_address
		var address = $("input#company_address").val();
		if(address == ""){
			//$("#error").fadeIn().text("Name required.");
			$('#fcompany_address').fadeIn('slow');
			$("input#company_address").focus();
			return false;
		}
		
		//company_budget
		var budget = $("input#company_budget").val();
		if(budget == ""){
			//$("#error").fadeIn().text("Name required.");
			$('#fcompany_budget').fadeIn('slow');
			$("input#company_budget").focus();
			return false;
		}
		
		//company_size
		var size = $("input#company_size").val();
		if(size == ""){
			//$("#error").fadeIn().text("Name required.");
			$('#fcompany_size').fadeIn('slow');
			$("input#company_size").focus();
			return false;
		}

		
		// comments
		var comments = $("#msg").val();
		
		if(comments == ""){
			//$("#error").fadeIn().text("Email required");
			$('#fmsg').fadeIn('slow');
			$("input#msg").focus();
			return false;
		}
		*/
		
	});  
		
		
	// on success...
	 function success(){
	 	//$("#success").fadeIn();
	 	//$("#registerForm").fadeOut();
		$("#registerForm").submit();
	 }
	
    return false;
});

