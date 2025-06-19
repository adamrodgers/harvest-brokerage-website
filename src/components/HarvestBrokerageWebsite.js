"use client";

import React, { useState } from "react";
import { Menu, X, Phone, Mail, MapPin, ChevronDown, Users, Target, Award, Handshake } from "lucide-react";
import Image from "next/image";

const HarvestBrokerageWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("Sending...");

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("Thank you! Your message has been sent.");
        e.target.reset();
      } else {
        setFormStatus("Oops! There was a problem submitting your form");
      }
    } catch (error) {
      setFormStatus("Oops! There was a problem submitting your form");
    }
  };

  const retailers = ["HEB", "Kroger Texas", "Whole Foods SW", "Central Market", "Albertsons Southern", "Costco Texas", "Brookshire Brothers", "United Supermarkets", "Fiesta Mart", "Tom Thumb"];

  const teamMembers = [
    {
      name: "Susan Keinat",
      title: "Co-Owner",
      experience: "22 years experience",
      description: "Established Harvest Brokerage in March 2003. Specializes in headquarter retailer calls, brand management, and promotional planning.",
      phone: "(832)) 368-1234",
      email: "susan@harvestbrokerage.com",
    },
    {
      name: "Rick Keinat",
      title: "Co-Owner",
      experience: "30 years experience",
      description: "Joined Harvest Brokerage in April 2010. Expert in distributor relationships and sales execution.",
      phone: "(832) 586-5562",
      email: "rick@harvestbrokerage.com",
    },
    {
      name: "Tori Clough",
      title: "Senior Account Manager",
      experience: "10 years experience",
      description: "Team member since 2014, specializing in natural and independent markets with strong retail execution skills.",
      phone: "(832) 690-6707",
      email: "tori@harvestbrokerage.com",
    },
  ];

  // Get Tori's contact info for default contact section
  const defaultContact = teamMembers.find((member) => member.name === "Tori Clough");

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-emerald-900 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-amber-300">Harvest Brokerage</div>
              <div className="hidden md:block ml-4 text-stone-200 text-sm">Natural & Specialty Trade Specialists</div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {["Home", "About", "Services", "Markets", "Team", "Contact"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-stone-200 hover:text-amber-300 transition-colors duration-200 font-medium">
                  {item}
                </a>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-stone-200 hover:text-amber-300">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-emerald-800">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {["Home", "About", "Services", "Markets", "Team", "Contact"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="block text-stone-200 hover:text-amber-300 py-2 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white">
        <div className="relative max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-serif font-black mb-4 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent drop-shadow-xl leading-tight">
              Harvest Brokerage
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-stone-100 tracking-wide">
              <span className="font-semibold text-amber-300 text-shadow-sm">Back to Basics</span>
              <br />
              <span className="text-stone-300 text-xl md:text-2xl">Food Brokerage</span>
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-stone-200 max-w-3xl mx-auto">
              Texas food broker specializing in natural foods brokerage and specialty trade grocery segments across Texas and surrounding areas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#about" className="bg-amber-500 hover:bg-amber-600 text-emerald-900 font-bold py-3 px-8 rounded-lg transition-colors duration-200 text-center">
                Our Services
              </a>
              <a
                href="#contact"
                className="border-2 border-amber-300 text-amber-300 hover:bg-amber-300 hover:text-emerald-900 font-bold py-3 px-8 rounded-lg transition-colors duration-200 text-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-emerald-900 mb-4">Who We Are</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-stone-700 mb-6 leading-relaxed">
                Harvest Brokerage is a leading Texas food broker specializing in natural foods brokerage and the specialty trade grocery segment, offering manufacturers the &quot;back to basics&quot;
                approach to selling their products.
              </p>
              <p className="text-lg text-stone-700 mb-6 leading-relaxed">
                As an experienced Texas food broker, we believe in building detail-oriented relationships from a solid foundation with retailers across Texas and surrounding areas. Our natural foods
                brokerage expertise serves both emerging and established brands.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="text-emerald-700" size={28} />
                  </div>
                  <h3 className="font-semibold text-emerald-900">22+ Years</h3>
                  <p className="text-stone-600 text-sm">Industry Experience</p>
                </div>
                <div className="text-center">
                  <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Target className="text-amber-600" size={28} />
                  </div>
                  <h3 className="font-semibold text-emerald-900">Full Service</h3>
                  <p className="text-stone-600 text-sm">From Presentation to Promotion</p>
                </div>
              </div>
            </div>

            <div className="bg-stone-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">Our Services Include</h3>
              <ul className="space-y-3">
                {[
                  "Initial Product Presentations",
                  "Strategic Product Placement",
                  "Ongoing Account Maintenance",
                  "Promotional Planning & Execution",
                  "Brand Management",
                  "Retailer & Distributor Relations",
                ].map((service, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                    <span className="text-stone-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Market Coverage */}
      <section id="markets" className="py-16 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-emerald-900 mb-4">Market Coverage</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-lg text-stone-700 max-w-2xl mx-auto">
              Texas food broker serving major retailers and distributors across Texas, including Houston, Dallas, Austin, San Antonio, and surrounding areas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-emerald-900 mb-4 flex items-center">
                <Award className="mr-2 text-amber-500" size={24} />
                Major Retailers
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {retailers.slice(0, 8).map((retailer, index) => (
                  <div key={index} className="text-stone-700 text-sm py-1">
                    {retailer}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-emerald-900 mb-4 flex items-center">
                <Handshake className="mr-2 text-amber-500" size={24} />
                Distributors
              </h3>
              <div className="space-y-2">
                {["KeHE Distributors", "UNFI Distributors", "Chefs' Warehouse", "Jakes Finer Foods", "Grocers Supply / C&S"].map((distributor, index) => (
                  <div key={index} className="text-stone-700 text-sm py-1">
                    {distributor}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-emerald-900 mb-4 flex items-center">
                <Target className="mr-2 text-amber-500" size={24} />
                Independents
              </h3>
              <div className="space-y-2">
                {["KeHE Independents", "UNFI Independents", "Rouses Supermarkets", "Akins and Chamberlins"].map((independent, index) => (
                  <div key={index} className="text-stone-700 text-sm py-1">
                    {independent}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-emerald-900 mb-4">Our Team</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-lg text-stone-700 max-w-2xl mx-auto">Experienced professionals dedicated to building lasting partnerships</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-stone-100 p-6 rounded-lg text-center">
                {member.name === "Susan Keinat" && (
                  <div className="w-24 h-24 bg-emerald-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="text-emerald-700" size={32} />
                  </div>
                )}
                {member.name === "Rick Keinat" && (
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden relative">
                    <Image src="/rick.jpeg" alt="Rick Keinat" fill className="object-cover" sizes="96px" />
                  </div>
                )}
                {member.name === "Tori Clough" && (
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden relative">
                    <Image src="/tori.png" alt="Tori Clough" fill className="object-cover" sizes="96px" />
                  </div>
                )}
                <h3 className="text-xl font-bold text-emerald-900 mb-2">{member.name}</h3>
                <p className="text-amber-600 font-semibold mb-2">{member.title}</p>
                <p className="text-sm text-stone-600 mb-3">{member.experience}</p>
                <p className="text-stone-700 text-sm leading-relaxed mb-4">{member.description}</p>

                {/* Contact Information */}
                <div className="space-y-2 pt-4 border-t border-stone-300">
                  <div className="flex items-center justify-center text-sm text-stone-600">
                    <Phone className="text-amber-500 mr-2" size={16} />
                    <span>{member.phone}</span>
                  </div>
                  <div className="flex items-center justify-center text-sm text-stone-600">
                    <Mail className="text-amber-500 mr-2" size={16} />
                    <span>{member.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-lg text-stone-200 max-w-2xl mx-auto">Ready to build a solid foundation for your products? Let&apos;s discuss how we can help.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="text-amber-300 mr-4" size={24} />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-stone-200">{defaultContact?.phone}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="text-amber-300 mr-4" size={24} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-stone-200">{defaultContact?.email}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-amber-300 mr-4" size={24} />
                  <div>
                    <p className="font-semibold">Service Area</p>
                    <p className="text-stone-200">Texas & Surrounding Areas</p>
                  </div>
                </div>
              </div>
            </div>

            <section className="bg-white bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-emerald-900">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full p-3 rounded-lg bg-white bg-opacity-20 placeholder-stone-300 text-stone-100 border border-stone-300 focus:border-amber-300 focus:outline-none focus:bg-white focus:bg-opacity-30 focus:text-emerald-900"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full p-3 rounded-lg bg-white bg-opacity-20 placeholder-stone-300 text-stone-100 border border-stone-300 focus:border-amber-300 focus:outline-none focus:bg-white focus:bg-opacity-30 focus:text-emerald-900"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  className="w-full p-3 rounded-lg bg-white bg-opacity-20 placeholder-stone-300 text-stone-100 border border-stone-300 focus:border-amber-300 focus:outline-none focus:bg-white focus:bg-opacity-30 focus:text-emerald-900"
                />
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  required
                  className="w-full p-3 rounded-lg bg-white bg-opacity-20 placeholder-stone-300 text-stone-100 border border-stone-300 focus:outline-none resize-none focus:border-amber-300 focus:bg-white focus:bg-opacity-30 focus:text-emerald-900"
                />
                <button
                  type="submit"
                  disabled={formStatus === "Sending..."}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-emerald-900 font-bold py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50"
                >
                  {formStatus === "Sending..." ? "Sending..." : "Send Message"}
                </button>
                {formStatus && formStatus !== "Sending..." && <p className={`text-center ${formStatus.includes("Thank you") ? "text-green-300" : "text-red-300"}`}>{formStatus}</p>}
              </form>
            </section>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-950 text-stone-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-amber-300 mb-2">Harvest Brokerage</div>
            <p className="mb-4">Natural & Specialty Trade Specialists</p>
            <p className="text-sm text-stone-400">© 2025 Harvest Brokerage. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HarvestBrokerageWebsite;
