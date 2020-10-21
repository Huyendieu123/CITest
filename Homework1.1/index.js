let inputNumber = prompt('Nhập inputNumber:');
let firtNum = prompt('Nhập firtNum:');
let n = Number(inputNumber);
let x = Number(firtNum);

if ((n % 2 == 0) && 0 <= x <= n-1) {
        var x1 = n/2;
        if (x < x1) {
            var x2 = x + x1;
            alert("The OpppsiteNumber " +   x2);
        }
    else {
        var x3= x - x1
        alert("The OpppsiteNumber " +  x3);
    }
};