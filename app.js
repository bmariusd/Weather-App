const hourly = document.querySelector('.hour--conditions');
const daily = document.querySelector('.daily');

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

for (let i = 0; i < 12; i++) {
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
	i++;
}

const toggle = document.querySelector('.toggle-button');

toggle.addEventListener('click', () => {
	toggle.classList.toggle('active');
});
