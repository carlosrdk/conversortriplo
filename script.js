function decimalBinarioHexadecimal() {
    let valorDecimal = document.getElementById("decimal").value;
    let valorBinario = parseInt(valorDecimal).toString(2);
    let valorHexadecimal = parseInt(valorDecimal).toString(16).toUpperCase();

    document.getElementById("binario").value = valorBinario;
    document.getElementById("hexadecimal").value = valorHexadecimal;
}
