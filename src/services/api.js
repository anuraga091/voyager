import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api'; 

export const fetchTransactions = async (page, limit) => {
  try {
    const response = await axios.get(`${BASE_URL}/transactions`, {
      params: {
        page,
        limit
      }
    });
    return response.data;  
  } catch (error) {
    console.error('Error fetching transactions:', error);
    throw error; 
  }
};

// export const fetchTransactionData = async (hash, block_number) => {
//   try {

//   } catch (error){

//   }
// }

