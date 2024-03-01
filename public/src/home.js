"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jquery_1 = __importDefault(require("jquery"));
const util_1 = require("./util");
const imgs = [
    (0, jquery_1.default)("#img-number-0"),
    (0, jquery_1.default)("#img-number-1"),
    (0, jquery_1.default)("#img-number-2")
];
(0, util_1.registerMutualExclusions)(".img-selector", document.querySelectorAll(".img-selector"));
(0, jquery_1.default)(".hero-btn-container button").on("click", function () {
    if (!(0, jquery_1.default)(this).data("ignore-link")) {
        (0, util_1.redirect)((0, jquery_1.default)(this));
    }
});
(0, jquery_1.default)(".img-selector").on("click", function () {
    const idx = parseInt(this.id.replace("img-select-", ""));
    imgs.forEach((img, i) => {
        img.css({
            opacity: idx === i ? "43%" : 0,
            transition: "opacity 500ms"
        });
    });
});
