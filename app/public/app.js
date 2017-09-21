$(".submit").on("click", function(e) {
	for(var i = 0; i < 10; i++){
		if($("#name").val().trim() == ""){
			alert("Please fill out your name.");
			return false;
		}

		if($("#question_" + (i+1)).val().trim() == ""){
			alert("Please fill out all the questions.");
			return false;
		}
	}
	pushFriend();
	e.preventDefault();
});

function pushFriend(){
	var array = [];
  for(var i = 0; i < 10; i++){
		array[i] = $("#question_" + (i+1)).val().trim();
	}

  var newFriend = {
  	name: $("#name").val().trim(),
  	photo: $("#selfie").val().trim(),
  	scores: array  	
  };

 	//console.log(newFriend);
 	var currentURL = window.location.origin;
	$.post(currentURL + "/api/friends", newFriend, function(data, status){
		$("#matchName").text(data.name);
		$("#matchImage").attr("src", data.photo);
		$('#friendModal').modal('toggle');
		//alert("Status: " + status);	
	});

	// clear the fields
	$("#name, #selfie").val("");
	for(var i = 0; i < 10; i++){
		$("#question_" + (i+1)).val("");
	}
};

function clearTable(){
	var currentURL = window.location.origin;
		$.ajax({url: currentURL + "/api/clear", method: "POST"});
};

$("#clear").on('click', function(){
	alert("Clearing tables...");
	clearTable();
	location.reload();
});