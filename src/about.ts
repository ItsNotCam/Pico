import $ from "jquery";
import { redirect, registerMutualExclusions } from "./util";

registerMutualExclusions("#nav-list", document.querySelectorAll("#nav-list"));

$("#primary-nav li").on("click", function () {
  if (!$(this).data("ignore-link")) {
    const link = $(this).data("link");
    const location = window.location.pathname.replace("/", "");
    if (link !== location) {
      redirect($(this));
    }
  }
});
