function showOverlayFull(text, color) {
  document.getElementById("text").innerText = text;
  document.getElementById("overlay").style.backgroundColor = color;
  document.getElementById("overlay").style.display = "block";
  stopShake();
}

function showOverlay(text) {
  showOverlayFull(text, '#00000090');
}

function showOverlayCorrect() {
  showOverlayFull(correctAnswer, '#6e006580');
  stopShake();
  shakeFast();
}

function hideOverlay() {
  document.getElementById("overlay").style.display = "none";
  stopShake();
  startShake();
}

function stopShake() {
  var images = document.getElementsByTagName("img");

  for (var img of images) {
    img.classList.remove('shake');
    img.classList.remove('shake-fast');
  }
}

function startShake() {
  var images = document.getElementsByTagName("img");

  for (var img of images) {
    img.classList.add('shake');
  }
}

function shakeFast() {
  var images = document.getElementsByTagName("img");

  for (var img of images) {
    img.classList.add('shake-fast');
  }
}

var wrongAnswers = [
  'oops wrong try again!',
  'NO UR WRONG',
  'nagkamali ka lang siguro ng click, pwede umulit',
  'i have bent my attention towards the matter with a patience i scarcely possess, and it is with a sadness i had hoped to avoid that i perceive a confusion so artfully arranged, so barren of substance that it lingers as a pale fiction divorced from reality',
  'nooooooooooooooooooooooooooooooooooooooooooooooooooooooooooOoooooOOooooooooooOooooooooo!!',
  'oh bat mo to kinclick',
  'i stand in earnest amazement, unable to divine the true nature of so astonishing an occurrence, and i find myself arrested by a confusion so sudden that my understanding seems wrenched from its accustomed place; and in that disordered state i am shattered in the ruins of my own expectation',
  'hmmmm hindi talaga eh',
  'laging tatandaan na ang pagkakamali ay itinatama at hindi inuulit',
  'i confess myself wholly confounded and, at the risk of seeming ungenerous in my doubt, must enquire whether you are indeed serious, for the claim taxes credulity beyond all reason',
  'it is with a vexation scarce to be uttered, and with patience at last quite spent by repeated disappointment, that i am reduced to the wretched business of bearing this insufferable and detestable imposition',
  'this is not it. this is not the one',
  'are u sure ka na ba diyaaaan?!',
];

var correctAnswer = 'yeheeeyyyy! happy balentayms my labs! tayms two tayms tri!';
