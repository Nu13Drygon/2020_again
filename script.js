let css = document.querySelector('h2')
// grabs color input 1
let color1 = document.getElementById('color1')
// grabs color input 2
let color2 = document.getElementById('color2')
// grabs body element
let body = document.getElementById('gradient')

// function to change color of body 
// and gives it the value of the color inputs
// changes text content of h2 to match color input
function colorChange() {
    body.style.background = 'linear-gradient(to right, ' 
        + color1.value + ', ' + color2.value + ')'
    css.textContent = body.style.background 
}

//  adds event listeners to color inputs
// when color is changed it runs colorChange function
color1.addEventListener('input', colorChange)

color2.addEventListener('input', colorChange)

