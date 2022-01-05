let menuHam = document.getElementById("menuHamburger");
let menuMain = document.getElementById("mainMenu");


/* MENU RESPONSIVE */
if(menuHam != null && menuMain != null) {
	menuHam.addEventListener('click', function(e){
		if(menuMain.className == 'l-main-nav is-active') {
			menuMain.className = 'l-main-nav';
			menuHam.className = 'fas fa-bars';
		} else {
			menuMain.className = 'l-main-nav is-active';
			menuHam.className = 'fas fa-times';
		}
	});
} else {
	alert('un des deux éléments est absent');
}