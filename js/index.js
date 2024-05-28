// (1) Variablen initialisieren
const myForm = document.getElementById("myForm");

submitButton.addEventListener("click", async (event) => {
  event.preventDefault();
  onClickSubmit();
});

const onClickSubmit = async () => {
  // Speichert die Daten in der Datenbank
  await databaseClient.insertInto("formular", {
    email: "test",
  });
};
