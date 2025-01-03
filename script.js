
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

// Function to open the accommodation modal
function openAccommodationModal(imageSrc) {
  // Get the modal element
  var modal = document.getElementById('accommodationModal');
  
  // Get the modal image element
  var modalImage = document.getElementById('modalAccommodationImage');
  
  // Set the modal image source
  modalImage.src = imageSrc;
  
  // Show the modal
  modal.style.display = 'block';
}

// Function to close the accommodation modal
function closeAccommodationModal() {
  // Get the modal element
  var modal = document.getElementById('accommodationModal');
  
  // Hide the modal
  modal.style.display = 'none';
}

// Add event listener to the accommodation images
var accommodationImages = document.querySelectorAll('.accommodation-item img');
accommodationImages.forEach(function(image) {
  image.addEventListener('click', function() {
    openAccommodationModal(image.src);
  });
});
