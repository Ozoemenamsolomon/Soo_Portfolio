const languageCheckbox = document.querySelector('.checkbox');
const moodToggle = document.querySelector('.moodtoggle');
const body = document.querySelector('.body');
const darkmoodToggle = document.querySelector('.darkmoodtoggle');
const german = document.querySelector('.de');
const english = document.querySelector('.en');
const mainGerman = document.querySelector('.main-de');
const mainEnglish = document.querySelector('.main-en');
const germanRecaptcha = document.querySelector('.recaptcha_de');
const englishRecaptcha = document.querySelector('.recaptcha_en');
const logoGerman = document.querySelector('.logo-de');
const logoEnglish = document.querySelector('.logo-en');
const modal = document.querySelector('.modal');

// , darkmoodToggle.addEventListener
moodToggle.addEventListener('click', () => {
  body.classList.toggle('lightmood');
  if (!body.classList.contains('lightmood')) {
    moodToggle.style.display = 'none';
    darkmoodToggle.style.display = 'flex';
  }
  // show_hide(moodToggle);
  // show_hide(darkmoodToggle)
});
darkmoodToggle.addEventListener('click', () => {
  body.classList.toggle('lightmood');
  if (body.classList.contains('lightmood')) {
    moodToggle.style.display = 'flex';
    darkmoodToggle.style.display = 'none';
  }
  // show_hide(moodToggle);
  // show_hide(darkmoodToggle)
});

const pictureCards = document.querySelectorAll('.card-hover');

pictureCards.forEach((pictureCard) => {
  pictureCard.addEventListener('click', activateModal);
  function activateModal(e) {
    if (e.target.tagName === 'DIV') {
      const className = pictureCard.parentElement.className;
      // modal.children[0].attributes[0].value  = `./Images/high_images/${className}.jpg`
      // change the image source dynamically based on item clicked
      const modalImage = document.querySelector('.modal-img');

      modalImage.setAttribute('src', `./Images/high_images/${className}.jpg`);
      // show the modal
      modal.classList.add('activated');

      const modalText = document.querySelector('.modal-text');
      const cardDescription = e.target.parentElement.dataset.description;
      modalText.innerText = cardDescription;
    }

    // window.scrollTo(0, 0);
  }
});
modal.addEventListener('click', (e) => {
  if (e.target.tagName === 'DIV') {
    // hide modal
    modal.classList.remove('activated');
  }
  // console.dir(e.target.tagName)
});

// document.addEventListener("click",(e) => {
//     const clicked = e.target
//     console.log(clicked)
// })

languageCheckbox.addEventListener('click', languageSwitch);

// function logStatus(e) {
//     console.log(languageCheckbox.checked)
//     console.dir(languageCheckbox)
// }

function languageSwitch() {
  if (languageCheckbox.checked == true) {
    // germanRecaptcha.setAttribute("data-netlify-recaptcha", "true");
    // englishRecaptcha.removeAttribute("data-netlify-recaptcha");
    english.style.display = 'none';
    mainEnglish.style.display = 'none';
    logoEnglish.style.display = 'none';
    german.style.display = 'flex';
    mainGerman.style.display = 'flex';
    logoGerman.style.display = 'flex';
  } else {
    // englishRecaptcha.setAttribute("data-netlify-recaptcha", "true");
    // germanRecaptcha.removeAttribute("data-netlify-recaptcha");
    english.style.display = 'flex';
    mainEnglish.style.display = 'flex';
    logoEnglish.style.display = 'flex';
    german.style.display = 'none';
    mainGerman.style.display = 'none';
    logoGerman.style.display = 'none';
  }
}
