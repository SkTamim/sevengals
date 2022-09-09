// FILTER CLOSE FUNCTIONALITY
try {
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
} catch (error) {
	console.log(error);
}

// PRODUCT COUNTER FUNCTIONALITY
try {
	const minusCount = document.getElementById("minus-count");
	const plusCount = document.getElementById("add-count");

	minusCount.addEventListener("click", () => {
		const count = document.getElementById("count");
		if (count.value == 1) {
			return;
		} else {
			count.value = +count.value - 1;
		}
	});
	plusCount.addEventListener("click", () => {
		const count = document.getElementById("count");
		count.value = +count.value + 1;
	});
} catch (error) {
	console.log(error);
}
