function counter(funcMass) {
  for (let i = 0; i < funcMass.length; i += 1) {
    if (funcMass[i + 1] % 2 === 0) {
      console.log(funcMass[i]);
    }
    console.log(funcMass.length);
  }
  return void 0;
}
module.exports = counter;
