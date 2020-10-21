let btnrandom = document.getElementById('random');
let btninput = document.getElementById('inputNumber');
let count = 0;
function checkInputNumber() {
    var y = btninput.value;
    while (true) {
        if (y == "") {
            alert('You must input number!');
            break;
        } else if (isNaN(y)) {
            alert("You must input number!");
            break;
        } else {
            count++;
            return y;
        }
    }
}
function randomnumber() {
    var x = Number(Math.floor(Math.random() * 10) + 1);
    return x;
}

btnrandom.addEventListener('click', () => {
    let y = checkInputNumber();
    let x = randomnumber();
    if (y == x) {
        alert('Congrat! You guess right!!!');
        count = 0;
    }
    if (!isNaN(y)) {
        alert(`Wrong! ${3 - count} guess times left`);
    }
    if (count == 3) {
        alert(`You lose! The lucky number is ${x}`)
    }
})
