const mainMenuItems = document.querySelectorAll('.main-menu li');
const submenuContainer = document.querySelector('.submenu-container');
const submenus = document.querySelectorAll('.submenu');
const subTabs = document.querySelectorAll('.sub-tab');
const contents = document.querySelectorAll('.tab-content');

mainMenuItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    submenuContainer.style.display = 'flex';
    submenus.forEach(sub => sub.style.display = 'none');
    document.getElementById(item.dataset.submenu).style.display = 'flex';
  });
});

submenuContainer.addEventListener('mouseleave', () => {
  submenuContainer.style.display = 'none';
});

subTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    contents.forEach(c => c.classList.remove('active'));
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});

const folders = document.querySelectorAll('.folder');
const modals = document.querySelectorAll('.modal');
const closes = document.querySelectorAll('.close');

folders.forEach(folder => {
    folder.addEventListener('click', () => {
        document.getElementById(folder.dataset.modal).style.display = 'block';
    });
});

closes.forEach(close => {
    close.addEventListener('click', () => {
        modals.forEach(modal => modal.style.display = 'none');
    });
});

window.onclick = (event) => {
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
};