import engine from '..';
import { cons } from 'hexlet-pairs';
import generateNumber from '../utils';

const greeting = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (num) => {
  if (num === 0 || num === 1) {
    return true;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const primeData = () => {
  const question = generateNumber(0, 3571);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => engine(greeting, primeData);
