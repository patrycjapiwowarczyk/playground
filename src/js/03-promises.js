import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
const formButton = document.querySelector('button');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      setTimeout(() => resolve({ position, delay }), delay);
    } else {
      setTimeout(() => reject({ position, delay }), delay);
    }
  });
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const firstPromiseDelay = Number(form.delay.value);
  const delayStep = Number(form.step.value);
  const promisesAmount = Number(form.amount.value);
  formButton.disabled = true;
  for (let i = 0; i < promisesAmount; i++) {
    const position = i + 1;
    const delay = firstPromiseDelay + delayStep * i;

    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
  formButton.disabled = false;
});
