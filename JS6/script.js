const rastro = document.getElementById("rastro");
const pontos = [];

document.addEventListener("mousemove", (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    if (pontos.length >= 8) {
        const primeiroPonto = pontos.shift();
        rastro.removeChild(primeiroPonto);
    }

    const ponto = document.createElement("div");
    ponto.className = "ponto";
    ponto.style.left = mouseX + "px";
    ponto.style.top = mouseY + "px";

    rastro.appendChild(ponto);
    pontos.push(ponto);
});

