// Function to open the modal by targeting the specific modal ID
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'flex';  // Show the modal
    document.body.classList.add('modal-open');  // Disable body scroll
}

// Function to close the modal by targeting the specific modal ID
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';  // Hide the modal
    document.body.classList.remove('modal-open');  // Re-enable body scroll
}

// Close modal if clicked outside the modal content
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('reading-modal')) {
        const modalId = e.target.id;
        closeModal(modalId);
    }
});
