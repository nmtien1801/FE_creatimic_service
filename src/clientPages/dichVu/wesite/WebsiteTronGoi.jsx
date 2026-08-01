import React, { useState } from 'react';
// Import component CustomerImageBorder đã tách và sửa lỗi
import CustomerImageBorder from '../../../utils/CustomerImageBorder';

// ========================================================
// SUB-COMPONENTS: CÁC SESSION ĐƯỢC CẮT BỚT KHOẢNG TRẮNG THỪA
// ========================================================

const bgSession3 = "/dichvu.tronGoi/bgSs34.png";
const bgSession5 = "/dichvu.tronGoi/bgSs5.png";
const bgTitle3 = "/dichvu.tronGoi/bg3Titile.png";

function HeroSection() {
    return (
        <section className="relative w-full pt-16 pb-20 lg:pt-24 lg:pb-28 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center z-10">
            <div className="absolute top-[-10%] left-[-5%] w-[300px] h-[300px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="lg:col-span-5 space-y-6 text-left relative z-10">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-xs font-bold tracking-wider text-orange-600 uppercase shadow-xs">
                    🚀 DỊCH VỤ THIẾT KẾ & XÂY DỰNG
                </span>
                <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight leading-[1.1]">
                    HỆ THỐNG WEBSITE <br />
                    <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent uppercase">
                        Landing Page Toàn Diện
                    </span>
                </h1>
                <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed max-w-md">
                    Kiến tạo các lớp trải nghiệm sâu sắc từ cấu trúc UI/UX độc bản, tối ưu hiệu năng tốc độ đến hạ tầng tracking chuyển đổi cho doanh nghiệp SME.
                </p>
                <div className="pt-2">
                    <button className="inline-flex items-center gap-3 bg-slate-950 hover:bg-orange-600 text-white font-bold text-sm px-9 py-4 rounded-xl shadow-lg transition-all uppercase tracking-wider">
                        Đăng ký nhận tư vấn
                    </button>
                </div>
            </div>

            <div className="lg:col-span-7 relative w-full aspect-[16/9] flex items-center justify-center group z-10">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/15 to-amber-500/5 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-all duration-700" />
                <div className="absolute inset-0 rounded-2xl p-2.5 bg-white border border-slate-200 shadow-xl overflow-hidden z-20 transition-transform duration-500 group-hover:-translate-y-1">
                    <div className="w-full h-full rounded-xl bg-slate-950 overflow-hidden relative">
                        <iframe
                            className="w-full h-full absolute inset-0 z-10"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&mute=1&controls=1"
                            title="CMIC Media Dịch vụ Website"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function UnifiedProblemsSection({ webProblems, bgImageUrl }) {
    return (
        <section className="relative w-full py-16 md:py-24 px-6 max-w-7xl mx-auto z-10 bg-white">
            <span className="absolute right-[-10%] top-[10%] w-[300px] h-[300px] bg-slate-100 rounded-full opacity-40 pointer-events-none blur-3xl z-0" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
                {/* CỘT TRÁI: HÌNH ẢNH MINH HỌA (Ảnh không viền, hiển thị nguyên vẹn) */}
                <div className="lg:col-span-5 flex items-center justify-center lg:sticky lg:top-8 self-start">
                    <div className="relative w-full max-w-md h-full min-h-[320px] max-h-[480px] flex items-center justify-center p-2 group">
                        <img
                            src="/dichvu.tronGoi/img1.png"
                            alt="Thực trạng doanh nghiệp"
                            className="w-full h-full max-h-[460px] object-contain transition-transform duration-500 group-hover:scale-102"
                        />
                    </div>
                </div>

                {/* CỘT PHẢI: TIÊU ĐỀ + DANH SÁCH VẤN ĐỀ */}
                <div className="lg:col-span-7 flex flex-col space-y-8">
                    {/* Phần tiêu đề */}
                    <div className="space-y-4 text-left">
                        <h2 className="text-3xl sm:text-4xl font-black uppercase text-slate-900 tracking-tight leading-tight">
                            BẠN CÓ ĐANG GẶP PHẢI <br />
                            <span className="text-orange-600">VẤN ĐỀ</span> SAU?
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed max-w-xl">
                            Đa số các doanh nghiệp vừa và nhỏ (SME) hiện nay đều sở hữu trang web. Tuy nhiên, có đến hơn 85% trang web đang rơi vào trạng thái &ldquo;vùng đất chết&rdquo; vì vướng phải 4 điểm nghẽn nghiêm trọng cốt lõi.
                        </p>
                    </div>

                    {/* Danh sách thẻ bài toán */}
                    <div className="flex flex-col space-y-4">
                        {webProblems.map((prob) => (
                            <div
                                key={prob.id}
                                className="w-full bg-[#FFFBF7] border border-orange-500/20 rounded-xl overflow-hidden shadow-xs flex items-stretch min-h-[112px] transition-all duration-300 hover:shadow-md hover:border-orange-400 hover:-translate-y-0.5 group"
                            >
                                {/* Số thứ tự */}
                                <div className="bg-orange-500 text-white w-16 sm:w-20 flex items-center justify-center font-black text-3xl flex-shrink-0 select-none tracking-tighter">
                                    {prob.id}
                                </div>

                                {/* Content */}
                                <div className="flex-1 p-4 sm:p-5 text-left flex flex-col justify-center space-y-2.5">
                                    <h3 className="text-sm sm:text-base font-black text-slate-950 tracking-wide uppercase leading-snug">
                                        {prob.title}
                                    </h3>
                                    {prob.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-2">
                                            {prob.tags.map((tag, idx) => (
                                                <div key={idx} className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-slate-800 bg-white/90 px-3 py-1 rounded-md border border-orange-500/15 shadow-2xs">
                                                    <span className="w-4 h-4 rounded-full bg-red-600 text-white flex items-center justify-center font-black text-[9px] flex-shrink-0">
                                                        ✕
                                                    </span>
                                                    <span className="tracking-wide">{tag}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Thumbnail ảnh góc phải (Đã bỏ viền, bóng và nền trắng) */}
                                <div className="w-28 sm:w-40 overflow-hidden p-2.5 flex-shrink-0">
                                    <img
                                        src={prob.imgUrl || bgImageUrl}
                                        alt={prob.title}
                                        className="w-full h-full object-cover rounded-2xl transition-transform duration-700 ease-out transform group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function PentagonSolutionTitle() {
    return (
        <section className="relative w-full flex flex-col items-center">
            {/* Thay đổi py-6 thành py-10 để tăng chiều cao nền */}
            <div className="relative w-full py-20 md:py-24 overflow-hidden flex justify-center items-center">
                <div
                    className="absolute inset-0 w-screen left-1/2 -translate-x-1/2 pointer-events-none z-0 bg-no-repeat bg-center"
                    style={{
                        backgroundImage: `url(${bgTitle3})`,
                        backgroundSize: '100% 100%'
                    }}
                />

                <div className="relative z-10 bg-white border-y border-slate-900 px-10 py-3.5 shadow-xs">
                    <div className="absolute left-[-14px] top-[-1px] bottom-[-1px] w-3.5 bg-orange-500 transform skew-x-[20deg]" />
                    <div className="absolute right-[-14px] top-[-1px] bottom-[-1px] w-3.5 bg-orange-500 transform skew-x-[20deg]" />
                    <h2 className="text-lg sm:text-2xl font-black tracking-wider uppercase text-slate-900">
                        GIẢI PHÁP CHIẾN LƯỢC TẠI <span className="text-orange-600">CMIC MEDIA</span>
                    </h2>
                </div>
            </div>
        </section>
    );
}

function PentagonSolutionSection({ circularSteps, bgImageUrl }) {
    return (
        <section className="relative w-full px-6 py-12 md:py-16 flex flex-col items-center">
            {/* 2. KHỐI NỀN + HÌNH ẢNH THAY THẾ SƠ ĐỒ NGŨ GIÁC */}
            <div className="relative w-full overflow-hidden flex flex-col items-center">
                {/* Khối chứa hình ảnh sơ đồ thay thế */}
                <div className="relative z-10 w-full max-w-2xl px-4 flex justify-center items-center">
                    <img
                        src="/dichvu.tronGoi/img6.png" // Thay đường dẫn hình ảnh sơ đồ của bạn tại đây
                        alt="Giải pháp chiến lược CMIC Media"
                        className="w-full h-auto object-contain max-h-[500px] drop-shadow-md"
                    />
                </div>
            </div>

        </section>
    );
}

function TimelineFlowSection({ workflowSteps }) {
    const stagesWithRightTimeline = ["01", "03"];

    return (
        <section className="relative py-16 md:py-24 px-6 max-w-7xl mx-auto z-10">
            <div className="text-center mb-12 space-y-2 relative z-10">
                <span className="text-xs font-bold tracking-widest text-orange-600 uppercase block">— LUỒNG PHÁT TRIỂN DỰ ÁN —</span>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase">Quy Trình 5 Bước Vận Hành</h2>
            </div>

            <div className="relative w-full z-10 flex flex-col gap-4 md:gap-8">
                {workflowSteps.map((step, idx) => {
                    const stageNum = step.num || `0${idx + 1}`;
                    const showRightTimeline = stagesWithRightTimeline.includes(stageNum);
                    const isStage3 = idx === 2; // Kiểm tra nếu là Stage 3
                    const isStage4 = idx === 3; // Kiểm tra nếu là Stage 4

                    // Dynamic Layout theo từng Div
                    let layoutClass = "";
                    if (idx === 0 || idx === 2) {
                        layoutClass = "w-full md:w-[48%] md:mr-auto";
                    } else if (idx === 1) {
                        layoutClass = "w-full md:w-[48%] md:ml-[43%]";
                    } else if (idx === 3) {
                        layoutClass = "w-full md:w-[80%] md:ml-[10%]";
                    } else if (idx === 4) {
                        layoutClass = "w-full";
                    }

                    return (
                        <div key={idx} className="relative w-full flex flex-col md:flex-row items-center">

                            <div className={`${layoutClass} group/timeline relative flex flex-col text-left`}>

                                {/* --- BỐ CỤC STAGE 4 (CĂN TOP NỘI DUNG) --- */}
                                {isStage4 ? (
                                    /* items-start: Giúp nội dung căn từ Top thay vì ở giữa */
                                    <div className="w-full flex flex-col md:flex-row items-start gap-6 md:gap-12 relative">

                                        {/* 1. Ảnh nằm BÊN TRÁI */}
                                        <div className="w-full md:w-1/2 flex justify-end">
                                            <div className="relative p-1 overflow-hidden w-full">
                                                <img
                                                    src={step.imgUrl || step.image}
                                                    alt={step.title}
                                                    className="w-full h-auto max-h-72 object-cover rounded-xl block"
                                                />
                                            </div>
                                        </div>

                                        {/* 2. Đường SỌC NẾT ĐỨT NẰM GIỮA */}
                                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0 border-r-2 border-dashed border-slate-900 pointer-events-none">
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white border-3 border-slate-950 rounded-full z-20" />
                                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3.5 h-3.5 bg-white border-3 border-slate-950 rounded-full z-20" />
                                        </div>

                                        {/* 3. Nội dung (Title & Desc) nằm BÊN PHẢI (bắt đầu từ Top) */}
                                        <div className="w-full md:w-1/2 flex flex-col justify-start pl-0 md:pl-6 pt-1">
                                            <h3 className="text-lg md:text-2xl font-black text-slate-950 tracking-tight mb-3 uppercase group-hover/timeline:text-orange-600 transition-colors">
                                                {stageNum}. {step.title}
                                            </h3>
                                            <p className="text-slate-700 text-sm md:text-base font-normal leading-relaxed">
                                                {step.desc}
                                            </p>
                                        </div>

                                    </div>
                                ) : isStage3 ? (
                                    /* --- BỐ CỤC STAGE 3 (ẢNH TRÊN - VIỀN CHỈ BẰNG ẢNH - CONTENT DƯỚI) --- */
                                    <>
                                        {/* Container riêng cho Ảnh + Viền Timeline */}
                                        <div className="relative w-full flex justify-start mb-4">
                                            <img
                                                src={step.imgUrl || step.image}
                                                alt={step.title}
                                                className="max-w-full h-auto max-h-60 object-contain block"
                                            />

                                            {/* SỌC BÊN PHẢI - Giờ chỉ cao bằng đúng phần chứa ảnh này */}
                                            {showRightTimeline && (
                                                <div className="hidden md:block absolute -right-6 top-0 bottom-0 w-0 border-r-2 border-dashed border-slate-300 pointer-events-none">
                                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white border-3 border-slate-950 rounded-full z-20" />
                                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3.5 h-3.5 bg-white border-3 border-slate-950 rounded-full z-20" />
                                                </div>
                                            )}
                                        </div>

                                        {/* Title & Content (Nằm hoàn toàn bên dưới và ngoài phạm vi viền) */}
                                        <h3 className="text-base md:text-lg font-black text-slate-950 tracking-tight mb-2 uppercase group-hover/timeline:text-orange-600 transition-colors">
                                             {stageNum}. {step.title}
                                        </h3>
                                        <p className="text-slate-500 text-sm font-normal leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </>
                                ) : (
                                    /* --- BỐ CỤC MẶC ĐỊNH (01, 02, 05) --- */
                                    <>
                                        {/* Title & Desc */}
                                        <h3 className="text-base md:text-lg font-black text-slate-950 tracking-tight mb-2 uppercase group-hover/timeline:text-orange-600 transition-colors">
                                             {stageNum}. {step.title}
                                        </h3>
                                        <p className={`text-slate-500 text-sm font-normal leading-relaxed mb-4 `}>
                                            {step.desc}
                                        </p>

                                        {/* Image Wrapper */}
                                        <div className={`w-full flex relative ${idx === 4 ? 'justify-center' : 'justify-start'}`}>
                                            <img
                                                src={step.imgUrl || step.image}
                                                alt={step.title}
                                                className="max-w-full h-auto max-h-60 object-contain block"
                                            />
                                        </div>

                                        {/* SỌC BÊN PHẢI (Stage 01) */}
                                        {showRightTimeline && (
                                            <div className="hidden md:block absolute -right-6 top-1 bottom-1 w-0 border-r-2 border-dashed border-slate-300 pointer-events-none">
                                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white border-3 border-slate-950 rounded-full z-20" />
                                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3.5 h-3.5 bg-white border-3 border-slate-950 rounded-full z-20" />
                                            </div>
                                        )}
                                    </>
                                )}

                            </div>

                        </div>
                    );
                })}
            </div>
        </section>
    );
}

function ContactFormSection({ contactData, handleInputChange, handleFormSubmit }) {
    return (
        <section className="relative w-full py-16 md:py-24 px-6 bg-slate-50 border-t border-slate-200/80 z-10">
            <div
                className="absolute inset-0 w-screen left-1/2 -translate-x-1/2 pointer-events-none z-0 bg-no-repeat bg-center"
                style={{
                    backgroundImage: `url(${bgSession5})`,
                    backgroundSize: '100% 100%'
                }}
            />

            <div className="relative z-20 max-w-xl mx-auto w-full">
                <form onSubmit={handleFormSubmit} className="w-full bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-xl flex flex-col space-y-5">
                    <div className="text-center space-y-1.5 mb-1">
                        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight uppercase">LIÊN HỆ VỚI CHÚNG TÔI</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col space-y-1.5 text-left">
                            <label className="text-xs font-bold tracking-wider uppercase text-slate-500">Họ và tên *</label>
                            <input type="text" name="fullName" required value={contactData.fullName} onChange={handleInputChange} className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-orange-500 bg-slate-50/50 text-slate-900 transition-all placeholder:text-slate-400" placeholder="Nguyễn Văn A" />
                        </div>
                        <div className="flex flex-col space-y-1.5 text-left">
                            <label className="text-xs font-bold tracking-wider uppercase text-slate-500">Số điện thoại *</label>
                            <input type="tel" name="phone" required value={contactData.phone} onChange={handleInputChange} className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-orange-500 bg-slate-50/50 text-slate-900 transition-all placeholder:text-slate-400" placeholder="0901 234 567" />
                        </div>
                    </div>

                    <div className="flex flex-col space-y-1.5 text-left">
                        <label className="text-xs font-bold tracking-wider uppercase text-slate-500">Địa chỉ Email *</label>
                        <input type="email" name="email" required value={contactData.email} onChange={handleInputChange} className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-orange-500 bg-slate-50/50 text-slate-900 transition-all placeholder:text-slate-400" placeholder="name@company.com" />
                    </div>

                    <div className="flex flex-col space-y-1.5 text-left">
                        <label className="text-xs font-bold tracking-wider uppercase text-slate-500">Bạn cần CMIC MEDIA tư vấn gì? *</label>
                        <textarea name="consultRequest" required rows={3} value={contactData.consultRequest} onChange={handleInputChange} className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-orange-500 bg-slate-50/50 text-slate-900 transition-all resize-none placeholder:text-slate-400" placeholder="Nêu rõ bài toán cần giải quyết..." />
                    </div>

                    <div className="pt-2">
                        <button type="submit" className="w-full bg-slate-950 hover:bg-orange-600 text-white font-bold text-sm py-4 rounded-xl shadow-md transition-all uppercase tracking-widest">
                            Gửi thông tin ngay
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default function WebServicePage() {
    const bgImageUrl = "https://web.hn.ss.bfcplatform.vn/muadienmay/content/article2/3087889034-1620532650.jpg";

    const [contactData, setContactData] = useState({
        fullName: '',
        phone: '',
        email: '',
        consultRequest: '',
        marketingChannels: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setContactData(prev => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Dữ liệu liên hệ gửi đi:", contactData);
        alert("Gửi thông tin liên hệ thành công!");
    };

    const webProblems = [
        { id: "1", title: "GIAO DIỆN (UI)", tags: ["ĐẠI TRÀ", "LỖI THỜI"], imgUrl: "/dichvu.tronGoi/img2.png", metric: "BOUNCE RATE +70%" },
        { id: "2", title: "GIAO DIỆN (UX)", tags: ["THAO TÁC RƯỜM RÀ", "KHÔNG HỖ TRỢ CHUYỂN ĐỔI"], imgUrl: "/dichvu.tronGoi/img3.png", metric: "CONVERSION -45%" },
        { id: "3", title: "TỐC ĐỘ TẢI TRANG CHẬM", tags: ["LỖI HIỂN THỊ"], imgUrl: "/dichvu.tronGoi/img4.png", metric: "LOAD TIME > 5s" },
        { id: "4", title: "KHÔNG THIẾT LẬP HỆ THỐNG THEO DÕI & ĐO LƯỜNG", tags: [], imgUrl: "/dichvu.tronGoi/img5.png", metric: "LOST DATA 100%" }
    ];

    const circularSteps = [
        { label: "Nghiên cứu & Định hình cấu trúc (Sitemap)", cx: 50, cy: 45, lx: 50, ly: 12 },
        { label: "Thiết kế Wireframe & UI/UX (Visual Design)", cx: 78, cy: 62, lx: 85, ly: 48 },
        { label: "Lập trình & Tích hợp hệ thống (Development)", cx: 66, cy: 88, lx: 82, ly: 92 },
        { label: "Kiểm thử & Bàn giao (Testing & Handover)", cx: 34, cy: 88, lx: 18, ly: 92 },
        { label: "Giải pháp chăm sóc & Vận hành website toàn diện", cx: 22, cy: 62, lx: 15, ly: 48 },
    ];

    const workflowSteps = [
        { num: "01", title: "NGHIÊN CỨU VÀ ĐỊNH HÌNH SITEMAP", desc: "Khảo sát sản phẩm, dịch vụ và tệp khách hàng mục tiêu để lên sơ đồ các trang cần thiết.", imgUrl: "/dichvu.tronGoi/img7.png" },
        { num: "02", title: "THIẾT KẾ WIREFRAME & UI/UX (VISUAL DESIGN)", desc: "Phác thảo bố cục, lựa chọn màu sắc thương hiệu và thiết kế giao diện chi tiết cho từng màn hình thiết bị (Desktop, Mobile, Tablet).", imgUrl: "/dichvu.tronGoi/img8.png" },
        { num: "03", title: "LẬP TRÌNH & TÍCH HỢP HỆ THỐNG", desc: "Chuyển hóa bản thiết kế thành code, tối ưu tốc độ, cài đặt các công cụ tracking đo lường và bảo mật hệ thống.", imgUrl: "/dichvu.tronGoi/img9.png" },
        { num: "04", title: "KIỂM THỬ & BÀN GIAO", desc: "Chạy thử nghiệm trên đa trình duyệt, sửa lỗi, đào tạo nhân sự của khách hàng quản trị và chính thức nghiệm thu bàn giao.", imgUrl: "/dichvu.tronGoi/img10.png" },
        { num: "05", title: "GIẢI PHÁP CHĂM SÓC & VẬN HÀNH WEBSITE TOÀN DIỆN", desc: "", imgUrl: "/dichvu.tronGoi/img11.png" }
    ];

    return (
        <div className="w-full bg-white font-sans antialiased text-slate-600 selection:bg-orange-500 selection:text-white relative min-h-screen overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000001_1px,transparent_1px),linear-gradient(to_bottom,#00000001_1px,transparent_1px)] bg-[length:50px_50px] pointer-events-none z-0" />

            <HeroSection />
            <UnifiedProblemsSection webProblems={webProblems} bgImageUrl={bgImageUrl} />
            <PentagonSolutionTitle />

            {/* Container bao bọc cả PentagonSolutionSection & TimelineFlowSection dùng chung bgSession2 */}
            <div className="relative w-full overflow-hidden">
                <div
                    className="absolute inset-0 w-screen left-1/2 -translate-x-1/2 pointer-events-none z-0 scale-x-110"
                    style={{
                        backgroundImage: `url(${bgSession3})`,
                        backgroundPosition: 'center center',
                        backgroundSize: '100% 100%',
                        backgroundRepeat: 'no-repeat'
                    }}
                />
                <PentagonSolutionSection circularSteps={circularSteps} bgImageUrl={bgSession3} />
                <TimelineFlowSection workflowSteps={workflowSteps} bgImageUrl={bgImageUrl} />
            </div>

            <ContactFormSection
                contactData={contactData}
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
            />
        </div>
    );
}