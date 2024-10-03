// aşağıdaki fonksiyon bütün değerleri temizliyo
function clearScreen() {
    document.getElementById("result").value = "";
}

// aşağıdaki fonksiyon degerleri gosterr
function display(value) {
    document.getElementById("result").value += value;
}
// aşağıdaki fonksiyon ifadeyi degerlendirip sonucu dondurur
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}
