function forLoop(array) {
  for (let i=0; i < 25; i++) {
    if(i) {
      console.log(`"I am" + ${i} + "strange loop."`);
    } else {
      console.log(`'I am' + ${i} + "strange loops."`)
    }
  }
}