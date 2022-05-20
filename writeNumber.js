function writeNumber() {
    let firstNumber = rand(1, 6);
    let secondNumber = rand(1, 6);
    if (firstNumber === secondNumber) {
        document.getElementById("first").style.color = "red";
        document.getElementById("first").style.Text = firstNumber;
        document.getElementById("second").style.color = "red";
        document.getElementById("second").innerText =   secondNumber; 
    }
    document.getElementById("first").innerText =  firstNumber;
    document.getElementById("second").innerText = secondNumber;  
}

export { writeNumber };