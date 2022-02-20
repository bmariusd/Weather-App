//* API
const API_KEY = 'AIzaSyB3OwFNcIQkNK6t45-w8P8zEHlpWiU4qco';
const WEATHER_API_KEY = '9ed2728a9438d79484824734002d11f1';
const userInput = document.querySelectorAll('.nav--search__name');
let lat = '';
let lon = '';

//* Loading . . .
const loadingImage = document.querySelector('.loader-wrapper');
const noDisplay = document.querySelectorAll('.no--display');
const searchForACity = document.querySelector('.search--city');

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
const uvIndexMobile = document.querySelector('.highlight--value__uv__index');
const windValue = document.querySelector('.highlight--value__windstatus');
const windDirection = document.querySelector('.wind--direction__text');
const windDirectionImg = document.querySelector('.wind--direction__img');
const sunrise = document.querySelector('.highlight--value__sunrise');
const sunriseMobile = document.querySelector('.highlight--mobile__value__sunrise');
const sunset = document.querySelector('.highlight--value__sunset');
const sunsetMobile = document.querySelector('.highlight--mobile__value__sunset');
const sunriseDifference = document.querySelector('.highlight--value__sunrise__difference');
const sunsetDifference = document.querySelector('.highlight--value__sunset__difference');
const humidity = document.querySelector('.highlight--value__humidity');
const humidityBar = document.querySelector('.humidity--progress__bar');
const humidityDescription = document.querySelector('#humidity--description');
const visibility = document.querySelector('.highlight--value__visibility');
const visibilityDescription = document.querySelector('#visibility--description');
const airQualityIndex = document.querySelector('.highlight--value__aqi');
const aqiDescription = document.querySelector('#aqi--description');
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
	mainTemp: {
		celsius: '10°',
		fahrenheit: '60°',
	},
	mainCondition: `Heavy Snow`,
	mainDegreesRange: {
		celsius: `10°/-2°`,
		fahrenheit: `50°/42°`,
	},
	mainRain: `78%`,
	celsiusFahrenheit: 'Celsius',
};

// TODO after I get the data from the API
const hourlyData = {
	hourlyTimes: ['3 am', '6 am', '9 am', '12 pm', '3 pm', '6 pm', '9 pm'],
	hourlyTemperatures: {
		celsius: ['10°', '11°', '12°', '13°', '14°', '15°', '16°'],
		fahrenheit: ['60°', '61°', '62°', '63°', '64°', '65°', '66°'],
	},
	hourlyRain: ['10%', '15%', '20%', '25%', '30%', '35%', '40%'],
	hourlyImages: ['thunderstorm', 'scattered-clouds', 'few-clouds', '25%', '30%', '35%', '40%'],
};

// TODO after I get the data from the API
const weeklyData = {
	weeklyDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
	weeklyTemperatures: {
		celsius: ['0° / 10°', '1° / 11°', '2° / 12°', '3° / 13°', '4° / 14°', '5° / 15°', '6° / 16°'],
		fahrenheit: ['50° / 60°', '51° / 61°', '52° / 62°', '53° / 63°', '54° / 64°', '55° / 65°', '56° / 66°'],
	},
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
	humidity: 50,
	visibility: '4.3',
	airQualityIndex: 4,
};

