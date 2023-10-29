//Задание 1
//Найдите сумму num1 и num2. Добавьте слушатель события на кнопку "Задание 1" и выведите результат на экран.

const buttonOne = document.querySelector('.b-1');
const resultOne = document.querySelector('#resultOne');

const makeOne = () => {
	const num1 = 5;
	const num2 = 10;
	const sum = num1 + num2;
	console.log(`${num1}+${num2}= ${sum}`);
	//Ваш код
};

buttonOne.addEventListener('click', makeOne); //Слушатель уже добавлен

//Задание 2
//Найдите разность num1 и num2. Добавьте слушатель события на кнопку "Задание 2" и выведите результат на экран.

const buttonTwo = document.querySelector('.b-2');
const resultTwo = document.querySelector('#resultTwo');

const makeTwo = () => {
	const num1 = 20;
	const num2 = 7;
	const dif = num1 - num2;
	console.log(`${num1}-${num2}=${dif}`);
	//Ваш код
};
buttonTwo.addEventListener('click', makeTwo);
//Добавьте слушатель события

//Задание 3
//Найдите произведение num1 и num2. Добавьте слушатель события на кнопку "Задание 3" и выведите результат на экран.

const buttonThree = document.querySelector('.b-3');
const resultThree = document.querySelector('#resultThree');

const makeThree = () => {
	const num1 = 8;
	const num2 = 4;
	const comp = num1 * num2;
	console.log(`${num1} * ${num2} = ${comp}`);
	//Ваш код
};
buttonThree.addEventListener('click', makeThree);
//Добавьте слушатель события

//Задание 4
//Найдите результат операции деления num1 на num2. Добавьте слушатель события на кнопку "Задание 4" и выведите результат на экран.

const buttonFour = document.querySelector('.b-4');
const resultFour = document.querySelector('#resultFour');

const makeFour = () => {
	const num1 = 16;
	const num2 = 2;
	const div4 = num1 / num2;
	console.log(`${num1} / ${num2} = ${div4}`);
	//Ваш код
};
buttonFour.addEventListener('click', makeFour );
//Добавьте слушатель события

//Задание 5
//Возведите число num в степень power. Добавьте слушатель события на кнопку "Задание 5" и выведите результат на экран.
//Подсказка: Используйте метод Math.pow(a,b)

const buttonFive = document.querySelector('.b-5');
const resultFive = document.querySelector('#resultFive');

const makeFive = () => {
	const num = 3;
	const power = 4;
	console.log(Math.pow(num,power));
	//Ваш код
};
buttonFive.addEventListener('click', makeFive );
//Добавьте слушатель события

//Задание 6
//Найдите результат от деления num1 на num2. Добавьте слушатель события на кнопку "Задание 6" и выведите результат на экран.

const buttonSix = document.querySelector('.b-6');
const resultSix = document.querySelector('#resultSix');

const makeSix = () => {
	const num1 = 20;
	const num2 = 5;
	const div6 = num1 / num2;
	console.log(`${num1} / ${num2} = ${div6}`);
	//Ваш код
};
buttonSix.addEventListener('click',makeSix);
//Добавьте слушатель события

//Задание 7
//Найдите остаток от деления num1 на num2. Добавьте слушатель события на кнопку "Задание 7" и выведите результат на экран.

const buttonSeven = document.querySelector('.b-7');
const resultSeven = document.querySelector('#resultSeven');

const makeSeven = () => {
	const num1 = 25;
	const num2 = 7;
	const remains7 = num1 % num2;
	console.log(remains7);
	//Ваш код
};
buttonSeven.addEventListener('click',makeSeven);
//Добавьте слушатель события

//Задание 8
//Найдите остаток от деления num1 на 10. Добавьте слушатель события на кнопку "Задание 8" и выведите результат на экран.

const buttonEight = document.querySelector('.b-8');
const resultEight = document.querySelector('#resultEight');

