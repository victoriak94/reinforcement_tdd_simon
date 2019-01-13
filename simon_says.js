module.exports = {echo, shout, repeat, startOfWord, firstWord};

function echo(word) {
  return `${word}`;
};

function shout(word) {
  let wordUpperCase = word.toUpperCase();
  return `${wordUpperCase}`;
};

function repeat(word, numberRepeat) {
  wordWithSpace = word + ' ';
  wordRepeated = wordWithSpace.repeat(numberRepeat);
  return wordRepeated.split('').slice(0, -1).join('');
};

function startOfWord(word, numberLettersReturned) {
  return word.split('').slice(0, numberLettersReturned).join('');
};

function firstWord(message) {
  let messageArray = message.split(' ');
  return messageArray[0];
};
