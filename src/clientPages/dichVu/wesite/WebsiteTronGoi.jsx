import React, { useEffect, useRef, useState } from "react";
import {
    Phone,
    LayoutTemplate,
    Gauge,
    Filter,
    EyeOff,
    ArrowRight,
} from "lucide-react";

function useGoogleFonts() {
    useEffect(() => {
        const id = "cmic-fonts";
        if (document.getElementById(id)) return;
        const link = document.createElement("link");
        link.id = id;
        link.rel = "stylesheet";
        link.href =
            "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap";
        document.head.appendChild(link);
    }, []);
}

// Custom Hook để bắt sự kiện cuộn màn hình và kích hoạt hiệu ứng xuất hiện
function useScrollReveal() {
    const [isRevealed, setIsRevealed] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsRevealed(true);
                    observer.unobserve(entry.target); // Chỉ chạy hiệu ứng 1 lần duy nhất khi cuộn qua
                }
            },
            { threshold: 0.15 } // Kích hoạt khi 15% phần tử xuất hiện trên màn hình
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

const fontDisplay = { fontFamily: "'Space Grotesk', sans-serif" };
const fontBody = { fontFamily: "'Inter', sans-serif" };
const fontMono = { fontFamily: "'IBM Plex Mono', monospace" };

function Eyebrow({ children }) {
    return (
        <div
            className="inline-flex items-center gap-2 text-orange-600 text-xs tracking-widest uppercase mb-4"
            style={fontMono}
        >
            <span className="w-6 h-px bg-orange-600" />
            {children}
        </div>
    );
}

