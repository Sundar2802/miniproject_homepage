// import React from 'react';
// import './style.css';

// function Homepage() {
//   return (
//     <div className="homepage">
//       {/* Header */}
//       <header className="header">
//         <div className="logo">TicketBot</div>
//         <nav>
//           <ul className="nav-links">
//             <li>Home</li>
//             <li>Features</li>
//             <li>Book Tickets</li>
//             <li>Testimonials</li>
//             <li>Contact Us</li>
//           </ul>
//         </nav>
//         <button className="cta-button">Book Now</button>
//       </header>

//       {/* Hero Section */}
//       <section className="hero-banner">
//         <h1>Your Gateway to Effortless Travel Booking</h1>
//         <p>Book tickets with ease using our AI-driven Chatbot</p>
//         <button className="hero-button">Get Started</button>
//       </section>

//       {/* Feature Section */}
//       <section className="features">
//         <div className="feature">
//           <img src="https://source.unsplash.com/weekly?chatbot" alt="Chatbot feature" />
//           <div className="feature-text">
//             <h3>Quick Book with Chatbot</h3>
//             <p>Experience seamless booking by chatting directly with our AI-powered bot.</p>
//           </div>
//         </div>
//         <div className="feature">
//           <div className="feature-text">
//             <h3>Real-Time Availability</h3>
//             <p>Instant access to ticket availability updates and schedule changes.</p>
//           </div>
//           <img src="https://source.unsplash.com/weekly?calendar" alt="Real-time availability" />
//         </div>
//         <div className="feature">
//           <img src="https://source.unsplash.com/weekly?payment" alt="Easy payments" />
//           <div className="feature-text">
//             <h3>Easy Payments</h3>
//             <p>Choose from a range of secure payment options for hassle-free transactions.</p>
//           </div>
//         </div>
//       </section>

//       {/* Popular Destinations */}
//       <section className="destinations-banner">
//         <h2>Explore Our Popular Destinations</h2>
//         <div className="destinations-carousel">
//           <img src="https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Destination 1" />
//           <img src="https://plus.unsplash.com/premium_photo-1672082110907-6d4106ee9e4d?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Destination 2" />
//           <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Destination 3" />
//         </div>
//       </section>

//       {/* How It Works Section */}
//       <section className="how-it-works">
//         <h2>How It Works</h2>
//         <div className="steps">
//           <div className="step">
//             <img src="https://plus.unsplash.com/premium_photo-1677094310919-d0361465d3be?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Start chatting" />
//             <h3>Start Chatting</h3>
//             <p>Engage with our chatbot to begin your booking process.</p>
//           </div>
//           <div className="step">
//             <img src="https://images.unsplash.com/photo-1623068285726-21b0fcabe7f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Choose tickets" />
//             <h3>Choose Tickets</h3>
//             <p>Select from available tickets according to your preferences.</p>
//           </div>
//           <div className="step">
//             <img src="https://images.unsplash.com/photo-1556742521-9713bf272865?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Confirm payment" />
//             <h3>Confirm Payment</h3>
//             <p>Complete your booking with our secure payment process.</p>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="testimonials">
//         <h2>What Our Users Say</h2>
//         <div className="testimonial-slider">
//           <div className="testimonial">
//             <img src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User 1" />
//             <p>"Fast and easy booking experience!"</p>
//           </div>
//           <div className="testimonial">
//             <img src="https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User 2" />
//             <p>"Great support and an overall enjoyable experience!"</p>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="footer">
//         <div className="footer-links">
//           <a href="#">Privacy Policy</a>
//           <a href="#">Terms of Service</a>
//         </div>
//         <div className="social-icons">
//           <a href="#">Facebook</a>
//           <a href="#">Twitter</a>
//           <a href="#">Instagram</a>
//           <a href="#">LinkedIn</a>
//         </div>
//         <p>Contact: support@ticketbot.com</p>
//       </footer>
//     </div>
//   );
// }

