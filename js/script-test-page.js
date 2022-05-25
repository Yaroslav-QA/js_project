'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');


/* box.style.backgroundColor = 'blue';
box.style.width = '400px'; */

box.style.cssText = `background-color: blue; width: 200px`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';


/* for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'green';
} */

hearts.forEach(item => {
    item.style.backgroundColor = 'yellow';
});


const div = document.createElement('div');
const text = document.createTextNode('Here is text');

div.classList.add('black');

//document.body.append(div);

wrapper.append(div);
//old
//wrapper.appendChild(div);

//wrapper.prepend(div);
//hearts[1].before(div);
//hearts[1].after(div);
//old
//wrapper.insertBefore(div, hearts[0]);

//circles[0].remove();
//old
//wrapper.removeChild(hearts[1]);

//hearts[0].replaceWith(circles[0]);
//old
//wrapper.replaceChild(circles[0], hearts[0]);


div.innerHTML = "<h1>Hello world</h1>";
//div.textContent = "Hello";

div.insertAdjacentHTML('beforebegin', "<h2>Yahoo</h2>");
/* div.insertAdjacentHTML('afterbegin', "<h2>Yahoo</h2>");
div.insertAdjacentHTML('beforeend', "<h2>Yahoo</h2>");
div.insertAdjacentHTML('afterend', "<h2>Yahoo</h2>"); */