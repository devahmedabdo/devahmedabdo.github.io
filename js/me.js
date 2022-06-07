///////
let myName = document.querySelector(".my-name");
let myNameText = "Hello I'm Ahmed Abdo";
let iAm = document.querySelector(".i-am");
let iAmText = "I'm";
///
let myJop = document.getElementById("jop-title");
let typingSpeed = 150;
let delayOne = typingSpeed * myNameText.length + 7000;
let delayTwo = 500 + delayOne + typingSpeed * iAmText.length;
////

let myjops = ["Front-End Developer", "Graphic Designer", "CV Writer"];
let typingtime = 100;
let erasingtime = 100;
let jopDelay = 2000;
let jopNumber = 0;
let i = 0;

function typing() {
  if (i < myjops[jopNumber].length) {
    myJop.classList.add("typing");
    myJop.textContent += myjops[jopNumber].charAt(i);
    i++;
    setTimeout(typing, typingtime);
  } else {
    myJop.classList.remove("typing");
    setTimeout(erase, jopDelay);
  }
}

function erase() {
  if (i > 0) {
    myJop.classList.add("typing");
    myJop.textContent = myjops[jopNumber].substring(0, i - 1);
    i--;
    setTimeout(erase, erasingtime);
  } else {
    jopNumber++;
    if (jopNumber >= myjops.length) jopNumber = 0;
    setTimeout(typing, typingtime + 1100);
  }
}
window.onload = function () {
  setTimeout(() => {
    let onload = document.querySelector(".onloading");
    onload.classList.add("hide-onload");
  }, 4000);

  setTimeout(() => {
    document.querySelector(".my-img img").classList.remove("uReveal");
  }, 4400);

  setTimeout(() => {
    document.querySelector(".ul").classList.remove("ul");
  }, 4600);
  setTimeout(() => {
    document.querySelector(".onlanding").classList.remove("onlanding");
    document.querySelectorAll(".my-menu li").forEach((ele) => {
      ele.style.transitionDelay = "0s";
    });
  }, 4800);

  setTimeout(function () {
    myName.style.borderRight = "2px solid var(--icon-color)";
    let i = 0;
    let x1 = setInterval(function () {
      myName.innerHTML += myNameText.split("")[i];
      i++;
      if (i == myNameText.length) {
        clearInterval(x1);
        myName.style.border = "none";
      }
    }, typingSpeed);
  }, 7000);
  /////////////

  setTimeout(() => {
    iAm.style.borderRight = "2px solid var(--icon-color)";
    let i = 0;
    let x2 = setInterval(function () {
      iAm.innerHTML += iAmText.split("")[i];
      i++;
      if (i == iAmText.length) {
        clearInterval(x2);
        iAm.style.border = "none";
      }
    }, typingSpeed);
  }, delayOne);
  /////////
  setTimeout(typing, delayTwo);
};

// set skills progress
function setProgrss() {
  let myCircle = document.querySelectorAll(".progress-circle");
  myCircle.forEach(function (e) {
    let myProgress = e.getAttribute("progress");
    e.style = `--skills-persentage:${myProgress * 3.4 + 500}px`;
  });
}
setProgrss();
// keap my skill progress
let mySkills = document.querySelectorAll(".box");
window.addEventListener("scroll", () => {
  mySkills.forEach((ele) => {
    if (ele.getBoundingClientRect().top < 500) {
      ele.classList.add("on-view");
    } else {
      ele.classList.remove("on-view");
    }
  });
});
////////////////////////////////////////////////////////////
let btnSound = document.getElementById("audio5");
// make overlay img to view
let overlay = document.querySelector(".overlay-img");
let overlayImg = document.querySelector(".overlay-img img");
let view = document.querySelectorAll(".view");
view.forEach((ele) => {
  ele.addEventListener("click", () => {
    btnSound.play();
    overlayImg.src = ele.previousElementSibling.src;
    overlay.classList.remove("hide-overlay");
  });
});

// hide overlay
overlay.addEventListener("click", () => {
  overlay.classList.add("hide-overlay");
});
/////////////////
//fillter portfolio
let portfolioBox = document.querySelectorAll(".portfolio-box");

let hidePortfolioBox = document.querySelectorAll(".hide-portfolio-box");
let myBtns = document.querySelectorAll(".buttons button");
myBtns.forEach((ele) => {
  ele.addEventListener("click", () => {
    btnSound.play();
    setActiveBtn(ele);
    portfolioBox.forEach((e) => {
      e.classList.add("hide-portfolio-box");
    });

    document.querySelectorAll(`.${ele.getAttribute("type")}`).forEach((ele) => {
      ele.classList.remove("hide-portfolio-box");
      ele.classList.add("reveal");
    });
  });
});

function setActiveBtn(btn) {
  myBtns.forEach(function (e) {
    e.classList.remove("active");
    btn.classList.add("active");
  });
}
///////// show contact
let hideBtn = document.querySelector(".hide-btn");
let contactUl = document.querySelector(".contact ul");
hideBtn.addEventListener("click", () => {
  btnSound.play();
  contactUl.classList.toggle("active");
});
window.addEventListener("scroll", () => {
  if (hideBtn.getBoundingClientRect().top < 800) {
    contactUl.classList.add("active");
  } else {
    contactUl.classList.remove("active");
  }
});
////////////////////////////////////////////////////////////
//hide header
for (let btn of document.querySelectorAll(".header-btn i")) {
  btn.onclick = () => {
    for (let btn of document.querySelectorAll(".header-btn i")) {
      btn.classList.toggle("toggle-i");
    }
    document.querySelector("header").classList.toggle("header");
    document.getElementById(btn.getAttribute("sound")).play();
  };
}

////////////////////////////////////////////////////////////
//hide to top btn

let toTopBtnSound = document.getElementById("audio1");
let toTopBtn = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    toTopBtn.classList.add("active-up-btn");
  } else {
    toTopBtn.classList.remove("active-up-btn");
  }
});
toTopBtn.addEventListener("click", () => {
  toTopBtnSound.play();
});
////////////////////////////////////////////////////////////
// make elemets reveal
let myAnimation = document.querySelectorAll(
  "*.lReveal , *.rReveal ,*.uReveal,*.dReveal"
);
function makeReveal(element) {
  if (element.getBoundingClientRect().top < 600) {
    element.classList.add("reveal");
  } else {
    element.classList.remove("reveal");
  }
}

window.addEventListener("scroll", function () {
  myAnimation.forEach(function (e) {
    makeReveal(e);
  });
});

/////////////////////add active-nav class on pageoffset

let myNav = document.querySelectorAll("nav ul li");
let myLink = document.querySelectorAll(".my-sections");
window.addEventListener("scroll", () => {
  myLink.forEach(function (ele) {
    if (ele.getBoundingClientRect().top < 650) {
      if (
        getComputedStyle(document.getElementById(ele.getAttribute("nav")))
          .display != "none"
      ) {
        onview(document.getElementById(ele.getAttribute("nav")));
      }
    }
  });
});

function onview(link) {
  myNav.forEach(function (ele) {
    ele.classList.remove("active-nav");
    link.classList.add("active-nav");
  });
}
//add active-nav class on click
let clickSound = document.getElementById("audio4");
myNav.forEach((ele) => {
  ele.addEventListener("click", () => {
    clickSound.play();
  });
});
/////all rightreserved
document.querySelector("footer h3 span").innerHTML = new Date().getFullYear();
