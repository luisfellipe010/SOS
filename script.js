function responder(correta) {

    const resultado = document.getElementById("resultado");

    if (correta) {
        resultado.textContent =
            "✅ Correto! O ideal é não clicar e verificar a informação em um canal oficial.";
    } else {
        resultado.textContent =
            "❌ Cuidado! Links recebidos em mensagens podem levar a páginas falsas.";
    }
}