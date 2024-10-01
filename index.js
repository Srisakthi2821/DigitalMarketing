/*card transition ***********/
document.addEventListener('DOMContentLoaded', () => {
    const card1 = document.getElementById('card1');
    const card2 = document.getElementById('card2');

    card2.addEventListener('mouseover', () => {
        card1.style.transform = 'translateY(15px)';
    });

    card2.addEventListener('mouseout', () => {
        card1.style.transform = 'translateX(0)';
    });

});