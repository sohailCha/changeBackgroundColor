

// Changing of the document body bacground color can be achieved through various methods. 
// Two methods are mentioned in this document.


// storing button into a constant
const button = document.querySelector('#btn');

// Adding Event Listener to listen for click on button
button.addEventListener('click', () =>{

    // // when user clicks the button, it will call random_bg_color() function.
    const randomColor = random_bg_color();

    // // Then change the background color according to the value it receives from function.
    document.body.style.backgroundColor = randomColor;
    

});

function random_bg_color() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
 }



//  ********************************************* Method 2 ***************************************************


// button.addEventListener('click',(e) =>{

    // let randNumber1 = Math.floor(Math.random() * 16777215).toString(16);

    // let bgColor = `#${randNumber1}`;

    // document.body.style.backgroundColor = bgColor;
// })



