$(document).ready(function(){

/**
* 
*/
	document.querySelector('.input-dtStarted').valueAsDate = new Date();
	document.querySelector('.input-dtFinished').valueAsDate = new Date();

	let fn = $('.showEmp').attr('id');
	get_LabEmpRecords(fn);

	activeLink('.showEmp');

	$('.showEmp').on("click", function(){
		const facilityNo = $(this).attr('id');

		activeLink('.showEmp');
		get_LabEmpRecords(facilityNo);
	});

	$('.showDtk').on("click", function(){
		const facilityNo = $(".txt-facilityNo").attr('id').trim();
		const dtkregstat = "VLD";

		activeLink('.showDtk');

		get_labDtkRecords(facilityNo, dtkregstat);

	});
	
	$('.showBio').on("click", function(){
		activeLink('.showBio');
	});

	$('.genRco').on("click", function(){
		activeLink('.genRco');
	});
	
	$('.other').on("click", function(){
		activeLink('.other');
	});

	$('.v2').on("click", function(){
		activeLink('.v2');
	});

/**
 * ============================== Manual Input =================================
 */

 	$(".btn-tsManual").on("click", function(){
 		$(".cont-tsQa").slideUp("slow");
		$(".cont-tsManual").slideDown("slow");
 	});

 	$(".btn-tsCancelManual").on("click", function(){
 		$(".cont-tsManual").slideUp("slow");
		$(".cont-tsQa").slideDown("slow");

		$(".txtarea-query-tsManual").val('');
		$(".txtarea-action-tsManual").val('');
 	});



/**
 * ========================== Functions ===============================
 */

	function activeLink(htmlElement)
	{
		let newElement = "";
		let table_data = $('.tbl-tblRecordList');

		setContManualId(htmlElement);

		showTsQa(htmlElement);

		const arrLists = [
			{name : '.showEmp', 	newId : 'showEmp', 	cont : '.cont-empTs'},
			{name : '.showDtk',  	newId : 'showDtk', 	cont : '.cont-dtkTs'},
			{name : '.showBio',  	newId : 'showBio', 	cont : '.cont-bioTs'},
			{name : '.genRco',  	newId : 'genRco', 	cont : '.cont-rcoTs'},
			{name : '.other',  		newId : 'other', 	cont : '.cont-othersTs'},
			{name : '.v2',  		newId : 'v2', 		cont : '.cont-v2Ts'}
		];

		const arrSearch = [
			{name: '.showDtk', 	value : '.dtkContSearch'},
			{name : '.showEmp',	value : '.empContSearch'}
		];

		arrLists.reduce((acc, element) => {
			if(element.name == htmlElement)
			{
				arrSearch.reduce((acc, itemSearch) =>{
					if(element.name == itemSearch.name)
					{
						$(itemSearch.value).slideDown();
					}
					else
					{
						$(itemSearch.value).slideUp();
					}
				}, {});
				
				table_data.empty();
				return newElement = element.name;

			}
			else
			{
				$(element.name).css({
					'color': '#ececec',
					'pointer-events' : 'all', 
					'cursor' : 'pointer'
				});
			}
		}, {});

		$(newElement).css({
			'color' : 'yellow',
			'pointer-events' : 'none', 
			'cursor' : 'default'
		});
	}


 	function setContManualId(htmlElement)
 	{

 		checkContManualId(htmlElement)

 		const arrLists = [
 			{name : '.showEmp', newId : 'showEmp'},
			{name : '.showDtk',  newId : 'showDtk'},
			{name : '.showBio',  newId : 'showBio'},
			{name : '.genRco',  newId : 'genRco'},
			{name : '.other',  newId : 'other'},
			{name : '.v2',  newId : 'v2'}
 		];

 		arrLists.reduce((acc, element) => {
 			if(element.name == htmlElement)
 			{
		 		$(".cont-tsManual").removeAttr("id");
		 		$(".txtarea-query-tsManual").val('');
				$(".txtarea-action-tsManual").val('');

 				$(".btn-tsManual").attr("id", element.newId);
 			}
 		}, {});
 	}

 	function checkContManualId(htmlElement)
 	{
 		let btnAttrib = $(".btn-tsManual").attr("id");

  		const arrLists = [
 			{name : '.showEmp', newId : 'showEmp'},
			{name : '.showDtk',  newId : 'showDtk'},
			{name : '.showBio',  newId : 'showBio'},
			{name : '.genRco',  newId : 'genRco'},
			{name : '.other',  newId : 'other'},
			{name : '.v2',  newId : 'v2'}
 		];		

 		arrLists.reduce((acc, element) => {
 			if(element.newId == btnAttrib)
 			{
 				$(".cont-tsManual").slideUp(function(){
	 				$(".cont-tsQa").slideDown("slow");
 
 				});
 			}

 		}, {});
 	}


	function showTsQa(htmlElement)
	{
		let showElement = "";

		let arrLists = [
			{name : '.showEmp', 	cont : '.cont-empTs'},
			{name : '.showDtk',  	cont : '.cont-dtkTs'},
			{name : '.showBio',  	cont : '.cont-bioTs'},
			{name : '.genRco',  	cont : '.cont-rcoTs'},
			{name : '.other',  		cont : '.cont-othersTs'},
			{name : '.v2',  		cont : '.cont-v2Ts'}
		];

		arrLists.reduce((acc, element) => {
			if(!(element.name == htmlElement))
			{
				$(element.cont).slideUp();
			}
			else if(element.name == htmlElement)
			{
				return showElement = element.cont;
			}
			
		},{});

		$(showElement).slideDown("slow");

	}

	function get_LabEmpRecords(facilityNo)
	{
		const base_url = $("#base_url").attr('class');
		const $base_url = base_url.trim();
		console.log(facilityNo);
		const table_data = $(".tbl-tblRecordList");

		$.ajax({
			url : $base_url + 'technicalsupport/get_empDetails',
			type: "post",
			data : {facilityNo : facilityNo},
			dataType : "json",
			success : function(data){
				console.log(data);
				const dataResult = data.result;
				table_data.empty();

				table_data.append(`
						<thead class="table-primary">
							<tr>
								<th>Name</th>
								<th>Employee No.</th>
								<th>Position</th>
								<th>Employement Status</th>
								<th>User ID</th>
								<th>Password</th>
							</tr>
						</thead>
					`);

				$.each(dataResult, function(i, item){

					var fullname = item.emptitle + " " + item.empfname + " " + item.empmname + " " + item.emplname;
					var empdesignation = item.empdesignation;

					if(item.empstatus == "A"){
						var empstatus = "Active";
					}else if(item.empstatus == "I"){
						var empstatus = "Inactive";
					}

					if(empdesignation == "HEA"){
							empdesignation = "Head of Screening Lab";
						}else if(empdesignation == "COL"){
							empdesignation = "Authorized Specimen Collection"
						}else if(empdesignation == "ANA"){
							empdesignation = "Analyst"
					}


					table_data.append(`
						<tbody id="tblRecordLists">
							<tr>
								<td>${fullname}</td>
								<td>${item.empno}</td>
								<td>${empdesignation}</td>
								<td>${empstatus}</td>
								<td>${item.userid}</td>
								<td>${item.userpasswd}</td>
							</tr>
						</tbody>
						`);

					$(".tbl-tblRecordList").show();
				});

			},
			error: function(XMLHttpRequest, textStatus, errorThrown){
				console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
			} 

		});
	}

	function get_labDtkRecords(facilityNo, dtkregstat)
	{
		const base_url = $("#base_url").attr('class');
		const $base_url = base_url.trim();

		const table_data = $(".tbl-tblRecordList");

		const post_data = {
			facilityNo : facilityNo,
			dtkregstat : dtkregstat
		};

		table_data.empty();

		table_data.append(`
			<thead class="table-warning">
				<tr>
					<th>Reg No.</th>
					<th>Status</th>
					<th>Reg Date</th>
					<th>Downloaded By</th>
					<th>Downloaded Date</th>
				</tr>
			</thead>
			`);

		console.log(post_data);

		$.ajax({
			url : $base_url + "technicalsupport/get_dtkRecords",
			type : "post",
			dataType: "json",
			data : post_data,
			success : function(data){
				console.log(data);

				const dataResult = data.result;

				$.each(dataResult, function(i, item){
					table_data.append(`
					<tbody>
						<tr>
							<td>${item.dtkregno}</td>
							<td>${item.dtkregstat}</td>
							<td>${item.dtkregdt}</td>
							<td>${item.downloadedby}</td>
							<td>${item.downloadeddt}</td>>
						</tr>
					</tbody>
						`);
				})






			},
			error: function(XMLHttpRequest, textStatus, errorThrown){
				console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
			} 
		});

	}

});
