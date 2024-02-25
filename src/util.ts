import $ from "jquery";

export function registerMutualExclusion(selector: string, items: any): void {
  $(selector).on("click", function () {
    if($(this).data("ignore-link")){
      return;
    }
    
    $(this).addClass("selected");
    items.forEach((item: any) => {
      if (item !== this) {
        $(item).removeClass("selected");
      }
    });
  });
}

export function redirect(item: JQuery): void {
  const link: string = $(item).data("link");
  if (window.location.pathname === link) {
    return;
  }

  $(function () {
    const pageOut: JQuery = $("<div/>", { class: "page-out" });
    $("body").prepend(pageOut);
    setTimeout(() => window.location.assign(link), 500);
  });
}
