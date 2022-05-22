let myName = document.querySelector(".my-name");
let myNameText = "Hello I'm Ahmed Abdo";
let iAm = document.querySelector(".i-am");
let iAmText = "I'm";
///
let myJop = document.getElementById("jop-title");
let typingSpeed = 150;
let delayOne = typingSpeed * myNameText.length + 4000;
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
  }, 4000);
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
  Array.from(myCircle).map(function (e) {
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
    overlayImg.src = ele.parentNode.children[0].src;
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
let all = document.querySelector(".all-btn");
let web = document.querySelector(".web-btn");
let graphic = document.querySelector(".graphic-btn");
let cv = document.querySelector(".cv-btn");
let myBtns = [all, web, graphic, cv];
myBtns.map((ele) => {
  ele.addEventListener("click", () => {
    btnSound.play();
    setActiveBtn(ele);
    portfolioBox.forEach((e) => {
      e.classList.add("hide-portfolio-box");
    });

    document.querySelectorAll(`.${ele.getAttribute("type")}`).forEach((ele) => {
      ele.classList.remove("hide-portfolio-box");
      ele.style.cssText = "display:block";
    });

    setTimeout(() => {
      document.querySelectorAll(".hide-portfolio-box").forEach((ele) => {
        ele.style.cssText = "display:none";
      });
    }, 300);
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
  if (hideBtn.getBoundingClientRect().top < 500) {
    contactUl.classList.add("active");
  } else {
    contactUl.classList.remove("active");
  }
});
////////////////////////////////////////////////////////////
//hide header
let hideSound = document.getElementById("audio2");
let showSound = document.getElementById("audio3");
let hideHeader = document.querySelector(".fa-eye-slash");
let showHeader = document.querySelector(".fa-eye");
let header = document.querySelector("header");
showHeader.addEventListener("click", () => {
  showHeader.classList.toggle("toggle-i");
  hideHeader.classList.toggle("toggle-i");
  header.classList.remove("header");
  hideSound.play();
});
hideHeader.addEventListener("click", () => {
  showSound.play();
  showHeader.classList.toggle("toggle-i");
  hideHeader.classList.toggle("toggle-i");
  header.classList.add("header");
});
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
let lReveal = document.querySelectorAll(".lReveal");
let rReveal = document.querySelectorAll(".rReveal");
let uReveal = document.querySelectorAll(".uReveal");
let dReveal = document.querySelectorAll(".dReveal");
let myAnimation = [lReveal, rReveal, uReveal, dReveal];

function makeReveal(divClass) {
  divClass.forEach((ele) => {
    if (ele.getBoundingClientRect().top < 600) {
      ele.classList.add("reveal");
    } else {
      ele.classList.remove("reveal");
    }
  });
}

window.addEventListener("scroll", function () {
  myAnimation.map(function (e) {
    makeReveal(e);
  });
});

/////////////////////add active-nav class on pageofset
let home = document.getElementById("home");
let homeLink = document.getElementById("homeLink");
let skills = document.getElementById("skills");
let skillsLink = document.getElementById("skillsLink");
let services = document.getElementById("services");
let servicesLink = document.getElementById("servicesLink");
let portfolio = document.getElementById("portfolio");
let portfolioLink = document.getElementById("portfolioLink");
let contact = document.getElementById("contact");
let contactLink = document.getElementById("contactLink");
let footer = document.querySelector("footer");
let footerLink = document.querySelector("footer h3");
let myNav = document.querySelectorAll(".my-menu li");
let myLink = [home, skills, services, portfolio, contact, footer];
let myLinkGroup = [
  homeLink,
  skillsLink,
  servicesLink,
  contactLink,
  portfolioLink,
];

home.link = homeLink;
skills.link = skillsLink;
services.link = servicesLink;
contact.link = contactLink;
portfolio.link = portfolioLink;
footer.link = footerLink;

window.addEventListener("scroll", () => {
  myLink.forEach(function (ele) {
    if (ele.getBoundingClientRect().top < 650) {
      if (getComputedStyle(ele.link).display != "none") {
        onview(ele.link);
      } else {
        return false;
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
function setActive(link) {
  myNav.forEach(function (e) {
    e.classList.remove("active-nav");
    link.classList.add("active-nav");
  });
}
myLinkGroup.forEach((ele) => {
  ele.addEventListener("click", () => {
    clickSound.play();
    setActive(ele);
  });
});
