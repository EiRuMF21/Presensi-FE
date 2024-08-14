import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="flex flex-col min-h-screen bg-h-14 bg-gradient-to-t from-[#4942E4] to-[#A4A0F1] to-[#FFFFFF] px-6 sm:px-6 lg:px-8 z-10">
      <Navbar />

      {/* Existing content */}
      <div className="flex-grow flex flex-col justify-center">
        <div className="w-full max-w-sm p-8 space-y-8  ">
          <div>
            <h2 className="text-center text-4xl mt-24 text-neutral-100 font-bold drop-shadow">
              Digital <br /> Platform For
            </h2>
            <h2 className="text-center text-4xl text-[#000000] opacity-80  font-bold drop-shadow">
              All Employee
            </h2>
            <br />
            <p className="text-center font-inter text-neutral-100 drop-shadow">
              Web Presensi yang praktis dan akurat, memudahkan pencatatan
              kehadiran secara real-time dengan fitur rekap otomatis dan
              notifikasi. Solusi presensi digital yang aman untuk meningkatkan
              efisiensi organisasi Anda.
            </p>
          </div>
          <img src="/public/image/Home1.png" />
        </div>
      </div>
      

      {/* New Section with #4942E4 Background */}
      <div className="bg-[#fffff00] py-16">
        <div className="flex flex-col items-center justify-center max-w-2xl mx-auto px-4 sm:px-6 lg:px-2 space-y-8 md:space-y-0 md:space-x-12">
          {/* Image Section */}
          <div className="flex-shrink-0">
            <img
              src="/public/image/Home2.png"
              alt="Illustration"
              className=" max-w-xs mx-auto md:mx-0"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col text-white px-0 space-y-6 max-w-80">
            <h2 className="text-3xl font-bold text-center md:text-left">
              Presensi From Our <br /> Online Platform
            </h2>
            <div className="space-y-2">
              <div className="flex items-start">
                <img
                  src="https://img.icons8.com/ios-filled/50/ffffff/clock.png"
                  alt="Masuk Icon"
                  className="w-8 h-8 mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg">Masuk</h3>
                  <p>
                    Masuk kerja tepat waktu adalah kunci produktivitas. Dengan
                    kedisiplinan hadir setiap hari, Anda berkontribusi pada
                    kesuksesan tim dan perusahaan.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <img
                  src="https://img.icons8.com/ios-filled/50/ffffff/suitcase.png"
                  alt="Izin Icon"
                  className="w-8 h-8 mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg">Izin</h3>
                  <p>
                    Izin kerja diberikan untuk keperluan mendesak atau kondisi
                    darurat. Karyawan harus mengajukan izin dan mendapatkan
                    persetujuan sebelum tidak hadir.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <img
                  src="https://img.icons8.com/ios-filled/50/ffffff/beach.png"
                  alt="Cuti Icon"
                  className="w-8 h-8 mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg">Cuti</h3>
                  <p>
                    Cuti kerja adalah hak karyawan untuk tidak bekerja dalam
                    jangka waktu tertentu, biasanya untuk istirahat atau
                    keperluan pribadi. Cuti harus direncanakan dan disetujui
                    sebelumnya.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
