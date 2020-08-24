//Aqui se aniade todas las funciones para validar datos

export function validateEmail(email) {
  //validacion Email con js
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLocaleLowerCase());
}

//Solo permite introducir números.
export function soloNumeros(e) {
  const key = window.event ? e.which : e.keyCode;
  if (key < 48 || key > 57) {
    //Usando la definición del DOM level 2, "return" NO funciona.
    e.preventDefault();
  }
  return key.test(String(e).toLocaleLowerCase());
}
