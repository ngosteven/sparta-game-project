$(function(){

	//alert("Yo");
	var move1 = false;
	var move2 = false;
	var tiles = $(".peg");

	

	tiles.on("click", function(event){
		if(move1 === false){
			move1 = $(this);
			console.log(move1.attr("data-num"));
		} else if(move1 !== false){
			move2 = $(this);
			console.log(move2.attr("data-num"));



			//console.log(move2.attr("#box5"));
/*			move1 = $(move1).html("");
			move2 = $(move2).html("");*/
			move1 = false;
			move2 = false;	
		}
	});
	}
);

function checkValidMove(){
	var id = parseInt(this.id); //19
    --id; 
	var preHop = $("#box" + id); //box18
	move2 = $(this);
	console.log("preHop");
};
