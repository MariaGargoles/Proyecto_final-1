const scrollbar = document.getElementById("scroll__progress");

function update() {
    scrollbar.style.width = `${(window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100}%`;
    
}