const filterContainer = document.getElementById("filterContainer");
const galleryItems = document.querySelectorAll(".gallery-item");

filterContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("filter-item")) {
        // Deactivate existing active filter-item
        filterContainer.querySelector(".active").classList.remove("active");

        // Activate the clicked filter-item
        event.target.classList.add("active");

        // Get the filter value
        const filterValue = event.target.getAttribute("data-filter");

        // Filter gallery items
        galleryItems.forEach((item) => {
            if (item.classList.contains(filterValue) || filterValue === "all") {
                item.classList.remove("hide");
                item.classList.add("show");
            } else {
                item.classList.remove("show");
                item.classList.add("hide");
            }
        });
    }
});
