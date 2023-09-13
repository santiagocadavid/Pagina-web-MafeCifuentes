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
