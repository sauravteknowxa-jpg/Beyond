import React, { useState } from "react";

function PaymentForm() {
  const [formData, setFormData] = useState({
    user_id: "",
    user_type: "student",
    payment_type: "subscription",
    amount_inr: "",
    currency: "INR",
    receipt: ""
  });

  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://192.168.1.44:8000/api/payment/order", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.error("API Error:", error);
      setResponse({ error: "API failed" });
    }

    setLoading(false);
  };

  return (

    <>
    

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-100 px-4">
  <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
    
    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
     Payment Order Form
    </h2>

    <form onSubmit={handleSubmit} className="space-y-5">
      
     
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-2">
          User ID
        </label>
        <input
          name="user_id"
          placeholder="Enter User ID"
          value={formData.user_id}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-2
                     focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                     outline-none transition"
        />
      </div>

     
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Amount (INR)
        </label>
        <input
          name="amount_inr"
          type="number"
          placeholder="Enter Amount"
          value={formData.amount_inr}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-2
                     focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                     outline-none transition"
        />
      </div>

      
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Receipt (optional)
        </label>
        <input
          name="receipt"
          placeholder="Receipt reference"
          value={formData.receipt}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-2
                     focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                     outline-none transition"
        />
      </div>

     
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 rounded-lg text-white font-semibold
                   bg-indigo-600 hover:bg-indigo-700
                   active:scale-95 transition
                   disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Submitting..." : "Create Order"}
      </button>
    </form>

   
    {response && (
      <pre className="mt-6 bg-gray-100 p-4 rounded-lg text-xs overflow-auto">
        {JSON.stringify(response, null, 2)}
      </pre>
    )}
  </div>
</div>

    </>
    
  );
}

export default PaymentForm;