import "../styles/footer.css";
import "../styles/gallery.css";
import "../styles/globals.css";
import "../styles/home.css";
import "../styles/nav.css";
import "../styles/product.css";
import "../styles/about.css";
import "../styles/careers.css";

import "./components/nav";
import "./components/footer";

import "./util";
import "./gallery";
import "./home";
import "./about";
import "./careers";

import $ from "jquery";

interface FoldoutSelector {
  selector: string;
  foldedOutDelay: number;
  foldedInDelay: number;
}

const foldoutSelectorMaps: FoldoutSelector[] = [
  {
    selector: "product",
    foldedOutDelay: 300,
    foldedInDelay: 150,
  },
  {
    selector: "index",
    foldedOutDelay: 300,
    foldedInDelay: 150,
  },
  {
    selector: "gallery",
    foldedOutDelay: 300,
    foldedInDelay: 150,
  },
  {
    selector: "about",
    foldedOutDelay: 150,
    foldedInDelay: 400,
  },
  {
    selector: "career",
    foldedOutDelay: 150,
    foldedInDelay: 400,
  },
];

foldoutSelectorMaps.forEach((selectorMap) => registerNavFoldout(selectorMap));

export function registerNavFoldout({
  selector,
  foldedOutDelay,
  foldedInDelay,
}: FoldoutSelector): void {
  $(`#${selector}-ham`).on("click", function () {
    const $foldout = $(`#${selector}-nav .foldout`);
    const isFoldedOut: boolean = $foldout.attr("aria-expanded") === "true";

    // close menu when clicking off of it
    $(`#${selector}-nav .foldout-screen-darken`).on("click", function () {
      if ($foldout.attr("aria-expanded") === "true") {
        $(`#${selector}-nav`).attr("aria-expanded", "false");
        $(`#${selector}-nav .foldout`).attr("aria-expanded", "false");
        $(`#${selector}-ham`).attr("aria-expanded", "false");

        $("#reverse").each(function () {
          (this as unknown as SVGAnimateElement).beginElement();
        });
      }
    });

    $foldout.attr("aria-expanded", String(!isFoldedOut));
    setTimeout(
      () => $(`#${selector}-ham`).attr("aria-expanded", String(!isFoldedOut)),
      isFoldedOut ? foldedOutDelay : foldedInDelay
    );

    $(`#${selector}-nav`).attr("aria-expanded", String(!isFoldedOut));
  });
}
