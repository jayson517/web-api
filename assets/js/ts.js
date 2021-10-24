$(document).ready(function(){


/**
 * ========================== Phone Calls - Search Lab Records ==========================
 */


	$('#btnClear').on("click", function(){
		clearSearchFields();
	});

	$('.txtS, #txtFa').keypress(function (e) {
		var key = e.which;
		if(key == 13)  // the enter key code
		{
			$("#btnProceed").click();
			return false;  
		}
	}); 


	function clearSearchFields()
	{
		$("#txtFn").val('');
		$("#txtAccreno").val('');
		$("#txtFa").val('');
		$("#txtRep").val('');
	}

	

});