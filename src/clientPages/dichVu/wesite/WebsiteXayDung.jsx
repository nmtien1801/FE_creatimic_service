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
        image:
            "/dichvu.DichVuThietKe/1.png",
    },
    {
        id: "giao-duc",
        title: "Website Giáo dục",
        description:
            "Đóng gói thương hiệu và hệ thống bài giảng trực tuyến cho Chuyên gia. Tích hợp công nghệ bảo mật chống tải lậu video để bảo vệ tuyệt đối bản quyền chất xám.",
        image:
            "/dichvu.DichVuThietKe/2.png",
    },
    {
        id: "landing-page",
        title: "Landing Page bán hàng",
        description:
            "Thiết kế cô đọng, tập trung vào duy nhất một sản phẩm hoặc chiến dịch cốt lõi, loại bỏ mọi yếu tố gây nhiễu để hướng người dùng đến hành vi duy nhất: Điền form đăng ký hoặc bấm mua hàng.",
        image:
            "/dichvu.DichVuThietKe/3.png",
    },
    {
        id: "thuong-mai-dien-tu",
        title: "Website Thương mại điện tử",
        description:
            "Tích hợp giỏ hàng, cổng thanh toán tự động, quản lý kho vận và chương trình khuyến mãi thông minh giúp bứt phá doanh số bán hàng online.",
        image:
            "/dichvu.DichVuThietKe/4.png",
    },
    {
        id: "tin-tuc-mag",
        title: "Website Tin tức / Tạp chí",
        description:
            "Tối ưu tốc độ tải trang cực nhanh, cấu trúc chuẩn SEO Google, tối ưu trải nghiệm đọc và tích hợp hệ thống quản lý bài viết phân quyền chuyên nghiệp.",
        image:
            "/dichvu.DichVuThietKe/5.png",
    },
    {
        id: "dat-lich-dich-vu",
        title: "Website Đặt lịch / Booking Services",
        description:
            "Tự động hóa quy trình đặt hẹn cho Spa, Clinic, Nhà hàng, Salon. Tích hợp nhắc lịch qua Zalo/SMS và quản lý ca làm việc của nhân sự.",
        image:
            "/dichvu.DichVuThietKe/6.png",
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

    // Auto play cuộn dọc mỗi 4s
    useEffect(() => {
        const timer = setInterval(() => {
            setStartIndex((prev) => (prev + 1) % totalItems);
        }, 4000);
        return () => clearInterval(timer);
    }, [totalItems]);

    // Trích xuất 3 hình ảnh hiển thị cho Carousel dọc
    const visibleImages = [
        WEBSITE_TYPES[startIndex],
        WEBSITE_TYPES[(startIndex + 1) % totalItems],
        WEBSITE_TYPES[(startIndex + 2) % totalItems],
    ];

    return (
        <section
            ref={ref}
            // Đã sửa lại lỗi cú pháp thừa dấu } ở dòng này và khôi phục hiệu ứng reveal
            className={`relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 md:pt-5 pb-12 transition-all duration-[1000ms] ease-out transform ${
                isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
            {/* TIÊU ĐỀ CHÍNH HERO CĂN GIỮA */}
            <div className="w-full text-center mb-12 sm:mb-16">
                <h1 className="text-xl lg:text-[35px] font-black tracking-tight leading-snug uppercase">
                    <span className="text-slate-950 block mb-1">
                        Dịch vụ lập trình & phát triển
                    </span>
                    <span className="text-[#ed792f]">
                        Hệ thống Website - Landing Page
                    </span>
                </h1>
            </div>

            {/* QUAN TRỌNG 1: Đã xóa "items-start" để 2 cột (trái - phải) luôn cao bằng nhau */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

                {/* CỘT BÊN TRÁI: CAROUSEL ẢNH (Đóng vai trò kéo dài chiều cao section) */}
                <div className="lg:col-span-6 w-full relative">
                    <div className="flex flex-col gap-5 sm:gap-6 w-full">
                        {visibleImages.map((item, idx) => (
                            <div
                                key={`${item.id}-img-${idx}`}
                                className="relative w-full h-[180px] lg:h-[290px] rounded-2xl overflow-hidden shadow-md border border-neutral-200/60 group"
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

                    {/* Nút điều hướng nằm ngang ở dưới cùng */}
                    <div className="w-full flex justify-center gap-4 mt-6 z-20">
                        <button
                            type="button"
                            aria-label="Ảnh trước"
                            onClick={() => setStartIndex((prev) => (prev - 1 + totalItems) % totalItems)}
                            className="w-10 h-10 rounded-full bg-white border border-neutral-200 shadow-md hover:bg-[#ed792f] hover:border-[#ed792f] text-neutral-600 hover:text-white flex items-center justify-center text-sm transition-all hover:scale-110"
                        >
                            ❮
                        </button>
                        <button
                            type="button"
                            aria-label="Ảnh kế tiếp"
                            onClick={() => setStartIndex((prev) => (prev + 1) % totalItems)}
                            className="w-10 h-10 rounded-full bg-white border border-neutral-200 shadow-md hover:bg-[#ed792f] hover:border-[#ed792f] text-neutral-600 hover:text-white flex items-center justify-center text-sm transition-all hover:scale-110"
                        >
                            ❯
                        </button>
                    </div>
                </div>

                {/* QUAN TRỌNG 2: CỘT BÊN PHẢI (Khung đường ray) */}
                <div className="lg:col-span-6 h-full relative">
                    
                    {/* QUAN TRỌNG 3: KHỐI STICKY (Sẽ trượt dọc bên trong cột bên phải) */}
                    <div className="sticky top-24 lg:top-32 flex flex-col justify-center h-auto">
                        
                        {/* Danh sách 3 Loại hình */}
                        <div className="space-y-7">
                            {WEBSITE_TYPES.slice(0, 3).map((item) => (
                                <div
                                    key={item.id}
                                    className="space-y-1.5 text-left pl-4 border-l-2 border-[#ed792f]"
                                >
                                    <h2 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight">
                                        {item.title}
                                    </h2>
                                    <p className="text-neutral-600 text-sm leading-relaxed font-normal">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* NÚT ĐĂNG KÝ */}
                        <div className="pt-10 w-full flex justify-center">
                            <button className="inline-flex items-center justify-between gap-3 bg-[#ed792f] hover:bg-[#d96723] text-white font-bold text-sm px-8 py-4 rounded-full shadow-lg transition-all transform hover:-translate-y-0.5 uppercase tracking-wide">
                                <span>Đăng ký nhận tư vấn</span>
                                <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-sm">
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

// ================= SECTION 2: RECOMMENDED SECTION =================
function RecommendedSection({ img1Url = "/dichvu.tronGoi/img1.png", img2Url = "/dichvu.tronGoi/img2.png" }) {
    const [ref, isRevealed] = useScrollReveal();

    return (
        <section
            ref={ref}
            className={`w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 transition-all duration-[1000ms] ease-out transform ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
        >
            <div className="flex flex-col items-center space-y-6 text-center">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 w-full">
                    <div className="w-40 sm:w-44 h-24 sm:h-28 flex items-center justify-center flex-shrink-0">
                        <img src={img1Url} alt="Recommended Seal" className="max-w-full max-h-full object-contain drop-shadow-sm" />
                    </div>

                    <div className="flex flex-col items-center justify-center space-y-3">
                        <div className="w-64 sm:w-72 h-24 sm:h-28 flex items-center justify-center">
                            <img src={img2Url} alt="Kho Template Được Thiết Kế Dành Riêng Cho Từng Lĩnh Vực" className="max-w-full max-h-full object-contain drop-shadow-md" />
                        </div>
                        <div className="flex items-center justify-center gap-1.5 px-6 py-1.5 bg-white rounded-full border border-neutral-200/80 shadow-sm">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className="text-yellow-400 text-xl sm:text-2xl leading-none">★</span>
                            ))}
                        </div>
                    </div>
                </div>
                <p className="text-neutral-800 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-3xl pt-2">
                    Phương án này tập trung vào kết quả, giúp doanh nghiệp sở hữu website chuyên nghiệp với mức ngân sách tối ưu và triển khai trong thời gian sớm nhất.
                </p>
            </div>
        </section>
    );
}

