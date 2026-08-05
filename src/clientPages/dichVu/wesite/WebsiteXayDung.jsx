import React, { useEffect, useRef, useState } from "react";
import ContactForm from '../../../components/FormContact';

const bgSession5 = "/dichvu.tronGoi/bgSs5.png";

// Dữ liệu 6 Loại hình Website
const WEBSITE_TYPES = [
    {
        id: "doanh-nghiep",
        title: "Website Doanh nghiệp",
        description:
            "Khẳng định vị thế chuyên nghiệp, số hóa toàn bộ thông tin năng lực, tầm nhìn, sứ mệnh và dịch vụ của doanh nghiệp để làm việc với các đối tác lớn.",
        image: "/dichvu.DichVuThietKe/1.png",
    },
    {
        id: "giao-duc",
        title: "Website Giáo dục",
        description:
            "Đóng gói thương hiệu và hệ thống bài giảng trực tuyến cho Chuyên gia. Tích hợp công nghệ bảo mật chống tải lậu video để bảo vệ tuyệt đối bản quyền chất xám.",
        image: "/dichvu.DichVuThietKe/2.png",
    },
    {
        id: "landing-page",
        title: "Landing Page bán hàng",
        description:
            "Thiết kế cô đọng, tập trung vào duy nhất một sản phẩm hoặc chiến dịch cốt lõi, loại bỏ mọi yếu tố gây nhiễu để hướng người dùng đến hành vi duy nhất: Điền form đăng ký hoặc bấm mua hàng.",
        image: "/dichvu.DichVuThietKe/3.png",
    },
    {
        id: "thuong-mai-dien-tu",
        title: "Website Thương mại điện tử",
        description:
            "Tích hợp giỏ hàng, cổng thanh toán tự động, quản lý kho vận và chương trình khuyến mãi thông minh giúp bứt phá doanh số bán hàng online.",
        image: "/dichvu.DichVuThietKe/4.png",
    },
    {
        id: "tin-tuc-mag",
        title: "Website Tin tức / Tạp chí",
        description:
            "Tối ưu tốc độ tải trang cực nhanh, cấu trúc chuẩn SEO Google, tối ưu trải nghiệm đọc và tích hợp hệ thống quản lý bài viết phân quyền chuyên nghiệp.",
        image: "/dichvu.DichVuThietKe/5.png",
    },
    {
        id: "dat-lich-dich-vu",
        title: "Website Đặt lịch / Booking Services",
        description:
            "Tự động hóa quy trình đặt hẹn cho Spa, Clinic, Nhà hàng, Salon. Tích hợp nhắc lịch qua Zalo/SMS và quản lý ca làm việc của nhân sự.",
        image: "/dichvu.DichVuThietKe/6.png",
    },
];

// Dữ liệu Cam kết
const COMMITMENTS = [
    {
        id: 1,
        title: "Đảm bảo yếu tố thẩm mỹ đối với ngành hàng",
        desc: "Cho dù sử dụng template hay may đo riêng, chúng tôi đều nghiên cứu kỹ hành vi người dùng, từ đó thiết kế giao diện phù hợp nhất đối với từng ngành hàng."
    },
    {
        id: 2,
        title: "Clean Code & Tốc độ tải trang tối đa",
        desc: "Cho dù sử dụng template hay may đo riêng, chúng tôi đều tối ưu dung lượng hình ảnh, dọn dẹp mã nguồn để website đạt điểm số cao trên Google PageSpeed Insights."
    },
    {
        id: 3,
        title: "Responsive toàn diện trên mọi thiết bị",
        desc: "Giao diện hiển thị hoàn hảo, không bị lệch bố cục trên tất cả các kích thước màn hình từ Smartphone, Tablet đến Desktop."
    },
    {
        id: 4,
        title: "Bảo mật tuyệt đối & Sẵn sàng tích hợp",
        desc: "Cài đặt chứng chỉ SSL, cấu hình hệ thống tường lửa cơ bản. Dễ dàng kết nối API với các phần mềm quản lý kho, CRM và hệ thống AI Agent."
    }
];

// ================= HOOK CUSTOM =================
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

