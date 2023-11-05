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
    const promise = new Promise(function() {
        const img = document.createElement('img')
        img.classList.add("picture")
        img.src = url
        document.body.append(img)
    })
    
    promiseArr.push(promise)
}

console.log(promiseArr);