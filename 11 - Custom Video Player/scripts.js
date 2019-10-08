// Step 1: Grab our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider')

// Step 2: Build our functions
function togglePlay(){
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateButton(e) {
    const icon = e.type === 'pause' ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

function skip() {
    skipSecs = parseFloat(this.dataset.skip);
    video.currentTime += skipSecs;
}

function handleRangeUpdate() {
    video[this.name] = this.value;
}

// Step 3: Hook up event listeners
toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);

video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

skipButtons.forEach(function(button){
    button.addEventListener('click', skip);
});

//Could add mousemove event and a click flag to update ranges in real time, not just on a change event. 
ranges.forEach(function(range){
    range.addEventListener('change', handleRangeUpdate);
});


