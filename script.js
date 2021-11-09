function compute() {
  const amount = document.getElementById('principal');
  const amountValue = amount.value;

  const rate = document.getElementById('rate').value;
  const year = document.getElementById('year').value;

  if (!amountValue) {
    alert('Please enter a possitive number');
    amount.focus();
    return;
  }
  let price = 0;
  for (let i = 0; i < +year; i++) {
    price += +amountValue * (+rate / 100);
  }
  const goalYear = new Date().getFullYear() + +year;
  let htmlTemplate = `<span style="background-color: white;">If you deposit <span style="background-color: #FFFF00">${amountValue}</span>,</span><br/><span style="background-color: white;">
  at an interest rate of <span style="background-color: #FFFF00">${rate}%</span>.</span><br/><span style="background-color: white;">
  You will receive an amount of </span><span style="background-color: #FFFF00">${price}<span>,<br/><span style="background-color: white;">
  in the year </span><span style="background-color: #FFFF00">${goalYear}<span><br/>`;
  const result = document.getElementById('result');
  result.innerHTML = htmlTemplate;
}
function handleChange() {}

window.onload = function () {
  const rate = document.getElementById('rate');
  rate.onchange = function () {
    const rateLabel = document.getElementById('rate-label');
    rateLabel.innerText = ` ${rate.value}%`;
  };
};
