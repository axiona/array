(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../assert/string/includes"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const includes_1 = require("../../assert/string/includes");
    /**
     * @deprecated use original instead
     */
    exports.default = includes_1.default;
});
//# sourceMappingURL=includes.js.map