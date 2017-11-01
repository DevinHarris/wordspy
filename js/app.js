const words = document.querySelector('#words'),
    countResult = document.querySelector('.count-result'),
    form = document.querySelector('.form');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   console.log(words.value.trim());
// });

words.addEventListener('input', (e) => {
    let wordsInput = e.target.value,
    wordsArr = wordsInput.split(' '),
    resultArr = [];

    wordsArr.map((word) => {
        if (word.trim()) {
        resultArr.push(word);
        }
    });  
    countResult.textContent = `There's ${resultArr.length} ${ resultArr.length <= 1 ? 'word' : 'words' } here.`
});