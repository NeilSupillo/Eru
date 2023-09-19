  (function() {
    "use strict"
    const chichan = ['eru4.jpeg', 'eru1.jpeg', 'eru2.jpeg', 'eru3.jpeg', 'eru5.jpeg', 'eru6.jpeg', 'eru7.jpeg', 'eru8.jpeg', 'eru9.jpeg'];
    let chi = 0;
    const prePic = document.getElementById('previous');
    const nextPic = document.getElementById('next');
    prePic.style.display = "none";
    nextPic.style.display = "block";
    const con = document.getElementById('content');
  
    nextPic.addEventListener('click', function(event) {
  
      chi++;
      if (chi === 1) {
        prePic.style.display = "block";
      }
      else if (chi === chichan.length - 1) {
        nextPic.style.display = "none";
      }
  
  
      swapImg();
    });
  
  
    prePic.addEventListener('click', function(event) {
      chi--;
      if (chi === 0) {
        prePic.style.display = "none";
      }
      else if (chi === chichan.length - 2) {
        nextPic.style.display = "block";
      }
      swapImg();
    });
  
    function swapImg() {
      const nextsli = document.createElement('img');
      nextsli.src = chichan[chi];
      nextsli.className = 'fade';
      con.appendChild(nextsli);
  
      if (con.children.length > 2) {
        con.removeChild(con.children[0]);
      }
    }
  })();