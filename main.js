let heading = document.getElementById('heading');
console.dir(heading);

let bodyText = document.getElementsByClassName('bodyText');
console.dir(bodyText);

let textFields = document.getElementsByTagName('textarea');
console.dir(textFields);

let myText = textFields[0].defaultValue;
textFields[0].defaultValue = myText + " about it";

let firstParagraph = document.querySelector('p');
console.dir(firstParagraph);


let allParagraphs = document.querySelectorAll('p');
console.dir(allParagraphs);

let exploreButton = document.querySelector('#exploreBtn');
exploreButton.onClick = () => {
    console.log("Explore Button is tapped");
}