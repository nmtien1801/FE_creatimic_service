import React, { useEffect, useRef, useState } from "react";
import { XCircle } from "lucide-react";

// Hook xử lý hiệu ứng trồi lên, mờ dần mượt mà khi cuộn chuột đến nơi
function useScrollReveal() {
    const [isRevealed, setIsRevealed] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsRevealed(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) observer.disconnect();
        };
    }, []);

    return [elementRef, isRevealed];
}

export default function CmicAutomationPage() {
    const [heroRef, heroRevealed] = useScrollReveal();
    const [probTitleRef, probTitleRevealed] = useScrollReveal();
    const [probContentRef, probContentRevealed] = useScrollReveal();
    const [valRef, valRevealed] = useScrollReveal();
    const [finalSecRef, finalSecRevealed] = useScrollReveal();

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
        <div className="bg-[#faf8f6] text-neutral-800 min-h-screen antialiased overflow-x-hidden font-sans scroll-smooth relative">

            {/* ================= SECTION 1: HERO SECTION & VIDEO YOUTUBE ================= */}
            <section
                ref={heroRef}
                className={`max-w-6xl mx-auto px-6 pt-24 pb-20 transition-all duration-[1000ms] ease-out transform ${heroRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
            >
                <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-[#ed792f]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ed792f]" />
                        Tự động hóa doanh nghiệp
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 leading-tight tracking-tight uppercase">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ed792f] to-[#ff8e42]">Ứng dụng AI Agent nền tảng n8n</span> — Tự động hóa vận hành, giải phóng 80% nguồn lực cho SME
                    </h1>

                    <div className="max-w-3xl mx-auto pt-2">
                        <p className="text-neutral-500 leading-relaxed text-sm sm:text-base text-justify sm:text-center">
                            Ngừng lãng phí hàng giờ liền của nhân sự vào những tác vụ lặp đi lặp lại một cách thủ công. CMIC MEDIA thiết lập các trợ lý ảo thông minh (AI Agents) tự động xử lý công việc xuyên suốt 24/7 với độ chính xác tuyệt đối và chi phí vận hành tối giản.
                        </p>
                    </div>
                </div>

                {/* Bố cục lưới đối xứng mở rộng cân bằng */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Cột trái: Form nhận tư vấn phong cách tối giản */}
                    <div className="lg:col-span-5 bg-white border border-neutral-200/60 p-6 sm:p-8 rounded-xl shadow-sm">
                        <h3 className="text-base font-bold text-center text-neutral-900 mb-6 tracking-wide uppercase">
                            ĐĂNG KÝ NHẬN TƯ VẤN
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm font-medium">
                            <div>
                                <label className="block font-bold text-neutral-700 uppercase tracking-wide mb-1">Họ và tên</label>
                                <input type="text" name="name" required value={formData.name} onChange={handleInputChange} placeholder="Nhập họ và tên" className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#ed792f] transition-shadow bg-neutral-50" />
                            </div>
                            <div>
                                <label className="block font-bold text-neutral-700 uppercase tracking-wide mb-1">Email</label>
                                <input type="email" name="email" required value={formData.email} onChange={handleInputChange} placeholder="Nhập email" className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#ed792f] transition-shadow bg-neutral-50" />
                            </div>
                            <div>
                                <label className="block font-bold text-neutral-700 uppercase tracking-wide mb-1">SĐT</label>
                                <input type="tel" name="phone" required value={formData.phone} onChange={handleInputChange} placeholder="Nhập SĐT (Zalo)" className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#ed792f] transition-shadow bg-neutral-50" />
                            </div>
                            <div>
                                <label className="block font-bold text-neutral-700 uppercase tracking-wide mb-1">Mô tả quy trình công việc bạn cần tối ưu</label>
                                <textarea rows="3" name="workflow" value={formData.workflow} onChange={handleInputChange} placeholder="Ví dụ: tôi chỉ cần chụp ảnh sản phẩm, sau đó AI tự tạo hình ảnh và content rồi tự đăng bài lên đa nền tảng..." className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#ed792f] transition-shadow bg-neutral-50 leading-relaxed" />
                            </div>
                            <div>
                                <label className="block font-bold text-neutral-700 uppercase tracking-wide mb-1">Các liên kết dẫn đến kênh doanh nghiệp của bạn (Nếu có)</label>
                                <input type="url" name="links" value={formData.links} onChange={handleInputChange} placeholder="URL" className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#ed792f] transition-shadow bg-neutral-50" />
                            </div>
                            <button type="submit" className="w-full bg-[#ed792f] text-white font-semibold py-3 rounded-lg hover:bg-neutral-950 transition-all duration-300 uppercase tracking-wider text-xs shadow-sm mt-2">
                                Gửi yêu cầu ngay
                            </button>
                        </form>
                    </div>

                    {/* Cột phải: Video YouTube độc lập */}
                    <div className="lg:col-span-7 w-full lg:mt-12 animate-[float_5s_ease-in-out_infinite]">
                        <div className="relative w-full aspect-video bg-neutral-100 rounded-xl overflow-hidden border border-neutral-200/60 shadow-sm">
                            <iframe
                                className="w-full h-full object-cover"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                title="CMIC Media Automation Video"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>


            {/* ================= SECTION 2: THỰC TRẠNG DOANH NGHIỆP ================= */}
            <section className="py-24 bg-white border-y border-neutral-200/40 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Cột tiêu đề trái tích hợp hiệu ứng cuộn reveal mượt mà */}
                    <div
                        ref={probTitleRef}
                        className={`space-y-4 transition-all duration-1000 ease-out transform ${probTitleRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                            }`}
                    >
                        <span className="text-[11px] font-medium tracking-wider text-[#ed792f] uppercase block">Nhận diện điểm nghẽn</span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 leading-tight tracking-tight uppercase">
                            THỰC TRẠNG DOANH NGHIỆP — BỘ MÁY CỦA BẠN CÓ ĐANG BÌ QUÁ TẢI BỞI CÁC TÁC VỤ RÁC?
                        </h2>
                        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed text-justify font-normal pt-2">
                            Hầu hết các doanh nghiệp vừa và nhỏ hiện nay đều đang gặp tình trạng <span className="text-neutral-900 font-semibold underline decoration-[#ed792f] decoration-2 underline-offset-4">"nghẽn cổ chai"</span> trong khâu vận hành hằng ngày vì:
                        </p>
                    </div>

                    {/* Cột danh sách bên phải thẳng hàng */}
                    <div
                        ref={probContentRef}
                        className={`space-y-6 transition-all duration-1000 ease-out delay-150 transform ${probContentRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                            }`}
                    >
                        <div className="relative w-full aspect-video bg-neutral-100 rounded-xl overflow-hidden border border-neutral-200/60 shadow-sm mb-4">
                            <img
                                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop"
                                alt="Business Bottleneck Illustration"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="divide-y divide-neutral-100">
                            {[
                                "Nhân sự phải copy-paste thông tin khách hàng tiềm năng từ Facebook, Website vào Google Sheets bằng tay một cách chậm chạp.",
                                "Khách hàng nhắn tin hỏi mua hàng vào ban đêm, phải đợi đến sáng hôm sau nhân sự mới rep khiến tỷ lệ rớt đơn tăng cao.",
                                "Việc gửi email xác nhận, đẩy thông báo đơn hàng, cập nhật trạng thái vận chuyển hoàn toàn làm thủ công, dễ xảy ra sai sót của con người.",
                                "Chủ doanh nghiệp mất quá nhiều thời gian để thúc giục nhân sự làm báo cáo tổng hợp dữ liệu từ nhiều kênh."
                            ].map((text, idx) => (
                                <div key={idx} className="py-4 first:pt-0 last:pb-0 flex items-start gap-3">
                                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                                    <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed text-justify">
                                        {text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>


            {/* ================= SECTION 3: GIẢI PHÁP AI AGENT N8N ================= */}
            <section
                ref={valRef}
                className={`py-24 max-w-6xl mx-auto px-6 transition-all duration-[1000ms] ease-out transform ${valRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
            >
                <div className="mb-16 space-y-3 max-w-3xl">
                    <span className="text-[11px] font-medium tracking-wider text-[#ed792f] uppercase block">Giải pháp kiến trúc</span>
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 uppercase">
                        GIẢI PHÁP AI AGENT (N8N) TỪ CMIC MEDIA — CỔ MÁY KHÔNG NGỦ CỦA DOANH NGHIỆP
                    </h2>
                    <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed text-justify">
                        Chúng tôi sử dụng n8n – nền tảng tự động hóa quy trình mạnh mẽ nhất hiện nay kết hợp với trí tuệ nhân tạo (AI) để xây dựng hệ thống tự vận hành chuyên sâu cho bạn
                    </p>
                </div>

                {/* Lưới 2 cột đối xứng mở tuyệt đối */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 border-t border-neutral-200/60 pt-10">
                    {[
                        { title: "Tự động hóa đồng bộ dữ liệu (Data Sync)", desc: "Khi có Lead mới từ bất kỳ kênh nào (Facebook Ads, Web Form, TikTok Form), hệ thống tự động đẩy dữ liệu về CRM, tự phân phối cho sale trực ban và thông báo ngay về Zalo/Telegram của quản lý trong vòng 1 giây." },
                        { title: "Trợ lý AI Chatbot chăm sóc khách hàng", desc: "AI được huấn luyện bằng chính tài liệu sản phẩm và quy trình (SOP) của doanh nghiệp bạn, tự động tư vấn, trả lời các câu hỏi lặp lại của khách hàng theo thời gian thực một cách tự nhiên như người thật." },
                        { title: "Tự động hóa chiến dịch Marketing", desc: "Tự động phân loại nhóm khách hàng dựa trên hành vi mua sắm, kích hoạt chuỗi Email Marketing chăm sóc, gửi tin nhắn chúc mừng sinh nhật cá nhân hóa hoàn toàn tự động." },
                        { title: "Tổng hợp báo cáo dữ liệu tự động", desc: "Định kỳ cuối ngày hoặc cuối tuần, AI Agent tự động quét dữ liệu chi phí quảng cáo, lượng lead đổ về, tự động tính toán ROI và xuất thành một dashboard báo cáo trực quan gửi thẳng vào group chat của ban giám đốc." }
                    ].map((item, idx) => (
                        <div key={idx} className="space-y-2 group">
                            <h3 className="text-base font-bold text-neutral-900 group-hover:text-[#ed792f] transition-colors border-l-2 border-[#ed792f] pl-3 uppercase">
                                {item.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-normal text-justify pl-4">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>


            {/* ================= SECTION 4: FINAL CONVERSION ================= */}
            <section
                ref={finalSecRef}
                className={`bg-white py-24 border-t border-neutral-200/40 px-6 transition-all duration-[1000ms] ease-out transform ${finalSecRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
            >
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Form Đăng ký dưới chân trang tinh giản đồng bộ */}
                    <div className="lg:col-span-5 bg-white border border-neutral-200/60 p-6 sm:p-8 rounded-xl shadow-sm">
                        <h3 className="text-xl font-bold text-center mb-6 tracking-wide uppercase text-neutral-900">
                            ĐĂNG KÝ NHẬN TƯ VẤN
                        </h3>
                        <div className="space-y-4 text-xs sm:text-sm font-medium">
                            <div>
                                <label className="block font-bold text-neutral-700 uppercase tracking-wide mb-1">Họ và tên</label>
                                <input type="text" placeholder="Nhập họ và tên" className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#ed792f] transition-shadow bg-neutral-50" />
                            </div>
                            <div>
                                <label className="block font-bold text-neutral-700 uppercase tracking-wide mb-1">Email</label>
                                <input type="email" placeholder="Nhập email" className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#ed792f] transition-shadow bg-neutral-50" />
                            </div>
                            <div>
                                <label className="block font-bold text-neutral-700 uppercase tracking-wide mb-1">SĐT</label>
                                <input type="tel" placeholder="Nhập số điện thoại" className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#ed792f] transition-shadow bg-neutral-50" />
                            </div>
                            <div>
                                <label className="block font-bold text-neutral-700 uppercase tracking-wide mb-1">Mô tả quy trình công việc bạn cần tối ưu</label>
                                <textarea rows="2" placeholder="Ví dụ: tôi chỉ cần chụp ảnh sản phẩm, sau đó AI tự tạo hình ảnh và content rồi tự đăng bài lên đa nền tảng..." className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#ed792f] transition-shadow bg-neutral-50 leading-relaxed" />
                            </div>
                            <div>
                                <label className="block font-bold text-neutral-700 uppercase tracking-wide mb-1">Các liên kết dẫn đến kênh doanh nghiệp của bạn (Nếu có)</label>
                                <input type="url" placeholder="URL" className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#ed792f] transition-shadow bg-neutral-50" />
                            </div>
                            <button className="w-full bg-[#ed792f] text-white font-semibold py-3 rounded-lg hover:bg-neutral-950 transition-all duration-300 uppercase tracking-wider text-xs shadow-sm mt-2">
                                Gửi yêu cầu ngay
                            </button>
                        </div>
                    </div>

                    {/* Thẻ IMG cân đối bên phải */}
                    <div className="lg:col-span-7 w-full flex flex-col justify-center items-center lg:mt-6 animate-[float_5s_ease-in-out_infinite]">
                        <div className="w-full p-1.5 bg-neutral-50 rounded-xl border border-neutral-200/60 shadow-sm">
                            <img
                                src="https://images.unsplash.com/photo-1531746790731-6c2079ee777b?q=80&w=600&auto=format&fit=crop"
                                alt="CMIC Media AI Robot Agent Concept Image"
                                className="w-full h-auto rounded-lg object-cover aspect-[4/3]"
                            />
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
}