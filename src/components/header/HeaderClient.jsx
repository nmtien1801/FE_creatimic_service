import React, { useState } from "react";
import { Menu, Phone, X, Mail } from "lucide-react";
import { NavLink } from "react-router-dom";
import ServicesMegaMenu from "./MegaMenu";

export default function Header({ isMobileMenuOpen, setIsMobileMenuOpen }) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const menuItems = [
    { label: "TRANG CHỦ", path: "/trang-chu" },
    { label: "GIỚI THIỆU", path: "/gioi-thieu" },
    { label: "DỊCH VỤ", path: "/dich-vu" },
    { label: "HỒ SƠ NĂNG LỰC", path: "/ho-so-nang-luc" },
    { label: "TIN TỨC", path: "/tin-tuc" },
    { label: "LIÊN HỆ", path: "/lien-he" },
  ];

  return (
    <header className="bg-[#ed792f] shadow-md sticky top-0 z-50 w-full">
      {/* 1. TOP HEADER: LOGO - CONTACT */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-2 flex items-center justify-between gap-4">

          {/* LOGO (Trái) */}
          <div className="flex-shrink-0 w-[120px] lg:w-[150px]">
            <NavLink to="/trang-chu">
              <img src="/logo.png" alt="logo" className="w-16 h-16 lg:w-20 lg:h-20 object-contain rounded-full" />
            </NavLink>
          </div>

          {/* CONTACT (Phải) */}
          <div className="hidden lg:flex flex-shrink-0 items-center justify-end gap-6">
            {/* Khối Hotline 1 */}
            <div className="text-right whitespace-nowrap">
              <a href="tel:0372672396" className="flex items-center justify-end gap-1.5 text-white font-bold text-sm hover:text-black transition-colors">
                <Phone className="w-4 h-4" /> 037.267.2396
              </a>
              <p className="text-[10px] text-white/80 font-medium uppercase tracking-tight mt-0.5">
                Hotline hỗ trợ 24/7
              </p>
            </div>

            {/* Đường kẻ dọc ngăn cách */}
            <div className="w-[1px] h-8 bg-white/20"></div>

            {/* Khối Hotline 2 - Hợp tác truyền thông */}
            <div className="text-right whitespace-nowrap">
              <a href="tel:0347577034" className="flex items-center justify-end gap-1.5 text-white font-bold text-sm hover:text-black transition-colors">
                <Mail className="w-4 h-4" /> 034.757.7034
              </a>
              <p className="text-[10px] text-white/80 font-medium uppercase tracking-tight mt-0.5">
                Hợp tác truyền thông
              </p>
            </div>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2.5 bg-white/20 text-white rounded-lg md:hidden hover:bg-white/30 transition-all border border-white/10"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* 2. DESKTOP NAVIGATION (Dòng dưới) */}
      <nav
        className="bg-white hidden md:block border-t border-gray-100/50 shadow-sm relative"
        onMouseLeave={() => setIsServicesOpen(false)}
      >
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="flex justify-center items-center">
            {menuItems.map((item) => {
              const isServiceItem = item.label === "DỊCH VỤ";
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(isServiceItem)}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `relative px-5 lg:px-7 py-3.5 text-xs lg:text-[13px] font-bold transition-all group block
                                        ${isActive ? "text-[#ed792f]" : "text-gray-700 hover:text-[#ed792f]"}`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.label}
                        <div className={`absolute bottom-0 left-0 right-0 h-[3px] bg-[#ed792f] transition-all duration-300 
                                                ${isActive || (isServiceItem && isServicesOpen) ? "w-full" : "w-0 group-hover:w-full"}`}></div>
                      </>
                    )}
                  </NavLink>
                </div>
              );
            })}
          </div>
        </div>

        {/* MEGA MENU: hiện khi hover "DỊCH VỤ" */}
        <ServicesMegaMenu
          isOpen={isServicesOpen}
          onClose={() => setIsServicesOpen(false)}
        />
      </nav>

      {/* 3. MOBILE MENU (Drawer) */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]" onClick={() => setIsMobileMenuOpen(false)}>
          <div
            className="fixed top-0 right-0 w-[280px] h-full bg-white shadow-2xl p-6 flex flex-col animate-in slide-in-from-right duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-8 pb-4 border-b">
              <h3 className="text-xl font-black text-[#ed792f] tracking-tight">MENU</h3>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-1.5 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto">
              <ul className="space-y-1">
                {menuItems.map((item) => (
                  <li key={item.label}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `block p-3.5 rounded-xl font-bold transition-all duration-200
                                                 ${isActive ? "bg-orange-50 text-[#ed792f] translate-x-2" : "text-gray-700 hover:bg-gray-50"}`
                      }
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-auto pt-6 border-t text-center">
              <p className="text-xs text-gray-400 font-medium">© 2026 Tien Audio</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}