import React from "react";
import { NavLink } from "react-router-dom";

// Nội dung 4 cột dịch vụ — chỉnh sửa đường dẫn / nhãn tại đây khi cần
const serviceColumns = [
  {
    title: "Website - Landing Page",
    titlePath: "/dich-vu/website-landing-page",
    items: [
      { label: "Trọn gói thiết kế & xây dựng", path: "/dich-vu/website-landing-page/tron-goi" },
      { label: "Xây dựng Website - Landing Page", path: "/dich-vu/website-landing-page/xay-dung" },
      { label: "Thiết kế giao diện Website - Landing Page", path: "/dich-vu/website-landing-page/thiet-ke-giao-dien" },
      { label: "Chăm sóc website toàn diện", path: "/dich-vu/website-landing-page/cham-soc" },
    ],
  },
  {
    title: "Chăm sóc kênh social",
    titlePath: "/dich-vu/cham-soc-kenh-social",
    items: [
      { label: "Trọn gói kênh social", path: "/dich-vu/cham-soc-kenh-social/tron-goi" },
      { label: "Chăm sóc Fanpage", path: "/dich-vu/cham-soc-kenh-social/fanpage" },
      { label: "Chăm sóc Instagram", path: "/dich-vu/cham-soc-kenh-social/instagram" },
      { label: "Chăm sóc YouTube", path: "/dich-vu/cham-soc-kenh-social/youtube" },
      { label: "Chăm sóc TikTok", path: "/dich-vu/cham-soc-kenh-social/tiktok" },
      { label: "Chăm sóc LinkedIn", path: "/dich-vu/cham-soc-kenh-social/linkedin" },
      { label: "Email Marketing", path: "/dich-vu/cham-soc-kenh-social/email-marketing" },
    ],
  },
  {
    title: "Hệ thống AI Agent (n8n)",
    titlePath: "/dich-vu/he-thong-ai-agent",
    items: [],
  },
  {
    title: "Trọn gói Marketing",
    titlePath: "/dich-vu/tron-goi-marketing",
    items: [],
  },
];

/**
 * Mega menu hiển thị khi hover vào mục "DỊCH VỤ" trên thanh nav desktop.
 * Đặt component này bên trong <nav>, ngay sau danh sách menuItems,
 * và render có điều kiện dựa trên state isOpen từ component cha (Header).
 */
export default function ServicesMegaMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="absolute left-0 right-0 top-full w-full bg-[#ed792f] shadow-xl z-40 animate-in fade-in slide-in-from-top-2 duration-200"
      onMouseLeave={onClose}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceColumns.map((col) => (
            <div key={col.title}>
              <NavLink
                to={col.titlePath}
                onClick={onClose}
                className="block text-white font-extrabold text-base lg:text-lg mb-3 hover:underline underline-offset-4 decoration-2"
              >
                {col.title}
              </NavLink>

              {col.items.length > 0 && (
                <ul className="space-y-2.5">
                  {col.items.map((item) => (
                    <li key={item.label}>
                      <NavLink
                        to={item.path}
                        onClick={onClose}
                        className="text-white/95 font-bold text-sm hover:text-black transition-colors"
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}