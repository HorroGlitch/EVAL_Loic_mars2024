const previousButton = document.querySelector('.previousButton');
const nextButton = document.querySelector('.nextButton');
const carrouselImg = document.querySelector('.carrouselImg');

const testimonialText = document.querySelector('.testimonial-text');
const entireName = document.querySelector('.testimonial-author');
const testimonialJob = document.querySelector('.testimonial-position');


let i = 0;

let testimonials = [

    {
        id:0,
        name:"Tanya Sinclair",
        job:"UX Engineer",
        imgSrc:"./images/image-tanya.jpg",
        testimonial:"“La programmation m'intéressait depuis un certain temps mais je n’avais jamais sauté le pas. Ce cours a été une révélation pour moi. Il m’a permis d’obtenir le job de mes rêves.”"
    },

    {
        id:1,
        name:"John Tarkpor",
        job:"Junior Front-end Developer",
        imgSrc:"public/images/image-john.jpg",
        testimonial:"“Si vous souhaitez poser les meilleures bases possibles, je vous recommande de suivre ce cours. Il m’a aidé à prendre confiance en moi et à devenir un meilleur développeur.”"
    },

    {
        id:2,
        name:"Nathalia Sylin",
        job:"CEO and CTO",
        imgSrc:"public/images/profileImageSecond.jpg",
        testimonial:"My priority is to gain confidence and have good work with our collaborators, the most we talk, the most the project can grew up."
    },

    {
        id:3,
        name:"Eric Digo",
        job:"Co-worker on UI-UX",
        imgSrc:"public/images/profileImageOne.jpg",
        testimonial:"As a UI-UX developer, I'm always searching fore some new projects and fun, so I can perform on new things."
    }


]

console.log(testimonialJob.textContent = testimonials[i].job)

// let tableauImg = ["./images/image-tanya.jpg", "public/images/image-john.jpg"];

function buttonsChangeImg(i, testimonials) {

    previousButton.addEventListener("click", ()=>{
        i -= 1
        if (i < 0) {
            i = testimonials.length-1
            carrouselImg.src = testimonials[i].imgSrc;
            testimonialText.textContent = testimonials[i].testimonial;
            testimonialJob.textContent = testimonials[i].job;
            entireName.textContent = testimonials[i].name;

        } else {;
            carrouselImg.src = testimonials[i].imgSrc;
            testimonialText.textContent = testimonials[i].testimonial;
            testimonialJob.textContent = testimonials[i].job;
            entireName.textContent = testimonials[i].name;
        }
    });
    
    nextButton.addEventListener("click", ()=>{
        i += 1;
        if (i > testimonials.length-1) {
            i = 0;
            carrouselImg.src = testimonials[i].imgSrc;
            testimonialText.textContent = testimonials[i].testimonial;   
            testimonialJob.textContent = testimonials[i].job;  
            entireName.textContent = testimonials[i].name;
        } else {
            carrouselImg.src = testimonials[i].imgSrc;
            testimonialText.textContent = testimonials[i].testimonial;
            testimonialJob.textContent = testimonials[i].job;
            entireName.textContent = testimonials[i].name;
        }
    });

}
buttonsChangeImg(i, testimonials);



function changeImgAuto(testimonials) {
        
    let i = 0;
    setInterval(() => {
        i += 1;
        if (i > testimonials.length-1) {
            i = 0;
            carrouselImg.src = testimonials[i].imgSrc;
            testimonialText.textContent = testimonials[i].testimonial;
            testimonialJob.textContent = testimonials[i].job;
            entireName.textContent = testimonials[i].name;
        } else {
            carrouselImg.src = testimonials[i].imgSrc;
            testimonialText.textContent = testimonials[i].testimonial;
            testimonialJob.textContent = testimonials[i].job;
            entireName.textContent = testimonials[i].name;
        }
    }, 5000);
}
changeImgAuto(testimonials, carrouselImg);

