//Voici le fichier java de ma page web html "La dame pâle"
const systemeBoiteDialogue = (boiteDialogue, dialog, button_O, button_F) => {
  //C'est un système de boite à dialogue pou racourcir la page qui m'a l'aire bien trop longue
  var boiteDialogue = document.getElementById(dialog);
  document.getElementById(button_O).addEventListener("click", () => {
    boiteDialogue.show();
  });
  document.getElementById(button_F).addEventListener("click", () => {
    boiteDialogue.close();
  });
};

alert("Voici ma page web dédié au livre La dame pâle de Alexandre Dumas");
alert(
  "Tu y trouvera :\nun lien vers le livre versioon pdf,\nun résumé complet du livre,\nune analyse de l'oeuvre,\nmes opignon personnel et\nun autre lien vers un QCM sur le livre pour vérifier tes connaissance"
);
alert("MERCI !!!");

let boiteDialogue1;
systemeBoiteDialogue(boiteDialogue1, "dialog1", "button_O1", "button_F1");
let boiteDialogue2;
systemeBoiteDialogue(boiteDialogue2, "dialog2", "button_O2", "button_F2");
let boiteDialogue3;
systemeBoiteDialogue(boiteDialogue3, "dialog3", "button_O3", "button_F3");
let boiteDialogue4;
systemeBoiteDialogue(boiteDialogue4, "dialog4", "button_O4", "button_F4");
let boiteDialogue5;
systemeBoiteDialogue(boiteDialogue5, "dialog5", "button_O5", "button_F5");
