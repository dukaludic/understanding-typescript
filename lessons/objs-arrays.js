"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role[Role["AUTHOR"] = 7] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: "Maximilian",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
let favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.hobbies);
for (const hobby of person.hobbies) {
    console.log(hobby);
}
if (person.role === Role.ADMIN) {
    console.log(person.role);
}
console.log(person);
