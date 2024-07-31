const readMore = document.getElementById('readMore')
const videoAbout = document.getElementById('videoAbout')

const like = document.getElementById('like')
const deslike = document.getElementById('deslike')

const button = document.getElementById('glass')
const input = document.getElementById('pesquisar')

like.onclick = () =>{
    if(!deslike.classList.contains('active')){
        like.classList.toggle('active')
    }
    deslike.classList.remove('active')
    like.classList.add('active')
}
deslike.onclick = () =>{
    if(!like.classList.contains('active')){
        deslike.classList.toggle('active')
    }
    like.classList.remove('active')
    deslike.classList.add('active')
}

readMore.onclick = () =>{
    videoAbout.classList.toggle('active')
}

button.onclick = () => {
    if(input.value.trim()){
        window.location.href = '../wrong.html'
    }
}
    
