const morseTable = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function binaryEncoder(str) {
    let newStr = str.toLowerCase().replace(/\s/g, "**********").split(''),
        convertStr = [],
        objKeys = Object.keys(morseTable),
        objValues = Object.values(morseTable);
    newStr.forEach((item) => {
        if(item === "*") {
        convertStr.push(item);
      }
      objValues.forEach((letter, pos) => {
          if(letter === item) {
          convertStr.push(objKeys[pos]);
      }})
  });
  let endArr = [];
  for(let symbols of convertStr) {
      symbols = symbols.replace(/[-]/gi, 11).replace(/[.]/gi, 10)
      if(symbols.length < 10 && symbols !== "*") {
        let count = symbols.length,
            zero = "0"
        while(count < 10) {
            symbols = zero + symbols;
            count++;
          }
      }
      endArr.push(symbols);
    }
    return endArr.join('');
}

function encode() {
    const input = document.getElementById("inputText").value;
    const output = binaryEncoder(input);
    document.getElementById("output").textContent = output || '(empty)';
    }

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("inputText");
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      encode();
    }
  });
});

/* decode */

function binaryDecoder(expr) {
    let splitByBlock = [],
    letters = [];
    for (let i = 0; i < expr.length; i += 10) {
        splitByBlock.push(expr.slice(i, i + 10));
    }
    splitByBlock.map((item) => {
        let char = '';
        if(item === "**********") char += " ";
        for(let j = 0; j < 10; j += 2) {
            const pair = item.slice(j, j + 2)
            if(pair === "11") char += "-";
            if(pair === "10") char += ".";
        }
        letters.push(morseTable[char] || ' ');
    })
    return letters.join("");
}

function decode() {
    const input = document.getElementById("enterCode").value;
    const output = binaryDecoder(input);
    document.getElementById("showText").textContent = output || '(empty)';
}

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("enterCode");
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      decode();
    }
  });
});