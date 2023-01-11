function toggleMode() {
    const toggleDarkMode = document.querySelector('html').classList.toggle("dark");
    const html = document.querySelector('html');
    const img = document.querySelector("#perfil img")
    if (html.classList.contains("dark")) {
        img.setAttribute("src", "./assets/img/perfil_vermelho.webp")
    } else {
        img.setAttribute("src", "./assets/img/perfil_branco.webp")
    }
}
