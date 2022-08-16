"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.military = void 0;
var inversify_1 = require("inversify");
var types_1 = require("../types");
var entities_1 = require("../japan/entities");
var entities_2 = require("../roman/entities");
var entities_3 = require("../russian/entities");
var military = new inversify_1.Container();
exports.military = military;
military.bind(types_1.TYPES.Warrior).to(entities_1.Ninja);
military.bind(types_1.TYPES.Weapon).to(entities_3.Mace);
military.bind(types_1.TYPES.ThrowableWeapon).to(entities_2.Dart);