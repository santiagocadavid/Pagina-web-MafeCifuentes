document.addEventListener("DOMContentLoaded", function () {
    const customVideos = document.querySelectorAll(".custom-video");

    customVideos.forEach((video) => {
        const source = video.getAttribute("data-src");
        const videoElement = document.createElement("video");
        videoElement.src = source;
        videoElement.muted = true; // Mute the video if desired
        videoElement.loop = true; // Enable looping if desired
        videoElement.autoplay = true; // Autoplay the video

        video.appendChild(videoElement);
    });
});

    // JavaScript for the slideshow
    const words = document.querySelectorAll('.word');
    let currentWordIndex = 0;

    function showNextWord() {
    words[currentWordIndex].style.display = 'none';
    currentWordIndex = (currentWordIndex + 1) % words.length;
    words[currentWordIndex].style.display = 'block';
    }

    // Initial display
    words[currentWordIndex].style.display = 'block';

    // Set the interval for showing the next word (change every 3 seconds)
    setInterval(showNextWord, 3000);