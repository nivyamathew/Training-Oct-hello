'use strict';
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

/*const renderCountry = function (data, className = '') {

    const html = `
    <article class="country ${className}">
            <img class="country__img" src="${data.flags.png}">
            <div class="country__data">
                <h3 class="country__name">${data.name}<h3>
                    <h4 class="country__region">${data.region}</h4>
                    <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
                    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
                    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
            </div>
           </article>`;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
};

const rendererror = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    countriesContainer.style.opacity = 1;
};*/

/*const getCountryData = function(country) {
const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.com/v2/name/${country}`);
request.send();
console.log(request.responseText);

request.addEventListener('load', function(){
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    // console.log(this.responseText);
    const html = `
    <article class="country">
            <img class="country__img" src="${data.flags.png}">
            <div class="country__data">
                <h3 class="country__name">${data.name}<h3>
                    <h4 class="country__region">${data.region}</h4>
                    <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)}</p>
                    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
                    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
            </div>
           </article>`;
           countriesContainer.insertAdjacentHTML('beforeend',html);
           countriesContainer.style.opacity = 1;
});
};

getCountryData('portugal');
getCountryData('new zealand');
getCountryData('india');*/

// CALLBACK HELL
const renderCountry = function (data, className = '') {

    const html = `
    <article class="country ${className}">
            <img class="country__img" src="${data.flags.png}">
            <div class="country__data">
                <h3 class="country__name">${data.name}<h3>
                    <h4 class="country__region">${data.region}</h4>
                    <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
                    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
                    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
            </div>
           </article>`;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
};

/*const getCountryAndNeighbour = function (country) {
    // AJAX call country
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v2/name/${country}`);
    request.send();
    console.log(request.responseText);

    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText);
        console.log(data);
        // Render country  
        renderCountry(data);
        // Get neighbour country(2)
        const [neighbour] = data.borders;
        if (!neighbour) return;

        // AJAX call country 2
        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`)
        console.log(request2.send());
        
        request2.addEventListener('load', function () {
            // console.log(this.responseText);
            const data2 = JSON.parse(this.responseText);
            console.log(data2);

            renderCountry(data2, 'neighbour');
        })
    });

};
// getCountryAndNeighbour('portugal');
getCountryAndNeighbour('usa');

setTimeout(() => {
    console.log('1 second passed');
    setTimeout(() => {
        console.log('2 second passed');
        setTimeout(() => {
            console.log('3 second passed');
            setTimeout(() => {
                console.log('4 second passed');
                setTimeout(() => {
                    console.log('5 second passed');
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);*/

