var container = document.getElementById("card-container");
function generatenum() {
  container.innerHTML = "";

  let randomnumber = Math.random() * 3;
  newrandomnumber = Math.ceil(randomnumber);
  console.log(newrandomnumber);

  if (newrandomnumber == 1) {
    container.innerHTML = `
      <div class="card card-1 animate__animated  animate__flipInY" id="card-1">
        <img src="Ikka.jpg" alt="">
      </div>
       <div class="card card-2 animate__animated  animate__flipInY" id="card-2">
        <img src="Ikka.jpg" alt="">
      </div>
      <div class="card card-3 animate__animated  animate__flipInY" id="card-3">
        <img src="Ikka.jpg" alt="">
      </div>`;
  } else if (newrandomnumber == 2) {
    container.innerHTML = `
      <div class="card card-1 animate__animated  animate__flipInY" id="card-1">
        <img src="king.jpg" alt="">
      </div>
       <div class="card card-2 animate__animated  animate__flipInY" id="card-2">
        <img src="king.jpg" alt="">
      </div>
      <div class="card card-3 animate__animated  animate__flipInY" id="card-3">
        <img src="king.jpg" alt="">
      </div>`;
  } else if (newrandomnumber == 3) {
    container.innerHTML = `
      <div class="card card-1 animate__animated  animate__flipInY" id="card-1">
        <img src="joker.jpg" alt="">
      </div>
       <div class="card card-2 animate__animated  animate__flipInY" id="card-2">
        <img src="joker.jpg" alt="">
      </div>
      <div class="card card-3 animate__animated  animate__flipInY" id="card-3">
        <img src="joker.jpg" alt="">
      </div>`;
  } else {
    alert("Error");
  }
}
function Reset(){
  container.innerHTML=`
        <div class="card card-1" id="card-1">
        <img src="card-back.jpg" alt="">
      </div>
       <div class="card card-2" id="card-2">
        <img src="card-back.jpg" alt="">
      </div>
      <div class="card card-3" id="card-3">
        <img src="card-back.jpg" alt="">
      </div>`
}