function shout(string){
	return string.toUpperCase();
}

function whisper(string){
	return string.toLowerCase();
}

function logShout(string){
	console.log(string.toUpperCase());
}

function logwhisper(string){
	console.log(string.toLowerCase());
}

function sayHiToGrandma(str){
	var lowercase = str.toLowerCase();
	var uppercase = str.toUpperCase();

	if str === lowercase
		return "I can't hear you!";
	else if str === uppercase
		return "YES INDEED!";
	else 
		return "I love you, too.";
}