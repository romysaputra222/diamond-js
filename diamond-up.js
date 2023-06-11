let x = '';
let z = 20;

for (q = 1; q <= z - 2; q++) {
    for (e = 1; e <= z - q; e++) {
        process.stdout.write(' ')
    }
    for (w = 0; w < 2 * q - 1; w++) {
        process.stdout.write('*')
    }
    process.stdout.write('\n');
}
