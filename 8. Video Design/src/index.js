import "./styles.css";

const videoPlayer = document.querySelector("#jsVideoPlayer video");
const playBtn = document.getElementById("jsPlayButton");

const currentTime = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime");

const processRange = document.getElementById("jsProcessBar");

const volumeBtn = document.getElementById("jsVolumeBtn");
const volumeRange = document.getElementById("jsVolumeBar");
function handlePlayClick(){
    if( videoPlayer.paused ){
        videoPlayer.play();
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }else{
        videoPlayer.pause();
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

const formatDate = seconds => {
    const secondsNumber = parseInt(seconds, 10);
    let hours = Math.floor(secondsNumber / 3600);
    let minutes = Math.floor((secondsNumber - hours * 3600) / 60);
    let totalSeconds = secondsNumber - hours * 3600 - minutes * 60;
  
    if (hours < 10) {
      hours = `0${hours}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (totalSeconds < 10) {
      totalSeconds = `0${totalSeconds}`;
    }
    return `${hours}:${minutes}:${totalSeconds}`;
  };
  
  function getCurrentTime() {
    currentTime.innerHTML = formatDate(Math.floor(videoPlayer.currentTime));
  }
  
  function setTotalTime() {
    const totalTimeString = formatDate(videoPlayer.duration);
    totalTime.innerHTML = totalTimeString;
    setInterval(getCurrentTime, 1000);
    setInterval(()=>{ processRange.value = Math.floor(videoPlayer.currentTime)/videoPlayer.duration;}, 1000);
  }
  

  function handleVolumeClick(){
    if(videoPlayer.muted){
        videoPlayer.muted= false;
        volumeBtn.innerHTML = "<i class='fas fa-volume-up'></i>";
        volumeRange.value = videoPlayer.volume;
    }else{
        volumeRange.value = 0;
        videoPlayer.muted= true;
        volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
        
    }
}

function handleEnded(){
    videoPlayer.currentTime = 0;
    videoPlayer.play();
  }

function handleProcessDrag(event) {
    const {
        target: { value }
    } = event;
    videoPlayer.currentTime = Math.floor(value*videoPlayer.duration);
    
}

function handleVolumeDrag(event) {
    const {
        target: { value }
    } = event;
    videoPlayer.volume = value;
    if (value >= 0.6) {
        volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    } else if (value >= 0.2) {
        volumeBtn.innerHTML = '<i class="fas fa-volume-down"></i>';
    } else {
        volumeBtn.innerHTML = '<i class="fas fa-volume-off"></i>';
    }
}

function init(){
    playBtn.addEventListener( "click", handlePlayClick );

    volumeBtn.addEventListener("click", handleVolumeClick);
    volumeRange.addEventListener("input", handleVolumeDrag);
    processRange.addEventListener("input", handleProcessDrag);
    videoPlayer.addEventListener("ended", handleEnded);
    videoPlayer.addEventListener("loadedmetadata", setTotalTime); // video의 메타데이터가 로드될떄까지 기다리고 duration계산.
}

init();