///**************************************** */
/*// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v2/name/${country}`);
// request.send();

// const request = fetch('https://restcountries.eu/rest/v2/name/portugal');
// console.log(request);
const getCountryData = function(country){
    fetch(`https://restcountries.com/v2/name/${country}`).then(function (response){
        console.log(response);
        return response.json();
    }).then(function(data){
        console.log(data);
        renderCountry(data[0]);
    });
};*/
const getJSON = function (url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok) throw new Error(`${errorMsg} (${response.status})`)
        return response.json()
    });
}

    /*const getCountryData = function (country) {
        // Country 1
        getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
            // fetch(`https://restcountries.com/v2/name/${country}`)
            // .then(response => {
            //     console.log(response);
            //     if(!response.ok)
            //     throw new Error(`Country not found (${response.status})`)
            //     return response.json()
            // })
            .then(data => {
                renderCountry(data[0]);
                const neighbour = data[0].borders[0];
                if (!neighbour) throw new Error('No neighbour found!');
    
                // COUNTRY 2
                return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`, 'Country not found');
    
                // return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
                // return 23;
            })
            // .then(data => alert(23));
            // .then(response => response.json())
            .then(data => renderCountry(data, 'neighbour'))
            .catch(err => {
                console.error(`${err}`);
                renderError(`Something went wrong  ${err.message}. Try again!`);
            })
            .finally(() => {
                countriesContainer.style.opacity = 1;
            })
    };
    btn.addEventListener('click', function () {
        getCountryData('Australia');
    });*/

    /*// CODING CHALLANGE 1
    let country;
    const whereAmI = function (lat, lng) {
        fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
            .then(res => {
                if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
                return res.json()
            })
            .then(data => {
                console.log(data);
                console.log(`You are in ${data.city}, ${data.country}`);
                return fetch(`https://restcountries.com/v2/name/${country}`)
            })
            .then(res => {
                console.log('Test start');
                setTimeout(() => console.log('0 sec timer'), 0);
                Promise.resolve('Resolved promise 1').then(res => console.log(res));
                Promise.resolve('Resolved promise 2').then(res => {
                    for (let i = 0; i < 1000000000; i++) { }
                    console.log(res);
                    if (!res.ok)
                        throw new Error(`Country not found (${res.status})`);
                    return res.json();
                })
                    .then(data => renderCountry(data[0]))
                    .catch(err => console.error(`${err.message}`))
            });
        }
        whereAmI(52.508, 13.381);
        whereAmI(19.037, 72.873);
        whereAmI(-33.933, 18.474);*/
    /*console.log('Test start');
    setTimeout(() => console.log('0 sec timer'), 0);
    Promise.resolve('Resolved promise 1').then(res => console.log(res));
    Promise.resolve('Resolved promise 2').then(res => {
        for (let i = 0; i < 1000000000; i++){}
        console.log(res);
    });
    console.log('Test end');*/

    /*const lotteryPromise = new Promise(function (resolve, reject) {
        console.log('Loter draw is happening')
        setTimeout(function () {
            if (Math.random() >= 0.5) {
                resolve('YOU WIN ');
            } else {
                reject(new Error('You lost your money'));
            }
        }, 2000)
    });
    lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));
    
    // /promisifying setTimeout
    const wait = function(seconds){
        return new Promise(function(resolve){
            setTimeout(resolve, seconds * 1000);
        });
    };
    wait(2)
    .then (()=> {
        console.log('1 second passed');
        return wait(1);
    })
    .then (()=> {
        console.log('2 second passed');
        return wait(1);
    })
    .then (()=> {
        console.log('3 second passed');
        return wait(1);
    })
    .then(() => console.log('4 second passed'));
    
    Promise.resolve('abc').then(x => console.log(x));
    Promise.resolve(new Error('Problem!')).catch(x => console.error(x));*/

    // navigator.geolocation.getCurrentPosition(
    //     position => console.log(position),
    //     err => console.log(err)
    // );
    // console.log('Getting position');
    /*const getPosition = function () {
        return new Promise(function (resolve, reject) {
            // navigator.geolocation.getCurrentPosition(
            //     position => resolve(position),
            //     err => reject(err)
            // );
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    };
    // getPosition().then(pos => console.log(pos));
    
    const whereAmI = function () {
        getPosition().then(pos => {
            const { latitude : lat, longitude: lng } = pos.coords;
    
            return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
        })
            .then(res => {
                if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
                return res.json()
            })
            .then(data => {
                console.log(data);
                console.log(`You are in ${data.city}, ${data.country}`);
                return fetch(`https://restcountries.com/v2/name/${data.country}`)
            })
            .then(res => {
                if (!res.ok)
                    throw new Error(`Country not found (${res.status})`);
                return res.json();
            })
            .then(data => renderCountry(data[0]))
            .catch(err => console.error(`${err.message}`))
    };
    btn.addEventListener('click', whereAmI);*/

    /*// CODE CHALLANGE
    const wait = function (seconds){
        return new Promise(function (resolve){
            setTimeout(resolve, seconds * 1000);
        });
    };
    const imgContainer = document.querySelector('.images');
    const createImage = function(imgPath){
        return new Promise (function(resolve, reject){
            const img = document.createElement('img');
            img.src = imgPath;
            img.addEventListener('load', function(){
                imgContainer.append(img);
                resolve(img);
            });
            img.addEventListener('error', function (){
                reject(new Error('Image not found'));
            });
        });
    };
    let currentImg;
    createImage('img/img-1.jpg').then(img => {
        currentImg = img;
        console.log('Image 1 loaded');
        return wait(2)
    })
    .then(() => {
        currentImg.style.display = 'none';
        return createImage('img/img-2.jpg');
    })
    .then(img => {
        currentImg = img;
        console.log('Image 2 loaded');
        return wait(2);
    })
    .then(() => {
        currentImg.style.display = 'none';
    })
    .catch(err => console.error(err));*/

    /*const getPosition = function () {
        return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    };
    
    const whereAmI = async function (country) {
        try{
        // Geolocation
        const pos = await getPosition();
        const { latitude: lat, longitude: lng } = pos.coords;
        // REVERSE GEOCODING
        const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
        if(!resGeo.ok) throw new Error('problem getting loaction data');
        const dataGeo = await resGeo.json();
        // console.log(dataGeo);
    
        // fetch(`https://restcountries.com/v2/name/${country}`).then(res => console.log(res))
        const res = await fetch(`https://restcountries.com/v2/name/${dataGeo.country}`);
        if(!resGeo.ok) throw new Error ('Problem getting country');
        const data = await res.json();
        // console.log(data);
        renderCountry(data[0]);
        return `You are in ${dataGeo.city}, ${dataGeo.country}`;
        }
        catch(err){
            console.error(`${err} `);
            renderError(`${err.messsage}`);
            // Reject promise returned from async function
            throw err;
        }
    };
        // whereAmI();
        // console.log('FIRST')
    
    
        //    console.log(res);
    // whereAmI();
    // console.log('FIRST');try{
    //     let y = 1;
    //     const x = 2;
    //     x = 3;
    // }
    // catch(err) {
    //     alert(err.message);
    // }
    
    console.log('1:Will get location');
    // const city = whereAmI();
    // console.log(city);
    // whereAmI()
    // .then(city => console.log(`2:${city}`))
    // .catch(err => console.error(`2: ${err.message}`))
    // .finally(() => console.log('3: Finished getting location'));
    
    (async function(){
        try {
            const city = await whereAmI();
            console.log(`2:${city}`)
        } catch(err){
            console.error(`2: ${err.message}`)
        }
        console.log('3: Finished getting location');
    })();*/

    /*const get3Countries = async function (c1, c2, c3) {
        try {
        //     const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
        //     const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
        //     const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);
        const data = await Promise.all([
            getJSON(
                `https://restcountries.com/v2/name/${c1}`
            ), getJSON(
                `https://restcountries.com/v2/name/${c1}`
            ), getJSON(
                `https://restcountries.com/v2/name/${c1}`),
        ]);
        console.log(data.map(d => d[0].capital));
        // console.log([data1.capital, data2.capital, data3.capital]);
    } catch (err) {
        console.error(err);
    }
    };
    get3Countries('portugal', 'canada', 'tanzania');*/

   /* // promise.race
    (async function () {
        const res = await Promise.race([
            getJSON(`https://restcountries.com/v2/name/italy`),
            getJSON(`https://restcountries.com/v2/name/egypt`),
            getJSON(`https://restcountries.com/v2/name/mexico`),
        ]);
        console.log(res[0]);
    });
const timeout = function (sec) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(new error('Request took too long!'));
        }, sec)
    });
};

Promise.race([
    getJSON('https://restcountries.com/v2/name/italy'),
    timeout(1),
]).then(res => console.log(res[1]))
    .catch(err => console.error(err));

// Promise.allSettled
Promise.allSettled([
    Promise.resolve('Success'),
    Promise.reject('ERROR'),
    Promise.resolve(' AnotherSuccess')
])
    .then(res => console.log(res[0]));

    Promise.all([
        Promise.resolve('Success'),
        Promise.reject('ERROR'),
        Promise.resolve(' AnotherSuccess')
    ])
        .then(res => console.log(res))
        .catch(res => console.error(err));

        // Promise.any
        Promise.any([
            Promise.resolve('Success'),
            Promise.reject('ERROR'),
            Promise.resolve(' AnotherSuccess')
        ])
            .then(res => console.log(res))
            .catch(res => console.error(err));*/
