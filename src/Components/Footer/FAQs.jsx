import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  { question: "Who is the Owner of Carveo?", answer: "The Onwer Of Carveo is Mr. Manoj Panchal." },
  { question: "How does car insurance work?", answer: "Car insurance provides financial protection against physical damage and bodily injury resulting from accidents. You can choose from various coverage options based on your needs." },
  { question: "How can I secure my car?", answer: "To secure your car, always park in well-lit areas, install an anti-theft system, and use a steering lock for extra safety." },
  { question: "What documents are required to buy a car?", answer: "You typically need identity proof, address proof, income proof, and a valid driver's license." },
  { question: "Can I rent a car without a license?", answer: "No, a valid driver's license is required to rent a car." },
  { question: "What is the minimum age for renting a car?", answer: "Most rental companies require you to be at least 21 years old, but policies may vary by company and location." },
  { question: "How do I transfer car ownership?", answer: "Car ownership can be transferred by submitting the necessary documents to the regional transport office (RTO), including the registration certificate, insurance, and a sale agreement." },
  { question: "What should I check before buying a used car?", answer: "Check the car's history report, mileage, service records, and overall condition. Also, get a professional inspection before purchase." },
  { question: "How often should I service my car?", answer: "Regular servicing is recommended every 6 months or as per the manufacturer's guidelines." },
  { question: "What is the fuel efficiency of electric cars?", answer: "Electric cars offer a mileage of approximately 100-300 miles per charge, depending on the model and battery capacity." },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  
  return (
    <div className="bg-slate-600 dark:bg-slate-800 text-white p-6 md:p-12">
      <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="bg-slate-100 text-slate-900 dark:bg-slate-700 dark:text-slate-50 p-4 rounded-lg shadow-md">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => setOpenIndex(isOpen ? null : index)}>
                <h3 className="text-lg font-semibold ">{faq.question}</h3>
                {isOpen ? <FaMinus /> : <FaPlus />}
              </div>
              {isOpen && (
                <div className="mt-2 text-gray-700 dark:text-slate-300">
                   {faq.answer} 
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQs;
