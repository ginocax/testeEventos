window.onload = function(){

// 1
let btnMore = document.querySelector('#more');
let post = document.querySelector('.card');
let content = document.querySelector('.content');


btnMore.addEventListener('click', () => {
    // cria um clone das estrutura HTML de um post
    let newPost = post.cloneNode(true);
    content.insertBefore(newPost, btnMore);
});

// 2
let heart = document.querySelector(".likes img");

heart.addEventListener('click', () => {
    //console.log(heart.src);
    if (heart.src.split('/').pop() == 'heart.svg') {
        heart.src = "/img/red-heart.png"
    } else {
        heart.src = "/img/icons/heart.svg"
    }
});

// 3
let estiloBarra = document.querySelector('.busca');

estiloBarra.addEventListener('mouseover', function(){
    estiloBarra.style.boxShadow = "0px 1px 3px black"
});

estiloBarra.addEventListener('mouseout', function(){
    estiloBarra.style.boxShadow = "none";
});

// 4
document.getElementById("more").style.cursor = "pointer";
}
