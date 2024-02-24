import "../styles/globals.css";
import $ from 'jquery'

registerMutualExclusion(".title-wrapper li", document.querySelectorAll(".title-wrapper li"));
registerMutualExclusion(".img-selector", document.querySelectorAll(".img-selector"));

const imgs = [
	$("#img-number-0"),
	$("#img-number-1"),
	$("#img-number-2")
]

$( ".img-selector" ).on("click", function() {
	const idx = parseInt(this.id.replace("img-select-", ""));
	for(let i = 0; i < imgs.length; i++) {
		if(idx === i) {
			imgs[i].removeClass("hidden");
		} else {
			imgs[i].addClass("hidden");
		}
	}
})

function registerMutualExclusion(selector: string, items: any): void {
	$( selector ).on("click", function() {
		$(this).addClass("selected");
		items.forEach((item: any) => {
			if(item !== this) {
				$(item).removeClass("selected");
			}
		})
	})
}
