function translate(){
  var title = document.getElementById("form-signin-heading");
  var email = document.getElementById("inputEmail");
  var password = document.getElementById("inputPassword");

  // devuelve un array con todos los elementos span del sitio
  // al escribir [0] accedemos a ese arreglo y escogemos el primer elemento
  var remember = document.getElementsByTagName("span")[0];
  // devuelve un array con todos los elementos de esa clase, del sitio
  // al escribir [0] accedemos a ese arreglo y escogemos el primer elemento
  var button = document.getElementsByClassName("btn")[0];
  // utilizamos innerHTML para cambiar el texto del elemento title
  title.innerHTML = "Por favor, inicia sesión";
  // modifica el texto del atributo placeholder del elemento email
  email.placeholder = "Correo electrónico";
  password.placeholder = "Contraseña";
  remember.innerHTML = "Recuérdame";
  button.innerHTML = "Iniciar sesión";

}
translate();

function mostrarDatosIngresados(){
  var emailIngresado = document.getElementById("mostrarEmail");
  var passwordIngresado = document.getElementById("mostrarPassword");

  emailIngresado.innerHTML = document.getElementById("inputEmail").value;
  passwordIngresado.innerHTML = document.getElementById("inputPassword").value;

}
