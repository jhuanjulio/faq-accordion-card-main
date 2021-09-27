// using selector inside the element

const questions = document.querySelectorAll('.question');

questions.forEach(function(e){
    const btn = e.querySelector('.question-btn');
    btn.addEventListener('click', function(){
        questions.forEach(function(item){
            if(item !== e){
                item.classList.remove('show-text')
            }
        })
        e.classList.toggle('show-text');
    })
})

// another way (traversing the DOM)

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         const action = e.currentTarget.parentElement.parentElement;
//         action.classList.toggle('show-text');
//     })
// })