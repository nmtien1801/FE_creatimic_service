import React, { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import ApiContact from "../apis/ApiContact";
import { toast } from 'react-toastify';

export default function Footer() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!email) {
            toast.error('Vui lòng nhập email!');
            return;
        }
        try {
            setLoading(true);
            const contactData = {
                name: "client",
                email: email,
                message: `Tôi đang quan tâm đến giải pháp marketing của bạn. Hãy liên hệ với tôi qua email này!`,
            };
            await ApiContact.sendContactApi(contactData);
            toast.success('Đã đăng ký nhận thông báo thành công!');
            setEmail('');
        } catch (error) {
            console.error('Error sending contact:', error);
            toast.error('Đăng ký thất bại. Vui lòng thử lại.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <footer className="bg-[#ed792f] font-sans py-14 px-6 md:px-12 text-[13px]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

                {/* CỘT 1: THƯƠNG HIỆU & LIÊN HỆ */}
                <div className="space-y-6">
                    {/* Brand Logo & Slogan (Chữ Trắng) */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2 text-white">
                            <img src="/logo.png" alt="CMIC MEDIA" className="h-10 w-auto object-contain brightness-0" />
                            <span className="font-black text-xl tracking-wider">CMIC MEDIA</span>
                        </div>
                        <p className="text-xl md:text-2xl font-bold leading-snug italic text-white">
                            Marketing là tài sản số giúp bạn tạo dòng tiền bền vững
                        </p>
                    </div>

                    {/* Chi tiết liên hệ (Chữ Đen, Icon Đen) */}
                    <div className="space-y-4 text-sm md:text-base text-black font-medium">
                        <div className="flex items-start space-x-3">
                            <MapPin className="w-6 h-6 flex-shrink-0 text-black mt-0.5 fill-none" />
                            <p>
                                <strong className="font-extrabold">Địa chỉ:</strong> 252/21/18 Phạm Văn Chiêu, Khu phố 30, Phường Thông Tây Hội, TP.HCM
                            </p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Phone className="w-5 h-5 flex-shrink-0 text-black fill-black" />
                            <p>
                                <strong className="font-extrabold">Hotline tư vấn:</strong> 034.7577.034
                            </p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Mail className="w-5 h-5 flex-shrink-0 text-black fill-black text-[#ed792f]" />
                            <p>
                                <strong className="font-extrabold">Email:</strong> contact@creatimichub.vn
                            </p>
                        </div>
                    </div>
                </div>

                {/* CỘT 2: THÔNG TIN / CHÍNH SÁCH / DỊCH VỤ */}
                <div className="space-y-6 md:pl-8">
                    {/* Nhóm Thông tin (Tiêu đề Trắng - Nội dung Đen) */}
                    <div className="space-y-2">
                        <h3 className="text-lg font-black uppercase tracking-wider text-white">THÔNG TIN</h3>
                        <p className="text-sm md:text-base text-black font-medium hover:underline cursor-pointer">Giới thiệu CMIC MEDIA</p>
                    </div>

                    {/* Nhóm Chính sách (Tiêu đề Trắng - Nội dung Đen) */}
                    <div className="space-y-2">
                        <h3 className="text-lg font-black uppercase tracking-wider text-white">CHÍNH SÁCH & HỖ TRỢ</h3>
                        <ul className="space-y-1 text-sm md:text-base text-black font-medium">
                            <li className="hover:underline cursor-pointer">Quy trình tiếp nhận yêu cầu & Cung cấp báo giá</li>
                            <li className="hover:underline cursor-pointer">Điều khoản & Chính sách dịch vụ</li>
                            <li className="hover:underline cursor-pointer">Chính sách vận chuyển & giao nhận</li>
                            <li className="hover:underline cursor-pointer">Phương thức thanh toán</li>
                            <li className="hover:underline cursor-pointer">Chính sách bảo mật thông tin</li>
                        </ul>
                    </div>

                    {/* Nhóm Dịch vụ (Tiêu đề Trắng - Nội dung Đen) */}
                    <div className="space-y-2">
                        <h3 className="text-lg font-black uppercase tracking-wider text-white">DỊCH VỤ</h3>
                        <ul className="space-y-1 text-sm md:text-base text-black font-medium">
                            <li className="hover:underline cursor-pointer">Website - Landing Page</li>
                            <li className="hover:underline cursor-pointer">Chăm sóc kênh social</li>
                            <li className="hover:underline cursor-pointer">Hệ thống AI Agent (n8n)</li>
                            <li className="hover:underline cursor-pointer">Trọn gói Marketing</li>
                        </ul>
                    </div>
                </div>

                {/* CỘT 3: FORM NHẬP EMAIL & SOCIAL (Tiêu đề Trắng - Nội dung Đen/Trắng tùy chỗ) */}
                <div className="space-y-6">
                    {/* Khối Nhập Email */}
                    <div className="space-y-3">
                        <h3 className="text-lg font-black uppercase tracking-wider text-white">NHẬP EMAIL NHẬN THÔNG BÁO</h3>
                        <p className="text-sm italic text-black font-medium">Đăng kí nhận tin mới nhất từ chúng tôi</p>

                        <form onSubmit={handleSend} className="flex w-full max-w-md h-10 bg-black rounded-lg overflow-hidden p-[2px] shadow-md border border-black">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex-grow bg-white px-4 outline-none text-black text-sm rounded-l-md placeholder-gray-400 italic"
                                placeholder="Nhập email"
                            />
                            <button
                                type="submit"
                                disabled={loading}
                                className={`px-6 text-sm font-black uppercase transition-all text-white bg-black ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-zinc-900"}`}
                            >
                                {loading ? "..." : "GỬI"}
                            </button>
                        </form>
                    </div>

                    {/* Khối Mạng Xã Hội */}
                    <div className="space-y-3 pt-4">
                        <h3 className="text-lg font-black uppercase tracking-wider text-white">THÔNG TIN LIÊN HỆ</h3>
                        <div className="flex items-center space-x-3">
                            {/* Facebook */}
                            <a href="https://www.facebook.com/cmicstudio" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                                <img src="/facebook.png" alt="Facebook" className="w-9 h-9 object-contain" />
                            </a>
                            {/* Youtube */}
                            <a href="https://www.youtube.com/@CMICSTUDIO" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                                <img src="/YouTube.png" alt="YouTube" className="w-9 h-9 object-contain" />
                            </a>
                            {/* Tiktok */}
                            <a href="https://www.tiktok.com/@cmic.studio" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                                <img src="/tiktok.png" alt="TikTok" className="w-9 h-9 object-contain" />
                            </a>
                            {/* Zalo */}
                            <a href="#" className="transition-transform hover:scale-110">
                                <img src="/zalo.webp" alt="Zalo" className="w-9 h-9 object-contain" />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}