import { militaryContainer } from "./japan/inversify.config";
import { TYPES } from "./types";
import { Warrior } from "./interfaces";

const ninja = militaryContainer.get<Warrior>(TYPES.Warrior);

//expect(ninja.fight()).eql("cut!"); // true
//expect(ninja.sneak()).eql("hit!"); // true

console.log(ninja.fight())
console.log(ninja.sneak())