const makeEight = () => {
	const num1 = 123;
	const remains8 = num1 % 10;
	console.log(remains8);
	//Ваш код
};
buttonEight.addEventListener('click',makeEight);
//Добавьте слушатель события

//Задание 9
//Найдите остаток от деления num1 на 100. Добавьте слушатель события на кнопку "Задание 9" и выведите результат на экран.

const buttonNine = document.querySelector('.b-9');
const resultNine = document.querySelector('#resultNine');

const makeNine = () => {
	const num1 = 4567;
	const remains9 = num1 % 100;
	console.log(remains9);
	//Ваш код
};
buttonNine.addEventListener('click',makeNine);
//Добавьте слушатель события

//Задание 10
//Найдите символ по индексу 2 в строке "Hello". Добавьте слушатель события на кнопку "Задание 10" и выведите результат на экран.

const buttonTen = document.querySelector('.b-10');
const resultTen = document.querySelector('#resultTen');

const makeTen = () => {
	const str = 'Hello';
	console.log(str[2]);
	//Ваш код
};
buttonTen.addEventListener('click',makeTen);
//Добавьте слушатель события

//Задание 11
//Выведите на экран результат операции 5 взятое по модулю 2. Добавьте слушатель события на кнопку "Задание 11" и выведите результат на экран.

const buttonEleven = document.querySelector('.b-11');
const resultEleven = document.querySelector('#resultEleven');

const makeEleven = () => {
	console.log(5 % 2);
	//Ваш код
};
buttonEleven.addEventListener('click',makeEleven);
//Добавьте слушатель события

//Задание 12
//Объедините строки str1 и str2. Добавьте слушатель события на кнопку "Задание 12" и выведите результат на экран.

const buttonTwelve = document.querySelector('.b-12');
const resultTwelve = document.querySelector('#resultTwelve');

const makeTwelve = () => {
	const str1 = 'Hello, ';
	const str2 = 'World!';
	console.log(str1, str2);
	//Ваш код
};
buttonTwelve.addEventListener('click',makeTwelve);
//Добавьте слушатель события

//Задание 13
//Найдите длину строки str. Добавьте слушатель события на кнопку "Задание 13" и выведите результат на экран.

const buttonThirteen = document.querySelector('.b-13');
const resultThirteen = document.querySelector('#resultThirteen');

const makeThirteen = () => {
	const str = 'JavaScript';
	console.log(str.length);
	//Ваш код
};
buttonThirteen.addEventListener('click',makeThirteen);
//Добавьте слушатель события

//Задание 14
//Приведите строку str к нижнему регистру. Добавьте слушатель события на кнопку "Задание 14" и выведите результат на экран.

const buttonFourteen = document.querySelector('.b-14');
const resultFourteen = document.querySelector('#resultFourteen');

const makeFourteen = () => {
	const str = 'JavaScript';
	const str2 = str.toLowerCase();
	console.log(str2);
	//Ваш код
};
buttonFourteen.addEventListener('click',makeFourteen);
//Добавьте слушатель события

//Задание 15
//Приведите строку str к верхнему регистру. Добавьте слушатель события на кнопку "Задание 15" и выведите результат на экран.

const buttonFifteen = document.querySelector('.b-15');
const resultFifteen = document.querySelector('#resultFifteen');

const makeFifteen = () => {
	const str = 'JavaScript';
	const str2 = str.toUpperCase();
	console.log(str2);
	//Ваш код
};
buttonFifteen.addEventListener('click',makeFifteen);
//Добавьте слушатель события

//Задание 16
//Получите подстроку из строки str, начиная с индекса 3 и до конца строки. Добавьте слушатель события на кнопку "Задание 16" и выведите результат на экран.
//Подсказка: Используйте для получения подстроки из строки используйте метод substring()

const buttonSixteen = document.querySelector('.b-16');
const resultSixteen = document.querySelector('#resultSixteen');

const makeSixteen = () => {
	const str = 'JavaScript';
	const res16 = str.substring(3);
	console.log(res16);
	//Ваш код
};
buttonSixteen.addEventListener('click',makeSixteen);
//Добавьте слушатель события

