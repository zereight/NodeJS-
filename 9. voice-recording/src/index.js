import "./styles.css";

const recordingContainer = document.querySelector(".recordingContainer");
const record= document.getElementById("recordingBtn");
const recordingtime = document.getElementById("recordingTime");

let mediaRecorder;
let constraints;
let chunks=[];
let second = 0;
let interval ;

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




const stopRecording= () => {
    
    clearInterval(interval);
    second=0;
    recordingtime.innerHTML="";
    mediaRecorder.stop();
    console.log(mediaRecorder.state);
    console.log("recorder stopped");
    record.removeEventListener("click",stopRecording );
    record.addEventListener("click",startRecording )
    record.innerHTML = '<input type="button" value="Start Recording">';
    console.log("onstop");
}

const addSecond = () => {
    second= second+1;
    recordingtime.innerHTML = formatDate(second);
};

const startRecording =(e) =>{
    recordingtime.innerHTML="00:00:00";
    mediaRecorder.start();
    console.log(mediaRecorder.state);
    console.log("recorder started");
    record.removeEventListener("click",handleRecording );
    record.removeEventListener("click",startRecording );
    record.addEventListener("click",stopRecording );
    record.innerHTML = '<input type="button" value="Stop Recording">';
    interval = setInterval(addSecond, 1000);
}

const handleRecording = () => {
    if (navigator.mediaDevices) {
        console.log('getUserMedia supported.');
        constraints = { audio: true };
        navigator.mediaDevices.getUserMedia(constraints)
        .then(function(stream) {
          mediaRecorder = new MediaRecorder(stream);
          mediaRecorder.ondataavailable = function(e) {
            chunks.push(e.data);
          }
          mediaRecorder.onstop = function(e){
            console.log(chunks);
            var blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
            chunks = [];
            const link = document.createElement("a");
            var audioURL = URL.createObjectURL(blob)
            link.href = audioURL;
            link.download = "recorded.webm";
            document.body.appendChild(link);
            link.click();
          }
          startRecording();
        })
        .catch(function(err) {
          console.log('The following error occurred: ' + err);
        })
        
    }
}


function init(){
    record.addEventListener("click", handleRecording);
}

if(recordingContainer){
    init();
}