let songIdx = 0;
let audioElement = new Audio("1.mp3");
let masterPlay = document.querySelector(".masterPlay");
let myProgressBar = document.querySelector("#myProgressBar");
let gif = document.querySelector("#gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let content = document.querySelector("#footerContent")

let songs = [
    {
        songName: "let me love you -Justin Beiber",
        filePath: "1.mp3",
        coverPath: "1.jpg",
    },
    { songName: "Lover -Taylor Swift",
     filePath: "2.mp3",
      coverPath: "2.jpg" 
    },
    {
        songName: "Blank space -Taylor Swift",
        filePath: "3.mp3",
        coverPath: "3.jpg",
    },
    { songName: "Dance monkey", 
    filePath: "4.mp3",
     coverPath: "4.jpg" 
    },
    { songName: "True love",
     filePath: "5.mp3",
      coverPath: "5.jpg"
    },
];

let songContent= songItems.forEach((ele,i) => {
    console.log(ele,i);
    ele.getElementsByTagName("img")[0].src = songs[i].coverPath
     return ele.getElementsByClassName("songs")[0].innerText = songs[i].songName
});

// handle play pause click
masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;

    } else {
        audioElement.pause();
        masterPlay.classList.add("fa-circle-play");
        masterPlay.classList.remove("fa-circle-pause");
        gif.style.opacity = 0;
    }
});

//listen to events
audioElement.addEventListener("timeupdate", () => {
    // updt seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});

function makeAllPlays(){
    Array.from(document.getElementsByClassName("songCircle")).forEach(element => {
            element.classList.remove("fa-pause-circle")
            element.classList.add("fa-play-circle")
            
        })
}

Array.from(document.getElementsByClassName("songCircle")).forEach(element => {
    element.addEventListener("click",(e)=>{
      makeAllPlays()
      songIdx = parseInt(e.target.id)
      e.target.classList.remove("fa-play-circle")
      e.target.classList.add("fa-pause-circle")
      audioElement.src = `${songIdx}.mp3`
      content.innerText = songs[songIdx-1].songName
      audioElement.currentTime = 0
      audioElement.play()
      gif.style.opacity = 1 
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause"); 

    })
});

document.getElementById("previous").addEventListener("click",()=>{
    if(songIdx<=1){
        songIdx = 5
    }
    else{
        songIdx-=1
    }
    audioElement.src = `${songIdx}.mp3`
      audioElement.currentTime = 0
      audioElement.play()
      gif.style.opacity = 1 
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
      content.innerText = songs[songIdx-1].songName

})
let footerSongName;
document.getElementById("forward").addEventListener("click",()=>{
    if(songIdx>=5){
        songIdx = 1
    }
    else{
        songIdx +=1
    }
    audioElement.src = `${songIdx}.mp3`
      audioElement.currentTime = 0
      audioElement.play()
      gif.style.opacity = 1 
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause"); 
      content.innerText = songs[songIdx-1].songName
})
