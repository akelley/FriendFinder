var friendsData = require('../data/friends.js');

module.exports = function(app){
	app.get('/api/friends', function(req, res){
		res.json(friendsData);
	});

	app.post('/api/friends', function(req, res){
		var lowest = 40;	// start with maximum score
		var index = 0;
		var diff = 0;
		
		for(var i = 0; i < friendsData.length; i++){
			diff = 0;	
			for(var j = 0; j < 10; j++){
				diff += Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(req.body.scores[j]));
			}
			
			if(diff < lowest){
				lowest = diff;
				index = i;
			}
		// console.log("Diff: " + diff);
		// console.log("Lowest score: " + lowest);
		// console.log("Index: " + index);
		}
		friendsData.push(req.body);
		res.json(friendsData[index]);
	});

	app.post('/api/clear', function(){	// for clearing the friendData file
		friendData = [];
		//console.log(friendsData);
	});
};