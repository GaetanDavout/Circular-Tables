var stepTable = 0.01;
var stepModulo = 0.01;
var j = 1;
var k = 1;
var freq = 50;
var weight = 2;
var width = 250;
var height = 250;
var color = "#000000";
var backgroundColor = "#ffffff";
var nbAutoplayTable = 0;
var nbAutoplayModulo = 0;

function setStepTable()
{
	stepTable = parseFloat(document.getElementById('step_table').value);
	document.getElementById('table').step = stepTable;
}

function setStepModulo()
{
	stepModulo =  parseFloat(document.getElementById('step_modulo').value);
	document.getElementById('modulo').step = stepModulo;
}

function point(x,y)
{
	this.x = x*width + width;
	this.y = y*height + height;
}

function draw()
{
	var table = document.getElementById('table').value;
	var modulo = document.getElementById('modulo').value;
	var step = (2*Math.PI)/modulo;
	angle = 0;
	var A, B;
	
	for(var i = 0; i  < modulo; i++)
	{
		A = new point(Math.cos(angle),Math.sin(angle));
		B = new point(Math.cos(step*i*table),Math.sin(step*i*table));
		
		if(i === 0)
		{
			document.getElementById('circularTable').innerHTML = '<line x1="' + A.x + '" y1="' + A.y + '" x2 ="' + B.x + '" y2="' + B.y + '" style="stroke:' + color + ';stroke-linecap:round;stroke-width:' + weight + 'px;" />';
			//document.getElementById('circularTable').innerHTML = '<circle cx="' + width + '" cy="' + height + '" r="' + width + '" fill="white" stroke="black"/>';
		}
		document.getElementById('circularTable').innerHTML += '<line x1="' + A.x + '" y1="' + A.y + '" x2 ="' + B.x + '" y2="' + B.y + '" style="stroke:' + color + ';stroke-linecap:round;stroke-width:' + weight + 'px;" />';
		angle += step;
	}
}

function drawWhite()
{
	var table = document.getElementById('table').value;
	var modulo = document.getElementById('modulo').value;
	var step = (2*Math.PI)/modulo;
	angle = 0;
	var A, B;
	
	for(var i = 0; i  < modulo; i++)
	{
		A = new point(Math.cos(angle),Math.sin(angle));
		B = new point(Math.cos(step*i*table),Math.sin(step*i*table));
		
		if(i === 0)
		{
			document.getElementById('circularTable').innerHTML = '<line x1="' + A.x + '" y1="' + A.y + '" x2 ="' + B.x + '" y2="' + B.y + '" style="stroke:white;stroke-linecap:round;stroke-width:' + weight + 'px;" />';
			//document.getElementById('circularTable').innerHTML = '<circle cx="350" cy="350" r="350" fill="white" stroke="black"/>';
		}
		document.getElementById('circularTable').innerHTML += '<line x1="' + A.x + '" y1="' + A.y + '" x2 ="' + B.x + '" y2="' + B.y + '" style="stroke:white;black;stroke-linecap:round;stroke-width:' + weight + 'px;" />';
		angle += step;
	}
}

function drawColor()
{
	var table = document.getElementById('table').value;
	var modulo = document.getElementById('modulo').value;
	var step = (2*Math.PI)/modulo;
	angle = 0;
	var A, B;
	
	var R, V, B1;
	
	for(var i = 0; i  < modulo; i++)
	{
		A = new point(Math.cos(angle),Math.sin(angle));
		B = new point(Math.cos(step*i*table),Math.sin(step*i*table));
		
		R = Math.round(i % 255);
		V = Math.round((table*i) % 255);
		Bl = Math.round((modulo*i) % 255);
		
		if(i === 0)
		{
			document.getElementById('circularTable').innerHTML = '<line x1="' + A.x + '" y1="' + A.y + '" x2 ="' + B.x + '" y2="' + B.y + '" style="stroke:rgb(' + R + ',' + V + ',' + Bl + ');stroke-linecap:round;stroke-width:' + weight + 'px;" />';
			//document.getElementById('circularTable').innerHTML = '<circle cx="350" cy="350" r="350" fill="white" stroke="black"/>';
		}
		document.getElementById('circularTable').innerHTML += '<line x1="' + A.x + '" y1="' + A.y + '" x2 ="' + B.x + '" y2="' + B.y + '" style="stroke:rgb(' + R + ',' + V + ',' + Bl + ');black;stroke-linecap:round;stroke-width:' + weight + 'px;" />';
		angle += step;
	}
}

function callDraw()
{
	if(document.getElementById('coloration').checked)
	{
		drawColor();
	}
	else if(document.getElementById('backgroundColor').value === "0" && document.getElementById('lineColor').value === "#000000")
	{
		drawWhite();
	}
	else
	{
		draw();
	}
}

var lectureTable = true;
var pauseTable =  document.getElementById('pauseTable');

