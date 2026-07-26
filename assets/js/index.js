"use strict";

function handleForm(e) {
  e.preventDefault();

  const isValid = validateInput($emailInput, $emailValidate, regex);

  if (isValid) {
    $showEmail.textContent = $emailInput.value;
    e.target.reset();
    showModal();
  }
}

function validateInput($input, $validate, regex) {
  if (!$input || !$validate || !regex) return;

  const email = $input.value;
  const isValid = regex.test(email);

  $input.setAttribute("aria-invalid", String(!isValid));
  if (!isValid) {
    $input.setAttribute("data-state", "error");
    $validate.setAttribute("data-state", "error");
  } else {
    $input.removeAttribute("data-state");
    $validate.removeAttribute("data-state");
  }

  return isValid;
}

function debounce(func, wait) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, wait);
  };
}

function showModal() {
  $modal.showModal();
  document.body.setAttribute("data-state", "on-modal");
}

function closeModal() {
  $modal.close();
  document.body.removeAttribute("data-state", "on-modal");
}

const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const $form = document.getElementById("newsletter-form");
const $emailInput = document.getElementById("email");
const $emailValidate = document.getElementById("validate-email");
const $modal = document.getElementById("modal");
const $showEmail = document.getElementById("show-email");
const $closeModal = document.getElementById("close-modal");

$form.addEventListener("submit", handleForm);
$form.email.addEventListener(
  "input",
  debounce(() => validateInput($emailInput, $emailValidate, regex), 500)
);
$closeModal.addEventListener("click", closeModal);
