function convertTemperature() {
    let conversionType = document.getElementById("conversion").value;
    let temperature = parseFloat(document.getElementById("temperature").value);
    let decimalPlaces = document.querySelector('input[name="decimal"]:checked').value;
    let result;
    let tempchecker;
    
    if ((temperature) < -273.15) {
        document.getElementById("result").innerText = "Syötä kelvollinen lämpötila.";
        return;
    } else if (isNaN(temperature)) {
        document.getElementById("result").innerText = "Syötä kelvollinen lämpötila.";
        return;
    }
    
    
    if (conversionType === "c_to_f") {
        result = (temperature *1.8) + 32;
        tempchecker = fahr
    } else if (conversionType === "f_to_c") {
        result = (temperature - 32) /1.8;
        tempchecker = celc
    }
    
    document.getElementById("result").innerText = `Tuloksena: ${result.toFixed(decimalPlaces)}°`;
}