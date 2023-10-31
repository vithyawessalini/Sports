import React from 'react';
import Sidebar from '../components/Fside';
import Header from '../components/Fhead';
function Fabout() {
  return (
    <div className="app">
      <Sidebar className="sidebar" />
      <div className="app-main">
        <Header />
        <div className="about-container">
          <h1 style={{fontFamily: "Footlight MT Light"}}>About Us</h1>
          <p>
            Welcome to the Sports Management System! We are passionate about sports and dedicated to providing a cutting-edge platform that empowers sports organizations, teams, athletes, and enthusiasts.
          </p>
          <h2>Our Mission</h2>
          <p>
            Our mission is to simplify the management and organization of sports events, teams, and related activities. We understand the unique challenges faced by sports administrators, coaches, and athletes, and we aim to make their lives easier through innovative technology.
          </p>
          <h2>Why Choose Us?</h2>
          <ul>
            <li>
              <strong>Comprehensive Solution:</strong> We offer a comprehensive suite of tools to manage sports teams, schedule events, track player performance, and streamline registration and payments.
            </li>
            <li>
              <strong>User-Friendly Interface:</strong> Our user-friendly interface is designed to be intuitive and easy to navigate, ensuring that sports administrators and participants can use our platform effectively.
            </li>
            <li>
              <strong>Real-Time Updates:</strong> Stay informed with real-time updates and notifications. Our system keeps everyone in the loop, from coaches and players to parents and fans.
            </li>
            <li>
              <strong>Data-Driven Insights:</strong> Make data-driven decisions with customizable reporting and analytics. Gain valuable insights into team performance and player statistics.
            </li>
          </ul>
          <h2>Available Games</h2>
          <p>
            The Sports Management System supports a wide range of sports and games, including but not limited to:
          </p>
          <ul>
            <li>Football (Soccer)</li>
            <li>Basketball</li>
            <li>Tennis</li>
            <li>Baseball</li>
            <li>Volleyball</li>
            <li>Hockey</li>
            <li>Cricket</li>
            <li>Swimming</li>
          </ul>
          <h2>Our Vision</h2>
          <p>
            We envision a future where sports organizations and teams can focus more on their passion for sports, coaching, and athletic development, and less on administrative tasks. Our goal is to empower sports managers, coaches, and players with the tools they need to succeed and excel in their respective fields.
          </p>
          <h2>Get in Touch</h2>
          <p>
            We value your feedback and inquiries. If you have any questions, suggestions, or partnership opportunities, please don't hesitate to contact our team at <a href="mailto:info@sportsmanagementsystem.com">info@sportsmanagementsystem.com</a>. We're here to help and make your sports experience even better!
          </p>
        </div>
      </div>
    </div>
  );
}
export default Fabout;
