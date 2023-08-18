console.log('hola')
const modificarDatosButton = document.getElementById("calc");
const tabla = document.getElementById("tabla");



modificarDatosButton.addEventListener("click", () => {
    var numero = document.getElementById("numero");
    var numero = parseFloat(numero.value);

    var binario=numero.toString(2);
    const bits = binario.split('');
    
    const segundaFila = tabla.rows[1];
    const celdas = segundaFila.cells;
    var j=bits.length-1;

    for (let i = 10; i >=0; i--) {
        if (j < bits.length) {
            celdas[i].textContent = bits[j];
            j--;
        } else {
            celdas[i].textContent = '';
        }
    }
});