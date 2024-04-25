var elemento = document.getElementById("image");

function none(){
    if(elemento.classList.contains("none")){
        alert("El objeto ya no tiene bordes");
    } else {
        elemento.className = "";
        elemento.classList.add("none");
    }
}

function borTop(){
    if(elemento.classList.contains("top")){
        alert("El objeto ya tiene borde superior");
    } else {
        elemento.className = "";
        elemento.classList.add("top");
    }
}

function borRig(){
    if(elemento.classList.contains("right")){
        alert("El objeto ya tiene borde derecho");
    } else {
        elemento.className = "";
        elemento.classList.add("right");
    }
}

function borBot(){
    if(elemento.classList.contains("bottom")){
        alert("El objeto ya tiene borde inferior");
    } else {
        elemento.className = "";
        elemento.classList.add("bottom");
    }
}

function borLef(){
    if(elemento.classList.contains("left")){
        alert("El objeto ya tiene borde izquierdo");
    } else {
        elemento.className = "";
        elemento.classList.add("left");
    }
}

function allBor(){
    if(elemento.classList.contains("all")){
        alert("El objeto ya tiene bordes");
    } else {
        elemento.className = "";
        elemento.classList.add("all");
    }
}

function rad(){
    if(elemento.classList.contains("radius")){
        alert("El objeto ya tiene border radius");
    } else {
        elemento.className = "";
        elemento.classList.add("radius");
    }
}