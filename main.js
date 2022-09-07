// FILTER CLOSE FUNCTIONALITY
const filterChipClose = document.querySelectorAll(".filter-chip-close");
const clearAllFilter = document.querySelector(".clear-all-filter-btn");

filterChipClose.forEach((element) => {
	element.addEventListener("click", () => {
		element.parentElement.style.display = "none";
	});
});

clearAllFilter.addEventListener("click", () => {
	filterChipClose.forEach((element) => {
		element.parentElement.style.display = "none";
	});
});
