import $ from "jquery";
import { redirect, registerMutualExclusions } from "../util";

$("#nav-wrapper").load("components/nav.html #nav-wrapper", function () {
  registerMutualExclusions("#primary-nav li", document.querySelectorAll("#primary-nav li"));
  setPageTitle();
  registerNavDropdowns();
  registerNavLinks();
  registerDropdownObserver()
});

function setPageTitle(): void {
  let page = window.location.pathname;
  page = page.substring(page.lastIndexOf("/"))
    .replace("/", "")
    .replace(".html", "")
    .replace("_", " ");

  if(page === "" || page === "index") {
    page = "home";
  }

  $("#current-page").text(page);
}

function registerNavDropdowns(): void {
  $("#nav-dropdown-button").on("click", function () {
    const nav: JQuery = $("#primary-nav");
    const droppedDown: string | undefined = nav.attr("data-expanded");
    const isExpanded: boolean = droppedDown === "true";
    nav.attr("data-expanded", String(!isExpanded));
  });

  $("#info-dropdown > span").on("click", function () {
    const infoDropdown: JQuery = $("#info-dropdown");
    const expanded: string | undefined = infoDropdown.attr("aria-expanded");
    const isExpanded: boolean = expanded === "true";
    infoDropdown.attr("aria-expanded", String(!isExpanded));
  });
  
  const infoSites = ["about.html", "careers.html", "contact.html", "site_map.html"]
  $("#primary-nav li").each(function () {
    let pageName = $(this).data("link");  
    let currentPageLocation = window.location.pathname;
    currentPageLocation = currentPageLocation.substring(currentPageLocation.lastIndexOf("/"))
      .replace("/", "");

    let isSelectedPage = ( pageName === currentPageLocation )
      || ( (currentPageLocation === undefined || currentPageLocation === "" || currentPageLocation === "/" || currentPageLocation === "  ") && pageName === "index.html" )
      || (this.id === "info-dropdown") && infoSites.includes(currentPageLocation);

    // console.log("name:", pageName, " location: \'", currentPageLocation, "\' isSelected:", isSelectedPage);

    if(isSelectedPage) {
      $(this).attr("data-selected", "true");
    } else {
      $(this).attr("data-selected", "false");
    }
  })
}

function registerNavLinks() {
  $("#primary-nav li").on("click", function () {
    if (!$(this).data("ignore-link")) {
      const link = $(this).data("link");
      const location = window.location.pathname.replace("/", "");
      if(link !== location) {
        redirect($(this));
      }
    }
  });
}

function registerDropdownObserver(): void {
  let dropdown = $("#info-dropdown")
  let observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "aria-expanded"
      ) {
        const expanded = (mutation.target as unknown as {ariaExpanded: string}).ariaExpanded === "true";
        $("#info-dropdown-items").css({
          "height": expanded ? "10rem" : "0",
          "opacity": expanded ? 1 : 0
        })
      }
    });
  });

  if(dropdown !== null) {
   observer.observe(dropdown.get(0) as Node, { attributes: true });
  }
}