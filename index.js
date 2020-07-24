class Polygon {
  constructor(sidesArr) {
    this.sides = sidesArr;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((acc, val) => acc + val);
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.countSides === 3) {
      let test1 = this.sides[0] + this.sides[1] > this.sides[2]
      let test2 =  this.sides[1] + this.sides[2] > this.sides[0]
      let test3 = this.sides[0] + this.sides[2] > this.sides[1]
      return test1 && test2 && test3
    }
  }
}

class Square extends Polygon {
  get isValid() {
    return this.sides.every(x => x === this.sides[0])
  }

  get area() {
    return this.sides[0] ** 2
  }
}
