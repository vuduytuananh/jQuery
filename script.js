$(document).ready(function(){
$("#button").on('click', function(event) {
		$.post("/ajax",{}, function(data) {
			$("#result").append(data);
		}).error(function() {
			alert("There is something wrong with the server");
		}).success(function(){
			alert("request successfully");
		}).complete(function(){
			alert("done, tada");
		});

		$.ajax({
			url: '/ajax',
			type: 'default GET (Other values: POST)',
			dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
			data: {param1: 'value1'},
		})
		.done(function() {
			console.log("success");
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
		
		
});
});