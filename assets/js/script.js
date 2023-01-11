function toggleMode() {
    const toggleDarkMode = document.querySelector('html').classList.toggle("dark");
    const html = document.querySelector('html');
    const img = document.querySelector("#perfil img")
    if (html.classList.contains("dark")) {
        img.setAttribute("src", "./assets/img/perfil_vermelho.png")
    } else {
        img.setAttribute("src", "./assets/img/perfil_branco.png")
    }
}
