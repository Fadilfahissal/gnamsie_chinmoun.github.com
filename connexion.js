
  var email = document.getElementsByTagName('email');
  var password = document.getElementsByTagName('password');
  var confirm-password = document.getElementsByTagName('confirmpassword');
function validateEmail() {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// Ajout d'un événement de validation sur le champ d'email
emailField.addEventListener('input', function() {
  if (!validateEmail(emailField.value)) {
    emailField.setCustomValidity('Veuillez entrer une adresse e-mail valide.');
  } else {
    emailField.setCustomValidity('');
  }
});
 // Ajout d'une contrainte de longueur sur le champ de mot de passe
passwordField.addEventListener('input', function() {
  if (passwordField.value.length < 8) {
    passwordField.setCustomValidity('Le mot de passe doit contenir au moins 8 caractères.');
  } else {
    passwordField.setCustomValidity('');
  }
});

 