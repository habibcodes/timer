// alarm clock / timer app //

// if empty, exit
// if negative or NaN, ignore/skip

// let time = 0; // running time

// take command line args and save to input

// set args as time from which to count down

// set up way to decrease timer from time until 0
// beep
const args = process.argv.slice(2);

setTimeout(() => {
  const argsToNums = args.map((x) => parseInt(x, 10));
  // console.log(argsToNums);

  const beep = () => {
    process.stdout.write('beep');
  };

  const setTimer = (delayInterval) => {
    setTimeout(() => {
      beep();
    }, 1000 * delayInterval);
  };
  
  if (argsToNums === isNaN || argsToNums < 0) {
    console.log('invalide input');
    return;
  } else {
    for (let i = 0; i < argsToNums.length; i++) {
      setTimer(argsToNums[i]);
    }
  }
});