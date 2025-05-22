import React from 'react';
import tour1 from '../assets/images/tour-1.jpeg';
import tour2 from '../assets/images/tour-2.jpeg';
import tour3 from '../assets/images/tour-3.jpeg';
import tour4 from '../assets/images/tour-4.jpeg';

const tours = [
  {
    img: tour1,
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    location: 'china',
    duration: '6 days',
    cost: '$2100'
  },
  {
    img: tour2,
    date: 'october 1th, 2020',
    title: 'best of java',
    location: 'indonesia',
    duration: '11 days',
    cost: '$1400'
  },
  {
    img: tour3,
    date: 'september 15th, 2020',
    title: 'explore hong kong',
    location: 'hong kong',
    duration: '8 days',
    cost: '$5000'
  },
  {
    img: tour4,
    date: 'december 5th, 2019',
    title: 'kenya highlights',
    location: 'kenya',
    duration: '20 days',
    cost: '$3300'
  }
];

function Tours() {
  return (
    <section className="section" id="tours">
      <div className="section-title">
        <h2>featured <span>tours</span></h2>
      </div>
      <div className="section-center featured-center">
        {tours.map((tour, index) => (
          <article className="tour-card" key={index}>
            <div className="tour-img-container">
              <img src={tour.img} className="tour-img" alt="" />
              <p className="tour-date">{tour.date}</p>
            </div>
            <div className="tour-info">
              <h4>{tour.title}</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
              <div className="tour-footer">
                <p><span><i className="fas fa-map"></i></span> {tour.location}</p>
                <p>{tour.duration}</p>
                <p>from {tour.cost}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Tours;
