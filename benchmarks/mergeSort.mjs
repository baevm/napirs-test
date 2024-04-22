import {mergeSort as rustMergeSort} from '../rust-modules/index.js'

function merge(leftArr, rightArr) {
    let res = []

    let i = 0
    let j = 0

    while(i < leftArr.length && j < rightArr.length) {
        if(leftArr[i] < rightArr[j]) {
            res.push(leftArr[i])
            i += 1
        } else {
            res.push(rightArr[j])
            j += 1
        }
    }

    return res.concat(leftArr.slice(i)).concat(rightArr.slice(j))
}

function mergeSort(arr) {
    if(arr.length < 2) return arr

    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)

    return merge(mergeSort(left), mergeSort(right))
}
  
function benchmarkJs() {
  for (let i = 100_000; i <= 1000_000; i += 100_000) {
      /* NODEJS */
      const arr = Array.from({length: i}, (_) => Math.floor(Math.random() * 1000))
      const start = process.hrtime.bigint();

    //   const sortedNode = mergeSort(arr)

      const timeNs = process.hrtime.bigint() - start;
      const timeMs = Number(timeNs) / 1e6;
   
      
      /* RUST */
      const arr2 = Array.from({length: i}, (_) => Math.floor(Math.random() * 1000))
      const startRust = process.hrtime.bigint();
      
      let sorted = rustMergeSort(arr2)

      const timeNsRust = process.hrtime.bigint() - startRust;
      const timeMsRust = Number(timeNsRust) / 1e6;
      console.log(timeMsRust.toFixed(2));

      /* RESULT */
      // console.log(
      //   `Array size: ${i} \n`,
      //   `Time node.js merge sort: ${timeMs.toFixed(2)} ms \n`,
      //   `Time rust merge sort: ${timeMsRust.toFixed(2)} ms \n`);

      
      if(Math.random() >= 1) {
          console.log(arr)
          console.log(sorted)
      }
  }
}
  
benchmarkJs()
