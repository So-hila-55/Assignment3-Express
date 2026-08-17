
// Q 1   What is the Node.js Event Loop?

    // help Node.js handle asynchronous tasks 
    // and allow to continue running other code instead of waiting for task to finish 
    // When task finish help Node.js handle result

      //  Ex 

      // console.log("Start");
     // setTimeout(() => {
     //     console.log("Task finished");
     // }, 2000);
     // console.log("End"); 


     // output:
     // Start
     // End
     // Task finished

// Q 2    What is Libuv and What Role Does It Play in Node.js? 

      // Libuv help Node.js handle async operations
     //and manage tasks in the background
      //so Node.js can continue running other code

// Q 3   How Does Node.js Handle Asynchronous Operations Under the Hood?

     //Node.js start async operation
     // and not wait it to finish
     // Libuv handle operation in the background
     // and when it finish callback handled by Event Loop

// Q 4   What is the Difference Between the Call Stack, Event Queue, and Event Loop in Node.js?

     // Call Stack: execute current code
     //  Event Queue: wait callback from async operations
     // Event Loop: check Call Stack and move callback from Event Queue to Call Stack

// Q 5   What is the Node.js Thread Pool and How to Set the Thread Pool Size?

      // Thread Pool: group of threads used to handle some tasks in background
     // default size {4} 
      // we can change size using UV_THREADPOOL_SIZE


// Q 6  How Does Node.js Handle Blocking and Non-Blocking Code Execution?
      
      // Blocking: Node.js wait task to finish before continue

     // Non-Blocking: Node.js continue running other code without waiting task to finish