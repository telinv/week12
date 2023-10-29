const buttonOne = document.querySelector('.b-1');
const result = document.getElementById('bmiresult');

function calculateBMI() {
  const weight = Number(document.getElementById('weight').value);
  const height = Number(document.getElementById('height').value);
  const power = Math.pow(height, 2);
  const getBmi = weight / power;
  const fixedResult = getBmi.toFixed(2);
  result.textContent = `Ваш ИМТ составляет ${fixedResult}`;
}

buttonOne.addEventListener('click', calculateBMI);