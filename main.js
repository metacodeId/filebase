const apiUrl = 'https://metacodeid.github.io/filebase/contents/';
const token = "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";
const saveButton = document.getElementById("save-button");
const fileNameInput = document.getElementById("file-name");
const fileContentInput = document.getElementById("file-content");
const resultDiv = document.getElementById("result");

saveButton.addEventListener("click", () => {
  const fileName = fileNameInput.value;
  const fileContent = fileContentInput.value;
  const encodedContent = btoa(fileContent);
  
  fetch(apiUrl + fileName, {
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: "Simpan file",
        content: encodedContent
      })
    })
    .then(response => response.json())
    .then(data => {
      resultDiv.innerHTML = "File berhasil disimpan!";
      console.log(data);
    })
    .catch(error => {
      resultDiv.innerHTML = "Gagal menyimpan file!";
      console.error(error);
    });
});
