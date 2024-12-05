/*
  Реализовать функцию runWorker, запускающую воркер.
  Код для воркера уже написан и представляет собой простой подсчет чисел Фибоначчи.
*/

const { Worker } = require('worker_threads');
const path = require('path');

const workerPath = path.resolve('./workers/worker.js');

function runWorker(data) {
  // type code
}

runWorker(10).then(result => console.log(`Fibonacci result: ${result}`));
