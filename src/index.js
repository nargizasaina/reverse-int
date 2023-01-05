module.exports = function reverse (n) {
  const neededNumber = n.toString().split('');
  if(neededNumber[0] === '-') {
      let preResult = neededNumber.slice(1);
      return preResult.reverse().join('');
  }
  return neededNumber.reverse().join('');
}
