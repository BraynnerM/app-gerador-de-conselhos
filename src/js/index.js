let botao = document.getElementById("advice-update");

botao.addEventListener('click', gerarUmConselhoAleatorio);

async function sortearConselho() {
    const url =
        "https://api.adviceslip.com/advice";
    const resposta = await fetch(url);
    return await resposta.json();
}

async function gerarUmConselhoAleatorio() {
    const conselho = await sortearConselho();
    const idConselho = (conselho.slip.id);
    document.getElementById("advice-id").innerHTML = `Advice # ${idConselho}`;
    const descricaoConselho = (conselho.slip.advice);
    document.getElementById("advice-description").innerHTML = `"${descricaoConselho}"`;
}

gerarUmConselhoAleatorio()
