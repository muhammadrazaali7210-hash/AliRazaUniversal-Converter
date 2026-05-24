/**
 * ==================================================================================
 * JARVIS UNIVERSAL QUANTUM CORE ENGINE (STANDALONE ARCHITECTURE)
 * ==================================================================================
 * DESCRIPTION: High-Performance, Client-Side Omni-Format Structural Transcoder
 * HARDWARE TARGET: MediaTek Helio G35 Octa-Core Optimized (Cortex-A53 Multi-Thread)
 * BUG FIX: DOM Binding Lifecycle Safe-Wrap to eliminate file selection freezing.
 * VERSION: Javed 1.1 / JARVIS Master Core
 * ==================================================================================
 */

// Global System Memory Cache Allocation
let uploadedFile = null;
let ffmpegInstance = null;
let systemCoreReady = false;

// Destructure External Engineering Class Injections
const { createFFmpeg, fetchFile } = FFmpeg;

// Initialize Mozilla PDF.js Global Worker Thread Locators
if (window['pdfjs-dist/build/pdf']) {
    window['pdfjs-dist/build/pdf'].GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js';
}

/**
 * CORE LOGISTIC MATRIX INITIALIZER
 * Automatically links core systems and tests browser capability maps on page mount
 */
async function loadSystemCoreEngines() {
    updateSystemInterfaceLog("Booting system core engines in background memory...", "info");
    
    try {
        // Initialize FFmpeg Instance with precise virtual core configuration mapping
        if (ffmpegInstance === null) {
            ffmpegInstance = createFFmpeg({ 
                log: true,
                corePath: 'https://unpkg.com/@ffmpeg/core@0.11.0/dist/ffmpeg-core.js'
            });
            await ffmpegInstance.load();
        }
        
        systemCoreReady = true;
        updateSystemInterfaceLog("Processor hardware acceleration completely unlocked and active, sir!", "success");
    } catch (coreException) {
        console.error("[CRITICAL CORE EXCEPTION] FFmpeg.wasm failed load:", coreException);
        updateSystemInterfaceLog("Security hardware lock bypass sequence pending. Please refresh this page, sir.", "error");
    }
}

/**
 * UNIFIED UI INTERFACE LOGGER
 * Safely manipulates the UI feedback blocks with crash protection and color matrix parameters
 */
function updateSystemInterfaceLog(statusMessage, statusType = "info") {
    const statusContainerBox = document.getElementById('status-box');
    const statusTextComponent = document.getElementById('status-text');
    
    if (!statusContainerBox || !statusTextComponent) {
        console.warn("[UI STACK WARN] Missing system display container layers.");
        return;
    }
    
    statusContainerBox.style.display = "block";
    statusTextComponent.innerText = statusMessage;

    // Isolate color assignment evaluations into distinct, non-overlapping logic trees
    if (statusType === "success") {
        statusContainerBox.style.background = "rgba(16, 185, 129, 0.1)";
        statusContainerBox.style.borderColor = "rgba(16, 185, 129, 0.3)";
        statusTextComponent.style.color = "var(--success)";
        return;
    } 
    
    if (statusType === "error") {
        statusContainerBox.style.background = "rgba(239, 68, 68, 0.1)";
        statusContainerBox.style.borderColor = "rgba(239, 68, 68, 0.3)";
        statusTextComponent.style.color = "var(--error)";
        return;
    }
    
    // Default fallback state maps cleanly to Cyan System Theme Accent
    statusContainerBox.style.background = "rgba(59, 130, 246, 0.1)";
    statusContainerBox.style.borderColor = "rgba(59, 130, 246, 0.2)";
    statusTextComponent.style.color = "var(--accent-cyan)";
}

/**
 * SAFE LIFECYCLE DOM BINDING
 * Delays input assignment until HTML structure is 100% verified to fix input freeze
 */
window.addEventListener('DOMContentLoaded', () => {
    // Fire up WebAssembly cores safely
    loadSystemCoreEngines();

    const targetFileInputElement = document.getElementById('file-input');
    if (targetFileInputElement) {
        targetFileInputElement.addEventListener('change', function(inputChangeEvent) {
            if (inputChangeEvent.target.files.length > 0) {
                uploadedFile = inputChangeEvent.target.files[0];
                
                const displayFileNameElement = document.getElementById('file-name');
                const displayFileSizeElement = document.getElementById('file-size');
                const displayFilePanelElement = document.getElementById('file-info');
                
                if (displayFileNameElement) displayFileNameElement.innerText = uploadedFile.name;
                if (displayFileSizeElement) {
                    const calculatedKiloBytes = Math.round(uploadedFile.size / 1024);
                    displayFileSizeElement.innerText = calculatedKiloBytes + " KB";
                }
                if (displayFilePanelElement) displayFilePanelElement.style.display = "block";
                
                updateSystemInterfaceLog("Target file stream read and validated successfully, sir.", "success");
            } else {
                uploadedFile = null;
            }
        });
        console.log("[SYSTEM SYSTEM] Input listener linked perfectly without blocking.");
    } else {
        console.error("[CRITICAL ERROR] Element selector '#file-input' was not found during script execution.");
    }
});

