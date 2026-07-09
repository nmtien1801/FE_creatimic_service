import React, { useEffect, useRef, useState } from "react";

// Hook xử lý hiệu ứng trồi lên, mờ dần mượt mà khi cuộn chuột đến nơi
function useScrollReveal() {
    const [isRevealed, setIsRevealed] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsRevealed(true);
                    observer.unobserve(entry.target); // Chạy 1 lần duy nhất khi cuộn qua
                }
            },
            { threshold: 0.1 } // Kích hoạt khi 10% phần tử xuất hiện trên màn hình
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
    // Đăng ký các neo hiệu ứng cuộn chuột cho từng Section
    const [heroRef, heroRevealed] = useScrollReveal();
    const [section2Ref, section2Revealed] = useScrollReveal();
    const [section3Ref, section3Revealed] = useScrollReveal();
    const [section4Ref, section4Revealed] = useScrollReveal();

    return (
        <div className="bg-slate-50 text-slate-900 min-h-screen antialiased overflow-x-hidden font-sans scroll-smooth">

            {/* ================= SECTION 1: HERO SECTION (Đối chiếu image_628c87.png) ================= */}
            <section
                ref={heroRef}
                className={`max-w-7xl mx-auto px-6 pt-16 pb-20 grid lg:grid-cols-12 gap-12 items-center transition-all duration-[1000ms] ease-out transform ${heroRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                    }`}
            >
                <div className="lg:col-span-7 space-y-6">
                    <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 text-orange-700 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
                        Dịch vụ thiết kế UI/UX
                    </div>

                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 leading-[1.15] tracking-tight">
                        WEBSITE ĐỘC BẢN –<br />
                        <span className="text-orange-600">CHẠM THỊ GIÁC, KHÓA NIỀM TIN</span>
                    </h1>

                    <div className="bg-[#fffcf9] border border-orange-100 rounded-3xl p-6 sm:p-8 shadow-md transition-all duration-300 hover:shadow-lg">
                        <p className="text-slate-700 leading-relaxed font-medium text-base sm:text-lg">
                            Trước khi đọc nội dung, khách hàng "cảm nhận" doanh nghiệp của bạn thông qua phần nhìn. CMIC MEDIA mang đến dịch vụ thiết kế giao diện UI/UX theo phong cách tối giản, chuyên nghiệp, hiện đại, cá nhân hóa theo nhận diện thương hiệu riêng.
                        </p>
                    </div>

                    <div className="pt-2">
                        <a
                            href="#lien-he"
                            className="inline-flex items-center bg-slate-900 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:-translate-y-1 active:scale-95"
                        >
                            Khám phá giải pháp ngay
                        </a>
                    </div>
                </div>

                {/* Khu vực ảnh minh họa UI/UX bên phải Hero có hiệu ứng bồng bềnh */}
                <div className="lg:col-span-5 relative flex justify-center animate-[float_4s_ease-in-out_infinite]">
                    <div className="absolute inset-0 bg-gradient-to-tr from-orange-300/20 to-purple-300/20 rounded-full blur-3xl -z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1541462608141-ad4979e408c9?q=80&w=600&auto=format&fit=crop"
                        alt="CMIC Media UI UX Design Concept Mockup"
                        className="w-full max-w-md h-auto object-contain drop-shadow-2xl rounded-3xl transition-transform duration-500 hover:scale-105"
                    />
                </div>
            </section>


            {/* ================= SECTION 2: TẦM QUAN TRỌNG CỦA THIẾT KẾ UI/UX (Đối chiếu image_628ca5.png) ================= */}
            <section
                ref={section2Ref}
                className="bg-white py-20 border-t border-slate-100"
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                            TẦM QUAN TRỌNG CỦA
                        </h2>
                        <span className="text-lg sm:text-2xl font-bold text-orange-600 block mt-2 uppercase tracking-wide">
                            Thiết kế UI/UX thực chiến
                        </span>
                    </div>

                    {/* Layout so sánh song song 2 khối UI và UX trồi lên mượt mà từ dưới lên */}
                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto transition-all duration-[1000ms] ease-out transform ${section2Revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                        }`}>

                        {/* Khối UI */}
                        <div className="bg-orange-500 text-white p-8 sm:p-10 rounded-3xl shadow-lg flex flex-col justify-between transition-all duration-500 transform hover:-translate-y-2 hover:shadow-orange-500/30">
                            <div>
                                <div className="border-b border-white/20 pb-4 mb-6">
                                    <span className="text-xs bg-stone-900 text-white font-bold px-3 py-1 rounded-md tracking-wider uppercase inline-block mb-3">UI Layer</span>
                                    <h3 className="text-xl sm:text-2xl font-black tracking-wide">
                                        UI (USER INTERFACE - GIAO DIỆN NGƯỜI DÙNG)
                                    </h3>
                                </div>
                                <p className="text-sm sm:text-base leading-relaxed font-normal opacity-95">
                                    Là sự kết hợp hài hòa giữa màu sắc, font chữ, hình ảnh và khoảng trắng. CMIC tạo ra những visual mang tính "Modern Minimalist" - Tập trung vào sự tinh gọn, thiết kế tối giản, mang phong cách hiện đại, có chiều sâu và hướng tới trải nghiệm người dùng.
                                </p>
                            </div>
                        </div>

                        {/* Khối UX */}
                        <div className="bg-orange-500 text-white p-8 sm:p-10 rounded-3xl shadow-lg flex flex-col justify-between transition-all duration-500 transform hover:-translate-y-2 hover:shadow-orange-500/30">
                            <div>
                                <div className="border-b border-white/20 pb-4 mb-6">
                                    <span className="text-xs bg-stone-900 text-white font-bold px-3 py-1 rounded-md tracking-wider uppercase inline-block mb-3">UX Layer</span>
                                    <h3 className="text-xl sm:text-2xl font-black tracking-wide">
                                        UX (USER EXPERIENCE - TRẢI NGHIỆM NGƯỜI DÙNG)
                                    </h3>
                                </div>
                                <p className="text-sm sm:text-base leading-relaxed font-normal opacity-95">
                                    Là cách thức người dùng tương tác với website. Chúng tôi sắp xếp các khối nội dung theo logic tâm lý hành vi: Nỗi đau nằm ở đâu? Giải pháp nằm ở đâu? Tại sao họ phải tin bạn? Nút bấm hành động nằm ở vị trí nào để ngón tay dễ chạm vào nhất? Tất cả đều được tính toán bằng dữ liệu nghiên cứu.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* ================= SECTION 3: CAM KẾT THIẾT KẾ (Đối chiếu image_628cc5.png) ================= */}
            <section
                ref={section3Ref}
                className="py-20 bg-slate-50 border-t border-slate-100"
            >
                <div className={`max-w-6xl mx-auto px-6 transition-all duration-[1000ms] ease-out transform ${section3Revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                    }`}>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                            CAM KẾT THIẾT KẾ <span className="text-orange-600">TỪ CMIC MEDIA</span>
                        </h2>
                    </div>

                    {/* 3 Trọng tâm cam kết sạch sẽ, hiệu ứng so le nhẹ nhàng */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-16">

                        {/* Cam kết 1 */}
                        <div className="space-y-4 p-6 rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                            <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 font-bold flex items-center justify-center mx-auto text-xl">✕</div>
                            <h3 className="text-lg font-bold text-slate-900 tracking-wide uppercase">Không Copy Template</h3>
                            <p className="text-sm text-slate-600 leading-relaxed font-light">
                                Mỗi dự án là một bản thiết kế độc bản dựa trên Brand Guidelines của khách hàng.
                            </p>
                        </div>

                        {/* Cam kết 2 */}
                        <div className="space-y-4 p-6 rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                            <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 font-bold flex items-center justify-center mx-auto text-xl">✓</div>
                            <h3 className="text-lg font-bold text-slate-900 tracking-wide uppercase">Tập Tư Duy Khả Thi</h3>
                            <p className="text-sm text-slate-600 leading-relaxed font-light">
                                Bản vẽ thiết kế luôn bám sát thực tế lập trình, đảm bảo khi bàn giao bản code thực tế sẽ giống 99% so với bản vẽ demo.
                            </p>
                        </div>

                        {/* Cam kết 3 */}
                        <div className="space-y-4 p-6 rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                            <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-600 font-bold flex items-center justify-center mx-auto text-xl">↺</div>
                            <h3 className="text-lg font-bold text-slate-900 tracking-wide uppercase">Chuyển Giao Toàn Bộ Source Design</h3>
                            <p className="text-sm text-slate-600 leading-relaxed font-light">
                                Bàn giao đầy đủ file gốc, bộ biểu tượng (icons), hình ảnh đã tối ưu hóa để doanh nghiệp chủ động sử dụng cho các mục đích marketing khác về sau.
                            </p>
                        </div>

                    </div>

                    <div className="text-center">
                        <a
                            href="#lien-he"
                            className="inline-flex items-center gap-3 bg-[#f27830] hover:bg-orange-600 text-white font-extrabold px-10 py-4.5 rounded-full text-base sm:text-lg shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
                        >
                            ĐĂNG KÝ NHẬN TƯ VẤN
                        </a>
                    </div>
                </div>
            </section>


            {/* ================= SECTION 4: MỘT SỐ DỰ ÁN TIÊU BIỂU (Đối chiếu image_628ce6.png) ================= */}
            <section
                ref={section4Ref}
                className="bg-white py-20 border-t border-slate-100"
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight uppercase">
                            Một số dự án tiêu biểu
                        </h2>
                        <p className="text-slate-500 text-sm mt-2">Các sản phẩm thiết kế UI/UX thực chiến nâng tầm tỷ lệ chuyển đổi thương hiệu</p>
                    </div>

                    {/* Lưới các dự án tiêu biểu trồi lên đồng đều */}
                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto transition-all duration-[1000ms] ease-out transform ${section4Revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                        }`}>

                        {/* Dự án 1 */}
                        <div className="group rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                            <div className="overflow-hidden aspect-[16/10]">
                                <img
                                    src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=500&auto=format&fit=crop"
                                    alt="CMIC Media Flycam DJI Store Concept UI"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-5 border-t border-slate-100">
                                <h3 className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors">Hệ thống thương mại điện tử - Flycam Store</h3>
                            </div>
                        </div>

                        {/* Dự án 2 */}
                        <div className="group rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                            <div className="overflow-hidden aspect-[16/10]">
                                <img
                                    src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=500&auto=format&fit=crop"
                                    alt="CMIC Studio Combo Livestream Platform UI"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-5 border-t border-slate-100">
                                <h3 className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors">Landing page thiết bị công nghệ - Combo Livestream</h3>
                            </div>
                        </div>

                        {/* Dự án 3 */}
                        <div className="group rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                            <div className="overflow-hidden aspect-[16/10]">
                                <img
                                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500&auto=format&fit=crop"
                                    alt="E-Tech Smart Retail UX Design"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-5 border-t border-slate-100">
                                <h3 className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors">Giao diện bán lẻ kỹ thuật số - E-Tech Retail</h3>
                            </div>
                        </div>

                        {/* Dự án 4 */}
                        <div className="group rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                            <div className="overflow-hidden aspect-[16/10]">
                                <img
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=500&auto=format&fit=crop"
                                    alt="Mona Smart Technology UX Concept"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-5 border-t border-slate-100">
                                <h3 className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors">Hệ sinh thái thiết bị thông minh - Mona Smart</h3>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ================= BOTTOM ACTION POINT ================= */}
            <section id="lien-he" className="bg-stone-950 text-white py-14 text-center px-6">
                <div className="max-w-2xl mx-auto">
                    <h3 className="text-xl sm:text-2xl font-extrabold mb-4">
                        Kiến tạo giao diện độc quyền cho thương hiệu của bạn?
                    </h3>
                    <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-3.5 rounded-full transition-colors duration-300 active:scale-95">
                        Liên hệ tư vấn cùng Designer chuyên nghiệp
                    </button>
                </div>
            </section>

            {/* Keyframes cố định dành cho hiệu ứng động */}
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
            `}</style>

        </div>
    );
}