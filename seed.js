// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

// var db = require('./models');

// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })


var db = require('./models');

var new_videogames = [
{
  Title: "The Legend of Zelda: A Link to the Past",
  Console: "SNES",
  Year: "1991",
  Multiplayer: false,
},
{
  Title: "Mega Man X",
  Console: "SNES",
  Year: "1993",
  Multiplayer: false,
},
{
  Title: "Super Mario 64",
  Console: "Nintendo 64",
  Year: "1996",
  Multiplayer: false,
},
{
  Title: "Age of Empires II",
  Console: "PC",
  Year: "1999",
  Multiplayer: true,
},
{
  Title: "Final Fantasy VII",
  Console: "Playstation",
  Year: "1997",
  Multiplayer: false,
}
];


db.Videogames.remove({}, function(err, videogames){
	if(err){console.log('Could not remove',err);}
	else{
		db.Videogames.create(new_videogames, function(err, myVideogames){
			if(err){return console.log('Unable to add game ', err);}
			process.exit();
		});
	}
});