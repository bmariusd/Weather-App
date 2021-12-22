//* API
const API_KEY = `AIzaSyB3OwFNcIQkNK6t45-w8P8zEHlpWiU4qco`;
const userInput = document.querySelectorAll('.nav--search__name');

//* MAIN DETAILS QUERY SELECTORS:
const mainDate = document.querySelector('.today--date');
const mainWeather = document.querySelector('.today--icon');
const mainTemp = document.querySelector('.today--degrees');
const mainCondition = document.querySelector('.conditions__text');
const mainDegreesRange = document.querySelector('.degrees__text');
const mainRain = document.querySelector('.rain__text');
const cityImg = document.querySelector('.main--city__img');

//* TODAY / WEEKLY / CELSIUS / FAHRENHEIT QUERY SELECTORS:
const todayBtn = document.querySelector('.today');
const weeklyBtn = document.querySelector('.weekly');
const celsiusFahrenheit = document.querySelector('.toggle-button');

//* TODAY HOURLY QUERY SELECTORS:
const today = document.querySelector('.hourly--weather');
const hourly = document.querySelector('.hour--conditions');

//* WEEKLY QUERY SELECTORS
const daily = document.querySelector('.daily');
const weekly = document.querySelector('.weekly--weather');
const weeklyConditions = document.querySelector('.weekly__conditions');
const desktopWeekly = document.querySelector('.desktop--weekly__weather');

//* TODAY HIGHLIGHTS QUERY SELECTORS:
const highlights = document.querySelector('.today--highlights');
const uvIndex = document.querySelector('.uv-index');
const uvIndexBar = document.querySelector('.bar');
const windValue = document.querySelector('.highlight--value__windstatus');
const windDirection = document.querySelector('.wind--direction__text');
const windDirectionImg = document.querySelector('.wind--direction__img');
const sunrise = document.querySelector('.highlight--value__sunrise');
const sunset = document.querySelector('.highlight--value__sunset');
const sunriseDifference = document.querySelector('.highlight--value__sunrise__difference');
const sunsetDifference = document.querySelector('.highlight--value__sunset__difference');
const humidity = document.querySelector('.highlight--value__humidity');
const humidityBar = document.querySelector('.humidity--progress__bar');
const visibility = document.querySelector('.highlight--value__visibility');
const airQualityIndex = document.querySelector('.highlight--value__aqi');
const aqiBar = document.querySelector('.aqi--progress__bar');

//* SEARCH AND INPUT QUERY SELECTORS:
const searchBtn = document.querySelectorAll('.main--search__btn');
const mobileSearchBtn = document.querySelector('.mobile--search__btn');
const search = document.querySelector('.search');
const todayNavbar = document.querySelector('.today');
const weeklyNavbar = document.querySelector('.weekly');
const mobileSearch = document.querySelector('.mobile--search');

// TODO after I get the data from the API
const mainData = {
	mainDate: new Date(),
	mainWeather: `few-clouds`,
	mainTemp: '10°',
	mainCondition: `Heavy Snow`,
	mainDegreesRange: `10°/-2°`,
	mainRain: `78%`,
};

// TODO after I get the data from the API
const hourlyData = {
	hourlyTimes: ['3 am', '6 am', '9 am', '12 pm', '3 pm', '6 pm', '9 pm'],
	hourlyTemperatures: ['10°', '11°', '12°', '13°', '14°', '15°', '16°'],
	hourlyRain: ['10%', '15%', '20%', '25%', '30%', '35%', '40%'],
	hourlyImages: ['thunderstorm', 'scattered-clouds', 'few-clouds', '25%', '30%', '35%', '40%'],
};

// TODO after I get the data from the API
const weeklyData = {
	weeklyDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
	weeklyTemperatures: ['0° / 10°', '1° / 11°', '2° / 12°', '3° / 13°', '4° / 14°', '5° / 15°', '6° / 16°'],
	weeklyRain: ['10%', '15%', '20%', '25%', '30%', '35%', '40%'],
	weeklyImages: ['thunderstorm', 'scattered-clouds', 'few-clouds', '25%', '30%', '35%', '40%'],
};

