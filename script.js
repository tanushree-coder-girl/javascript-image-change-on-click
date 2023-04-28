// 1st way
// function randomColor() {
//     const red = Math.round(Math.random() * 257);
//     const green = Math.round(Math.random() * 257);
//     const blue = Math.round(Math.random() * 257);
//     const opacity = (Math.random() * 10).toFixed(2);

//     return `rgb(${red}, ${green}, ${blue}, ${opacity})`
// }

// document.body.style.backgroundColor = randomColor();

// // 2nd way 
// let colors = ['red', 'green', 'blue', 'orange', 'pink'];
// document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]



const thumbnailcontainer = document.querySelector('.thumbnail_container');
const mainImg = document.querySelector('.mainImg img');


thumbnailcontainer.addEventListener('click', (e)=>{
    const selectedImg = e.target.getAttribute('src');
    mainImg.setAttribute('src', selectedImg ? selectedImg : './assets/movix-logo.png')
})