import React, { useState, useEffect } from 'react';
import './SubscriptionPlans.css';  // Import the page-specific CSS file

const SubscriptionPlans = () => {
  // State to store subscription plans, loading status, and any errors
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch subscription plans when the component mounts
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        // Fetch data from the API using fetch
        const response = await fetch('http://localhost:3004/subscriptions/plans'); // Replace with the actual API URL
        if (!response.ok) {
          throw new Error('Failed to fetch subscription plans');
        }
        const data = await response.json();
        setPlans(data.plans);
        setLoading(false);
      } catch (err) {
        setError('Failed to load subscription plans.');
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);  // Empty dependency array ensures this effect runs only once after the component mounts

  // Loading state
  if (loading) {
    return <div>Loading subscription plans...</div>;
  }

  // Error state
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="subscription-plans">
      <h1>Subscription Plans</h1>
      <div className="plans-container">
        {plans.map((plan) => (
          <div key={plan.id} className="plan-card">
            <h2>{plan.name}</h2>
            <p><strong>Price:</strong> {plan.price}</p>
            <p><strong>Features:</strong></p>
            <ul>
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPlans;
