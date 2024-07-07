import React,{ useState } from 'react'
import Tooltip from './Tooltip';
import CallDataTransaction from './CallDataTransaction';
import Web3 from 'web3';
import { formatDate } from '../utils/formatter';


const OverviewTab = (props) => {
    const [activeCallDataTab, setActiveCallDataTab] = useState('Transaction');
    const web3 = new Web3();
    const {transactionData} = props

    console.log(transactionData)
    let actualFee;
    let maxFee;
    let gasConsumed;
    let actualFeeInDollar;
    let maxFeeInDollar;

    if (transactionData?.transaction_details?.max_fee !== undefined && transactionData?.transaction_details?.actual_fee && transactionData?.transaction_details?.l1_gas_price){
        actualFee = web3.utils.fromWei(transactionData?.transaction_details?.actual_fee, 'ether');
        maxFee = web3.utils.fromWei(transactionData?.transaction_details?.max_fee, 'ether');
        gasConsumed = parseInt(parseInt(transactionData?.transaction_details?.actual_fee)/parseInt(transactionData?.transaction_details?.l1_gas_price))
        actualFeeInDollar = actualFee * transactionData?.ethereum?.usd
        maxFeeInDollar = maxFee * transactionData?.ethereum?.usd
    }
    

    const handleCallDataTabClick = (tab) => {
        setActiveCallDataTab(tab);
    };

  return (
    <div className="text-white">
        <div>
            <h3 className="text-xxl mt-4 mb-4">Transaction Details</h3>
            <div className="mt-2 pt-2 space-y-4">
                <div className="flex">
                    <div className='flex justify-center items-center'>
                        <Tooltip text="Unique number of the block in which the transaction is processed">
                            <img src="/question-mark.svg" alt="question mark" height={20} width={20} className='mr-2'/>
                        </Tooltip>
                        <p className='text-base w-48'>BLOCK NUMBER:</p>
                    </div>
                    
                    <div className='flex-1 border-b border-customTableBorder'>
                        <p className='inline-block text-customTextBlue'>{transactionData?.transaction_details?.block_number}</p>
                    </div>
                </div>
                <div className="flex">
                    <div className='flex justify-center items-center'>
                        <Tooltip text="Time at which the transaction was processed">
                            <img src="/question-mark.svg" alt="question mark" height={20} width={20} className='mr-2'/>
                        </Tooltip>
                        <p className='text-base w-48'>TIMESTAMP:</p>
                    </div>
                    
                    <div className='flex-1 border-b border-customTableBorder'>
                        <p className='inline-block'>{formatDate(transactionData?.transaction_details?.timestamp*1000)}</p>
                    </div>
                </div>
                <div className="flex">
                    <div className='flex justify-center items-center'>
                        <Tooltip text="Actual fee paid for executing the transaction">
                            <img src="/question-mark.svg" alt="question mark" height={20} width={20} className='mr-2'/>
                        </Tooltip>
                        <p className='text-base w-48'>ACTUAL FEE:</p>
                    </div>
                    
                    <div className='flex-1 border-b border-customTableBorder'>
                        <span className='inline-block'>{actualFee !== undefined ? actualFee :  '--'}</span>
                        <span className='inline-block ml-1 text-customTextBlue'>ETH</span>
                        <span className='inline-block ml-1'>(${actualFeeInDollar !== undefined ? actualFeeInDollar : '--'})</span>
                    </div>
                </div>
                <div className="flex">
                    <div className='flex justify-center items-center'>
                        <Tooltip text="Max fee set when submitting the transaction">
                            <img src="/question-mark.svg" alt="question mark" height={20} width={20} className='mr-2'/>
                        </Tooltip>
                        <p className='text-base w-48'>MAX FEE:</p>
                    </div>
                    
                    <div className='flex-1 border-b border-customTableBorder'>
                        <span className='inline-block'>{maxFee !== undefined ? maxFee :  '--'}</span>
                        <span className='inline-block ml-1 text-customTextBlue'>ETH</span>
                        <span className='inline-block ml-1'>(${maxFeeInDollar !== undefined ? maxFeeInDollar : '--'})</span>
                    </div>
                </div>
                <div className="flex">
                    <div className='flex justify-center items-center'>
                        <Tooltip text="Gas consumed for the transaction execution">
                            <img src="/question-mark.svg" alt="question mark" height={20} width={20} className='mr-2'/>
                        </Tooltip>
                        <p className='text-base w-48'>GAS CONSUMED:</p>
                    </div>
                    
                    <div className='flex-1 border-b border-customTableBorder'>
                        <p className='inline-block'>{gasConsumed !== undefined ? gasConsumed : '--'}</p>
                    </div>
                </div>
                {/* <div className="flex">
                    <div className='flex justify-center items-center'>
                        <Tooltip text="Tokens that were transferred in the transaction">
                            <img src="/question-mark.svg" alt="question mark" height={20} width={20} className='mr-2'/>
                        </Tooltip>
                        <p className='text-base w-48'>TOKENS TRANSFERRED:</p>
                    </div>
                    
                    <div className='flex-1 border-b border-customTableBorder'>
                        <p className='inline-block'>{transaction.tokens_transferred}</p>
                    </div>
                </div> */}
                <div className="flex">
                    <div className='flex justify-center items-center'>
                        <Tooltip text="Sending party of the transaction">
                            <img src="/question-mark.svg" alt="question mark" height={20} width={20} className='mr-2'/>
                        </Tooltip>
                        <p className='text-base w-48'>SENDER ADDRESS:</p>
                    </div>
                
                    <div className='flex-1 border-b border-customTableBorder'>
                        <p className='inline-block'>{transactionData?.transaction_details?.sender_address}</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <h3 className="text-xxl mt-4 mb-4">Developer Info</h3>
            <div className="mt-2 pt-2 space-y-4">
                <div className="flex">
                    <div className='flex justify-center items-center'>
                        <Tooltip text="Unix timestamp at which the transaction was processed">
                            <img src="/question-mark.svg" alt="question mark" height={20} width={20} className='mr-2'/>
                        </Tooltip>
                        <p className='text-base w-48'>UNIX TIMESTAMP:</p>
                    </div>
                    
                    <div className='flex-1 border-b border-customTableBorder'>
                        <p className='inline-block'>{transactionData?.dev_info?.timestamp}</p>
                    </div>
                </div>
                <div className="flex">
                    <div className='flex justify-center items-center'>
                        <Tooltip text="Nonce of the transaction">
                            <img src="/question-mark.svg" alt="question mark" height={20} width={20} className='mr-2'/>
                        </Tooltip>
                        <p className='text-base w-48'>NONCE:</p>
                    </div>
                    
                    <div className='flex-1 border-b border-customTableBorder'>
                        <p className='inline-block'>{parseInt(transactionData?.dev_info?.nonce)}</p>
                    </div>
                </div>
                <div className="flex">
                    <div className='flex justify-center items-center'>
                    <Tooltip text="Index of the transaction within the block">
                            <img src="/question-mark.svg" alt="question mark" height={20} width={20} className='mr-2'/>
                        </Tooltip>
                        <p className='text-base w-48'>POSITION:</p>
                    </div>
                    
                    <div className='flex-1 border-b border-customTableBorder'>
                        <p className='inline-block'>{transactionData?.dev_info?.position}</p>
                    </div>
                </div>
                <div className="flex">
                    <div className='flex justify-center items-center'>
                        <Tooltip text="Version of the transaction">
                            <img src="/question-mark.svg" alt="question mark" height={20} width={20} className='mr-2'/>
                        </Tooltip>
                        <p className='text-base w-48'>VERSION:</p>
                    </div>
                    
                    <div className='flex-1 border-b border-customTableBorder'>
                        <p className='inline-block'>{transactionData?.dev_info?.version}</p>
                    </div>
                </div>
                {/* <div className="flex">
                    <div className='flex justify-center items-center'>
                        <Tooltip text="L1 transaction that updated the L1 Starknet contract">
                            <img src="/question-mark.svg" alt="question mark" height={20} width={20} className='mr-2'/>
                        </Tooltip>
                        <p className='text-base w-48'>L1 TXN HASH:</p>
                    </div>
                    
                    <div className='flex-1 border-b border-customTableBorder'>
                        <p className='inline-block'>{transaction.l1_txn_hash}</p>
                    </div>
                </div> */}
                <div className="flex">
                    <div className='flex justify-center items-center'>
                        <Tooltip text="Resources utilized to execute the transaction">
                            <img src="/question-mark.svg" alt="question mark" height={20} width={20} className='mr-2'/>
                        </Tooltip>
                        <p className='text-base w-48'>EXECUTION RESOURCES:</p>
                    </div>
                    
                    <div className='flex-1 border-b border-customTableBorder pb-2'>
                        <p className='inline-block rounded border border-invokeBorder bg-invokeBackground text-invokeText text-base px-2'>{transactionData?.execution_resources?.steps} STEPS</p>
                        <div className='flex  mt-1'>
                            <p className='rounded border border-executionResourcesBorderColor bg-executionResourcesBgColor text-executionResourcesColor text-base px-2'>{transactionData?.execution_resources?.pedersen_builtin_applications} PEDERSEN_BUILTIN</p>
                            <p className='rounded border border-executionResourcesBorderColor bg-executionResourcesBgColor text-executionResourcesColor text-base ml-1 px-2'>{transactionData?.execution_resources?.range_check_builtin_applications} RANGE_CHECK_BUILTIN</p>
                            <p className='rounded border border-executionResourcesBorderColor bg-executionResourcesBgColor text-executionResourcesColor text-base ml-1 px-2'>{transactionData?.execution_resources?.ec_op_builtin_applications} EC_OP_BUILTIN</p>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        {/* --------------------------------CallData Component -----------------------------------------------*/}
        <div className="flex mt-4">
            <div className='flex justify-center items-start'>
                <Tooltip text="Calldata that was sent in the transaction">
                    <img src="/question-mark.svg" alt="question mark" height={20} width={20} className='mr-2'/>
                </Tooltip>
                <p className='text-base w-52'>CALLDATA:</p>
            </div>

            <div className='w-full'>
                <div className="flex w-24">
                    <button
                        className={`flex-1 py-2 px-5 text-white cursor-pointer text-center ${activeCallDataTab === 'Calls' ? 'bg-activeColor' : 'bg-customGray hover:bg-hoveractiveColor'} border border-activeColor text-base`}
                        onClick={() => handleCallDataTabClick('Calls')}
                    >
                        Calls
                    </button>
                    <button
                        className={`flex-1 py-2 px-5 text-white cursor-pointer text-center ${activeCallDataTab === 'Transaction' ? 'bg-activeColor' : 'bg-customGray hover:bg-hoveractiveColor'} border border-activeColor text-base`}
                        onClick={() => handleCallDataTabClick('Transaction')}
                    >
                        Transaction
                    </button>
                </div>
                {activeCallDataTab === 'Transaction' ? (
                
                    <div className="mt-4 bg-callDataBg p-4 rounded-md">
                        <CallDataTransaction calldata={transactionData?.calldata}/>
                    </div>
                ) : (
                    <div className="mt-4 bg-callDataBg p-4 rounded-md">
                        <p className="text-white">No Calls Available</p>
                        
                        
                    </div>
                )}
            </div>
        </div>
        <div className="flex">
            <div className='flex justify-center items-center'>
                <Tooltip text="Signature(s) of the transaction">
                    <img src="/question-mark.svg" alt="question mark" height={20} width={20} className='mr-2'/>
                </Tooltip>
                <p className='text-base w-48'>SIGNATURE(S):</p>
            </div>
            <div className='flex-1 mt-4' >
            {
                transactionData?.signature?.map((sign, index) => (
                    <div className='flex justify-between border-b border-customTableBorder py-2' key={index}>
                        <p className='inline-block text-xl' >{sign}</p>
                        <button className="ml-2 p-1" onClick={() => navigator.clipboard.writeText(sign)}>
                            <img src="/copy-white.png" alt="copy" className=' ml-1 mt-1 w-4 h-4 change-color' />
                        </button>
                    </div>              
                ))
            }
            </div>
            
        </div>
        
    </div>

    
  )
}

export default OverviewTab
