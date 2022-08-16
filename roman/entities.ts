import { injectable, inject } from "inversify";
import "reflect-metadata";
import { Weapon, ThrowableWeapon, Warrior } from "../interfaces";
import { TYPES } from "../types";

@injectable()
class Sword implements Weapon {
    public hit() {
        return "splash!";
    }
}

@injectable()
class Dart implements ThrowableWeapon {
    public throw() {
        return "piu!";
    }
}

@injectable()
class Legioner implements Warrior {

    private _sword: Weapon;
    private _dart: ThrowableWeapon;

    public constructor(
	    @inject(TYPES.Weapon) sword: Weapon,
	    @inject(TYPES.ThrowableWeapon) dart: ThrowableWeapon
    ) {
        this._sword = sword;
        this._dart = dart;
    }

    public fight() { return this.greet() + this._sword.hit(); }
    public sneak() { return this.greet() + this._dart.throw(); }
    public greet(): string {
        return 'Ego sum legionnaire! ';
    }

}

export { Legioner, Sword, Dart };

