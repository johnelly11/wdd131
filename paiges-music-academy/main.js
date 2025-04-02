const courses = [
    {   
        // initial
        courseName: "Beginning Piano",
        description: "Great for beginning (elementary) pianists without classical music training!",
        image: "piano1.jpg",
        // see more
        info: "For beginning lessons, I hold $15/30 minute sessions once a week, but more or less can be arranged as needed. All payments must be up front for a months worth of lessons. Similarly to dance or other academies, the payment is for my time. If there are sudden cancellations within the week of the lesson, you are still viable to pay for that time slot. However, if I must cancel, or I am given AT LEAST 1.5-2 weeks notice, you will not be charged. It is important to note that at least 30 minutes of practice outside of class is necessary for improvement",
        objectives: "Students will learn necessary classical piano techniques including good practice habits, posture, how to read music notation, and other necessary skills to advance to intermediate piano and music proficiency."
    },
    {
        courseName: "Intermediate Piano",
        description: "Great for beginning adults, or younger musicians that have a basic grasp on classical music training!",
        image: "piano2.jpg",

        info: "For Intermediate Piano lessons, I hold $15/30 minute or $20/45 minute sessions once a week, but more or less can be arranged as needed. All payments must be up front for a months worth of lessons. Similarly to dance or other academies, the payment is for my time. If there are sudden cancellations within the week of the lesson, you are still viable to pay for that time slot. However, if I must cancel, or I am given AT LEAST 1.5-2 weeks notice, you will not be charged. It is important to note that at least 45 minutes of practice outside of class is necessary for improvement",
        objectives: "Students will learn necessary classical piano techniques including good practice habits, musicality, how to sight-read music notation, and other necessary skills to obtain an advanced piano and music proficiency."
    },
    {
        courseName: "Beginning Cello",
        description: "Great for beginning cellists without musical training!",
        image: "cello1.jpg",

        info: "For beginning lessons, I hold $15/30 minute sessions once a week, but more or less can be arranged as needed. All payments must be up front for a months worth of lessons. Similarly to dance or other academies, the payment is for my time. If there are sudden cancellations within the week of the lesson, you are still viable to pay for that time slot. However, if I must cancel, or I am given AT LEAST 1.5-2 weeks notice, you will not be charged. It is important to note that at least 30 minutes of practice outside of class is necessary for improvement",
        objectives: "Students will learn necessary cello techniques including good practice habits, posture, how to read music notations, and other skills to advance to intermediate cello and general music proficiency"
    },
    {
        courseName: "Intermediate Cello",
        description: "Great for beginning adults, or younger cellists that have a basic grasp on classical music training!",
        image: "cello2.jpg",

        info: "For Intermediate Cello lessons, I hold $15/30 minute or $20/45 minute sessions once a week, but more or less can be arranged as needed. All payments must be up front for a months worth of lessons. Similarly to dance or other academies, the payment is for my time. If there are sudden cancellations within the week of the lesson, you are still viable to pay for that time slot. However, if I must cancel, or I am given AT LEAST 1.5-2 weeks notice, you will not be charged. It is important to note that at least 45 minutes of practice outside of class is necessary for improvement",
        objectives: "Students will learn necessary classical cello techniques including good practice habits, musicality and tonality, how to sight-read music notations, and other necessary skills to obtain an advanced cello and music proficiency."
    }
]

function createCourses(courses) {
    const container = document.getElementById("courses-view");
    container.innerHTML = "";
  
    courses.forEach((course) => {
      const recipesDiv = document.createElement("div");
  
      const html = `
        <div class="courses-view">
        <div class="inner-courses-view">
          <div class="courses-image">
            <img src="images/${course.image}" alt="image for ${course.courseName}"></img>
          </div>
          <div class="courses-init">
            <div class="courses-title">
              <h2>${course.courseName}</h2>
            </div>
            <div class="courses-description">
                <p>${course.description}</p>
            </div>
          </div>
        </div>
  
            <div class="hidden">
              <div class="courses-objectives">
                <p>${course.objectives}</p>
              </div>
              <div class="courses-info">
                <p>${course.info}</p>
              </div>
            </div>
            <div class="courses-button">
              <button onclick="toggleDetails(this)">show more</button>
            </div>
        
        </div>
      `;
  
      recipesDiv.innerHTML = html;
      container.appendChild(recipesDiv);
    });
  }
  
  function toggleDetails(button) {
    const hiddenElements = button.parentElement.previousElementSibling;
    if (hiddenElements.classList.contains("hidden")) {
      hiddenElements.classList.remove("hidden");
      button.textContent = "show less";
      drawPianoKeys(true);
    } else {
      hiddenElements.classList.add("hidden");
      button.textContent = "show more";
      drawPianoKeys(true);
    }
  }

if (window.location.pathname === '/wdd131/paiges-music-academy/courses.html') {
    createCourses(courses);
}
if (window.location.pathname === '/courses.html') {
    createCourses(courses);
}
if (window.location.pathname === '/paiges-music-academy/courses.html') {
    createCourses(courses);
}








let leftPiano, rightPiano;


function drawPianoKeys(pianoExists) {
    const mainElement = document.querySelector('main');
    const mainHeight = mainElement.clientHeight;
    const screenWidth = window.innerWidth;
    
    const keyWidth = screenWidth / 8;
    const blackKeyWidth = keyWidth * 0.6;

    const fixedKeyHeight = 50;
    const bufferZoneRight = 15;

    if (pianoExists) {
        mainElement.removeChild(leftPiano);
        mainElement.removeChild(rightPiano);
    }
  
    leftPiano = document.createElement('div');
    rightPiano = document.createElement('div');

    mainElement.appendChild(leftPiano);
    mainElement.appendChild(rightPiano);
  
    function createKey(x, y, width, height, isBlack) {
      const key = document.createElement('div');
      key.className = 'piano-key' + (isBlack ? ' black' : '');
      key.style.left = x + 'px';
      key.style.top = (y + (mainElement.offsetTop)) + 'px';
      key.style.width = width + 'px';
      key.style.height = height + 'px';
      return key;
    }
  
    function drawSide(container, isLeft) {
      let x = isLeft ? 0 : screenWidth - keyWidth - bufferZoneRight;
  
      const keyPattern = [
        { white: true },
        { black: true },
        { white: true },
        { black: true },
        { white: true },
        { white: true },
        { black: true },
        { white: true },
        { black: true },
        { white: true },
        { black: true },
        { white: true },
      ];
  
      let currentY = 0;
      let patternIndex = 0;
  
      while (currentY < mainHeight) {
        const keyInfo = keyPattern[patternIndex];
        const actualKeyHeight = Math.min(fixedKeyHeight, mainHeight - currentY);
  
        if (keyInfo.white) {
          container.appendChild(createKey(x, currentY, keyWidth, actualKeyHeight, false));
          currentY += actualKeyHeight;
        }
        if (keyInfo.black) {
            let blackX;
            
    
            if (isLeft === false) {
              blackX = x + (keyWidth * 0.4);
            }
            container.appendChild(createKey(blackX, currentY - actualKeyHeight * 0.5, blackKeyWidth, actualKeyHeight * 0.6, true));
          }
  
        patternIndex = (patternIndex + 1) % keyPattern.length;
        if (currentY >= mainHeight) {
          break;
        }
      }
    }
  
    drawSide(leftPiano, true);
    drawSide(rightPiano, false);
  }
  
drawPianoKeys(false);
  
window.addEventListener('resize', () => {
    drawPianoKeys(true);
});