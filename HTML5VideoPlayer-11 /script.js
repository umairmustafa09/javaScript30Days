const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const ranges = player.querySelectorAll('.sliders');

function handlerClick() {
	const method = this.paused ? 'play' : 'pause';
	video[method]();
}

function handlerChange(e) {
	if (this.name === 'currentTime') this.max = video.duration;
	const percent = parseFloat(this.value);
	video[this.name] = percent;
}

function progressBar() {
	const progressBar = document.querySelector('.progressBar');
	progressBar.max = video.duration;
	progressBar.value = video.currentTime;
}

video.addEventListener('click', handlerClick);
video.addEventListener('click', handlerClick);
video.addEventListener('timeupdate', progressBar);
ranges.forEach((range) => range.addEventListener('change', handlerChange));
