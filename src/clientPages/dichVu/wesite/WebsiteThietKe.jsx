import React, { useEffect, useRef, useState } from "react";

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

export default function CmicUiUxPage() {
    const [heroRef, heroRevealed] = useScrollReveal();
    const [section2Ref, section2Revealed] = useScrollReveal();
    const [section3Ref, section3Revealed] = useScrollReveal();
    const [section4Ref, section4Revealed] = useScrollReveal();

    return (
        <div className="bg-[#faf8f6] text-neutral-800 min-h-screen antialiased overflow-x-hidden font-sans scroll-smooth">

            {/* ================= SECTION 1: HERO SECTION ================= */}
            <section
                ref={heroRef}
                className={`max-w-6xl mx-auto px-6 pt-20 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start transition-all duration-[1000ms] ease-out transform ${
                    heroRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
            >
                <div className="lg:col-span-7 space-y-6">
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-[#ed792f]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ed792f]" />
                        Dịch vụ thiết kế UI/UX
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-neutral-900">
                        WEBSITE ĐỘC BẢN –<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ed792f] to-[#ff8e42]">CHẠM THỊ GIÁC, KHÓA NIỀM TIN</span>
                    </h1>

                    <div className="pt-2">
                        <p className="text-neutral-500 leading-relaxed text-sm sm:text-base text-justify">
                            Trước khi đọc nội dung, khách hàng "cảm nhận" doanh nghiệp của bạn thông qua phần nhìn. CMIC MEDIA mang đến dịch vụ thiết kế giao diện UI/UX theo phong cách tối giản, chuyên nghiệp, hiện đại, cá nhân hóa theo nhận diện thương hiệu riêng.
                        </p>
                    </div>

                    <div className="pt-2">
                        <a
                            href="#lien-he"
                            className="inline-flex items-center bg-neutral-950 hover:bg-[#ed792f] text-white font-medium text-xs px-6 py-3 rounded-lg transition-all duration-300 shadow-sm"
                        >
                            Khám phá giải pháp ngay
                        </a>
                    </div>
                </div>

                {/* Khu vực ảnh minh họa bên phải */}
                <div className="lg:col-span-5 w-full lg:mt-24">
                    <div className="relative w-full aspect-video bg-neutral-100 rounded-xl overflow-hidden shadow-md border border-neutral-200/60">
                        <img
                            src="https://images.unsplash.com/photo-1541462608141-ad4979e408c9?q=80&w=600&auto=format&fit=crop"
                            alt="CMIC Media UI UX Design Concept Mockup"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>


            {/* ================= SECTION 2: TẦM QUAN TRỌNG CỦA THIẾT KẾ UI/UX ================= */}
            <section
                ref={section2Ref}
                className="bg-white py-20 border-y border-neutral-200/40 px-6"
            >
                <div className="max-w-6xl mx-auto">
                    <div className="mb-12 space-y-2">
                        <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
                            TẦM QUAN TRỌNG CỦA
                        </h2>
                        <span className="text-xs sm:text-sm text-[#ed792f] font-normal tracking-wide uppercase block">
                            Thiết kế UI/UX thực chiến
                        </span>
                    </div>

                    {/* Bố cục song song 2 khối UI và UX tinh giản không hộp cam đặc */}
                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto transition-all duration-[1000ms] ease-out transform ${
                        section2Revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}>

                        {/* Khối UI */}
                        <div className="space-y-4 border-t border-neutral-200/60 pt-6 group">
                            <div className="space-y-2">
                                <span className="text-[10px] font-mono text-neutral-400 group-hover:text-[#ed792f] transition-colors">UI Layer /</span>
                                <h3 className="text-base font-bold text-neutral-900">
                                    UI (USER INTERFACE - GIAO DIỆN NGƯỜI DÙNG)
                                </h3>
                            </div>
                            <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-normal text-justify">
                                Là sự kết hợp hài hòa giữa màu sắc, font chữ, hình ảnh và khoảng trắng. CMIC tạo ra những visual mang tính "Modern Minimalist" - Tập trung vào sự tinh gọn, thiết kế tối giản, mang phong cách hiện đại, có chiều sâu và hướng tới trải nghiệm người dùng.
                            </p>
                        </div>

                        {/* Khối UX */}
                        <div className="space-y-4 border-t border-neutral-200/60 pt-6 group md:border-l md:pt-6 md:pl-12 border-neutral-200/40">
                            <div className="space-y-2">
                                <span className="text-[10px] font-mono text-neutral-400 group-hover:text-[#ed792f] transition-colors">UX Layer /</span>
                                <h3 className="text-base font-bold text-neutral-900">
                                    UX (USER EXPERIENCE - TRẢI NGHIỆM NGƯỜI DÙNG)
                                </h3>
                            </div>
                            <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-normal text-justify">
                                Là cách thức người dùng tương tác với website. Chúng tôi sắp xếp các khối nội dung theo logic tâm lý hành vi: Nỗi đau nằm ở đâu? Giải pháp nằm ở đâu? Tại sao họ phải tin bạn? Nút bấm hành động nằm ở vị trí nào để ngón tay dễ chạm vào nhất? Tất cả đều được tính toán bằng dữ liệu nghiên cứu.
                            </p>
                        </div>

                    </div>
                </div>
            </section>


            {/* ================= SECTION 3: CAM KẾT THIẾT KẾ ================= */}
            <section
                ref={section3Ref}
                className="py-20 max-w-6xl mx-auto px-6"
            >
                <div className={`transition-all duration-[1000ms] ease-out transform ${
                    section3Revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}>
                    <div className="max-w-2xl mb-12 space-y-2">
                        <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
                            CAM KẾT THIẾT KẾ TỪ CMIC MEDIA
                        </h2>
                    </div>

                    {/* 3 Trọng tâm cam kết không gian mở */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

                        {/* Cam kết 1 */}
                        <div className="space-y-3 border-t border-neutral-200/60 pt-5 group">
                            <div className="w-6 h-6 rounded bg-red-50 text-red-600 font-bold flex items-center justify-center text-xs">✕</div>
                            <h3 className="text-base font-bold text-neutral-900 group-hover:text-[#ed792f] transition-colors">Không Copy Template</h3>
                            <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-normal text-justify">
                                Mỗi dự án là một bản thiết kế độc bản dựa trên Brand Guidelines của khách hàng.
                            </p>
                        </div>

                        {/* Cam kết 2 */}
                        <div className="space-y-3 border-t border-neutral-200/60 pt-5 group">
                            <div className="w-6 h-6 rounded bg-green-50 text-green-600 font-bold flex items-center justify-center text-xs">✓</div>
                            <h3 className="text-base font-bold text-neutral-900 group-hover:text-[#ed792f] transition-colors">Tập Tư Duy Khả Thi</h3>
                            <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-normal text-justify">
                                Bản vẽ thiết kế luôn bám sát thực tế lập trình, đảm bảo khi bàn giao bản code thực tế sẽ giống 99% so với bản vẽ demo.
                            </p>
                        </div>

                        {/* Cam kết 3 */}
                        <div className="space-y-3 border-t border-neutral-200/60 pt-5 group">
                            <div className="w-6 h-6 rounded bg-orange-50 text-orange-600 font-bold flex items-center justify-center text-xs">↺</div>
                            <h3 className="text-base font-bold text-neutral-900 group-hover:text-[#ed792f] transition-colors">Chuyển Giao Toàn Bộ Source Design</h3>
                            <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-normal text-justify">
                                Bàn giao đầy đủ file gốc, bộ biểu tượng (icons), hình ảnh đã tối ưu hóa để doanh nghiệp chủ động sử dụng cho các mục đích marketing khác về sau.
                            </p>
                        </div>

                    </div>

                    <div className="pt-4 border-t border-neutral-200/40 flex justify-start">
                        <a
                            href="#lien-he"
                            className="inline-flex bg-[#ed792f] hover:bg-neutral-950 text-white font-medium text-xs px-6 py-3 rounded-lg transition-all duration-300 shadow-sm"
                        >
                            ĐĂNG KÝ NHẬN TƯ VẤN
                        </a>
                    </div>
                </div>
            </section>


            {/* ================= SECTION 4: MỘT SỐ DỰ ÁN TIÊU BIỂU ================= */}
            <section
                ref={section4Ref}
                className="bg-white py-20 border-t border-neutral-200/40 px-6"
            >
                <div className="max-w-6xl mx-auto">
                    <div className="mb-12 space-y-2">
                        <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
                            Một số dự án tiêu biểu
                        </h2>
                        <p className="text-xs sm:text-sm text-neutral-500 font-normal">Các sản phẩm thiết kế UI/UX thực chiến nâng tầm tỷ lệ chuyển đổi thương hiệu</p>
                    </div>

                    {/* Lưới dự án với card bo góc mềm mịn và shadow nhẹ */}
                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto transition-all duration-[1000ms] ease-out transform ${
                        section4Revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}>

                        {/* Dự án 1 */}
                        <div className="group rounded-xl overflow-hidden border border-neutral-200/60 shadow-sm bg-white flex flex-col justify-between">
                            <div className="overflow-hidden aspect-[16/10]">
                                <img
                                    src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=500&auto=format&fit=crop"
                                    alt="CMIC Media Flycam DJI Store Concept UI"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                                />
                            </div>
                            <div className="p-4 bg-white">
                                <h3 className="text-sm font-semibold text-neutral-900 group-hover:text-[#ed792f] transition-colors">Hệ thống thương mại điện tử - Flycam Store</h3>
                            </div>
                        </div>

                        {/* Dự án 2 */}
                        <div className="group rounded-xl overflow-hidden border border-neutral-200/60 shadow-sm bg-white flex flex-col justify-between">
                            <div className="overflow-hidden aspect-[16/10]">
                                <img
                                    src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=500&auto=format&fit=crop"
                                    alt="CMIC Studio Combo Livestream Platform UI"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                                />
                            </div>
                            <div className="p-4 bg-white">
                                <h3 className="text-sm font-semibold text-neutral-900 group-hover:text-[#ed792f] transition-colors">Landing page thiết bị công nghệ - Combo Livestream</h3>
                            </div>
                        </div>

                        {/* Dự án 3 */}
                        <div className="group rounded-xl overflow-hidden border border-neutral-200/60 shadow-sm bg-white flex flex-col justify-between">
                            <div className="overflow-hidden aspect-[16/10]">
                                <img
                                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500&auto=format&fit=crop"
                                    alt="E-Tech Smart Retail UX Design"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                                />
                            </div>
                            <div className="p-4 bg-white">
                                <h3 className="text-sm font-semibold text-neutral-900 group-hover:text-[#ed792f] transition-colors">Giao diện bán lẻ kỹ thuật số - E-Tech Retail</h3>
                            </div>
                        </div>

                        {/* Dự án 4 */}
                        <div className="group rounded-xl overflow-hidden border border-neutral-200/60 shadow-sm bg-white flex flex-col justify-between">
                            <div className="overflow-hidden aspect-[16/10]">
                                <img
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=500&auto=format&fit=crop"
                                    alt="Mona Smart Technology UX Concept"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                                />
                            </div>
                            <div className="p-4 bg-white">
                                <h3 className="text-sm font-semibold text-neutral-900 group-hover:text-[#ed792f] transition-colors">Hệ sinh thái thiết bị thông minh - Mona Smart</h3>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}