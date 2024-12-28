const formData = document.querySelector("form");
console.log(formData);

formData.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = document.querySelector("#height").value;
  const weight = document.querySelector("#weight").value;
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a vald point ${height}`;
  }
  results.innerHTML = `${height}`;
});
