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

// validação

let form = document.querySelector('.form-auth');

window.onload = function() {
    let formUser = document.querySelector('.form-auth input[name="username"]');
    let inputData = document.createElement('input')
    inputData.setAttribute('type', 'date')
    inputData.setAttribute('name', 'dataNascimento')
    form.insertBefore(inputData, formUser);
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let erro = 0;
    let inputs = document.querySelectorAll('.form-auth input');
    let mensagemErro = document.querySelector('.erro');
    mensagemErro.style.color - '#red';

    for (const input of inputs){
        if (input.value == "") {
            erro++;
        }
    };

    if (erro > 0) {
            mensagemErro.innerText = 'Ops campo vazio';
            
        } else {
            form.submit();
        }

});