// ================= SECTION 3: CHÚNG TÔI CAM KẾT (THIẾT KẾ CẬP NHẬT CHUẨN ẢNH) =================
function SpecialServiceSection() {
    const [ref, isRevealed] = useScrollReveal();

    return (
        <section
            ref={ref}
            className="py-16 w-full px-4 sm:px-8 md:px-12 lg:px-16 border-t border-neutral-200/60 max-w-7xl mx-auto"
        >
            <div
                className={`transition-all duration-[1000ms] ease-out transform ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
            >
                <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 uppercase tracking-tight mb-12 text-left pl-10 sm:pl-12 lg:pl-14">
                    CHÚNG TÔI CAM KẾT
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12 lg:gap-x-16">
                    {COMMITMENTS.map((item) => (
                        <div key={item.id} className="relative text-left ml-9 sm:ml-12 lg:ml-14">

                            {/* BADGE NỬA VÒNG TRÒN VÀ LÕI TRẮNG (Căn chính giữa trục dọc của Top Box) */}
                            {/* Left-0 để tâm của Badge bám sát lề trái của Box Content */}
                            <div className="absolute left-0 top-[34px] sm:top-[36px] -translate-x-1/2 -translate-y-1/2 w-[76px] h-[76px] sm:w-[84px] sm:h-[84px] flex items-center justify-center z-10">

                                {/* 1. Nửa vòng tròn cam (Nằm bên trái) */}
                                <div className="absolute left-0 top-0 w-1/2 h-full bg-[#ed792f] rounded-l-full z-0"></div>

                                {/* 2. Lõi vòng tròn trắng đè lên trên (Nhỏ hơn tạo ra viền cam hở ra ngoài) */}
                                <div className="relative w-[50px] h-[50px] sm:w-[56px] sm:h-[56px] bg-[#fffbf7] rounded-full border-[1.5px] border-[#ed792f] flex items-center justify-center z-10">
                                    <span className="text-[#ed792f] font-black text-xl sm:text-2xl">
                                        {item.id}
                                    </span>
                                </div>

                            </div>

                            {/* CẤU TRÚC 2 KHỐI NỘI DUNG (Top & Bottom tách rời) */}
                            <div className="flex flex-col w-full relative z-0">
                                {/* Top Box (Tiêu đề) */}
                                <div className="w-full bg-[#fffbf7] border-[1.5px] border-[#ed792f] rounded-r-xl pl-11 sm:pl-12 lg:pl-14 pr-4 py-3 sm:py-4 min-h-[68px] sm:min-h-[72px] flex items-center">
                                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 leading-snug">
                                        {item.title}
                                    </h3>
                                </div>

                                {/* Bottom Box (Mô tả) */}
                                {/* Thêm mt-1.5 để tạo độ rãnh chia giống thiết kế */}
                                <div className="w-full bg-[#fffbf7] border-[1.5px] border-[#ed792f] rounded-xl pl-8 sm:pl-10 pr-5 py-4 mt-0.5">
                                    <p className="text-neutral-700 text-sm sm:text-base leading-relaxed font-normal">
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
        <section className="relative w-full py-16 md:py-24 px-4 sm:px-8 md:px-12 lg:px-16 bg-slate-50 border-t border-slate-200/80 z-10">
            <div
                className="absolute inset-0 w-full h-full pointer-events-none z-0 bg-no-repeat bg-center"
                style={{
                    backgroundImage: `url(${bgSession5})`,
                    backgroundSize: "cover",
                }}
            />

            <div className="relative z-20 max-w-xl mx-auto w-full">
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