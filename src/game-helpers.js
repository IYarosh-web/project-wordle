/**
 * Thanks to Github user dylano for supplying a more-accurate
 * solving algorithm!
 */

export function checkGuess(guess, answer) {
  // This constant is a placeholder that indicates we've successfully
  // dealt with this character (it's correct, or misplaced).
  const SOLVED_CHAR = '✓';

  if (!guess) {
    return null;
  }

  const guessChars = guess.toUpperCase().split('');
  const answerChars = answer.split('');

  const result = [];

  // Step 1: Look for correct letters.
  for (let i = 0; i < guessChars.length; i++) {
    if (guessChars[i] === answerChars[i]) {
      result[i] = {
        letter: guessChars[i],
        status: 'correct',
      };
      answerChars[i] = SOLVED_CHAR;
      guessChars[i] = SOLVED_CHAR;
    }
  }

  // Step 2: look for misplaced letters. If it's not misplaced,
  // it must be incorrect.
  for (let i = 0; i < guessChars.length; i++) {
    if (guessChars[i] === SOLVED_CHAR) {
      continue;
    }

    let status = 'incorrect';
    const misplacedIndex = answerChars.findIndex(
      (char) => char === guessChars[i]
    );
    if (misplacedIndex >= 0) {
      status = 'misplaced';
      answerChars[misplacedIndex] = SOLVED_CHAR;
    }

    result[i] = {
      letter: guessChars[i],
      status,
    };
  }

  return result;
}

export const getPressedLetter = (e) => {
  const code = e.code;

  const isValid = /[А-Я]/.test(code.toUpperCase());
  if (isValid) {
    return code.toUpperCase();
  }

  return mapKeyCodeToLetter(e.code);
}

export const getCurrentLang = () => {
  return navigator.language || navigator.userLanguage;
}

export const mapKeyCodeToLetter = (code) => {
  const map = {
    'KeyQ': "Й",
    'KeyW': "Ц",
    'KeyE': "У",
    'KeyR': "К",
    'KeyT': "Е",
    'KeyY': "Н",
    'KeyU': "Г",
    'KeyI': "Ш",
    'KeyO': "Щ",
    'KeyP': "З",
    'BracketLeft': "Х",
    'BracketRight': "Ъ",
    'KeyA': "Ф",
    'KeyS': "Ы",
    'KeyD': "В",
    'KeyF': "А",
    'KeyG': "П",
    'KeyH': "Р",
    'KeyJ': "О",
    'KeyK': "Л",
    'KeyL': "Д",
    'Semicolon': "Ж",
    'Quote': "Э",
    'KeyZ': "Я",
    'KeyX': "Ч",
    'KeyC': "С",
    'KeyV': "М",
    'KeyB': "И",
    'KeyN': "Т",
    'KeyM': "Ь",
    'Comma': "Б",
    'Period': "Ю",
  }

  return map[code];
}