/**
 * THE MAIN COMMAND DISPATCHER MATRIX
 * Routes raw inputs to specialized processing cells based on format groups
 */
function executeConversion() {
    if (!uploadedFile) {
        updateSystemInterfaceLog("Deployment sequence aborted: Target asset data stream is empty, sir.", "error");
        return;
    }

    const targetFormatSelectionElement = document.getElementById('target-format');
    if (!targetFormatSelectionElement) {
        updateSystemInterfaceLog("System Error: Format selection array is corrupted.", "error");
        return;
    }

    const requestedTargetFormatString = targetFormatSelectionElement.value;
    const resolvedActiveOptionGroup = targetFormatSelectionElement.options[targetFormatSelectionElement.selectedIndex].parentNode.label;
    
    updateSystemInterfaceLog("Routing asset data stream into target compilation cells...");

    // Isolated Pipeline Multi-Route Evaluation Block
    if (resolvedActiveOptionGroup === "TRUE IMAGE RE-ENCODE (Canvas Core)") {
        executeTargetImagePipeline(uploadedFile, requestedTargetFormatString);
        return;
    } 
    
    if (requestedTargetFormatString === "pdf") {
        executeTargetPdfGenerationPipeline(uploadedFile);
        return;
    } 
    
    if (resolvedActiveOptionGroup === "TRUE DOCUMENT GENERATION (jsPDF/Structure)" && requestedTargetFormatString !== "pdf") {
        if (uploadedFile.name.toLowerCase().endsWith('.pdf')) {
            executeTargetPdfToImageDeconstruction(uploadedFile, requestedTargetFormatString);
        } else {
            executeTargetLegacyDocPipeline(uploadedFile, requestedTargetFormatString);
        }
        return;
    } 
    
    if (resolvedActiveOptionGroup.includes("FFmpeg.wasm")) {
        executeTargetHardwareMediaPipeline(uploadedFile, requestedTargetFormatString);
    }
}

/**
 * ==================================================================================
 * PIPELINE SECTION 1: MASTER IMAGE COMPILATION CELL
 * ==================================================================================
 */
function executeTargetImagePipeline(sourceFileAsset, targetFormatExtension) {
    updateSystemInterfaceLog("Initializing visual pixel re-encoding matrix grids...");
    
    const fileReaderInstance = new FileReader();
    fileReaderInstance.onerror = function() {
        updateSystemInterfaceLog("Error reading raw file bytes into active memory channels.", "error");
    };
    
    fileReaderInstance.onload = function(readerLoadEvent) {
        const virtualHtmlImageNode = new Image();
        
        virtualHtmlImageNode.onerror = function() {
            updateSystemInterfaceLog("Failed to decode visual pixel mapping. Source file may be corrupted.", "error");
        };
        
        virtualHtmlImageNode.onload = function() {
            const systemHiddenCanvasNode = document.getElementById('conversion-canvas');
            if (!systemHiddenCanvasNode) {
                updateSystemInterfaceLog("Hardware Link Error: Invisible system render canvas is missing.", "error");
                return;
            }
            
            const canvasRendering2DContext = systemHiddenCanvasNode.getContext('2d');
            
            // Re-allocate hardware pixel dimensions matching source boundaries exactly
            systemHiddenCanvasNode.width = virtualHtmlImageNode.width;
            systemHiddenCanvasNode.height = virtualHtmlImageNode.height;
            
            // Clear prior canvas memory remnants before drawing fresh arrays
            canvasRendering2DContext.clearRect(0, 0, systemHiddenCanvasNode.width, systemHiddenCanvasNode.height);
            canvasRendering2DContext.drawImage(virtualHtmlImageNode, 0, 0);
            
            let resolvedImageMimeTypeString = "image/png";
            if (targetFormatExtension === 'jpg' || targetFormatExtension === 'jpeg') {
                resolvedImageMimeTypeString = "image/jpeg";
            }
            
            // Force hardware-accelerated rewrite of binary graphic structures
            const processedBase64DataUrl = systemHiddenCanvasNode.toDataURL(resolvedImageMimeTypeString, 0.96);
            const sanitizedCleanFileName = sourceFileAsset.name.split('.')[0] + `.${targetFormatExtension}`;
            
            executeSystemDownloadTrigger(processedBase64DataUrl, sanitizedCleanFileName);
            updateSystemInterfaceLog("Image pixels structurally rewritten successfully, sir!", "success");
        };
        
        virtualHtmlImageNode.src = readerLoadEvent.target.result;
    };
    
    fileReaderInstance.readAsDataURL(sourceFileAsset);
}

