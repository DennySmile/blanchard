//Плавный переход по ссылкам
const anchors = document.querySelectorAll('a[href^="#"]')

for (let anchor of anchors) {
	anchor.addEventListener("click", function (e) {
		e.preventDefault() // Предотвратить стандартное поведение ссылок
		// Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
		const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
		// Плавная прокрутка до элемента с id = href у ссылки
		document.querySelector(goto).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	})
}

// Кастомный селект
const element = document.querySelector('#customSelect');
const choices = new Choices(element, {
	searchEnabled: false,
	shouldSort: false,
	itemSelectText: '',
});

// Swiper Галерея

var mySwiper = new Swiper('.swiper-container', {

	breakpoints: {
		320: {
			spaceBetween: 10,
		},
		768: {
			slidesPerView: 2,
			slidesPerColumn: 2,
			spaceBetween: 35,
			slidesPerGroup: 2,
		},
		1280: {
			slidesPerColumn: 2,
			slidesPerView: 3,
			spaceBetween: 50,
			slidesPerGroup: 3,
		}
	},


	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		type: 'fraction',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

// Swiper События

const slider = document.querySelector('.events__swiper-container');

let eventsSwiper;

function mobileSlider() {
	if (window.innerWidth <= 600 && slider.dataset.mobile == 'false') {
		eventsSwiper = new Swiper(slider, {
			slidesPerView: 1,
			spaceBetween: 50,
			slideClass: 'events__item',
			pagination: {
				el: '.events__swiper-pagination',
				clickable: true,
			},
		});

		slider.dataset.mobile = 'true';
	}

	if (window.innerWidth > 600) {
		slider.dataset.mobile = 'false';
		if (slider.classList.contains('swiper-container-initialized')) {
			eventsSwiper.destroy();
		}
	}
}

mobileSlider()

window.addEventListener('resize', () => {
	mobileSlider();
});

// Swiper Издания

if (document.documentElement.clientWidth > 767) {

	var editionsSwiper = new Swiper('.editions__swiper-container', {
		slideClass: 'editions__swiper-slide',
		wrapperClass: 'editions__swiper-wrapper',
		spaceBetween: 50,
		breakpoints: {
			320: {
				destroy: true,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 35,
			},
			1280: {
				slidesPerView: 3,
			}
		},


		pagination: {
			el: '.editions__swiper-pagination',
			type: 'fraction',
		},

		navigation: {
			nextEl: '.editions__swiper-button-next',
			prevEl: '.editions__swiper-button-prev',
		},
	});

};

// Табы

document.addEventListener('DOMContentLoaded', function () {
	document.querySelectorAll('.tabs__btn').forEach(function (tabsBtn) {
		tabsBtn.addEventListener('click', function (event) {
			const path = event.currentTarget.dataset.path

			document.querySelectorAll('.catalog-tab__content').forEach(function (tabContent) {
				tabContent.classList.remove('catalog-tab__content--active')
			})
			document.querySelector(`[data-target="${path}"]`).classList.add('catalog-tab__content--active')
		})
	})
});

document.addEventListener('DOMContentLoaded', function () {
	document.querySelectorAll('.artists-tab__btn').forEach(function (tabsBtn) {
		tabsBtn.addEventListener('click', function (event) {
			const path = event.currentTarget.dataset.path

			document.querySelectorAll('.artists__content').forEach(function (tabContent) {
				tabContent.classList.remove('artists__content--active')
			})
			document.querySelector(`[data-target="${path}"]`).classList.add('artists__content--active')
		})
	})
});

// Аккордеон

$(function () {
	$("#accordion").accordion({
		collapsible: true,
		heightStyle: "content",
	});
});

$(function () {
	$("#accordion2").accordion({
		collapsible: true,
		heightStyle: "content"
	});
});

$(function () {
	$("#accordion3").accordion({
		collapsible: true,
		heightStyle: "content"
	});
});

$(function () {
	$("#accordion4").accordion({
		collapsible: true,
		heightStyle: "content"
	});
});

$(function () {
	$("#accordion5").accordion({
		collapsible: true,
		heightStyle: "content"
	});
});

// Показ всех "Событий"

window.addEventListener('DOMContentLoaded', function () {
	document.querySelector('.events__btn').addEventListener('click', function () {
		document.querySelector('.events__btn').style.display = 'none';
	});
	document.querySelector('.events__btn').addEventListener('click', function () {
		document.querySelectorAll('.events__item--hide').forEach(function (removeHide) {
			removeHide.classList.remove('events__item--hide')
		});
		document.querySelector('.events__item--mobile').classList.remove('events__item--mobile')
	});
});

// Бургер

window.addEventListener('DOMContentLoaded', () => {
	menu = document.querySelector('.header__nav'),
		navItem = document.querySelectorAll('.nav__item'),
		burger = document.querySelector('.burger');

	burger.addEventListener('click', () => {
		burger.classList.toggle('burger_active');
		menu.classList.toggle('header__nav--active');
	});

	navItem.forEach(item => {
		item.addEventListener('click', () => {
			burger.classList.toggle('burger_active');
			menu.classList.toggle('header__nav--active');
		})
	})
})


// Поиск

$(document).ready(function () {

	$(".search__btn").click(function () {
		$(".search").toggleClass("search-mobile");
		$(".search__input").toggleClass("search__input--mobile");
		$(".search__close-btn").toggleClass("search__close-btn--mobile");
		$("input[type='search']").focus();
	});

	$(".search__close-btn").click(function () {
		$(".search").toggleClass("search-mobile");
		$(".search__input").toggleClass("search__input--mobile");
		$(".search__close-btn").toggleClass("search__close-btn--mobile");
	});
});

// Спойлер категории

