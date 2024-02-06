/*Функція createReversedArray() може приймати довільну кількість аргументів. Доповни код функції так, щоб вона повертала масив усіх аргументів, 
але в масиві вони повинні йти у зворотному порядку. Тобто, при виклику createReversedArray(1, 2, 3), функція має повернути масив [3, 2, 1]. 
Використовуй цикл або метод масиву toReversed(), який застосовується до масиву і результатом роботи повертає новий масив з елементами у 
зворотньому порядку.*/

function createReversedArray() {
  const newArray = Array.from(arguments);
  console.log(`newArray is ${newArray}`);
  const revArray = newArray.toReversed();
  console.log(revArray);
  return revArray;
}

console.log(createReversedArray(12, 85, 37, 4));