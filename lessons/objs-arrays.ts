enum Role { ADMIN = 5, READ_ONLY, AUTHOR };

const person = {
    name: "Maximilian",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};


let favoriteActivities: string[];
favoriteActivities = ['Sports'];


console.log(person.hobbies);

for (const hobby of person.hobbies) {
    console.log(hobby)
}

if (person.role === Role.ADMIN) {
    console.log(person.role)
}

console.log(person)