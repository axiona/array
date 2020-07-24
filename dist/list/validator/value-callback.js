(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../validatable/value-callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const value_callback_1 = require("../validatable/value-callback");
    class ValueCallback {
        constructor(validators, handler, validation) {
            this.validators = validators;
            this.handler = handler;
            this.validation = validation;
        }
        validate(value) {
            return new value_callback_1.default(value, this.validators, this.handler, this.validation);
        }
    }
    exports.default = ValueCallback;
});
//# sourceMappingURL=value-callback.js.map