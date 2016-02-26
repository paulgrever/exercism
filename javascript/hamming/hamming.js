function Hamming () {};

Hamming.prototype.compute = function (DNA1, DNA2) {
  if (DNA1.length !== DNA2.length) {
    throw new Error('DNA strands must be of equal length.');
  }
  var count = 0;
  for(var i = 0; i < DNA1.length; i++) {
    if (DNA1[i] !== DNA2[i]) {
      count++;
    }
  }
  return count;
};

module.exports = Hamming;
