import React, { useState } from 'react';
import { addTransaction } from '../services/transactionService';

const TransactionForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    amount: '',
    category: 'Food',
    type: 'expense',
    note: '',
    date: new Date().toISOString().split('T')[0],
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await addTransaction(form);
    onAdd(data);
    setForm({ ...form, amount: '', note: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow space-y-2">
      <input
        name="amount"
        value={form.amount}
        onChange={handleChange}
        placeholder="Amount"
        type="number"
        required
        className="w-full border p-2"
      />
      <select name="type" value={form.type} onChange={handleChange} className="w-full border p-2">
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <select name="category" value={form.category} onChange={handleChange} className="w-full border p-2">
        {['Food', 'Travel', 'Rent', 'Shopping', 'Salary', 'Health', 'Bills', 'Other'].map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>
      <input
        name="note"
        value={form.note}
        onChange={handleChange}
        placeholder="Note"
        className="w-full border p-2"
      />
      <input
        name="date"
        type="date"
        value={form.date}
        onChange={handleChange}
        className="w-full border p-2"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Add
      </button>
    </form>
  );
};

export default TransactionForm;
