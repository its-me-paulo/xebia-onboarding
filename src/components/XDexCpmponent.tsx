import * as React from 'react';
import { Html5Qrcode, Html5QrcodeResult, Html5QrcodeScanner, QrcodeSuccessCallback } from 'html5-qrcode';
import { Html5QrcodeError } from 'html5-qrcode/esm/core';
import { useState } from "react"

export interface IXDexComponentProps {
}

export function XDexComponent(props: IXDexComponentProps) {
    const [scanResult, setScanResult] = useState<null | string>(null)
    let html5QrCode: Html5Qrcode | undefined = undefined
    const scannerConfig = { fps: 2, qrBox: { width: 250, height: 250 } }

    React.useEffect(() => {
        html5QrCode = scanResult 
        ? undefined
        : html5QrCode = new Html5Qrcode("reader")
    })

    const startScanning = () => {
        html5QrCode?.start({ facingMode: "environment" }, scannerConfig, success, error)
    }


    const stopScanning = () => {
        html5QrCode?.stop()
    }

    const success = (decodedText: string, result: Html5QrcodeResult) => {
        setScanResult(decodedText)
        stopScanning()
    }

    const error = (errorMessage: string, error: Html5QrcodeError) => {
        console.warn(error)
    }

    return (
        <>
            {scanResult
                ? <h2>{scanResult}</h2>
                : <>
                    <div id="reader" style={{ width: "40vw" }} />
                    <button onClick={startScanning}>Start Scanning</button>
                    <button onClick={stopScanning}>Stop Scanning</button>
                </>
            }
        </>
    );
}
