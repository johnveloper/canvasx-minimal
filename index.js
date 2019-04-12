var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var width, height; handleResize();

function handleResize() {
	canvas.width = width = document.body.clientWidth;
	canvas.height = height = document.body.clientHeight;
}

var mouse = {
	down: false,
	x: undefined,
	y: undefined
}

function handleMouseMove(event) {
	mouse.x = event.clientX;
	mouse.y = event.clientY;	
}

function handleMouseDown() {
	mouse.down = true;
}

function handleMouseUp() {
	mouse.down = false;
}

var frame = 0;
function tick() {
	requestAnimationFrame(tick);
	frame += 1;
	
	// draw background - 100% tall and wide rectangle, every frame
	// if left mouse button is down, the background will be red and otherwise green
	context.fillStyle = mouse.down ? 'red' : 'green';
	context.fillRect(0, 0, width, height);

	// draw mouse position
	context.fillStyle = 'black';
	context.fillRect(mouse.x-2, mouse.y-2, 4, 4);
	context.font = '16px verdana';
	var mousePosString = '(' + mouse.x + ', ' + mouse.y + ')';
	context.fillText(mousePosString, mouse.x + 24, mouse.y);

	// draw frame number in top-left corner
	context.fillText('Total frames: ' + frame, 16, 32);
}

window.addEventListener('mousedown', handleMouseDown);
window.addEventListener('mouseup', handleMouseUp);
window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleResize);

tick();