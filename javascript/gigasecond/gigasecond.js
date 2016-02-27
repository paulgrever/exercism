function Gigasecond(time) {
  this.time = time
};

Gigasecond.prototype.date = function () {
  return new Date(this.time.getTime() + Math.pow(10, 12));
}

module.exports = Gigasecond;
