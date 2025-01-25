// Function to remove the target element
function removeTargetElement() {
  const targetElement = document.querySelector(
    ".fixed.inset-0.bg-gray-900.bg-opacity-75.flex.items-center.justify-center.z-50.p-4"
  );
  if (targetElement) {
    targetElement.remove();
  } else {
    console.log("Target element not found yet.");
  }
}

// Use MutationObserver to handle dynamically loaded elements
const observer = new MutationObserver(() => {
  removeTargetElement();
});

observer.observe(document.body, { childList: true, subtree: true });

removeTargetElement();
