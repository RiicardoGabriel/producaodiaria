const btnSend = document.querySelector('#btn-send');
const inputs = document.querySelectorAll(".inpts");
const boloTrigo = document.querySelector("#trigo");
const boloMacaxeira = document.querySelector("#macaxeira");
const boloMilho = document.querySelector("#milho");
const boloMassa = document.querySelector("#massa");
const boloLeite = document.querySelector("#leite");
const boloFuba = document.querySelector("#fuba");
const boloFesta = document.querySelector("#festa");
const boloSonho = document.querySelector("#sonho");
const boloPacoca = document.querySelector("#pacoca");
const boloLimao = document.querySelector("#limao");
const boloBanana = document.querySelector("#banana");
const boloQueijo = document.querySelector("#queijo");
const boloPaixao = document.querySelector("#paixao");
const boloRedVulcao = document.querySelector("#redvulcao");
const boloDeRolo = document.querySelector("#rolo");
const boloPudim = document.querySelector("#bolopudim");
const miniBoloPudim = document.querySelector("#minipudim");
const producaoRetorno = document.querySelector("#producao")

function dataAtualFormatada() {
    var data = new Date(),
        dia = data.getDate(),
        mes = (data.getMonth() + 1).toString(),
        anoF = data.getFullYear();
    return(`${dia+1}/${mes}/${anoF}:<br>`);
}

function diaSemanaFormatada() {
    var semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
    var d = new Date();
    return (`${semana[d.getDay()]}`)
}

btnSend.addEventListener('click', () => {
    let producaoGeral = '';
    if (boloTrigo.value < 20 && diaSemanaFormatada() !== "Sexta-Feira" && boloTrigo.value !== '') {
        producaoGeral += `Trigo: 96`
    }
    if (boloTrigo.value > 20 && boloTrigo.value < 40 && diaSemanaFormatada() !== "Sexta-Feira" && boloTrigo.value !== '') {
        producaoGeral += `Trigo: 64`
    }
    if (boloTrigo.value > 40 && diaSemanaFormatada() !== "Sexta-Feira" && boloTrigo.value !== '') {
        producaoGeral += `Trigo: 32`
    }
    if (boloTrigo.value < 20 && diaSemanaFormatada() === "Sexta-Feira" && boloTrigo.value !== '') {
        producaoGeral += `Trigo: 7 fornadas`
    }
    if (boloMacaxeira.value < 5 && boloMacaxeira.value !== '') {
       producaoGeral += `<br>Macaxeira: 44`
    }
    if (boloMacaxeira.value >= 5 && boloMacaxeira.value <= 11 && boloMacaxeira.value !== '') {
        producaoGeral += `<br>Macaxeira: 22`
    }
    if (boloMacaxeira.value >= 12 && boloMacaxeira.value <= 15 && boloMacaxeira.value !== '') {
        producaoGeral += `<br>Macaxeira: 11`
    }
    if (boloMacaxeira.value < 20 && diaSemanaFormatada() === "Sexta-Feira" && boloMacaxeira.value !== '') {
        producaoGeral += `<br>Macaxeira: 44`
    }
    if (boloMilho.value < 5 && boloMilho.value !== '') {
        producaoGeral += `<br>Milho: 36`
    }
    if (boloMilho.value >= 5 && boloMilho.value <= 10 && boloMilho.value !== '') {
        producaoGeral += `<br>Milho: 18`
    }
    if (boloMilho.value >= 12 && boloMilho.value >= 15 && boloMilho.value !== '') {
        producaoGeral += `<br>Milho: 9`
    }
    if (boloMilho.value < 20 && diaSemanaFormatada() === "Sexta-Feira" && boloMilho.value !== '') {
        producaoGeral += `<br>Milho: 36`
    }
    if (boloMassa.value < 5 && boloMassa.value !== '') {
        producaoGeral += `<br>Massa: 18`
    }
    if (boloMassa.value >= 5 && boloMassa.value <= 10 && boloMassa.value !== '') {
        producaoGeral += `<br>Massa: 12`
    }
    if (boloMassa.value < 5 && diaSemanaFormatada() === "Sexta-Feira" && boloMassa.value !== '') {
        producaoGeral += `<br>Massa: 18`
    }
    if (boloLeite.value <= 2 && boloLeite.value !== '') {
        producaoGeral += `<br>Leite: 8`
    }
    if (boloFuba.value < 2 && diaSemanaFormatada() === "Sexta-Feira" && boloFuba.value !== '') {
        producaoGeral += `<br>Fubá: 8`
    }
    if (boloFesta.value <= 4 && boloFesta.value !== '') {
        producaoGeral += `<br>Festa: 6`
    }
    if (boloSonho.value < 3 && boloSonho.value !== '') {
        producaoGeral += `<br>Sonho: 6`
    }
    if (boloPacoca.value <= 2 && boloPacoca.value !== '') {
        producaoGeral += `<br>Paçoca: 6`
    }
    if (boloPacoca.value >= 3 && boloPacoca.value < 6 && boloPacoca.value !== '') {
        producaoGeral += `<br>Paçoca: 3`
    }
    if (boloPacoca.value <= 3 && diaSemanaFormatada() === "Sexta-Feira" && boloPacoca.value !== '') {
        producaoGeral += `<br>Paçoca: 6`
    }
    if (boloPacoca.value >= 3 && boloPacoca.value <= 6 && diaSemanaFormatada() === "Sexta-Feira" && boloPacoca.value !== '') {
        producaoGeral += `<br>Paçoca: 6`
    }
    if (boloLimao.value < 2 && boloLimao.value !== '') {
        producaoGeral += `<br>Limão: 3`
    }
    if (boloBanana.value < 3 && boloBanana.value !== '') {
        producaoGeral += `<br>Banana: 4`
    }
    if (boloBanana.value <= 1 && dataAtualFormatada() === "Sexta-Feira" && boloBanana.value !== '') {
        producaoGeral += `<br>Banana: 8`
    }
    if (boloBanana.value >= 3 && boloBanana.value <= 5 && dataAtualFormatada() === "Sexta-Feira" && boloBanana.value !== '') {
        producaoGeral += `<br>Banana: 4`
    }
    if (boloQueijo.value <= 2 && boloQueijo.value !== '') {
        producaoGeral += `<br>Queijo: 3`
    }
    if (boloQueijo.value <= 2 && diaSemanaFormatada() === "Sexta-Feira" && boloQueijo.value !== '') {
        producaoGeral += `<br>Queijo: 6`
    }
    if (boloQueijo.value >= 2 && boloQueijo.value <= 5 && diaSemanaFormatada() === "Sexta-Feira" && boloQueijo.value !== '') {
        producaoGeral += `<br>Queijo: 3`
    }
    if (boloPaixao.value < 5 && boloQueijo.value !== '') {
        producaoGeral += `<br>Bolo Paixão: 7`
    }
    if (boloRedVulcao.value < 2 && boloPaixao.value !== '') {
        producaoGeral += `<br>Red Velvet Vulcão: 4`
    }
    if (boloPudim.value < 2 && boloPudim.value !== '') {
        producaoGeral += `<br>Bolo Pudim: 4`
    }
    if (miniBoloPudim.value <= 4 && miniBoloPudim.value !== '') {
        producaoGeral += `<br>Mini Bolo Pudim: 9`
    }
    if (boloDeRolo.value < 5 && diaSemanaFormatada() !== "Sexta-Feira" && boloDeRolo.value !== '') {
        producaoGeral += `<br>Rolo: 10`
    }
    producaoRetorno.innerHTML = `Produção do dia ${dataAtualFormatada()} ${producaoGeral}`;
})
