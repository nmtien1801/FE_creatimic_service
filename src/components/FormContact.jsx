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

  // Hàm validate dữ liệu
  const validateForm = () => {
    const nameTrimmed = formData.fullName.trim();
    const phoneTrimmed = formData.phone.trim();
    const emailTrimmed = formData.email.trim();
    const consultTrimmed = formData.consultRequest.trim();

    if (!nameTrimmed) {
      toast.error("Vui lòng nhập họ và tên!");
      return false;
    }

    // Regex kiểm tra SĐT Việt Nam (10 số, bắt đầu bằng 03, 05, 07, 08, 09)
    const vnPhoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;
    if (!vnPhoneRegex.test(phoneTrimmed)) {
      toast.error("Số điện thoại không đúng định dạng Việt Nam (10 chữ số)!");
      return false;
    }

    // Regex kiểm tra Email chuẩn
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailTrimmed)) {
      toast.error("Email không đúng định dạng!");
      return false;
    }

    if (!consultTrimmed) {
      toast.error("Vui lòng nhập nội dung cần tư vấn!");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Kiểm tra validate trước khi gửi
    if (!validateForm()) return;

    setLoading(true);

    // Dữ liệu đã làm sạch khoảng trắng
    const cleanData = {
      fullName: formData.fullName.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      consultRequest: formData.consultRequest.trim(),
      marketingChannels: formData.marketingChannels.trim()
    };

    try {
      const response = await ApiContact.sendContactApi(cleanData);

      toast.success("Gửi thông tin liên hệ thành công!");

      // Gọi callback báo cho component cha nếu có
      if (onSubmitSuccess) {
        onSubmitSuccess(response?.data || cleanData);
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
          placeholder="Nguyễn Văn A"
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
          placeholder="0912345678"
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
          placeholder="example@gmail.com"
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
          placeholder="Nhập nội dung tư vấn..."
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
          placeholder="Fanpage, Website, TikTok..."
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