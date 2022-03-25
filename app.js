"use strict"
const btn = document.querySelector('button');

// btn.addEventListener('click', function(){
//     console.log(this);
//     this.style.background = "crimson";
// })

const obj = {
    num: 8,
    sayNumber: function(){
        const say = () => {
            console.log(this);
        }
        say();
    },
};
obj.sayNumber();

btn.addEventListener('click', (e) => {
    console.log(this);
    e.target.style.background = 'crimson'
});

const calc = (a) => a * 2;
console.log(calc(2));