const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');

let counter1 = document.querySelector('.counter');
let counter2 = document.querySelector('.counter2');
let countText = document.querySelector('.counterText');
let countText2 = document.querySelector('.counterText2');

// первая кнопка
// создаем обещание
let promise = new Promise(function(resolve, reject) {
    console.log("создаем обещание");

    let count = 20

    btn1.addEventListener('click', () => {
        console.log('pressed');
        resolve(count)
        clearInterval(timer)
    })

    let timer = setInterval(function() {
        console.log('timer worked');
        count--;
        counter1.textContent = count;

        if(count == 0) {
            reject()
            clearInterval(timer)
        }

    }, 500)

   
})
// выполняем обещание
promise.then(
    function(count) {
    btn1.style.backgroundColor = 'gray';  
    console.log("обещание выполнено на " + count + " секунде");
    countText.textContent = `Обещание выполнено на ${count} секунде`;
},
    function() {
        btn1.style.backgroundColor = 'red';  
        console.log("обещание не выполнено!");
        countText.textContent = `Обещание  не выполнено!`
    }
)

// вторая кнопка
// создаем обещание
let promise2 = new Promise(function(resolve, reject) {
    console.log("создаем обещание");

    let count = 20

    btn2.addEventListener('click', () => {
        console.log('pressed');
        resolve(count)
        clearInterval(timer)
    })

    let timer = setInterval(function() {
        console.log('timer worked');
        count--;
        counter2.textContent = count;

        if(count == 0) {
            reject()
            clearInterval(timer)
        }

    }, 500)

   
})
// выполняем обещание
promise2.then(
    function(count) {
    btn2.style.backgroundColor = 'gray';  
    console.log("обещание выполнено на " + count + " секунде");
    countText2.textContent = `Обещание выполнено на ${count} секунде`;
},
    function() {
        btn2.style.backgroundColor = 'red';  
        console.log("обещание не выполнено!");
        countText2.textContent = `Обещание  не выполнено!`
    }
)

// Promise All

Promise.all([promise, promise2]).then(
    function() {
        console.log('Все обещания выполнены');
        countText2.textContent = `Все обещания выполнены!`
    },
    function() {
        console.log('Одно из обещаний не выполнено');
    },
)