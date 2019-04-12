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

function tick() {
	requestAnimationFrame(tick);
	
	// draw background - 100% tall and wide rectangle, every frame
	// if left mouse button is down, the background will be red and otherwise green
	context.fillStyle = mouse.down ? 'red' : 'green';
	context.fillRect(0, 0, width, height);
}

window.addEventListener('mousedown', handleMouseDown);
window.addEventListener('mouseup', handleMouseUp);
window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleResize);

tick();