//* Change main data from API!
mainDate.textContent = mainData.mainDate.toLocaleString('en-uk', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
mainWeather.setAttribute('data', `/images/${mainData.mainWeather}.svg`);
mainTemp.innerHTML = `${mainData.mainTemp}<sup>C</sup>`;
mainCondition.textContent = mainData.mainCondition;
mainDegreesRange.textContent = mainData.mainDegreesRange;
mainRain.textContent = `Pressure - ${mainData.mainRain}`;
cityImg.src = '/images/bucharest.jpg';

//* Generate all hourly HTML data:
for (let i = 6; i > 0; i--) {
	hourly.insertAdjacentHTML(
		'afterend',
		`<div class="hour--conditions">
    <h3 class="hour" id=hourly-${i}>y am</h3>
    <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="" class="hour--image" id="hourly__image--${i}">
    <h2 class="hour--degrees" id="hourly__degrees--${i}">15°</h2>
    </div>`
	);

	weeklyConditions.insertAdjacentHTML(
		'afterend',
		`<div class="weekly__conditions">
		<h3 class="desktop--weekly" id="weekly-${i}">x am</h3>
		<img src="/images/few-clouds.png" alt="weekly-image" class="desktop--weekly__image" id="weekly__image--${i}">
		<h2 class="desktop--weekly__degrees" id="weekly__degrees--${i}">15°</h2>
		<div class="weekly--rain">
			<object data="/images/rain-logo.svg" type="image/svg+xml" class="weekly--rain__icon"></object>
			<h3 class="desktop--weekly__precipitation">50%</h3>
		</div>
	</div>`
	);

	daily.insertAdjacentHTML(
		'afterend',
		`<div class="daily">
					<h2 class="daily--name" id="daily--${i}">Saturday</h2>
					<img src="/images/airqualityindex.svg" alt="" class="daily--image" id="daily__image--${i}"></img>
					<h2 class="daily--degrees" id="daily__degrees--${i}">15°/3°</h2>
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
const weeklyDay = document.querySelectorAll('.daily');
const weeklyDegrees = document.querySelectorAll('.daily--degrees');
const weeklyImage = document.querySelectorAll('.daily--image');
const weeklyRain = document.querySelectorAll('.daily--precipitation');
//* Desktop
const desktopWeeklyDay = document.querySelectorAll('.desktop--weekly');
const desktopWeeklyDegrees = document.querySelectorAll('.desktop--weekly__degrees');
const desktopWeeklyImage = document.querySelectorAll('.desktop--weekly__image');

//* Change today hourly and weekly data from API!
for (let i = 0; i < 7; i++) {
	// hourCondition[i].textContent = hourlyData.hourlyTimes[i];
	// hourDegrees[i].textContent = hourlyData.hourlyTemperatures[i];
	// hourImage[i].setAttribute('data', `/images/${hourlyData.hourlyImages[0]}.svg`);
	// hourRain[i].textContent = hourlyData.hourlyRain[i];

	// weeklyDay[i].textContent = weeklyData.weeklyDays[i];
	weeklyDegrees[i].textContent = weeklyData.weeklyTemperatures[i];
	weeklyImage[i].setAttribute('data', `/images/${weeklyData.weeklyImages[0]}.svg`);

	desktopWeeklyDay[i].textContent = weeklyDay[i].textContent;
	desktopWeeklyDegrees[i].textContent = weeklyDegrees[i].textContent;
	desktopWeeklyImage[i].setAttribute('data', `/images/${weeklyData.weeklyImages[0]}.svg`);
}

sunrise.textContent = highlightsData.sunrise;
sunset.textContent = highlightsData.sunset;
sunriseDifference.textContent = '-3m 25s';
sunsetDifference.textContent = '+1m 10s';

searchBtn.forEach((x) => {
	x.addEventListener('click', () => {
		loadingImage.classList.remove('hide');
		searchForACity.classList.add('no--display');
	});

	x.addEventListener('click', async () => {
		noDisplay.forEach((x) => {
			x.classList.remove('no--display');
		});

		todayNavbar.classList.add('active--grid');
		weeklyNavbar.classList.add('active--grid');
		mobileSearch.classList.add('active');
		search.classList.remove('active');
		const data = await geoLocate();
		lat = data[0].lat;
		lon = data[0].lon;
		const airPolutionData = await airPolution();
		highlightsData.airQualityIndex = airPolutionData.list[0].main.aqi;
		const weatherData = await getWeatherData();
		updateTodayWeather(weatherData);

		const yesterdayData = await getYesterdayData();
		updateSunriseSunsetDiff(yesterdayData);
		console.log(weatherData);

		modifyAQI();
		updateData();

		let photoRef = '';

		//getPhoto();

		userInput[0].value = '';
		loadingImage.classList.add('hide');
	});
});

//*TODO */
celsiusFahrenheit.addEventListener('click', () => {
	celsiusFahrenheit.classList.toggle('active');
	if (celsiusFahrenheit.classList.contains('active')) {
		mainData.celsiusFahrenheit = 'Fahrenheit';
	} else {
		mainData.celsiusFahrenheit = 'Celsius';
	}
	modifyTodayConditions();
	modifyTodayData();
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
	userInput[1].value = '';
});

const geoLocate = async () => {
	const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${userInput[0].value}&limit=1&appid=${WEATHER_API_KEY}`);
	const data = await response.json();
	return data;
};

const getPhoto = async () => {
	const proxyUrl = 'https://myc0rsproxy.herokuapp.com/';
	const placesRequestUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${userInput[0].value}&key=${API_KEY}&inputtype=textquery&fields=name,photos`;

	const initialPlacesRequest = await fetch(`${proxyUrl + placesRequestUrl}`)
		.then((res) => res.json())
		.then((data) => (photoRef = data?.candidates?.[0]?.photos?.[0]?.photo_reference));

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
};

const airPolution = async () => {
	const response = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`);
	const data = await response.json();
	return data;
};

