import React, { useState } from 'react'
import '../App.css'
import data from '../data/data'
import { formatString, formatDate } from '../utils/formatter';
import {CopyToClipboard} from 'react-copy-to-clipboard';



const Transactions = () => {

  const [activeTab, setActiveTab] = useState('All')
  const [copiedStatuses, setCopiedStatuses] = useState({});

  const handleCopy = (hash) => {
    const newStatuses = { ...copiedStatuses, [hash]: true };
    setCopiedStatuses(newStatuses);
    setTimeout(() => {
      setCopiedStatuses({ ...newStatuses, [hash]: false }); // Remove the copied status after a delay
    }, 2000);
  };

  const tabs = ['All', 'declare', 'deploy', 'deploy_account', 'invoke', 'l1_handler'];

  console.log(activeTab)

  const filteredTransactions = activeTab === 'All' 
    ? data 
    : data.filter(transaction => transaction.type === activeTab);

  console.log(filteredTransactions)

  return (
    <div class="transaction-container">
      <h3>Transactions</h3>
      <p className='text-2'>A list of transactions on Starknet</p>

      <div className="flex max-w-md mt-12 rounded-tl-md rounded-bl-md ">
          {tabs.map(tab => (
              <button
                  key={tab}
                  className={`flex-1 py-2 px-3 text-white cursor-pointer text-center ${activeTab === tab ? 'bg-activeColor' : 'bg-customGray hover:bg-activeColor'} border border-activeColor text-base`}
                  onClick={() => setActiveTab(tab)}
              >
                  {tab}
              </button>
          ))}
      </div>

    <div className="container pt-8">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-customGray text-white">
          <thead>
            <tr>
              <th className="border-b border-t border-customTableBorder text-customGrayText px-4 py-2 text-base">{`Status`.toUpperCase()}</th>
              <th className="border-b border-t border-customTableBorder text-customGrayText px-4 py-2 text-base">{`Hash`.toUpperCase()}</th>
              <th className="border-b border-t border-customTableBorder text-customGrayText px-4 py-2 text-base">{`Type`.toUpperCase()}</th>
              <th className="border-b border-t border-customTableBorder text-customGrayText px-4 py-2 text-base">{`Operations`.toUpperCase()}</th>
              <th className="border-b border-t border-customTableBorder text-customGrayText px-4 py-2 text-base">{`Block`.toUpperCase()}</th>
              <th className="border-b border-t border-customTableBorder text-customGrayText px-4 py-2 text-base">{`Age`.toUpperCase()}</th>
            </tr>
          </thead>

          <tbody>
            {filteredTransactions.map((transaction, index) => (
              <tr key={transaction.hash + index}>
                {console.log(transaction)}
                <td className=" text-center	border-b border-customTableBorder px-4 py-2">{transaction.status}</td>
                <td className=" text-center	border-b border-customTableBorder px-4 py-2 text-customTextBlue ">
                  <div className='flex items-center justify-center'>
                    <p>{formatString(transaction.hash)}</p>
                    <CopyToClipboard text={transaction.hash} onCopy={() => handleCopy(transaction.hash)}>
                      <img src="/copy-white.png" alt="copy" className=' ml-1 mt-1 w-4 h-4 change-color'/>
                    </CopyToClipboard>
                    {copiedStatuses[transaction.hash] && <p className="ml-2 bg-customGray text-white border border-customTableBorder px-2 py-1 text-base rounded">Copied!</p>}
                  </div>
                  
                </td>
                <td className=" text-center	border-b border-customTableBorder px-4 py-2 w-40">
                  <p className={
                    transaction.type === 'invoke' ? 'rounded border border-invokeBorder bg-invokeBackground text-invokeText text-base '
                    : 
                    transaction.type === 'declare' ? 'rounded border border-declareBorder bg-declareBackground text-declareText text-base'
                    : 
                    transaction.type === 'deploy' ? 'rounded border border-deployBorder bg-deployBackground text-deployText text-base'
                    :
                    transaction.type === 'deploy_account' ? 'rounded border border-deployAccountBorder bg-deployAccountBackground text-deployAccountText text-base'
                    : 
                    transaction.type === 'l1_handler' ? 'rounded border border-l1HandlerBorder bg-l1HandlerBackground text-l1HandlerText text-base'
                    :
                    'rounded border border-invokeBorder bg-invokeBackground text-invokeText text-base'
                    }>
                      {transaction.type.toUpperCase()}
                  </p>
                </td>
                <td className=" text-center	border-b border-customTableBorder px-4 py-2 text-customTextBlue">{'--'}</td>
                <td className=" text-center	border-b border-customTableBorder px-4 py-2">{transaction.block}</td>
                <td className=" text-center	border-b border-customTableBorder px-4 py-2">{formatDate(1717877003933)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

export default Transactions
