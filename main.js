$(document).ready(function(){
	$(".grid").hover(function(){
		$(this).css("background-color", "black");
	});
});

function color(){
	$(".grid").hover(function(){
		$(this).css("background-color", "black");
	});
}
 
var val = 32;

for(i = 0; i < val; i++){
	var row = document.createElement("div");
	row.className = "row";
	row.setAttribute("style","width:" + 400 + "px; height:"+(400/val)+"px");
	for(j = 0; j < val; j++){
		var col = document.createElement("div");
		col.className = "grid"
		col.setAttribute("style","width:" + (400/val) + "px; height:" + (400/val) + "px");
		row.appendChild(col);
	}
	document.getElementById("main").appendChild(row);
}

function process(){
	console.log("here");
	for(i = 0; i < val; i++){
		var row = document.createElement("div");
		row.className = "row";
		row.setAttribute("style","width:" + 400 + "px; height:"+(400/val)+"px");
		for(j = 0; j < val; j++){
			var col = document.createElement("div");
			col.className = "grid"
			col.setAttribute("style","width:" + (400/val) + "px; height:" + (400/val) + "px");
			row.appendChild(col);
		}
		document.getElementById("main").appendChild(row);
	}
	color();
}


function myFunction() {
	
    var gridValue = prompt("Please enter your grid value:", val);
    if (gridValue == null || gridValue == "") {
        val = 16;
    } else {
        val = parseInt(gridValue);
    }
    
    var elements = document.getElementsByClassName("grid");
    console.log(elements.length);
    while(elements[0]){
    	elements[0].parentNode.removeChild(elements[0]);
    }
    var rows = document.getElementsByClassName("row");
    while(rows[0]){
    	rows[0].parentNode.removeChild(rows[0]);
    }
    process();
}
	


