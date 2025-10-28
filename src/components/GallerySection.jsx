import React, { useState } from 'react';
import './GallerySection.css';

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const galleryItems = [
    { id: 1, category: 'Macarons', image: '88aac0_29635c8eef0945e29cf8a49459c575da~mv2.png', title: 'Assorted Macarons' },
    { id: 2, category: 'Tarts', image: 'about-1.png', title: 'Chocolate Tart' },
    { id: 3, category: 'Pastries', image: '88aac0_2d744412b481442f8f6126ac92d2588c~mv2.png', title: 'Croissants' },
    { id: 4, category: 'Macarons', image: '88aac0_3474eaf8815145c38dff606c474d52b4~mv2.png', title: 'Raspberry Macarons' },
    { id: 5, category: 'Tarts', image: '88aac0_6fa2e82b48c24216b79f6dd66246ea32~mv2.png', title: 'Lemon Tart' },
    { id: 6, category: 'Pastries', image: '88aac0_fe7958e0aba14bffa4c3d8401a6e362a~mv2.png', title: 'Éclairs' }
  ];

  const categories = ['All', ...new Set(galleryItems.map(item => item.category))];

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <h2 className="gallery-title">Our Gallery</h2>
        <p className="gallery-subtitle">A visual feast of our exquisite creations</p>

        <div className="gallery-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="gallery-item">
              <img src={`/src/assets/${item.image}`} alt={item.title} />
              <div className="gallery-overlay">
                <h3 className="gallery-item-title">{item.title}</h3>
                <p className="gallery-item-category">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
