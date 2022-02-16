let myCanvas = document.createElement('canvas');
document.body.appendChild(myCanvas);

let myConfetti = confetti.create(myCanvas, { resize: true });


function play_animation() {
    setInterval(() => {
        confetti({
            particleCount: 100,
            startVelocity: 30,
            spread: 360,
            origin: {
                x: Math.random(),
                // since they fall down, start a bit higher than random
                y: Math.random() - 0.2
            }
        });
    }, 1000);
}

let text_container = document.querySelector(".text")
let card_container = document.querySelector(".card")
let wish_gallery_container = document.querySelector(".wish_gallery")

let animation = true // set it to true for oning animation

if (animation){
    text_container.style.display = "none"
    card_container.style.display = "none"
    wish_gallery_container.style.display = "none"
    
    let envelope = document.querySelector(".box");
    envelope.onclick = ()=>{
        let image = document.querySelector(".image");
        let cover = document.querySelector(".cover");
        
        play_animation()
        
        image.classList.add("image_animation")
        cover.classList.add("cover_animation")
    
        text_container.style.display="flex"
        card_container.style.display="flex"
        wish_gallery_container.style.display="flex"
    }
}