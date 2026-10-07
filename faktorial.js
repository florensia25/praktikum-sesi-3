const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan angka: ", (input) => {
    const angka = Number(input);
    let faktorial = 1;

    if (isNaN(angka)) {
        console.log("Input harus berupa angka!");
    } 
    else if (angka < 0) {
        console.log("Faktorial tidak dapat dihitung untuk bilangan negatif!");
    } 
    else {
        for (let i = 1; i <= angka; i++) {
            faktorial = faktorial * i;
        }

        console.log("Faktorial dari", angka, "adalah", faktorial);
    }

    rl.close();
});