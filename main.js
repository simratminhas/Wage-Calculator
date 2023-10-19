//Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //INPUT
  let numberOfHoursWorked = +document.getElementById("hours").value;
  let numberOfOvertimeHoursWorked = +document.getElementById("overtime").value;
  let rateOfPay = +document.getElementById("pay").value;

  //PROCESS
  let wage =
    (numberOfHoursWorked + numberOfOvertimeHoursWorked * 1.5) * rateOfPay;

  let msg = `Weekly or Daily Wage: $ ${Math.round(wage)}`;

  //OUTPUT
  document.getElementById("output").innerHTML = msg;
}
