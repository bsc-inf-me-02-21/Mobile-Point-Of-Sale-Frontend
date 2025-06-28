import React, { useEffect, useRef } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import "../styles/barcode-scanner.css";

const BarcodeScanner = ({ 
  onScanSuccess, 
  onScanFailure, 
  isScanning
}) => {
  const scannerRef = useRef(null);
  const containerIdRef = useRef(`scanner-container-${Math.random().toString(36).slice(2, 9)}`);
  
  // Handle scanning lifecycle
  useEffect(() => {
    if (!isScanning) return;
    
    const initScanner = () => {
      // Clean up any existing scanner first
      if (scannerRef.current) {
        scannerRef.current.clear().catch(handleCleanupError);
      }

      // Initialize new scanner
      const scanner = new Html5QrcodeScanner(
        containerIdRef.current,
        {
          qrbox: { width: 250, height: 150 },
          fps: 10,
          qrCodeDecoder: {
            readers: [
              "ean_reader",         // EAN/UPC
              "code_128_reader",    // Code 128
              "upc_reader",         // UPC
              "qr_code_reader"      // QR Codes
            ]
          }
        },
        false
      );

      scanner.render(
        decodedText => onScanSuccess(decodedText),
        error => {
          // Ignore common non-critical errors
          if (!error.includes("NotFoundException") && 
              !error.includes("NoMultiFormatReader")) {
            onScanFailure?.(error);
          }
        }
      );
      
      scannerRef.current = scanner;
    };

    initScanner();

    // Cleanup on unmount or when scanning stops
    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear().catch(handleCleanupError);
        scannerRef.current = null;
      }
    };
  }, [isScanning, onScanSuccess, onScanFailure]);

  // Handle cleanup errors gracefully
  const handleCleanupError = (error) => {
    // Ignore DOM removal errors
    const ignorableErrors = [
      "NotFoundException",
      "NotFoundError",
      "not a child",
      "removeChild",
      "Node to be removed"
    ];
    
    if (!ignorableErrors.some(msg => error.message.includes(msg))) {
      console.error("Scanner cleanup error:", error);
    }
  };

  return (
    <div className="scanner-viewport">
      {isScanning && (
        <div className="scanner-active">
          <div 
            id={containerIdRef.current} 
            className="scanner-element"
          ></div>
          
          <div className="scanner-overlay">
            <div className="scanner-frame">
              <div className="laser"></div>
              <div className="scanning-indicator">
                <div className="spinner"></div>
                <p>Scanning barcode...</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BarcodeScanner;