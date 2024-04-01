const whiteKeys = ["a","s","d","f","g","h","j","k","l",";"]
const blackKeys = ["w","e","t","y","u","o","p"]

const keys = document.querySelectorAll(".key")
const whitekey = document.querySelectorAll(".key.white")
const blackkey = document.querySelectorAll(".key.black")

keys.forEach(key=>{
    key.addEventListener("click",()=>playNote(key))
})

document.addEventListener("keydown",e =>{
    if(e.repeat) return
    const key = e.key
    const whitekeyValue = whiteKeys.indexOf(key)
    const blackkeyValue = blackKeys.indexOf(key)

    if(whitekeyValue > -1 ) playNote(whitekey[whitekeyValue])
    if(blackkeyValue > -1 ) playNote(blackkey[blackkeyValue])
})


function playNote(key){
const sound = document.getElementById(key.dataset.note)
sound.currentTime = 0
sound.play()
key.classList.add("playing")
  setTimeout(()=>{
key.classList.remove("playing")
},500)
sound.addEventListener("ended",()=>{
    key.classList.remove("playing")
})


}


