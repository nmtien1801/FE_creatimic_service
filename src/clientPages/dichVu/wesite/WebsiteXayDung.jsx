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

export default function CmicServicePage() {
    const [heroRef, heroRevealed] = useScrollReveal();
    const [section2Ref, section2Revealed] = useScrollReveal();
    const [section3Ref, section3Revealed] = useScrollReveal();

    return (
        <div className="bg-[#faf8f6] text-neutral-800 min-h-screen antialiased overflow-x-hidden font-sans scroll-smooth">

            {/* ================= SECTION 1: HERO SECTION ================= */}
            <section
                ref={heroRef}
                className={`max-w-6xl mx-auto px-6 pt-20 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start transition-all duration-[1000ms] ease-out transform ${heroRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
            >
                <div className="lg:col-span-7 space-y-6">
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-[#ed792f]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ed792f]" />
                        Dịch vụ lập trình &amp; phát triển
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-neutral-900">
                        Dịch Vụ Lập Trình &amp; Phát Triển<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ed792f] to-[#ff8e42]">Website - Landing Page Phễu Chuyển Đổi</span>
                    </h1>

                    <div className="pt-2">
                        <p className="text-neutral-500 leading-relaxed text-sm sm:text-base text-justify">
                            Trang web đóng vai trò là "bộ khung" kỹ thuật cho toàn bộ chiến dịch Marketing của bạn. <span className="text-neutral-900 font-semibold">CMIC MEDIA</span> chuyên sâu trong việc xây dựng các mô hình website doanh nghiệp, website bán hàng, giáo dục và Landing Page phục vụ chiến dịch tối ưu hóa chuyển đổi, giúp doanh nghiệp và cá nhân kinh doanh sở hữu nền tảng vận hành mượt mà, không lỗi hệ thống.
                        </p>
                    </div>
                </div>

                {/* Khu vực ảnh minh họa bên phải */}
                <div className="lg:col-span-5 w-full lg:mt-24">
                    <div className="relative w-full aspect-video bg-neutral-100 rounded-xl overflow-hidden shadow-md border border-neutral-200/60">
                        <img
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
                            alt="CMIC Media Digital Marketing & Development Concept"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>


            {/* ================= SECTION 2: LOẠI HÌNH WEBSITE ================= */}
            <section
                ref={section2Ref}
                className="bg-white py-20 border-y border-neutral-200/40 px-6"
            >
                <div className="max-w-6xl mx-auto">
                    <div className="mb-12 space-y-2">
                        <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
                            CÁC LOẠI HÌNH WEBSITE CMIC MEDIA
                        </h2>
                        <p className="text-xs sm:text-sm text-neutral-500 font-normal tracking-wide uppercase">
                            Chuyên sâu khởi tạo
                        </p>
                    </div>

                    {/* Lưới 3 cột tinh gọn không hộp đặc */}
                    <div className={`grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch transition-all duration-[1000ms] ease-out transform ${section2Revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}>

                        {/* Khối dịch vụ 1 */}
                        <div className="space-y-4 border-t border-neutral-200/60 pt-5 flex flex-col justify-between group">
                            <div className="space-y-3">
                                <h3 className="text-base font-bold text-neutral-900 group-hover:text-[#ed792f] transition-colors">
                                    WEBSITE DOANH NGHIỆP
                                </h3>
                                <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-normal text-justify">
                                    Khẳng định vị thế chuyên nghiệp, số hóa toàn bộ thông tin năng lực, tầm nhìn, sứ mệnh và dịch vụ của doanh nghiệp để làm việc với các đối tác lớn.
                                </p>
                            </div>
                            <div className="mt-4 rounded-xl overflow-hidden border border-neutral-200/60 shadow-sm">
                                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400&auto=format&fit=crop" alt="Website Doanh Nghiệp Mockup" className="w-full aspect-[4/3] object-cover" />
                            </div>
                        </div>

                        {/* Khối dịch vụ 2 */}
                        <div className="space-y-4 border-t border-neutral-200/60 pt-5 flex flex-col justify-between group">
                            <div className="space-y-3">
                                <h3 className="text-base font-bold text-neutral-900 group-hover:text-[#ed792f] transition-colors">
                                    LANDING PAGE BÁN HÀNG/THU LEAD
                                </h3>
                                <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-normal text-justify">
                                    Thiết kế cô đọng, tập trung vào duy nhất một sản phẩm hoặc chiến dịch cốt lõi, loại bỏ mọi yếu tố gây nhiễu để hướng người dùng đến hành vi duy nhất: Điền form đăng ký hoặc bấm mua hàng.
                                </p>
                            </div>
                            <div className="mt-4 rounded-xl overflow-hidden border border-neutral-200/60 shadow-sm">
                                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop" alt="Landing Page Mockup" className="w-full aspect-[4/3] object-cover" />
                            </div>
                        </div>

                        {/* Khối dịch vụ 3 */}
                        <div className="space-y-4 border-t border-neutral-200/60 pt-5 flex flex-col justify-between group">
                            <div className="space-y-3">
                                <h3 className="text-base font-bold text-neutral-900 group-hover:text-[#ed792f] transition-colors">
                                    WEBSITE GIÁO DỤC
                                </h3>
                                <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-normal text-justify">
                                    Đóng gói thương hiệu và hệ thống bài giảng trực tuyến cho Chuyên gia. Tích hợp công nghệ bảo mật cao cấp, chống quay trộm màn hình và tải lậu video để bảo vệ tuyệt đối bản quyền chất xám.
                                </p>
                            </div>
                            <div className="mt-4 rounded-xl overflow-hidden border border-neutral-200/60 shadow-sm">
                                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=400&auto=format&fit=crop" alt="Website Giáo Dục Mockup" className="w-full aspect-[4/3] object-cover" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* ================= SECTION 3: DỊCH VỤ ĐẶC BIỆT & CAM KẾT ================= */}
            <section
                ref={section3Ref}
                className="py-20 max-w-6xl mx-auto px-6"
            >
                <div className={`transition-all duration-[1000ms] ease-out transform ${section3Revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}>

                    {/* Khối Đặc Biệt tinh giản */}
                    <div className="border border-neutral-200/60 rounded-2xl bg-white p-6 sm:p-10 shadow-sm mb-16 space-y-4 relative overflow-hidden">
                        <div className="absolute top-0 left-0 bg-[#ed792f] text-white font-mono text-[9px] tracking-widest px-3 py-1 uppercase rounded-br">
                            RECOMMENDED
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 uppercase">
                            Dịch vụ <span className="text-[#ed792f]">Đặc Biệt</span> dành cho chủ doanh nghiệp muốn tối ưu ngân sách
                        </h2>
                        <h3 className="text-xs sm:text-sm font-bold text-neutral-400 uppercase tracking-wider">
                            HỒI CHÍNH - KHO TEMPLATE ĐỘC QUYỀN TỐI ƯU SẴN (HEADING)
                        </h3>
                        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-normal text-justify">
                            Để hỗ trợ các startup và SME tối ưu chi phí, CMIC MEDIA cung cấp giải pháp xây dựng web dựa trên hệ thống template có sẵn được đội ngũ chúng tôi nghiên cứu, thiết kế chuẩn cấu trúc phễu và tối ưu hóa chuyển đổi theo từng ngành nghề. Phương án này giúp doanh nghiệp sở hữu website chuyên nghiệp với mức ngân sách tinh gọn và thời gian triển khai nhanh nhất.
                        </p>
                    </div>

                    {/* Lưới 4 cam kết kỹ thuật thoáng đạt */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 border-t border-neutral-200/60 pt-10">

                        {/* Cam kết 1 */}
                        <div className="space-y-2 group">
                            <h4 className="text-base font-bold text-neutral-900 group-hover:text-[#ed792f] transition-colors">
                                CLEAN CODE &amp; TỐC ĐỘ TẢI TRANG TỐI ĐA
                            </h4>
                            <div className="inline-flex text-[#ed792f] font-semibold text-[11px] uppercase tracking-wider">
                                Chúng tôi cam kết /
                            </div>
                            <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-normal text-justify">
                                Cho dù sử dụng template hay may đo riêng, chúng tôi đều tối ưu dung lượng hình ảnh, dọn dẹp mã nguồn để website đạt điểm số cao trên Google PageSpeed Insights.
                            </p>
                        </div>

                        {/* Cam kết 2 */}
                        <div className="space-y-2 group">
                            <h4 className="text-base font-bold text-neutral-900 group-hover:text-[#ed792f] transition-colors">
                                RESPONSIVE TOÀN DIỆN
                            </h4>
                            <div className="inline-flex text-[#ed792f] font-semibold text-[11px] uppercase tracking-wider">
                                Chúng tôi cam kết /
                            </div>
                            <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-normal text-justify">
                                Hiển thị hoàn hảo, không lệch bố cục trên mọi kích thước màn hình smartphone, tablet và máy tính.
                            </p>
                        </div>

                        {/* Cam kết 3 */}
                        <div className="space-y-2 group">
                            <h4 className="text-base font-bold text-neutral-900 group-hover:text-[#ed792f] transition-colors">
                                SẴN SÀNG TÍCH HỢP (INTEGRATION READY)
                            </h4>
                            <div className="inline-flex text-[#ed792f] font-semibold text-[11px] uppercase tracking-wider">
                                Chúng tôi cam kết /
                            </div>
                            <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-normal text-justify">
                                Dễ dàng kết nối API với các phần mềm quản lý kho hàng, POS, hệ thống CRM (HubSpot, GetResponse...) và các AI Agent tự động hóa.
                            </p>
                        </div>

                        {/* Cam kết 4 */}
                        <div className="space-y-2 group">
                            <h4 className="text-base font-bold text-neutral-900 group-hover:text-[#ed792f] transition-colors">
                                BẢO MẬT TUYỆT ĐỐI
                            </h4>
                            <div className="inline-flex text-[#ed792f] font-semibold text-[11px] uppercase tracking-wider">
                                Chúng tôi cam kết /
                            </div>
                            <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-normal text-justify">
                                Cài đặt chứng chỉ SSL, cấu hình hệ thống tường lửa cơ bản ngăn chặn các cuộc tấn công mã độc phá hoại tài sản số.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}