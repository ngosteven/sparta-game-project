$(function(){
	var hopped;
	var move1sum;
	var move2sum;
	var move1 = false;
	var move2 = false;
	var value = false;
	var balls = 32;
	var totalSeconds = 0;
	var tiles = $(".peg");
	var moved = $("#place");
	var messageBox = ("#error");
	var finish = $(".buttonEnd");
	var startSpace = $("#box25");
	var clear = $(".buttonClear");
	var audio = new Audio('sounds/jazz.mp3');
	var minutesLabel = document.getElementById("minutes");
	var secondsLabel = document.getElementById("seconds");

	audio = new Audio('sounds/jazz.mp3'); 
	audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
	}, false);
	audio.play();

	setInterval(setTime, 1000);
	function setTime() {
	  	++totalSeconds;
	 	secondsLabel.innerHTML = pad(totalSeconds % 60);
	  	minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
	}

	finish.on("click", function(event){
		var ballCount = 0;
		for (var i = 0; i < tiles.length; i++) {
			if($(tiles[i]).html() == "n"){
				ballCount++;
			}
		}		
		$(messageBox).html("Your last game finished with " + ballCount + " left on the board");
		$(tiles).html("n");
		$(startSpace).html("0");
		$(moved).html("32");
		balls = 32;
		secondsLabel.innerHTML = "00";
		minutesLabel.innerHTML = "00";
		totalSeconds = 0;
	});

	function pad(val) {
		var valString = val + "";
		if (valString.length < 2) {
		    return "0" + valString;
		} else {
		    return valString;
		}
	}

	tiles.on("click", function(event){

		if(move1 == false){
			$(messageBox).html("");
			move1 = $(this);
			move1sum = (move1.attr("data-num"));
			value = $(this).html();
			$(this).css('background','darkred');
			if(value == "0"){
				$(messageBox).html("Invalid move");
				$(move1).css('background','');
				move1 = false;
			}

		} else if(move1 !== false){
			move2 = $(this);
			move2sum = (move2.attr("data-num"));
			value = $(this).html();

			if(value == "n"){
				$(messageBox).html("Invalid move");
				$(move1).css('background','');
				move1 = false;
				move2 = false;

			} else if(Math.abs(move1sum-move2sum) ==2){
				hopped = (parseInt(move1sum)+parseInt(move2sum))/2;
				var hoppedBox = ("#box"+hopped);
				$(move1).css('background','');

				if($(hoppedBox).html() == "0"){
					$(messageBox).html("Invalid move");
					$(move1).css('background','');
					move1 = false;
					move2 = false;

				} else {
					$(hoppedBox).html("0");
					$(move1).html("0");
					$(move2).html("n");
					move1 = false;
					move2 = false;
					--balls;
					$(moved).html(balls);

					if (balls <= 1){
						$(messageBox).html("You beat the board!");
					}					
				}

			} else if(Math.abs(move1sum-move2sum) ==14){
				hopped = (parseInt(move1sum)+parseInt(move2sum))/2;
				var hoppedBox = ("#box"+hopped);
				$(move1).css('background','');

				if($(hoppedBox).html() == "0"){
					$(messageBox).html("Invalid move");
					$(move1).css('background','');
					move1 = false;
					move2 = false;

				} else {
					$(hoppedBox).html("0");
					$(move1).html("0");
					$(move2).html("n");
					move1 = false;
					move2 = false;
					--balls;
					$(moved).html(balls);

					if (balls <= 1){
						$(messageBox).html("You beat the board!");
					}
				}

			} else {
				$(messageBox).html("Invalid move");
				$(move1).css('background','');
				move1 = false;
				move2 = false;
			}
		}
	});
});