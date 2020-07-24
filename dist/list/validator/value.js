(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../list/validatable/value"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const value_1 = require("../../list/validatable/value");
    class Value {
        constructor(validators, handler, validation) {
            this.validators = validators;
            this.handler = handler;
            this.validation = validation;
        }
        validate(value) {
            return new value_1.default(value, this.validators, this.handler, this.validation);
        }
    }
    exports.default = Value;
});
//# sourceMappingURL=value.js.map