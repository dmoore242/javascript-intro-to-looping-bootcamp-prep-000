function forLoop(array) {
  for (let i=0; i < 25; i++) {
    if(i===1) {
      console.log(array.push(`"I am ${i} strange loop"`));
    } else {
      console.log(array.push(`"I am ${i} strange loops."`));
    }
  }
}

