import React from 'react';
import './MenuSection.css';

const MenuSection = () => {
  const menuItems = [
    {
      category: 'Macarons',
      items: [
        { name: 'Classic Vanilla', description: 'Smooth vanilla bean filling', price: '$3.50' },
        { name: 'Raspberry Delight', description: 'Tangy raspberry with almond shell', price: '$3.75' },
        { name: 'Chocolate Hazelnut', description: 'Rich chocolate with hazelnut praline', price: '$4.00' }
      ]
    },
    {
      category: 'Tarts',
      items: [
        { name: 'Lemon Tart', description: 'Zesty lemon curd on buttery crust', price: '$6.50' },
        { name: 'Chocolate Ganache Tart', description: 'Decadent dark chocolate filling', price: '$7.00' },
        { name: 'Fruit Tart', description: 'Seasonal fresh fruits on pastry cream', price: '$6.75' }
      ]
    },
    {
      category: 'Pastries',
      items: [
        { name: 'Croissant', description: 'Buttery, flaky traditional croissant', price: '$4.50' },
        { name: 'Pain au Chocolat', description: 'Croissant with dark chocolate sticks', price: '$5.00' },
        { name: 'Éclair', description: 'Choux pastry with cream filling', price: '$5.50' }
      ]
    }
  ];

  return (
    <section className="menu-section">
      <div className="menu-container">
        <h2 className="menu-title">Our Menu</h2>
        <p className="menu-subtitle">Indulge in our exquisite selection of French pastries and confections</p>

        {menuItems.map((category, index) => (
          <div key={index} className="menu-category">
            <h3 className="category-title">{category.category}</h3>
            <div className="menu-items">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="menu-item">
                  <div className="item-info">
                    <h4 className="item-name">{item.name}</h4>
                    <p className="item-description">{item.description}</p>
                  </div>
                  <div className="item-price">{item.price}</div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="menu-footer">
          <p>All prices are subject to change. Please contact us for the most current pricing.</p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
