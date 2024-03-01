"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.redirect = exports.registerMutualExclusions = void 0;
const jquery_1 = __importDefault(require("jquery"));
function registerMutualExclusions(selector, items) {
    (0, jquery_1.default)(selector).on("click", function () {
        if ((0, jquery_1.default)(this).data("ignore-link")) {
            return;
        }
        items.forEach((item) => {
            (0, jquery_1.default)(item).attr("data-selected", "false");
        });
        (0, jquery_1.default)(this).attr("data-selected", "true");
    });
}
exports.registerMutualExclusions = registerMutualExclusions;
function redirect(item) {
    const link = (0, jquery_1.default)(item).data("link");
    const ignore = (0, jquery_1.default)(item).data("nav-hover");
    if (!link || ignore === "true" || window.location.pathname === link) {
        return;
    }
    console.log("redirecting to", link);
    (0, jquery_1.default)(function () {
        const pageOut = (0, jquery_1.default)("<div/>", { class: "page-out" });
        (0, jquery_1.default)("body").prepend(pageOut);
        setTimeout(() => window.location.assign(link), 500);
    });
}
exports.redirect = redirect;
