
const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
panel.addEventListener("click", () => {
  removeActiveClasses();
  panel.classList.add("active");
});
});

function removeActiveClasses() {
panels.forEach((panel) => {
  panel.classList.remove("active");
})
}

const inputs = document.querySelectorAll(".input");

function focusFunc() {
let parent = this.parentNode;
parent.classList.add("focus");
}

function blurFunc() {
let parent = this.parentNode;
if (this.value == "") {
parent.classList.remove("focus");
}
}

inputs.forEach((input) => {
input.addEventListener("focus", focusFunc);
input.addEventListener("blur", blurFunc);
});



function showSidebar(){
const sidebar = document.querySelector('.sidebar')
sidebar.style.display = 'flex'
}
function hideSidebar(){
const sidebar = document.querySelector('.sidebar')
sidebar.style.display = 'none'
}

function showText(setId) {
// Hide all text sets
const allTextSets = document.querySelectorAll('.text-set');
allTextSets.forEach(set => set.classList.add('hidden'));

// Show the selected text set
const selectedSet = document.getElementById(setId);
selectedSet.classList.remove('hidden');
};

function openModal(src) {
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
modal.style.display = "block";
modalImage.src = src;
}

function closeModal() {
const modal = document.getElementById("imageModal");
modal.style.display = "none";
}

/*accommodation */
function openAccommodationModal(imageSrc) {
    document.getElementById("modalAccommodationImage").src = imageSrc;
    document.getElementById("accommodationModal").style.display = "block";
}

function closeAccommodationModal() {
    document.getElementById("accommodationModal").style.display = "none";
};

/**about */
// Function to open the lightbox with the selected image
function openLightbox(imageSrc) {
    document.getElementById("lightboxImage").src = imageSrc; // Set the source of the lightbox image
    document.getElementById("lightbox").style.display = "block"; // Show the lightbox
}

// Function to close the lightbox
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none"; // Hide the lightbox
};

