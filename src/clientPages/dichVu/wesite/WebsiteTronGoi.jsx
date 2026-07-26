import React, { useState } from 'react';
// Import component CustomerImageBorder đã tách và sửa lỗi
import CustomerImageBorder from '../../../utils/CustomerImageBorder'; 

// ========================================================
// SUB-COMPONENTS: CÁC SESSION ĐƯỢC TÁCH RIÊNG BIỆT VỚI LAYOUT LẤP ĐẦY KHÔNG GIAN
// ========================================================

function HeroSection({ bgImageUrl }) {
    return (
        <section className="relative w-full pt-24 pb-32 px-4 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
            <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="lg:col-span-5 space-y-6 text-left relative z-10">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-xs font-bold tracking-wider text-orange-600 uppercase shadow-xs">
                    🚀 DỊCH VỤ THIẾT KẾ & XÂY DỰNG
                </span>
                <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight leading-[1.15]">
                    HỆ THỐNG WEBSITE <br />
                    <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent uppercase">
                        Landing Page Toàn Diện
                    </span>
                </h1>
                <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed">
                    Kiến tạo các lớp trải nghiệm sâu sắc từ cấu trúc UI/UX độc bản, tối ưu hiệu năng tốc độ đến hạ tầng tracking chuyển đổi cho doanh nghiệp SME.
                </p>
                <div className="pt-4">
                    <button className="inline-flex items-center gap-3 bg-slate-950 hover:bg-orange-600 text-white font-bold text-xs px-10 py-4.5 rounded-xl shadow-xl transition-all uppercase tracking-wider">
                        Đăng ký nhận tư vấn
                    </button>
                </div>
            </div>

            <div className="lg:col-span-7 relative w-full aspect-[16/9] flex items-center justify-center group relative z-10">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/15 to-amber-500/5 rounded-3xl blur-3xl opacity-60 group-hover:opacity-80 transition-all duration-700" />
                <div className="absolute inset-0 rounded-2xl p-2 bg-white border border-slate-200 shadow-2xl overflow-hidden z-20 transition-transform duration-500 group-hover:-translate-y-1">
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
        <section className="relative w-full py-20 px-4 max-w-7xl mx-auto z-10 bg-white">
            <span className="absolute right-[-10%] top-[10%] w-[400px] h-[400px] bg-slate-100 rounded-full opacity-40 pointer-events-none blur-3xl z-0" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
                <div className="lg:col-span-5 flex flex-col space-y-8 text-left lg:sticky lg:top-8">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-rose-50 text-rose-600 text-xs font-bold uppercase tracking-wider border border-rose-100 w-fit">
                            ⚠️ THỰC TRẠNG DOANH NGHIỆP
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black uppercase text-slate-900 tracking-tight leading-tight">
                            BẠN CÓ ĐANG GẶP PHẢI <br />
                            <span className="text-orange-600">VẤN ĐỀ</span> SAU?
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
                            Đa số các doanh nghiệp vừa và nhỏ (SME) hiện nay đều sở hữu trang web. Tuy nhiên, có đến hơn 85% trang web đang rơi vào trạng thái &ldquo;vùng đất chết&rdquo; vì vướng phải 4 điểm nghẽn nghiêm trọng cốt lõi.
                        </p>
                    </div>

                    <div className="relative w-full max-w-sm aspect-[4/3] bg-slate-50 border border-slate-200/80 rounded-3xl flex items-center justify-center p-6 shadow-inner group overflow-hidden">
                        <div className="absolute -top-4 right-4 w-14 h-14 bg-white border-2 border-slate-900 rounded-full flex items-center justify-center shadow-md z-10 transform -rotate-12 group-hover:rotate-0 transition-transform">
                            <span className="text-2xl font-black text-red-600">?</span>
                        </div>
                        <div className="flex flex-col items-center transition-transform duration-500 group-hover:scale-105">
                            <div className="w-24 h-24 bg-gradient-to-b from-slate-200 to-slate-300 rounded-full border border-slate-300 relative shadow-md">
                                <div className="w-3 h-3 bg-slate-500 rounded-full absolute left-6 top-11" />
                                <div className="w-3 h-3 bg-slate-500 rounded-full absolute right-6 top-11" />
                            </div>
                            <div className="w-32 h-24 bg-gradient-to-b from-slate-100 to-slate-200 rounded-t-[3rem] border border-slate-300 -mt-2 shadow-sm" />
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-7 flex flex-col space-y-6">
                    {webProblems.map((prob) => (
                        <div
                            key={prob.id}
                            className="w-full bg-[#FFFBF7] border border-orange-500/20 rounded-2xl overflow-hidden shadow-xs flex items-stretch min-h-[120px] transition-all duration-300 hover:shadow-xl hover:border-orange-400 hover:-translate-y-1 group"
                        >
                            <div className="bg-orange-500 text-white w-20 flex items-center justify-center font-black text-3xl flex-shrink-0 select-none tracking-tighter">
                                {prob.id}
                            </div>
                            <div className="flex-1 p-6 text-left flex flex-col justify-center space-y-3">
                                <h3 className="text-base sm:text-lg font-black text-slate-950 tracking-wide uppercase">
                                    {prob.title}
                                </h3>
                                {prob.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-2">
                                        {prob.tags.map((tag, idx) => (
                                            <div key={idx} className="flex items-center gap-1.5 text-xs font-bold text-slate-800 bg-white/60 px-2.5 py-1 rounded-lg border border-orange-500/10 shadow-xs">
                                                <span className="w-4 h-4 rounded-full bg-red-600 text-white flex items-center justify-center font-black text-[9px] flex-shrink-0 pb-0.5">
                                                    ✕
                                                </span>
                                                <span className="tracking-wide">{tag}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="w-32 sm:w-40 overflow-hidden p-2.5 flex-shrink-0">
                                <div className="w-full h-full rounded-xl overflow-hidden shadow-xs border border-slate-200 bg-white relative">
                                    <img
                                        src={prob.imgUrl || bgImageUrl}
                                        alt={prob.title}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-out transform group-hover:scale-110 group-hover:contrast-110"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function PentagonSolutionSection({ circularSteps, bgImageUrl }) {
    return (
        <section className="relative w-full py-24 px-4 bg-slate-50 border-y border-slate-200/60 overflow-visible flex flex-col items-center">
            <div className="absolute left-[5%] top-16 opacity-20 pointer-events-none hidden xl:grid grid-cols-3 gap-2">
                {[...Array(9)].map((_, i) => (
                    <div key={i} className={`w-6 h-6 rotate-45 ${i % 2 === 0 ? 'bg-orange-500' : 'bg-slate-300'}`} />
                ))}
            </div>
            <div className="absolute right-[5%] top-16 opacity-20 pointer-events-none hidden xl:grid grid-cols-3 gap-2">
                {[...Array(9)].map((_, i) => (
                    <div key={i} className={`w-6 h-6 rotate-45 ${i % 2 === 0 ? 'bg-orange-500' : 'bg-slate-300'}`} />
                ))}
            </div>

            <div className="relative mb-20 z-20">
                <div className="bg-white border-y border-slate-900 px-12 py-3.5 relative shadow-sm">
                    <div className="absolute left-[-16px] top-[-1px] bottom-[-1px] w-4 bg-orange-500 transform skew-x-[20deg]" />
                    <div className="absolute right-[-16px] top-[-1px] bottom-[-1px] w-4 bg-orange-500 transform skew-x-[20deg]" />
                    <h2 className="text-xl font-black tracking-wider uppercase text-slate-900">
                        GIẢI PHÁP CHIẾN LƯỢC TẠI <span className="text-orange-600">CMIC MEDIA</span>
                    </h2>
                </div>
            </div>

            <div className="relative w-full max-w-[550px] aspect-square my-4">
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full overflow-visible pointer-events-none" preserveAspectRatio="none">
                    <circle cx="50" cy="50" r="32" fill="none" stroke="rgba(226, 232, 240, 0.9)" strokeWidth="6" />
                    <polygon points={circularSteps.map(s => `${s.cx},${s.cy}`).join(' ')} fill="none" stroke="#ea580c" strokeWidth="1.5" />
                </svg>

                {circularSteps.map((s, i) => (
                    <div key={`node-${i}`} className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group/node" style={{ left: `${s.cx}%`, top: `${s.cy}%` }}>
                        <div className="w-18 h-18 sm:w-22 sm:h-22 rounded-full border-[6px] border-orange-500 bg-white shadow-xl overflow-hidden relative transition-transform duration-500 group-hover/node:scale-110 cursor-pointer">
                            <img src={bgImageUrl} alt={s.label} className="w-full h-full object-cover" />
                        </div>
                    </div>
                ))}

                {circularSteps.map((s, i) => {
                    let arrowClass = "";
                    if (i === 0) arrowClass = "bottom-[-8px] left-1/2 -translate-x-1/2 border-t-white border-x-transparent border-t-[8px] border-x-[8px]";
                    if (i === 1) arrowClass = "left-[-8px] top-1/2 -translate-y-1/2 border-r-white border-y-transparent border-r-[8px] border-y-[8px]";
                    if (i === 2) arrowClass = "left-1/2 -translate-x-1/2 top-[-8px] border-b-white border-x-transparent border-b-[8px] border-x-[8px]";
                    if (i === 3) arrowClass = "left-1/2 -translate-x-1/2 top-[-8px] border-b-white border-x-transparent border-b-[8px] border-x-[8px]";
                    if (i === 4) arrowClass = "right-[-8px] top-1/2 -translate-y-1/2 border-l-white border-y-transparent border-l-[8px] border-y-[8px]";

                    return (
                        <div key={`label-${i}`} className="absolute -translate-x-1/2 -translate-y-1/2 w-36 sm:w-44 z-30 transition-transform duration-300" style={{ left: `${s.lx}%`, top: `${s.ly}%` }}>
                            <div className="bg-white border-2 border-slate-900 rounded-2xl px-3 py-3 shadow-lg relative transition-all duration-300 hover:border-orange-500">
                                <div className={`absolute w-0 h-0 ${arrowClass}`} />
                                <span className="text-[11px] sm:text-xs font-black text-slate-950 leading-snug block text-center">
                                    {s.label}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

function TimelineFlowSection({ workflowSteps, bgImageUrl }) {
    return (
        <section className="relative py-24 px-4 max-w-7xl mx-auto z-10 bg-white">

            <div className="text-center mb-24 space-y-2 relative z-10">
                <span className="text-xs font-bold tracking-widest text-orange-600 uppercase block">— LUỒNG PHÁT TRIỂN DỰ ÁN —</span>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Quy Trình 5 Bước Vận Hành</h2>
            </div>

            <div className="relative w-full z-10">
                <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0 border-l-2 border-dashed border-slate-200 -translate-x-1/2" />

                <div className="space-y-36">
                    {workflowSteps.map((step, idx) => {
                        const isLeftColumn = idx % 2 === 0;

                        return (
                            <div key={idx} className="relative w-full flex flex-col md:flex-row items-start">
                                <div className="absolute left-6 md:left-1/2 top-2.5 w-4 h-4 bg-white border-4 border-slate-950 rounded-full z-30 -translate-x-1/2" />

                                <div className={`w-full md:w-[48%] pl-14 md:pl-0 ${isLeftColumn ? 'md:pr-14 md:text-right md:ml-0' : 'md:pl-14 md:text-left md:ml-auto'} group/timeline`}>
                                    <div className={`flex items-center gap-2 mb-2 ${isLeftColumn ? 'md:justify-end' : 'justify-start'}`}>
                                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-800 border border-slate-200">
                                            STAGE {step.num}
                                        </span>
                                    </div>
                                    <h3 className="text-lg md:text-xl font-black text-slate-950 tracking-tight mb-2 uppercase group-hover/timeline:text-orange-600 transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-slate-500 text-xs md:text-sm font-normal leading-relaxed mb-6 max-w-lg inline-block">
                                        {step.desc}
                                    </p>

                                    <div className={`w-full flex ${isLeftColumn ? 'justify-start md:justify-end' : 'justify-start'} py-2`}>
                                        {/* Sử dụng component CustomerImageBorder tái sử dụng tại đây */}
                                        <CustomerImageBorder src={bgImageUrl} alt={step.title} />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function ContactFormSection({ contactData, handleInputChange, handleFormSubmit }) {
    return (
        <section className="relative w-full py-24 px-4 bg-slate-50 border-t border-slate-200/80 z-10">
            <div className="relative z-20 max-w-2xl mx-auto w-full">
                <form onSubmit={handleFormSubmit} className="w-full bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col space-y-6">
                    <div className="text-center space-y-2 mb-2">
                        <h2 className="text-2xl font-black text-slate-900 tracking-tight uppercase">LIÊN HỆ VỚI CHÚNG TÔI</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col space-y-1.5 text-left">
                            <label className="text-[10px] font-bold tracking-wider uppercase text-slate-500">Họ và tên *</label>
                            <input type="text" name="fullName" required value={contactData.fullName} onChange={handleInputChange} className="w-full border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-orange-500 bg-slate-50/50 text-slate-900 transition-all placeholder:text-slate-400" placeholder="Nguyễn Văn A" />
                        </div>
                        <div className="flex flex-col space-y-1.5 text-left">
                            <label className="text-[10px] font-bold tracking-wider uppercase text-slate-500">Số điện thoại *</label>
                            <input type="tel" name="phone" required value={contactData.phone} onChange={handleInputChange} className="w-full border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-orange-500 bg-slate-50/50 text-slate-900 transition-all placeholder:text-slate-400" placeholder="0901 234 567" />
                        </div>
                    </div>

                    <div className="flex flex-col space-y-1.5 text-left">
                        <label className="text-[10px] font-bold tracking-wider uppercase text-slate-500">Địa chỉ Email *</label>
                        <input type="email" name="email" required value={contactData.email} onChange={handleInputChange} className="w-full border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-orange-500 bg-slate-50/50 text-slate-900 transition-all placeholder:text-slate-400" placeholder="name@company.com" />
                    </div>

                    <div className="flex flex-col space-y-1.5 text-left">
                        <label className="text-[10px] font-bold tracking-wider uppercase text-slate-500">Bạn cần CMIC MEDIA tư vấn gì? *</label>
                        <textarea name="consultRequest" required rows={4} value={contactData.consultRequest} onChange={handleInputChange} className="w-full border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-orange-500 bg-slate-50/50 text-slate-900 transition-all resize-none placeholder:text-slate-400" placeholder="Nêu rõ bài toán cần giải quyết..." />
                    </div>

                    <div className="pt-2">
                        <button type="submit" className="w-full bg-slate-950 hover:bg-orange-600 text-white font-bold text-sm py-4.5 rounded-xl shadow-lg transition-all uppercase tracking-widest">
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
        { id: "1", title: "GIAO DIỆN (UI)", tags: ["ĐẠI TRÀ", "LỖI THỜI"], imgUrl: bgImageUrl, metric: "BOUNCE RATE +70%" },
        { id: "2", title: "GIAO DIỆN (UX)", tags: ["THAO TÁC RƯỜM RÀ", "KHÔNG HỖ TRỢ CHUYỂN ĐỔI"], imgUrl: bgImageUrl, metric: "CONVERSION -45%" },
        { id: "3", title: "TỐC ĐỘ TẢI TRANG CHẬM", tags: ["LỖI HIỂN THỊ"], imgUrl: bgImageUrl, metric: "LOAD TIME > 5s" },
        { id: "4", title: "KHÔNG THIẾT LẬP HỆ THỐNG THEO DÕI & ĐO LƯỜNG", tags: [], imgUrl: bgImageUrl, metric: "LOST DATA 100%" }
    ];

    const circularSteps = [
        { label: "Nghiên cứu & Định hình cấu trúc (Sitemap)", cx: 50, cy: 45, lx: 50, ly: 12 },
        { label: "Thiết kế Wireframe & UI/UX (Visual Design)", cx: 78, cy: 62, lx: 85, ly: 48 },
        { label: "Lập trình & Tích hợp hệ thống (Development)", cx: 66, cy: 88, lx: 82, ly: 92 },
        { label: "Kiểm thử & Bàn giao (Testing & Handover)", cx: 34, cy: 88, lx: 18, ly: 92 },
        { label: "Giải pháp chăm sóc & Vận hành website toàn diện", cx: 22, cy: 62, lx: 15, ly: 48 },
    ];

    const workflowSteps = [
        { num: "01", title: "NGHIÊN CỨU VÀ ĐỊNH HÌNH SITEMAP", desc: "Khảo sát sản phẩm, dịch vụ và tệp khách hàng mục tiêu để lên sơ đồ các trang cần thiết." },
        { num: "02", title: "THIẾT KẾ WIREFRAME & UI/UX (VISUAL DESIGN)", desc: "Phác thảo bố cục, lựa chọn màu sắc thương hiệu và thiết kế giao diện chi tiết cho từng màn hình thiết bị (Desktop, Mobile, Tablet)." },
        { num: "03", title: "LẬP TRÌNH & TÍCH HỢP HỆ THỐNG", desc: "Chuyển hóa bản thiết kế thành code, tối ưu tốc độ, cài đặt các công cụ tracking đo lường và bảo mật hệ thống." },
        { num: "04", title: "KIỂM THỬ & BÀN GIAO", desc: "Chạy thử nghiệm trên đa trình duyệt, sửa lỗi, đào tạo nhân sự của khách hàng quản trị và chính thức nghiệm thu bàn giao." },
        { num: "05", title: "GIẢI PHÁP CHĂM SÓC & VẬN HÀNH WEBSITE TOÀN DIỆN", desc: "Bảo trì định kỳ, cập nhật nội dung, theo dõi hiệu năng hệ thống liên tục giúp tối ưu chi phí và tăng trưởng bền vững." }
    ];

    return (
        <div className="w-full bg-white font-sans antialiased text-slate-600 selection:bg-orange-500 selection:text-white relative min-h-screen overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000001_1px,transparent_1px),linear-gradient(to_bottom,#00000001_1px,transparent_1px)] bg-[length:50px_50px] pointer-events-none z-0" />

            <HeroSection bgImageUrl={bgImageUrl} />

            <UnifiedProblemsSection webProblems={webProblems} bgImageUrl={bgImageUrl} />

            <PentagonSolutionSection circularSteps={circularSteps} bgImageUrl={bgImageUrl} />

            <TimelineFlowSection workflowSteps={workflowSteps} bgImageUrl={bgImageUrl} />

            <ContactFormSection
                contactData={contactData}
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
            />
        </div>
    );
}