// ================= SECTION 1: HERO & VERTICAL CAROUSEL =================
function HeroSection() {
    const [ref, isRevealed] = useScrollReveal();
    const [startIndex, setStartIndex] = useState(0);
    const totalItems = WEBSITE_TYPES.length;

    useEffect(() => {
        const timer = setInterval(() => {
            setStartIndex((prev) => (prev + 1) % totalItems);
        }, 4000);
        return () => clearInterval(timer);
    }, [totalItems]);

    const visibleImages = [
        WEBSITE_TYPES[startIndex],
        WEBSITE_TYPES[(startIndex + 1) % totalItems],
        WEBSITE_TYPES[(startIndex + 2) % totalItems],
    ];

    return (
        <section
            ref={ref}
            className={`relative w-full max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 pt-3 md:pt-6 pb-8 transition-all duration-[1000ms] ease-out transform ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
        >
            {/* TIÊU ĐỀ CHÍNH HERO CĂN GIỮA */}
            <div className="w-full text-center mb-4 sm:mb-8">
                <h1 className="text-base sm:text-2xl lg:text-3xl font-black tracking-tight leading-snug uppercase">
                    <span className="text-slate-950 block mb-0.5">
                        Dịch vụ lập trình & phát triển
                    </span>
                    <span className="text-[#ed792f]">
                        Hệ thống Website - Landing Page
                    </span>
                </h1>
            </div>

            {/* CỐ ĐỊNH BỐ CỤC 2 CỘT SONG SONG TRÊN MỌI MÀN HÌNH */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-6 lg:gap-10 items-start">

                {/* CỘT BÊN TRÁI: CAROUSEL ẢNH */}
                <div className="w-full relative">
                    <div className="flex flex-col gap-2 sm:gap-4 w-full">
                        {visibleImages.map((item, idx) => (
                            <div
                                key={`${item.id}-img-${idx}`}
                                className="relative w-full h-[110px] sm:h-[160px] lg:h-[220px] rounded-lg sm:rounded-xl overflow-hidden shadow-xs border border-neutral-200/60 group"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-all duration-500" />
                            </div>
                        ))}
                    </div>

                    {/* Nút điều hướng */}
                    <div className="w-full flex justify-center gap-2 sm:gap-3 mt-2.5 sm:mt-4 z-20">
                        <button
                            type="button"
                            aria-label="Ảnh trước"
                            onClick={() => setStartIndex((prev) => (prev - 1 + totalItems) % totalItems)}
                            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white border border-neutral-200 shadow-2xs hover:bg-[#ed792f] hover:border-[#ed792f] text-neutral-600 hover:text-white flex items-center justify-center text-[10px] sm:text-xs transition-all hover:scale-105"
                        >
                            ❮
                        </button>
                        <button
                            type="button"
                            aria-label="Ảnh kế tiếp"
                            onClick={() => setStartIndex((prev) => (prev + 1) % totalItems)}
                            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white border border-neutral-200 shadow-2xs hover:bg-[#ed792f] hover:border-[#ed792f] text-neutral-600 hover:text-white flex items-center justify-center text-[10px] sm:text-xs transition-all hover:scale-105"
                        >
                            ❯
                        </button>
                    </div>
                </div>

                {/* CỘT BÊN PHẢI: CHI TIẾT */}
                <div className="h-full relative">
                    <div className="sticky top-16 sm:top-24 flex flex-col justify-between h-auto space-y-3 sm:space-y-5">
                        <div className="space-y-2 sm:space-y-4">
                            {WEBSITE_TYPES.slice(0, 3).map((item) => (
                                <div
                                    key={item.id}
                                    className="space-y-0.5 sm:space-y-1 text-left pl-2 sm:pl-3 border-l-2 border-[#ed792f]"
                                >
                                    <h2 className="text-xs sm:text-base lg:text-lg font-bold text-neutral-900 tracking-tight leading-tight">
                                        {item.title}
                                    </h2>
                                    <p className="text-neutral-600 text-[10px] sm:text-xs md:text-sm leading-tight sm:leading-relaxed font-normal">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* NÚT ĐĂNG KÝ */}
                        <div className="pt-2 sm:pt-4 w-full flex justify-start">
                            <button className="inline-flex items-center justify-between gap-1.5 sm:gap-2.5 bg-[#ed792f] hover:bg-[#d96723] text-white font-bold text-[10px] sm:text-xs md:text-sm px-3.5 sm:px-6 py-2 sm:py-3 rounded-full shadow-md transition-all transform hover:-translate-y-0.5 uppercase tracking-wide">
                                <span>Đăng ký nhận tư vấn</span>
                                <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/20 flex items-center justify-center text-[9px] sm:text-xs">
                                    📞
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

// ================= SECTION 2: RECOMMENDED SECTION (CHIA 2 CỘT SONG SONG) =================
function RecommendedSection({ img1Url = "/dichvu.tronGoi/img1.png", img2Url = "/dichvu.tronGoi/img2.png" }) {
    const [ref, isRevealed] = useScrollReveal();

    return (
        <section
            ref={ref}
            className={`w-full max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8 transition-all duration-[1000ms] ease-out transform ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
        >
            <div className="flex flex-col items-center space-y-4 text-center">
                {/* CHIA 2 CỘT HIỂN THỊ HÀNG XÓM SONG SONG */}
                <div className="grid grid-cols-2 gap-3 sm:gap-6 items-center justify-center w-full max-w-2xl mx-auto">
                    <div className="w-full h-20 sm:h-24 flex items-center justify-center p-1">
                        <img src={img1Url} alt="Recommended Seal" className="max-w-full max-h-full object-contain drop-shadow-xs" />
                    </div>

                    <div className="w-full flex flex-col items-center justify-center space-y-1.5">
                        <div className="w-full h-16 sm:h-20 flex items-center justify-center">
                            <img src={img2Url} alt="Kho Template Được Thiết Kế Dành Riêng" className="max-w-full max-h-full object-contain drop-shadow-xs" />
                        </div>
                        <div className="flex items-center justify-center gap-1 px-3 sm:px-4 py-1 bg-white rounded-full border border-neutral-200/80 shadow-2xs">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className="text-yellow-400 text-sm sm:text-base leading-none">★</span>
                            ))}
                        </div>
                    </div>
                </div>

                <p className="text-neutral-700 text-xs sm:text-sm md:text-base font-normal leading-relaxed max-w-2xl pt-2">
                    Phương án này tập trung vào kết quả, giúp doanh nghiệp sở hữu website chuyên nghiệp với mức ngân sách tối ưu và triển khai trong thời gian sớm nhất.
                </p>
            </div>
        </section>
    );
}

