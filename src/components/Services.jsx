import React from 'react';

const services = [
  { icon: 'fa-wallet', title: 'saving money' },
  { icon: 'fa-tree', title: 'endless hiking' },
  { icon: 'fa-socks', title: 'amazing comfort' }
];

function Services() {
  return (
    <section className="section services" id="services">
      <div className="section-title">
        <h2>our <span>services</span></h2>
      </div>
      <div className="section-center services-center">
        {services.map((service, index) => (
          <article className="service" key={index}>
            <span className="service-icon"><i className={`fas ${service.icon} fa-fw`}></i></span>
            <div className="service-info">
              <h4 className="service-title">{service.title}</h4>
              <p className="service-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
