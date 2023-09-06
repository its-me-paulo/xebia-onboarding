import * as React from 'react';
import { Html5Qrcode, Html5QrcodeResult } from 'html5-qrcode';
import { Html5QrcodeError } from 'html5-qrcode/esm/core';
import { useState } from "react"
import './XDexComponent.css'
import { Button } from '@mui/material';
import { LevelKeysMap } from '../../contexts/constants/LevelKeys';
import { useNavigate } from 'react-router-dom';

export interface IXDexComponentProps {
}

export function XDexComponent(props: IXDexComponentProps) {
    const [scanResult, setScanResult] = useState<null | string>(null)
    let html5QrCode: Html5Qrcode | undefined = undefined
    const scannerConfig = { fps: 2, qrBox: { width: "30vw", height: "70vh" } }
    const navigate = useNavigate()

    React.useEffect(() => {
        html5QrCode = scanResult
            ? undefined
            : html5QrCode = new Html5Qrcode("reader")

        return () => {
            if (html5QrCode?.isScanning) {
                stopScanning()
            }
        }
    })

    const scanQrCode = () => {
        html5QrCode?.isScanning
            ? stopScanning()
            : startScanning()

    }

    const startScanning = () => {
        html5QrCode?.start({ facingMode: "environment" }, scannerConfig, success, error)
    }


    const stopScanning = () => {
        html5QrCode?.stop()
    }

    const success = (decodedText: string, result: Html5QrcodeResult) => {
        if (decodedText == LevelKeysMap["level1Key"]) {
            setScanResult(decodedText)
            navigate("/challenge")
        } else {
            alert("Not scanning the correct QR code")
        }

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
                    <div id="reader-view">
                        <div id="reader" />
                    </div>
                    <Button onClick={scanQrCode} fullWidth><div id="xDex"></div></Button>
                </>
            }
        </>
    );
}