// ================= SECTION 3: CHÚNG TÔI CAM KẾT (CỐ ĐỊNH 2 CỘT SONG SONG) =================
function SpecialServiceSection() {
    const [ref, isRevealed] = useScrollReveal();

    return (
        <section
            ref={ref}
            className="py-8 sm:py-14 w-full px-2 sm:px-6 lg:px-8 max-w-6xl mx-auto"
        >
            <div
                className={`transition-all duration-[1000ms] ease-out transform ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
            >
                <h2 className="text-base sm:text-2xl font-black text-neutral-900 uppercase tracking-tight mb-6 sm:mb-8 text-center sm:text-left">
                    CHÚNG TÔI CAM KẾT
                </h2>

                {/* CỐ ĐỊNH 2 CỘT SONG SONG TRÊN CẢ MOBILE VÀ DESKTOP */}
                <div className="grid grid-cols-2 gap-y-6 sm:gap-y-8 gap-x-2.5 sm:gap-x-6 lg:gap-x-8">
                    {COMMITMENTS.map((item) => (
                        <div key={item.id} className="relative flex flex-col w-full text-left pl-2.5 sm:pl-4">

                            {/* 1. BADGE NỬA VÒNG TRÒN DÍNH SÁT KHUNG TIÊU ĐỀ (KHÔNG CÒN KHOẢNG TRẮNG) */}
                            <div className="absolute -left-2.5 sm:-left-3.5 top-[24px] sm:top-[30px] -translate-y-1/2 w-[48px] h-[48px] sm:w-[62px] sm:h-[62px] flex items-center justify-center z-10">
                                {/* Nửa vòng tròn cam */}
                                <div className="absolute left-0 top-0 w-1/2 h-full bg-[#ed792f] rounded-l-full z-0" />

                                {/* Lõi tròn trắng đè lên trên chứa con số */}
                                <div className="relative w-[32px] h-[32px] sm:w-[42px] sm:h-[42px] bg-white rounded-full border-[1.5px] sm:border-[2px] border-[#ed792f] flex items-center justify-center z-10 shadow-2xs">
                                    <span className="text-[#ed792f] font-black text-xs sm:text-base">
                                        {item.id}
                                    </span>
                                </div>
                            </div>

                            {/* 2. CẤU TRÚC 2 KHỐI NỘI DUNG NẰM KHÍT NHAU */}
                            <div className="flex flex-col w-full space-y-1.5 z-0">
                                {/* Top Box (Tiêu đề) */}
                                <div className="w-full bg-[#fffbf7] border-[1.5px] border-[#ed792f] rounded-xl pl-9 sm:pl-12 pr-2.5 sm:pr-4 py-2 sm:py-3 min-h-[48px] sm:min-h-[60px] flex items-center">
                                    <h3 className="text-xs sm:text-sm md:text-base font-bold text-neutral-900 leading-tight sm:leading-snug">
                                        {item.title}
                                    </h3>
                                </div>

                                {/* Bottom Box (Mô tả) */}
                                <div className="w-full bg-[#fffbf7] border-[1.5px] border-[#ed792f] rounded-xl p-2.5 sm:p-4 md:p-5">
                                    <p className="text-neutral-700 text-[10px] sm:text-xs md:text-sm leading-tight sm:leading-relaxed font-normal">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ================= SECTION 4: CONTACT FORM =================
function ContactFormSection() {
    return (
        <section className="relative w-full py-10 md:py-16 px-3 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200/80 z-10">
            <div
                className="absolute inset-0 w-full h-full pointer-events-none z-0 bg-no-repeat bg-center"
                style={{
                    backgroundImage: `url(${bgSession5})`,
                    backgroundSize: "cover",
                }}
            />

            <div className="relative z-20 max-w-lg mx-auto w-full">
                <ContactForm />
            </div>
        </section>
    );
}

// ================= COMPONENT CHÍNH =================
export default function CmicServicePage() {
    return (
        <div className="bg-[#faf8f6] text-neutral-800 min-h-screen antialiased overflow-clip font-sans scroll-smooth w-full">
            <HeroSection />

            <RecommendedSection
                img1Url="/dichvu.tronGoi/img1.png"
                img2Url="/dichvu.tronGoi/img2.png"
            />

            <SpecialServiceSection />
            <ContactFormSection />
        </div>
    );
}