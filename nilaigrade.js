const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("85, 70, 55, 40: ", (input) => {
    const nilai = Number(input);

    if (isNaN(nilai)) {
        console.log("Input harus berupa angka!");
    } else if (nilai >= 85) {
        console.log("Nilai Anda: A");
    } else if (nilai >= 70) {
        console.log("Nilai Anda: B");
    } else if (nilai >= 55) {
        console.log("Nilai Anda: C");
    } else if (nilai >= 40) {
        console.log("Nilai Anda: D");
    } else {
        console.log("Nilai Anda: E");
    }

    rl.close();
});