import React, { useEffect } from 'react';

const ConsoleTime = () => {
  useEffect(() => {
    console.time('simpleTimer');
    // Simulate some operation
    for (let i = 0; i < 1000000; i++) {
      // Some processing
    }
    console.timeEnd('simpleTimer'); // Should log time taken to execute the loop
  }, []);

  return <div>Check the console for the time taken to execute the loop.</div>;
};

export default ConsoleTime;
// OP: simpleTimer: 3.27197265625 ms