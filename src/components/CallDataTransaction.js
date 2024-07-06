import React, { useState } from 'react';
import Web3 from 'web3';



const CallDataTransaction = () => {
    const [activeInputTab, setActiveInputTab] = useState('Hex')
    const [activeData, setActiveData] = useState('Raw');
    const web3 = new Web3();
    


    const data = [
        { input: "0", value: "0x01" },
        { input: "1", value: "0x049d36570d4e46f48e99674bd3fcc84644ddd6b97c741b1562b82f9e004dc7" },
        { input: "2", value: "0x83afd3f4caedc6eebf44246fe54e38c95e3179a5ec9ea81740eca5b482d12e" },
        { input: "3", value: "0x03" },
        { input: "4", value: "0x046d60740fd06cb18e568f9e2935daa50f9d3bf6bc5c3b8e7a81d3bd8da425bf" },
        { input: "5", value: "0x038d7ea4c67fca" },
        { input: "6", value: "0x00" }
    ];

    const handleInputTabChange = (tab) => {
        setActiveInputTab(tab)
    }
    const handleRawDecodedTabChanges = (tab) => {
        setActiveData(tab)
    }

    const hexToDec = (hex) => web3.utils.hexToNumberString(hex);
    const decToHex = (dec) => web3.utils.toHex(dec);
    const hexToText = (hex) => web3.utils.hexToAscii(hex);
    const textToHex = (text) => web3.utils.utf8ToHex(text);

    // const hexToDec = (hex) => ethers.BigNumber.from(hex).toString();
    // const decToHex = (dec) => ethers.BigNumber.from(dec).toHexString();
    // const hexToText = (hex) => ethers.utils.parseBytes32String(hex);
    // const textToHex = (text) => ethers.utils.formatBytes32String(text);

    // const hexToDec = (hex) => BigNumber.from(hex).toString();
    // const decToHex = (dec) => BigNumber.from(dec).toHexString();
    // const hexToText = (hex) => {
    //     try {
    //         return Buffer.from(hex.replace(/^0x/, ''), 'hex').toString('utf8');
    //     } catch {
    //         return '';
    //     }
    // };
    // const textToHex = (text) => `0x${Buffer.from(text, 'utf8').toString('hex')}`;

    const convertData = (data) => {
        return data.map((item) => {
        let convertedValue;
        switch (activeInputTab) {
            case 'Dec':
            convertedValue = hexToDec(item.value);
            break;
            case 'Text':
            convertedValue = hexToText(item.value);
            break;
            case 'Hex':
            default:
            convertedValue = item.value;
        }
        return { ...item, value: convertedValue };
        });
    };

    const convertedData = convertData(data);
    console.log(convertedData)

    return (
        <div>
            <div className="flex flex-row space-x-4">
                <div className="flex">
                    <button
                        className={`py-2 px-5 text-white cursor-pointer text-center ${activeInputTab === 'Hex' ? 'bg-activeColor' : 'bg-customGray hover:bg-hoveractiveColor'} border border-activeColor text-base`}
                        onClick={() => handleInputTabChange('Hex')}
                    >
                        Hex
                    </button>
                    <button
                        className={`py-2 px-5 text-white cursor-pointer text-center ${activeInputTab === 'Dec' ? 'bg-activeColor' : 'bg-customGray hover:bg-hoveractiveColor'} border border-activeColor text-base`}
                        onClick={() => handleInputTabChange('Dec')}
                    >
                        Dec
                    </button>
                    <button
                        className={`py-2 px-5 text-white cursor-pointer text-center ${activeInputTab === 'Text' ? 'bg-activeColor' : 'bg-customGray hover:bg-hoveractiveColor'} border border-activeColor text-base`}
                        onClick={() => handleInputTabChange('Text')}
                    >
                        Text
                    </button>
                </div>
                <div className="flex">
                    <button
                        className={`py-2 px-5 text-white cursor-pointer text-center ${activeData === 'Decoded' ? 'bg-activeColor' : 'bg-customGray hover:bg-hoveractiveColor'} border border-activeColor text-base`}
                        onClick={() => handleRawDecodedTabChanges('Decoded')}
                    >
                        Decoded
                    </button>
                    <button
                        className={`py-2 px-5 text-white cursor-pointer text-center ${activeData === 'Raw' ? 'bg-activeColor' : 'bg-customGray hover:bg-hoveractiveColor'} border border-activeColor text-base`}
                        onClick={() => handleRawDecodedTabChanges('Raw')}
                    >
                        Raw
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto mt-4">
                <table className="min-w-full bg-customGray text-customGrayText">
                    <thead>
                    <tr>
                        <th className="border-b  border-t border-customTableBorder text-left px-4 py-2 text-base">INPUT</th>
                        <th className="border-b  border-t border-customTableBorder text-left px-4 py-2 text-base">VALUE</th>
                    </tr>
                    </thead>
                    <tbody>
                    {convertedData.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-800">
                            <td className="border-b border-customTableBorder px-4 py-2 text-yellow-500 text-base">{index}</td>
                            <td className="border-b border-customTableBorder px-4 py-2">
                                <div className="flex justify-between">
                                <span className="text-green-300 text-base">{`"${item.value}"`}</span>
                                <button className="ml-2 p-1" onClick={() => navigator.clipboard.writeText(item.value)}>
                                    <img src="/copy-white.png" alt="copy" className=' ml-1 mt-1 w-4 h-4 change-color' />
                                </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CallDataTransaction
