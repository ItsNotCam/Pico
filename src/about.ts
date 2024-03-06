import $ from "jquery";
import { redirect, registerMutualExclusions } from "./util";

registerMutualExclusions("#nav-list", document.querySelectorAll("#nav-list"));

$("#primary-nav li").on("click", function () {
  if (!$(this).data("ignore-link")) {
    const link: string = $(this).data("link");
    const location: string = window.location.pathname.replace("/", "");
    if (link !== location) {
      redirect($(this));
    }
  }
});
