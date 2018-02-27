$(function(){
	var move1 = false;
	var move2 = false;
	var move1sum;
	var move2sum;
	var value = false;
	var tiles = $(".peg");
	var hopped;
	var counter = 0;
		tiles.on("click", function(event){
			if(move1 == false){
				move1 = $(this);
				move1sum = (move1.attr("data-num"));
				value = $(this).html();
				console.log(move1sum);	
				if(value == "_"){
					alert("invalid move1");
					move1 = false;
				}
			} else if(move1 !== false){
				move2 = $(this);
				move2sum = (move2.attr("data-num"));
				value = $(this).html();
				console.log(move2sum);
				if(value == "O"){
					alert("invalid move2");
					move1 = false;
					move2 = false;
				} else if(Math.abs(move1sum-move2sum) ==2){
					hopped = (parseInt(move1sum)+parseInt(move2sum))/2;
					var hoppedBox = ("#box"+hopped);
					if($(hoppedBox).html() == "_"){
						alert("Invalid movehop");
						move1 = false;
						move2 = false;
					} else {
						$(hoppedBox).html("_");
						$(move1).html("_");
						$(move2).html("O");
						move1 = false;
						move2 = false;
						//console.log(move1 + " " + move2);
						counter = counter + 1;
						console.log(counter);
					}
				} else if(Math.abs(move1sum-move2sum) ==14){
					hopped = (parseInt(move1sum)+parseInt(move2sum))/2;
					var hoppedBox = ("#box"+hopped);
					if($(hoppedBox).html() == "_"){
						alert("Invalid movehop");
						move1 = false;
						move2 = false;
					} else {
						$(hoppedBox).html("_");
						$(move1).html("_");
						$(move2).html("O");
						move1 = false;
						move2 = false;
						//console.log(move1 + " " + move2);
						counter = counter + 1;
						console.log(counter);
					}
				} else {
					alert("Invalid move");
					move1 = false;
					move2 = false;
				}
			}
		});
	}
);