// script.js

function showStudyPart(id1, id2) {
  const part = document.getElementById(id1);
  const study = document.getElementById(id2);
  // console.log(study.style.display);
  if (study.style.display == '' || study.style.display == 'none') {
    part.classList.add('showStudy');
    study.style.display = 'block';
  } else {
    part.classList.remove('showStudy');
    study.style.display = 'none';    
  }
}


