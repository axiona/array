(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./validatable/recursive/map", "@dikac/t-iterable/validatable/boolean/and", "../validatable/array"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const map_1 = require("./validatable/recursive/map");
    const and_1 = require("@dikac/t-iterable/validatable/boolean/and");
    const array_1 = require("../validatable/array");
    class Array {
        constructor(validators, defaults = true) {
            this.validators = validators;
            this.defaults = defaults;
        }
        validate(value) {
            let results = map_1.default(this.validators, value);
            return new array_1.default(results, and_1.default, this.defaults, value);
        }
    }
    exports.default = Array;
});
//# sourceMappingURL=array.js.map