document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('my-video'),
          playBtn = document.getElementById('toggle_play_btn'),
          video_container = document.getElementById('video_container');

    playBtn.addEventListener('click', (e) => {

        e.preventDefault();
        e.stopPropagation()

        if(video.paused){
            video.play();
            playBtn.classList.add('play');
            playBtn.classList.remove('pause');
        } else {
            video.pause();
            playBtn.classList.add('pause');
            playBtn.classList.remove('play');
        }
    })

    video_container.addEventListener('click', () => {
        if(video.paused){
            video.play();
            playBtn.classList.add('play');
            playBtn.classList.remove('pause');
        } else {
            video.pause();
            playBtn.classList.add('pause');
            playBtn.classList.remove('play');
        }
    })
})