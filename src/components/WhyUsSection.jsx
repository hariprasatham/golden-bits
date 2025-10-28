import React, { useRef, useEffect, useState } from 'react';
import './WhyUsSection.css';

const WhyUsSection = () => {
  // Array of refs to hold the DOM elements for the dividers
  const dividerRefs = useRef([]);
  // State to hold the visibility status of each divider (true/false)
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    // Configuration for the Intersection Observer
    const options = {
      root: null, // relative to the viewport
      rootMargin: '0px',
      threshold: 0.5, // 50% of the element must be visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Use the data-index attribute to identify which divider is visible
        const index = entry.target.dataset.index;

        // Update the state only if the visibility has changed
        if (entry.isIntersecting && !isVisible[index]) {
          setIsVisible(prev => ({ ...prev, [index]: true }));
        }
      });
    }, options);

    // Observe each divider ref
    dividerRefs.current.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    // Cleanup function: disconnect the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, [isVisible]); // Rerun effect if isVisible state changes (though not strictly necessary here, good practice)


  // Function to assign the ref and index when mapping or rendering manually
  const setDividerRef = (element, index) => {
    if (element) {
      dividerRefs.current[index] = element;
    }
  };


  return (
    <section className="why-us-section">


      {/* Main Heading and Commitment (unchanged) */}
      <div className="why-us-main-content">
        <h1 className="why-us-title">WHY US</h1>
        <p className="why-us-commitment-tag">Our Commitment</p>
        <p className="why-us-commitment-text">
          Welcome to Evergreen enterprises bakery’s division, where passion meets the oven! Established in 2022, we're dedicated to crafting delicious bakery products and exclusive desserts like Choco lava, Brownies, Doughnuts, Muffins and more. We supply fresh baked goods to college canteens, cafes, and local eateries, focusing on quality ingredients and taste that delights.
          <br /><br />
          Our team bakes with love, ensuring every bite transports you to a moment of joy. Come taste the difference freshness makes!
        </p>

        {/* Animated Divider 1: Under Commitment Text */}
        <hr
          ref={(el) => setDividerRef(el, 0)}
          data-index="0"
          className={`why-us-divider ${isVisible[0] ? 'is-visible' : ''}`}
        />
      </div>

      {/* Feature Points */}
      <div className="why-us-features">

        {/* Feature 1: Artisanal Delights */}
        <div className="feature-item">
          <div className="feature-text">
            <h3 className="feature-title">Artisanal Delights</h3>
            <p className="feature-description">Our pastries are crafted to perfection, offering a delightful blend of flavors and textures. Each creation is a masterpiece that showcases our dedication to quality and taste.

            </p>
          </div>
          <div className="feature-icon feature-icon-1">
            <svg
              preserveAspectRatio="none"
              viewBox="20 20 160 160"
              height="80"
              width="80"
              xmlns="http://www.w3.org/2000/svg"
              data-type="color"
              role="presentation"
              aria-hidden="true"
              aria-label=""
            >
              {/* The <defs> and <style> block has been removed to avoid JSX parsing errors */}
              <g>
                <path
                  d="M20 20v160h160V20H20zm155.861 2.424-20.197 20.197c-9.919-9.626-22.307-16.715-36.122-20.197h56.319zm-74.649.031c20.472.317 39.037 8.595 52.739 21.879l-52.739 52.739V22.455zm-2.424 74.62-52.74-52.74c13.702-13.284 32.267-21.564 52.74-21.88v74.62zm-1.715 1.713H22.455c.316-20.472 8.595-39.037 21.879-52.739l52.739 52.739zm0 2.424-52.739 52.739c-13.284-13.702-21.563-32.267-21.879-52.739h74.618zm1.715 1.713v74.621c-20.473-.316-39.038-8.596-52.74-21.88l52.74-52.741zm2.424.002 52.738 52.738c-13.702 13.284-32.267 21.563-52.738 21.879v-74.617zm1.713-1.715h74.621c-.317 20.472-8.596 39.038-21.881 52.74l-52.74-52.74zm0-2.424 52.74-52.74c13.284 13.702 21.564 32.267 21.88 52.74h-74.62zm-58.59-56.166L24.137 22.424h56.322c-13.816 3.482-26.205 10.572-36.124 20.198zM22.424 24.139l20.197 20.197c-9.626 9.919-16.715 22.307-20.197 36.122V24.139zm20.197 131.525-20.197 20.197v-56.319c3.482 13.815 10.571 26.203 20.197 36.122zm-18.484 21.912 20.198-20.198c9.919 9.626 22.308 16.716 36.124 20.198H24.137zm131.527-20.197 20.197 20.197h-56.319c13.815-3.482 26.203-10.571 36.122-20.197zm21.912 18.484-20.198-20.198c9.626-9.919 16.716-22.308 20.198-36.124v56.322zM157.378 44.335l20.198-20.198v56.322c-3.482-13.816-10.572-26.205-20.198-36.124z"
                  fill="#FFFFFF"
                  data-color="1"
                />
              </g>
            </svg>
          </div>
        </div>

        {/* Animated Divider 2: After Feature 1 */}
        <hr
          ref={(el) => setDividerRef(el, 1)}
          data-index="1"
          className={`why-us-divider why-us-divider-offset ${isVisible[1] ? 'is-visible' : ''}`}
        />

        {/* Feature 2: Sophisticated Displays */}
        <div className="feature-item">
          <div className="feature-text">
            <h3 className="feature-title">Sophisticated Displays</h3>
            <p className="feature-description">We believe in the beauty of presentation. Our pastries are not only delicious but also elegantly displayed, adding a touch of sophistication to every bite.</p>
          </div>
          <div className="feature-icon feature-icon-2">
            <svg
              preserveAspectRatio="none"
              viewBox="20 20 160 160.002"
              height="80"
              width="80"
              xmlns="http://www.w3.org/2000/svg"
              data-type="color"
              role="presentation"
              aria-hidden="true"
              aria-label=""
            >
              {/* Removed <defs> and <style> to fix the JSX error */}
              <g>
                <path
                  d="M178.788 20H20v160.002h81.212V180H180V20h-1.212zM22.424 177.576v-76.355c20.273.308 39.282 8.345 53.645 22.711h.001c14.362 14.375 22.399 33.385 22.708 53.644H22.424zM76.068 45.144c14.365 14.373 22.402 33.385 22.71 53.649H22.424V22.434c20.271.308 39.28 8.346 53.644 22.71zm22.72 56.073v57.91c-3.484-13.845-10.648-26.546-21.005-36.909-10.352-10.353-23.044-17.516-36.885-21.001h57.89zm2.424-.005h57.912c-13.845 3.483-26.545 10.647-36.908 21.004-10.357 10.358-17.521 23.057-21.004 36.904v-57.908zm.01-2.424c.307-20.271 8.345-39.28 22.708-53.644 14.375-14.365 33.383-22.402 53.646-22.71v76.354h-76.354zm20.994-55.359c-10.357 10.356-17.521 23.055-21.004 36.901V22.424h57.913c-13.845 3.484-26.546 10.648-36.909 21.005zM98.788 22.424v57.917C95.304 66.495 88.14 53.792 77.783 43.429 67.426 33.072 54.727 25.908 40.88 22.424h57.908zm78.788 155.152h-76.354c.307-20.27 8.345-39.281 22.708-53.646 14.373-14.363 33.383-22.4 53.646-22.708v76.354z"
                  fill="#FFFFFF"
                  data-color="1"
                />
              </g>
            </svg>
          </div>
        </div>

        {/* Animated Divider 3: After Feature 2 */}
        <hr
          ref={(el) => setDividerRef(el, 2)}
          data-index="2"
          className={`why-us-divider why-us-divider-offset ${isVisible[2] ? 'is-visible' : ''}`}
        />

        {/* Feature 3: Indulge Yourself */}
        <div className="feature-item">
          <div className="feature-text">
            <h3 className="feature-title">Indulge Yourself</h3>
            <p className="feature-description">At Giordano Chiasa, we offer more than pastries; we provide a luxurious experience that transports you to a world of indulgence and refinement.</p>
          </div>
          <div className="feature-icon feature-icon-3">
            <svg
              preserveAspectRatio="none"
              viewBox="20 20 160 160"
              height="80"
              width="80"
              xmlns="http://www.w3.org/2000/svg"
              data-type="color"
              role="presentation"
              aria-hidden="true"
              aria-label=""
            >
              {/* The <defs> and <style> block has been removed to fix the JSX parsing error. */}
              <g>
                <path
                  d="M20 20v160h160V20H20zm78.788 77.075L24.137 22.424h74.651v74.651zm2.424-74.651h74.648l-74.648 74.648V22.424zm-4.139 76.364H22.424V24.139l74.649 74.649zm-74.649 2.424h74.649l-74.649 74.649v-74.649zm76.364 1.713v74.651H24.137l74.651-74.651zm2.424.002 74.648 74.648h-74.648v-74.648zm1.713-1.715h74.651v74.651l-74.651-74.651zm74.651-2.424h-74.651l74.651-74.651v74.651z"
                  fill="#FFFFFF"
                  data-color="1"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;