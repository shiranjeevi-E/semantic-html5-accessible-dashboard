const menuButton = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('#primary-nav');
if (menuButton && primaryNav) {
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    primaryNav.classList.toggle('is-open', !expanded);
  });
}
const dialog = document.querySelector('#details-dialog');
const openButton = document.querySelector('#open-modal');
const closeButton = document.querySelector('#close-modal');
if (dialog && openButton && closeButton) {
  openButton.addEventListener('click', () => dialog.showModal());
  closeButton.addEventListener('click', () => dialog.close());
}
const taskForm = document.querySelector('#task-form');
if (taskForm) {
  taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!taskForm.reportValidity()) return;
    const message = document.querySelector('#form-message');
    message.textContent = 'Task details validated successfully. (Demo only — no data is stored.)';
    taskForm.reset();
  });
}
