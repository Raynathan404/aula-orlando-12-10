console.log(document.querySelector(".Proximo"))

// é um objeto pronto javascript    

// todo objeto tem metodos

// o metodo é uma função

// função é uma ação



// TIPOS DE DADOS EM JAVASCRIPT
// STRING = TEXTO  
// NUMBER = NUMEROS




document.querySelector(".proximo")

// eventos -> click, passar mouse

let botaoProximo = document.querySelector(".Proximo")
let botaoAnterior = document.querySelector(".Anterior")
let listaImagens = document.querySelectorAll("img")

let contador = 0

console.log(listaImagens)

console.log(document.querySelector("img.ativo").classList)

botaoProximo.onclick = function passarSlide(){
    document.querySelector("img.ativo").classList.remove("ativo")

    if(contador < 2){
        contador = contador + 1 
    }else{
        contador = 0
    }

    listaImagens[contador].classList.add("ativo")
}

botaoAnterior.onclick = function voltarSlide(){
    document.querySelector("img.ativo").classList.remove("ativo")

    if(contador > 0){
        contador = contador - 1
    }else{
        contador = 2
    }

        listaImagens[contador].classList.add("ativo")
    }