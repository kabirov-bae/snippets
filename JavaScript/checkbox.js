// Form checkboxes
document.addEventListener('DOMContentLoaded', function () {
  const checkbox = document.querySelector('.js-checkbox');
  const checkboxIcon = document.querySelector('.js-checkbox-icon');
  const formBtn = document.querySelector('.js-form-button');

  function toggleCheckbox() {
    checkbox.checked = !checkbox.checked;
    checkboxIcon.classList.toggle(
      'form__checkbox-icon--checked',
      checkbox.checked
    );

    formBtn.setAttribute('disabled', !checkbox.checked);
  }

  document
    .querySelector('.form__checkbox-label')
    .addEventListener('click', toggleCheckbox);
});
