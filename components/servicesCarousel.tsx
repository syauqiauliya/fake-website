'use client';

import { useAuth } from './AuthContext'; // Updated path
import { useRouter } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ServicesCarousel = () => {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  const services = [
    { service: 'Advanced AI Integration 🤖', benefit: 'Boosts your system’s AI by 200%' },
    { service: 'Quantum Computing Solutions ⚛️', benefit: 'Unlocks the power of quantum computing!' },
    { service: 'Blockchain TrustTech 🔒', benefit: 'Provides top-notch blockchain security for all transactions' },
    { service: 'Cloud-Based Innovation ☁️', benefit: 'Expands your Cloud flexibility across platforms' },
    { service: 'Autonomous Data Processing 🧠', benefit: 'Streamlines data for a seamless experience' },
  ];

  const handleServiceClick = (servicePath: string) => {
    if (isLoggedIn) {
      router.push('/services'); // Redirect directly if logged in
    } else {
      router.push(`/login?redirect=${encodeURIComponent(servicePath)}`); // Redirect to login with open redirect
    }
  };

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000 }}
      className="mySwiper"
    >
      {services.map((service, index) => (
        <SwiperSlide key={index}>
          <div className="p-4 bg-gray-200 rounded-lg text-center">
            <h3
              className="text-lg text-blue-500 cursor-pointer"
              onClick={() => handleServiceClick('/services')}
            >
              {service.service}
            </h3>
            <p className="text-md text-gray-700">{service.benefit}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServicesCarousel;
