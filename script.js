function toggleMode (){

const html = document.documentElement
html.classList.toggle("light")
/*
if (html.classList.contains('light')) {
    html.classList.remove ('light')
} else {
    html.classList.add ('light') // acessando a lista da classe
}
*/
//texto acima mesma coisa que aaixo

//pegar a tag imag
const img = document.querySelector ("#profile img")

//substituir a imagem

if (html.classList.contains("light")) {
// setiver light mode, adicionar a imagem light
img.setAttribute("src", "./assets/avatarlucas2.png")
img.setAttribute("alt", "foto do profile do projeto branco")

} else {//se tiver light troca imagem para light, se nao mantem.
    img.setAttribute("src", "./assets/avatarlucas.png")
    img.setAttribute("alt", "foto do profile do projeto escuro")
}



if (img = document.querySelector ("#profile alt")){


}

}


// document é nosso documento dentro da pagina
//documentElement acesso nosso html dentro do documento


