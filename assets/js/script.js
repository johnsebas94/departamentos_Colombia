//Ciudades y Pueblos
//Cundinamarca: Chia, Zipaquira, Cajica, Ubate
//Antioquia: Medellin, Bello, Girardota, Envigado
//Valle del cauca: Cali, Buga, Yumbo, Palmira
//Nariño: Pasto, Ipiales, Tumaco, La Cruz

let departamento = prompt("Ingrese el departamento al cual desea conocer su capital");
let ciudad =document.getElementById("ciudad")
let amazona = document.getElementById("amazona")
let Medellin = document.getElementById("medellin")
departamento = departamento.toLowerCase();


if ( departamento === "amazonas") {
  
  ciudad.innerHTML =  "Leticia es la capital del departamento del Amazonas";
  var linkCiudad = function() {
  window.open('https://colombia.travel/es/leticia');
  }
}
else if ( departamento === "antioquia") {
  ciudad.innerHTML =  "Medellin es la capital del departamento de Antioquia";
  var linkCiudad = function() {
  window.open('https://colombia.travel/es/medellin');
}
}
else if (departamento === "arauca") {
  ciudad.innerHTML =  "Arauca es la capital del departamento de Arauca";
  var linkCiudad = function() {
  window.open('https://es.wikipedia.org/wiki/Arauca_(Arauca)');
}
}
else if (departamento === "atlantico")
{
  ciudad.innerHTML =  "Barranquilla es la capital del departamento del Atlántico";
  var linkCiudad = function() {
  window.open('https://colombia.travel/es/barranquilla');
}
} 
else if (departamento === "bolivar")
{
  ciudad.innerHTML =  "Cartagena de Indias es la capital del departamento de Bolivar";
  var linkCiudad = function() {
  window.open('https://colombia.travel/es/cartagena-de-indias');
}
} 
else if (departamento === "boyaca")
{
  ciudad.innerHTML =  "Tunja es la capital del departamento de Boyacá";
  var linkCiudad = function() {
  window.open('https://es.wikipedia.org/wiki/Tunja');
}
} 
else if (departamento === "caldas")
{
  ciudad.innerHTML =  "Manizales es la capital del departamento de Caldas";
  var linkCiudad = function() {
  window.open('https://es.wikipedia.org/wiki/Manizales');
}
} 
else if (departamento === "caqueta")
{
  ciudad.innerHTML =  "Florencia es la capital del departamento de Caquetá";
  var linkCiudad = function() {
  window.ope4n("https://colombia.travel/es/florencia");
}
} 
else if (departamento === "casanare")
{
  ciudad.innerHTML =  "Yopal es la capital del departamento de Casanare";
  var linkCiudad = function() {
  window.open('https://colombia.travel/es/yopal');
}
} 
else if (departamento === "cauca")
{
  ciudad.innerHTML =  "Popayán es la capital del departamento del Cauca";
  var linkCiudad = function() {
  window.open('https://colombia.travel/es/popayan');
}
} 
else if (departamento === "cesar")
{
  ciudad.innerHTML =  "Valledupar es la capital del departamento del Cesar";
  var linkCiudad = function() {
  window.open('https://colombia.travel/es/valledupar');
}
} 
else if (departamento === "choco")
{
  ciudad.innerHTML =  "Quibdó es la capital del departamento del Chocó";
  var linkCiudad = function() {
  window.open('https://colombia.travel/es/choco');
}
} 
else if (departamento === "cordoba")
{
  ciudad.innerHTML =  "Monteria es la capital del departamento de Córdoba";
  var linkCiudad = function() {
  window.open('https://es.wikipedia.org/wiki/Monter%C3%ADa');
}
} 
else if (departamento === "cundinamarca")
{
  ciudad.innerHTML =  "Bogota D.C. es la capital del departamento de Cundinamarca";
  var linkCiudad = function() {
  window.open('https://colombia.travel/es/bogota');
}
} 
else if (departamento === "guainia")
{
  ciudad.innerHTML =  "Inírida es la capital del departamento de Guainía";
  var linkCiudad = function() {
  window.open('https://colombia.travel/es/guania');
}
} 
else if (departamento === "guaviare")
{
  ciudad.innerHTML =  "San José del Guaviare es la capital del departamento de Guaviare";
  var linkCiudad = function() {
  window.open('https://es.wikipedia.org/wiki/Guaviare');
}
} 
else if (departamento === "huila")
{
  ciudad.innerHTML =  "Neiva es la capital del departamento del Huila";
  var linkCiudad = function() {
  window.open('https://es.wikipedia.org/wiki/Neiva');
}
} 
else if (departamento === "la guajira")
{
  ciudad.innerHTML =  "Riohacha es la capital del departamento de La Guajira";
  var linkCiudad = function() {
  window.open('https://colombia.travel/es/riohacha');
}
} 
else if (departamento === "magdalena")
{
  ciudad.innerHTML =  "Santa Marta es la capital del departamento del Magdalena";
  var linkCiudad = function() {
  window.open('https://colombia.travel/es/santa-marta');
}
} 
else if (departamento === "meta")
{
  ciudad.innerHTML =  "Villavicencio es la capital del departamento del Meta";
  var linkCiudad = function() {
  window.open('https://colombia.travel/es/villavicencio');
}
} 
else if (departamento === "nariño")
{
  ciudad.innerHTML =  "San Juan de Pasto es la capital del departamento de Nariño";
  var linkCiudad = function() {
  window.open('https://colombia.travel/es/pasto');
}
} 
else if (departamento === "norte de santander")
{
  ciudad.innerHTML =  "San José de Cúcuta es la capital del departamento de Norte de Santander";
  var linkCiudad = function() {
  window.open('https://colombia.travel/es/cucuta');
}
} 
else if (departamento === "putumayo")
{
  ciudad.innerHTML =  "Mocoa es la capital del departamento de Putumayo";
  var linkCiudad = function() {
  window.open("https://colombia.travel/es/mocoa");
}
} 
else if (departamento === "quindio")
{
  ciudad.innerHTML =  "Armenia es la capital del departamento de Quindio";
  var linkCiudad = function() {
  window.open('https://colombia.travel/es/armenia');
}
} 
else if (departamento === "risaralda")
{
  ciudad.innerHTML =  "Pereira es la capital del departamento de Risaralda";
  var linkCiudad = function() {
  window.open('https://colombia.travel/es/pereira');
}
} 
else if (departamento === "san andres y providencia" || departamento === "san andres" || departamento === "providencia")
{
  ciudad.innerHTML =  "San Andrés es la capital del departamento de San Andres y Providencia";
  var linkCiudad = function() {
  window.open('https://colombia.travel/es/san-andres-isla');
}
} 
else if (departamento === "santander")
{
  ciudad.innerHTML =  "Bucaramanga es la capital del departamento de Santander";
  var linkCiudad = function() {
  window.open('https://colombia.travel/es/bucaramanga');
}
} 
else if (departamento === "sucre")
{
  ciudad.innerHTML =  "Sincelejo es la capital del departamento de Sucre";
  var linkCiudad = function() {
  window.open('https://es.wikipedia.org/wiki/Sucre');
}
} 
else if (departamento === "tolima")
{
  ciudad.innerHTML =  "Ibague es la capital del departamento de Tolima";
  var linkCiudad = function() {
  window.open('https://colombia.travel/es/ibague');
}
} 
else if (departamento === "valle del cauca")
{
  ciudad.innerHTML =  "Cali es la capital del departamento del Valle del Cauca";
  var linkCiudad = function() {
  window.open('https://colombia.travel/es/cali');
}
} 
else if (departamento === "vaupes")
{
  ciudad.innerHTML =  "Mitú es la capital del departamento de Vaupés";
  var linkCiudad = function() {
  window.open('https://colombia.travel/es/mitu');
}
} 
else if (departamento === "vichada")
{
  ciudad.innerHTML =  "Puerto Carreño es la capital del departamento de vichada";
  var linkCiudad = function() {
  window.open('https://es.wikipedia.org/wiki/Vichada');
}
} 
else {
  alert("Ingrese un nombre valido de departamento de Colombia");
}