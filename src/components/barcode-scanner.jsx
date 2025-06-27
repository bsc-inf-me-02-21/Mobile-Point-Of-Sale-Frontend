import React, { useEffect, useRef, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import "../styles/barcode-scanner.css";

const BarcodeScanner = ({ 
  onScanSuccess, 
  onScanFailure, 
  isScanning
}) => {
  const scannerRef = useRef(null);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const containerRef = useRef(null);
  
  // Create a stable reference to callbacks
  const callbacksRef = useRef({ onScanSuccess, onScanFailure });
  useEffect(() => {
    callbacksRef.current = { onScanSuccess, onScanFailure };
  }, [onScanSuccess, onScanFailure]);

  useEffect(() => {
    if (!isScanning || !containerRef.current) return;
    
    // Initialize scanner only once
    if (!scannerRef.current) {
      const containerId = `scanner-container-${Date.now()}`;
      containerRef.current.id = containerId;
      
      scannerRef.current = new Html5QrcodeScanner(
        containerId,
        {
          qrbox: { width: 250, height: 150 },
          fps: 10,
          qrCodeDecoder: {
            readers: ["ean_reader", "code_128_reader", "upc_reader", "qr_code_reader"]
          }
        },
        false
      );
      
      scannerRef.current.render(
        decodedText => callbacksRef.current.onScanSuccess(decodedText),
        error => {
          // Ignore common non-critical errors
          if (!error.includes("NotFoundException") && 
              !error.includes("NoMultiFormatReader")) {
            callbacksRef.current.onScanFailure?.(error);
          }
        }
      );
      
      // Set a timeout to detect if camera fails to start
      const cameraTimeout = setTimeout(() => {
        if (!isCameraReady) {
          callbacksRef.current.onScanFailure?.("Camera initialization timed out");
        }
      }, 5000);
      
      return () => clearTimeout(cameraTimeout);
    }
    
    // Cleanup when component unmounts or scanning stops
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
    <div className="scanner-viewport" ref={containerRef}>
      {isScanning && (
        <div className="scanner-active">
          <div className="scanner-element"></div>
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