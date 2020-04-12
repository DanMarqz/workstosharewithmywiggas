//BARRA DE NAVEGACIÓN: enlaces y datos.
//guardar los datos en arrays:
var titulos=new Array();
var enlaces=new Array();
//Datos de los submenús
titulos[0]=new Array();
enlaces[0]=new Array();

titulos[1]=new Array(
          "Poemas",
          "15 centimetros - Relato",
          "El principiante - Relato",
          "La chica mas guapa de la ciudad - Relato");
enlaces[1]=new Array("../pages/buk-po.html","../pages/buk-15.html","../pages/buk-pr.html","../pages/buk-ch.html");

//arrays para guardar elementos de la lista y submenús:
var menu=new Array();
var submenu=new Array();

window.onload = function() {
    //BARRA DE NAVEGACIÓN: Crear desplegables:
    for (i=0;i<titulos.length;i++) {
         //localizar elementos principales
        menu[i]=document.getElementById("seccion"+i);
         //crear elemento menu desplegable
        menu[i].innerHTML+="<div id='subseccion"+i+"'></div>"
         //localizar elemento menu desplegable
        submenu[i]=document.getElementById('subseccion'+i);
         //escribir menu desplegable
        for (j=0;j<titulos[i].length;j++) {
        submenu[i].innerHTML += "<p><a href='"+enlaces[i][j]+"'>"+titulos[i][j]+"</a></p>";
        }
        //estilo de los submenús
        menu[i].style.position="relative";
        submenu[i].style.position="absolute";
        submenu[i].style.top="100%";
        submenu[i].style.left="0px";
        submenu[i].style.backgroundColor="#000000";
        submenu[i].style.font="normal 0.8em arial";
        submenu[i].style.padding="0.2em 0.5em";
        submenu[i].style.display="none";
    }
    for (i=0;i<titulos.length;i++) {
        menu[i].onmouseover = ver; //onmouseover Ver el menú cuando el cursor está encima de...
        menu[i].onmouseout = ocultar; // onmouseout Ver el menú cuando el cursor ya no está encima de..
    } 
}
//función para ver los menús desplegables.
function ver() {
    muestra=this.getElementsByTagName("div")[0];
    muestra.style.display="block"
    }
//funcion para ocultar los menús desplegables.
function ocultar() {
    oculta=this.getElementsByTagName("div")[0];
    oculta.style.display="none"
    }