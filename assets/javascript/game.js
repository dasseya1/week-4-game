var mainRandNumber = Math.floor((Math.random() * 101) + 19);
var wins = 0;
var losses = 0;
var totalScore = 0;
firstRandNumber = Math.floor((Math.random() * 11) + 1);
secondRandNumber = Math.floor((Math.random() * 11) + 1);
thirdRandNumber = Math.floor((Math.random() * 11) + 1);
forthRandNumber = Math.floor((Math.random() * 11) + 1);

$(document).ready(function() {
    $('#randomnumber').html(mainRandNumber);
    $('#playerscore').html(totalScore);
    $('#picture_1').click(function() {
        totalScore += firstRandNumber;
        numAdd();
      $('#playerscore').html(totalScore);
    });
    $('#picture_2').click(function() {
        totalScore += secondRandNumber;
        numAdd();
        $('#playerscore').html(totalScore);
    });
    $('#picture_3').click(function() {
        totalScore += thirdRandNumber;
        numAdd();
        $('#playerscore').html(totalScore);
    });
    $('#picture_4').click(function() {
        totalScore += forthRandNumber;
        numAdd();
        $('#playerscore').html(totalScore);
    });
});

function numAdd() {
    if (totalScore == mainRandNumber) {
        $('#result').html("<p>You Won!</p>");
        wins++;
        $('#wscore').html(wins);
        reset();
    } else if (totalScore > mainRandNumber) {
        $('#result').html("<p>You Lost!</p>");
        losses++;
        $('#lscore').html(losses);
        reset();
    }
};

function reset() {
    totalScore = 0;
    firstRandNumber = Math.floor((Math.random() * 11) + 1);
    secondRandNumber = Math.floor((Math.random() * 11) + 1);
    thirdRandNumber = Math.floor((Math.random() * 11) + 1);
    forthRandNumber = Math.floor((Math.random() * 11) + 1);    
    mainRandNumber = Math.floor((Math.random() * 101) + 19);    
    $('#randomnumber').html(mainRandNumber);
};


