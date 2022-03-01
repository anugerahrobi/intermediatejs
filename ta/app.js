const userBox = document.querySelector('.user');
const headline = document.querySelector('.headline');
const firstInput = document.querySelector('.input-1');
const lastInput = document.querySelector('.input-2');
const tagline = document.querySelector('.tagline');
const submitButton = document.querySelector('.submitBtn');
const inputBox = document.querySelector('.input-box');
const resultDiv = document.getElementById('results');

// Add eventlitner to the buttton and enter key

submitButton.addEventListener('click', fetchDatafromUI);

document.addEventListener('keypress', function (e) {

    if (e.keyCode === 13) {
        fetchDatafromUI();
    }



})
// fetchDatafromUI function

function fetchDatafromUI() {

    // get values
    const firstName = firstInput.value.toString();
    const lastName = lastInput.value.toString();

    //hide values
    userBox.style.display = 'none';
    tagline.style.display = 'none';
    inputBox.style.display = 'none';
    resultDiv.style.display = 'flex'
    //validation

    if (firstName !== '' && lastName !== '') {

        getDataFromApi(firstName, lastName);
    }


}


// getDataFromApi

function getDataFromApi(firstName, lastName) {
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${firstName}&sname=${lastName}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "love-calculator.p.rapidapi.com",
                "x-rapidapi-key": "e9ee3480abmsh8316a7d6c5faaa1p1e4cfejsnf1e116733a70"
            }
        })
        .then(response => {
            return response.json();
        }).then(result => {
            showDataIntoUi(result);

        })
        .catch(err => {
            showError(err);


        });
}

//showDataIntoUi

function showDataIntoUi(result) {

    const percentage = result.percentage;


    if (percentage > 75) {
        message.textContent = `Selamat,${userName.value}`;
        formalMessage.innerHTML = `${result.fname} ${result.sname} love's you <span> ${result.percentage}% </span> Sangat berjodoh ${userName.value}, Congratulation.`;
    } else if (percentage > 40 && percentage <= 75) {
        message.textContent = `Congratulation,${userName.value}`;
        formalMessage.innerHTML = `${result.fname} ${result.sname} love's you <span> ${result.percentage}% </span>. Caknyo Berjodoh nian`;
    } else if (percentage > 25 && percentage <= 40) {
        message.textContent = `Hey,${userName.value}`;
        formalMessage.innerHTML = `${result.fname} ${result.sname} love's you <span> ${result.percentage}% </span>,Your relationship is in danger .  Cubo Pikirke lagi ${result.fname} ${result.sname}.  Semoga berjodoh`;
    } else {
        message.textContent = `Hey,${userName.value}`;
        formalMessage.innerHTML = `${result.fname} ${result.sname} love's you <span> ${result.percentage}% </span>,${result.fname} ${result.sname} Belum bejodoh kayaknya. Maaf`;
    }

    setTimeout(() => {
        clearData();
    }, 10000);


}

