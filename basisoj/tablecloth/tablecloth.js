

this.tablecloth = function(){
	
	// CONFIG 
	
	// if set to true then mouseover a table cell will highlight entire column (except sibling headings)
	var highlightCols = true;
	
	// if set to true then mouseover a table cell will highlight entire row	(except sibling headings)
	var highlightRows = false;	
	
	// if set to true then click on a table sell will select row or column based on config
	var selectable = true;
	
	// this function is called when 
	// add your own code if you want to add action 
	// function receives object that has been clicked 
	this.clickAction = function(obj){
		//alert(obj.innerHTML);
		
	};


	
	// END CONFIG (do not edit below this line)
	
	
	var tableover = false;
	this.start = function(){
		var tables = document.getElementsByTagName("table");
		for (var i=0;i<tables.length;i++){
			tables[i].onmouseover = function(){tableover = true};
			tables[i].onmouseout = function(){tableover = false};			
			rows(tables[i]);
		};
	};
	
	this.rows = function(table){
		var css = "";
		var tr = table.getElementsByTagName("tr");
			for (var i=0;i<tr.length;i++){
			css = (css == "odd") ? "even" : "odd";
			tr[i].className = css;
			var arr = new Array();
       		for(var j=0;j<tr[i].childNodes.length;j++){				
				if(tr[i].childNodes[j].nodeType == 1) arr.push(tr[i].childNodes[j]);
			};		
			for (var j=0;j<arr.length;j++){				
				arr[j].row = i;
				arr[j].col = j;
				if(arr[j].innerHTML == "&nbsp;" || arr[j].innerHTML == "") arr[j].className += " empty";					
				arr[j].css = arr[j].className;
			};	
/*				arr[j].onmouseover = function(){
					over(table,this,this.row,this.col);
				};
				arr[j].onmouseout = function(){
					out(table,this,this.row,this.col);
				};
				arr[j].onmousedown = function(){
					down(table,this,this.row,this.col);
				};
	this.check3 = function(obj){
		return (obj.className) ? (obj.className.indexOf("selected") == -1) : true; 
	};	*/
	
};	
};
    var col=document.getElementsByClassName("std_state");
	var len=col.length;
	alert(len);
	for (var i=0;i<len;i++){
		if (col[i].innerHTML=="Accepted") {col[i].style.color="green";}
		if (col[i].innerHTML=="WrongAnswer") {col[i].style.color="red";}
		if (col[i].innerHTML=="TimeLimitExceeded") {col[i].style.color="purple";}
		if (col[i].innerHTML=="CompileError") {col[i].style.color="gold";}
		if (col[i].innerHTML=="MemoryLimitExceeded") {col[i].style.color="#00008B";}
	}
	start();

};

/* script initiates on page load. */


window.onload = tablecloth;
