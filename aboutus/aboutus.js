document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".container_fac_mem_exp_tstyle");
    const button = document.querySelector(".goBottonButton");
    
    container.addEventListener("scroll", function() {
        if (container.scrollTop > 0) {
            button.classList.add("hiddenArrow");
        } else {
            button.classList.remove("hiddenArrow");
        }
    });
});