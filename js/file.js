let apartmentPrice = prompt ('ВВЕДИТЕ СТОИМОСТЬ КВАРТИРЫ, в рублях:');
if (apartmentPrice == '' || apartmentPrice == null || isNaN (parseInt(apartmentPrice))) {
    $ ('.cell3').text ('нет данных');
} else {
    $ ('.cell3').text (apartmentPrice + ' руб.');
}

let anInitialFee = prompt ('ВВЕДИТЕ ПЕРВОНАЧАЛЬНЫЙ ВЗНОС, в рублях:');
if (anInitialFee == '' || anInitialFee == null || isNaN (parseInt(anInitialFee))) {
    $ ('.cell4').text ('нет данных');
} else {
    $ ('.cell4').text (anInitialFee + ' руб.');
}

let creditTerm = prompt ('ВЕДИТЕ СРОК КРЕДИТА, количество лет:');
if (creditTerm == '' || creditTerm == null || isNaN (parseInt(creditTerm))) {
    $ ('.cell6').text ('нет данных');
} else {
    $ ('.cell6').text (creditTerm + ' лет');
}


let loanBalance = apartmentPrice - anInitialFee;
let monthlyPayment = loanBalance * (0.13 / 12) + loanBalance / (12 * creditTerm);
let cashBalance = 55000 + 74000 - 32000 - monthlyPayment; 

if ( cashBalance >= 0 ) {
    $ ('.cell11').text (Math.round (monthlyPayment) + ' руб.');
    $ ('.cell12').text (Math.round (cashBalance) + ' руб.');
} else {
    $ ('.cell11').text ('Отказано');
    $ ('.cell12').text (' - ');
}