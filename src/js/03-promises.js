import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const firstDelay = document.querySelector('input[name="delay"]');
const step = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');
const createButton = document.querySelector('button[type="submit"]');
    
function createPromise(position, delay) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const shouldResolve = Math.random() > 0.3;
            if (shouldResolve) {
                resolve({ position, delay });
            } else {
                reject({ position, delay });
            }
        }, delay);
    });
    return promise;
};
    
createButton.addEventListener('click', handlerSubmit);

function handlerSubmit(evt) {
    evt.preventDefault();
    for (let i = 0; i < amount.value; i += 1) {

        const firstDelayNumber = Number(firstDelay.value);
        const stepNumber = Number(step.value);
        
        createPromise(i + 1,( firstDelayNumber + i * stepNumber))
        .then(({ position, delay }) => {
            console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
            return Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
            console.log(`❌ Rejected promise ${position} in ${delay}ms`);
            return Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        });
        
    };
    form.reset();
}

