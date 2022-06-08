// bu fonksiyon butun degerleri temizler
function clearScreen() {
    document.getElementById("result").value = "";
}

// bu fonksiyon degerleri gosterir
function display(value) {
    document.getElementById("result").value += value;
}
// bu fonksiyon ifadeyi degerlendirip sonucu dondurur
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}