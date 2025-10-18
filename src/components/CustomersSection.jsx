import React from 'react';
import './CustomersSection.css';

const CustomersSection = () => {
  const customers = [
    'PSG',
    'GRG',
    'PSGR',
    'GRD',
    'CIT',
    'VELAN COFFEE',
    'TEA BOY',
    'KAPPI 2.0',
    'KARPAGAM UNIVERSITY',
    'MADAMPATTY GROUPS',
    'SNR TRUSTS'
  ];

  return (
    <section className="customers-section">
      <div className="customers-container">
        <h2 className="customers-title">Our Valued Customers</h2>
        <p className="customers-subtitle">We are proud to serve these esteemed organizations and businesses</p>

        <div className="customers-grid">
          {customers.map((customer, index) => (
            <div key={index} className="customer-card">
              <h3 className="customer-name">{customer}</h3>
            </div>
          ))}
        </div>

        <div className="customers-footer">
          <p>Thank you to all our customers for your continued trust and partnership.</p>
        </div>
      </div>
    </section>
  );
};

export default CustomersSection;
