import {quickSort as rustQuickSort} from '../rust-modules/index.js'

function quickSort(array) {
    _quickSort(array, 0, array.length - 1)
}

function _quickSort(array, left, right) {
    if(left > right) return 

    let pivotIdx = middleElement(array, left, right);
    
    [array[pivotIdx], array[left]] = [array[left], array[pivotIdx]];

    const index = partition(array, left, right); // элемент с pivot, слева все что меньше, справа все что больше

    _quickSort(array, left, index - 1)
    _quickSort(array, index + 1, right)
}

function firstElement(array, left, right) {
    return left
}

function middleElement(array, left, right) {
    return Math.floor((left + right) / 2)
}

function partition(array, left, right) {
    let i = left + 1
    
    for(let j = i; j <= right; j++) {
        if(array[j] < array[left]) {
            [array[i], array[j]] = [array[j], array[i]];
            i += 1
        }
    }

    i -= 1;
    [array[left], array[i]] = [array[i], array[left]];

    return i
}


function benchmarkJs() {
    for (let i = 100_000; i <= 1000_000; i += 100_000) {
        /* NODEJS */
        const arr = Array.from({length: i}, (_) => Math.floor(Math.random() * 1000))
        const start = process.hrtime.bigint();

        quickSort(arr)
        
        const timeNs = process.hrtime.bigint() - start;
        const timeMs = Number(timeNs) / 1e6;
        
        /* RUST */
        const arrRust = Array.from({length: i}, (_) => Math.floor(Math.random() * 1000))
        const startRust = process.hrtime.bigint();
      
        let sortedRust = rustQuickSort(arrRust)

        const timeNsRust = process.hrtime.bigint() - startRust;
        const timeMsRust = Number(timeNsRust) / 1e6;

        console.log(timeMsRust.toFixed(2));

        /* RESULT */
        // console.log(
        //   `Array size: ${i} \n`,
        //   `Time node.js quick sort: ${timeMs.toFixed(2)} ms \n`,
        //   `Time rust quick sort: ${timeMsRust.toFixed(2)} ms \n`
        // );
  
        
        if(Math.random() >= 1) {
            console.log(arr)
            console.log(sortedRust)
        }
    }
}

benchmarkJs()