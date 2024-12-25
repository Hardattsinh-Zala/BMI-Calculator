let calculate = document.querySelector(".calculate");
let form = document.querySelector("form");
let h3 = document.querySelector("h3");
let height;
let weight;

let bmi = () => {
    //3.28084ft = 1m
    let h = (parseFloat(height[0]) + (parseFloat(height[1]) / 100)) / 3.28084;
    
    let val = weight / (h*h);
    
    return val;
}

// let newPage = (BMI) => {
//     form.style.display = "none";
//     h3.innerText = `Your BMI is ${(BMI).tofixed(2)}`;
// }

calculate.addEventListener("click", () => {
    let heights = document.querySelectorAll(".height");

    if(heights.length === 2) {
        height = [heights[0].value, heights[1].value];
    }
    
    weight = parseFloat((document.querySelector("#weight").value));

    let BMI = bmi();
    alert(`Your BMI is ${(BMI).toFixed(2)}.`);
    // newPage(BMI);
})
