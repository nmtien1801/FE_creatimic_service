import React, { useState } from 'react';
import CustomerImageBorder from '../../../utils/CustomerImageBorder';

// ========================================================
// ASSETS & CONFIG
// ========================================================
const bgSession3 = "/dichvu.tronGoi/bgSs34.png";
const bgSession5 = "/dichvu.tronGoi/bgSs5.png";
const bgTitle3 = "/dichvu.tronGoi/bg3Titile.png";

// ========================================================
// SUB-COMPONENTS
// ========================================================

// 1. HERO SECTION
function HeroSection() {
    return (
        <section className="relative w-full pt-10 pb-12 lg:pt-20 lg:pb-24 px-4 sm:px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center z-10">
            <div className="absolute top-[-10%] left-[-5%] w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="lg:col-span-5 space-y-4 sm:space-y-6 text-center lg:text-left relative z-10">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-[11px] sm:text-xs font-bold tracking-wider text-orange-600 uppercase shadow-xs">
                    🚀 DỊCH VỤ THIẾT KẾ & XÂY DỰNG
                </span>
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                    HỆ THỐNG WEBSITE <br className="hidden sm:block" />
                    <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent uppercase">
                        Landing Page Toàn Diện
                    </span>
                </h1>
                <p className="text-xs sm:text-base text-slate-500 font-medium leading-relaxed max-w-md mx-auto lg:mx-0">
                    Kiến tạo các lớp trải nghiệm sâu sắc từ cấu trúc UI/UX độc bản, tối ưu hiệu năng tốc độ đến hạ tầng tracking chuyển đổi cho doanh nghiệp SME.
                </p>
                <div className="pt-2">
                    <button className="inline-flex items-center gap-3 bg-slate-950 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm px-7 sm:px-9 py-3.5 sm:py-4 rounded-xl shadow-lg transition-all uppercase tracking-wider">
                        Đăng ký nhận tư vấn
                    </button>
                </div>
            </div>

            <div className="lg:col-span-7 relative w-full aspect-[16/9] max-w-2xl mx-auto flex items-center justify-center group z-10">
                <div className="absolute inset-0 p-1.5 sm:p-2.5 z-20 transition-transform duration-500 group-hover:-translate-y-1">
                    <div className="w-full h-full bg-slate-950 overflow-hidden relative">
                        <iframe
                            className="w-full h-full absolute inset-0 z-10"
                            src="https://www.youtube.com/embed/4KNRA9_LgLI"
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

// 2. UNIFIED PROBLEMS SECTION
function UnifiedProblemsSection({ webProblems, bgImageUrl }) {
    return (
        <section className="relative w-full py-12 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto z-10 bg-white">
            <span className="absolute right-[-10%] top-[10%] w-[300px] h-[300px] bg-slate-100 rounded-full opacity-40 pointer-events-none blur-3xl z-0" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
                {/* CỘT TRÁI: HÌNH ẢNH MINH HỌA */}
                <div className="lg:col-span-5 flex items-center justify-center lg:sticky lg:top-8 self-start">
                    <div className="relative w-full max-w-sm sm:max-w-md h-auto flex items-center justify-center p-2 group">
                        <img
                            src="/dichvu.tronGoi/img1.png"
                            alt="Thực trạng doanh nghiệp"
                            className="w-full h-auto max-h-[380px] sm:max-h-[460px] object-contain transition-transform duration-500 group-hover:scale-102"
                        />
                    </div>
                </div>

                {/* CỘT PHẢI: TIÊU ĐỀ + DANH SÁCH VẤN ĐỀ */}
                <div className="lg:col-span-7 flex flex-col space-y-6 sm:space-y-8">
                    <div className="space-y-2 sm:space-y-4 text-center lg:text-left">
                        <h2 className="text-xl sm:text-3xl font-black uppercase text-slate-900 tracking-tight leading-tight">
                            BẠN CÓ ĐANG GẶP PHẢI <br />
                            <span className="text-orange-600">VẤN ĐỀ</span> SAU?
                        </h2>
                        <p className="text-slate-600 text-xs sm:text-base font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Đa số các doanh nghiệp vừa và nhỏ (SME) hiện nay đều sở hữu trang web. Tuy nhiên, có đến hơn 85% trang web đang rơi vào trạng thái &ldquo;vùng đất chết&rdquo; vì vướng phải 4 điểm nghẽn nghiêm trọng cốt lõi.
                        </p>
                    </div>

                    {/* Danh sách thẻ bài toán */}
                    <div className="flex flex-col space-y-3 sm:space-y-4">
                        {webProblems.map((prob) => (
                            <div
                                key={prob.id}
                                className="w-full bg-[#FFFBF7] border border-orange-500/20 rounded-xl overflow-hidden shadow-xs flex items-stretch min-h-[96px] sm:min-h-[112px] transition-all duration-300 hover:shadow-md hover:border-orange-400 hover:-translate-y-0.5 group"
                            >
                                {/* Số thứ tự */}
                                <div className="bg-orange-500 text-white w-12 sm:w-16 lg:w-20 flex items-center justify-center font-black text-xl sm:text-3xl flex-shrink-0 select-none tracking-tighter">
                                    {prob.id}
                                </div>

                                {/* Content */}
                                <div className="flex-1 p-3 sm:p-5 text-left flex flex-col justify-center space-y-1.5 sm:space-y-2.5">
                                    <h3 className="text-xs sm:text-base font-black text-slate-950 tracking-wide uppercase leading-snug">
                                        {prob.title}
                                    </h3>
                                    {prob.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                            {prob.tags.map((tag, idx) => (
                                                <div key={idx} className="flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-xs font-bold text-slate-800 bg-white/90 px-2 sm:px-3 py-0.5 sm:py-1 rounded-md border border-orange-500/15 shadow-2xs">
                                                    <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-red-600 text-white flex items-center justify-center font-black text-[8px] sm:text-[9px] flex-shrink-0">
                                                        ✕
                                                    </span>
                                                    <span className="tracking-wide">{tag}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Thumbnail ảnh góc phải */}
                                <div className="w-20 sm:w-32 lg:w-40 overflow-hidden p-1.5 sm:p-2.5 flex-shrink-0 flex items-center justify-center">
                                    <img
                                        src={prob.imgUrl || bgImageUrl}
                                        alt={prob.title}
                                        className="w-full h-full object-cover rounded-lg sm:rounded-2xl transition-transform duration-700 ease-out transform group-hover:scale-105"
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

// 3. PENTAGON TITLE
function PentagonSolutionTitle() {
    return (
        <section className="relative w-full flex flex-col items-center">
            <div className="relative w-full py-12 md:py-20 overflow-hidden flex justify-center items-center px-4">
                <div
                    className="absolute inset-0 w-screen left-1/2 -translate-x-1/2 pointer-events-none z-0 bg-no-repeat bg-center"
                    style={{
                        backgroundImage: `url(${bgTitle3})`,
                        backgroundSize: 'cover'
                    }}
                />

                <div className="relative z-10 bg-white border-y border-slate-900 px-6 sm:px-10 py-2.5 sm:py-3.5 shadow-xs text-center">
                    <div className="absolute left-[-10px] sm:left-[-14px] top-[-1px] bottom-[-1px] w-2.5 sm:w-3.5 bg-orange-500 transform skew-x-[20deg]" />
                    <div className="absolute right-[-10px] sm:right-[-14px] top-[-1px] bottom-[-1px] w-2.5 sm:w-3.5 bg-orange-500 transform skew-x-[20deg]" />
                    <h2 className="text-sm sm:text-xl lg:text-2xl font-black tracking-wider uppercase text-slate-900">
                        GIẢI PHÁP CHIẾN LƯỢC TẠI <span className="text-orange-600">CMIC MEDIA</span>
                    </h2>
                </div>
            </div>
        </section>
    );
}

// 4. PENTAGON SECTION
function PentagonSolutionSection() {
    return (
        <section className="relative w-full px-4 sm:px-6 py-8 md:py-12 flex flex-col items-center">
            <div className="relative w-full overflow-hidden flex flex-col items-center">
                <div className="relative z-10 w-full max-w-2xl px-2 flex justify-center items-center">
                    <img
                        src="/dichvu.tronGoi/img6.png"
                        alt="Giải pháp chiến lược CMIC Media"
                        className="w-full h-auto object-contain max-h-[350px] sm:max-h-[500px] drop-shadow-md"
                    />
                </div>
            </div>
        </section>
    );
}

// 5. TIMELINE FLOW SECTION
function TimelineFlowSection({ workflowSteps }) {
    const stagesWithRightTimeline = ["01", "03"];

    return (
        <section className="relative py-12 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto z-10 w-full flex flex-col items-center justify-center">
            <div className="text-center mb-8 sm:mb-12 space-y-1 sm:space-y-2 relative z-10">
                <span className="text-[10px] sm:text-xs font-bold tracking-widest text-orange-600 uppercase block">— LUỒNG PHÁT TRIỂN DỰ ÁN —</span>
                <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight uppercase">Quy Trình 5 Bước Vận Hành</h2>
            </div>

            <div className="relative w-full z-10 flex flex-col gap-6 md:gap-8">
                {workflowSteps.map((step, idx) => {
                    const stageNum = step.num || `0${idx + 1}`;
                    const showRightTimeline = stagesWithRightTimeline.includes(stageNum);
                    const isStage3 = idx === 2;
                    const isStage4 = idx === 3;

                    // Dynamic Layout theo Responsive
                    let layoutClass = "";
                    if (idx === 0 || idx === 2) {
                        layoutClass = "w-full md:w-[45%] lg:w-[36%] md:ml-[5%] lg:ml-[12%]";
                    } else if (idx === 1) {
                        layoutClass = "w-full md:w-[50%] lg:w-[48%] md:ml-[45%] lg:ml-[43%]";
                    } else if (idx === 3) {
                        layoutClass = "w-full md:w-[90%] lg:w-[80%] md:mx-auto";
                    } else if (idx === 4) {
                        layoutClass = "w-full max-w-3xl mx-auto";
                    }

                    return (
                        <div key={idx} className="relative w-full flex flex-col md:flex-row items-center">
                            <div className={`${layoutClass} group/timeline relative flex flex-col text-left bg-white/60 md:bg-transparent p-4 sm:p-5 md:p-0 rounded-2xl border md:border-none border-orange-500/10 shadow-xs md:shadow-none`}>

                                {/* --- STAGE 4 --- */}
                                {isStage4 ? (
                                    <div className="w-full flex flex-col md:flex-row items-start gap-4 md:gap-12 relative">
                                        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                                            <div className="relative p-1 overflow-hidden w-full">
                                                <img
                                                    src={step.imgUrl || step.image}
                                                    alt={step.title}
                                                    className="w-full h-auto max-h-56 sm:max-h-72 object-cover rounded-xl block"
                                                />
                                            </div>
                                        </div>

                                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0 border-r-2 border-dashed border-slate-900 pointer-events-none">
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white border-3 border-slate-950 rounded-full z-20" />
                                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3.5 h-3.5 bg-white border-3 border-slate-950 rounded-full z-20" />
                                        </div>

                                        <div className="w-full md:w-1/2 flex flex-col justify-start pl-0 md:pl-6 pt-1">
                                            <h3 className="text-sm sm:text-lg md:text-2xl font-black text-slate-950 tracking-tight mb-2 sm:mb-3 uppercase group-hover/timeline:text-orange-600 transition-colors">
                                                {stageNum}. {step.title}
                                            </h3>
                                            <p className="text-slate-700 text-xs sm:text-sm md:text-base font-normal leading-relaxed">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </div>
                                ) : isStage3 ? (
                                    /* --- STAGE 3 --- */
                                    <>
                                        <div className="relative w-full flex justify-center md:justify-start mb-3 sm:mb-4">
                                            <img
                                                src={step.imgUrl || step.image}
                                                alt={step.title}
                                                className="max-w-full h-auto max-h-48 sm:max-h-60 object-contain block"
                                            />

                                            {showRightTimeline && (
                                                <div className="hidden md:block absolute -right-6 top-0 bottom-0 w-0 border-r-2 border-dashed border-slate-300 pointer-events-none">
                                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white border-3 border-slate-950 rounded-full z-20" />
                                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3.5 h-3.5 bg-white border-3 border-slate-950 rounded-full z-20" />
                                                </div>
                                            )}
                                        </div>

                                        <h3 className="text-sm sm:text-base md:text-lg font-black text-slate-950 tracking-tight mb-1.5 sm:mb-2 uppercase group-hover/timeline:text-orange-600 transition-colors">
                                            {stageNum}. {step.title}
                                        </h3>
                                        <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </>
                                ) : (
                                    /* --- STAGE 01, 02, 05 --- */
                                    <>
                                        <h3 className="text-sm sm:text-base md:text-lg font-black text-slate-950 tracking-tight mb-1.5 sm:mb-2 uppercase group-hover/timeline:text-orange-600 transition-colors">
                                            {stageNum}. {step.title}
                                        </h3>
                                        <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed mb-3 sm:mb-4">
                                            {step.desc}
                                        </p>

                                        <div className={`w-full flex relative justify-center ${idx === 4 ? 'md:justify-center' : 'md:justify-start'}`}>
                                            <img
                                                src={step.imgUrl || step.image}
                                                alt={step.title}
                                                className="max-w-full h-auto max-h-48 sm:max-h-60 object-contain block"
                                            />
                                        </div>

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

// 6. CONTACT FORM SECTION
function ContactFormSection({ contactData, handleInputChange, handleFormSubmit }) {
    return (
        <section className="relative w-full py-12 md:py-20 px-4 sm:px-6 bg-slate-50 border-t border-slate-200/80 z-10">
            <div
                className="absolute inset-0 w-screen left-1/2 -translate-x-1/2 pointer-events-none z-0 bg-no-repeat bg-center"
                style={{
                    backgroundImage: `url(${bgSession5})`,
                    backgroundSize: 'cover'
                }}
            />

            <div className="relative z-20 max-w-lg sm:max-w-xl mx-auto w-full">
                <form onSubmit={handleFormSubmit} className="w-full bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl flex flex-col space-y-4 sm:space-y-5">
                    <div className="text-center space-y-1 mb-1">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight uppercase">LIÊN HỆ VỚI CHÚNG TÔI</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div className="flex flex-col space-y-1 text-left">
                            <label className="text-[11px] sm:text-xs font-bold tracking-wider uppercase text-slate-500">Họ và tên *</label>
                            <input type="text" name="fullName" required value={contactData.fullName} onChange={handleInputChange} className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm focus:outline-none focus:border-orange-500 bg-slate-50/50 text-slate-900 transition-all placeholder:text-slate-400" placeholder="Nguyễn Văn A" />
                        </div>
                        <div className="flex flex-col space-y-1 text-left">
                            <label className="text-[11px] sm:text-xs font-bold tracking-wider uppercase text-slate-500">Số điện thoại *</label>
                            <input type="tel" name="phone" required value={contactData.phone} onChange={handleInputChange} className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm focus:outline-none focus:border-orange-500 bg-slate-50/50 text-slate-900 transition-all placeholder:text-slate-400" placeholder="0901 234 567" />
                        </div>
                    </div>

                    <div className="flex flex-col space-y-1 text-left">
                        <label className="text-[11px] sm:text-xs font-bold tracking-wider uppercase text-slate-500">Địa chỉ Email *</label>
                        <input type="email" name="email" required value={contactData.email} onChange={handleInputChange} className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm focus:outline-none focus:border-orange-500 bg-slate-50/50 text-slate-900 transition-all placeholder:text-slate-400" placeholder="name@company.com" />
                    </div>

                    <div className="flex flex-col space-y-1 text-left">
                        <label className="text-[11px] sm:text-xs font-bold tracking-wider uppercase text-slate-500">Bạn cần CMIC MEDIA tư vấn gì? *</label>
                        <textarea name="consultRequest" required rows={3} value={contactData.consultRequest} onChange={handleInputChange} className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm focus:outline-none focus:border-orange-500 bg-slate-50/50 text-slate-900 transition-all resize-none placeholder:text-slate-400" placeholder="Nêu rõ bài toán cần giải quyết..." />
                    </div>

                    <div className="pt-2">
                        <button type="submit" className="w-full bg-slate-950 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm py-3.5 sm:py-4 rounded-xl shadow-md transition-all uppercase tracking-widest">
                            Gửi thông tin ngay
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

// ========================================================
// MAIN COMPONENT
// ========================================================
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

            {/* Background container */}
            <div className="relative w-full overflow-hidden">
                <div
                    className="absolute inset-0 w-screen left-1/2 -translate-x-1/2 pointer-events-none z-0 scale-x-110"
                    style={{
                        backgroundImage: `url(${bgSession3})`,
                        backgroundPosition: 'center center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                />
                <PentagonSolutionSection />
                <TimelineFlowSection workflowSteps={workflowSteps} />
            </div>

            <ContactFormSection
                contactData={contactData}
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
            />
        </div>
    );
}