const car = {
  wheels: 4,

  init() {
    console.log(
      `У меня есть ${this.wheels} колеса, мой владелец ${this.owner} my old owner is ${this.oldOwner}. ${this.oldOwner} have used it ${this.oldOwner.years} years`
    );
  }
};

const carWithOwner = Object.create(car, {
  owner: {
    value: "Дмитрий"
  },
  oldOwner: {
    value: "John",
    years: 7
  }
});
carWithOwner.wheels = 5;
console.log(carWithOwner);

carWithOwner.init();
