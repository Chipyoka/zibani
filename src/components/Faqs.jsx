import { useState } from 'react';
import Open from '../assets/icons/open.svg';

const faqs = [
  {
    question: 'What is Zibani?',
    answer:
      'Zibani is a location-aware, audio-first web application that narrates cultural and tourism facts about towns and landmarks across Zambia. It works both on-the-road and from home, enriching travel and exploration experiences.',
  },
  {
    question: 'Do I need an internet connection to use it?',
    answer:
      'No. Zibani is designed as a Progressive Web App (PWA), meaning it stores content locally and can work offline. When online, it syncs new content automatically.',
  },
  {
    question: 'Is this a navigation or map application?',
    answer:
      'Not quite. Zibani does not offer turn-by-turn navigation. Instead, it detects your current town and shares relevant audio stories and highlights about that location.',
  },
  {
    question: 'How does it know where I am?',
    answer:
      'With your permission, the app uses your device’s GPS to determine which town or province you’re in, then plays relevant narrations tied to that region.',
  },
  {
    question: 'Can I explore towns without traveling?',
    answer:
      'Absolutely. You can search for any town within Zambia and learn about its culture, attractions, and people—perfect for students, tourists, and curious minds.',
  },
  {
    question: 'Who is the app for?',
    answer:
      'Zibani is ideal for road travelers, tourists, students, and Zambians interested in preserving and rediscovering their culture while on the move.',
  },
  {
    question: 'Will it support more languages?',
    answer:
      'Not in the MVP, but multilingual support is planned in future updates to include local Zambian languages for a more immersive and inclusive experience.',
  },
  {
    question: 'Is it free to use?',
    answer:
      'Yes, Zibani is free to use. It’s part of a cultural-tech initiative aimed at promoting tourism and cultural preservation across Zambia.',
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" w-[900px] max-w-[900px] mx-auto mt-12 px-4 py-16 " id="faqs">
      <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
      <div className="space-y-4 text-left">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-xl">
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
            >
              <span className="text-lg font-medium text-gray-800">{faq.question}</span>
              <span className="text-xl text-primary">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
           <div
                className={`px-6 text-gray-600 overflow-hidden transition-all duration-200 ease-in-out ${
                    openIndex === index
                    ? 'opacity-100 max-h-[500px] pb-4'
                    : 'opacity-0 max-h-0 pb-0'
                }`}
                >
                {faq.answer}
                </div>

          </div>
        ))}
      </div>

        <div className="buttons flex flex-col items-center justify-center gap-4 mt-8">
            <button className="btn-primary flex items-center justify-center rounded-full gap-x-4">It's time to try for yourself <img src={Open} alt="Open Icon" /></button>
            <p className="text-sm">No credit card required. <strong>It's free to use !</strong></p>
        </div>
    </section>
  );
};

export default Faqs;
