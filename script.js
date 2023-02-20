let showSentence = document.querySelector('.showSentence');
let typingbox = document.querySelector('#typingbox');
let startStop = document.querySelector('.startStop');
let typingspeedData = document.querySelector('.typingspeedData');
let startTime, endTime, totalTime;

const sentences = [
    'type this soo fast that you broke your own record1',
    'type this soo fast that you broke your own record2',
    'type this soo fast that you broke your own record3'
]

function startTyping() {
    startStop.innerText = 'Done';
    let randomNumber = Math.floor(Math.random() * sentences.length);
    showSentence.style.display = 'block';
    showSentence.innerText = sentences[randomNumber];
    typingspeedData.style.display = 'none';

    let date = new Date();
    startTime = date.getTime();
}

function endTyping() {
    startStop.innerText = 'Start';
    showSentence.style.display = 'none'
    showSentence.innerText = '';
    typingbox.value = ''

    let date = new Date();
    endTime = date.getTime();
    totalTime = (endTime - startTime) / 1000;
    // console.log(totalTime)

    calculateTypingSpeed(totalTime);
}

function calculateTypingSpeed(total_time) {
    let totalWords = typingbox.value.trim();
    let actualWords = totalWords === '' ? 0 : totalWords.split(" ").length;

    if (actualWords !== 0) {
        let typingSpeed = (actualWords / total_time) * 60;
        typingSpeed = Math.round(typingSpeed);
        typingspeedData.style.display = 'block';
        typingspeedData.innerText = `Your typing speed is ${typingSpeed} words per minutes & you wrote ${actualWords} words & time taken ${total_time} sec`
    } else {
        typingspeedData.style.display = 'block';
        typingspeedData.innerText = `Your typing speed is 0 words per minutes & time taken ${total_time} sec`
    }
}

startStop.addEventListener('click', () => {
    // let buttonText = startStop.innerText;
    if (startStop.innerText == 'Start') {
        typingbox.removeAttribute('disabled');
        startTyping()
    } else {
        startStop.innerText = 'Start';
        typingbox.setAttribute('disabled', 'true');
        endTyping()
    }
})