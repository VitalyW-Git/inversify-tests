"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dart = exports.Sword = exports.Legioner = void 0;
var inversify_1 = require("inversify");
require("reflect-metadata");
var types_1 = require("../types");
var Sword = /** @class */ (function () {
    function Sword() {
    }
    Sword.prototype.hit = function () {
        return "splash!";
    };
    Sword = __decorate([
        (0, inversify_1.injectable)()
    ], Sword);
    return Sword;
}());
exports.Sword = Sword;
var Dart = /** @class */ (function () {
    function Dart() {
    }
    Dart.prototype.throw = function () {
        return "piu!";
    };
    Dart = __decorate([
        (0, inversify_1.injectable)()
    ], Dart);
    return Dart;
}());
exports.Dart = Dart;
var Legioner = /** @class */ (function () {
    function Legioner(sword, dart) {
        this._sword = sword;
        this._dart = dart;
    }
    Legioner.prototype.fight = function () { return this.greet() + this._sword.hit(); };
    Legioner.prototype.sneak = function () { return this.greet() + this._dart.throw(); };
    Legioner.prototype.greet = function () {
        return 'Ego sum legionnaire! ';
    };
    Legioner = __decorate([
        (0, inversify_1.injectable)(),
        __param(0, (0, inversify_1.inject)(types_1.TYPES.Weapon)),
        __param(1, (0, inversify_1.inject)(types_1.TYPES.ThrowableWeapon)),
        __metadata("design:paramtypes", [Object, Object])
    ], Legioner);
    return Legioner;
}());
exports.Legioner = Legioner;
