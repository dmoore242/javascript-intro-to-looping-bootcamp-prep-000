function forLoop(array) {
  for (let i=0; i < 25; i++) {
    if(i===1) {
      array.push(`"I am ${i} strange loop"`)
    } else {
      console.log(array.push(`"I am ${i} strange loops."`))
    }
  }
}

function whileLoop(number) {
  let countdown = n
  while (countdown > 0) {
    console.log(--countdown);
    if (countdown===0) {
      return "done"
    }
  }
}
