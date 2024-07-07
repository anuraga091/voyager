import axios from 'axios';

const BASE_URL = 'http://localhost:3001'; 

export const fetchTransactions = async (page, limit, type) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/transactions`, {
      params: {
        page,
        limit,
        type
      }
    });
    return response.data;  
  } catch (error) {
    console.error('Error fetching transactions:', error);
    throw error; 
  }
};

export const fetchTransactionData = async (hash) => {
  try {
    const response = await axios.get(`${BASE_URL}/transaction/${hash}`);
    return response.data
  } catch (error){
    console.error('Error fetching transactions data:', error);
    throw error; 
  }
}

