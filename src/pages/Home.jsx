import { useEffect, useState } from 'react'; // For optional animation control

function Home() {
  const [isVisible, setIsVisible] = useState(false); // Optional: For load animation

  useEffect(() => {
    setIsVisible(true); // Trigger animation on mount
  }, []);

  const testimonials = [
    { 
      name: 'John Doe', 
      role: 'CEO, TechCorp', 
      quote: 'NovaStack transformed our operations with innovative solutions that exceeded expectations!', 
      avatar: 'https://thumbs.dreamstime.com/b/customizable-illustration-features-defendant-suit-providing-neutral-professional-appearance-337075138.jpg', // Updated professional vector
      rating: 5
    },
    { 
      name: 'Jane Smith', 
      role: 'CTO, Innovate Ltd', 
      quote: 'Exceptional service and cutting-edge tech—highly recommend for any business!', 
      avatar: 'https://www.creativefabrica.com/wp-content/uploads/2021/04/11/Woman-Avatar-Icon-Vector-Graphics-10677522-1-1-580x387.jpg', // Updated professional vector
      rating: 5
    },
    { 
      name: 'Alex Johnson', 
      role: 'Director, FutureTech', 
      quote: 'Their team delivered results that propelled our growth—professional and reliable.', 
      avatar: 'https://st3.depositphotos.com/17418852/36249/v/450/depositphotos_362494404-stock-illustration-stylish-young-man-showing-spreading.jpg', // Added third for balance
      rating: 4.5
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-blue-900 text-white relative overflow-hidden">
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-glow relative z-10">What Our Clients Say</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className={`bg-gradient-to-br from-gray-800 to-blue-800 p-6 rounded-xl shadow-2xl max-w-md transform transition-all duration-300 hover:scale-105 hover:shadow-purple-500/50 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} 
            style={{ animationDelay: `${index * 0.2}s` }} // Staggered animation
          >
            <img 
              src="https://media.istockphoto.com/id/1423553220/vector/quotation-marks-icon-for-design-easily-editable.jpg?s=612x612&w=0&k=20&c=YeT4b6LdMhbm8d2a_guYNRnTcOArIMHaUUOL4WA6X00=" 
              alt="Quote Icon" 
              className="w-8 h-8 mb-4 opacity-70" 
            />
            <p className="italic text-lg mb-4">"{testimonial.quote}"</p>
            <div className="flex items-center mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={`text-yellow-400 ${i < Math.floor(testimonial.rating) ? '' : 'opacity-50'}`}>★</span>
              ))}
            </div>
            <div className="flex items-center">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name} 
                className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-purple-500" // Added border for pop
              />
              <div>
                <h4 className="font-semibold text-xl">{testimonial.name}</h4>
                <p className="text-sm opacity-80">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home;