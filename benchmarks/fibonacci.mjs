import { fibonacci as rustFibonacci } from '../rust-modules/index.js'


function fibonacci(n) {
    if(n <= 1) return n;
    return fibonacci(n - 2) + fibonacci(n - 1)
}


function benchmarkJs() {
    for (let i = 10; i < 50; i += 5) {
        /* NODEJS */
        const start = process.hrtime.bigint();
  
        const jsRes = fibonacci(i)
        
        const timeNs = process.hrtime.bigint() - start;
        const timeMs = Number(timeNs) / 1e6;
  
        /* RUST */
        const startRust = process.hrtime.bigint();
      
        let rustRes = rustFibonacci(i)
   
        const timeNsRust = process.hrtime.bigint() - startRust;
        const timeMsRust = Number(timeNsRust) / 1e6;
  
        /* RESULT */
        console.log(
          `n: ${i} nodejsRes:${jsRes} rustRes:${rustRes} \n`,
          `Time node.js fibonacci: ${timeMs.toFixed(2)} ms \n`,
          `Time rust fibonacci: ${timeMsRust.toFixed(2)} ms \n`);
  
        
        if(Math.random() >= 1) {
            console.log(jsRes)
            console.log(rustRes)
        }
    }
  }

benchmarkJs()