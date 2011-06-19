
var Canvas = require('canvas'),
    canvas = new Canvas(20, 30),
    ctx = canvas.getContext('2d'),
//	  Image = Canvas.Image,
    fs = require('fs');

var color = "1a3";

function marker(color) { 
console.time("render");

    //ctx.stroke;
    //ctx.clip;
		// ctx.globalAlpha = .2; 
		// 
		// ctx.strokeRect(0,0,50,59);
		//     ctx.lineWidth = 10;
    
		colorR = parseInt(color.substring(0,1) + color.substring(0,1),16);
		colorG = parseInt(color.substring(1,2) + color.substring(1,2),16);
		colorB = parseInt(color.substring(2,3) + color.substring(2,3),16);

		//console.log(colorR + " " + colorG + " " + colorB);
		// var colorInt=parseInt(color,16);
		// var colorIntMax = 4095;
		// var colorDif = (colorIntMax-colorInt);
		// var color2 = (colorDif*0.20) + colorInt;
		// var color2 = color2.toString(16)
		// var color3 = (colorDif*0.80) + colorInt;
		// var color3 = color3.toString(16)
		// console.log(color3.toString(16));
		//function marker(color,cb) { 
		    //ctx.stroke;
		    //ctx.clip;
				// ctx.globalAlpha = .2; 
				// 
				// ctx.strokeRect(0,0,50,59);
				//     ctx.lineWidth = 10;
				var radgrad = ctx.createRadialGradient(10,9,8,8,6,1);
				  radgrad.addColorStop(0, '#'+color);
				  radgrad.addColorStop(0.8, 'rgba('+colorR+','+colorG+','+colorB+',0.5)');
				  radgrad.addColorStop(1, 'rgba('+colorR+','+colorG+','+colorB+',0.2)');



				ctx.strokeStyle = "#333";
				//ctx.fillStyle = 
				//     
				// 
				// 	  ctx.fill;
				ctx.fillStyle = '#000';		
				ctx.fillRect(8,15,4,10);


		    ctx.fillStyle = '#'+color;
		    ctx.arc(10,9,6,0,Math.PI*2,true);		
		    ctx.fillStyle = radgrad;		
		    ctx.arc(10,9,6,0,Math.PI*2,true);
		    ctx.rect(9,15,2,8)
		    ctx.fill();

		    ctx.beginPath();
		    ctx.arc(10,9,8,0,Math.PI*2,true);
		    ctx.stroke();



	canvas.toBuffer(function(err, buf) {
	    if (err) throw err;
	    fs.writeFile(__dirname + '/../images/'+ color + 'marker.png', buf);
	});

  console.timeEnd("render");
  return canvas;
};
// var out = fs.createWriteStream(__dirname + '/../images/markerTest.png')
//   , stream = canvas.createPNGStream();
// 
// stream.on('data', function(chunk){
//   out.write(chunk);
// });
//};

exports.markerex = function(color) {

    return marker(color).toBuffer();
};
