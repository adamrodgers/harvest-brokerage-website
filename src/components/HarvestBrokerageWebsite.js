"use client";

import React, { useState } from "react";
import { Menu, X, Phone, Mail, MapPin, Users, Target, Award, Handshake, Plus, Minus, FlipHorizontal } from "lucide-react";
import Image from "next/image";

const HarvestBrokerageWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("");
  const [expandedService, setExpandedService] = useState(null);
  const [flippedCard, setFlippedCard] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("Sending...");

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/xrbkljlg", {
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

  const services = [
    {
      title: "Initial Product Presentations",
      description: "Professional presentations to key decision-makers at retail headquarters and distributor locations, showcasing your products' unique value proposition and market opportunity.",
      icon: <Target className="text-amber-500" size={24} />,
    },
    {
      title: "Strategic Product Placement",
      description: "Optimizing product positioning within stores through planogram analysis, category management expertise, and strategic shelf placement negotiations.",
      icon: <Award className="text-amber-500" size={24} />,
    },
    {
      title: "Ongoing Account Maintenance",
      description: "Continuous relationships with retail buyers and key decision makers, ensuring product availability, addressing issues promptly, and maintaining strong partnerships.",
      icon: <Users className="text-amber-500" size={24} />,
    },
    {
      title: "Promotional Planning & Execution",
      description: "Comprehensive promotional strategies including trade deals, seasonal campaigns, new product launches, and in-store marketing initiatives.",
      icon: <Handshake className="text-amber-500" size={24} />,
    },
    {
      title: "Brand Management",
      description: "Complete brand stewardship including market positioning, competitive analysis, pricing strategy, and brand integrity maintenance across all channels.",
      icon: <Award className="text-amber-500" size={24} />,
    },
    {
      title: "Retailer & Distributor Relations",
      description: "Building and maintaining strong relationships with key stakeholders throughout the supply chain, from regional managers to corporate headquarters.",
      icon: <Handshake className="text-amber-500" size={24} />,
    },
  ];

  const retailers = ["HEB", "Kroger Texas", "Whole Foods SW", "Central Market", "Albertsons Southern", "Costco Texas", "Brookshire Brothers", "United Supermarkets", "Fiesta Mart", "Tom Thumb"];

  const teamMembers = [
    {
      name: "Susan Keinat",
      title: "Co-Owner",
      experience: "22+ years experience",
      description: "Established Harvest Brokerage in March 2003. Specializes in headquarter retailer calls, brand management, and promotional planning.",
      phone: "(832) 368-1234",
      email: "susan@harvestbrokerage.com",
      achievements: ["Founded Harvest Brokerage", "Former National Sales Manager", "Expert in Brand Management", "Retail Relationship Specialist"],
      previousRoles: ["National Sales Manager at Satay", "Account Executive at CrossMark Inc.", "Regional Sales Manager at Tony Chachere's Creole Foods"],
    },
    {
      name: "Rick Keinat",
      title: "Co-Owner",
      experience: "30+ years experience",
      description: "Joined Harvest Brokerage in April 2010. Expert in distributor relationships and sales execution.",
      phone: "(832) 586-5562",
      email: "rick@harvestbrokerage.com",
      achievements: ["Distributor Relations Expert", "Sales Execution Specialist", "30+ Years Industry Veteran", "Customer Development Leader"],
      previousRoles: ["Account Manager at Atlanta Foods International", "Customer Development Manager at Advantage Sales and Marketing", "Regional Sales Manager at Tony Chachere's"],
    },
    {
      name: "Tori Clough",
      title: "Senior Account Manager",
      experience: "10+ years experience",
      description: "Team member since 2014, specializing in natural and independent markets with strong retail execution skills.",
      phone: "(281) 690-6707",
      email: "tori@harvestbrokerage.com",
      achievements: ["Natural Markets Specialist", "Independent Retail Expert", "In-Store Execution Pro", "Rising Industry Leader"],
      previousRoles: ["Sales Representative for Natural and Independent markets", "Progressive advancement through Account Manager to Senior Account Manager"],
    },
  ];

  // Get Tori's contact info for default contact section
  const defaultContact = teamMembers.find((member) => member.name === "Tori Clough");

  return (
    <div className="min-h-screen bg-stone-50" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap");

        .heading-font {
          font-family: "Crimson Text", serif;
        }
        .body-font {
          font-family: "Inter", sans-serif;
        }

        .nav-link {
          position: relative;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-link::after {
          content: "";
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 50%;
          background-color: #fbbf24;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateX(-50%);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .team-card {
          cursor: pointer;
          height: 400px;
          position: relative;
          transition: transform 0.3s ease;
        }

        .team-card:hover {
          transform: translateY(-4px);
        }

        .card-content {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 1rem;
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .card-front {
          opacity: 1;
          transform: scale(1);
          z-index: 2;
        }

        .card-back {
          opacity: 0;
          transform: scale(0.8);
          z-index: 1;
        }

        .team-card.is-flipped .card-front {
          opacity: 0;
          transform: scale(0.8);
          z-index: 1;
        }

        .team-card.is-flipped .card-back {
          opacity: 1;
          transform: scale(1);
          z-index: 2;
        }

        .section-header {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .service-item {
          transition: all 0.3s ease;
        }

        .flip-indicator {
          transition: all 0.3s ease;
          opacity: 0.7;
        }

        .flip-indicator:hover {
          transform: scale(1.2);
          opacity: 1;
        }
      `}</style>

      {/* Header */}
      <header className="bg-emerald-900 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-amber-300 body-font">Harvest Brokerage</div>
              <div className="hidden md:block ml-4 text-stone-200 text-sm body-font font-light">Natural & Specialty Trade Specialists</div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {["Home", "About", "Services", "Markets", "Team", "Contact"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="nav-link text-stone-200 hover:text-amber-300 font-medium body-font">
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
      <section id="home" className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white overflow-hidden">
        {/* Background Image with WebP/JPEG fallback */}
        <div className="absolute inset-0 z-0">
          <picture>
            <source srcSet="/wheatfield.webp" type="image/webp" />
            <Image src="/wheatfield.jpg" alt="" fill className="object-cover opacity-20" sizes="100vw" priority />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/80 via-emerald-800/75 to-emerald-700/70"></div>
        </div>

        <div className="relative max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 py-24 z-10">
          <div className="text-center relative">
            <h1 className="text-5xl md:text-7xl heading-font font-black mb-4 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent drop-shadow-xl leading-tight relative z-10">
              Harvest Brokerage
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl mb-8 text-stone-200 max-w-3xl mx-auto body-font font-light leading-relaxed relative z-10">
              Food broker specializing in natural foods brokerage and specialty trade grocery segments across the Southwest and Midwest regions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
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
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-emerald-900 mb-6 body-font section-header">Who We Are</h2>
            <div className="w-32 h-1 bg-amber-500 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-lg text-stone-700 leading-relaxed body-font">
                Harvest Brokerage is a leading food broker specializing in natural foods brokerage and the specialty trade grocery segment.
              </p>
              <p className="text-lg text-stone-700 leading-relaxed body-font">
                As an experienced food broker, we believe in building detail-oriented relationships from a solid foundation with retailers across the Southwest and Midwest regions. Our natural foods
                brokerage expertise serves both emerging and established brands.
              </p>

              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="text-center">
                  <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Users className="text-emerald-700" size={32} />
                  </div>
                  <h3 className="font-bold text-emerald-900 heading-font text-xl">22+ Years</h3>
                  <p className="text-stone-600 text-sm body-font font-medium">Industry Experience</p>
                </div>
                <div className="text-center">
                  <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Target className="text-amber-600" size={32} />
                  </div>
                  <h3 className="font-bold text-emerald-900 heading-font text-xl">Full Service</h3>
                  <p className="text-stone-600 text-sm body-font font-medium">From Presentation to Promotion</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-stone-50 to-stone-100 p-10 rounded-2xl shadow-xl">
              <h3 className="text-3xl font-bold text-emerald-900 mb-8 body-font">Our Services Include</h3>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="service-item">
                    <div
                      className="flex items-center justify-between cursor-pointer p-4 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300"
                      onClick={() => setExpandedService(expandedService === index ? null : index)}
                    >
                      <div className="flex items-center">
                        <div className="mr-4">{service.icon}</div>
                        <span className="text-stone-700 font-medium body-font">{service.title}</span>
                      </div>
                      <div className="text-amber-500">{expandedService === index ? <Minus size={20} /> : <Plus size={20} />}</div>
                    </div>
                    {expandedService === index && (
                      <div className="px-4 pb-4 pt-2">
                        <p className="text-stone-600 text-sm leading-relaxed body-font pl-12">{service.description}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Coverage */}
      <section id="markets" className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-emerald-900 mb-6 body-font section-header">Market Coverage</h2>
            <div className="w-32 h-1 bg-amber-500 mx-auto mb-8"></div>
            <p className="text-xl text-stone-700 max-w-3xl mx-auto body-font font-light leading-relaxed">
              Food broker serving major retailers and distributors across the Southwest and Midwest regions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-emerald-900 mb-6 flex items-center body-font">
                <Award className="mr-3 text-amber-500" size={28} />
                Major Retailers
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {retailers.slice(0, 8).map((retailer, index) => (
                  <div key={index} className="text-stone-700 text-sm py-2 px-3 bg-stone-50 rounded-lg body-font font-medium">
                    {retailer}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-emerald-900 mb-6 flex items-center body-font">
                <Handshake className="mr-3 text-amber-500" size={28} />
                Distributors
              </h3>
              <div className="space-y-3">
                {["KeHE Distributors", "UNFI Distributors", "Chefs' Warehouse", "Jakes Finer Foods", "Grocers Supply / C&S"].map((distributor, index) => (
                  <div key={index} className="text-stone-700 text-sm py-2 px-3 bg-stone-50 rounded-lg body-font font-medium">
                    {distributor}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-emerald-900 mb-6 flex items-center body-font">
                <Target className="mr-3 text-amber-500" size={28} />
                Independents
              </h3>
              <div className="space-y-3">
                {["KeHE Independents", "UNFI Independents", "Rouses Supermarkets", "Akins and Chamberlins"].map((independent, index) => (
                  <div key={index} className="text-stone-700 text-sm py-2 px-3 bg-stone-50 rounded-lg body-font font-medium">
                    {independent}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-emerald-900 mb-6 body-font section-header">Our Team</h2>
            <div className="w-32 h-1 bg-amber-500 mx-auto mb-8"></div>
            <p className="text-xl text-stone-700 max-w-3xl mx-auto body-font font-light leading-relaxed">Experienced professionals dedicated to building lasting partnerships</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 mb-16">
            {teamMembers.map((member, index) => {
              const isFlipped = flippedCard === index;

              return (
                <div
                  key={index}
                  className={`team-card ${isFlipped ? "is-flipped" : ""}`}
                  onClick={() => {
                    setFlippedCard(flippedCard === index ? null : index);
                  }}
                >
                  {/* Card Front */}
                  <div className="card-content card-front bg-gradient-to-br from-stone-50 to-stone-100 shadow-xl">
                    <div className="p-6 flex flex-col items-center h-full">
                      {member.name === "Susan Keinat" && (
                        <div className="w-20 h-20 bg-emerald-200 rounded-full mb-4 flex items-center justify-center shadow-lg">
                          <Users className="text-emerald-700" size={28} />
                        </div>
                      )}
                      {member.name === "Rick Keinat" && (
                        <div className="w-20 h-20 rounded-full mb-4 overflow-hidden relative shadow-lg">
                          <Image src="/rick.jpeg" alt="Rick Keinat" fill className="object-cover" sizes="80px" />
                        </div>
                      )}
                      {member.name === "Tori Clough" && (
                        <div className="w-20 h-20 rounded-full mb-4 overflow-hidden relative shadow-lg">
                          <Image src="/tori.png" alt="Tori Clough" fill className="object-cover" sizes="80px" />
                        </div>
                      )}

                      <div className="text-center flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-emerald-900 mb-2 body-font">{member.name}</h3>
                          <p className="text-amber-600 font-bold mb-2 body-font">{member.title}</p>
                          <p className="text-sm text-stone-600 mb-3 body-font font-medium">{member.experience}</p>
                          <p className="text-stone-700 text-sm leading-relaxed body-font">{member.description}</p>
                        </div>

                        <div className="mt-4 pt-4 border-t border-stone-300 mb-6">
                          <div className="flex items-center justify-center text-xs text-stone-600 body-font mb-2">
                            <Phone className="text-amber-500 mr-2" size={14} />
                            <span>{member.phone}</span>
                          </div>
                          <div className="flex items-center justify-center text-xs text-stone-600 body-font">
                            <Mail className="text-amber-500 mr-2" size={14} />
                            <span>{member.email}</span>
                          </div>
                        </div>
                      </div>

                      <div className="absolute bottom-3 right-3 flip-indicator">
                        <FlipHorizontal size={16} className="text-amber-500" />
                      </div>
                    </div>
                  </div>

                  {/* Card Back */}
                  <div className="card-content card-back bg-gradient-to-br from-emerald-900 to-emerald-800 shadow-xl text-white">
                    <div className="p-6 flex flex-col h-full">
                      <h3 className="text-xl font-bold mb-4 body-font text-amber-300 text-center">{member.name}</h3>

                      <div className="mb-6 flex-1">
                        <h4 className="text-sm font-semibold mb-2 text-amber-200 body-font">Key Achievements</h4>
                        <ul className="space-y-1 mb-4">
                          {member.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start text-xs body-font">
                              <div className="w-1 h-1 bg-amber-400 rounded-full mr-2 flex-shrink-0 mt-1.5"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>

                        <h4 className="text-sm font-semibold mb-2 text-amber-200 body-font">Previous Experience</h4>
                        <ul className="space-y-1">
                          {member.previousRoles.map((role, idx) => (
                            <li key={idx} className="flex items-start text-xs body-font text-stone-200">
                              <div className="w-1 h-1 bg-amber-400 rounded-full mr-2 flex-shrink-0 mt-1.5"></div>
                              <span>{role}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="absolute bottom-3 right-3 flip-indicator">
                        <FlipHorizontal size={16} className="text-amber-300" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-emerald-900 text-white relative z-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 body-font section-header">Get In Touch</h2>
            <div className="w-32 h-1 bg-amber-500 mx-auto mb-8"></div>
            <p className="text-xl text-stone-200 max-w-3xl mx-auto body-font font-light leading-relaxed">Ready to build a solid foundation for your products? Let&apos;s discuss how we can help.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-bold mb-8 body-font">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="text-amber-300 mr-6" size={28} />
                  <div>
                    <p className="font-bold text-lg body-font">Email</p>
                    <p className="text-stone-200 body-font">info@harvestbrokerage.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-amber-300 mr-6" size={28} />
                  <div>
                    <p className="font-bold text-lg body-font">Service Area</p>
                    <p className="text-stone-200 body-font">Southwest and Midwest regions</p>
                  </div>
                </div>
              </div>
            </div>

            <section className="bg-white bg-opacity-10 p-8 rounded-2xl shadow-2xl backdrop-blur-sm">
              <h3 className="text-3xl font-bold mb-8 text-emerald-900 body-font">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full p-4 rounded-xl bg-white bg-opacity-90 placeholder-stone-500 text-stone-900 border border-stone-300 focus:border-amber-300 focus:outline-none focus:bg-white body-font transition-all duration-300"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full p-4 rounded-xl bg-white bg-opacity-90 placeholder-stone-500 text-stone-900 border border-stone-300 focus:border-amber-300 focus:outline-none focus:bg-white body-font transition-all duration-300"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  className="w-full p-4 rounded-xl bg-white bg-opacity-90 placeholder-stone-500 text-stone-900 border border-stone-300 focus:border-amber-300 focus:outline-none focus:bg-white body-font transition-all duration-300"
                />
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  required
                  className="w-full p-4 rounded-xl bg-white bg-opacity-90 placeholder-stone-500 text-stone-900 border border-stone-300 focus:outline-none resize-none focus:border-amber-300 focus:bg-white body-font transition-all duration-300"
                />
                <button
                  type="submit"
                  disabled={formStatus === "Sending..."}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-emerald-900 font-bold py-4 px-8 rounded-xl transition-all duration-300 disabled:opacity-50 body-font text-lg shadow-lg hover:shadow-xl"
                >
                  {formStatus === "Sending..." ? "Sending..." : "Send Message"}
                </button>
                {formStatus && formStatus !== "Sending..." && <p className={`text-center body-font ${formStatus.includes("Thank you") ? "text-green-300" : "text-red-300"}`}>{formStatus}</p>}
              </form>
            </section>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-950 text-stone-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-300 mb-3 body-font">Harvest Brokerage</div>
            <p className="mb-6 body-font text-lg font-light">Natural & Specialty Trade Specialists</p>
            <p className="text-sm text-stone-400 body-font">© 2025 Harvest Brokerage. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HarvestBrokerageWebsite;
