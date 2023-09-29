function gerarGrafico() {
    const largura = parseFloat(document.getElementById("largura").value);
    const alturas = [];

    for (let i = 1; i <= 5; i++) {
        const altura = parseFloat(document.getElementById("altura" + i).value);
        alturas.push(altura);
    }

    const chart = document.getElementById("chart");
    chart.innerHTML = "";

    for (let i = 0; i < alturas.length; i++) {
        const barra = document.createElement("div");
        barra.className = "bar";
        barra.style.width = largura + "px";
        barra.style.height = alturas[i] + "px";
        chart.appendChild(barra);
    }
}
