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

export default function CmicServicePage() {
    // Đăng ký các neo hiệu ứng cuộn chuột cho từng Section/Khối ảnh
    const [heroRef, heroRevealed] = useScrollReveal();
    const [section2Ref, section2Revealed] = useScrollReveal();
    const [section3Ref, section3Revealed] = useScrollReveal();

    return (
        <div className="bg-slate-50 text-slate-900 min-h-screen antialiased overflow-x-hidden font-sans scroll-smooth">

            {/* ================= SECTION 1: HERO SECTION (Đối chiếu image_588538.png) ================= */}
            <section
                ref={heroRef}
                className={`max-w-7xl mx-auto px-6 pt-16 pb-20 grid lg:grid-cols-12 gap-12 items-center transition-all duration-[1000ms] ease-out transform ${heroRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                    }`}
            >
                <div className="lg:col-span-7 space-y-6">
                    <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 text-orange-700 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
                        Dịch vụ lập trình &amp; phát triển
                    </div>

                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 leading-[1.15] tracking-tight">
                        Dịch Vụ Lập Trình &amp; Phát Triển<br />
                        <span className="text-orange-600">Website - Landing Page Phễu Chuyển Đổi</span>
                    </h1>

                    <div className="bg-[#fffcf9] border border-orange-100 rounded-3xl p-6 sm:p-8 shadow-md transition-all duration-300 hover:shadow-lg">
                        <p className="text-slate-700 leading-relaxed font-medium text-base sm:text-lg">
                            Trang web đóng vai trò là "bộ khung" kỹ thuật cho toàn bộ chiến dịch Marketing của bạn. <span className="text-orange-600 font-bold">CMIC MEDIA</span> chuyên sâu trong việc xây dựng các mô hình website doanh nghiệp, website bán hàng, giáo dục và Landing Page phục vụ chiến dịch tối ưu hóa chuyển đổi, giúp doanh nghiệp và cá nhân kinh doanh sở hữu nền tảng vận hành mượt mà, không lỗi hệ thống.
                        </p>
                    </div>
                </div>

                {/* Khu vực ảnh minh họa bên phải Hero có hiệu ứng bồng bềnh */}
                <div className="lg:col-span-5 relative flex justify-center animate-[float_4s_ease-in-out_infinite]">
                    <div className="absolute inset-0 bg-gradient-to-tr from-orange-300/20 to-indigo-300/20 rounded-full blur-3xl -z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
                        alt="CMIC Media Digital Marketing & Development Concept"
                        className="w-full max-w-md h-auto object-contain drop-shadow-2xl rounded-3xl transition-transform duration-500 hover:scale-105"
                    />
                </div>
            </section>


            {/* ================= SECTION 2: LOẠI HÌNH WEBSITE (Đối chiếu image_5887ff.png) ================= */}
            <section
                ref={section2Ref}
                className="bg-white py-20 border-t border-slate-100"
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                            CÁC LOẠI HÌNH WEBSITE CMIC MEDIA
                        </h2>
                        <span className="text-lg sm:text-2xl font-bold text-orange-600 block mt-2 uppercase tracking-wide">
                            Chuyên sâu khởi tạo
                        </span>
                    </div>

                    {/* Lưới 3 cột trồi lên mượt mà đồng bộ khi cuộn chuột tới */}
                    <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch transition-all duration-[1000ms] ease-out transform ${section2Revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                        }`}>

                        {/* Khối dịch vụ 1 */}
                        <div className="flex flex-col h-full group">
                            <div className="bg-orange-500 text-white p-8 rounded-3xl shadow-lg flex-1 flex flex-col justify-between transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-orange-500/30">
                                <div>
                                    <h3 className="text-xl font-bold border-b border-white/20 pb-4 mb-4 text-center tracking-wide">
                                        WEBSITE DOANH NGHIỆP
                                    </h3>
                                    <p className="text-sm sm:text-base leading-relaxed font-normal opacity-95">
                                        Khẳng định vị thế chuyên nghiệp, số hóa toàn bộ thông tin năng lực, tầm nhìn, sứ mệnh và dịch vụ của doanh nghiệp để làm việc với các đối tác lớn.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-6 rounded-2xl overflow-hidden border border-slate-200 shadow-md transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-xl">
                                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400&auto=format&fit=crop" alt="Website Doanh Nghiệp Mockup" className="w-full aspect-[4/3] object-cover" />
                            </div>
                        </div>

                        {/* Khối dịch vụ 2 */}
                        <div className="flex flex-col h-full group">
                            <div className="bg-orange-500 text-white p-8 rounded-3xl shadow-lg flex-1 flex flex-col justify-between transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-orange-500/30">
                                <div>
                                    <h3 className="text-xl font-bold border-b border-white/20 pb-4 mb-4 text-center tracking-wide">
                                        LANDING PAGE BÁN HÀNG/THU LEAD
                                    </h3>
                                    <p className="text-sm sm:text-base leading-relaxed font-normal opacity-95">
                                        Thiết kế cô đọng, tập trung vào duy nhất một sản phẩm hoặc chiến dịch cốt lõi, loại bỏ mọi yếu tố gây nhiễu để hướng người dùng đến hành vi duy nhất: Điền form đăng ký hoặc bấm mua hàng.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-6 rounded-2xl overflow-hidden border border-slate-200 shadow-md transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-xl">
                                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop" alt="Landing Page Mockup" className="w-full aspect-[4/3] object-cover" />
                            </div>
                        </div>

                        {/* Khối dịch vụ 3 */}
                        <div className="flex flex-col h-full group">
                            <div className="bg-orange-500 text-white p-8 rounded-3xl shadow-lg flex-1 flex flex-col justify-between transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-orange-500/30">
                                <div>
                                    <h3 className="text-xl font-bold border-b border-white/20 pb-4 mb-4 text-center tracking-wide">
                                        WEBSITE GIÁO DỤC
                                    </h3>
                                    <p className="text-sm sm:text-base leading-relaxed font-normal opacity-95">
                                        Đóng gói thương hiệu và hệ thống bài giảng trực tuyến cho Chuyên gia. Tích hợp công nghệ bảo mật cao cấp, chống quay trộm màn hình và tải lậu video để bảo vệ tuyệt đối bản quyền chất xám.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-6 rounded-2xl overflow-hidden border border-slate-200 shadow-md transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-xl">
                                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=400&auto=format&fit=crop" alt="Website Giáo Dục Mockup" className="w-full aspect-[4/3] object-cover" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* ================= SECTION 3: DỊCH VỤ ĐẶC BIỆT & CAM KẾT (Đối chiếu image_58883c.png / image_58885b.png) ================= */}
            <section
                ref={section3Ref}
                className="py-20 bg-slate-50 border-t border-slate-100"
            >
                <div className={`max-w-5xl mx-auto px-6 transition-all duration-[1000ms] ease-out transform ${section3Revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                    }`}>

                    {/* Header Khối Đặc Biệt */}
                    <div className="relative bg-stone-900 text-white text-center py-6 px-4 rounded-t-3xl border-b-4 border-orange-500 shadow-xl">
                        <div className="absolute -top-3.5 left-6 bg-red-600 text-white font-black text-[10px] tracking-widest px-3 py-1 rounded shadow-md uppercase transform -rotate-3 border border-red-500 animate-pulse">
                            RECOMMENDED
                        </div>
                        <h2 className="text-base sm:text-2xl font-bold uppercase tracking-wide">
                            Dịch vụ <span className="text-orange-500">Đặc Biệt</span> dành cho chủ doanh nghiệp muốn tối ưu ngân sách
                        </h2>
                    </div>

                    {/* Banner kho Template */}
                    <div className="bg-orange-500 text-white p-6 sm:p-10 rounded-b-3xl shadow-lg mb-12 text-center transition-all duration-500 hover:shadow-orange-500/20">
                        <h3 className="text-base sm:text-xl font-black uppercase mb-4 tracking-wider">
                            HỒI CHÍNH - KHO TEMPLATE ĐỘC QUYỀN TỐI ƯU SẴN (HEADING)
                        </h3>
                        <p className="text-sm sm:text-base leading-relaxed opacity-95 max-w-4xl mx-auto font-light">
                            Để hỗ trợ các startup và SME tối ưu chi phí, CMIC MEDIA cung cấp giải pháp xây dựng web dựa trên hệ thống template có sẵn được đội ngũ chúng tôi nghiên cứu, thiết kế chuẩn cấu trúc phễu và tối ưu hóa chuyển đổi theo từng ngành nghề. Phương án này giúp doanh nghiệp sở hữu website chuyên nghiệp với mức ngân sách tinh gọn và thời gian triển khai nhanh nhất.
                        </p>
                    </div>

                    {/* Lưới 4 cam kết kỹ thuật - Hoàn toàn không chứa icon rườm rà, hover nhấc nhẹ */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Cam kết 1 */}
                        <div className="bg-orange-500 text-white p-6 sm:p-8 rounded-3xl shadow-md flex flex-col justify-between items-center text-center transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl">
                            <div className="w-full">
                                <h4 className="text-base sm:text-lg font-bold uppercase tracking-wide mb-3">
                                    CLEAN CODE &amp; TỐC ĐỘ TẢI TRANG TỐI ĐA
                                </h4>
                                <div className="w-full border-t border-white/20 my-3" />
                                <div className="inline-flex items-center bg-white text-orange-600 font-extrabold px-5 py-1.5 rounded-full text-xs uppercase mb-4 shadow-sm">
                                    Chung tôi cam kết
                                </div>
                                <p className="text-xs sm:text-sm opacity-95 leading-relaxed font-light">
                                    Cho dù sử dụng template hay may đo riêng, chúng tôi đều tối ưu dung lượng hình ảnh, dọn dẹp mã nguồn để website đạt điểm số cao trên Google PageSpeed Insights.
                                </p>
                            </div>
                        </div>

                        {/* Cam kết 2 */}
                        <div className="bg-orange-500 text-white p-6 sm:p-8 rounded-3xl shadow-md flex flex-col justify-between items-center text-center transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl">
                            <div className="w-full">
                                <h4 className="text-base sm:text-lg font-bold uppercase tracking-wide mb-3">
                                    RESPONSIVE TOÀN DIỆN
                                </h4>
                                <div className="w-full border-t border-white/20 my-3" />
                                <div className="inline-flex items-center bg-white text-orange-600 font-extrabold px-5 py-1.5 rounded-full text-xs uppercase mb-4 shadow-sm">
                                    Chung tôi cam kết
                                </div>
                                <p className="text-xs sm:text-sm opacity-95 leading-relaxed font-light">
                                    Hiển thị hoàn hảo, không lệch bố cục trên mọi kích thước màn hình smartphone, tablet và máy tính.
                                </p>
                            </div>
                        </div>

                        {/* Cam kết 3 */}
                        <div className="bg-orange-500 text-white p-6 sm:p-8 rounded-3xl shadow-md flex flex-col justify-between items-center text-center transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl">
                            <div className="w-full">
                                <h4 className="text-base sm:text-lg font-bold uppercase tracking-wide mb-3">
                                    SẴN SÀNG TÍCH HỢP (INTEGRATION READY)
                                </h4>
                                <div className="w-full border-t border-white/20 my-3" />
                                <div className="inline-flex items-center bg-white text-orange-600 font-extrabold px-5 py-1.5 rounded-full text-xs uppercase mb-4 shadow-sm">
                                    Chung tôi cam kết
                                </div>
                                <p className="text-xs sm:text-sm opacity-95 leading-relaxed font-light">
                                    Dễ dàng kết nối API với các phần mềm quản lý kho hàng, POS, hệ thống CRM (HubSpot, GetResponse...) và các AI Agent tự động hóa.
                                </p>
                            </div>
                        </div>

                        {/* Cam kết 4 */}
                        <div className="bg-orange-500 text-white p-6 sm:p-8 rounded-3xl shadow-md flex flex-col justify-between items-center text-center transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl">
                            <div className="w-full">
                                <h4 className="text-base sm:text-lg font-bold uppercase tracking-wide mb-3">
                                    BẢO MẬT TUYỆT ĐỐI
                                </h4>
                                <div className="w-full border-t border-white/20 my-3" />
                                <div className="inline-flex items-center bg-white text-orange-600 font-extrabold px-5 py-1.5 rounded-full text-xs uppercase mb-4 shadow-sm">
                                    Chung tôi cam kết
                                </div>
                                <p className="text-xs sm:text-sm opacity-95 leading-relaxed font-light">
                                    Cài đặt chứng chỉ SSL, cấu hình hệ thống tường lửa cơ bản ngăn chặn các cuộc tấn công mã độc phá hoại tài sản số.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ================= BOTTOM ACTION POINT ================= */}
            <section id="lien-he" className="bg-stone-950 text-white py-14 text-center px-6">
                <div className="max-w-2xl mx-auto">
                    <h3 className="text-xl sm:text-2xl font-extrabold mb-4">
                        Sẵn sàng bứt phá doanh thu cùng hệ thống tài sản số?
                    </h3>
                    <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-3.5 rounded-full transition-colors duration-300 active:scale-95">
                        Nhận tư vấn chiến lược miễn phí
                    </button>
                </div>
            </section>

            {/* CSS Animation keyframes */}
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
            `}</style>

        </div>
    );
}