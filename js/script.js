
async function getsong() {
    let a = await fetch("http://127.0.0.1:3000/songs/")
    let response = await a.text()
    let div = document.createElement("div")
    div.innerHTML = response
    let as =div.getElementsByTagName("a")
    let song=[]
    for (let i = 0; i < as.length; i++) {
        const element = as[i];
        if(element.href.endsWith("mp3")){
            song.push(element.href)
        }
    }
    return song
}
async function main(){
    let songs= await getsong()
    console.log(songs)
    var audio=new Audio(songs[0])
    audio.play()
}
main()