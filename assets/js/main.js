$(document).ready(function(){

	activeLink('.li-mainDash');

	$('.li-mainDash').on("click", function(){
		activeLink('.li-mainDash');
	});

	$('.li-mainLogs').on("click", function(){
		activeLink('.li-mainLogs');
	});

	$('.li-mainReport').on("click", function(){
		activeLink('.li-mainReport');
	});

	$('.li-mainWebsite').on("click", function(){
		activeLink('.li-mainWebsite');
	});

	function activeLink(htmlElement)
	{
		let newElement = "";

		const arrLists = [
			{name : '.li-mainDash', value : '.cont-mainDash'},
			{name : '.li-mainLogs', value : '.cont-viewLogs'},
			{name : '.li-mainReport', value : '.cont-genReport'},
			{name : '.li-mainWebsite', value : '.cont-webApi'}
		];

		arrLists.reduce((acc, element) => {
			if(!(element.name == htmlElement))
			{
				$(element.name).css({
					'color': '#ececec',
					'pointer-events' : 'all', 
					'cursor' : 'pointer'
				});

				$(element.value).slideUp("slow");
			}
			else
			{
				$(element.value).slideDown("slow");
				return newElement = element.name;
			}

			console.log("New element" + newElement);

		}, {});

		$(newElement).css({
			'color' : 'yellow',
			'pointer-events' : 'none', 
			'cursor' : 'default'
		});
	}
});