const mainMenu = document.querySelector('.main_menu');
const navBackground = document.querySelector('.nav_background');
const subMenuWrap = document.querySelectorAll('.sub_menu_wrap');
const pcMenuBg = document.querySelector('.pc_menu_bg');

mainMenu.addEventListener('mouseenter', () => {
	navBackground.style.top = '80px';
	navBackground.style.borderTop = '1px solid #d9d9d9';
	subMenuWrap.forEach((item) => {
		item.style.display = 'block';
	});
	pcMenuBg.style.opacity = '1';
	pcMenuBg.style.display = 'block';
});

mainMenu.addEventListener('mouseleave', () => {
	navBackground.style.top = '-260px';
	navBackground.style.borderTop = '0px';
	subMenuWrap.forEach((item) => {
		item.style.display = 'none';
	});
	pcMenuBg.style.opacity = '0';
	pcMenuBg.style.display = 'none';
});
navBackground.addEventListener('mouseenter', () => {
	navBackground.style.top = '80px';
	navBackground.style.borderTop = '1px solid #d9d9d9';
	subMenuWrap.forEach((item) => {
		item.style.display = 'block';
	});
	pcMenuBg.style.opacity = '1';
	pcMenuBg.style.display = 'block';
});

navBackground.addEventListener('mouseleave', () => {
	navBackground.style.top = '-260px';
	navBackground.style.borderTop = '0px';
	subMenuWrap.forEach((item) => {
		item.style.display = 'none';
	});
	pcMenuBg.style.opacity = '0';
	pcMenuBg.style.display = 'none';
});

const mMenu = document.querySelectorAll('.m_menu > li');
const mSubMenu = document.querySelectorAll('.m_sub_menu');
const menuAllow = document.querySelectorAll('.menu_allow');
mMenu.forEach((item, index) => {
	item.addEventListener('click', () => {
		if (mSubMenu[index].classList.contains('on')) {
			mSubMenu[index].classList.remove('on');
			menuAllow[index].style.transform = 'rotate(0deg)';
		} else {
			mSubMenu[index].classList.add('on');
			menuAllow[index].style.transform = 'rotate(-180deg)';
		}
	});
});

const menuBtn = document.querySelector('.menu_btn');
const mMenuClose = document.querySelector('.m_menu_close');
const mMenuWrap = document.querySelector('.m_menu_wrap');
const closeBtnLeft = document.querySelector('.close_btn_left');
const closeBtnRight = document.querySelector('.close_btn_right');
const mMenuBg = document.querySelector('.m_menu_bg');
menuBtn.addEventListener('click', () => {
	mMenuWrap.style.left = '-0px';
	closeBtnLeft.style.transform = 'rotate(-45deg)';
	closeBtnRight.style.transform = 'rotate(45deg)';
	mMenuBg.style.display = 'block';
});

mMenuClose.addEventListener('click', () => {
	mMenuWrap.style.left = '-500px';
	closeBtnLeft.style.transform = 'rotate(0)';
	closeBtnRight.style.transform = 'rotate(0)';
	closeBtnLeft.style.transition = 'all 500ms ease';
	closeBtnRight.style.transition = 'all 500ms ease';
	mMenuBg.style.display = 'none';
});
