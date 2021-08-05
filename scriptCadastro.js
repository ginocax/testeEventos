let nome = document.querySelector('.avatar-content div').innerText = 'Giovanna';

let primeiroNome = document.querySelector('input[name="name"]').placeholder = 'Primeiro Nome';


// Estilização
let bordas = document.querySelectorAll('input');

for (let borda of bordas) {
    borda.style.borderRadius="4px";
    borda.style.width="100%";
};

document.querySelector('body').style.backgroundColor = "#fafafa";
document.querySelector('button').style.width = "100%";







