const scriptURL = "https://script.google.com/macros/s/AKfycbzV9OhNFOTCypB1JsV1WOF8j_q16urcYx9i2Rq8nnKOC1pcE_yQ_CKFrMkBp8Tf_Ed8hA/exec";

document.getElementById("registrationForm")
.addEventListener("submit", function(e){

  e.preventDefault();

  document.getElementById("loader").style.display = "block"; // show loader

  const formData = new FormData();

  formData.append("name", document.getElementById("name").value);
  formData.append("email", document.getElementById("email").value);
  formData.append("phone", document.getElementById("phone").value);
  formData.append("organization", document.getElementById("organization").value);
  formData.append("event", document.getElementById("event").value);

  fetch(scriptURL, {
    method: "POST",
    body: formData
  })
  .then(res => res.text())
  .then(data => {

    document.getElementById("loader").style.display = "none"; // hide loader

    document.getElementById("result").innerHTML =
      "<h3>Registration Successful!</h3><p>Check your email.</p>";

  })
  .catch(err => {

    document.getElementById("loader").style.display = "none";

    console.error(err);
    alert("Error submitting form");
  });

});
