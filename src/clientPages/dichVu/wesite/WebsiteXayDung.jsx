import React, { useEffect, useRef, useState } from "react";
import ContactForm from '../../../components/FormContact';

const bgSession5 = "/dichvu.tronGoi/bgSs5.png";

// Dữ liệu 3 Loại hình Website (100% nội dung gốc)
const WEBSITE_TYPES = [
    {
        id: "doanh-nghiep",
        title: "WEBSITE DOANH NGHIỆP",
        description:
            "Khẳng định vị thế chuyên nghiệp, số hóa toàn bộ thông tin năng lực, tầm nhìn, sứ mệnh và dịch vụ của doanh nghiệp để làm việc với các đối tác lớn.",
        image:
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: "landing-page",
        title: "LANDING PAGE BÁN HÀNG/THU LEAD",
        description:
            "Thiết kế cô đọng, tập trung vào duy nhất một sản phẩm hoặc chiến dịch cốt lõi, loại bỏ mọi yếu tố gây nhiễu để hướng người dùng đến hành vi duy nhất: Điền form đăng ký hoặc bấm mua hàng.",
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: "giao-duc",
        title: "WEBSITE GIÁO DỤC",
        description:
            "Đóng gói thương hiệu và hệ thống bài giảng trực tuyến cho Chuyên gia. Tích hợp công nghệ bảo mật cao cấp, chống quay trộm màn hình và tải lậu video để bảo vệ tuyệt đối bản quyền chất xám.",
        image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop",
    },
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

// ================= SECTION 1: HERO & CAROUSEL =================
function HeroSection() {
    const [ref, isRevealed] = useScrollReveal();
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto play 5s
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % WEBSITE_TYPES.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % WEBSITE_TYPES.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? WEBSITE_TYPES.length - 1 : prev - 1
        );
    };

    return (
        <section
            ref={ref}
            className={`w-full px-4 sm:px-8 md:px-12 lg:px-16 pt-10 md:pt-16 pb-16 transition-all duration-[1000ms] ease-out transform ${
                isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* CỘT BÊN TRÁI: ĐÃ ĐIỀU CHỈNH SIZE CHỮ VÀ TÍCH HỢP CONTENT */}
                <div className="lg:col-span-6 space-y-6">
                    {/* Size chữ h1 vừa vặn, không quá to */}
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-snug text-neutral-900">
                        Dịch Vụ Lập Trình &amp; Phát Triển <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ed792f] via-[#ff8e42] to-[#ed792f]">
                            Website - Landing Page Phễu Chuyển Đổi
                        </span>
                    </h1>

                    <p className="text-neutral-500 leading-relaxed text-sm sm:text-base text-justify font-normal">
                        Trang web đóng vai trò là "bộ khung" kỹ thuật cho toàn bộ chiến dịch
                        Marketing của bạn.{" "}
                        <span className="text-neutral-900 font-semibold">CMIC MEDIA</span>{" "}
                        chuyên sâu trong việc xây dựng các mô hình website doanh nghiệp,
                        website bán hàng, giáo dục và Landing Page phục vụ chiến dịch tối ưu
                        hóa chuyển đổi, giúp doanh nghiệp và cá nhân kinh doanh sở hữu nền
                        tảng vận hành mượt mà, không lỗi hệ thống.
                    </p>

                    {/* DANH SÁCH 3 LOẠI HÌNH WEBSITE NGAY TRONG CỘT TRÁI */}
                    <div className="pt-4 space-y-3">
                        <div className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">
                            CÁC LOẠI HÌNH WEBSITE CMIC MEDIA
                        </div>

                        {WEBSITE_TYPES.map((type, idx) => {
                            const isActive = idx === currentIndex;
                            return (
                                <div
                                    key={type.id}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`cursor-pointer transition-all duration-300 p-4 rounded-xl border ${
                                        isActive
                                            ? "bg-white border-[#ed792f] shadow-md border-l-4 border-l-[#ed792f]"
                                            : "bg-white/50 border-neutral-200/60 hover:bg-white hover:border-neutral-300"
                                    }`}
                                >
                                    <h3
                                        className={`text-sm sm:text-base font-bold transition-colors ${
                                            isActive ? "text-[#ed792f]" : "text-neutral-900"
                                        }`}
                                    >
                                        {type.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-normal text-justify mt-1">
                                        {type.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* CỘT BÊN PHẢI: CAROUSEL HÌNH ẢNH ĐỒNG BỘ CÙNG CONTENT TRÁI */}
                <div className="lg:col-span-6 w-full lg:sticky lg:top-8">
                    <div className="relative w-full rounded-2xl overflow-hidden border border-neutral-200/80 shadow-xl bg-white group">
                        <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden">
                            {WEBSITE_TYPES.map((item, index) => (
                                <div
                                    key={item.id}
                                    className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                                        index === currentIndex
                                            ? "opacity-100 scale-100 z-10"
                                            : "opacity-0 scale-105 z-0 pointer-events-none"
                                    }`}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Overlay dải nhãn tên slide đang active */}
                                    <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
                                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#ff8e42]">
                                            Đang hiển thị / Slide {index + 1}
                                        </span>
                                        <h4 className="text-sm sm:text-base font-bold truncate">
                                            {item.title}
                                        </h4>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Button chuyển Slide Prev / Next */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/40 hover:bg-[#ed792f] text-white transition-all flex items-center justify-center text-xs opacity-0 group-hover:opacity-100"
                        >
                            ❮
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/40 hover:bg-[#ed792f] text-white transition-all flex items-center justify-center text-xs opacity-0 group-hover:opacity-100"
                        >
                            ❯
                        </button>

                        {/* Chỉ số Dots */}
                        <div className="absolute top-4 right-4 z-20 flex gap-1.5 bg-black/30 backdrop-blur-sm px-2.5 py-1.5 rounded-full">
                            {WEBSITE_TYPES.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`h-2 rounded-full transition-all duration-300 ${
                                        idx === currentIndex
                                            ? "w-6 bg-[#ed792f]"
                                            : "w-2 bg-white/60 hover:bg-white"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ================= SECTION 2: DỊCH VỤ ĐẶC BIỆT & CAM KẾT =================
function SpecialServiceSection() {
    const [ref, isRevealed] = useScrollReveal();

    return (
        <section
            ref={ref}
            className="py-16 w-full px-4 sm:px-8 md:px-12 lg:px-16 border-t border-neutral-200/60"
        >
            <div
                className={`transition-all duration-[1000ms] ease-out transform ${
                    isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
                <div className="border border-neutral-200/80 rounded-2xl bg-white p-6 sm:p-10 shadow-sm mb-12 space-y-3 relative overflow-hidden">
                    <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 uppercase">
                        Dịch vụ <span className="text-[#ed792f]">Đặc Biệt</span> dành cho
                        chủ doanh nghiệp muốn tối ưu ngân sách
                    </h2>
                    <h3 className="text-xs sm:text-sm font-bold text-neutral-400 uppercase tracking-wider">
                        KHO TEMPLATE ĐỘC QUYỀN TỐI ƯU SẴN
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-normal text-justify pt-1">
                        Để hỗ trợ các startup và SME tối ưu chi phí, CMIC MEDIA cung cấp
                        giải pháp xây dựng web dựa trên hệ thống template có sẵn được đội
                        ngũ chúng tôi nghiên cứu, thiết kế chuẩn cấu trúc phễu và tối ưu hóa
                        chuyển đổi theo từng ngành nghề. Phương án này giúp doanh nghiệp sở
                        hữu website chuyên nghiệp với mức ngân sách tinh gọn và thời gian
                        triển khai nhanh nhất.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 border-t border-neutral-200/60 pt-10">
                    <div className="space-y-2 group">
                        <h4 className="text-base font-bold text-neutral-900 group-hover:text-[#ed792f] transition-colors">
                            CLEAN CODE &amp; TỐC ĐỘ TẢI TRANG TỐI ĐA
                        </h4>
                        <div className="inline-flex text-[#ed792f] font-semibold text-[11px] uppercase tracking-wider">
                            
                        </div>
                        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-normal text-justify">
                            Cho dù sử dụng template hay may đo riêng, chúng tôi đều tối ưu dung
                            lượng hình ảnh, dọn dẹp mã nguồn để website đạt điểm số cao trên
                            Google PageSpeed Insights.
                        </p>
                    </div>

                    <div className="space-y-2 group">
                        <h4 className="text-base font-bold text-neutral-900 group-hover:text-[#ed792f] transition-colors">
                            RESPONSIVE TOÀN DIỆN
                        </h4>
                        <div className="inline-flex text-[#ed792f] font-semibold text-[11px] uppercase tracking-wider">
                            
                        </div>
                        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-normal text-justify">
                            Hiển thị hoàn hảo, không lệch bố cục trên mọi kích thước màn hình
                            smartphone, tablet và máy tính.
                        </p>
                    </div>

                    <div className="space-y-2 group">
                        <h4 className="text-base font-bold text-neutral-900 group-hover:text-[#ed792f] transition-colors">
                            SẴN SÀNG TÍCH HỢP (INTEGRATION READY)
                        </h4>
                        <div className="inline-flex text-[#ed792f] font-semibold text-[11px] uppercase tracking-wider">
                            
                        </div>
                        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-normal text-justify">
                            Dễ dàng kết nối API với các phần mềm quản lý kho hàng, POS, hệ
                            thống CRM (HubSpot, GetResponse...) và các AI Agent tự động hóa.
                        </p>
                    </div>

                    <div className="space-y-2 group">
                        <h4 className="text-base font-bold text-neutral-900 group-hover:text-[#ed792f] transition-colors">
                            BẢO MẬT TUYỆT ĐỐI
                        </h4>
                        <div className="inline-flex text-[#ed792f] font-semibold text-[11px] uppercase tracking-wider">
                            
                        </div>
                        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-normal text-justify">
                            Cài đặt chứng chỉ SSL, cấu hình hệ thống tường lửa cơ bản ngăn chặn
                            các cuộc tấn công mã độc phá hoại tài sản số.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ================= SECTION 3: CONTACT FORM (TÁI SỬ DỤNG) =================
function ContactFormSection() {
    return (
        <section className="relative w-full py-16 md:py-24 px-4 sm:px-8 md:px-12 lg:px-16 bg-slate-50 border-t border-slate-200/80 z-10">
            <div
                className="absolute inset-0 w-screen left-1/2 -translate-x-1/2 pointer-events-none z-0 bg-no-repeat bg-center"
                style={{
                    backgroundImage: `url(${bgSession5})`,
                    backgroundSize: "100% 100%",
                }}
            />

            <div className="relative z-20 max-w-xl mx-auto w-full">
                {/* Tái sử dụng component ContactForm */}
                <ContactForm />
            </div>
        </section>
    );
}

// ================= COMPONENT CHÍNH =================
export default function CmicServicePage() {
    return (
        <div className="bg-[#faf8f6] text-neutral-800 min-h-screen antialiased overflow-x-hidden font-sans scroll-smooth w-full">
            <HeroSection />
            <SpecialServiceSection />
            <ContactFormSection />
        </div>
    );
}