// CODING CHALLANGE 3
const wait = function(seconds){
    return new Promise(function(resolve){
        setTimeout(resolve, seconds * 1000);
    });
};
const imgContainer = document.querySelector('.images');
const createImage = function(imgPath){
    return new Promise(function(resolve, reject){
        const img = document.createElement('img');
        img.src = imgPath;

        img.addEventListener('load', function(){
            imgContainer.append(img);
            resolve(img)
        });
        img.addEventListener('error', function (){
            reject(new Error('Img not found'));
        });
    });
};
// let currentImg;
//     createImage('img/img-1.jpg').then(img => {
//         currentImg = img;
//         console.log('Image 1 loaded');
//         return wait(2)
//     })
//     .then(() => {
//         currentImg.style.display = 'none';
//         return createImage('img/img-2.jpg');
//     })
//     .then(img => {
//         currentImg = img;
//         console.log('Image 2 loaded');
//         return wait(2);
//     })
//     .then(() => {
//         currentImg.style.display = 'none';
//     })
//     .catch(err => console.error(err));

    // part 1
    

    const loadNPause = async function(){
        try{
            // load image 1
            
          let img =  await createImage('img/img-1.jpg')
          console.log('Image 1 loaded');
          await wait(2);
          img.style.display = 'none';
        //   load image 2
         img =  await createImage('img/img-2.jpg')
        console.log('Image 2 loaded');
        await wait(2);
        img.style.display = 'none';
        } catch(err){
            console.error(err);
        }
    }
    loadNPause();
    // PART 2
    const loadAll = async function(imgArr){
        try{
            const imgs = imgArr.map(async img =>  await createImage(img))
            console.log(imgs);

            const imgsEl = await Promise.all(imgs);
            console.log(imgsEl)
        }catch (err){
            console.error(err);
        }
    };
    loadAll(['img/img-1.jpg', 'img/img-2.jpg','img/img-3.jpg']);
