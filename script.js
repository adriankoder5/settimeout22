console.log('Hello :3');
setTimeout(
    ()=>{console.log('ferdig å laste')
    },
    10000
);

function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
};

async function timeout () {
    console.log('abcdefgijklmnopqrstuvwxyz')
    await delay(5000);
}

timeout();