const getWeatherData = async () => {
	const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`);
	const data = await response.json();
	return data;
};

const getYesterdayData = async () => {
	const epochYesterday = (Date.parse(new Date()) - 86400000) / 1000;
	const response = await fetch(
		`http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${epochYesterday}&appid=${WEATHER_API_KEY}`
	);
	const yesterdayData = await response.json();
	return yesterdayData;
};

const updateData = async () => {
	windValue.innerHTML = `${highlightsData.windStatus} <sub>km/h</sub>`;
	uvIndex.textContent = highlightsData.uvIndex;

	if (highlightsData.uvIndex < 4) {
		uvIndexMobile.textContent = `Good - ${highlightsData.uvIndex}`;
	} else if (highlightsData.uvIndex < 7) {
		uvIndexMobile.textContent = `High - ${highlightsData.uvIndex}`;
	} else {
		uvIndexMobile.textContent = `Extreme - ${highlightsData.uvIndex}`;
	}
};

const updateTodayWeather = async (data) => {
	highlightsData.windStatus = data.daily[0].wind_speed;
	highlightsData.windDirection = data.daily[0].wind_deg;
	highlightsData.uvIndex = Math.round(data.daily[0].uvi);
	highlightsData.humidity = data.current.humidity;
	highlightsData.visibility = data.current.visibility;
	highlightsData.sunrise = fromEpochToData(data.current.sunrise, data.timezone_offset).date.slice(17, 22);
	highlightsData.sunset = fromEpochToData(data.current.sunset, data.timezone_offset).date.slice(17, 22);
	mainData.mainTemp.celsius = fromKelvinToCelsius(data.current.temp);
	mainData.mainTemp.fahrenheit = fromKelvinToFahrenheit(data.current.temp);
	mainData.mainCondition = capitalizeWords(data.current.weather[0].description);
	mainData.mainDegreesRange.celsius = `${fromKelvinToCelsius(data.daily[0].temp.max)}° / ${fromKelvinToCelsius(data.daily[0].temp.min)}°`;
	mainData.mainDegreesRange.fahrenheit = `${fromKelvinToFahrenheit(data.daily[0].temp.max)}° / ${fromKelvinToFahrenheit(data.daily[0].temp.min)}°`;
	mainData.mainRain = fromhPaTommHg(data.current.pressure);
	for (let i = 0; i < 7; i++) {
		hourlyData.hourlyTimes[i] = fromEpochToData(data.hourly[i * 3].dt, data.timezone_offset).date.slice(17, 22);
		hourlyData.hourlyTemperatures.celsius[i] = `${fromKelvinToCelsius(data.hourly[i * 3].temp)}°`;
		hourlyData.hourlyTemperatures.fahrenheit[i] = `${fromKelvinToFahrenheit(data.hourly[i * 3].temp)}°`;
		hourlyData.hourlyImages[i] = `${data.daily[i].weather[0].id}`;
		weeklyData.weeklyDays[i] = fromEpochToData(data.daily[i + 1].dt, data.timezone_offset).dayOfWeek;
		weeklyData.weeklyTemperatures.celsius[i] = `${fromKelvinToCelsius(data.daily[i + 1].temp.min)}°/${fromKelvinToCelsius(
			data.daily[i + 1].temp.max
		)}°`;
		weeklyData.weeklyTemperatures.fahrenheit[i] = `${fromKelvinToFahrenheit(data.daily[i + 1].temp.min)}°/${fromKelvinToFahrenheit(
			data.daily[i + 1].temp.max
		)}°`;
		weeklyData.weeklyImages[i] = `${data.daily[i + 1].weather[0].id}`;
	}

	updateWeatherIcons(data.daily[0].weather[0].id, mainWeather);
	modifyUVIndex(highlightsData.uvIndex);
	modifyHumidity(highlightsData.humidity);
	modifyVisibility(highlightsData.visibility);
	modifySunriseSunset(highlightsData.sunrise.slice(0, 5), highlightsData.sunset.slice(0, 5));
	modifyTodayConditions();
	modifyTodayData();
};

const fromEpochToData = (epochTime, timezone) => {
	let date = new Date(0);
	date.setUTCSeconds(epochTime + timezone);
	date = date.toUTCString().toLocaleString();

	let dayOfWeek = new Date(date);
	dayOfWeek = dayOfWeek.toLocaleString('en-US', { weekday: 'long' });

	return { date, dayOfWeek };
};

const modifyWindDirection = async (wind) => {
	windDirectionImg.style.transform = `rotate(${wind}deg)`;
	//* Modify the text for wind direction:
	switch (true) {
		case wind >= 348.75 || wind < 11.25:
			windDirection.textContent = 'N';
			break;
		case wind >= 11.25 && wind < 33.75:
			windDirection.textContent = 'NNE';
			break;
		case wind >= 33.75 && wind < 56.25:
			windDirection.textContent = 'NE';
			break;
		case wind >= 56.25 && wind < 78.75:
			windDirection.textContent = 'ENE';
			break;
		case wind >= 78.75 && wind < 101.25:
			windDirection.textContent = 'E';
			break;
		case wind >= 101.25 && wind < 123.75:
			windDirection.textContent = 'ESE';
			break;
		case wind >= 123.75 && wind < 146.25:
			windDirection.textContent = 'SE';
			break;
		case wind >= 146.25 && wind < 168.75:
			windDirection.textContent = 'SSE';
			break;
		case wind >= 168.75 && wind < 191.25:
			windDirection.textContent = 'S';
			break;
		case wind >= 191.25 && wind < 213.75:
			windDirection.textContent = 'SSW';
			break;
		case wind >= 213.75 && wind < 236.25:
			windDirection.textContent = 'SW';
			break;
		case wind >= 236.25 && wind < 258.75:
			windDirection.textContent = 'WSW';
			break;
		case wind >= 258.75 && wind < 281.25:
			windDirection.textContent = 'W';
			break;
		case wind >= 281.25 && wind < 303.75:
			windDirection.textContent = 'WNW';
			break;
		case wind >= 303.75 && wind < 326.25:
			windDirection.textContent = 'NW';
			break;
		case wind >= 326.25 && wind < 348.75:
			windDirection.textContent = 'NNW';
			break;
		default:
			break;
	}
};

const modifyUVIndex = async (value) => {
	if (value > 10) {
		index = 10;
	} else {
		index = value;
	}
	uvIndexBar.style.transform = `rotate(${315 + index * 18}deg)`;
	//* Modify the color of the UV Index Circle based on the index:
	switch (index) {
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
};

const modifyHumidity = async (value) => {
	humidity.innerHTML = `${value} <sup>%</sup>`;
	humidityBar.style.setProperty('--height', highlightsData.humidity);

	if (value > 66) {
		humidityDescription.textContent = 'Too Moist 😟';
	} else if (value > 33) {
		humidityDescription.textContent = 'Optimum 😁';
	} else {
		humidityDescription.textContent = 'Too Dry 😢';
	}
};

const modifyAQI = async () => {
	airQualityIndex.textContent = highlightsData.airQualityIndex;
	aqiBar.style.setProperty('--position', `${134.5 - highlightsData.airQualityIndex * 26.5}px`);

	if (highlightsData.airQualityIndex > 4) {
		aqiDescription.textContent = 'Very poor 😨';
	} else if (highlightsData.airQualityIndex > 3) {
		aqiDescription.textContent = 'Poor 🙁';
	} else if (highlightsData.airQualityIndex > 2) {
		aqiDescription.textContent = 'Moderate 😐';
	} else if (highlightsData.airQualityIndex > 1) {
		aqiDescription.textContent = 'Fair 🙂';
	} else {
		aqiDescription.textContent = 'Good 😁';
	}
};

const modifyVisibility = async (value) => {
	visibility.innerHTML = `${value / 1000} <sub>km</sub>`;

	if (value > 6.6) {
		visibilityDescription.textContent = 'Very good 😁';
	} else if (value > 3.3) {
		visibilityDescription.textContent = 'Normal 🙂';
	} else {
		visibilityDescription.textContent = 'Poor 😢';
	}
};

const modifySunriseSunset = async (sunriseValue, sunsetValue) => {
	sunrise.innerHTML = sunriseValue;
	sunriseMobile.innerHTML = sunriseValue;
	sunset.innerHTML = sunsetValue;
	sunsetMobile.innerHTML = sunsetValue;
};

const updateSunriseSunsetDiff = async (yesterdayData) => {
	const todaySunrise = highlightsData.sunrise;
	const todaySunset = highlightsData.sunset;
	const yesterdaySunrise = fromEpochToData(yesterdayData.current.sunrise, yesterdayData.timezone_offset).date.slice(17, 25);
	const yesterdaySunset = fromEpochToData(yesterdayData.current.sunset, yesterdayData.timezone_offset).date.slice(17, 25);

	let sunriseDiff =
		todaySunrise.slice(0, 2) * 3600 +
		+todaySunrise.slice(3, 5) * 60 +
		+todaySunrise.slice(7, 9) -
		(yesterdaySunrise.slice(0, 2) * 3600 + +yesterdaySunrise.slice(3, 5) * 60 + +yesterdaySunrise.slice(7, 9));

	let sunsetDiff =
		todaySunset.slice(0, 2) * 3600 +
		+todaySunset.slice(3, 5) * 60 +
		+todaySunset.slice(7, 9) -
		(yesterdaySunset.slice(0, 2) * 3600 + +yesterdaySunset.slice(3, 5) * 60 + +yesterdaySunset.slice(7, 9));

	Math.abs(sunriseDiff) > 59
		? (sunriseDifference.textContent = `${Math.trunc(sunriseDiff / 60)}m ${Math.abs(sunriseDiff % 60)}s`)
		: (sunriseDifference.textContent = `${sunriseDiff}s`);

	Math.abs(sunsetDiff) > 59
		? (sunsetDifference.textContent = `${Math.trunc(sunsetDiff / 60)}m ${Math.abs(sunsetDiff % 60)}s`)
		: (sunsetDifference.textContent = `${sunsetDiff}s`);
};

const fromKelvinToCelsius = (temp) => {
	return Math.round(temp - 273.15);
};

const fromKelvinToFahrenheit = (temp) => {
	return Math.round(temp * 1.8 - 459.67);
};

const modifyTodayConditions = async () => {
	if (mainData.celsiusFahrenheit === 'Celsius') {
		mainTemp.innerHTML = `${mainData.mainTemp.celsius}°<sup>C</sup>`;
		mainDegreesRange.innerHTML = mainData.mainDegreesRange.celsius;
	} else {
		mainTemp.innerHTML = `${mainData.mainTemp.fahrenheit}°<sup>C</sup>`;
		mainDegreesRange.innerHTML = mainData.mainDegreesRange.fahrenheit;
	}
	mainCondition.innerHTML = mainData.mainCondition;

	mainRain.textContent = `${mainData.mainRain} mmHg`;
};

const capitalizeWords = (phrase) => {
	let words = phrase.split(' ');
	for (let i = 0; i < words.length; i++) {
		words[i] = words[i][0].toUpperCase() + words[i].substr(1);
	}
	words = words.join(' ');
	return words;
};

const fromhPaTommHg = (pressure) => {
	return Math.round(pressure / 1.33322387415);
};

const modifyTodayData = async () => {
	for (let i = 0; i < 7; i++) {
		let timesHour = document.querySelector(`#hourly-${i}`);
		let hourlyImage = document.querySelector(`#hourly__image--${i}`);
		let hourlyDegrees = document.querySelector(`#hourly__degrees--${i}`);
		let weeklyDay = document.querySelector(`#weekly-${i}`);
		let weeklyDegrees = document.querySelector(`#weekly__degrees--${i}`);
		let weeklyImage = document.querySelector(`#weekly__image--${i}`);
		let dailyDay = document.querySelector(`#daily--${i}`);
		let dailyDegrees = document.querySelector(`#daily__degrees--${i}`);
		let dailyImage = document.querySelector(`#daily__image--${i}`);

		timesHour.textContent = hourlyData.hourlyTimes[i];
		let weatherId = hourlyData.hourlyImages[i];
		updateWeatherIcons(weatherId, hourlyImage);

		weeklyDay.textContent = weeklyData.weeklyDays[i];
		dailyDay.textContent = weeklyData.weeklyDays[i];
		weatherId = weeklyData.weeklyImages[i];
		updateWeatherIcons(weatherId, weeklyImage);
		updateWeatherIcons(weatherId, dailyImage);

		if (mainData.celsiusFahrenheit === 'Celsius') {
			hourlyDegrees.textContent = hourlyData.hourlyTemperatures.celsius[i];
			weeklyDegrees.textContent = weeklyData.weeklyTemperatures.celsius[i];
			dailyDegrees.textContent = weeklyData.weeklyTemperatures.celsius[i];
		} else {
			hourlyDegrees.textContent = hourlyData.hourlyTemperatures.fahrenheit[i];
			weeklyDegrees.textContent = weeklyData.weeklyTemperatures.fahrenheit[i];
			dailyDegrees.textContent = weeklyData.weeklyTemperatures.fahrenheit[i];
		}
	}
};

