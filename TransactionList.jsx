import React, { useEffect, useState } from 'react';
import { getTransactions, deleteTransaction } from '../services/transactionService';

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions().then(setTransactions);
  }, []);

  const handleDelete = async (id) => {
    await deleteTransaction(id);
    setTransactions(transactions.filter((tx) => tx._id !== id));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Transaction History</h2>
      {transactions.map((tx) => (
        <div
          key={tx._id}
          className="flex justify-between items-center border-b py-2"
        >
          <div>
            <p className="font-medium">
              {tx.category} - ₹{tx.amount} ({tx.type})
            </p>
            <p className="text-sm text-gray-500">{new Date(tx.date).toLocaleDateString()}</p>
          </div>
          <button
            onClick={() => handleDelete(tx._id)}
            className="text-red-500 hover:text-red-700"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
