const MORSE_TABLE = {
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

function decode(str) {
    let newStr = str.replace(/\s/g, "**********").split(''),
      convertStr = [],
       objKeys = Object.keys(MORSE_TABLE),
       objValues = Object.values(MORSE_TABLE);
  newStr.forEach((item) => {
    if(item === "*") {
      convertStr.push(item)
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
      let count = symbols.length;
      let zero = "0"
      while(count < 10) {
        symbols = zero + symbols;
        count++;
      }
    }
      endArr.push(symbols);
  }
  return endArr.join('');
}