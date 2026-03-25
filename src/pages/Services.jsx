// Services.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const servicesData = [
    { title: 'Web Development', description: 'Custom websites & web apps' },
    { title: 'Mobile Apps', description: 'iOS & Android apps' },
    { title: 'UI/UX Design', description: 'User-friendly designs' },
];

const Services = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10">
                    Our Services
                </h1>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {servicesData.map((service, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <Link to="/" className="text-brand-red font-semibold hover:underline">
                        Back to Home
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Services;