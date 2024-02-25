"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jquery_1 = __importDefault(require("jquery"));
const util_1 = require("../util");
(0, jquery_1.default)("#nav-wrapper").load("components/nav.html #nav-wrapper", function () {
    (0, util_1.registerMutualExclusions)("#primary-nav li", document.querySelectorAll("#primary-nav li"));
    setPageTitle();
    registerNavDropdowns();
    registerNavLinks();
    registerDropdownObserver();
});
function setPageTitle() {
    let page = window.location.pathname;
    page = page.substring(page.lastIndexOf("/"))
        .replace("/", "")
        .replace(".html", "")
        .replace("_", " ");
    if (page === "" || page === "index") {
        page = "home";
    }
    else if (page === "map") {
        page = "site map";
    }
    (0, jquery_1.default)("#current-page").text(page);
}
function registerNavDropdowns() {
    (0, jquery_1.default)("#nav-dropdown-button").on("click", function () {
        const nav = (0, jquery_1.default)("#primary-nav");
        const droppedDown = nav.attr("data-expanded");
        const isExpanded = droppedDown === "true";
        nav.attr("data-expanded", String(!isExpanded));
    });
    (0, jquery_1.default)("#info-dropdown > span").on("click", function () {
        const infoDropdown = (0, jquery_1.default)("#info-dropdown");
        const expanded = infoDropdown.attr("aria-expanded");
        const isExpanded = expanded === "true";
        infoDropdown.attr("aria-expanded", String(!isExpanded));
    });
    (0, jquery_1.default)("#primary-nav li").each(function () {
        const pageName = (0, jquery_1.default)(this).data("link");
        const infoSites = ["/about.html", "/careers.html", "/contact.html", "/site_map.html"];
        let isSelectedPage = (pageName === window.location.pathname)
            || (window.location.pathname === "/" && pageName === "/index.html")
            || (this.id === "info-dropdown") && infoSites.includes(window.location.pathname);
        if (isSelectedPage) {
            (0, jquery_1.default)(this).attr("data-selected", "true");
        }
        else {
            (0, jquery_1.default)(this).attr("data-selected", "false");
        }
    });
}
function registerNavLinks() {
    (0, jquery_1.default)("#primary-nav li").on("click", function () {
        if (!(0, jquery_1.default)(this).data("ignore-link")) {
            (0, util_1.redirect)((0, jquery_1.default)(this));
        }
    });
}
function registerDropdownObserver() {
    let dropdown = (0, jquery_1.default)("#info-dropdown");
    let observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === "attributes" &&
                mutation.attributeName === "aria-expanded") {
                const expanded = mutation.target.ariaExpanded === "true";
                (0, jquery_1.default)("#info-dropdown-items").css({
                    "height": expanded ? "10rem" : "0",
                    "opacity": expanded ? 1 : 0
                });
            }
        });
    });
    if (dropdown !== null) {
        observer.observe(dropdown.get(0), { attributes: true });
    }
}
