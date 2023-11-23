function calcular() {
    let mgDos = document.getElementById("massaDisp").value;
    let unidMDos = document.getElementById("selectMDisp").value;
    switch (unidMDos) {
        case "mg":
            mgDos = mgDos;
            break;
        case "mcg":
            mgDos = mgDos / 1000;
            break;
        case "g":
            mgDos = mgDos * 1000;
            break;
        default:
            console.log("Opção inválida");
    }
    let mlDos = document.getElementById("volDisp").value;
    let unidVDos = document.getElementById("selectVDisp").value;
    switch (unidVDos) {
        case "ml":
            mlDos = mlDos;
            break;
        case "l":
            mlDos = mlDos * 1000;
            break;
        default:
            console.log("Opção inválida");
    }
    let mgPres = document.getElementById("massaPresc").value;
    let unidMPres = document.getElementById("selectMPresc").value;
    switch (unidMPres) {
        case "mg":
            mgPres = mgPres;
            break;
        case "mcg":
            mgPres = mgPres / 1000;
            break;
        case "g":
            mgPres = mgPres * 1000;
            break;
        default:
            console.log("Opção inválida");
    }
    let mlQtd = document.getElementById("qtdAmpola").value;
    let unidQtd = document.getElementById("selectQtd").value;
    switch (unidQtd) {
        case "ml":
            mlQtd = mlQtd;
            break;
        case "l":
            mlQtd = mlQtd * 1000;
            break;
        default:
            console.log("Opção inválida");
    }
    let mlUsado = (mgPres * mlDos) / mgDos;
    mlUsado = ((mlUsado - Math.floor(mlUsado) > 0) ? mlUsado.toPrecision(2) : mlUsado);
    let qtdUsada = mlUsado / mlQtd;
    qtdUsada = ((qtdUsada - Math.floor(qtdUsada) > 0) ? qtdUsada.toPrecision(2) : qtdUsada);
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "<p>A quantidade utilizada foi de <strong>" + mlUsado + "</strong> ml. Equivalente a <strong>" + qtdUsada + "</strong> do frasco.</p>";
}