

const link = document.querySelector('.ads');
const panels = document.querySelectorAll(".panel");

link.addEventListener('click', function(e) {
    if (e.target.tagName == "LI") {
        const targetPanel = document.querySelector(e.target.dataset.target);
        panels.forEach(function(panel) {
            if (panel == targetPanel){
                panel.classList.add("active")
            } else {
                panel.classList.remove("active")
            }
        })
    }
})
    

