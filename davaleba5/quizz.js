
document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.answers');

    
    let score = 0;
    let answeredQuestions = 0;
    const totalQuestions = questions.length;

    
    questions.forEach(question => {
        
        const buttons = question.querySelectorAll('button');

        
        buttons.forEach(button => {
            button.addEventListener('click', () => {
               
                if (question.dataset.answered) return;

                
                if (button.classList.contains('correct')) {
                    button.style.backgroundColor = 'green';
                    score += 1;
                } else {
                    button.style.backgroundColor = 'red';
                }

                question.dataset.answered = 'true';
                answeredQuestions += 1;

                
                buttons.forEach(btn => btn.disabled = true);

                if (answeredQuestions === totalQuestions) {
                    alert(`Your score was ${score} out of ${totalQuestions}`);
                }
              
            });
        });
    });
});

