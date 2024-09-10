const inputText = document.getElementById("inputText");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");
let temp;

function converter(event){
    //to hold the result
    event.preventDefault();
    if (toFahrenheit.checked) {
        temp = Number(inputText.value);
        temp = (temp * (9/5) + 32).toFixed(1);
        result.textContent = temp + '℉'
    }else if (toCelcius.checked) {
        temp = Number(inputText.value);
        temp =( (temp - 32) * (5/9)).toFixed(1) ;
        result.textContent = temp + '℃'
    }
    else{
        result.textContent = 'please select a unit' 
    }
}
