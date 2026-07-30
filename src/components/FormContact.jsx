import React, { useState } from 'react';

export default function ContactForm({ onSubmitSuccess }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    consultRequest: '',
    marketingChannels: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dữ liệu liên hệ gửi đi:", formData);
    
    // Nếu có callback từ trang cha thì gọi callback
    if (onSubmitSuccess) {
      onSubmitSuccess(formData);
    } else {
      alert("Gửi thông tin liên hệ thành công!");
    }

    // Reset form sau khi gửi
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      consultRequest: '',
      marketingChannels: ''
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full bg-white border-2 border-emerald-900/80 rounded-2xl p-5 md:p-7 shadow-lg flex flex-col space-y-4 text-gray-900"
    >
      <h2 className="text-xl md:text-2xl font-bold text-gray-950 tracking-tight text-center uppercase pb-1">
        LIÊN HỆ VỚI CHÚNG TÔI
      </h2>

      <div className="flex flex-col space-y-1 text-left">
        <label className="text-xs md:text-sm font-semibold text-gray-900">Họ và tên*</label>
        <input
          type="text"
          name="fullName"
          required
          value={formData.fullName}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-emerald-800 bg-white"
        />
      </div>

      <div className="flex flex-col space-y-1 text-left">
        <label className="text-xs md:text-sm font-semibold text-gray-900">Số điện thoại*</label>
        <input
          type="tel"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-emerald-800 bg-white"
        />
      </div>

      <div className="flex flex-col space-y-1 text-left">
        <label className="text-xs md:text-sm font-semibold text-gray-900">Email*</label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-emerald-800 bg-white"
        />
      </div>

      <div className="flex flex-col space-y-1 text-left">
        <label className="text-xs md:text-sm font-semibold text-gray-900">Bạn cần CMIC MEDIA tư vấn gì?*</label>
        <textarea
          name="consultRequest"
          required
          rows={3}
          value={formData.consultRequest}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-emerald-800 bg-white resize-none"
        />
      </div>

      <div className="flex flex-col space-y-1 text-left">
        <label className="text-xs md:text-sm font-semibold text-gray-900 leading-tight">
          Vui lòng cung cấp kênh marketing của doanh nghiệp bạn (nếu có)
        </label>
        <textarea
          name="marketingChannels"
          rows={2}
          value={formData.marketingChannels}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-emerald-800 bg-white resize-none"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-sm md:text-base py-2.5 rounded-xl shadow hover:from-orange-600 hover:to-orange-700 transition-all uppercase tracking-wider cursor-pointer"
        >
          Gửi ngay
        </button>
      </div>
    </form>
  );
}