// ==========================
// 메인 메뉴 클릭 → 서브메뉴 표시
// ==========================
const menuItems = document.querySelectorAll('.menu li');
const submenuPanel = document.querySelector('.submenu-panel');
const submenus = document.querySelectorAll('.submenu');
const contents = document.querySelectorAll('.tab-content');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    // 서브메뉴 패널 보이기
    submenuPanel.style.display = 'flex';

    // 모든 서브메뉴 숨기기
    submenus.forEach(sub => sub.style.display = 'none');

    // 선택한 메뉴의 서브메뉴만 보이기
    const targetSubmenu = document.getElementById(item.dataset.submenu);
    if (targetSubmenu) targetSubmenu.style.display = 'flex';

    // 활성 메뉴 표시
    menuItems.forEach(m => m.classList.remove('active'));
    item.classList.add('active');
  });
});

// ==========================
// 서브메뉴 클릭 → 해당 콘텐츠 표시
// ==========================
document.querySelectorAll('.sub-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    contents.forEach(c => c.classList.remove('active'));
    const targetContent = document.getElementById(tab.dataset.tab);
    if (targetContent) targetContent.classList.add('active');

    // 선택된 서브탭 스타일 변경
    document.querySelectorAll('.sub-tab').forEach(st => st.classList.remove('active'));
    tab.classList.add('active');
  });
});

// ==========================
// 폴더 모달 열기 / 닫기
// ==========================
const folders = document.querySelectorAll('.folder');
const modals = document.querySelectorAll('.modal');
const closes = document.querySelectorAll('.close');

folders.forEach(folder => {
  folder.addEventListener('click', () => {
    const modalId = folder.dataset.modal;
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'flex'; // 중앙 정렬
    }
  });
});

closes.forEach(close => {
  close.addEventListener('click', () => {
    modals.forEach(modal => modal.style.display = 'none');
  });
});

// 바깥 영역 클릭 시 닫기
window.addEventListener('click', e => {
  modals.forEach(modal => {
    if (e.target === modal) modal.style.display = 'none';
  });
});

// ==========================
// 프로필 이미지 클릭 → 프로필 카드 모달 열기
// ==========================
const profileImage = document.getElementById('profileImage');
const profileModal = document.getElementById('profileModal');
const closeProfile = profileModal.querySelector('.close');

profileImage.addEventListener('click', () => {
  profileModal.style.display = 'flex';
});

closeProfile.addEventListener('click', () => {
  profileModal.style.display = 'none';
});

window.addEventListener('click', e => {
  if (e.target === profileModal) profileModal.style.display = 'none';
});

// ==========================
// 갤러리 이미지 클릭 → 확대 보기 모달
// ==========================
const galleryImages = document.querySelectorAll('.gallery img');
const imageModal = document.getElementById('imageModal');
const enlargedImage = document.getElementById('enlargedImage');
const closeImageModal = imageModal ? imageModal.querySelector('.close') : null;

galleryImages.forEach((img, index) => {
  img.addEventListener('click', () => {
    enlargedImage.src = img.src;
    enlargedImage.dataset.index = index;
    imageModal.style.display = 'flex';
  });
});

if (closeImageModal) {
  closeImageModal.addEventListener('click', () => {
    imageModal.style.display = 'none';
  });
}

// 바깥 클릭 시 이미지 모달 닫기
window.addEventListener('click', e => {
  if (e.target === imageModal) imageModal.style.display = 'none';
});
