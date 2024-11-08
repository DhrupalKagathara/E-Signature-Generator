import React, { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';

const SignaturePad = () => {
  const sigCanvas = useRef(null);

  const clearSignature = () => {
    sigCanvas.current.clear();
  };

  const saveSignature = () => {
    if (!sigCanvas.current.isEmpty()) {
      const signatureDataUrl = sigCanvas.current.toDataURL("image/jpeg");
      
      const downloadLink = document.createElement("a");
      downloadLink.href = signatureDataUrl;
      downloadLink.download = "signature.jpeg";
      downloadLink.click();
    } else {
      console.log("Signature pad is empty.");
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md w-full max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Signature Pad</h2>
      <div className="border-2 border-gray-300 bg-white rounded-md mb-4 w-full h-64">
        <SignatureCanvas
          ref={sigCanvas}
          backgroundColor="white"
          penColor="black"
          canvasProps={{
            className: "w-full h-full rounded-md",
          }}
        />
      </div>
      <div className="flex space-x-4">
        <button
          onClick={clearSignature}
          className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600"
        >
          Clear
        </button>
        <button
          onClick={saveSignature}
          className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600"
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default SignaturePad;
