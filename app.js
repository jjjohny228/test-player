// Register the service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
        .then((registration) => {
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch((error) => {
            console.log('Service Worker registration failed:', error);
        });
}

const playPauseBtn = document.getElementById('playPauseBtn');
const audio = document.getElementById('audio');
const trackName = document.getElementById('trackName');

playPauseBtn.addEventListener('click', function () {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseBtn.textContent = 'Play';
    }
});

// Keep audio playing when the page visibility changes (when app is minimized)
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        audio.pause();
    } else {
        audio.play();
    }
});
