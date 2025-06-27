// src/components/BarcodeScanner.jsx
import React, { useEffect, useRef } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import "../styles/barcode-scanner.css";

const BarcodeScanner = ({ 
  onScanSuccess, 
  onScanFailure, 
  isScanning,
  onStopScanning
}) => {
  const scannerRef = useRef(null);
  
  // Initialize the scanner
  const initScanner = () => {
    if (!scannerRef.current) {
      scannerRef.current = new Html5QrcodeScanner(
        "scanner-container",
        {
          qrbox: { width: 250, height: 150 },
          fps: 10,
        },
        false
      );
      
      scannerRef.current.render(
        (decodedText) => onScanSuccess(decodedText),
        (errorMessage) => {
          if (onScanFailure) onScanFailure(errorMessage);
        }
      );
    }
  };

  // Stop scanning
  const stopScanning = () => {
    if (scannerRef.current) {
      scannerRef.current.clear().catch(error => {
        console.error("Failed to clear scanner", error);
      });
      scannerRef.current = null;
    }
  };

  // Handle scanning state changes
  useEffect(() => {
    if (isScanning) {
      initScanner();
    } else {
      stopScanning();
    }
    
    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear().catch(console.error);
      }
    };
  }, [isScanning]);

  return (
    <div className="scanner-viewport">
      {isScanning ? (
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
      ) : null}
    </div>
  );
};

export default BarcodeScanner;