import { Container } from "inversify";
import { TYPES } from "../types";
import { Warrior, Weapon, ThrowableWeapon } from "../interfaces";
import { Ninja } from "../japan/entities";
import { Dart } from "../roman/entities";
import { Mace } from "../russian/entities";

const military = new Container();
military.bind<Warrior>(TYPES.Warrior).to(Ninja);
military.bind<Weapon>(TYPES.Weapon).to(Mace);
military.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Dart);

export { military };

