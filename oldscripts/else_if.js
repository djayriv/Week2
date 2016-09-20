var studentScore = 85

if (studentScore >= 90) {
    console.log("Congrats! You got an A!");
} else if (studentScore >= 80){
    console.log("Sweet! Keep it up you earned a B!");
} else if (studentScore >= 70){
    console.log("Study harder, you got a C");
} else if (studentScore >= 60){
    console.log("Buckle down you have a D");
} else if (studentScore <= 59){
    console.log("We need to discuss your grade. Currently you have an F")
}

/*
Create an if statement that has several conditions.
 Pretend that we will play four total games next year against the patriots.
 Deal with the Patriots record versus our record In other words, if our record was better, 
 talk some smack. If not, you should still talk some smack, but in 
 a different way. If the records were the same, talk some smack. You should
 also deal with the off chance that we don't play at all(i.e., a lockout)
 
 */

var timesWeBeatPatriotsLastSeason = 1;
var timesTheyBeatUs = 8;

if (timesWeBeatPatriotsLastSeason > timesTheyBeatUs) {
	console.log("We are just better at football.");
} else if (timesTheyBeatUs > timesWeBeatPatriotsLastSeason) {
	console.log("Yea, well Andrew Luck was hurt.");
} else if (timesWeBeatPatriotsLastSeason == timesTheyBeatUs) {
	console.log("They were really lucky.");
} else {
	console.log("Patriots just cheat.");
}
