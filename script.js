console.log('Hello :3');
setTimeout(
    ()=>{console.log('ferdig å laste');
    },
    2000
);
const parent = document.querySelector('main');

function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
};

async function timeout () {
    console.log('abcdefgijklmnopqrstuvwxyz');
    await delay(5000);
}

//timeout();

const myfacts = ['cat','quest']

for (const i of myfacts) {
    console.log(i);
};



async function getapidata () {
    const response = await fetch('https://catfact.ninja/facts');
    console.log(response);
    const data = await response.json();
    console.log('qwerty-----------------'+data.data[3].fact);
    for (const i of data.data) {
        console.log(i.fact);
        const p = document.createElement('p');
        p.textContent = i.fact;
        parent.appendChild(p);
    };
};
getapidata();

