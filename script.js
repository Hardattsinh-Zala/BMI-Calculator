let calculate = document.querySelector(".calculate");
let h3 = document.querySelector("h3");
let inputs = document.querySelectorAll("input");

let bmi = (height, weight) => {
    let h = height / 100;
    
    let val = weight / (h*h);
    
    return val;
}

calculate.addEventListener("click", () => {
    let height = parseFloat(document.querySelector("#height").value);
    let weight = parseFloat((document.querySelector("#weight").value));

    let BMI = bmi(height, weight);

    for(let input of inputs) {
        if(input.value === "") {
            return;
        }
    }
    h3.innerText = `Your BMI is ${(BMI).toFixed(2)}.`;
})
