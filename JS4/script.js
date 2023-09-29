function calcular() {
    const raio = parseFloat(document.getElementById("raio").value);

    if (isNaN(raio)) {
        alert("Insira valor válido.");
        return;
    }

    const area = Math.PI * Math.pow(raio, 2);
    const circunferencia = 2 * Math.PI * raio;

    document.getElementById("areaResultado").value = area.toFixed(2);
    document.getElementById("circunferenciaResultado").value = circunferencia.toFixed(2);
}
