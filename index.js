// tracks current theme state
let darkMode = false;

// creates a container div to hold all content
let div = document.createElement('div');
div.classList.add('container');
document.body.appendChild(div);

// selects the newly created container
let container = document.querySelector('.container');

// array that JavaScript will inject into HTML
let copy = ["an ancient pond", "a frog jumps in", "the splash of water"];

// creates and appends a paragraph for each array item
copy.forEach(paragraph => {
    let myParagraph = document.createElement('p');
    myParagraph.textContent = paragraph;
    container.appendChild(myParagraph);
});

// creates a button to toggle to dark mode
let button = document.createElement('button');
button.textContent = 'Enable dark mode';

// defines button styles as an array of style rules
let buttonStyleObject = [
    {property: 'padding', value: '15px'},
    {property: 'border', value: 'none'},
    {property: 'background-color', value: 'black'},
    {property: 'color', value: 'white'}
];

// applies initial button styles
for (let buttonStyle of buttonStyleObject){
    button.style[buttonStyle.property] = buttonStyle.value;
};

container.appendChild(button);

// defines dark mode styles
let darkmodeStyleObject = {
    body: [
        {property: 'background-color', value: 'black'}
    ],
    container: [
        {property: 'background-color', value: '#777'},
        {property: 'color', value: 'white'}
    ],
    button: [
        {property: 'background-color', value: 'white'},
        {property: 'color', value: 'black'}
    ]
};

// applies dark mode styles
let applyDarkMode = (a, b) => {
    for(let objectItem of b){
        a.style[objectItem.property] = objectItem.value;   
    }
};

// resets styles safely to default by clearing only the properties I explicitly changed with dark mode
let resetStyles = (a, b) => {
    for(let objectItem of b){
        a.style[objectItem.property] = '';   
    }
};

// light/dark mode toggle
button.addEventListener('click', function(){
    if(darkMode === true){
        // switch to light mode
        darkMode = false;
        resetStyles(document.body, darkmodeStyleObject.body);
        resetStyles(container, darkmodeStyleObject.container);
        for (let buttonStyle of buttonStyleObject){
            button.style[buttonStyle.property] = buttonStyle.value;
        };
        button.textContent = 'Enable dark mode';
        } else{
            // switch to dark mode
        darkMode = true;
        applyDarkMode(document.body, darkmodeStyleObject.body);
        applyDarkMode(container, darkmodeStyleObject.container);
        applyDarkMode(button, darkmodeStyleObject.button);
        button.textContent = 'Enable light mode';
    }
});