$(function(){
	var hopped;
	var move1sum;
	var move2sum;
	var move1 = false;
	var move2 = false;
	var value = false;
	var moves = 0;
	var totalSeconds = 0;
	var moved = $("#place");
	var tiles = $(".peg");
	var finish = $(".buttonEnd");
	var clear = $(".buttonClear");
	var minutesLabel = document.getElementById("minutes");
	var secondsLabel = document.getElementById("seconds");
	var audio = new Audio('jazz.mp3');
	
	audio.play();

	finish.on("click", function(event){
		var ballCount = 0;
		for (var i = 0; i < tiles.length; i++) {
			if($(tiles[i]).html() == "O"){
				ballCount++;
			}
		}
		alert("You finished with " + ballCount + " left on the board");
		location.reload();
	});

	setInterval(setTime, 1000);
	function setTime() {
	  	++totalSeconds;
	 	secondsLabel.innerHTML = pad(totalSeconds % 60);
	  	minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
	}

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
			move1 = $(this);
			move1sum = (move1.attr("data-num"));
			value = $(this).html();
			$(this).css('background','darkred');
			if(value == "_"){
				alert("invalid move1");
				$(move1).css('background','');
				move1 = false;
			}

		} else if(move1 !== false){
			move2 = $(this);
			move2sum = (move2.attr("data-num"));
			value = $(this).html();

			if(value == "O"){
				alert("invalid move2");
				$(move1).css('background','');
				move1 = false;
				move2 = false;

			} else if(Math.abs(move1sum-move2sum) ==2){
				hopped = (parseInt(move1sum)+parseInt(move2sum))/2;
				var hoppedBox = ("#box"+hopped);
				$(move1).css('background','');

				if($(hoppedBox).html() == "_"){
					alert("Invalid movehop");
					$(move1).css('background','');
					move1 = false;
					move2 = false;

				} else {
					$(hoppedBox).html("_");
					$(move1).html("_");
					$(move2).html("O");
					move1 = false;
					move2 = false;
					moves++;
					$(moved).html(moves);

					if (moves >= 31){
						alert("You beat the board!");
					}					
				}

			} else if(Math.abs(move1sum-move2sum) ==14){
				hopped = (parseInt(move1sum)+parseInt(move2sum))/2;
				var hoppedBox = ("#box"+hopped);
				$(move1).css('background','');

				if($(hoppedBox).html() == "_"){
					alert("Invalid movehop");
					$(move1).css('background','');
					move1 = false;
					move2 = false;

				} else {
					$(hoppedBox).html("_");
					$(move1).html("_");
					$(move2).html("O");
					move1 = false;
					move2 = false;
					moves++;
					$(moved).html(moves);

					if (moves >= 31){
						alert("You beat the board!");
					}
				}

			} else {
				alert("Invalid move");
				$(move1).css('background','');
				move1 = false;
				move2 = false;
			}
		}
	});
});