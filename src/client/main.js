require('./_main.scss');
import $ from "jquery";


console.log("qwel");

export class main {
    constructor() {
        console.log('hello')
        $('#Home-nav-link').click((e) => {
            e.preventDefault();
            alert('Jquery works!')
        });
    }
}

const mainVar = new main;

// export main;