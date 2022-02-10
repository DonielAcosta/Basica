var vp = document.getElementById('villa');
var papel = vp.getContext('2d');

var fondo = {
  url: "villa.png",
  cargaOK: false
};

var vaca = {
  url: "vaca.png",
  cargaOK: false
};

var cantidad = aleatorio(5, 30);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener('load', cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener('load', cargarVaca);

// var pollo = new Image();
// pollo.src = 'pollo.png';
// pollo.addEventListener('load', dibujarPollo);

// var cochino = new Image();
// cochino.src = 'cochino.png';
// cochino.addEventListener('load', dibujarCochino);

function cargarFondo(){
  fondo.cargaOK = true;
  dibujar();
}

function cargarVaca(){
  vaca.cargaOK = true;
  dibujar();
}

function dibujar(){
  if(fondo.cargaOK){
    papel.drawImage(fondo.imagen,0, 0);
  }
  if(vaca.cargaOK){
    console.log(cantidad);
    for(var v = 0; v< cantidad; v++){
      var x = aleatorio(0, 430);
      var y = aleatorio(0, 430);

      papel.drawImage(vaca.imagen,x, y);
    }
  }
} 


function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}