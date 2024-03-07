import $ from "jquery";
import { redirect } from "./util";

$(".product__buy button").on("click", function () {
  if (!$(this).data("ignore-link")) {
    redirect($(this));
  }
});
