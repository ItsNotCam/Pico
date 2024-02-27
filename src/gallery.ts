// temporary solution until nav and footer are manually merged with final pages
setTimeout(() => {
	$("#info-dropdown > span").on("click", function () {
		const infoDropdown: JQuery = $("#info-dropdown");
		const expandedStr: string | undefined = infoDropdown.attr("aria-expanded");
		const isExpanded: boolean = expandedStr === "true";

		console.log(isExpanded)

		$(function () {
			if(isExpanded) {
				$("body").prepend($("<div/>", { class: "" }));
			} else {
				$("body").remove(".nav-darken")
			}
		})
	});
}, 500);
