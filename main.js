// call the glopal variables
let mainBg=document.getElementById("sliders")
let borderSlider=document.getElementById("middleslider")
let sliders=Array.from(document.querySelectorAll("img")) 
let imgsContainer=document.getElementById("boxes-container")
let currentSlideIndex;
// the function to set slider-background and match the 2 bgi
sliders.forEach((background)=>
{
    background.addEventListener("click",()=>
    {
        let slidersBakground=background.src;
        borderSlider.style.backgroundImage=`url(${slidersBakground})`;
        mainBg.style.backgroundImage=borderSlider.style.backgroundImage=`url(${slidersBakground})`;
        nextBtn.classList.remove("d-none")
        prevBtn.classList.remove("d-none")
        
    })
})
// function to match the 2 bg 
setInterval(
    function()
    {
        currentSlideIndex++;
        let nextSlide=sliders[currentSlideIndex.src];
        borderSlider.style.backgroundImage=`url(${nextSlide})`
    },20)
