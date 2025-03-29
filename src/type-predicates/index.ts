type TUser = {
  id: string;
  name: string;
};

type Employee = TUser & {
  email: string;
};

const people: (TUser | Employee)[] = [
  { id: "1", name: "John" },
  { id: "2", name: "Sally" },
  { id: "3", name: "Barty", email: "hello@mail.com" },
];

people.forEach((person) => {
  if (isEmployee(person)) {
    console.log(person.email);
  } else {
    console.log(person.id);
  }
});

people.forEach((person) => {
  if (isUser(person)) {
    console.log(person.name);
  }

  if (isEmployee(person)) {
    console.log(person.email);
  }
});

// type predicate
function isEmployee(person: TUser | Employee): person is Employee {
  return "email" in person;
}

function isUser(person: TUser | Employee): person is TUser {
  return "name" in person;
}
