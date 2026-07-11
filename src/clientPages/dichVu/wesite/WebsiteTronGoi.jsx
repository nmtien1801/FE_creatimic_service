import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, LayoutTemplate, Gauge, Filter, EyeOff } from "lucide-react";

function useScrollReveal() {
    const [isRevealed, setIsRevealed] = useState(false);
    const elementRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsRevealed(true);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.1 });
        if (elementRef.current) observer.observe(elementRef.current);
        return () => { if (elementRef.current) observer.disconnect(); };
    }, []);
    return [elementRef, isRevealed];
}

export default function CmicLandingPage() {
    const [heroRef, heroRevealed] = useScrollReveal();

    return (
        <div className="min-h-screen bg-[#faf8f6] text-neutral-800 font-sans antialiased selection:bg-[#ed792f] selection:text-white">

            {/* HERO SECTION (Đã tích hợp logo thương hiệu bên trái, bỏ header trên) */}
            <section
                ref={heroRef}
                className={`max-w-6xl mx-auto px-6 pt-20 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start transition-all duration-1000 transform ${heroRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
            >
                <div className="lg:col-span-7 space-y-6">
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-[#ed792f]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ed792f]" />
                        Dịch Vụ Thiết Kế &amp; Xây Dựng
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-neutral-900">
                        Hệ Thống Website - Landing Page <br />
                        Toàn Diện Cho SME
                    </h1>
                    <p className="max-w-lg text-sm sm:text-base text-neutral-500 font-normal leading-relaxed text-justify">
                        Ngừng lãng phí ngân sách vào những website "vô tri" chỉ để trưng bày. CMIC MEDIA kiến tạo nền tảng tài sản số vững chắc, tối ưu trải nghiệm UI/UX để biến từng lượt truy cập thành dòng tiền bền vững cho doanh nghiệp của bạn.
                    </p>
                    <div className="pt-2">
                        <a href="#register" className="inline-flex items-center bg-[#ed792f] text-white font-medium text-xs px-6 py-3 rounded-lg hover:bg-neutral-950 transition-all duration-300 shadow-sm">
                            ĐĂNG KÝ NHẬN TƯ VẤN
                        </a>
                    </div>
                </div>

                {/* YOUTUBE EMBED */}
                <div className="lg:col-span-5 w-full lg:mt-14">
                    <div className="relative w-full aspect-video bg-neutral-100 rounded-xl overflow-hidden shadow-md border border-neutral-200/60">
                        <iframe
                            className="w-full h-full object-cover"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            title="CMIC Media Video"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* PROBLEMS SECTION */}
            <section className="py-20 bg-white border-y border-neutral-200/40 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Cột tiêu đề trái */}
                    <div className="lg:col-span-4 lg:sticky lg:top-12 h-fit space-y-3">
                        <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
                            Bạn có đang gặp phải vấn đề sau?
                        </h2>
                        <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed text-justify">
                            Đa số các doanh nghiệp vừa và nhỏ (SME) và cá nhân kinh doanh hiện nay đều sở hữu ít nhất một website. Tuy nhiên, có đến hơn 85% trang web đang rơi vào trạng thái "vùng đất chết" vì gặp phải các vấn đề:
                        </p>
                        <div className="w-8 h-[2px] bg-[#ed792f] pt-1" />
                    </div>

                    {/* Danh sách điểm nghẽn */}
                    <div className="lg:col-span-8 divide-y divide-neutral-100">
                        {[
                            { icon: LayoutTemplate, title: "Giao diện đại trà, lỗi thời", desc: "Sử dụng template có sẵn, sao chép cấu trúc khiến thương hiệu bị mờ nhạt, không tạo được niềm tin với khách hàng cao cấp." },
                            { icon: Gauge, title: "Tốc độ tải trang chậm & lỗi hiển thị", desc: "Khiến khách hàng mất kiên nhẫn thoát trang sau 3 giây, trực tiếp làm lãng phí chi phí quảng cáo đổ về." },
                            { icon: Filter, title: "Thiếu cấu trúc phễu chuyển đổi", desc: "Website thiết kế không theo hành trình hành vi khách hàng, không có các điểm chạm (CTA, Form) hợp lý, dẫn đến việc có traffic nhưng không ra Lead (Khách hàng tiềm năng)." },
                            { icon: EyeOff, title: "Bỏ quên hệ thống đo lường", desc: "Không cài đặt các mã theo dõi (tracking), chủ doanh nghiệp hoàn toàn mù mờ không biết trang nào hiệu quả, khách hàng thoát ra từ đâu để tối ưu." }
                        ].map((prob, idx) => (
                            <div key={idx} className="py-6 first:pt-0 last:pb-0 flex gap-4 items-start group">
                                <div className="p-2 bg-neutral-50 text-neutral-400 group-hover:bg-[#ed792f]/10 group-hover:text-[#ed792f] rounded-lg transition-colors duration-200 shrink-0">
                                    <prob.icon className="w-4 h-4" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-base font-semibold text-neutral-900">{prob.title}</h3>
                                    <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed text-justify">{prob.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* SOLUTIONS SECTION */}
            <section className="py-20 px-6 max-w-6xl mx-auto">
                <div className="max-w-3xl mb-12 space-y-3">
                    <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
                        Giải Pháo Từ CMIC MEDIA
                    </h2>
                    <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed text-justify">
                        Tại CMIC MEDIA, chúng tôi không bán một trang web đơn lẻ. Chúng tôi cung cấp giải pháp Xây dựng Tài sản số cốt lõi. Một website được thiết kế bởi CMIC MEDIA phải thỏa mãn cả 3 yếu tố trọng tâm: <span className="text-neutral-900 font-semibold underline decoration-[#ed792f] decoration-2 underline-offset-4">Thẩm mỹ thương hiệu – Trải nghiệm mượt mà – Tỷ lệ chuyển đổi tối đa.</span>
                    </p>
                </div>

                {/* Lưới giải pháp */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {[
                        { num: "01", title: "Nghiên cứu Insights sâu sắc", desc: "Chúng tôi phân tích hành vi tìm kiếm và tâm lý mua hàng đặc thù của từng ngành nghề trước khi đặt “nét vẽ” đầu tiên." },
                        { num: "02", title: "Tối ưu hóa UI/UX đỉnh cao", desc: "Đảm bảo giao diện hiện đại, tinh tế và dẫn dắt người dùng thực hiện hành vi chuyển đổi một cách tự nhiên nhất." },
                        { num: "03", title: "Hạ tầng công nghệ sạch & Mở rộng", desc: "Mã nguồn tối ưu, tốc độ tải trang vượt trội, sẵn sàng kết nối với các hệ thống Email Marketing, CRM hay các công cụ tự động hóa Automation trong tương lai." }
                    ].map((sol, idx) => (
                        <div key={idx} className="space-y-3 border-t border-neutral-200/60 pt-5 group">
                            <span className="text-xs font-mono text-neutral-400 group-hover:text-[#ed792f] transition-colors">{sol.num} /</span>
                            <h3 className="text-base font-bold text-neutral-900">{sol.title}</h3>
                            <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed text-justify">{sol.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* PROCESS SECTION */}
            <section className="relative overflow-hidden py-20 bg-neutral-950 text-white px-6">
                {/* Lớp phủ Grid công nghệ nhẹ */}
                <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none"></div>

                {/* Glow hiệu ứng màu cam thương hiệu */}
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#ed792f]/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>

                {/* z-10 đảm bảo phần text luôn nằm trên các lớp nền */}
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="max-w-2xl mb-16 space-y-2">
                        <h2 className="text-2xl font-bold tracking-tight">
                            Quy Trình Triển Khai Chuẩn Hóa Tại CMIC MEDIA
                        </h2>
                        <p className="text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed">
                            Để đảm bảo chất lượng đồng đều và bàn giao đúng tiến độ, mọi dự án đều đi qua quy trình nghiêm ngặt:
                        </p>
                    </div>

                    {/* Lưới quy trình triển khai */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 border-t border-neutral-800 pt-10">
                        {[
                            { step: "1", title: "Nghiên cứu & Định hình cấu trúc (Sitemap)", desc: "Khảo sát sản phẩm, dịch vụ và tệp khách hàng mục tiêu để lên sơ đồ các trang cần thiết." },
                            { step: "2", title: "Thiết kế Wireframe & UI/UX (Visual Design)", desc: "Phác thảo bố cục, lựa chọn màu sắc thương hiệu và thiết kế giao diện chi tiết cho từng màn hình thiết bị (Desktop, Mobile, Tablet)." },
                            { step: "3", title: "Lập trình & Tích hợp hệ thống (Development)", desc: "Chuyển hóa bản thiết kế thành code, tối ưu tốc độ, cài đặt các công cụ tracking đo lường và bảo mật hệ thống." },
                            { step: "4", title: "Kiểm thử & Bàn giao (Testing & Handover)", desc: "Chạy thử nghiệm trên đa trình duyệt, sửa lỗi, đào tạo nhân sự của khách hàng quản trị và chính thức nghiệm thu bàn giao." }
                        ].map((proc, idx) => (
                            <div key={idx} className="flex gap-4 items-start group">
                                {/* Đổi font-black/bold của số thứ tự sang font-semibold giống cột 5 cho đồng bộ */}
                                <span className="text-base font-semibold text-[#ed792f] bg-white/5 border border-white/10 w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
                                    {proc.step}
                                </span>
                                <div className="space-y-1">
                                    <h3 className="text-base font-semibold group-hover:text-[#ed792f] transition-colors">{proc.title}</h3>
                                    <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed text-justify">{proc.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Dịch vụ chăm sóc hệ thống (Bước đặc biệt rộng) */}
                    <div className="mt-12 bg-white/5 border border-white/10 p-6 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 backdrop-blur-sm">
                        <div className="space-y-2">
                            {/* Hàng tiêu đề: Số thứ tự và Chữ đứng cạnh nhau */}
                            <div className="flex items-center gap-3">
                                <span className="text-base font-semibold text-[#ed792f] bg-white/5 border border-white/10 w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
                                    5
                                </span>
                                <h4 className="text-base font-semibold text-white">
                                    Giải pháp chăm sóc &amp; Vận hành website toàn diện
                                </h4>
                            </div>

                            {/* Đoạn mô tả bên dưới */}
                            <p className="text-xs text-neutral-400 pl-11">
                                Giúp website của doanh nghiệp tăng trưởng lượng traffic tự nhiên bền vững.
                            </p>
                        </div>

                        {/* Nút bấm hành động */}
                        <a href="#register" className="group inline-flex items-center gap-1.5 bg-[#ed792f] text-white text-xs font-semibold px-4 py-2.5 rounded-lg hover:bg-white hover:text-neutral-950 transition-all duration-300 self-start sm:self-center shrink-0">
                            Liên hệ vận hành <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}