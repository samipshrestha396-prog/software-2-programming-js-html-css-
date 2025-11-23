function checkPrime() {
    let num = document.getElementById("numInput").value;
    let result = document.getElementById("result");

    if (num <= 1) {
        result.innerHTML = num + " is NOT a prime number.";
        return;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            result.innerHTML = num + " is NOT a prime number.";
            return;
        }
    }

    result.innerHTML = num + " IS a prime number.";
}