//Задание 17
//Получите подстроку из строки str, начиная с индекса 3 и до индекса 7 (не включая его). Добавьте слушатель события на кнопку "Задание 17" и выведите результат на экран.
//Подсказка: Используйте для получения подстроки из строки используйте метод substring()

const buttonSeventeen = document.querySelector('.b-17');
const resultSeventeen = document.querySelector('#resultSeventeen');

const makeSeventeen = () => {
	const str = 'JavaScript';
	const res17 = str.substring(3,7);
	console.log(res17);
	//Ваш код
};
buttonSeventeen.addEventListener('click',makeSeventeen);
//Добавьте слушатель события

//Задание 18
//Замените все вхождения подстроки 'world' на 'JavaScript' в строке str. Добавьте слушатель события на кнопку "Задание 18" и выведите результат на экран.
//Подсказка: Для замены подстрок в строке используйте метод replace()
const buttonEighteen = document.querySelector('.b-18');
const resultEighteen = document.querySelector('#resultEighteen');

const makeEighteen = () => {
	const str = 'Hello, world!';
	const replacementWithJs = str.replace('world' , 'JavaScript');
	console.log(replacementWithJs);
	//Ваш код
};
buttonEighteen.addEventListener('click',makeEighteen);
//Добавьте слушатель события

//Задание 19
//Получите подстроку из строки str, начиная с индекса 7 и длиной 6 символов. Добавьте слушатель события на кнопку "Задание 19" и выведите результат на экран.

const buttonNineteen = document.querySelector('.b-19');
const resultNineteen = document.querySelector('#resultNineteen');

const makeNineteen = () => {
	const str = 'Hello, world!';
	const res19 = str.substr(7,6);
	console.log(res19);
	//Ваш код
};
buttonNineteen.addEventListener('click',makeNineteen);
//Добавьте слушатель события

//Задание 20
//Найдите максимальное число из чисел 10, 25, 5, 30, 15. Добавьте слушатель события на кнопку "Задание 20" и выведите результат на экран.
//Подсказка: для нахождения максимального числа из заданных используйте метод Math.max()

const buttonTwenty = document.querySelector('.b-20');
const resultTwenty = document.querySelector('#resultTwenty');

const makeTwenty = () => {
	console.log(Math.max(10, 25, 5, 30, 15));
	//Ваш код
};
buttonTwenty.addEventListener('click',makeTwenty);
//Добавьте слушатель события

// Задание 21
// Выведите на экран случайное целое число от 1 до 10. Добавьте слушатель события на кнопку "Задание 21" и выведите результат на экран.

const buttonTwentyOne = document.querySelector('.b-21');
const resultTwentyOne = document.querySelector('#resultTwentyOne');

const makeTwentyOne = () => {
	console.log(Math.round(Math.random()*10));
	//Ваш код
};
buttonTwentyOne.addEventListener('click',makeTwentyOne);
//Добавьте слушатель события

//Задание 22
//Найдите минимальное число из чисел 10, 25, 5, 30, 15. Добавьте слушатель события на кнопку "Задание 21" и выведите результат на экран.
//Подсказка: для нахождения максимального числа из заданных используйте метод Math.min()

const buttonTwentyTwo = document.querySelector('.b-22');
const resultTwentyTwo = document.querySelector('#resultTwentyTwo');

const makeTwentyTwo = () => {
	console.log(Math.min(10, 25, 5, 30, 15));
	//Ваш код
};
buttonTwentyTwo.addEventListener('click',makeTwentyTwo);
//Добавьте слушатель события

//Задание 23
//Выведите на экран результат возведения числа 2 в степень 5. Добавьте слушатель события на кнопку "Задание 23" и выведите результат на экран.
//Подсказка: Используйте метод Math.pow(a,b)

const buttonTwentyThree = document.querySelector('.b-23');
const resultTwentyThree = document.querySelector('#resultTwentyThree');

