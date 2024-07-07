import React, { useState } from 'react';
import Web3 from 'web3';



const CallDataTransaction = (props) => {
    const [activeInputTab, setActiveInputTab] = useState('Hex')
    const [activeData, setActiveData] = useState('Raw');
    const web3 = new Web3();
    const {calldata} = props
                                                                                                                    

    const handleInputTabChange = (tab) => {
        setActiveInputTab(tab)
    }
    const handleRawDecodedTabChanges = (tab) => {
        setActiveData(tab)
    }


    const hexToDec = (hex) => web3.utils.hexToNumberString(hex);
    const decToHex = (dec) => web3.utils.toHex(dec);
    const hexToText = (hex) => {
        try {
            const paddedHex = hex.length % 2 !== 0 ? `0${hex}` : hex;
            const str = web3.utils.hexToAscii(paddedHex);
            return str.replace(/\u0000/g, ''); 
        } catch (error) {
            ;
            return '';
        }
    };
    const textToHex = (text) => web3.utils.utf8ToHex(text);

    // const hexToDec = (hex) => ethers.BigNumber.from(hex).toString();
    // const decToHex = (dec) => ethers.BigNumber.from(dec).toHexString();
    //const hexToText = (hex) => ethers.toUtf8String(hex);
    // const textToHex = (text) => ethers.utils.formatBytes32String(text);

    // const hexToDec = (hex) => BigNumber.from(hex).toString();
    // const decToHex = (dec) => BigNumber.from(dec).toHexString();
    

    const convertData = (data) => {
        if (data !== undefined && data !== null && data.length > 0){
            return data.map((item) => {
                let convertedValue;
                switch (activeInputTab) {
                    case 'Dec':
                    convertedValue = hexToDec(item);
                    break;
                    case 'Text':
                    convertedValue = hexToText(item);
                    break;
                    case 'Hex':
                    default:
                    convertedValue = item;
                }
                return convertedValue ;
            });
        }
        
    };

    const convertedData = convertData(calldata);
    

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
                    {convertedData !== undefined && convertedData !== null && convertedData.length > 0 && convertedData.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-800">
                            <td className="border-b border-customTableBorder px-4 py-2 text-yellow-500 text-base">{index}</td>
                            <td className="border-b border-customTableBorder px-4 py-2">
                                <div className="flex justify-between">
                                <span className="text-green-300 text-base">{`"${item}"`}</span>
                                <button className="ml-2 p-1" onClick={() => navigator.clipboard.writeText(item)}>
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
