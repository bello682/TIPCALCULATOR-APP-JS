const buttonEl = document.getElementById("calculator");
const billEl = document.getElementById("bill");
const tipEl = document.getElementById("tip");
const totalSpan = document.getElementById("total");




function calculateTotal() {
    const billValue = billEl.value;
    const tipValue = tipEl.value;
    const total = billValue * (1 + tipValue / 100);
    totalSpan.innerHTML = total.toFixed(2); // toFixed() is use to set decimal place into 1 decimal, 2 decimal place and more.
};

buttonEl.addEventListener('click', calculateTotal);
