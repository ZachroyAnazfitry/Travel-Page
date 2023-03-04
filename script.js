// for stacked card
// select buttons
Array.from(document.querySelectorAll('.navigation-button')).forEach((item) => {
    item.onclick = () => {
        // need to assigned new class to card
        // 
        item.parentElement.parentElement.classList.toggle("change");

    }
})
// transform to array and loop

