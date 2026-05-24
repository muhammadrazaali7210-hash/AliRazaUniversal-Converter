/**
 * ==================================================================================
 * JARVIS ISOLATED INPUT ROUTER ENGINE
 * ==================================================================================
 * DESCRIPTION: Zero-Dependency, Non-Blocking Mobile File System Listener
 * HARDWARE TARGET: Mobile WebView / Touch Interface Matrix Optimization
 * FUNCTION: Guarantees file selection and UI updates even if core compiler is loading.
 * ==================================================================================
 */

// Shared Core Asset Pointers
window.selectedAssetStream = null;

/**
 * ISOLATED DEVICE LIFECYCLE BINDER
 * Attaches listeners to the interface as soon as the DOM settles
 */
document.addEventListener('DOMContentLoaded', () => {
    const mobileFileInputElement = document.getElementById('file-input');
    const interfaceDropZoneBox = document.querySelector('.drop-zone');
    
    const uiFileNameDisplay = document.getElementById('file-name');
    const uiFileSizeDisplay = document.getElementById('file-size');
    const uiFileInfoPanel = document.getElementById('file-info');
    const uiStatusMessageBox = document.getElementById('status-text');

    // Helper to safely write logs to the screen without crashing
    function printLog(message, isSuccess = true) {
        if (uiStatusMessageBox) {
            uiStatusMessageBox.innerText = message;
            uiStatusMessageBox.style.color = isSuccess ? "#10b981" : "#06b6d4";
        }
    }

    // Force touch interactions to trigger the file browser directly
    if (interfaceDropZoneBox && mobileFileInputElement) {
        interfaceDropZoneBox.addEventListener('click', (touchEvent) => {
            touchEvent.preventDefault();
            touchEvent.stopPropagation();
            mobileFileInputElement.click();
        });
    }

    // Track when a file is selected by the user
    if (mobileFileInputElement) {
        mobileFileInputElement.addEventListener('change', (fileEvent) => {
            if (fileEvent.target.files.length > 0) {
                // Store file globally so other converter files can read it later
                window.selectedAssetStream = fileEvent.target.files[0];
                
                // Update the user interface text elements
                if (uiFileNameDisplay) uiFileNameDisplay.innerText = window.selectedAssetStream.name;
                if (uiFileSizeDisplay) {
                    const parsedKiloBytes = Math.round(window.selectedAssetStream.size / 1024);
                    uiFileSizeDisplay.innerText = parsedKiloBytes + " KB";
                }
                if (uiFileInfoPanel) uiFileInfoPanel.style.display = "block";

                printLog("Asset stream loaded successfully, sir! Ready to rewrite.", true);
                console.log("[INPUT SUCCESS] Shared memory updated with file:", window.selectedAssetStream.name);
            } else {
                window.selectedAssetStream = null;
                printLog("Selection cancelled. File stream is empty, sir.", false);
            }
        });
        console.log("[SYSTEM LINK] Isolated mobile input listeners successfully armed.");
    } else {
        console.error("[CRITICAL CRASH] Target selector '#file-input' missing from HTML layout.");
    }
});