/* ---------- Problem card ---------- */
function ProblemCard({ icon: Icon, title, desc, delayClass }) {
    const [ref, isRevealed] = useScrollReveal();
    return (
        <div
            ref={ref}
            className={`flex flex-col h-full transition-all duration-700 transform hover:-translate-y-2 hover:shadow-xl ${delayClass} ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
        >
            <div className="bg-stone-900 text-white px-4 py-3 flex items-center gap-2">
                <Icon className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <h3 className="text-sm font-semibold leading-snug" style={fontDisplay}>
                    {title}
                </h3>
            </div>
            <div className="bg-orange-500 text-white px-4 py-5 flex-1 rounded-b-sm">
                <p className="text-sm leading-relaxed" style={fontBody}>
                    {desc}
                </p>
            </div>
        </div>
    );
}

/* ---------- Solution card ---------- */
function SolutionCard({ index, title, desc, delayClass }) {
    const [ref, isRevealed] = useScrollReveal();
    return (
        <div
            ref={ref}
            className={`flex flex-col h-full transition-all duration-700 transform hover:-translate-y-2 hover:shadow-xl ${delayClass} ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
        >
            <div className="bg-stone-900 text-white px-4 py-4 text-center">
                <span className="text-orange-500 text-xs tracking-widest" style={fontMono}>
                    0{index}
                </span>
                <h3 className="text-sm font-semibold mt-1 leading-snug" style={fontDisplay}>
                    {title}
                </h3>
            </div>
            <div className="bg-orange-500 text-white px-4 py-5 flex-1 text-center rounded-b-sm">
                <p className="text-sm leading-relaxed" style={fontBody}>
                    {desc}
                </p>
            </div>
        </div>
    );
}

/* ---------- Process step ---------- */
function ProcessStep({ num, title, desc, delayClass }) {
    const [ref, isRevealed] = useScrollReveal();
    return (
        <div
            ref={ref}
            className={`relative bg-orange-500 text-white rounded-xl px-6 py-6 h-full transition-all duration-700 transform hover:scale-[1.03] hover:shadow-lg ${delayClass} ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
        >
            <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold leading-none" style={fontDisplay}>
                    {num}
                </span>
                <h4 className="text-sm font-semibold leading-snug border-b border-white/40 pb-2" style={fontDisplay}>
                    {title}
                </h4>
            </div>
            <p className="text-sm mt-3 leading-relaxed" style={fontBody}>
                {desc}
            </p>
        </div>
    );
}

export default function CmicLandingPage() {
    useGoogleFonts();

    // Khởi tạo các ref hiệu ứng cho từng Section lớn
    const [heroRef, heroRevealed] = useScrollReveal();
    const [probTitleRef, probTitleRevealed] = useScrollReveal();
    const [solTitleRef, solTitleRevealed] = useScrollReveal();
    const [procTitleRef, procTitleRevealed] = useScrollReveal();
    const [ctaRef, ctaRevealed] = useScrollReveal();

    return (
        <div className="bg-white text-stone-900 scroll-smooth" style={fontBody}>
            {/* NAV */}
            <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-stone-200">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <span className="text-lg font-bold tracking-tight transform hover:scale-105 transition-transform cursor-pointer" style={fontDisplay}>
                        CMIC <span className="text-orange-600">MEDIA</span>
                    </span>
                    <a
                        href="#lien-he"
                        className="hidden sm:inline-flex items-center gap-2 bg-stone-900 hover:bg-orange-600 transition-all duration-300 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:shadow-md active:scale-95"
                    >
                        <Phone className="w-4 h-4" />
                        Đăng ký tư vấn
                    </a>
                </div>
            </header>

            {/* HERO */}
            <section
                ref={heroRef}
                className={`max-w-6xl mx-auto px-6 pt-16 pb-20 grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 transform ${heroRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                    }`}
            >
                <div>
                    <Eyebrow>Dịch vụ thiết kế &amp; xây dựng</Eyebrow>
                    <h1 className="text-3xl sm:text-4xl font-bold leading-tight" style={fontDisplay}>
                        Hệ thống Website &amp; Landing Page{" "}
                        <span className="text-orange-600">toàn diện cho SME</span>
                    </h1>
                    <p className="mt-5 text-stone-600 leading-relaxed">
                        Ngừng lãng phí ngân sách vào những website "vô tri" chỉ để trưng bày.
                        CMIC MEDIA kiến tạo nền tảng tài sản số vững chắc, tối ưu trải nghiệm
                        UI/UX để biến từng lượt truy cập thành dòng tiền bền vững cho doanh
                        nghiệp của bạn.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="#lien-he"
                            className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 transition-all duration-300 text-white font-semibold px-6 py-3 rounded-full shadow-lg shadow-orange-600/20 hover:shadow-orange-700/40 transform hover:-translate-y-0.5"
                        >
                            Đăng ký nhận tư vấn
                            <Phone className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* SHOW VIDEO YOUTUBE TRỰC TIẾP Ở BÊN PHẢI HERO */}
                <div className="w-full transform hover:scale-[1.01] transition-all duration-500">
                    <div className="relative w-full aspect-video bg-stone-100 rounded-2xl shadow-2xl overflow-hidden border border-stone-200 group">
                        <iframe
                            className="w-full h-full object-cover"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            title="CMIC Media Introduction Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <p className="text-center text-xs text-stone-400 mt-3" style={fontMono}>
                        ▲ Video giới thiệu giải pháp tài sản số CMIC MEDIA
                    </p>
                </div>
            </section>

            {/* PROBLEM */}
            <section className="bg-stone-50 py-20 overflow-hidden">
                <div className="max-w-6xl mx-auto px-6">
                    <div
                        ref={probTitleRef}
                        className={`text-center max-w-2xl mx-auto transition-all duration-700 transform ${probTitleRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                    >
                        <Eyebrow>Vấn đề thường gặp</Eyebrow>
                        <h2 className="text-2xl sm:text-3xl font-bold" style={fontDisplay}>
                            Bạn có đang gặp phải <span className="text-orange-600">vấn đề</span> sau?
                        </h2>
                        <p className="mt-4 text-stone-600 text-sm leading-relaxed">
                            Đa số các doanh nghiệp vừa và nhỏ (SME) và cá nhân kinh doanh hiện
                            nay đều sở hữu ít nhất một website. Tuy nhiên, có đến hơn{" "}
                            <strong>85%</strong> trang web đang rơi vào trạng thái{" "}
                            <strong>"vùng đất chết"</strong> vì gặp phải các vấn đề sau.
                        </p>
                    </div>

                    {/* Danh sách thẻ vấn đề với hiệu ứng mượt le lói xuất hiện so le */}
                    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <ProblemCard
                            icon={LayoutTemplate}
                            title="Giao diện đại trà, lỗi thời"
                            desc='Sử dụng template có sẵn, sao chép cấu trúc khiến thương hiệu bị mờ nhạt, không tạo được niềm tin với khách hàng cao cấp.'
                            delayClass="delay-0"
                        />
                        <ProblemCard
                            icon={Gauge}
                            title="Tốc độ tải trang chậm & lỗi hiển thị"
                            desc='Khiến khách hàng mất kiên nhẫn thoát trang sau 3 giây, trực tiếp làm lãng phí chi phí quảng cáo đổ về.'
                            delayClass="delay-100"
                        />
                        <ProblemCard
                            icon={Filter}
                            title="Thiếu cấu trúc phễu chuyển đổi"
                            desc='Website thiết kế không theo hành trình hành vi khách hàng, không có các điểm chạm (CTA, Form) hợp lý, dẫn đến có traffic nhưng không ra Lead.'
                            delayClass="delay-200"
                        />
                        <ProblemCard
                            icon={EyeOff}
                            title="Bỏ quên hệ thống đo lường"
                            desc='Không cài đặt các mã theo dõi (tracking), chủ doanh nghiệp hoàn toàn mù mờ không biết trang nào hiệu quả, khách hàng thoát ra từ đâu để tối ưu.'
                            delayClass="delay-300"
                        />
                    </div>
                </div>
            </section>

            {/* SOLUTION */}
            <section className="py-20 overflow-hidden">
                <div className="max-w-6xl mx-auto px-6">
                    <div
                        ref={solTitleRef}
                        className={`text-center max-w-2xl mx-auto transition-all duration-700 transform ${solTitleRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                    >
                        <Eyebrow>Giải pháp</Eyebrow>
                        <h2 className="text-2xl sm:text-3xl font-bold" style={fontDisplay}>
                            Giải pháp từ <span className="text-orange-600">CMIC Media</span>
                        </h2>
                        <p className="mt-4 text-stone-600 text-sm leading-relaxed">
                            Tại CMIC MEDIA, chúng tôi không bán một trang web đơn lẻ. Chúng tôi
                            cung cấp giải pháp xây dựng Tài sản số cốt lõi. Một website được
                            thiết kế bởi CMIC MEDIA phải thỏa mãn cả 3 yếu tố trọng tâm:
                        </p>
                        <p className="mt-2 font-semibold text-sm text-orange-600" style={fontDisplay}>
                            Thẩm mỹ thương hiệu – Trải nghiệm mượt mà – Tỷ lệ chuyển đổi tối đa.
                        </p>
                    </div>

                    {/* Thẻ giải pháp xuất hiện so le mượt mà */}
                    <div className="mt-12 grid sm:grid-cols-3 gap-6">
                        <SolutionCard
                            index={1}
                            title="Nghiên cứu insights sâu sắc"
                            desc="Chúng tôi phân tích hành vi tìm kiếm và tâm lý mua hàng đặc thù của từng ngành nghề trước khi đặt “nét vẽ” đầu tiên."
                            delayClass="delay-0"
                        />
                        <SolutionCard
                            index={2}
                            title="Tối ưu hóa UI/UX đỉnh cao"
                            desc="Đảm bảo giao diện hiện đại, tinh tế và dẫn dắt người dùng thực hiện hành vi chuyển đổi một cách tự nhiên nhất."
                            delayClass="delay-150"
                        />
                        <SolutionCard
                            index={3}
                            title="Hạ tầng công nghệ sạch & mở rộng"
                            desc="Mã nguồn tối ưu, tốc độ tải trang vượt trội, sẵn sàng kết nối với các hệ thống Email Marketing, CRM hay các công cụ tự động hóa Automation trong tương lai."
                            delayClass="delay-300"
                        />
                    </div>
                </div>
            </section>

            {/* PROCESS */}
            <section className="bg-stone-900 text-white py-20 overflow-hidden">
                <div className="max-w-6xl mx-auto px-6">
                    <div
                        ref={procTitleRef}
                        className={`text-center max-w-2xl mx-auto transition-all duration-700 transform ${procTitleRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                    >
                        <div
                            className="inline-flex items-center gap-2 text-orange-500 text-xs tracking-widest uppercase mb-4"
                            style={fontMono}
                        >
                            <span className="w-6 h-px bg-orange-500" />
                            Quy trình
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold" style={fontDisplay}>
                            Quy trình triển khai chuẩn hóa tại{" "}
                            <span className="text-orange-500">CMIC Media</span>
                        </h2>
                        <p className="mt-4 text-stone-400 text-sm leading-relaxed">
                            Để đảm bảo chất lượng đồng đều và bàn giao đúng tiến độ, mọi dự án
                            đều đi qua quy trình nghiêm ngặt gồm 5 bước sau.
                        </p>
                    </div>

                    <div className="mt-12 space-y-6">
                        {/* Hàng trên: 3 bước đầu */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <ProcessStep
                                num="01"
                                title="Nghiên cứu & Định hình cấu trúc (Sitemap)"
                                desc="Khảo sát sản phẩm, dịch vụ và tệp khách hàng mục tiêu để lên sơ đồ các trang cần thiết."
                                delayClass="delay-0"
                            />
                            <ProcessStep
                                num="02"
                                title="Thiết kế Wireframe & UI/UX (Visual Design)"
                                desc="Phác thảo bố cục, lựa chọn màu sắc thương hiệu và thiết kế giao diện chi tiết cho từng màn hình thiết bị (Desktop, Mobile, Tablet)."
                                delayClass="delay-100"
                            />
                            <ProcessStep
                                num="03"
                                title="Lập trình & Tích hợp hệ thống (Development)"
                                desc="Chuyển hóa bản thiết kế thành code, tối ưu tốc độ, cài đặt các công cụ tracking đo lường và bảo mật hệ thống."
                                delayClass="delay-200"
                            />
                        </div>

                        {/* Hàng dưới: 2 bước sau - Căn giữa căn hàng hoàn hảo */}
                        <div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:justify-center gap-6">
                            <div className="lg:w-[calc(33.333%-1rem)]">
                                <ProcessStep
                                    num="04"
                                    title="Kiểm thử & Bàn giao (Testing & Handover)"
                                    desc="Chạy thử nghiệm trên đa trình duyệt, sửa lỗi, đào tạo nhân sự của khách hàng quản trị và chính thức nghiệm thu bàn giao."
                                    delayClass="delay-300"
                                />
                            </div>
                            <div className="lg:w-[calc(33.333%-1rem)]">
                                <ProcessStep
                                    num="05"
                                    title="Giải pháp chăm sóc & Vận hành website toàn diện"
                                    desc="Giúp website của doanh nghiệp tăng trưởng lượng traffic tự nhiên bền vững."
                                    delayClass="delay-400"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-stone-900 text-stone-500 text-center text-xs py-6" style={fontMono}>
                © {new Date().getFullYear()} CMIC MEDIA — Xây dựng tài sản số cho SME.
            </footer>
        </div>
    );
}