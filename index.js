console.clear();

const bookMarkButtons = document.querySelectorAll('.bookmark');
const answerButtons = document.querySelectorAll('.card__button-answer');

const cardAnswer1 = document.querySelector('[data-js="answer1"]');


bookMarkButtons[0].addEventListener("click", () => {
    bookMarkButtons[0].classList.toggle('bookmark--active');
});

answerButtons[0].addEventListener("click", () =>{

    cardAnswer1.classList.contains("card__answer") === true
    ? answerButtons[0].textContent = "Hide Answer"
    : answerButtons[0].textContent = "Show Answer";

    cardAnswer1.classList.toggle("card__answer");
});

