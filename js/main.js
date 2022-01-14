// Search button code
const btnSearch = document.querySelector('#btn-search'); //Button search
const inputSearch = document.querySelector('.box-search input'); // Input search

btnSearch.addEventListener('click', e => {
    console.log('search');
    e.stopImmediatePropagation();
    if (hasClassActive()) {
        return closeInputSearch();
    }
    openInputSearch();
});

inputSearch.addEventListener('click', e => e.stopPropagation()) // For the body click event not to interfere with the search input

document.body.addEventListener('click', e => {
    console.log('body');
    closeInputSearch();
    e.stopImmediatePropagation();
});

function hasClassActive() {
    return inputSearch.classList.contains('active') && btnSearch.classList.contains('active');
}

function openInputSearch() {
    inputSearch.classList.add('active');
    btnSearch.classList.add('active');
    inputSearch.classList.add('animation-search-open');
    inputSearch.classList.remove('animation-search-close');
    inputSearch.focus();
}

function closeInputSearch() {
    inputSearch.classList.add('animation-search-close');
    inputSearch.classList.remove('animation-search-open');
    setTimeout(() => {
        inputSearch.classList.remove('active');
        btnSearch.classList.remove('active');
    }, 400)
}
// End search button code

//
let timerCloseNotification;
let timerCloseProfiles;
let timerCloseNavigation
const btnNotification = document.querySelector('.notification');
const boxNotification = document.querySelector('.box-notification')
const btnProfile = document.querySelector('.profile-main');
const boxProfiles = document.querySelector('.box-profile');
const btnNavigation = document.querySelector('.menu');
const boxNavigationMobile = document.querySelector('#btn-mobile ~ ul');

// Notification
btnNotification.addEventListener('mouseover', e => {
    e.stopPropagation()
    clearTimeout(timerCloseNotification);
    openSubMenu(e.target)
});

btnNotification.addEventListener('mouseout', e => {
    e.stopPropagation()
    timerCloseNotification = setTimeout(closeSubMenuNot, 200);
    openSubMenu(e.target)
});

// Profile
btnProfile.addEventListener('mouseover', e => {
    e.stopPropagation()
    clearTimeout(timerCloseProfiles);
    openSubMenu(e.target)
});

btnProfile.addEventListener('mouseout', e => {
    e.stopPropagation()
    timerCloseProfiles = setTimeout(closeSubMenuProf, 200);
    openSubMenu(e.target)
});

// Nav mobile
btnNavigation.addEventListener('mouseover', e => {
    e.stopPropagation()
    clearTimeout(timerCloseNavigation);
    openSubMenu(e.target)
});

btnNavigation.addEventListener('mouseout', e => {
    e.stopPropagation()
    timerCloseNavigation = setTimeout(closeMenuMobile, 200);
    openSubMenu(e.target)
});

function openSubMenu(el) {
    if(el.classList.contains('fa-bell') || el.classList.contains('box-notification')){
        boxNotification.classList.add('active')
        return;
    }

    if(el.parentNode.classList.contains('menu') || el.classList.contains('do-menu')) {
        boxNavigationMobile.classList.add('active');
        return
    }

    if(el.classList.contains('profile-main')) {
        boxProfiles.classList.add('active');
    }
}

function closeSubMenuNot() {
    boxNotification.classList.remove('active');
}

function closeSubMenuProf() {
    boxProfiles.classList.remove('active');
}

function closeMenuMobile() {
    boxNavigationMobile.classList.remove('active');
}