const updateWeatherIcons = (weatherId, imageToChange) => {
	switch (true) {
		case weatherId >= 802:
			imageToChange.setAttribute('src', `/images/broken-clouds.png`);
			break;
		case weatherId == 801:
			imageToChange.setAttribute('src', `/images/few-clouds.png`);
			break;
		case weatherId == 800:
			imageToChange.setAttribute('src', `/images/clear.png`);
			break;
		case weatherId >= 700:
			imageToChange.setAttribute('src', `/images/fog.png`);
			break;
		case weatherId >= 601:
			imageToChange.setAttribute('src', `/images/snow.png`);
			break;
		case weatherId == 600:
			imageToChange.setAttribute('src', `/images/light-snow.png`);
			break;
		case weatherId >= 512:
			imageToChange.setAttribute('src', `/images/shower-rain.png`);
			break;
		case weatherId >= 502:
			imageToChange.setAttribute('src', `/images/heavy-rain.png`);
			break;
		case weatherId >= 300:
			imageToChange.setAttribute('src', `/images/light-rain.png`);
			break;
		case weatherId >= 210 && weatherId <= 221:
			imageToChange.setAttribute('src', `/images/thunderstorm.png`);
			break;
		case weatherId >= 200:
			imageToChange.setAttribute('src', `/images/thunderstorm-rain.png`);
			break;
	}
};
