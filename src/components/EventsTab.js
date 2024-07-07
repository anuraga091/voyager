import React,{useState} from 'react'
import CopyToClipboard from 'react-copy-to-clipboard';
import { formatDate } from '../utils/formatter';

const EventsTab = (props) => {
    const {data} = props;
    const [copiedBlockStatuses, setCopiedBlockStatuses] = useState('')
    

    const copyBlockNumber = (hash) => {
        const newBlocks = { ...copiedBlockStatuses, [hash]: true };
        setCopiedBlockStatuses(newBlocks);
        setTimeout(() => {
        setCopiedBlockStatuses({ ...newBlocks, [hash]: false });
        }, 2000);
    }

    const events = data?.events
    
  return (
    <div className="container pt-8">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-customGray text-white">
          <thead>
            <tr>
              <th className="border-b border-t text-left border-customTableBorder text-customGrayText px-4 py-2 text-base">{"ID"}</th>
              <th className="border-b border-t text-left border-customTableBorder text-customGrayText px-4 py-2 text-base">{"BLOCK"}</th>
              <th className="border-b border-t text-left border-customTableBorder  text-customGrayText px-4 py-2 text-base">{"AGE"}</th>
            </tr>
          </thead>

          <tbody>
            {events.map((e, index) => (
              <tr key={data.block_number + index} >
                  <td className="border-b border-customTableBorder  px-4 py-2 text-customTextBlue">{`${data?.block_number}_${data?.dev_info?.position}_${index}`}</td>
                  <td className=" border-b border-customTableBorder px-4 py-2 text-customTextBlue ">
                    <div className='flex '>
                      <p>{data?.block_number}</p>
                      <CopyToClipboard text={data?.block_number} onCopy={() => copyBlockNumber( `${data?.block_number}${index}`)}>
                        <img src="/copy-white.png" alt="copy" className=' ml-1 mt-1 w-4 h-4 change-color'/>
                      </CopyToClipboard>
                    </div> 
                  </td>
                  <td className=" border-b border-customTableBorder px-4 py-2 text-lg">{formatDate(data.timestamp*1000)}</td>
              </tr>
            ))}
          </tbody>
          
        </table>
      </div>
    </div>
  )
}

export default EventsTab
