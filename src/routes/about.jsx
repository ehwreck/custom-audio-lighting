import React from 'react';
import './about.styles.css';
import image from '../assets/images/vecteezy_eco-friendly-solar-lights-brightening-the-outdoors_28638915_662.jpg';

const About = () => {
  return (
    <div>
      <div id="about">
        <div>
          <div>
            <h1>About Us</h1>
          </div>
          <h2>Turning spaces into family memories.</h2>
        </div>
        
        <div>
          <div>
            <h2>Our Mission</h2>
            <h3>Bringing Your Vission to Life</h3>
            <p>We're here to turn your ideas into reality. Our mission is to design personalized audio, video, and lighting systems that make your moments special. Your vision, our expertise - together, we create unforgettable experiences.</p>
          </div>
          <div>
            <img src={image} alt="" className='max-width-img'/>
          </div>
        </div>
        
        <div>
          <div>
            <h2>Our Story</h2>
            <h3>Once upon a time...</h3>
          </div>
          <div>
            <div>
            <p>In the early days of our company, there was a passionate team of audio, video, and lighting enthusiasts. They shared a common dream - to bring the magic of personalized technology to every home and event. This dream wasn't just about gadgets; it was about creating experiences that lingered in the hearts of customers.</p>
            </div>
            <div>
            <p>In the beginning, our team faced challenges, but they were fueled by a deep commitment to turning dreams into reality. The company's foundation was built on the belief that every customer deserved not just cutting-edge technology but a partner they could trust. The journey wasn't just about selling products; it was about understanding the unique needs and desires of each person who walked through the door.</p>
            </div>
            <div>
            <p>As the company grew, so did the stories of satisfied customers. The secret to our success wasn't just in the quality of our audio, video, and lighting solutions - it was in the relationships we cultivated. Trust became our currency, and customer satisfaction our top priority.</p>
            </div>
            <div>
            <p>Through the years, our commitment to understanding, listening, and exceeding expectations only strengthened. The stories of delighted customers became our legacy, and our reputation for delivering personalized, trustworthy solutions spread far and wide.</p>
            </div>
            <div>
            <p>Today, as we reflect on our journey, we are proud to be a company where innovation meets integrity. Our history is not just a timeline of technological advancements but a testament to the enduring bonds we've formed with our customers. Every chapter is marked by the smiles, gratitude, and trust of those who have allowed us to be a part of their special moments.</p>
            </div>
            <div>
            <p>Our story is ongoing, and with each new customer, our commitment to love, trust, and extraordinary experiences continues to unfold. We started with a dream, and now, it's your dreams that inspire us to push boundaries and create something truly magical."</p>
            </div>
            <img src={image} alt="" className='max-width-img'/>
          </div>
        </div>

        <div>
          <div>
            <h2>Our History</h2>
          </div>
          <div>
            <h3>Founded with a Heartfelt Vision</h3>
            <p>Our journey began with a group of dedicated enthusiasts who shared a love for audio, video, and lighting. From the very start, our mission was clear - to go beyond providing products and create lasting experiences for our customers.</p>
          </div>
          <div>
        <h3>Early Days of Dedication</h3>
        <p>In the initial years, we faced challenges, but our commitment to customer satisfaction never wavered. Our team worked tirelessly to understand the unique needs of each individual, believing that technology should be a source of joy and connection.</p>
          </div>
          <div>
        <h3>The Rise of Trust</h3>
        <p>As we grew, so did our reputation for trustworthiness. We realized that trust is the cornerstone of any meaningful relationship, and it became our guiding principle. Every customer interaction was an opportunity to build a connection based on honesty, integrity, and a genuine passion for making their visions a reality.</p>
          </div>
          <div>
        <h3>Stories of Satisfaction</h3>
        <p>Our history is woven with stories of delighted customers who found not just cutting-edge solutions but a partner they could rely on. The smiles, gratitude, and positive experiences became the milestones of our journey, shaping the company's ethos.</p>
          </div>
          <div>
        <h3>A Legacy of Love and Trust</h3>
        <p>Today, we stand as a testament to the enduring power of love for our customers and the importance of trust in everything we do. Our history is not just a timeline; it's a narrative of relationships built on a foundation of care and understanding.</p>
          </div>
          <div>
        <h3>Continuing the Tradition</h3>
        <p>As we move forward, our commitment to love and trust remains unwavering. Every customer is an integral part of our story, and their satisfaction continues to be the driving force behind our innovation and dedication. Our history is a living testament to the belief that technology, when infused with care, has the power to create experiences that stand the test of time.</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;
