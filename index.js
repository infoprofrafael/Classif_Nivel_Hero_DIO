// 1ª ETAPA
//Função só para pegar nome
const getByName = () => {
    let nameWarrior = ''
    do {
        nameWarrior = prompt("Informe o seu nome: ")


    } while (nameWarrior === '' || nameWarrior === ' ' || nameWarrior === '  ' || nameWarrior === null)

    return nameWarrior.split(" ")[0]
}
nameWarrior = getByName()


let nameLocal = document.querySelector('.nameLocal');
nameLocal.innerHTML = `Guerreiro(a) ${nameWarrior}, informe a quantidade das vitórias e das derrotas!`

// 2ª ETAPA
//Função só para calcular
function calc(victorys, losers) {

    if (victorys < 0 || losers < 0) {
        alert('No campo "Vitórias e Derrotas", não pode haver valor negativo.');
    } else {
        resClassf = victorys - losers;
        return resClassf
    }
}

// 3ª ETAPA
//Função só para resultado classificação
function classficao(resClassf) {
    let classFinal = ''
    if (resClassf < 0) {
        classFinal = 'Unranked'
    } else if (resClassf <= 10) {
        classFinal = 'Ferro'
        // return classFinal;
    } else if (resClassf >= 11 && resClassf <= 20) {
        classFinal = 'Bronze'
        // return classFinal
    } else if (resClassf >= 21 && resClassf <= 50) {
        classFinal = 'Prata'
        // return classFinal
    } else if (resClassf >= 51 && resClassf <= 80) {
        classFinal = 'Ouro'
        // return classFinal
    } else if (resClassf >= 81 && resClassf <= 90) {
        classFinal = 'Diamante'
        // return classFinal
    } else if (resClassf >= 91 && resClassf <= 100) {
        classFinal = 'Lendário'
        // return classFinal
    } else {
        classFinal = 'Imortal'
    }
    return classFinal;
}

// 4ª ETAPA
//Função só para renderizar, ou seja, começar a execução, pois ele é chamado no botão OK, no HTMLpegar nome
function render() {
    let victorys = document.getElementById('victorys').value;
    let losers = document.getElementById('losers').value;

    
    calc(victorys, losers)
    let rankingClass = classficao(resClassf)
    
    
    let resClassfHtml = document.querySelector('.result');
    
    resClassfHtml.innerHTML = `${nameWarrior} o seu saldo de vitórias é ${resClassf}, assim tornando-o ${rankingClass} `;

    document.getElementById('victorys').value = null;
    document.getElementById('losers').value = null;
   
    
}

