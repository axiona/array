(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function Reset(argument) {
        let buffer = 
        // @ts-ignore
        [];
        argument.forEach(function (v, i) {
            buffer.push(v);
        });
        return buffer;
    }
    exports.default = Reset;
});
//# sourceMappingURL=reset.js.map