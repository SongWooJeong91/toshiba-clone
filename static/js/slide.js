// 슬라이드 보여지는 전체 영역
const slideView = document.querySelector('.slide_wrap');
// 슬라이드 전체
const slideAll = document.querySelector('.main_slide');
// 슬라이드
const slideItems = document.querySelectorAll('.main_slide li');
// 슬라이드 버튼
const slideBtnItem = document.querySelectorAll('.slide_btn_item');
// 슬라이드 갯수
let itemCount = document.querySelectorAll('.main_slide li').length;
// 현재 슬라이드 위치
let pageNum = 0;
// 슬라이드 너비
let slideWidth = slideView.clientWidth;

makeEle();
function makeEle() {
	let cloneSlideFirst = slideItems[0].cloneNode(true);
	cloneSlideFirst.classList.add('clone');
	slideAll.appendChild(cloneSlideFirst);

	let currentSlides = document.querySelectorAll('.main_slide li');
	let newSlideCount = currentSlides.length;

	let newWidth = slideWidth * newSlideCount + 'px';
	slideAll.style.width = newWidth;

	slideAll.style.left = -slideWidth + 'px';

	// 애니메이션 효과 추가
	setTimeout(function () {
		slideAll.classList.add('animated');
	}, 100);
}

let timerId;
moveSlide(pageNum);

function moveSlide(pageNum) {
	//
	slideAll.style.left = -slideWidth * pageNum + 'px';
	console.log('moveSlide pageNum', pageNum);
	if (pageNum === itemCount) {
		setTimeout(() => {
			pageNum = 0;
			slideAll.classList.remove('animated');
			slideAll.style.left = '0px';
		}, 1500);
		setTimeout(() => {
			slideAll.classList.add('animated');
		}, 1600);
	}
	timerId = setTimeout(() => {
		slideBtnItem[pageNum].classList.remove('slide_btn_red');
		pageNum += 1;
		if (pageNum > 3) {
			slideBtnItem[0].classList.add('slide_btn_red');
		} else {
			slideBtnItem[pageNum].classList.add('slide_btn_red');
		}
		moveSlide(pageNum);
	}, 5000);
}

slideBtnItem.forEach((item, index) => {
	item.addEventListener('click', (e) => {
		clearTimeout(timerId);
		slideBtnItem[pageNum].classList.remove('slide_btn_red');
		moveSlide(index);
		pageNum = index;
		slideBtnItem[pageNum].classList.add('slide_btn_red');
	});
});

// slideWidth resize
window.addEventListener('resize', () => {
	slideWidth = slideView.clientWidth;
	// 이미지 크기 수정 해야 할듯... 퍼센트로 해야하나 일단 이건 보류
});
