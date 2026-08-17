import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import ApiContact from "../apis/ApiContact";
import { toast } from "react-toastify";

export default function Footer() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!email) {
            toast.error("Vui lòng nhập email!");
            return;
        }
        try {
            setLoading(true);
            const contactData = {
                fullName: "client",
                email: email,
                consultRequest: `Tôi đang quan tâm đến giải pháp marketing của bạn. Hãy liên hệ với tôi qua email này!`,
            };
            let res = await ApiContact.sendContactApi(contactData);
            if (res && res.EC === 0) {
                toast.success("Đã đăng ký nhận thông báo thành công!");
                setEmail("");
            }
        } catch (error) {
            console.error("Error sending contact:", error);
            toast.error("Đăng ký thất bại. Vui lòng thử lại.");
        } finally {
            setLoading(false);
        }
    };

    // Helper styling class cho NavLink
    const getNavLinkClass = ({ isActive }) =>
        `block transition-colors hover:underline ${isActive ? "font-bold underline text-white" : "opacity-90 hover:opacity-100"
        }`;

    return (
        <footer className="bg-[#ed792f] font-sans py-14 px-6 md:px-12 text-sm text-black">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

                {/* CỘT 1: THƯƠNG HIỆU & LIÊN HỆ */}
                <div className="space-y-6">
                    {/* Brand Logo & Slogan */}
                    <div className="space-y-2">
                        <img src="/logo1.jpg" alt="logo" className="w-18 h-18 lg:w-22 lg:h-22 object-contain rounded-full" />
                        <p className="text-lg md:text-xl font-medium leading-relaxed italic text-white/90">
                            Marketing là tài sản số giúp bạn tạo dòng tiền bền vững
                        </p>
                    </div>

                    {/* Chi tiết liên hệ */}
                    <div className="space-y-3 font-normal opacity-90">
                        <div className="flex items-start space-x-3">
                            <MapPin className="w-5 h-5 flex-shrink-0 text-black mt-0.5 fill-none" />
                            <p>
                                <span className="font-semibold">Địa chỉ:</span> 252/21/18 Phạm Văn Chiêu, Khu phố 30, Phường Thông Tây Hội, TP.HCM
                            </p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Phone className="w-5 h-5 flex-shrink-0 text-black fill-black" />
                            <p>
                                <span className="font-semibold">Hotline tư vấn:</span> 034.7577.034
                            </p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Mail className="w-5 h-5 flex-shrink-0 text-black" />
                            <p>
                                <span className="font-semibold">Email:</span> contact@cmicagency.vn
                            </p>
                        </div>
                    </div>
                </div>

                {/* CỘT 2: THÔNG TIN / CHÍNH SÁCH / DỊCH VỤ */}
                <div className="space-y-6 md:pl-8">
                    {/* Nhóm Thông tin */}
                    <div className="space-y-2">
                        <h3 className="text-base font-bold uppercase tracking-wider text-white">THÔNG TIN</h3>
                        <NavLink to="/gioi-thieu" className={getNavLinkClass}>
                            Giới thiệu CMIC MEDIA
                        </NavLink>
                    </div>

                    {/* Nhóm Chính sách */}
                    <div className="space-y-2">
                        <h3 className="text-base font-bold uppercase tracking-wider text-white">CHÍNH SÁCH & HỖ TRỢ</h3>
                        <ul className="space-y-1.5 font-normal">
                            <li>
                                <NavLink to="/quy-trinh-bao-gia" className={getNavLinkClass}>
                                    Quy trình tiếp nhận yêu cầu & Cung cấp báo giá
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dieu-khoan-dich-vu-va-dieu-kien-giao-dich-chung" className={getNavLinkClass}>
                                    Điều khoản & Chính sách dịch vụ
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/chinh-sach-van-chuyen-va-giao-nhan" className={getNavLinkClass}>
                                    Chính sách vận chuyển & giao nhận
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/cac-phuong-thuc-thanh-toan" className={getNavLinkClass}>
                                    Phương thức thanh toán
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/chinh-sach-bao-mat-thong-tin-ca-nhan" className={getNavLinkClass}>
                                    Chính sách bảo mật thông tin
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Nhóm Dịch vụ */}
                    <div className="space-y-2">
                        <h3 className="text-base font-bold uppercase tracking-wider text-white">DỊCH VỤ</h3>
                        <ul className="space-y-1.5 font-normal">
                            <li>
                                <NavLink to="/dich-vu/website-landing-page/xay-dung" className={getNavLinkClass}>
                                    Website - Landing Page
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dich-vu/cham-soc-kenh-social/tron-goi" className={getNavLinkClass}>
                                    Chăm sóc kênh social
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dich-vu/he-thong-ai-agent" className={getNavLinkClass}>
                                    Hệ thống AI Agent (n8n)
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dich-vu/tron-goi-marketing" className={getNavLinkClass}>
                                    Trọn gói Marketing
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* CỘT 3: FORM NHẬP EMAIL & SOCIAL */}
                <div className="space-y-6">
                    {/* Khối Nhập Email */}
                    <div className="space-y-3">
                        <h3 className="text-base font-bold uppercase tracking-wider text-white">NHẬP EMAIL NHẬN THÔNG BÁO</h3>
                        <p className="text-sm italic font-normal opacity-90">Đăng kí nhận tin mới nhất từ chúng tôi</p>

                        <form onSubmit={handleSend} className="flex w-full max-w-md h-10 bg-white rounded-lg overflow-hidden border border-gray-300 focus-within:border-black transition-colors shadow-sm">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex-grow bg-transparent px-4 outline-none text-black text-sm placeholder-gray-400"
                                placeholder="Nhập email..."
                            />
                            <button
                                type="submit"
                                disabled={loading}
                                className={`px-6 text-sm font-semibold uppercase transition-all text-white bg-black ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-zinc-800"}`}
                            >
                                {loading ? "..." : "GỬI"}
                            </button>
                        </form>
                    </div>

                    {/* Khối Mạng Xã Hội */}
                    <div className="space-y-3 pt-4">
                        <h3 className="text-base font-bold uppercase tracking-wider text-white">THÔNG TIN LIÊN HỆ</h3>
                        <div className="flex items-center space-x-3">
                            {/* Facebook */}
                            <a href="https://www.facebook.com/cmicmedia" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
                                <img src="/facebook.png" alt="Facebook" className="w-9 h-9 object-contain" />
                            </a>
                            {/* Youtube */}
                            <a href="https://www.youtube.com/@cmicmedia" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
                                <img src="/YouTube.png" alt="YouTube" className="w-9 h-9 object-contain" />
                            </a>
                            {/* Tiktok */}
                            <a href="https://www.tiktok.com/@cmicmedia?_r=1&_t=ZS-98qZGiQHLm5" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
                                <img src="/tiktok.png" alt="TikTok" className="w-9 h-9 object-contain" />
                            </a>
                            {/* Zalo */}
                            <a
                                href="https://zalo.me/0333207128"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block transition-transform hover:scale-105 cursor-pointer"
                            >
                                <img src="/zalo.webp" alt="Zalo" className="w-9 h-9 object-contain" />
                            </a>
                        </div>
                        <div className="flex items-center space-x-4 opacity-90 transition-all cursor-pointer">
                            <a href="http://online.gov.vn/Home/WebDetails/143786" target="_blank" rel="noopener noreferrer">
                                <img src="/bct.gif" alt="Bộ Công Thương" className="h-16" />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}