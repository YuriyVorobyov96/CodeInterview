function memoize (fn) {
  const cache = {}; // or Map
  
  return function (...args) {
    
  }
}

const sum = (...rest) => {
  console.log('Вызов')
  return rest.reduce((acc, item) => {
    return acc + item;
  }, 0)
}

const memoizedSum = memoize(sum);

console.log(memoizedSum(1,2,3)) // Вызов
console.log(memoizedSum(1,2,3)) // Кэш
console.log(memoizedSum(1,2,3)) // Кэш
console.log(memoizedSum(1,2,5)) // Вызов
console.log(memoizedSum(1,2,5)) // Кэш
console.log(memoizedSum(1,2,5)) // Кэш