
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
    
		ctx.strokeStyle = "#333";
		//ctx.fillStyle = 
		//     
		// 
		// 	  ctx.fill;
		ctx.fillStyle = '#000';		
		ctx.fillRect(8,15,4,10);


    ctx.fillStyle = '#'+color;		
    ctx.arc(10,8,6,0,Math.PI*2,true);
    ctx.rect(9,15,2,8)
    ctx.fill();

    ctx.beginPath();
    ctx.arc(10,8,8,0,Math.PI*2,true);
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
