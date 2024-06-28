import React,{ useState } from 'react'
import Tooltip from './Tooltip';
import CallDataTransaction from './CallDataTransaction';

const OverviewTab = () => {
    const [activeCallDataTab, setActiveCallDataTab] = useState('Transaction');


    const transaction = {
        block_number: '643109',
        timestamp: '24 days ago ( May 23 2024 23:58:06 )',
        actual_fee: '0.000000350124642817',
        max_fee: '0.000099999999999999',
        gas_consumed: '25',
        tokens_transferred: 'transfer From: 0x0012...5b59 To: 0x046d...25bf For: 0.000099999999999999 ETH ($3.57056)',
        sender_address: '0x0012d0098294f5bef42722f81be98fb700d8331e75d5a590d2c09398a7465b59',
        unix_timestamp: '1716487986',
        nonce: '1892',
        position: '149',
        version: '1',
        l1_txn_hash: '0x2eb719da68d0ad439b10baccc92d74b9660f1579eeaf9b760a511634435f6b70',
        execution_resources: {
            steps: 9027,
            pedersen_builtin_applications: 25,
            range_check_builtin_applications: 187,
            ec_op_builtin_applications: 3,
            data_availability: {
                l1_gas: 0,
                l1_data_gas: 192
            }
        }
    };

    

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
                        <p className='inline-block text-customTextBlue'>{transaction.block_number}</p>
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
                        <p className='inline-block'>{transaction.timestamp}</p>
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
                        <p className='inline-block'>{transaction.actual_fee} ETH</p>
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
                        <p className='inline-block'>{transaction.max_fee} ETH</p>
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
                        <p className='inline-block'>{transaction.gas_consumed}</p>
                    </div>
                </div>
                <div className="flex">
                    <div className='flex justify-center items-center'>
                        <Tooltip text="Tokens that were transferred in the transaction">
                            <img src="/question-mark.svg" alt="question mark" height={20} width={20} className='mr-2'/>
                        </Tooltip>
                        <p className='text-base w-48'>TOKENS TRANSFERRED:</p>
                    </div>
                    
                    <div className='flex-1 border-b border-customTableBorder'>
                        <p className='inline-block'>{transaction.tokens_transferred}</p>
                    </div>
                </div>
                <div className="flex">
                    <div className='flex justify-center items-center'>
                        <Tooltip text="Sending party of the transaction">
                            <img src="/question-mark.svg" alt="question mark" height={20} width={20} className='mr-2'/>
                        </Tooltip>
                        <p className='text-base w-48'>SENDER ADDRESS:</p>
                    </div>
                
                    <div className='flex-1 border-b border-customTableBorder'>
                        <p className='inline-block'>{transaction.sender_address}</p>
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
                        <p className='inline-block'>{transaction.unix_timestamp}</p>
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
                        <p className='inline-block'>{transaction.nonce}</p>
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
                        <p className='inline-block'>{transaction.position}</p>
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
                        <p className='inline-block'>{transaction.version}</p>
                    </div>
                </div>
                <div className="flex">
                    <div className='flex justify-center items-center'>
                        <Tooltip text="L1 transaction that updated the L1 Starknet contract">
                            <img src="/question-mark.svg" alt="question mark" height={20} width={20} className='mr-2'/>
                        </Tooltip>
                        <p className='text-base w-48'>L1 TXN HASH:</p>
                    </div>
                    
                    <div className='flex-1 border-b border-customTableBorder'>
                        <p className='inline-block'>{transaction.l1_txn_hash}</p>
                    </div>
                </div>
                <div className="flex">
                    <div className='flex justify-center items-center'>
                        <Tooltip text="Resources utilized to execute the transaction">
                            <img src="/question-mark.svg" alt="question mark" height={20} width={20} className='mr-2'/>
                        </Tooltip>
                        <p className='text-base w-48'>EXECUTION RESOURCES:</p>
                    </div>
                    
                    <div className='flex-1 border-b border-customTableBorder pb-2'>
                        <p className='inline-block rounded border border-invokeBorder bg-invokeBackground text-invokeText text-base px-2'>{transaction.execution_resources.steps} STEPS</p>
                        <div className='flex  mt-1'>
                            <p className='rounded border border-executionResourcesBorderColor bg-executionResourcesBgColor text-executionResourcesColor text-base px-2'>{transaction.execution_resources.pedersen_builtin_applications} PEDERSEN_BUILTIN</p>
                            <p className='rounded border border-executionResourcesBorderColor bg-executionResourcesBgColor text-executionResourcesColor text-base ml-1 px-2'>{transaction.execution_resources.range_check_builtin_applications} RANGE_CHECK_BUILTIN</p>
                            <p className='rounded border border-executionResourcesBorderColor bg-executionResourcesBgColor text-executionResourcesColor text-base ml-1 px-2'>{transaction.execution_resources.ec_op_builtin_applications} EC_OP_BUILTIN</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* CallData Component */}
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
                        <CallDataTransaction/>
                    </div>
                ) : (
                    <div className="mt-4 bg-callDataBg p-4 rounded-md">
                        <p className="text-white">No Calls Available</p>
                        
                        
                    </div>
                )}
            </div>
        </div>
        
    </div>

    
  )
}

export default OverviewTab
