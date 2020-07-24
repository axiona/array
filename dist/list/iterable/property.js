(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./pair"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const pair_1 = require("./pair");
    class Property {
        constructor(list, validation) {
            this.list = list;
            this.validation = validation;
            this.keys = [];
        }
        *[Symbol.iterator]() {
            for (let [properties, value] of new pair_1.default(this.list, this.validation)) {
                yield properties;
            }
        }
    }
    exports.default = Property;
});
//# sourceMappingURL=property.js.map