console.log("Start");

/* 
setTimeout(() => {
                               #time --> Its is in milliseconds
}, timeout);                    1sec=1000ms
 */

setInterval(() => {
    console.log("Pizza is ready!")
}, 2000);

console.log("End");

/* 
Why did End come before Pizza is ready
-> This is your first introduction to ansynchronous execution. */