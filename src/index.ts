import "../styles/footer.css";
import "../styles/gallery.css";
import "../styles/globals.css";
import "../styles/home.css";
import "../styles/nav.css";
import "../styles/product.css";
import "../styles/about.css";
import "../styles/careers.css";

import "./components/nav.ts";
import "./components/footer.ts";

import "./util.ts";
import "./gallery.ts";
import "./home.ts";
import "./about.ts";
import "./careers.ts";

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
    selector: "careers",
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
  console.log("registering", selector);
  $(`#${selector}-ham`).on("click", function () {
    const $foldout = $(`#${selector}-nav .foldout`);
    const isFoldedOut: boolean = $foldout.attr("aria-expanded") === "true";
    const opp: string = String(!isFoldedOut);

    console.log("was", isFoldedOut, "is", String(!isFoldedOut));

    $foldout.attr("aria-expanded", String(!isFoldedOut));

    setTimeout(
      () => {
        $(`#${selector}-ham`).attr("aria-expanded", String(!isFoldedOut));
      },
      isFoldedOut ? foldedOutDelay : foldedInDelay
    );

    $(`#${selector}-nav`).attr("aria-expanded", String(!isFoldedOut));
  });
}
