"use strict";
// const x = 23;
// if(x === 23) console.log(23);
// if(x === 23) console.log(23);
// const temperature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// const calcTempAmplitudeNew = function (t1, t2) {
//   // const array1 = ['a', 'b', 'c'];
//   // const array2 = ['d', 'e', 'f'];
//   // const array3 = array1.contact(array2);

// const temps = t1.concat(t2);
// console.log(temps);


//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     // if (temps[i] > max) max = temps[i];
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// calcTempAmplitude([3, 7, -1, 45, -7, 14]);
// const amplitudeNew = calcTem 

  // const measureKelvin = function(){
  //   const measurement = {
  //     type: 'temp',
  //     unit: 'celsius',
  //     value: Number(prompt('Degrees celsius:')),
  //   };
  //   console.log(measurement);
  //   // console.table(measurement);
  //   // console.log(measurement.value);
  //   // console.warn(measurement.value);
  //   // console.error(measurement.value);
  //   const kelvin = measurement.value + 273;
  //   return kelvin;
  // };
  // console.log(measureKelvin)
  
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`...${data1[0]}°c... ${data1[1]}°c...${data1[2]}°c...`);
const printForecast = function(arr){
  let str = '';
  for(let i = 0;i < arr.length; i++){
    str = str + `${arr[i]}°c in ${i + 1} dayscode cd ...`; 
  }
  console.log(str);
};
printForecast(data1);


























