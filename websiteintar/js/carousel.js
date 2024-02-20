document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel-wrapper");
    const prevButton = document.querySelector(".carousel-control.prev");
    const nextButton = document.querySelector(".carousel-control.next");
    const items = document.querySelectorAll(".carousel-item");
    const totalItems = items.length;
    let currentIndex = 0;

    // Fungsi untuk menggeser slide ke kiri
    function slideToPrev() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    }

    // Fungsi untuk menggeser slide ke kanan
    function slideToNext() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }

    // Fungsi untuk memperbarui tampilan carousel
    function updateCarousel() {
        items.forEach((item, index) => {
            if (index === currentIndex) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });
    }

    // Event listener untuk tombol prev dan next
    prevButton.addEventListener("click", slideToPrev);
    nextButton.addEventListener("click", slideToNext);
});