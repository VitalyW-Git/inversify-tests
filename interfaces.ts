export interface Warrior {
    fight(): string;
    sneak(): string;
    greet(): string;
}

export interface Weapon {
    hit(): string;
}

export interface ThrowableWeapon {
    throw(): string;
}

