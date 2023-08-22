const gallery = document.querySelector('.realizations__gallery');
const galleryShowMoreBtn = document.querySelector('.btn-showmore');
const galleryShowMoreBtnIcon = document.querySelector('.btn-showmore-icon');
const footerYear = document.querySelector('.footer__year');

const showMoreHandle = () => {
  gallery.classList.toggle('active');
  if (gallery.classList.contains('active')) {
    galleryShowMoreBtn.innerHTML = 'Zwiń <i class="bi bi-arrow-up"></i>';
  } else {
    galleryShowMoreBtn.innerHTML = 'Rozwiń <i class="bi bi-arrow-down"></i>';
  }
};

const handleCurrentYear = () => {
  const year = new Date().getFullYear();
  footerYear.innerText = year;
};

handleCurrentYear();
galleryShowMoreBtn.addEventListener('click', showMoreHandle);
