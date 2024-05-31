// (1) Variablen initialisieren
const myForm = document.getElementById("myForm");

// Funktion definieren
const onClickSubmit = async () => {
  // Speichert die Daten in der Datenbank
  await databaseClient.insertInto("formular", {
    email: "test",
  });
};

// Event-Listener hinzufügen
myForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  await onClickSubmit();
});