const makeTwentyThree = () => {
	console.log(Math.pow(2,5));
	//Ваш код
};
buttonTwentyThree.addEventListener('click',makeTwentyThree);
//Добавьте слушатель события

//Задание 24
//Выведите на экран наименьшее число из чисел 7, 3, 11, 5, 9. Добавьте слушатель события на кнопку "Задание 24" и выведите результат на экран.

const buttonTwentyFour = document.querySelector('.b-24');
const resultTwentyFour = document.querySelector('#resultTwentyFour');

const makeTwentyFour = () => {
	console.log(Math.min(7, 3, 11, 5, 9));
	//Ваш код
};
buttonTwentyFour.addEventListener('click',makeTwentyFour);
//Добавьте слушатель события

//Задание 25
//Выведите на экран наибольшее число из чисел 7, 3, 11, 5, 9. Добавьте слушатель события на кнопку "Задание 25" и выведите результат на экран.

const buttonTwentyFive = document.querySelector('.b-25');
const resultTwentyFive = document.querySelector('#resultTwentyFive');

const makeTwentyFive = () => {
	console.log(Math.max(7, 3, 11, 5, 9));
	//Ваш код
};
buttonTwentyFive.addEventListener('click',makeTwentyFive);
//Добавьте слушатель события

//Задание 26
//Выведите на экран случайное число от 0 до 1 с точностью до 4 знаков после запятой. Добавьте слушатель события на кнопку "Задание 26" и выведите результат на экран.
//Подсказка: Используйте метод toFixed(4)

const buttonTwentySix = document.querySelector('.b-26');
const resultTwentySix = document.querySelector('#resultTwentySix');

const makeTwentySix = () => {
	const randomFrom0To1 = Math.random()*1;
	console.log(randomFrom0To1.toFixed(4));
	//Ваш код
};
buttonTwentySix.addEventListener('click',makeTwentySix);
//Добавьте слушатель события

//Задание 27
//Выведите на экран случайное целое число от 50 до 100. Добавьте слушатель события на кнопку "Задание 27" и выведите результат на экран.

const buttonTwentySeven = document.querySelector('.b-27');
const resultTwentySeven = document.querySelector('#resultTwentySeven');

const makeTwentySeven = () => {
	console.log(Math.floor(Math.random() * (100-50)+50));
	//Ваш код
};
buttonTwentySeven.addEventListener('click',makeTwentySeven);
//Добавьте слушатель события

//Задание 28
//Округлите число 4.47 в большую сторону с помощью метода Math.ceil(). Добавьте слушатель события на кнопку "Задание 28" и выведите результат на экран.

const buttonTwentyEight = document.querySelector('.b-28');
const resultTwentyEight = document.querySelector('#resultTwentyEight');

const makeTwentyEight = () => {
	console.log(Math.ceil(4.47));
	//Ваш код
};
buttonTwentyEight.addEventListener('click',makeTwentyEight);
//Добавьте слушатель события

//Задание 29
//Получите квадратный корень из числа 16 с помощью метода Math.sqrt(). Добавьте слушатель события на кнопку "Задание 29" и выведите результат на экран.

const buttonTwentyNine = document.querySelector('.b-29');
const resultTwentyNine = document.querySelector('#resultTwentyNine');

const makeTwentyNine = () => {
	console.log(Math.sqrt(16));
	//Ваш код
};
buttonTwentyNine.addEventListener('click',makeTwentyNine);
//Добавьте слушатель события

//Задание 30
//Получите квадратный корень из числа 25 с помощью метода Math.sqrt(). Добавьте слушатель события на кнопку "Задание 30" и выведите результат на экран.

const buttonThirty = document.querySelector('.b-30');
const resultThirty = document.querySelector('#resultThirty');

const makeThirty = () => {
	console.log(Math.sqrt(25));
	//Ваш код
};
buttonThirty.addEventListener('click',makeThirty);
//Добавьте слушатель события
