

const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// prompt to select media stream, pass to video element, then play the video
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia(); //Screen Capture API
        videoElement.srcObject = mediaStream; //pass the mediaStream as the source
        videoElement.onloadedmetadata = () => { 
            videoElement.play();
        }
    } catch (error) {
        console.log('Ooops, we\'ve got an error: ', error);
    }
}

button.addEventListener('click', async () => {
    //disable button
    button.disabled = true;
    //start picture in picture
    await videoElement.requestPictureInPicture(); //requestPictureInPicture from the API
    //reset button
    button.disabled = false;
})

// on load
selectMediaStream();