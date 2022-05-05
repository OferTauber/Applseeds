function Square(a, b, c, d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
}

Square.prototype.isSquare = function () {
  return (
    this &&
    this.d &&
    typeof this.a === 'number' &&
    this.a === this.b &&
    this.b === this.c &&
    this.c === this.d
  );
};

module.exports = Square;
