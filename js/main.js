function translate(){
  var title = document.getElementById("form-signin-heading");
  var email = document.getElementById("inputEmail");
  var password = document.getElementById("inputPassword");
  var remember = document.getElementsByTagName("span")[0];
  var button = document.getElementsByClassName("btn")[0];

  title.innerHTML = "Por favor inicia secion";
  email.placeholder = "Correo Electronico";
  password.placeholder = "Contraseña";
  remember.innerHTML = "Recordar Datos";
  button.innerHTML = "Iniciar Sesion";
}

translate()

function mostrarDatos(){
  var email = document.getElementById("inputEmail").value;
  var password = document.getElementById("inputPassword").value;

  document.getElementById('titulo').innerHTML = "Datos del Formulario";
  document.getElementById('datos').innerHTML = "EL correo electronico ingresado es:<br>" + email + "<br>La clave ingresada es:<br> " + password;
}
