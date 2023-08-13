function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")
  const listaPadding = document.querySelector("#lista li a")
  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a img light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "foto de Mayk Brito sorrindo de oculos")
  } else {
    //se tiver sem o light mode, manter a imagem normal
    // listaPadding.classList.toggle("teste")
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "foto de Mayk Brito sorrindo")
  }
}
