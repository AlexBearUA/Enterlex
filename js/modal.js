(() => {
  const refs = {
    openModalBtnOne: document.querySelector('[data-modal-open-one]'),
    openModalBtnTwo: document.querySelector('[data-modal-open-two]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    closeModalBtnDown: document.querySelector('[data-modal-close-down]'),
    backdrop: document.querySelector('[data-modal]'),
  };

  refs.openModalBtnOne.addEventListener('click', toggleModal);
  refs.openModalBtnTwo.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtnDown.addEventListener('click', toggleModal);
  refs.backdrop.addEventListener('click', onBackdropClick);
  window.addEventListener('keydown', onEscKeyPress);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.backdrop.classList.toggle('is-hidden');
  }

  function onBackdropClick(event) {
    if (event.currentTarget === event.target) {
      toggleModal();
    }
  }

  function onEscKeyPress(event) {
    const ESC_KEY_CODE = 'Escape';
    const isEscKey = event.code === ESC_KEY_CODE;

    if (isEscKey) {
      toggleModal();
    }
  }
})();
