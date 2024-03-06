import $ from "jquery";

export function registerMutualExclusions(selector: string, items: any): void {
  $(selector).on("click", function () {
    if($(this).data("ignore-link")) {
      return;
    }
    
    items.forEach((item: any) => {
      $(item).attr("data-selected", "false")
    });
    $(this).attr("data-selected", "true")
  });
}

export function redirect(item: JQuery): void {
  const link: string = $(item).data("link");
  const ignore: string = $(item).data("nav-hover");
  if (!link || ignore === "true" || window.location.pathname === link) {
    return;
  }

  console.log("redirecting to", link)

  $(function () {
    const pageOut: JQuery = $("<div/>", { class: "page-out" });
    $("body").prepend(pageOut);
    setTimeout(() => window.location.assign(link), 500);
  });
}