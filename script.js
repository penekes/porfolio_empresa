let menuVisible = false
//Ocultar o mostrar el menú
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //Ocultar menú al seleccionar una opción
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//Animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript")
        habilidades[1].classList.add("htmlcss")
        habilidades[2].classList.add("kotlin")
        habilidades[3].classList.add("database")
        habilidades[4].classList.add("diseño")
        habilidades[5].classList.add("ios")
        habilidades[6].classList.add("resolucion")
        habilidades[7].classList.add("equipo")
        habilidades[8].classList.add("com")
        habilidades[9].classList.add("flexibilidad")
        habilidades[10].classList.add("proactividad")
        habilidades[11].classList.add("detalle")
    }
}


//detectar el scroll para aplicar la animación
window.onscroll = function(){
    efectoHabilidades();
}
