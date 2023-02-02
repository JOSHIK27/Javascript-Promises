// Understanding the promises clearly //

/* GOAL :  PRINT NUMBERS FROM 1 TO 4 */

/* setTimeout(() => {
    console.log('printing number 1');
}, 1000);

setTimeout(() => {
    console.log('printing number 2')
}, 500);

setTimeout(() => {
    console.log('printing number 3');
}, 700);

setTimeout(() => {
    console.log('printing number 4');
}, 1200);  */

// the above code is running asynchronously from top to bottom.....//

// but we need the output to get printed in ascending order //

//hence we can do something //

/* setTimeout(() => {
    console.log('printing number 1');
    setTimeout(() => {
        console.log('printing number 2');
        setTimeout(() => {
            console.log('printing number 3');
            setTimeout(() => {
                console.log('printing number 4');
            }, 1200);
        }, 700);
    }, 500);
}, 1000); */

// by forming a callback hell we can achieve the thing that we need //



// using promises to avoid call back hell //

let a = true;

const prom_demo = (time,callback) => {
    return new Promise((resolve,reject) => {
        if(a == true){
            setTimeout(() => {
                resolve(callback())
            }, time);
        }
        else{
            reject('failure');
        }
    })
}

prom_demo(1000, () => {
    console.log('prints 1');
})
.then(() => {
    return prom_demo(2000, () => {
        console.log('prints 2')
    })
})
.then(() => {
    return prom_demo(3000, () => {
        console.log('prints 3')
    })
})
.then(() => {
    return prom_demo(4000,() =>{
        console.log('prints 4')
    })
})
