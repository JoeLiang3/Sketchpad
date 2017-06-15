var newDiv = document.createElement("div");
for(i = 0; i < 15; i++){
	var row = document.createElement("div");
	row.id = "row";
	row.setAttribute("style","width: 400px; height:25px");
	for(j = 0; j < 15; j++){
		var col = document.createElement("div");
		col.id = "grid"
		col.setAttribute("style","width: 25px; height:25px");
		row.appendChild(col);
	}
	document.getElementById("main").appendChild(row);
}
console.log(newDiv);
