function caesarCipher(text, shift, mode) {

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    shift = shift % 26;

    if (mode === 'decrypt') {
        shift = -shift;
    }

    let result = '';

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (alphabet.includes(char)) {
            let index = alphabet.indexOf(char);
            let newIndex = (index + shift + 26) % 26;
            result += alphabet[newIndex];
        }

        else if (lowerAlphabet.includes(char)) {
            let index = lowerAlphabet.indexOf(char);
            let newIndex = (index + shift + 26) % 26;
            result += lowerAlphabet[newIndex];
        }

        else {
            result += char;
        }

    }

    return result;

}

function processText() {

    const text = document.getElementById('text').value;
    const shift = 3;
    const mode = document.getElementById('mode').value;
    const result = caesarCipher(text, shift, mode);
    document.getElementById('result').innerText = result;
    
}