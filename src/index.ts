import "../styles/globals.css";
import $ from 'jquery'

registerMutualExclusion(".title-wrapper li", document.querySelectorAll(".title-wrapper li"));
registerMutualExclusion(".img-selector", document.querySelectorAll(".img-selector"));

function registerMutualExclusion(selector: string, items: any): void {
	$( selector ).on("click", function() {
		$(this).addClass("selected")
		items.forEach((item: any) => {
			if(item !== this) {
				$(item).removeClass("selected")
			}
		})
	})
}
