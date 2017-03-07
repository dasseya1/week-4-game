var mainRandNumber = Math.floor((Math.random() * 120) + 19);
var firstRandNumber;
var secondRandNumber;
var thirdRandNumber;
var forthRandNumber;
var totalScore = 0;
var wins = 0;
var losses = 0;

function load () {
  $('#randomnumber').html('<p>'+ mainRandNumber + '</p>');
};
 
window.onload = load;


$('#picture_1').on('click', function(){
	firstRandNumber = Math.floor((Math.random() * 12) + 1);
	totalScore += firstRandNumber;
	console.log(totalScore);
	$('#playerscore').html('<p>'+ totalScore +'</p>');
	$('#result').html('<p></p>');
		if (mainRandNumber === totalScore) {
			resetwin();
    	}
   		else if (totalScore > mainRandNumber) {
   			resetloss();
		}
});

$('#picture_2').on('click', function(){
	secondRandNumber = Math.floor((Math.random() * 12) + 1);
	totalScore += secondRandNumber;
	console.log(totalScore);
	$('#playerscore').html('<p>'+ totalScore +'</p>');
	$('#result').html('<p></p>');
		if (mainRandNumber === totalScore) {
			resetwin();
    	}
   		else if (totalScore > mainRandNumber) {
   			resetloss();
		}
});

$('#picture_3').on('click', function(){
	thirdRandNumber = Math.floor((Math.random() * 12) + 1);
	totalScore += thirdRandNumber;
	console.log(totalScore);
	$('#playerscore').html('<p>'+ totalScore +'</p>');
	$('#result').html('<p></p>');
		if (mainRandNumber === totalScore) {
			resetwin();
    	}
   		else if (totalScore > mainRandNumber) {
   			resetloss();
		}
});

$('#picture_4').on('click', function(){
	forthRandNumber = Math.floor((Math.random() * 12) + 1);
	totalScore += forthRandNumber;
	console.log(totalScore);
	$('#playerscore').html('<p>'+ totalScore +'</p>');
	$('#result').html('<p></p>');
		if (mainRandNumber === totalScore) {
			resetwin();
    	}
   		else if (totalScore > mainRandNumber) {
   			resetloss();
		}
});

function resetloss() {
	losses++;
	firstRandNumber = Math.floor((Math.random() * 12) + 1);
	secondRandNumber = Math.floor((Math.random() * 12) + 1);
	thirdRandNumber = Math.floor((Math.random() * 12) + 1);
	forthRandNumber = Math.floor((Math.random() * 12) + 1);	
	mainRandNumber = Math.floor((Math.random() * 120) + 19);	
	$('#result').html('<p>You lost!!</p>');
	$('#playerscore').html('<p>0</p>');
	$('#lscore').html('<span>'+ losses + '</span>');
	$('#randomnumber').html('<p>'+ mainRandNumber + '</p>');
}

function resetwin() {
	wins++;
	firstRandNumber = Math.floor((Math.random() * 12) + 1);
	secondRandNumber = Math.floor((Math.random() * 12) + 1);
	thirdRandNumber = Math.floor((Math.random() * 12) + 1);
	forthRandNumber = Math.floor((Math.random() * 12) + 1);
	mainRandNumber = Math.floor((Math.random() * 120) + 19);
	$('#result').html('<p>You won!!</p>');
	$('#playerscore').html('<p>0</p>');
	$('#wscore').html('<span>'+ wins + '</span>');
	$('#randomnumber').html('<p>'+ mainRandNumber + '</p>');
}
 