var lectureModulo = true;
var pauseModulo = document.getElementById('pauseModulo');


function setButtonTable()
{
	if(nbAutoplayTable > 1)
	{
		document.getElementById('playTable').style = "height:22px;width:22px;background-color:none;background-image:url(forward.png);background-position:center;background-size:16px;background-repeat:no-repeat;";
		document.getElementById('pauseTable').style = "height:22px;width:22px;background-color:none;background-image:url(rewind.png);background-position:center;background-size:20px;background-repeat:no-repeat;";
	}
	else if(nbAutoplayTable > 0)
	{
		document.getElementById('playTable').style = "height:22px;width:22px;background-color:none;background-image:url(forward.png);background-position:center;background-size:16px;background-repeat:no-repeat;";
		document.getElementById('pauseTable').style = "height:22px;width:22px;background-color:none;background-image:url(pause.png);background-position:center;background-size:16px;background-repeat:no-repeat;";
	}
	else
	{
		document.getElementById('playTable').style = "height:22px;width:22px;background-color:none;background-image:url(play.png);background-position:center;background-size:18px;background-repeat:no-repeat;";
		document.getElementById('pauseTable').style = "height:22px;width:22px;background-color:none;background-image:url(pause.png);background-position:center;background-size:16px;background-repeat:no-repeat;";
	}
}

function setButtonModulo()
{
	if(nbAutoplayModulo > 1)
	{
		document.getElementById('playModulo').style = "height:22px;width:22px;background-color:none;background-image:url(forward.png);background-position:center;background-size:16px;background-repeat:no-repeat;";
		document.getElementById('pauseModulo').style = "height:22px;width:22px;background-color:none;background-image:url(rewind.png);background-position:center;background-size:20px;background-repeat:no-repeat;";
	}
	else if(nbAutoplayModulo > 0)
	{
		document.getElementById('playModulo').style = "height:22px;width:22px;background-color:none;background-image:url(forward.png);background-position:center;background-size:16px;background-repeat:no-repeat;";
		document.getElementById('pauseModulo').style = "height:22px;width:22px;background-color:none;background-image:url(pause.png);background-position:center;background-size:16px;background-repeat:no-repeat;";
	}
	else
	{
		document.getElementById('playModulo').style = "height:22px;width:22px;background-color:none;background-image:url(play.png);background-position:center;background-size:18px;background-repeat:no-repeat;";
		document.getElementById('pauseModulo').style = "height:22px;width:22px;background-color:none;background-image:url(pause.png);background-position:center;background-size:16px;background-repeat:no-repeat;";
	}
}

function callbackTable()
{
	autoplayTable();
}

function autoplayTable()
{
	if(lectureTable)
	{
		document.getElementById('table').value = j;
		callDraw();
		j += stepTable;
		setTimeout('callbackTable()', freq);
		pauseTable.addEventListener('click', function(){lectureTable = false;});
	}
	else
	{
		lectureTable = true;
		nbAutoplayTable--;
		setButtonTable();
	}
}

function callbackModulo()
{
	autoplayModulo();
}

function autoplayModulo()
{
	if(lectureModulo)
	{
		document.getElementById('modulo').value = k;
		callDraw();
		k += stepModulo;
		setTimeout("callbackModulo()", freq);
		pauseModulo.addEventListener('click', function(){lectureModulo = false;});
	}
	else
	{
		lectureModulo = true;
		nbAutoplayModulo--;
		setButtonModulo();
	}
}

function changeTable()
{
	j = parseFloat(document.getElementById('table').value);
	callDraw();
}

function changeModulo()
{
	k = parseFloat(document.getElementById('modulo').value);
	callDraw();
}

function setColor()
{	
	if(document.getElementById('backgroundColor').value === "0")
	{
		document.body.style.background = "black";
		document.body.style.color = "white";
		callDraw();
	}
	else
	{
		document.body.style.background = "white";
		document.body.style.color = "black";
		callDraw();
	}
}

function changeWeight()
{
	weight = parseFloat(document.getElementById('largeur').value);
	callDraw();
}

function changeWidth()
{
	width = parseFloat(document.getElementById('width').value)/2;
	document.getElementById('circularTable').style.width = width*2;
	callDraw();
}

function changeHeight()
{
	height = parseFloat(document.getElementById('height').value)/2;
	document.getElementById('circularTable').style.height = height*2;
	callDraw();
}

function changeColor()
{
	color = document.getElementById('lineColor').value;
	callDraw();
}

function changeBackgroundColor()
{
	backgroundColor = document.getElementById('specificBackgroundColor').value;
	document.body.style.background = backgroundColor;
}

function callAutoplayTable()
{
	nbAutoplayTable++;
	setButtonTable();
	autoplayTable();
}

function callAutoplayModulo()
{
	nbAutoplayModulo++;
	setButtonModulo();
	autoplayModulo();
}

callDraw();
