
const card = {
    title: document.getElementsByClassName("card-title"),
    body: document.getElementsByClassName("card-body"),
    url: document.getElementsByClassName("button")
};

let cards = [];
const stickman = {
    title: 'Stickman',
    body: "This is the first project, I've ever made. It is a stickman that can move from side to side.",
    url: "Not Working"
};

const bouncing_ball = {
    title: 'Bouncing Ball',
    body: "This is a project, that uses 'if' statements to check if the ball touches the border of the box.",
    url: "Not Working"
};

const changing_objects = {
    title: 'Changing Objects',
    body: "This is a project, that uses 'if' statements to check where the cursor currently is.",
    url: "Not Working"
};

cards.push(stickman, bouncing_ball, changing_objects);

var button = document.getElementsByClassName("scroll-plus");
let active = 0;

function change() {
    console.log(card.title[0].innerHTML)
    card.title[0].innerHTML = cards[2].title;
    card.title[1].innerHTML = cards[1].title;
    card.title[2].innerHTML = cards[0].title;
    card.body[0].innerHTML = cards[2].body;
    card.body[1].innerHTML = cards[1].body;
    card.body[2].innerHTML = cards[0].body;
    card.url[0].innerHTML = cards[2].url;
    card.url[1].innerHTML = cards[1].url;
    card.url[2].innerHTML = cards[0].url;
}