// export default Homepage;

import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div className="homepage">
      {/* Header */}
      <header className="header">
        <div className="logo">TicketBot</div>
        <nav>
          <ul className="nav-links">
            <li>Home</li>
            <li>Features</li>
            <li>
              Book Tickets
            </li>
            <li>Testimonials</li>
            <li>Contact Us</li>
          </ul>
        </nav>
        <button className="cta-button"><Link to="/book-tickets">Book Now</Link></button>
      </header>

      {/* Hero Section */}
      <section className="hero-banner">
        <h1>Your Gateway to Effortless Travel Booking</h1>
        <p>Book tickets with ease using our AI-driven Chatbot</p>
        <button className="hero-button">Get Started</button>
      </section>

      {/* Feature Section */}
      <section className="features">
        <h2><center>Features</center></h2>
        <div className="feature-grid">
          <div className="feature">
            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/chat-bot-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--hello-logo-chatting-robot-chatbot-customer-support-pack-tech-illustrations-4497578.png?f=webp" alt="Chatbot feature" />
            <div className="feature-text">
              <h3>Quick Book with Chatbot</h3>
              <p>Experience seamless booking by chatting directly with our AI-powered bot.</p>
            </div>
          </div>
          <div className="feature">
            <img src="https://img.freepik.com/premium-vector/online-travel-ticket-store-through-transportation-journey-booking-hand-drawn-illustration_2175-10329.jpg?semt=ais_hybrid" alt="Real-time availability" />
            <div className="feature-text">
              <h3>Real-Time Availability</h3>
              <p>Real time, Instant access to ticket availability updates and schedule changes.</p>
            </div>
          </div>
          <div className="feature">
            <img src="https://img.freepik.com/premium-vector/vector-illustration-about-concept-easy-cashless-payment-contactless-electronic-money_675567-6488.jpg?semt=ais_hybrid" alt="Easy payments" />
            <div className="feature-text">
              <h3>Easy Payments</h3>
              <p>Choose from a range of secure payment options for hassle-free transactions.</p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="destinations-banner">
        <h2>Explore Our Popular Destinations</h2>
        <div className="destinations-carousel">
          <img src="https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?q=80&w=1887&auto=format&fit=crop" alt="Destination 1" />
          <img src="https://plus.unsplash.com/premium_photo-1672082110907-6d4106ee9e4d?q=80&w=1965&auto=format&fit=crop" alt="Destination 2" />
          <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop" alt="Destination 3" />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <img src="https://plus.unsplash.com/premium_photo-1677094310919-d0361465d3be?q=80&w=1932&auto=format&fit=crop" alt="Start chatting" />
            <h3>Start Chatting</h3>
            <p>Engage with our chatbot to begin your booking process.</p>
          </div>
          <div className="step">
            <img src="https://images.unsplash.com/photo-1623068285726-21b0fcabe7f8?q=80&w=2070&auto=format&fit=crop" alt="Choose tickets" />
            <h3>Choose Tickets</h3>
            <p>Select from available tickets according to your preferences.</p>
          </div>
          <div className="step">
            <img src="https://images.unsplash.com/photo-1556742521-9713bf272865?q=80&w=1887&auto=format&fit=crop" alt="Confirm payment" />
            <h3>Confirm Payment</h3>
            <p>Complete your booking with our secure payment process.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-slider">
          <div className="testimonial">
            <img src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=1887&auto=format&fit=crop" alt="User 1" />
            <p>"Fast and easy booking experience!"</p>
          </div>
          <div className="testimonial">
            <img src="https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=1887&auto=format&fit=crop" alt="User 2" />
            <p>"Great support and an overall enjoyable experience!"</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
        <div className="social-icons">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
        </div>
        <p>Contact: support@ticketbot.com</p>
      </footer>
    </div>
  );
}

export default Homepage;
