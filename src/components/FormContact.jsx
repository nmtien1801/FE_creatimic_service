import React, { useState } from 'react';
import ApiContact from "../apis/ApiContact";
import { toast } from 'react-toastify';

export default function ContactForm({ onSubmitSuccess }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    consultRequest: '',
    marketingChannels: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Giả định hàm trong ApiContact là ApiContact.create(formData) hoặc ApiContact.send(formData)
      // Bạn điều chỉnh tên method tương ứng với file ApiContact của bạn nhé
      const response = await ApiContact.create(formData);

      toast.success("Gửi thông tin liên hệ thành công!");

      // Gọi callback báo cho component cha nếu có
      if (onSubmitSuccess) {
        onSubmitSuccess(response?.data || formData);
      }

      // Reset form sau khi gửi thành công
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        consultRequest: '',
        marketingChannels: ''
      });

    } catch (error) {
      console.error("Lỗi gửi liên hệ:", error);
      const errorMsg = error?.response?.data?.message || "Có lỗi xảy ra, vui lòng thử lại sau!";
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full bg-white border-2 border-black rounded-2xl p-5 md:p-7 shadow-lg flex flex-col space-y-4 text-gray-900"
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
          disabled={loading}
          className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-emerald-800 bg-white disabled:bg-gray-100"
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
          disabled={loading}
          className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-emerald-800 bg-white disabled:bg-gray-100"
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
          disabled={loading}
          className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-emerald-800 bg-white disabled:bg-gray-100"
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
          disabled={loading}
          className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-emerald-800 bg-white resize-none disabled:bg-gray-100"
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
          disabled={loading}
          className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-emerald-800 bg-white resize-none disabled:bg-gray-100"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-sm md:text-base py-2.5 rounded-xl shadow hover:from-orange-600 hover:to-orange-700 transition-all uppercase tracking-wider cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
        >
          {loading ? (
            <span className="flex items-center space-x-2">
              <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Đang gửi...</span>
            </span>
          ) : (
            'Gửi ngay'
          )}
        </button>
      </div>
    </form>
  );
}