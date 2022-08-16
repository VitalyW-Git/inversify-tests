import { injectable, inject } from "inversify";
import "reflect-metadata";
import { Weapon, ThrowableWeapon, Warrior } from "../interfaces";
import { TYPES } from "../types";

@injectable()
class Mace implements Weapon {
    public hit() {
        return "шмяк!";
    }
}

@injectable()
class Gantlet implements ThrowableWeapon {
    public throw() {
        return "тыдыщ!";
    }
}

@injectable()
class Bogatyr implements Warrior {

    private _mace: Weapon;
    private _gantlet: ThrowableWeapon;

    public constructor(
	    @inject(TYPES.Weapon) mace: Weapon,
	    @inject(TYPES.ThrowableWeapon) gantlet: ThrowableWeapon
    ) {
        this._mace = mace;
        this._gantlet = gantlet;
    }

    public fight() { return this.greet() + this._mace.hit(); }
    public sneak() { return this.greet() + this._gantlet.throw(); }
    public greet(): string {
        return 'Я Русский Богатырь! ';
    }
}

export { Bogatyr, Mace, Gantlet };

