const inputs = document.querySelectorAll(".inputForEach")
const xpAGastar = document.getElementById("costoRealTime")
const xpIngresada = document.getElementById("inputXp")
const raza = document.getElementById("selectRaza") 
const btnSubmit = document.getElementById("inputSubmit")

// no creo que sea la mejor forma de hacerlo pero no se me ocurre como importal los atributos relevantes del backend :(
const atrsRel =  [null, 1, 0, 5, 5, 0, 0, 5, 0, 0];
const atrsRel2 = [null, 2, 2, 2, 3, 1, 2, 4, 1, 4];
const atrsPes =  [null, 0, 5, 3, 2, 3, 1, 0, 2, 5];
//

let niveles = [];


raza.addEventListener("change", calcularYmostrar);

xpIngresada.addEventListener("change", calcularYmostrar);

inputs.forEach(input => {
    niveles.push(0);
    input.addEventListener("change", function () { cargarValores(input.id, input.value) });
})


calcularYmostrar();


function cargarValores(key, value) {
    // no funciona con numeros de 2 cifras
    let indice = key.slice(13,14);

    niveles[indice] = value;
    calcularYmostrar();
}




function calcularYmostrar() {
    let resultado = 0;

    let atrRel = atrsRel[raza.value - 1];
    let atrRel2 = atrsRel2[raza.value - 1];
    let atrPes = atrsPes[raza.value - 1];

    let modPes = 6, mod = 5, modRel = 4;

    for (let i = 0; i < niveles.length; i++) {
        if (i == atrRel || i == atrRel2) {

            resultado += xpPorNivel(niveles[i],modRel)

        } else if (i == atrPes) {

            resultado += xpPorNivel(niveles[i], modPes)

        } else {

            resultado += xpPorNivel(niveles[i], mod)

        }
    }

    xpAGastar.innerHTML = resultado;


    if (resultado > xpIngresada.value) {
        btnSubmit.disabled = true;
    } else {
        btnSubmit.disabled = false;
    }

}

function xpPorNivel(nivel, mod) {
    let resultado = 0

    if (nivel > 10) {
        nivel = 10
    }

    for (let i = 0; i < nivel; i++) {
        resultado += resultado + mod;
    }

    return resultado;

}



















// te maldigo Brendan Eich