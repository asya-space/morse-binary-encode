/* just a test script. original script look at index.js */

function encodeToBinaryMorse(str) {
      const MORSE_TABLE = {
        a: '.-', b: '-...', c: '-.-.', d: '-..', e: '.', f: '..-.',
        g: '--.', h: '....', i: '..', j: '.---', k: '-.-', l: '.-..',
        m: '--', n: '-.', o: '---', p: '.--.', q: '--.-', r: '.-.',
        s: '...', t: '-', u: '..-', v: '...-', w: '.--', x: '-..-',
        y: '-.--', z: '--..',
        1: '.----', 2: '..---', 3: '...--', 4: '....-', 5: '.....',
        6: '-....', 7: '--...', 8: '---..', 9: '----.', 0: '-----',
      };

      let result = [];

      for (let char of str.toLowerCase()) {
        if (char === ' ') {
          result.push('**********');
          continue;
        }

        let morse = MORSE_TABLE[char];
        if (!morse) continue;

        let binary = '';
        for (let symbol of morse) {
          binary += symbol === '.' ? '10' : '11';
        }

        binary = binary.padStart(10, '0');
        result.push(binary);
      }

      return result.join('');
    }

    function encode() {
      const input = document.getElementById("inputText").value;
      const output = encodeToBinaryMorse(input);
      document.getElementById("output").textContent = output || '(пусто)';
    }
encode();