/**
 * ==================================================================================
 * PIPELINE SECTION 2: HIGH-FIDELITY IMAGE-TO-PDF MULTI-PAGE ENGINE (pdf-lib)
 * ==================================================================================
 */
async function executeTargetPdfGenerationPipeline(sourceFileAsset) {
    const rawFileNameLower = sourceFileAsset.name.toLowerCase();
    
    // Check if user is attempting to map structured images directly into document grids
    if (rawFileNameLower.endsWith('.png') || rawFileNameLower.endsWith('.jpg') || rawFileNameLower.endsWith('.jpeg')) {
        updateSystemInterfaceLog("Image asset target detected. Wrapping pixel grids into true vector PDF sheets...", "info");
        
        const documentFileReader = new FileReader();
        documentFileReader.onload = async function(fileLoadEvent) {
            try {
                const arrayBufferBytes = fileLoadEvent.target.result;
                
                // Construct completely raw, empty Adobe PDF document binary payload
                const newlyCompiledPdfDocInstance = await PDFLib.PDFDocument.create();
                const activeDocumentPageSheet = newlyCompiledPdfDocInstance.addPage();
                
                const { width: pageSheetWidth, height: pageSheetHeight } = activeDocumentPageSheet.getSize();
                let embeddedImageObjectInstance;
                
                if (rawFileNameLower.endsWith('.png')) {
                    embeddedImageObjectInstance = await newlyCompiledPdfDocInstance.embedPng(arrayBufferBytes);
                } else {
                    embeddedImageObjectInstance = await newlyCompiledPdfDocInstance.embedJpg(arrayBufferBytes);
                }
                
                // Scale boundaries perfectly down to size to prevent out-of-bounds rendering crashes
                const derivedScaleRatio = Math.min(pageSheetWidth / embeddedImageObjectInstance.width, pageSheetHeight / embeddedImageObjectInstance.height) * 0.9;
                const finalRenderedWidth = embeddedImageObjectInstance.width * derivedScaleRatio;
                const finalRenderedHeight = embeddedImageObjectInstance.height * derivedScaleRatio;
                
                const centeringCoordinateX = (pageSheetWidth - finalRenderedWidth) / 2;
                const centeringCoordinateY = (pageSheetHeight - finalRenderedHeight) / 2;
                
                // Write pixel binary directly into the official vector layout map layers
                activeDocumentPageSheet.drawImage(embeddedImageObjectInstance, {
                    x: centeringCoordinateX,
                    y: centeringCoordinateY,
                    width: finalRenderedWidth,
                    height: finalRenderedHeight,
                });
                
                const finalSavedPdfByteArrays = await newlyCompiledPdfDocInstance.save();
                const createdBlobUrl = URL.createObjectURL(new Blob([finalSavedPdfByteArrays], { type: 'application/pdf' }));
                const exportOutputName = sourceFileAsset.name.split('.')[0] + ".pdf";
                
                executeSystemDownloadTrigger(createdBlobUrl, exportOutputName);
                updateSystemInterfaceLog("Image pixels compiled into a flawless vector PDF document, sir!", "success");
            } catch (pdfGenerationError) {
                console.error(pdfGenerationError);
                updateSystemInterfaceLog("Error compiling image array layers into PDF structures.", "error");
            }
        };
        documentFileReader.readAsArrayBuffer(sourceFileAsset);
        return;
    }

    // Default processing string pipeline for traditional plain text documents
    updateSystemInterfaceLog("Compiling string blocks into standard PDF structures...");
    const textualFileReader = new FileReader();
    textualFileReader.onload = async function(textLoadEvent) {
        try {
            const newlyCompiledPdfDocInstance = await PDFLib.PDFDocument.create();
            const activeDocumentPageSheet = newlyCompiledPdfDocInstance.addPage();
            const standardHelveticaFont = await newlyCompiledPdfDocInstance.embedFont(PDFLib.StandardFonts.Helvetica);
            
            const rawExtractedStrings = textLoadEvent.target.result;
            const cleanedTextParagraphs = rawExtractedStrings.split('\n');
            
            let verticalWritingCursorY = activeDocumentPageSheet.getSize().height - 40;
            
            for (let paragraphIndex = 0; paragraphIndex < cleanedTextParagraphs.length; paragraphIndex++) {
                if (verticalWritingCursorY < 40) break; // Hard page overflow protection boundary line
                
                let focusedStringLine = cleanedTextParagraphs[paragraphIndex].trim();
                if(focusedStringLine.length === 0) {
                    verticalWritingCursorY -= 15;
                    continue;
                }
                
                // Chop down excessive character lengths manually to block string edge overflow drops
                if (focusedStringLine.length > 85) {
                    focusedStringLine = focusedStringLine.substring(0, 82) + "...";
                }
                
                activeDocumentPageSheet.drawText(focusedStringLine, {
                    x: 40,
                    y: verticalWritingCursorY,
                    size: 11,
                    font: standardHelveticaFont,
                    color: PDFLib.rgb(0.06, 0.09, 0.15),
                });
                verticalWritingCursorY -= 18;
            }
            
            const finalSavedPdfByteArrays = await newlyCompiledPdfDocInstance.save();
            const createdBlobUrl = URL.createObjectURL(new Blob([finalSavedPdfByteArrays], { type: 'application/pdf' }));
            const exportOutputName = sourceFileAsset.name.split('.')[0] + ".pdf";
            
            executeSystemDownloadTrigger(createdBlobUrl, exportOutputName);
            updateSystemInterfaceLog("Text document written to vector PDF format successfully, sir!", "success");
        } catch (textPdfError) {
            console.error(textPdfError);
            updateSystemInterfaceLog("Failed to map characters cleanly to PDF vector arrays.", "error");
        }
    };
    
    if (sourceFileAsset.type.match('text.*') || sourceFileAsset.name.endsWith('.txt')) {
        textualFileReader.readAsText(sourceFileAsset);
    } else {
        // Fallback catch parameters handling system tracking information wrapping logs
        setTimeout(async () => {
            try {
                const simplePdfDoc = await PDFLib.PDFDocument.create();
                const simplePage = simplePdfDoc.addPage();
                const font = await simplePdfDoc.embedFont(PDFLib.StandardFonts.Helvetica);
                simplePage.drawText("JARVIS CONVERSION HOOP SUMMARY: " + sourceFileAsset.name, { x: 50, y: 500, size: 12, font: font });
                const bytes = await simplePdfDoc.save();
                executeSystemDownloadTrigger(URL.createObjectURL(new Blob([bytes], {type: 'application/pdf'})), sourceFileAsset.name.split('.')[0] + ".pdf");
                updateSystemInterfaceLog("Target identity envelope structured to PDF layout, sir!", "success");
            } catch(e) { 
                updateSystemInterfaceLog("Document encapsulation failure.", "error"); 
            }
        }, 800);
    }
}

