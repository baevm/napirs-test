import { bubbleSort as rustBubbleSort } from '../rust-modules/index.js'


function bubbleSort(arr) {
  for(let i = 0; i < arr.length; i++) {
      for(let j = i + 1; j < arr.length; j++) {
          if(arr[i] > arr[j]) {
              const temp = arr[i]
              arr[i] = arr[j]
              arr[j] = temp
          }
      }
  }
}

function benchmarkJs() {
  for (let i = 100_00; i <= 120_000; i += 100_00) {
      /* NODEJS */
      const arr = Array.from({length: i}, (_) => Math.floor(Math.random() * 1000))
      const start = process.hrtime.bigint();

    //   bubbleSort(arr)
      
      const timeNs = process.hrtime.bigint() - start;
      const timeMs = Number(timeNs) / 1e6;
      
      
      /* RUST */
      const arr2 = Array.from({length: i}, (_) => Math.floor(Math.random() * 1000))
      const startRust = process.hrtime.bigint();
      
      let sorted = rustBubbleSort(arr2)

      const timeNsRust = process.hrtime.bigint() - startRust;
      const timeMsRust = Number(timeNsRust) / 1e6;
      console.log(timeMsRust.toFixed(2));

      /* RESULT */
      // console.log(
      //   `Array size: ${i} \n`,
      //   `Time node.js bubble sort: ${timeMs.toFixed(2)} ms \n`,
      //   `Time rust bubble sort: ${timeMsRust.toFixed(2)} ms \n`);

      
      if(Math.random() >= 1) {
          console.log(arr)
          console.log(sorted)
      }
  }
}

benchmarkJs()