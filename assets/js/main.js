/*Translate button*/
const translate = ()=>{
document.querySelector(".english").addEventListener("click",()=>{
    document.querySelector(".Arabic-btns").classList.add("d-none");
    document.querySelector(".english-btns").classList.remove("d-none");
    document.querySelectorAll(".english-pra").forEach(el => el.classList.remove("d-none"));
    document.querySelectorAll(".Arabic-pra").forEach(el => el.classList.add("d-none"));
    document.querySelectorAll(".shopNow").forEach(element => {
        element.textContent = "Shop Now";
    });
    
})
document.querySelector(".Arabic").addEventListener("click",()=>{
    document.querySelector(".english-btns").classList.add("d-none");
    document.querySelector(".Arabic-btns").classList.remove("d-none");
    document.querySelectorAll(".english-pra").forEach(el => el.classList.add("d-none"));
    document.querySelectorAll(".Arabic-pra").forEach(el => el.classList.remove("d-none"));
    document.querySelectorAll(".shopNow").forEach(element => {
        element.textContent = "تسوق الآن";
        element.style.fontSize = "17px";   
    });
    
    })
   
}
translate();
/*Translate button*/

/*Hover_Nike */
const HoverNike = () => {
    document.addEventListener("DOMContentLoaded", () => {
      const scrols = document.querySelector(".scrols");
      const divNike = document.querySelector(".div-nike");
      let timeout;
  
      
      divNike.classList.remove("show");
      
      
      scrols.addEventListener("mouseenter", () => {
        clearTimeout(timeout);
        divNike.classList.add("show", "animate__animated", "animate__fadeIn");
        divNike.classList.remove("animate__fadeOut");
      });
  
      
      scrols.addEventListener("mouseleave", () => {
        timeout = setTimeout(() => {
          divNike.classList.remove("animate__fadeIn");
          divNike.classList.add("animate__animated", "animate__fadeOut");
  
          setTimeout(() => {
            divNike.classList.remove("show");
          }, 200); 
        }, 50); 
      });
  
      divNike.addEventListener("mouseenter", () => {
        clearTimeout(timeout);
        divNike.classList.remove("animate__fadeOut");
      });
  
      divNike.addEventListener("mouseleave", () => {
        timeout = setTimeout(() => {
          divNike.classList.remove("animate__fadeIn");
          divNike.classList.add("animate__animated", "animate__fadeOut");
  
          setTimeout(() => {
            divNike.classList.remove("show");
          }, 200); 
        }, 50);
      });
    });
  };
  
  HoverNike();
  
  
  
  

/*Hover_Nike */


const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); 
      observer.unobserve(entry.target); 
    }
  });
}, { threshold: 0.5 }); 

document.querySelectorAll('.sec1 .row a').forEach(element => {
  observer.observe(element);
});



const observerSec2 = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.sec2 .div1-cont-sec2').forEach(element => {
  observerSec2.observe(element);
});
document.querySelectorAll('.sec2 .div2-cont-sec2').forEach(element => {
  observerSec2.observe(element);
});
document.querySelectorAll('.sec2 .div3-cont-sec2').forEach(element => {
  observerSec2.observe(element);
});



const options = {
  threshold: 0.5 
};

const optionsSec4 = {
  threshold: 0.5 
};

const observerSec4 = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); 
    }
  });
}, optionsSec4);

document.querySelectorAll('.sec4-cont1').forEach((element) => {
  observerSec4.observe(element);
});
