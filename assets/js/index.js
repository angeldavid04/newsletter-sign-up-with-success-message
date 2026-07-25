"use strict";

import validateEmail from "./validate-input.js";

function handleForm(e) {
  e.preventDefault();

  const $emailInput = document.getElementById("email");
  const $emailValidate = document.getElementById("validate-email");

  const isValid = validateEmail($emailInput, $emailValidate);

  if (isValid) {
    $modal.showModal();
  }
}

function closeModal() {
  $modal.close();
}

const $form = document.getElementById("newsletter-form");
const $modal = document.getElementById("modal");
const $closeModal = document.getElementById("close-modal");

$form.addEventListener("submit", handleForm);
$closeModal.addEventListener("click", closeModal);
