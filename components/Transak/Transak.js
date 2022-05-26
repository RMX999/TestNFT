import transakSDK from "@transak/transak-sdk";
import { useState } from 'react';

var settings;

function componentDidMount() {
    settings = {
        apiKey: '7869fcaa-8d86-4cb6-8d4e-dd7d121b139b',  // Your API Key
        environment: 'STAGING', // STAGING/PRODUCTION
        fiatCurrency: 'USD',
        defaultCryptoCurrency: 'USDC',
        themeColor: '000000', // App theme color
        hostURL: window.location.origin,
        widgetHeight: "700px",
        widgetWidth: "500px",
    }
}

function openTransak() {
    componentDidMount()
    const transak = new transakSDK(settings);

    transak.init();
}


export default function Transak() {
    return (
        <div>
            <button className="text-black-300 px-3 py-2 font-medium" onClick={() => openTransak()}>
                    Buy Crypto
                </button>
        </div>
    );
}