// TODO after I get the data from the API
const highlightsData = {
	uvIndex: 8,
	windStatus: 16.5,
	windDirection: 327,
	sunrise: '5:24 AM',
	sunset: '7:23 PM',
	humidity: 82,
	visibility: '4.3',
	airQualityIndex: 4,
};

//* Change main data from API!
mainDate.textContent = mainData.mainDate.toLocaleString('en-uk', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
mainWeather.setAttribute('data', `/images/${mainData.mainWeather}.svg`);
mainTemp.innerHTML = `${mainData.mainTemp}<sup>C</sup>`;
mainCondition.textContent = mainData.mainCondition;
mainDegreesRange.textContent = mainData.mainDegreesRange;
mainRain.textContent = `Rain - ${mainData.mainRain}`;
cityImg.src = '/images/bucharest.jpg';

//* Generate all hourly HTML data:
for (let i = 0; i < 6; i++) {
	hourly.insertAdjacentHTML(
		'afterend',
		`<div class="hour--conditions">
    <h3 class="hour">y am</h3>
    <object data="/images/few-clouds.svg" type="image/svg+xml" class="hour--image"></object>
    <h2 class="hour--degrees">15°</h2>
    <div class="hour--rain">
        <object data="/images/rain-logo.svg" type="image/svg+xml" class="hour--rain__icon"></object>
        <h3 class="hour--precipitation">50%</h3>
    </div>
    </div>`
	);

	weeklyConditions.insertAdjacentHTML(
		'afterend',
		`<div class="weekly__conditions">
		<h3 class="desktop--weekly">x am</h3>
		<object data="/images/few-clouds.svg" type="image/svg+xml" class="desktop--weekly__image"></object>
		<h2 class="desktop--weekly__degrees">15°</h2>
		<div class="weekly--rain">
			<object data="/images/rain-logo.svg" type="image/svg+xml" class="weekly--rain__icon"></object>
			<h3 class="desktop--weekly__precipitation">50%</h3>
		</div>
	</div>`
	);

	daily.insertAdjacentHTML(
		'afterend',
		`<div class="daily">
					<h2 class="name">Saturday</h2>
					<div class="daily--rain">
						<img src="/images/rain-logo.svg" alt="" class="daily--rain__icon" />
						<h3 class="daily--precipitation">35%</h3>
					</div>
					<object data="/images/shower-rain.svg" type="image/svg+xml" class="daily--image"></object>
					<h2 class="daily--degrees">15°/3°</h2>
				</div>`
	);
}

//* TODAY HOURLY QUERY SELECTORS
const hourCondition = document.querySelectorAll('.hour');
const hourDegrees = document.querySelectorAll('.hour--degrees');
const hourImage = document.querySelectorAll('.hour--image');
const hourRain = document.querySelectorAll('.hour--precipitation');

//* WEEKLY HOURLY QUERY SELECTORS
//* Mobile
const weeklyDay = document.querySelectorAll('.name');
const weeklyDegrees = document.querySelectorAll('.daily--degrees');
const weeklyImage = document.querySelectorAll('.daily--image');
const weeklyRain = document.querySelectorAll('.daily--precipitation');
//* Desktop
const desktopWeeklyDay = document.querySelectorAll('.desktop--weekly');
const desktopWeeklyDegrees = document.querySelectorAll('.desktop--weekly__degrees');
const desktopWeeklyImage = document.querySelectorAll('.desktop--weekly__image');

//* Change today hourly and weekly data from API!
for (let i = 0; i < 7; i++) {
	hourCondition[i].textContent = hourlyData.hourlyTimes[i];
	hourDegrees[i].textContent = hourlyData.hourlyTemperatures[i];
	hourImage[i].setAttribute('data', `/images/${hourlyData.hourlyImages[0]}.svg`);
	hourRain[i].textContent = hourlyData.hourlyRain[i];

	weeklyDay[i].textContent = weeklyData.weeklyDays[i];
	weeklyDegrees[i].textContent = weeklyData.weeklyTemperatures[i];
	weeklyImage[i].setAttribute('data', `/images/${weeklyData.weeklyImages[0]}.svg`);
	weeklyRain[i].textContent = weeklyData.weeklyRain[i];

	desktopWeeklyDay[i].textContent = weeklyDay[i].textContent;
	desktopWeeklyDegrees[i].textContent = weeklyDegrees[i].textContent;
	desktopWeeklyImage[i].setAttribute('data', `/images/${weeklyData.weeklyImages[0]}.svg`);
}

//* Change highlights data from API!
uvIndex.textContent = highlightsData.uvIndex;
uvIndexBar.style.transform = `rotate(${315 + highlightsData.uvIndex * 18}deg)`;
//* Modify the color of the UV Index Circle based on the index:
switch (highlightsData.uvIndex) {
	case 0:
	case 1:
	case 2:
		uvIndexBar.style.borderBottomColor = '#55DF6B';
		uvIndexBar.style.borderLeftColor = '#55DF6B';
		break;
	case 3:
	case 4:
	case 5:
		uvIndexBar.style.borderBottomColor = '#E8EC36';
		uvIndexBar.style.borderLeftColor = '#E8EC36';
		break;
	case 6:
	case 7:
		uvIndexBar.style.borderBottomColor = '#DD960D';
		uvIndexBar.style.borderLeftColor = '#DD960D';
		break;
	case 8:
	case 9:
		uvIndexBar.style.borderBottomColor = '#DB3030';
		uvIndexBar.style.borderLeftColor = '#DB3030';
		break;
	case 10:
		uvIndexBar.style.borderBottomColor = '#BD36EC';
		uvIndexBar.style.borderLeftColor = '#BD36EC';
		break;
}

windValue.innerHTML = `${highlightsData.windStatus} <sub>km/h</sub>`;
windDirectionImg.style.transform = `rotate(${highlightsData.windDirection}deg)`;
//* Modify the text for wind direction:
switch (true) {
	case highlightsData.windDirection >= 348.75 || highlightsData.windDirection < 11.25:
		windDirection.textContent = 'N';
		break;
	case highlightsData.windDirection >= 11.25 && highlightsData.windDirection < 33.75:
		windDirection.textContent = 'NNE';
		break;
	case highlightsData.windDirection >= 33.75 && highlightsData.windDirection < 56.25:
		windDirection.textContent = 'NE';
		break;
	case highlightsData.windDirection >= 56.25 && highlightsData.windDirection < 78.75:
		windDirection.textContent = 'ENE';
		break;
	case highlightsData.windDirection >= 78.75 && highlightsData.windDirection < 101.25:
		windDirection.textContent = 'E';
		break;
	case highlightsData.windDirection >= 101.25 && highlightsData.windDirection < 123.75:
		windDirection.textContent = 'ESE';
		break;
	case highlightsData.windDirection >= 123.75 && highlightsData.windDirection < 146.25:
		windDirection.textContent = 'SE';
		break;
	case highlightsData.windDirection >= 146.25 && highlightsData.windDirection < 168.75:
		windDirection.textContent = 'SSE';
		break;
	case highlightsData.windDirection >= 168.75 && highlightsData.windDirection < 191.25:
		windDirection.textContent = 'S';
		break;
	case highlightsData.windDirection >= 191.25 && highlightsData.windDirection < 213.75:
		windDirection.textContent = 'SSW';
		break;
	case highlightsData.windDirection >= 213.75 && highlightsData.windDirection < 236.25:
		windDirection.textContent = 'SW';
		break;
	case highlightsData.windDirection >= 236.25 && highlightsData.windDirection < 258.75:
		windDirection.textContent = 'WSW';
		break;
	case highlightsData.windDirection >= 258.75 && highlightsData.windDirection < 281.25:
		windDirection.textContent = 'W';
		break;
	case highlightsData.windDirection >= 281.25 && highlightsData.windDirection < 303.75:
		windDirection.textContent = 'WNW';
		break;
	case highlightsData.windDirection >= 303.75 && highlightsData.windDirection < 326.25:
		windDirection.textContent = 'NW';
		break;
	case highlightsData.windDirection >= 326.25 && highlightsData.windDirection < 348.75:
		windDirection.textContent = 'NNW';
		break;
	default:
		break;
}

sunrise.textContent = highlightsData.sunrise;
sunset.textContent = highlightsData.sunset;
// TODO Difference before yesterday sunrise/sunset and today sunrise/sunset
sunriseDifference.textContent = '-3m 25s';
sunsetDifference.textContent = '+1m 10s';

humidity.innerHTML = `${highlightsData.humidity} <sup>%</sup>`;
humidityBar.style.setProperty('--height', highlightsData.humidity);
// TODO Normal / emoticons to change based on the value of humididy

visibility.innerHTML = `${highlightsData.visibility} <sub>km</sub>`;
// TODO Average / emoticons to change based on the value of visibility

airQualityIndex.textContent = highlightsData.airQualityIndex;
aqiBar.style.setProperty('--position', `${134.5 - highlightsData.airQualityIndex * 26.5}px`);
// TODO Average / emoticons to change based on the value of air quality index

//*TODO */
celsiusFahrenheit.addEventListener('click', () => {
	celsiusFahrenheit.classList.toggle('active');
});

todayBtn.addEventListener('click', () => {
	todayBtn.classList.add('active');
	today.classList.add('active');
	weeklyBtn.classList.remove('active');
	weekly.classList.remove('active');
	desktopWeekly.classList.remove('active');
	todayNavbar.classList.add('active');
	weeklyNavbar.classList.remove('active');
});

weeklyBtn.addEventListener('click', () => {
	weeklyBtn.classList.add('active');
	weekly.classList.add('active');
	todayBtn.classList.remove('active');
	today.classList.remove('active');
	desktopWeekly.classList.add('active');
	todayNavbar.classList.remove('active');
	weeklyNavbar.classList.add('active');
});

mobileSearch.addEventListener('click', () => {
	todayNavbar.classList.remove('active--grid');
	weeklyNavbar.classList.remove('active--grid');
	mobileSearch.classList.remove('active');
	search.classList.add('active');
});

mobileSearchBtn.addEventListener('click', () => {
	console.log(userInput[1].value);
	userInput[1].value = '';
});

searchBtn.forEach((x) => {
	x.addEventListener('click', async (z) => {
		todayNavbar.classList.add('active--grid');
		weeklyNavbar.classList.add('active--grid');
		mobileSearch.classList.add('active');
		search.classList.remove('active');
		console.log(userInput[0].value);

		const proxyUrl = 'https://myc0rsproxy.herokuapp.com/';
		const placesRequestUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${userInput[0].value}&key=${API_KEY}&inputtype=textquery&fields=name,photos`;

		let photoRef = '';

		userInput[0].value = '';
		const initialPlacesRequest = fetch(`${proxyUrl + placesRequestUrl}`)
			.then((res) => res.json())
			.then((data) => (photoRef = data?.candidates?.[0]?.photos?.[0]?.photo_reference));
		setTimeout(() => {
			console.log(photoRef);
			if (photoRef) {
				const imageLookupURL = `https://maps.googleapis.com/maps/api/place/photo?photoreference=${photoRef}&key=${API_KEY}&maxwidth=2900&maxheight=1200`;
				const imageURLQuery = fetch(proxyUrl + imageLookupURL)
					.then((r) => r.blob())
					.then(function (myBlob) {
						let image = URL.createObjectURL(myBlob);
						cityImg.src = `${image}`;
					})
					.catch(console.error);
			}
		}, 2000);
	});
});
