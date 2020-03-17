document.write('coucou<br><br>');

document.write("<form><input value='Je suis une perruche'></form><br><br>");

function validerform() {
  var champ = document.getElementById("myField").value;
  if (!champ) {
      document.getElementById("erreurlabel").innerHTML = "Le champ est vide";
  } else {
      document.getElementById("erreurlabel").innerHTML = "le champ n'est pas vide";
  }
  return false;
}