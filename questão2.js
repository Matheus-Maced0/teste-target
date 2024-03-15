function fibonacci(num) {
    let a = 0;
    let b = 1;
  
    while (b <= num) {
      if (b === num) {
        return("esta na sequencia");
      }
      const temp = a + b;
      a = b;
      b = temp;
    }
  
    return("não esta na sequencia");
  }

  console.log(fibonacci(5));