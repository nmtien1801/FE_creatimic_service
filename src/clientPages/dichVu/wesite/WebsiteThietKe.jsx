import React, { useEffect, useRef, useState } from "react";
import ContactForm from '../../../components/FormContact';

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

// ================= SECTION 1: HERO (BANNER) =================
function HeroSection() {
    const [ref, isRevealed] = useScrollReveal();

    return (
        <section
            ref={ref}
            className={`w-full transition-all duration-[1000ms] ease-out transform ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
        >
            <img
                src="/dichvu.WebDesign/bg1.png"
                alt="Web Design Banner"
                className="w-full h-auto object-contain block"
            />
        </section>
    );
}

// ================= SECTION 2: VAI TRÒ CỦA UX/UI =================
function RoleOfUiUxSection({ img1Url = "img1.png", img2Url = "img2.png" }) {
    const [ref, isRevealed] = useScrollReveal();

    return (
        <section
            ref={ref}
            className="w-full py-5 md:py-12 px-6 bg-white"
        >
            <div className={`max-w-4xl mx-auto transition-all duration-[1000ms] ease-out transform ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}>

                {/* 1. ĐOẠN INTRO TEXT TRÊN CÙNG */}
                <p className="text-neutral-800 text-sm sm:text-base leading-relaxed mb-12 sm:mb-16 text-justify sm:text-left">
                    Trước khi đọc nội dung, khách hàng "cảm nhận" doanh nghiệp của bạn thông qua phần nhìn. CMIC MEDIA mang đến dịch vụ thiết kế giao diện UI/UX theo phong cách <span className="text-[#ed792f] font-bold">tối giản, chuyên nghiệp, hiện đại, cá nhân hóa</span> theo nhận diện thương hiệu riêng.
                </p>

                {/* 2. TIÊU ĐỀ CHÍNH */}
                <h2 className="text-1xl sm:text-2xl lg:text-[40px] font-black text-neutral-950 uppercase tracking-tight mb-10 sm:mb-14">
                    VAI TRÒ CỦA UX/UI TRONG WEBSITE
                </h2>

                {/* 3. KHỐI UX (USER EXPERIENCE) */}
                <div className="mb-14 sm:mb-20">
                    <div className="w-full flex justify-center mb-10">
                        {/* Ảnh 1 - Word Cloud UX */}
                        <img
                            src={img1Url}
                            alt="UX Word Cloud"
                            className="max-w-full h-auto object-contain max-h-64 sm:max-h-80 drop-shadow-sm"
                        />
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-neutral-950 mb-4">
                        UX (User Experience - Trải nghiệm người dùng)
                    </h3>
                    <p className="text-neutral-800 text-sm sm:text-base leading-relaxed mb-4">
                        Là cách thức người dùng tương tác với website. Chúng tôi sắp xếp các khối nội dung theo logic tâm lý hành vi:
                    </p>

                    <ul className="list-disc pl-6 mb-4 text-neutral-800 text-sm sm:text-base space-y-1.5 leading-relaxed">
                        <li>Nỗi đau nằm ở đâu?</li>
                        <li>Giải pháp nằm ở đâu?</li>
                        <li>Tại sao họ phải tin bạn?</li>
                        <li>Nút bấm hành động nằm ở vị trí nào để ngón tay dễ chạm vào nhất?</li>
                    </ul>

                    <p className="text-neutral-800 text-sm sm:text-base leading-relaxed">
                        Tất cả đều được tính toán bằng dữ liệu nghiên cứu.
                    </p>
                </div>

                {/* 4. KHỐI UI (USER INTERFACE) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
                    <div className="order-2 md:order-1 flex flex-col justify-center h-full">
                        <h3 className="text-lg sm:text-xl font-bold text-neutral-950 mb-4">
                            UI (User Interface - Giao diện người dùng)
                        </h3>
                        <p className="text-neutral-800 text-sm sm:text-base leading-relaxed mb-4 text-justify sm:text-left">
                            Là sự kết hợp hài hòa giữa màu sắc, font chữ, hình ảnh và khoảng trắng.
                        </p>
                        <p className="text-neutral-800 text-sm sm:text-base leading-relaxed text-justify sm:text-left">
                            CMIC tạo ra những visual mang tính "Modern Minimalist" - Tập trung vào sự tinh gọn, thiết kế hiện đại, tối giản, mang phong cách chuyên nghiệp, có chiều sâu và hướng tới trải nghiệm người dùng.
                        </p>
                    </div>

                    <div className="order-1 md:order-2">
                        {/* Ảnh 2 - UI Mockup Tablet */}
                        <div className="w-full rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-xl border border-neutral-100">
                            <img
                                src={img2Url}
                                alt="UI Interface Mockup"
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

// ================= SECTION 3: CAM KẾT THIẾT KẾ =================
function CommitmentSection() {
    const [ref, isRevealed] = useScrollReveal();

    return (
        <section
            ref={ref}
            className="relative py-20 md:py-28 w-full px-6 bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/dichvu.WebDesign/bg2.png')" }}
        >
            <div className={`max-w-6xl mx-auto transition-all duration-[1000ms] ease-out transform ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}>

                {/* TIÊU ĐỀ */}
                <div className="mb-16 md:mb-20">
                    <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-950 uppercase text-center md:text-left">
                        CHÚNG TÔI CAM KẾT
                    </h2>
                </div>

                {/* DANH SÁCH 3 CỘT */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

                    {/* Cam kết 1 */}
                    <div className="flex flex-col items-center text-center h-full">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-[5px] border-[#dc3545] bg-white text-[#dc3545] flex items-center justify-center mb-6 shadow-sm">
                            <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <h3 className="text-base sm:text-[17px] font-bold text-neutral-950 uppercase leading-relaxed mb-6 min-h-[56px] flex items-center justify-center">
                            KHÔNG<br />COPY TEMPLATE
                        </h3>
                        <div className="w-full bg-[#f6eceb] rounded-2xl p-6 sm:p-8 flex-1 shadow-sm">
                            <p className="text-sm sm:text-base text-neutral-800 leading-relaxed text-left font-normal">
                                Mỗi dự án là một bản thiết kế độc bản dựa trên Brand Guidelines của khách hàng.
                            </p>
                        </div>
                    </div>

                    {/* Cam kết 2 */}
                    <div className="flex flex-col items-center text-center h-full">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#00c800] text-white flex items-center justify-center mb-6 shadow-sm">
                            <svg className="w-12 h-12 sm:w-14 sm:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="text-base sm:text-[17px] font-bold text-neutral-950 uppercase leading-relaxed mb-6 min-h-[56px] flex items-center justify-center">
                            TẬP TRUNG VÀO TÍNH<br />KHẢ THI
                        </h3>
                        <div className="w-full bg-[#f6eceb] rounded-2xl p-6 sm:p-8 flex-1 shadow-sm">
                            <p className="text-sm sm:text-base text-neutral-800 leading-relaxed text-left font-normal">
                                Bản vẽ thiết kế luôn bám sát thực tế lập trình, đảm bảo khi bàn giao bản code thực tế sẽ giống 99% so với bản vẽ demo.
                            </p>
                        </div>
                    </div>

                    {/* Cam kết 3 */}
                    <div className="flex flex-col items-center text-center h-full">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#111111] text-white flex items-center justify-center mb-6 shadow-sm">
                            <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                        </div>
                        <h3 className="text-base sm:text-[17px] font-bold text-neutral-950 uppercase leading-relaxed mb-6 min-h-[56px] flex items-center justify-center">
                            CHUYỂN GIAO TOÀN BỘ<br />SOURCE DESIGN
                        </h3>
                        <div className="w-full bg-[#f6eceb] rounded-2xl p-6 sm:p-8 flex-1 shadow-sm">
                            <p className="text-sm sm:text-base text-neutral-800 leading-relaxed text-left font-normal">
                                Bàn giao đầy đủ file gốc, bộ biểu tượng (icons), hình ảnh đã tối ưu hóa để doanh nghiệp chủ động sử dụng cho các mục đích marketing khác về sau.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

// ================= SECTION 4: FORM LIÊN HỆ (BG NHƯ ẢNH) =================
function ContactFormSection() {
    return (
        // Đã xóa "px-4 sm:px-8 md:px-12 lg:px-16" ở thẻ section này
        <section className="relative w-full bg-[#faf8f6] z-10 overflow-hidden">
            <div
                className="w-full shadow-[0_0_40px_rgba(252,156,63,0.3)] border-y border-orange-200/50 p-8 sm:p-12 md:p-16 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/dichvu.WebDesign/bg3.png')" }}
            >

                {/* Bọc giới hạn độ rộng để form ở giữa không bị bè ngang quá to */}
                <div className="max-w-lg mx-auto relative z-30">
                    {/* Gọi Component Form của bạn vào đây */}
                    <ContactForm />
                </div>

            </div>
        </section>
    );
}

// ================= SECTION 5: MỘT SỐ DỰ ÁN TIÊU BIỂU (THU NHỎ ITEM) =================
function ProjectsSection() {
    const [ref, isRevealed] = useScrollReveal();

    return (
        <section
            ref={ref}
            className="bg-[#faf8f6] pb-20 pt-16 border-t border-neutral-200/40 px-6"
        >
            <div className="max-w-7xl mx-auto">
                <div className="mb-12 space-y-2 text-center md:text-left">
                    <h2 className="text-2xl font-bold tracking-tight text-neutral-900 uppercase">
                        Một số dự án tiêu biểu
                    </h2>
                    <p className="text-xs sm:text-sm text-neutral-500 font-normal">Các sản phẩm thiết kế UI/UX thực chiến nâng tầm tỷ lệ chuyển đổi thương hiệu</p>
                </div>

                {/* Đã thay đổi lưới thành 4 cột (lg:grid-cols-4), 3 cột (md:grid-cols-3) để thu nhỏ item */}
                <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 mx-auto transition-all duration-[1000ms] ease-out transform ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}>
                    {/* Dự án 1 */}
                    <div className="group rounded-xl overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-md bg-white flex flex-col justify-between transition-all duration-300">
                        <div className="overflow-hidden aspect-[16/10] bg-neutral-100">
                            <img
                                src="/dichvu.WebDesign/img3.png"
                                alt="CMIC Media Flycam DJI Store Concept UI"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                            />
                        </div>
                        <div className="p-4 bg-white border-t border-neutral-100">
                            <h3 className="text-[13px] sm:text-sm font-semibold text-neutral-900 group-hover:text-[#ed792f] transition-colors line-clamp-2">Hệ thống thương mại điện tử - Flycam Store</h3>
                        </div>
                    </div>

                    {/* Dự án 2 */}
                    <div className="group rounded-xl overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-md bg-white flex flex-col justify-between transition-all duration-300">
                        <div className="overflow-hidden aspect-[16/10] bg-neutral-100">
                            <img
                                src="/dichvu.WebDesign/img4.png"
                                alt="CMIC Studio Combo Livestream Platform UI"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                            />
                        </div>
                        <div className="p-4 bg-white border-t border-neutral-100">
                            <h3 className="text-[13px] sm:text-sm font-semibold text-neutral-900 group-hover:text-[#ed792f] transition-colors line-clamp-2">Landing page thiết bị công nghệ - Combo Livestream</h3>
                        </div>
                    </div>

                    {/* Dự án 3 */}
                    <div className="group rounded-xl overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-md bg-white flex flex-col justify-between transition-all duration-300">
                        <div className="overflow-hidden aspect-[16/10] bg-neutral-100">
                            <img
                                src="/dichvu.WebDesign/img5.png"
                                alt="E-Tech Smart Retail UX Design"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                            />
                        </div>
                        <div className="p-4 bg-white border-t border-neutral-100">
                            <h3 className="text-[13px] sm:text-sm font-semibold text-neutral-900 group-hover:text-[#ed792f] transition-colors line-clamp-2">Giao diện bán lẻ kỹ thuật số - E-Tech Retail</h3>
                        </div>
                    </div>

                    {/* Dự án 4 */}
                    <div className="group rounded-xl overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-md bg-white flex flex-col justify-between transition-all duration-300">
                        <div className="overflow-hidden aspect-[16/10] bg-neutral-100">
                            <img
                                src="/dichvu.WebDesign/img6.png"
                                alt="Mona Smart Technology UX Concept"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                            />
                        </div>
                        <div className="p-4 bg-white border-t border-neutral-100">
                            <h3 className="text-[13px] sm:text-sm font-semibold text-neutral-900 group-hover:text-[#ed792f] transition-colors line-clamp-2">Hệ sinh thái thiết bị thông minh - Mona Smart</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ================= COMPONENT CHÍNH GỌI LẠI CÁC SECTIONS =================
export default function CmicUiUxPage() {
    return (
        <div className="bg-[#faf8f6] text-neutral-800 min-h-screen antialiased overflow-x-hidden font-sans scroll-smooth">
            <HeroSection />
            <RoleOfUiUxSection img1Url="/dichvu.WebDesign/img1.png" img2Url="/dichvu.WebDesign/img2.png" />
            <CommitmentSection />
            <ContactFormSection />
            <ProjectsSection />
        </div>
    );
}