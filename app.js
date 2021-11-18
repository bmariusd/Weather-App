const hourly = document.querySelector('.hour--conditions');
const daily = document.querySelector('.daily');
const weekly = document.querySelector('.weekly--weather');
const highlights = document.querySelector('.highlights');
const toggle = document.querySelector('.toggle-button');
const navbar = document.querySelector('.main--navbar');
const todayBtn = document.querySelector('.today');
const weeklyBtn = document.querySelector('.weekly');

for (let i = 0; i < 9; i++) {
	hourly.insertAdjacentHTML(
		'afterend',
		`<div class="hour--conditions">
    <h3 class="hour">1 am</h3>
    <object data="/images/few-clouds.svg" type="image/svg+xml" class="hour--image"></object>
    <h2 class="hour--degrees">15°</h2>
    <div class="hour--rain">
        <object data="/images/rain-logo.svg" type="image/svg+xml" class="hour--rain__icon"></object>
        <h3 class="hour--precipitation">50%</h3>
    </div>
    </div>`
	);
	i++;
}

for (let i = 0; i < 6; i++) {
	daily.insertAdjacentHTML(
		'afterend',
		`				<div class="daily">
        <h2 class="name">Today</h2>
        <div class="daily--rain">
            <img src="/images/rain-logo.svg" alt="" class="daily--rain__icon" />
            <h3 class="daily--precipitation">35%</h3>
        </div>
        <object data="/images/shower-rain.svg" type="image/svg+xml" class="daily--image"></object>
        <h2 class="daily--degrees">15°/3°</h2>
    </div>`
	);
}

for (let i = 0; i < 5; i++) {
	highlights.insertAdjacentHTML(
		'afterend',
		`				<div class="highlights">
        <img src="/images/uv-index.svg" alt="" class="highlight--image__icon" />
        <h2 class="highlight--name">UV Index</h2>
        <h2 class="highlight--value">Moderate</h2>
    </div>`
	);
}

toggle.addEventListener('click', () => {
	toggle.classList.toggle('active');
});

//*TODO */
todayBtn.addEventListener('click', () => {
	todayBtn.classList.toggle('active');
	todayBtn.style.color = '#4050d1';
	weeklyBtn.style.color = 'black';
	weeklyBtn.classList.toggle('active');
	highlights.style.display = 'grid';
	weekly.style.display = 'none';
});

weeklyBtn.addEventListener('click', () => {
	weeklyBtn.classList.toggle('active');
	weeklyBtn.style.color = '#4050d1';
	todayBtn.style.color = 'black';
	todayBtn.classList.toggle('active');
	weekly.style.display = 'grid';
	highlights.style.display = 'none';
});
