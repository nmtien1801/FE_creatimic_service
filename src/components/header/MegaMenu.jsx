import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const serviceColumns = [
  {
    title: "Website - Landing Page",
    titlePath: "/dich-vu/website-landing-page/tron-goi",
    basePrefix: "/dich-vu/website-landing-page",
    items: [
      { label: "Trọn gói thiết kế & xây dựng", path: "/dich-vu/website-landing-page/tron-goi" },
      { label: "Xây dựng Website - Landing Page", path: "/dich-vu/website-landing-page/xay-dung" },
      { label: "Thiết kế giao diện Website - Landing Page", path: "/dich-vu/website-landing-page/thiet-ke-giao-dien" },
      { label: "Chăm sóc website toàn diện", path: "/dich-vu/website-landing-page/cham-soc" },
    ],
  },
  {
    title: "Chăm sóc kênh social",
    titlePath: "/dich-vu/cham-soc-kenh-social/tron-goi",
    basePrefix: "/dich-vu/cham-soc-kenh-social",
    items: [],
  },
  {
    title: "Hệ thống AI Agent (n8n)",
    titlePath: "/dich-vu/he-thong-ai-agent",
    basePrefix: "/dich-vu/he-thong-ai-agent",
    items: [],
  },
  {
    title: "Trọn gói Marketing",
    titlePath: "/dich-vu/tron-goi-marketing",
    basePrefix: "/dich-vu/tron-goi-marketing",
    items: [],
  },
];

export default function ServicesMegaMenu({ isOpen, onClose }) {
  const location = useLocation();

  if (!isOpen) return null;

  return (
    <div
      className="absolute left-0 right-0 top-full w-full bg-white/95 backdrop-blur-2xl border-b border-slate-100 shadow-[0_25px_50px_-12px_rgba(15,23,42,0.08)] z-50 animate-in fade-in slide-in-from-top-2 duration-300 pointer-events-auto"
      onMouseLeave={onClose}
    >
      <div className="max-w-[1248px] mx-auto px-6 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-8 items-start">
          {serviceColumns.map((col) => {
            // Tiêu đề cột sẽ sáng nếu đang ở trang chính của nó hoặc trang con bên trong
            const isColActive = location.pathname.startsWith(col.basePrefix);

            return (
              <div key={col.title} className="group/col flex flex-col">
                {/* TIÊU ĐỀ DỊCH VỤ */}
                <NavLink
                  to={col.titlePath}
                  onClick={onClose}
                  className={`inline-flex items-center gap-1.5 font-bold text-[15px] lg:text-base mb-2 transition-colors duration-200 tracking-tight ${isColActive
                    ? "text-[#FF5D3A]"
                    : "text-slate-900 hover:text-[#FF5D3A]"
                    }`}
                >
                  <span>{col.title}</span>
                  <svg
                    className={`w-3.5 h-3.5 transition-all duration-200 ${isColActive
                      ? "text-[#FF5D3A] opacity-100 translate-x-0"
                      : "text-slate-400 opacity-0 -translate-x-1 group-hover/col:opacity-100 group-hover/col:translate-x-0 group-hover/col:text-[#FF5D3A]"
                      }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </NavLink>

                {/* DANH SÁCH MỤC CON */}
                {col.items.length > 0 && (
                  <ul className="space-y-2.5 border-t border-slate-100/60 pt-3">
                    {col.items.map((item) => (
                      <li key={item.label}>
                        <NavLink
                          to={item.path}
                          onClick={onClose}
                          className={({ isActive }) =>
                            `group/link block text-[13.5px] transition-all duration-200 ${isActive
                              ? "text-[#FF5D3A] font-semibold"
                              : "text-slate-500 hover:text-slate-900 font-medium"
                            }`
                          }
                        >
                          {({ isActive }) => (
                            <span className="relative pb-0.5 inline-block">
                              {item.label}
                              {/* Thanh gạch chân cam dưới link */}
                              <span
                                className={`absolute left-0 bottom-0 h-[1.5px] bg-[#FF5D3A] transition-all duration-200 ${isActive
                                  ? "w-full"
                                  : "w-0 group-hover/link:w-full"
                                  }`}
                              />
                            </span>
                          )}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}