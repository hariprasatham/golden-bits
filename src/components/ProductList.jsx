import React from 'react';
import './ProductList.css';

const ProductList = () => {
  const products = [
    {
      item: 'Eggless Choco Lava',
      netWeight: '80-85 grams',
      ambientShelfLife: '4 days',
      chillerShelfLife: '15 days',
      fssaiNo: '1245003001004'
    },
    {
      item: 'Eggless Brownie',
      netWeight: '50-55 grams',
      ambientShelfLife: '5 days',
      chillerShelfLife: '15 days',
      fssaiNo: '1245003001004'
    },
    {
      item: 'Eggless Doughnut',
      netWeight: '70-75 grams',
      ambientShelfLife: '2 days',
      chillerShelfLife: '7 days',
      fssaiNo: '1245003001004'
    },
    {
      item: 'Eggless Sandwich',
      netWeight: '150 grams',
      ambientShelfLife: '1 day',
      chillerShelfLife: 'N/A',
      additionalInfo: '4 layers',
      fssaiNo: '1245003001004'
    },
    {
      item: 'Chicken Burger',
      netWeight: '180 grams',
      ambientShelfLife: '1 day',
      chillerShelfLife: 'N/A',
      fssaiNo: '1245003001004'
    },
    {
      item: 'Eggless Chocolate Muffin',
      netWeight: '35 grams',
      ambientShelfLife: '10 days',
      chillerShelfLife: 'N/A',
      fssaiNo: '1245003001004'
    },
    {
      item: 'Eggless Strawberry Muffin',
      netWeight: '35 grams',
      ambientShelfLife: '10 days',
      chillerShelfLife: 'N/A',
      fssaiNo: '1245003001004'
    },
    {
      item: 'Eggless Banana Muffin',
      netWeight: '35 grams',
      ambientShelfLife: '10 days',
      chillerShelfLife: 'N/A',
      fssaiNo: '1245003001004'
    }
  ];

  return (
    <section className="product-list-section">
      <div className="product-list-container">
        <h2 className="product-list-title">Our Products</h2>
        <p className="product-list-subtitle">Discover our range of delicious bakery products with detailed specifications</p>
        <p className="product-list-fssai">FSSAI No: 1245003001004</p>

        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-info">
                <h3 className="product-name">{product.item}</h3>
                <div className="product-details">
                  <p className="product-detail">
                    <span className="detail-label">Net Weight:</span> {product.netWeight}
                  </p>
                  <p className="product-detail">
                    <span className="detail-label">Ambient Temperature Shelf Life:</span> {product.ambientShelfLife}
                  </p>
                  <p className="product-detail">
                    <span className="detail-label">Chiller Temperature Shelf Life:</span> {product.chillerShelfLife}
                  </p>
                  {product.additionalInfo && (
                    <p className="product-detail">
                      <span className="detail-label">Type:</span> {product.additionalInfo}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="product-list-footer">
          <p>All product specifications are approximate and may vary. Please contact us for bulk orders or custom requirements.</p>
        </div> */}
      </div>
    </section>
  );
};

export default ProductList;
