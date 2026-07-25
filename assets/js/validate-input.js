export default function validateEmail($input, $validateText) {
  if (!$input || !$validateText) return;

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const email = $input.value;

  return regex.test(email);
}
