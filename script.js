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



let prom = (time, text) => {
    return new Promise((resolve, reject) => {
      if (1 == 1) {
        setTimeout(() => {
          resolve(`prints ${text}`);
        }, time);
      } else {
        reject();
      }
    });
};


  
prom(5000, "1").then((x) => {
    console.log(x);
    return prom(1000, "2");
}).then((x) => {
    console.log(x);
    return prom(1000, "3");
})
.then((x) => {
    console.log(x);
});

// using asycn await instead of traditional promises using then method //

async function learning() {
    const temp = await prom(2000, "1");
    console.log(temp);
    const temp2 = await prom(1000, "2");
    console.log(temp2);
    const temp3 = await prom(1500, "3");
    console.log(temp3);
  }
  
  learning();
  