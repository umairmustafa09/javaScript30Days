//getting Element.
let canvas = document.getElementById('canvas');
//making canvas 2d
let clockCirlce = canvas.getContext('2d');
//calculatin radius.
let radius = canvas.height / 2;
//setting circle x and y-axis.
clockCirlce.translate(2 * radius, radius);
//radius length so corner will show of outer box.
radius = radius * 0.65;

//clock desing function.
function ClockDesign() {
	//reset path
	clockCirlce.beginPath();
	//setting arc with five parameters.
	clockCirlce.arc(0, 0, radius, 0, 2 * Math.PI);
	//add color to cirlce region.
	clockCirlce.fillStyle = 'white';
	//filling circle region with color.
	clockCirlce.fill();
	//reset path
	clockCirlce.beginPath();
	//setting arc with five parameters.
	clockCirlce.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
	//add color to cirlce region.
	clockCirlce.fillStyle = 'black';
	//filling circle region with color.
	clockCirlce.fill();
}

//showing numbers on clock functions
function clockNumber() {
	//text aling center
	clockCirlce.textAlign = 'center';
	//loop for 1 to 12
	for (let i = 1; i < 13; i++) {
		//calculating for angle for every number.
		let anngle = (i * Math.PI) / 6;
		//rotating numbers according to their calculated angles.
		clockCirlce.rotate(anngle);
		//adjusting x and y-axis.
		clockCirlce.translate(0, -radius * 0.85);
		//setting  angle straight.
		clockCirlce.rotate(-anngle);
		//adding number with adjusting x and y-axis.
		clockCirlce.fillText(i.toString(), 0, 0);
		//rotating numbers according to their calculated angles.
		clockCirlce.rotate(anngle);
		//adjusting x and y-axis.
		clockCirlce.translate(0, radius * 0.85);
		//setting  angle straight.
		clockCirlce.rotate(-anngle);
	}
}
//clock Stick Function.
function ClockSticks() {
	//adding current date to current variable.
	let current = new Date();
	//adding current hours to hours variable.
	let hour = current.getHours();
	//adding current minutes to minutes variable.
	let minute = current.getMinutes();
	//adding current seconds to current variable.
	let second = current.getSeconds();

	//calculating hour.
	hour = hour % 12;
	hour =
		(hour * Math.PI) / 6 +
		(minute * Math.PI) / (6 * 60) +
		(second * Math.PI) / (360 * 60);
	//calling drawStick function.
	drawStick(clockCirlce, hour, radius * 0.5, radius * 0.07);

	//calculating minute.
	minute = (minute * Math.PI) / 30 + (second * Math.PI) / (30 * 60);
	//calling drawStick function.
	drawStick(clockCirlce, minute, radius * 0.8, radius * 0.07);

	//calculating second.
	second = (second * Math.PI) / 30;
	//calling drawStick function.
	drawStick(clockCirlce, second, radius * 0.9, radius * 0.02);
}

//Draw Stick Function.
function drawStick(clockCirlce, angle, length, width) {
	//resest path.
	clockCirlce.beginPath();
	//addiing width of stick.
	clockCirlce.lineWidth = width;
	//round the top and bottom of stick.
	clockCirlce.lineCap = 'round';
	//origin of clock.
	clockCirlce.moveTo(0, 0);
	//rotating Clock Circle.
	clockCirlce.rotate(angle);
	//create line between two points.
	clockCirlce.lineTo(0, -length);
	//add border and lines.
	clockCirlce.stroke();
	//rotating Clock Circle.
	clockCirlce.rotate(-angle);
}

//function Clock
function clock() {
	//calling color desing function.
	ClockDesign();
	//calling showing numbers on clock functions
	clockNumber();
	//calling clock N functions
	ClockSticks();
}
//interval for one second
setInterval(clock, 1000);
