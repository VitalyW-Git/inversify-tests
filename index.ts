import { military as japan } from "./japan/inversify.config";
import { military as roman } from "./roman/inversify.config";
import { military as russian } from "./russian/inversify.config";
import { military as crazy } from "./crazy/inversify.config";

import { TYPES } from "./types";
import { Warrior } from "./interfaces";

const fighter1 = japan.get<Warrior>(TYPES.Warrior);
const fighter2 = roman.get<Warrior>(TYPES.Warrior);
const fighter3 = russian.get<Warrior>(TYPES.Warrior);
const fighter4 = crazy.get<Warrior>(TYPES.Warrior);

console.log(fighter1.fight())
console.log(fighter1.sneak())

console.log(fighter2.fight())
console.log(fighter2.sneak())

console.log(fighter3.fight())
console.log(fighter3.sneak())

console.log(fighter4.fight())
console.log(fighter4.sneak())

