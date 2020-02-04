//builds h3's adds click event
// Write a function that captures the value of i in the for loop.
$(document).ready(function () {
    for (i = 1; i < 101; i++) {
        var h3 = $('<h3></h3>');
        h3.text('Accusation ' + i)
        $(h3).click(Accusations(i));
        $('.h3Container').append(h3);
    }
    function Accusations(index) {
        return function () {
            alert(friends[index % 5] + " killed them with a " + weapons[index % 20] + " in the " + locations[index % 10])
        }
    }
});
//create arrays for friends, locations, weapons
var friends = ['Kim', 'Maddy', 'Ryan', 'Aaron', 'Kip'];
var locations = ['Manor', 'Forest', 'Hippie Commune', 'Garden', 'Desert', 'Yurt', 'Cashmere Room', 'Greenhouse', 'Theatre', 'Graveyard'];
var weapons = ['Pitch Fork', 'Water Hose', 'Banjo', 'Microwave', 'Pumpernickle Bread', 'JumpRope', 'Toilet Lid', 'Sweatpants', 'Crucifix', 'Anaconda', 'Pickle Jar', 'Scurvy', 'Katana', 'Uma Thurman', 'Gluten', 'Taxes', 'Swordfish', 'Bowling Ball', 'The longest Ping Pong Game', 'Those Kids'];
