import React, { useState } from "react";
import { Phone, XCircle } from "lucide-react";

export default function CmicAutomationPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        workflow: "",
        links: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("CMIC Media đã nhận thông tin!");
        setFormData({ name: "", email: "", phone: "", workflow: "", links: "" });
    };

    return (
        <div className="bg-slate-50 text-slate-900 min-h-screen antialiased overflow-x-hidden font-sans scroll-smooth relative">

            {/* BACKGROUND GRADIENT CHẠY NGẦM MƯỢT MÀ */}
            <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-tr from-orange-500/10 via-transparent to-indigo-500/5 animate-[pulseBg_8s_ease-in-out_infinite] -z-10" />

            {/* ================= SESSION 1: HERO SECTION & VIDEO YOUTUBE ================= */}
            <section className="max-w-7xl mx-auto px-6 pt-16 pb-20 animate-[slideUpFade_0.8s_ease-out_forwards]">

                {/* Tiêu đề được thiết kế lại sang trọng, vuông vức */}
                <div className="text-center max-w-5xl mx-auto mb-16 space-y-5">
                    <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 text-orange-700 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm transition-all hover:scale-105 duration-300">
                        <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
                        Tự động hóa doanh nghiệp
                    </div>

                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-950 leading-tight tracking-tight max-w-4xl mx-auto uppercase">
                        <span className="text-[#f27830]">Ứng dụng AI Agent nền tảng n8n</span> — Tự động hóa vận hành, giải phóng 80% nguồn lực cho SME
                    </h1>

                    <div className="bg-[#fff6f0] border border-orange-100/60 rounded-3xl p-6 max-w-3xl mx-auto shadow-md hover:shadow-lg transition-shadow duration-300">
                        <p className="text-slate-700 font-medium text-base sm:text-lg leading-relaxed">
                            Ngừng lãng phí hàng giờ liền của nhân sự vào những tác vụ lặp đi lặp lại một cách thủ công. <span className="text-[#f27830] font-bold">CMIC MEDIA</span> thiết lập các trợ lý ảo thông minh (AI Agents) tự động xử lý công việc xuyên suốt 24/7 với độ chính xác tuyệt đối và chi phí vận hành tối giản.
                        </p>
                    </div>
                </div>

                {/* Bố cục 2 cột: Form đăng ký và Video độc lập */}
                <div className="grid lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">

                    {/* Cột trái: Form nhận tư vấn cam mượt mà */}
                    <div className="lg:col-span-5 bg-[#f27830] text-white p-8 rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(242,120,48,0.25)] flex flex-col justify-between h-full transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_30px_60px_-10px_rgba(242,120,48,0.4)] animate-[slideLeftFade_0.8s_ease-out_0.2s_both]">
                        <div>
                            <h3 className="text-xl sm:text-2xl font-black text-center mb-6 tracking-wide text-white uppercase animate-[glowText_3s_infinite]">
                                ĐĂNG KÝ NHẬN TƯ VẤN
                            </h3>
                            <form onSubmit={handleSubmit} className="space-y-4 text-slate-900">
                                <div>
                                    <label className="block text-xs font-bold text-orange-50 uppercase tracking-wider mb-1.5">Họ và tên</label>
                                    <input type="text" name="name" required value={formData.name} onChange={handleInputChange} placeholder="Nhập họ và tên" className="w-full px-5 py-3 rounded-full bg-white text-sm font-medium focus:outline-none shadow-inner border-2 border-transparent focus:border-stone-900 transition-all duration-300" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-orange-50 uppercase tracking-wider mb-1.5">Email</label>
                                    <input type="email" name="email" required value={formData.email} onChange={handleInputChange} placeholder="Nhập email" className="w-full px-5 py-3 rounded-full bg-white text-sm font-medium focus:outline-none shadow-inner border-2 border-transparent focus:border-stone-900 transition-all duration-300" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-orange-50 uppercase tracking-wider mb-1.5">SĐT</label>
                                    <input type="tel" name="phone" required value={formData.phone} onChange={handleInputChange} placeholder="Nhập SĐT (Zalo)" className="w-full px-5 py-3 rounded-full bg-white text-sm font-medium focus:outline-none shadow-inner border-2 border-transparent focus:border-stone-900 transition-all duration-300" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-orange-50 uppercase tracking-wider mb-1.5">Mô tả quy trình công việc bạn cần tối ưu</label>
                                    <textarea rows="3" name="workflow" value={formData.workflow} onChange={handleInputChange} placeholder="Ví dụ: tôi chỉ cần chụp ảnh sản phẩm, sau đó AI tự tạo hình ảnh và content rồi tự đăng bài lên đa nền tảng..." className="w-full px-5 py-3 rounded-2xl bg-white text-sm font-medium focus:outline-none leading-relaxed shadow-inner border-2 border-transparent focus:border-stone-900 transition-all duration-300" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-orange-50 uppercase tracking-wider mb-1.5">Các liên kết dẫn đến kênh doanh nghiệp của bạn (Nếu có)</label>
                                    <input type="url" name="links" value={formData.links} onChange={handleInputChange} placeholder="URL" className="w-full px-5 py-3 rounded-full bg-white text-sm font-medium focus:outline-none shadow-inner border-2 border-transparent focus:border-stone-900 transition-all duration-300" />
                                </div>
                                <button type="submit" className="w-full bg-stone-900 hover:bg-stone-800 text-white font-extrabold py-3.5 rounded-full border border-transparent transition-all active:scale-[0.98] uppercase tracking-wider text-xs mt-2 shadow-md hover:shadow-stone-900/40">
                                    Gửi yêu cầu ngay
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Cột phải: Video YouTube độc lập có hiệu ứng bồng bềnh nhẹ tự động */}
                    <div className="lg:col-span-7 w-full flex flex-col justify-center animate-[float_5s_ease-in-out_infinite_0.4s]">
                        <div className="relative w-full aspect-video bg-slate-950 rounded-3xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.25)] border border-slate-200/60 transform hover:scale-[1.01] transition-all duration-500 hover:shadow-[0_40px_70px_-10px_rgba(0,0,0,0.35)]">
                            <iframe
                                className="w-full h-full object-cover"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                title="CMIC Media Automation Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>


            {/* ================= SESSION 2: THỰC TRẠNG DOANH NGHIỆP ================= */}
            <section className="py-24 bg-white border-t border-slate-100">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 leading-tight tracking-tight uppercase">
                            THỰC TRẠNG DOANH NGHIỆP — BỘ MÁY CỦA BẠN CÓ ĐANG BÌ QUÁ TẢI BỞI CÁC TÁC VỤ RÁC?
                        </h2>
                        <div className="bg-orange-50 border border-orange-100/70 rounded-2xl p-5 mt-6 max-w-3xl mx-auto">
                            <p className="text-slate-700 font-semibold text-base">
                                Hầu hết các doanh nghiệp vừa và nhỏ hiện nay đều đang gặp tình trạng <span className="text-[#f27830] font-bold">"nghẽn cổ chai"</span> trong khâu vận hành hằng ngày vì:
                            </p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-5 flex justify-center animate-[float_4s_ease-in-out_infinite]">
                            <img
                                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop"
                                alt="Business Bottleneck Illustration"
                                className="w-full max-w-sm rounded-3xl shadow-xl object-cover aspect-[4/3] transition-transform duration-500 hover:scale-105"
                            />
                        </div>

                        <div className="lg:col-span-7 space-y-5">
                            {[
                                "Nhân sự phải copy-paste thông tin khách hàng tiềm năng từ Facebook, Website vào Google Sheets bằng tay một cách chậm chạp.",
                                "Khách hàng nhắn tin hỏi mua hàng vào ban đêm, phải đợi đến sáng hôm sau nhân sự mới rep khiến tỷ lệ rớt đơn tăng cao.",
                                "Việc gửi email xác nhận, đẩy thông báo đơn hàng, cập nhật trạng thái vận chuyển hoàn toàn làm thủ công, dễ xảy ra sai sót của con người.",
                                "Chủ doanh nghiệp mất quá nhiều thời gian để thúc giục nhân sự làm báo cáo tổng hợp dữ liệu từ nhiều kênh."
                            ].map((text, idx) => (
                                <div key={idx} className="flex items-start gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:bg-orange-50/20 transition-all duration-300">
                                    <XCircle className="w-7 h-7 text-red-500 flex-shrink-0 mt-0.5 fill-red-500/10 animate-[pulse_2s_infinite]" />
                                    <p className="text-slate-700 font-medium text-base leading-relaxed">
                                        {text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* ================= SESSION 3: GIẢI PHÁP AI AGENT N8N ================= */}
            <section className="py-24 bg-slate-50 border-t border-slate-100">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 leading-tight tracking-tight uppercase">
                            GIẢI PHÁP AI AGENT (N8N) TỪ CMIC MEDIA — CỔ MÁY KHÔNG NGỦ CỦA DOANH NGHIỆP
                        </h2>
                        <p className="text-slate-600 mt-5 font-semibold text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
                            Chúng tôi sử dụng n8n – nền tảng tự động hóa quy trình mạnh mẽ nhất hiện nay kết hợp với trí tuệ nhân tạo (AI) để xây dựng hệ thống tự vận hành chuyên sâu cho bạn
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
                        {[
                            { title: "Tự động hóa đồng bộ dữ liệu (Data Sync)", desc: "Khi có Lead mới từ bất kỳ kênh nào (Facebook Ads, Web Form, TikTok Form), hệ thống tự động đẩy dữ liệu về CRM, tự phân phối cho sale trực ban và thông báo ngay về Zalo/Telegram của quản lý trong vòng 1 giây." },
                            { title: "Trợ lý AI Chatbot chăm sóc khách hàng", desc: "AI được huấn luyện bằng chính tài liệu sản phẩm và quy trình (SOP) của doanh nghiệp bạn, tự động tư vấn, trả lời các câu hỏi lặp lại của khách hàng theo thời gian thực một cách tự nhiên như người thật." },
                            { title: "Tự động hóa chiến dịch Marketing", desc: "Tự động phân loại nhóm khách hàng dựa trên hành vi mua sắm, kích hoạt chuỗi Email Marketing chăm sóc, gửi tin nhắn chúc mừng sinh nhật cá nhân hóa hoàn toàn tự động." },
                            { title: "Tổng hợp báo cáo dữ liệu tự động", desc: "Định kỳ cuối ngày hoặc cuối tuần, AI Agent tự động quét dữ liệu chi phí quảng cáo, lượng lead đổ về, tự động tính toán ROI và xuất thành một dashboard báo cáo trực quan gửi thẳng vào group chat của ban giám đốc." }
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col h-full bg-[#f27830] text-white p-8 rounded-[2rem] shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(242,120,48,0.25)]">
                                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wide border-b border-white/20 pb-3 mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-sm leading-relaxed opacity-95 font-medium">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ================= SESSION 4: FINAL CONVERSION (image_630f8e.png) ================= */}
            <section className="bg-white py-20 border-t border-slate-100">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">

                    {/* Form Đăng ký dưới chân trang */}
                    <div className="md:col-span-6 bg-[#f27830] text-white p-8 sm:p-10 rounded-[2.5rem] shadow-[0_30px_60px_rgba(242,120,48,0.15)] transition-all duration-500 hover:shadow-[0_35px_70px_rgba(242,120,48,0.25)]">
                        <h3 className="text-2xl sm:text-3xl font-black text-center mb-6 tracking-wide uppercase text-white">
                            ĐĂNG KÝ NHẬN TƯ VẤN
                        </h3>
                        <div className="space-y-4 text-slate-900 font-medium text-xs sm:text-sm">
                            <div>
                                <label className="block font-bold text-white uppercase tracking-wide mb-1.5">Họ và tên</label>
                                <input type="text" placeholder="Nhập họ và tên" className="w-full px-5 py-3 rounded-full bg-white focus:outline-none shadow-inner border border-transparent focus:border-stone-900 transition-colors" />
                            </div>
                            <div>
                                <label className="block font-bold text-white uppercase tracking-wide mb-1.5">Email</label>
                                <input type="email" placeholder="Nhập email" className="w-full px-5 py-3 rounded-full bg-white focus:outline-none shadow-inner border border-transparent focus:border-stone-900 transition-colors" />
                            </div>
                            <div>
                                <label className="block font-bold text-white uppercase tracking-wide mb-1.5">SĐT</label>
                                <input type="tel" placeholder="Nhập số điện thoại" className="w-full px-5 py-3 rounded-full bg-white focus:outline-none shadow-inner border border-transparent focus:border-stone-900 transition-colors" />
                            </div>
                            <div>
                                <label className="block font-bold text-white uppercase tracking-wide mb-1.5">Mô tả quy trình công việc bạn cần tối ưu</label>
                                <textarea rows="2" placeholder="Ví dụ: tôi chỉ cần chụp ảnh sản phẩm, sau đó AI tự tạo hình ảnh và content rồi tự đăng bài lên đa nền tảng..." className="w-full px-5 py-3 rounded-2xl bg-white focus:outline-none leading-relaxed shadow-inner border border-transparent focus:border-stone-900 transition-colors" />
                            </div>
                            <div>
                                <label className="block font-bold text-white uppercase tracking-wide mb-1.5">Các liên kết dẫn đến kênh doanh nghiệp của bạn (Nếu có)</label>
                                <input type="url" className="w-full px-5 py-3 rounded-full bg-white focus:outline-none shadow-inner border border-transparent focus:border-stone-900 transition-colors" />
                            </div>
                        </div>
                    </div>

                    {/* Thẻ IMG robot AI bồng bềnh nằm trọn trong viền tím đổ bóng sàn */}
                    <div className="md:col-span-6 flex flex-col justify-center items-center animate-[float_5s_ease-in-out_infinite_0.2s]">
                        <div className="w-full max-w-xl p-2 bg-white rounded-3xl border-2 border-indigo-500/80 shadow-[0_30px_60px_rgba(0,0,0,0.08)] group transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_40px_70px_rgba(0,0,0,0.15)]">
                            <img
                                src="https://images.unsplash.com/photo-1531746790731-6c2079ee777b?q=80&w=600&auto=format&fit=crop"
                                alt="CMIC Media AI Robot Agent Concept Image"
                                className="w-full h-auto rounded-2xl object-cover aspect-[4/3] drop-shadow-md"
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* ================= THIẾT LẬP HIỆU ỨNG ANIMATION KEYFRAMES THUẦN ================= */}
            <style>{`
                @keyframes slideUpFade {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes slideLeftFade {
                    from { opacity: 0; transform: translateX(-30px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-12px); }
                }
                @keyframes pulseBg {
                    0%, 100% { opacity: 0.6; }
                    50% { opacity: 1; }
                }
                @keyframes glowText {
                    0%, 100% { text-shadow: 0 0 0px rgba(255,255,255,0); }
                    50% { text-shadow: 0 0 10px rgba(255,255,255,0.4); }
                }
            `}</style>

        </div>
    );
}