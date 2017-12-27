function getInput() {
  navigator.mediaDevices.getUserMedia({
    video: true,
  })
    .then(streamMedia)
    .catch((err) => {
      console.error('Could open user media', err);
    });
}

function streamMedia(stream) {
  const streamTrack = stream.getVideoTracks()[0];
  const image = new ImageCapture(streamTrack);
  updateImage(iage)
}

function updateImage(capturer) {
  const display = document.querySelector('video');
  capturer.takePhoto()
  .then((blob) => {
    display.src = URL.createObjectURL(blob);
    display.onload = () => URL.revokeObjectURL(this.src);
  })
  .catch((err) => console.error('Error when capturing photo', err));
}