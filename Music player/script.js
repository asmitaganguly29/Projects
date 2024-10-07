const musicContainer = document.querySelector('.music-container')
const prevButton = document.querySelector('#prev')
const playButton = document.querySelector('#play')
const nextButton = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const music = document.querySelector('#musicname')
const image = document.querySelector('#image')


//Songs
const songs = ['Jaane Kyun' , 'Tere Jaisa Yaar Kahan', 'Yaara Teri Yaari']

//Keep track of the songs
let songIndex = 2

//Initially load song info DOM
loadSong(songs[songIndex])

//Update song details
function loadSong(song)
{
    music.innerText = song
    audio.src = `Music/${song}.mp3`
    image.src = `images/${song}.jpg`
}

function playSong()
{
    musicContainer.classList.add('play')
    playButton.querySelector('i.fas').classList.remove('fa-play')
    playButton.querySelector('i.fas').classList.add('fa-pause')

    audio.play()
}

function pauseSong()
{
    musicContainer.classList.remove('play')
    playButton.querySelector('i.fas').classList.add('fa-play')
    playButton.querySelector('i.fas').classList.remove('fa-pause')

    audio.pause()
}

function prevSong()
{
    songIndex--

    if(songIndex<0)
    {
        songIndex = songs.length - 1
    }

    loadSong(songs[songIndex])

    playSong()
}

function nextSong()
{
    songIndex++

    if(songIndex > songs.length - 1)
    {
        songIndex = 0
    }

    loadSong(songs[songIndex])

    playSong()

}

function updateProgress(e)
{
    const{duration, currentTime} = e.srcElement
    const progressPercent = (currentTime / duration)*100
    progress.style.width = `${progressPercent}%`

}

function setProgress(e)
{
   const width = this.clientWidth
   const clickX = e.offsetX
   const duration = audio.duration

   audio.currentTime = (clickX / width)*duration
}

//EventListeners

playButton.addEventListener('click', ()=>{
    const isPlaying = musicContainer.classList.contains('play')

    if(isPlaying)
    {
        pauseSong()
    }
    else
    {
    playSong()
    }
})

prevButton.addEventListener('click', prevSong)
nextButton.addEventListener('click', nextSong)

audio.addEventListener('timeupdate', updateProgress) //in HTML5 with the API 'timeupdate' event is there which will be called everytime the song plays.
progressContainer.addEventListener('click', setProgress)
audio.addEventListener('ended', nextSong)
