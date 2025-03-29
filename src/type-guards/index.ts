// type guards
type alphanumeric = string | number;

function add(a: alphanumeric, b: alphanumeric) {
  if (typeof a === "string" && typeof b === "number") {
    return a + b;
  }
}

//instance of guards

// class Dog {
//   bark(): boolean {
//     return true;
//   }
// }

// class Cat {
//   meow(): boolean {
//     return true;
//   }
// }

// type TAnimal = Dog | Cat;

// function checkPet(animal: TAnimal): string {
//   let sound = "";

//   if (animal instanceof Dog) {
//     sound = animal.bark() ? "Aw aw!!" : "";
//   }

//   if (animal instanceof Cat) {
//     sound = animal.meow() ? "Meow" : "";
//   }

//   return sound;
// }

// user defined guards
class Dog {
  bark(): boolean {
    return true;
  }
}

class Cat {
  meow(): boolean {
    return true;
  }
}

type TAnimal = Dog | Cat;

function isDog(animal: TAnimal): animal is Dog {
  return animal instanceof Dog;
}

function checkPet(animal: TAnimal): string {
  let sound = "";

  if (isDog(animal)) {
    sound = animal.bark() ? "Aw aw!!" : "";
  } else {
    sound = animal.meow() ? "Meow" : "";
  }

  return sound;
}
