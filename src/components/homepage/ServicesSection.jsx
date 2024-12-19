/* eslint-disable no-unused-vars */
import React from "react";
import ServiceCard from "../../components/homepage/ServiceCard";

const ServicesSection = () => {
  const services = [
    {
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
    {
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
    },
    {
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days",
    },
  ];
  return (
    <section className="w-4/5 mx-auto mt-20">
      <div className="hidden lg:grid grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
      
      <div className="lg:hidden grid grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`${index === 2 ? "col-span-2 col-start-1 mx-auto" : ""}`}
          >
            <ServiceCard {...service} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;