const API_KEY = `40861ee34c2aeb5d011636e6cb16026a`;
const cityDiv = document.getElementById('city-container');
const errorMsg = document.getElementById('error-msg')
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    cityDiv.textContent = '';
    document.getElementById('city-name').value = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
}

const displayTemperature = temparature => {

    if(temparature.cod === '404' || temparature.cod === '400'){
        errorMsg.innerText = 'Please Put A Correct City Name';
    }
    else{
        cityDiv.textContent = '';
        errorMsg.innerText = '';

        const div = document.createElement('div');
        div.innerHTML = `
            <img src="https://openweathermap.org/img/wn/${temparature.weather[0].icon}@2x.png" alt="">
            <h1>${temparature.name}</h1>
            <h3><span>${temparature.main.temp}</span>&deg;C</h3>
            <h1 class="lead">${temparature.weather[0].main}</h1>
        `;
        cityDiv.appendChild(div);
    }

}