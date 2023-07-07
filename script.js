function decimalBinarioHexadecimal() {
    let valorDecimal = document.getElementById("decimal").value;
    let valorBinario = parseInt(valorDecimal).toString(2);
    let valorHexadecimal = parseInt(valorDecimal).toString(16).toUpperCase();

    document.getElementById("binario").value = valorBinario;
    document.getElementById("hexadecimal").value = valorHexadecimal;
}

function binarioDecimalHexadecimal() {
    let valorBinario = document.getElementById("binario").value;
    let valorDecimal = parseInt(valorBinario, 2);
    let valorHexadecimal = valorDecimal.toString(16).toUpperCase();

    document.getElementById("decimal").value = valorDecimal;
    document.getElementById("hexadecimal").value = valorHexadecimal;
}
