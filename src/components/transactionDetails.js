import React, { useState, useEffect } from 'react';
import {   useLocation } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Tooltip from './Tooltip';
import StatusIndicator from './StatusIndicator';
import '../App.css'
import OverviewTab from './OverviewTab';
import { fetchTransactionData } from '../services/api';
import EventsTab from './EventsTab';

const TransactionDetails = () => {
  const {state} = useLocation()
  const [loading, setLoading] = useState(false)
  const [transactionData, setTransactionData] = useState({});
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('Overview');


  useEffect(() => {
    setLoading(true)
    fetchTransactionData(state.hash).then(res => {
        setTransactionData(res)
        setLoading(false)
    }).catch(error => {
        console.log(error)
    })
  }, []);



  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tabs = [
    { label: 'Overview' },
    { label: 'Events', count: transactionData?.events?.length },
    ];

  return (
    <div>
        {
            loading ? 
            <div className="loader">Loading...</div> 
            :
            <div className="transaction-container">
                <h3 className='mt-6'>Transactions</h3>
                <p className='mt-8 text-customGrayText text-lg'>HASH</p>
                <div className='flex cursor-pointer' >
                    <p className='text-white text-xl'>{state.hash}</p>
                    <CopyToClipboard text={state.hash} onCopy={handleCopy}>
                        <img src="/copy-white.png" alt="copy" className=' ml-1 mt-1 w-4 h-4 change-color'/>
                    </CopyToClipboard>
                    {copied && <span className="ml-2 text-green-500">Copied!</span>}
                </div>
                <div className="flex mt-8 w-96 justify-between	">
                    <div>
                        <div className="flex items-center space-x-1 ">
                            <span className="text-customGrayText text-lg">TYPE</span>
                            <Tooltip text="Transaction Type">
                                <img src="/question-mark.svg" alt="question mark" height={20} width={20}/>
                            </Tooltip>
                        </div>
                        <p className='text-center mt-1 w-20 rounded border border-invokeBorder bg-invokeBackground text-invokeText text-base'>{transactionData.type}</p>
                    </div> 
                    <div className="flex flex-col justify-center  ">
                        <span className="text-customGrayText text-lg">TIMESTAMP</span>
                        <span className="text-white text-xl">{new Date(transactionData?.timestamp *1000).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })} 
                            <span className="text-base ml-2">{new Date(transactionData?.timestamp * 1000).toLocaleTimeString()}</span>
                        </span>
                    </div>
                </div>
                <p className='mt-8 text-customGrayText text-lg'>{`Status`.toUpperCase()}</p>
                <div className="flex items-center mt-2">
                    <StatusIndicator text="Received" />
                    <div className="h-0.5 w-2 bg-customGreen"></div>
                    <StatusIndicator text="Accepted on L2" />
                    <div className="h-0.5 w-2 bg-customGreen"></div>
                    <div className="flex items-center justify-center h-10 w-10 border border-gray-400 rounded-full">
                        <div className="loader ease-linear rounded-full border-2 border-t-2 border-gray-200 h-6 w-6"></div>
                    </div>
                </div>
                <div className="flex space-x-4 mt-6">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            className={`flex items-center px-4 py-2 text-xl font-medium ${
                                activeTab === tab.label
                                ? 'text-white border-b-2 border-orange-400'
                                : 'text-customGrayText hover:text-white'
                            }`}
                            onClick={() => setActiveTab(tab.label)}
                        >
                            <span>{tab.label}</span>
                            {tab.count !== undefined && (
                                <span className="ml-2 flex items-center justify-center w-5 h-5 bg-gray-900 text-customGrayText rounded-full text-xs">
                                {tab.count}
                                </span>
                            )}
                        </button>
                    ))}
                </div>
                {
                    activeTab === 'Overview' && (<OverviewTab transactionData={transactionData}/>)
                }
                {
                    activeTab === 'Events' && (<EventsTab data={transactionData}/>)
                }

                
            </div>
        }
    </div>
  );
};

export default TransactionDetails;
