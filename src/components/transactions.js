import React, { useEffect, useState, useRef } from 'react'
import { fetchTransactions } from '../services/api';
import '../App.css'
import { formatString, formatDate } from '../utils/formatter';
import {CopyToClipboard} from 'react-copy-to-clipboard';
//import SkeletonRow from './Skeleton';
//import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useNavigate } from 'react-router-dom';




const Transactions = () => {

  const [activeTab, setActiveTab] = useState('All')
  const [copiedHashStatuses, setCopiedHashStatuses] = useState({});
  const [copiedBlockStatuses, setCopiedBlockStatuses] = useState({})
  const [transactions, setTransactions] = useState([]);
  //const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const isFetching = useRef(false); // Ref to track if a fetch is in progress


  const loadTransactions = async () => {
    if (isFetching.current) return; // Prevent duplicate calls
    isFetching.current = true;
    setIsLoading(true);
    try {
      const data = await fetchTransactions(page, 20);
      setTransactions((prev) => [...prev, ...data]);

      if (data.length === 0 || data.length < 20) {
        setHasMore(false);
      } else {
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
    isFetching.current = false; // Reset fetch tracker
  };

  useEffect(() => {
    loadTransactions();
  }, []); // Initial load


  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.offsetHeight) {
        if (!isLoading && hasMore) {
          loadTransactions();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading, hasMore]); // Add dependencies to control re-renders



  const handleTransactionClick = (transaction) => {
    if (transaction.type === 'INVOKE' && transaction.version === '0x1' && transaction.status === 'ACCEPTED_ON_L2') {
      navigate(`/transaction/${transaction._id}`, {state: {hash: transaction.transaction_hash, block_number: transaction.block_number}});
    }
  };


  const tabs = ['All', 'declare', 'deploy', 'deploy_account', 'invoke', 'l1_handler'];

  const copyHash = (hash) => {
    const newHashes = { ...copiedHashStatuses, [hash]: true };
    setCopiedHashStatuses(newHashes);
    setTimeout(() => {
      setCopiedHashStatuses({ ...newHashes, [hash]: false });
    }, 2000);
  };

  const copyBlockNumber = (hash) => {
    const newBlocks = { ...copiedBlockStatuses, [hash]: true };
    setCopiedBlockStatuses(newBlocks);
    setTimeout(() => {
      setCopiedBlockStatuses({ ...newBlocks, [hash]: false });
    }, 2000);
  }

  
  // const filteredTransactions = activeTab === 'All' 
  //   ? transactions 
  //   : transactions.filter(transaction => {
  //     return (transaction.type.toLowerCase() === activeTab)
  //   });

  const filteredTransactions = transactions;



  return (
    <div className="transaction-container">
      <h3>Transactions</h3>
      <p className='text-2'>A list of transactions on Starknet</p>

      <div className="flex max-w-md mt-12 rounded-tl-md rounded-bl-md ">
          {tabs.map(tab => (
              <button
                  key={tab}
                  className={`flex-1 py-2 px-3 text-white cursor-pointer text-center ${activeTab === tab ? 'bg-activeColor' : 'bg-customGray hover:bg-hoveractiveColor'} border border-activeColor text-base`}
                  onClick={() => {
                    setActiveTab(tab);
                    setPage(1);
                    setTransactions([]);
                    setHasMore(true);
                  }}
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
              <th className="border-b border-t text-left border-customTableBorder text-customGrayText px-4 py-2 text-base">{`Status`.toUpperCase()}</th>
              <th className="border-b border-t text-left border-customTableBorder text-customGrayText px-4 py-2 text-base">{`Hash`.toUpperCase()}</th>
              <th className="border-b border-t text-left border-customTableBorder text-center text-customGrayText px-4 py-2 text-base">{`Type`.toUpperCase()}</th>
              <th className="border-b border-t text-left border-customTableBorder text-center text-customGrayText px-4 py-2 text-base">{`Operations`.toUpperCase()}</th>
              <th className="border-b border-t text-left border-customTableBorder text-customGrayText px-4 py-2 text-base">{`Block`.toUpperCase()}</th>
              <th className="border-b border-t text-left border-customTableBorder text-customGrayText px-4 py-2 text-base">{`Age`.toUpperCase()}</th>
            </tr>
          </thead>

          <tbody>
            {filteredTransactions.map((transaction, index) => (
              <tr key={transaction.transaction_hash + index} >
               
                  <td className=" border-b border-customTableBorder px-4 py-2 text-base">{transaction.status}</td>
                
                  <td className=" border-b border-customTableBorder px-4 py-2 text-customTextBlue ">
                    <div className='flex cursor-pointer' >
                      <p onClick={() => handleTransactionClick(transaction)}>{formatString(transaction.transaction_hash)}</p>
                      <CopyToClipboard text={transaction.transaction_hash} onCopy={() => copyHash(transaction.transaction_hash)}>
                        <img src="/copy-white.png" alt="copy" className=' ml-1 mt-1 w-4 h-4 change-color'/>
                      </CopyToClipboard>
                      {copiedHashStatuses[transaction.transaction_hash] && <p className="ml-2 bg-customGray text-white border border-customTableBorder px-2 py-1 text-base rounded">Copied!</p>}
                    </div>
                    
                  </td>
               
                  <td className="border-b border-customTableBorder text-center px-4 py-2 w-40">
                    <p className={
                      transaction.type.toLowerCase() === 'invoke' ? 'rounded border border-invokeBorder bg-invokeBackground text-invokeText text-base '
                      : 
                      transaction.type.toLowerCase() === 'declare' ? 'rounded border border-declareBorder bg-declareBackground text-declareText text-base'
                      : 
                      transaction.type.toLowerCase() === 'deploy' ? 'rounded border border-deployBorder bg-deployBackground text-deployText text-base'
                      :
                      transaction.type.toLowerCase() === 'deploy_account' ? 'rounded border border-deployAccountBorder bg-deployAccountBackground text-deployAccountText text-base'
                      : 
                      transaction.type.toLowerCase() === 'l1_handler' ? 'rounded border border-l1HandlerBorder bg-l1HandlerBackground text-l1HandlerText text-base'
                      :
                      'rounded border border-invokeBorder bg-invokeBackground text-invokeText text-base'
                      }>
                        {transaction.type.toUpperCase()}
                    </p>
                  </td>
               
                  <td className="	border-b border-customTableBorder text-center px-4 py-2 text-customTextBlue">{'--'}</td>
                
                  <td className=" border-b border-customTableBorder px-4 py-2 text-customTextBlue ">
                    <div className='flex '>
                      <p>{transaction.block_number}</p>
                      <CopyToClipboard text={transaction.block_number} onCopy={() => copyBlockNumber(transaction.transaction_hash, transaction.block_number)}>
                        <img src="/copy-white.png" alt="copy" className=' ml-1 mt-1 w-4 h-4 change-color'/>
                      </CopyToClipboard>
                      {copiedBlockStatuses[transaction.transaction_hash] && <p className="ml-2 bg-customGray text-white border border-customTableBorder px-2 py-1 text-base rounded">Copied!</p>}
                    </div>
                    
                  </td>
                
                  <td className=" border-b border-customTableBorder px-4 py-2 text-lg">{formatDate(transaction.fetchedAt)}</td>
                
              </tr>
            ))}
          </tbody>
          {isLoading &&  <p>Loading...</p>}
          {!hasMore && <div>No more items to load.</div>}
        </table>
      </div>
    </div>
    </div>
  )
}

export default Transactions
