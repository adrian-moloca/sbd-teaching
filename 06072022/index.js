// Declare the variables
const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
const yellow = document.getElementById('yellow');

// Create the function that will show/hide an element
// el = parameter for selected element from UI
// items = parameter for selected elements that we want to take control on UI - show/hide
function showHide(el, items) {
    
    // declare the action - HIDE
    el.addEventListener('mouseover', function () {
        for (let i = 0; i < items.length; i++) {
            items[i].style.display = 'none';
        }
    })

    return true;
}

showHide(green, [red,blue,yellow])