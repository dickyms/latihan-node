var readlineSync = require('readline-sync');
let msg, shift;

msg = readlineSync.question("Message: ");
shift = readlineSync.question("Shift (0-26): ");
console.log(caesarCipher(msg, shift));

function caesarCipher (msg, shift) {
    let result = "";
    for (let i = 0; i < msg.length; i++) {
        let cc = msg.charCodeAt(i);
        if (cc >= 65 && cc <= 90) {
            result += String.fromCharCode((cc - 65 + shift) % 26 + 65);
        } else if (cc >= 97 && cc <= 122) {
            result += String.fromCharCode((cc - 97 + shift) % 26 + 97);
        } else {
            result += text.charAt(i);
        }
    }
    return result;
}