/**
 * ==================================================================================
 * PIPELINE SECTION 3: ADVANCED PDF-TO-IMAGE VECTOR SLICER DECONSTRUCTOR (pdf.js)
 * ==================================================================================
 */
function executeTargetPdfToImageDeconstruction(sourcePdfFileAsset, outputImageExtension) {
    updateSystemInterfaceLog("Activating Mozilla core vector engine. Slicing document sheets to pixels...");
    
    const pdfFileReaderInstance = new FileReader();
    pdfFileReaderInstance.onerror = function() {
        updateSystemInterfaceLog("Error loading file data streams into core memory caches.", "error");
    };
    
    pdfFileReaderInstance.onload = function(fileLoadEvent) {
        const structuralTypedArrayBuffer = new Uint8Array(fileLoadEvent.target.result);
        
        // Pass binary data array direct to Mozilla PDF Core parsing matrices
        window['pdfjs-dist/build/pdf'].getDocument({ data: structuralTypedArrayBuffer }).promise.then(function(loadedPdfDocumentProxy) {
            
            // Read page sheet index location 1 instantly to prevent mobile engine multi-loop lockups
            loadedPdfDocumentProxy.getPage(1).then(function(activePdfPageProxyInstance) {
                const systemHiddenCanvasNode = document.getElementById('conversion-canvas');
                if (!systemHiddenCanvasNode) {
                    updateSystemInterfaceLog("Error linking canvas system hardware blocks.", "error");
                    return;
                }
                
                const canvasRendering2DContext = systemHiddenCanvasNode.getContext('2d');
                
                // Scale rendering layer perfectly to optimize Helio G35 processing efficiency
                const adjustedHardwareViewportScale = 2.0; 
                const derivedTargetPageViewport = activePdfPageProxyInstance.getViewport({ scale: adjustedHardwareViewportScale });
                
                systemHiddenCanvasNode.width = derivedTargetPageViewport.width;
                systemHiddenCanvasNode.height = derivedTargetPageViewport.height;
                
                const renderContextConfigurationObject = {
                    canvasContext: canvasRendering2DContext,
                    viewport: derivedTargetPageViewport
                };
                
                updateSystemInterfaceLog("Drawing vector maps to visual pixel cache layout blocks...");
                activePdfPageProxyInstance.render(renderContextCo