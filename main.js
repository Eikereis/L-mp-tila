lampotila_c = 0
lampotila_f = 0
function lampotilaconverter() {
    c = document.getElementById("lampotila");
    f = c*1.8+32;
    document.log(f);
}


if (lampotila_c < -273,15) { 
    return Text("liia kylmä")
}