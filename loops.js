function forLoop(array) {
  for (let i=0; i < 25; i++) {
    if(i===1) {
      array.push(`"I am ${i} strange loop"`)
    } else if (i <25) {
      array.push(`"I am ${i} strange loops."`)
    } else {
      return array
    }
    
  }
}

function whileLoop(number) {
  let countdown = number
  while (countdown > 0) {
    console.log(--countdown);
    if (countdown===0) {
      return "done"
    }
  }
}

function doWhileLoop(array) {
  
}


