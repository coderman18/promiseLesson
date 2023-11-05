const imgURLArr = [
    'image/viet-1.jpg',
    'image/viet-2.jpg',
    'image/viet-3.jpg',
    'image/viet-4.jpg',
    'image/viet-5.jpg',
    'image/viet-6.jpg',
    'image/viet-7.jpg',
    'image/viet-8.jpg',
    'image/viet-9.jpg',
    'image/viet-10.jpg',
    'image/viet-11.jpg',
    'image/viet-12.jpg',
]

const promiseArr = []

for (const url of imgURLArr) {
    const promise = new Promise(function(resolve, reject) {
        const img = document.createElement('img')
        img.classList.add("picture", "hidden")
        img.src = url

        img.addEventListener("load", function() {
            console.log('загрузка изображений...');
            resolve()
        })

        document.body.append(img)
        
    })
    
    promiseArr.push(promise)
}

Promise.all(promiseArr).then(
    function(resolve) {
        document.querySelector(".spinner").classList.remove("loading")
        document.querySelectorAll('.picture').forEach(img => {
            img.classList.remove("hidden")
            img.classList.add("show")
        })
    },
    function(reject) {
        console.log('ошибка загрузки, нам очень жаль...');
    }
)


