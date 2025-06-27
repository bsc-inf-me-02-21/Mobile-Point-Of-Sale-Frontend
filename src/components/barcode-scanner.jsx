import React, { useEffect, useRef } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import "../styles/barcode-scanner.css";

const BarcodeScanner = ({ 
  onScanSuccess, 
  onScanFailure, 
  isScanning
}) => {
  const scannerRef = useRef(null);
  const callbacksRef = useRef({ onScanSuccess, onScanFailure });

  // Update callbacks on every render
  useEffect(() => {
    callbacksRef.current = { onScanSuccess, onScanFailure };
  });

  // Handle scanning lifecycle
  useEffect(() => {
    if (!isScanning) return;
    
    const initScanner = () => {
      // Clean up any existing scanner first
      if (scannerRef.current) {
        scannerRef.current.clear().catch(console.error);
      }

      // Initialize new scanner with supported barcode formats
      const scanner = new Html5QrcodeScanner(
        "scanner-container",
        {
          qrbox: { width: 250, height: 150 },
          fps: 10,
          // Specify supported barcode formats explicitly
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
        decodedText => callbacksRef.current.onScanSuccess(decodedText),
        error => callbacksRef.current.onScanFailure?.(error)
      );
      
      scannerRef.current = scanner;
    };

    initScanner();

    // Cleanup on unmount or when scanning stops
    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear().catch(error => {
          if (!error.message.includes("NotFoundException")) {
            console.error("Scanner cleanup error:", error);
          }
        });
        scannerRef.current = null;
      }
    };
  }, [isScanning]);

  return (
    <div className="scanner-viewport">
      {isScanning && (
        <div className="scanner-active">
          <div id="scanner-container" className="scanner-element"></div>
          
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