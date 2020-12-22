class Car {
  #make;
  #model;
  #year;
  #color;

  static length = 4.0;

  constructor(make, model, year) {
    this.#make = make;
    this.#model = model;
    this.#year = year;
    this.#color = 'Default White';
  }

  drive(param) {
    console.log(`Driving ${this.#model}... Param: ${param}`);
  }

  static foo() {
    console.log(`Static method...${this.length}`);
  }

  get color() {
    return this.#color;
  }

  set color(col) {
    this.#color = col;
  }
}

const baleno = new Car('Suzuki', 'Baleno', 2020);

console.log(baleno.color);

baleno.color = 'New Red';

console.log(baleno.color);
