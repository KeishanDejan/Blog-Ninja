const _ = require('lodash');

// random
// let num = _.random(0, 20);
// console.log(num);

let greet = _.once(() => {
    console.log("hello ninjas");
});

greet;
