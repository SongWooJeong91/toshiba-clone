const mainMenu = document.querySelector('.main_menu');
const navBackground = document.querySelector('.nav_background');
const subMenuWrap = document.querySelectorAll('.sub_menu_wrap');

mainMenu.addEventListener('mouseenter', () => {
	console.log('요소 위치에 마우스가 있음');
	navBackground.style.top = '80px';
	navBackground.style.borderTop = '1px solid #d9d9d9';
});

mainMenu.addEventListener('mouseleave', () => {
	console.log('포인팅 디바이스가 .box 요소를 벗어남');
	navBackground.style.top = '-260px';
	navBackground.style.borderTop = '0px';
});
