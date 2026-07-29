import React, { useState } from 'react';
// Import component CustomerImageBorder đã tách và sửa lỗi
import CustomerImageBorder from '../../../utils/CustomerImageBorder';

// ========================================================
// SUB-COMPONENTS: CÁC SESSION ĐƯỢC CẮT BỚT KHOẢNG TRẮNG THỪA
// ========================================================

const bgSession3 = "/dichvu.tronGoi/bg3.png";
const bgTitle3 = "/dichvu.tronGoi/bg3Titile.png";

function HeroSection() {
    return (
        <section className="relative w-full pt-12 pb-16 px-4 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10">
            <div className="absolute top-[-10%] left-[-5%] w-[300px] h-[300px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="lg:col-span-5 space-y-4 text-left relative z-10">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-[11px] font-bold tracking-wider text-orange-600 uppercase shadow-xs">
                    🚀 DỊCH VỤ THIẾT KẾ & XÂY DỰNG
                </span>
                <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight leading-[1.15]">
                    HỆ THỐNG WEBSITE <br />
                    <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent uppercase">
                        Landing Page Toàn Diện
                    </span>
                </h1>
                <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                    Kiến tạo các lớp trải nghiệm sâu sắc từ cấu trúc UI/UX độc bản, tối ưu hiệu năng tốc độ đến hạ tầng tracking chuyển đổi cho doanh nghiệp SME.
                </p>
                <div className="pt-2">
                    <button className="inline-flex items-center gap-3 bg-slate-950 hover:bg-orange-600 text-white font-bold text-xs px-8 py-3.5 rounded-xl shadow-lg transition-all uppercase tracking-wider">
                        Đăng ký nhận tư vấn
                    </button>
                </div>
            </div>

            <div className="lg:col-span-7 relative w-full aspect-[16/9] flex items-center justify-center group z-10">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/15 to-amber-500/5 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-all duration-700" />
                <div className="absolute inset-0 rounded-2xl p-2 bg-white border border-slate-200 shadow-xl overflow-hidden z-20 transition-transform duration-500 group-hover:-translate-y-1">
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
        <section className="relative w-full py-12 md:py-16 px-4 max-w-7xl mx-auto z-10 bg-white">
            <span className="absolute right-[-10%] top-[10%] w-[300px] h-[300px] bg-slate-100 rounded-full opacity-40 pointer-events-none blur-3xl z-0" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
                {/* CỘT TRÁI: HÌNH ẢNH MINH HỌA (Ảnh không viền, hiển thị nguyên vẹn) */}
                <div className="lg:col-span-5 flex items-center justify-center lg:sticky lg:top-8 self-start">
                    <div className="relative w-full max-w-md h-full min-h-[320px] max-h-[460px] flex items-center justify-center p-2 group">
                        <img
                            src="/dichvu.tronGoi/img1.png"
                            alt="Thực trạng doanh nghiệp"
                            className="w-full h-full max-h-[450px] object-contain transition-transform duration-500 group-hover:scale-102"
                        />
                    </div>
                </div>

                {/* CỘT PHẢI: TIÊU ĐỀ + DANH SÁCH VẤN ĐỀ */}
                <div className="lg:col-span-7 flex flex-col space-y-6">
                    {/* Phần tiêu đề */}
                    <div className="space-y-3 text-left">
                        <h2 className="text-2xl sm:text-3xl font-black uppercase text-slate-900 tracking-tight leading-tight">
                            BẠN CÓ ĐANG GẶP PHẢI <br />
                            <span className="text-orange-600">VẤN ĐỀ</span> SAU?
                        </h2>
                        <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                            Đa số các doanh nghiệp vừa và nhỏ (SME) hiện nay đều sở hữu trang web. Tuy nhiên, có đến hơn 85% trang web đang rơi vào trạng thái &ldquo;vùng đất chết&rdquo; vì vướng phải 4 điểm nghẽn nghiêm trọng cốt lõi.
                        </p>
                    </div>

                    {/* Danh sách thẻ bài toán */}
                    <div className="flex flex-col space-y-3.5">
                        {webProblems.map((prob) => (
                            <div
                                key={prob.id}
                                className="w-full bg-[#FFFBF7] border border-orange-500/20 rounded-xl overflow-hidden shadow-xs flex items-stretch min-h-[96px] transition-all duration-300 hover:shadow-md hover:border-orange-400 hover:-translate-y-0.5 group"
                            >
                                {/* Số thứ tự */}
                                <div className="bg-orange-500 text-white w-14 sm:w-16 flex items-center justify-center font-black text-2xl flex-shrink-0 select-none tracking-tighter">
                                    {prob.id}
                                </div>

                                {/* Content */}
                                <div className="flex-1 p-3.5 sm:p-4 text-left flex flex-col justify-center space-y-2">
                                    <h3 className="text-xs sm:text-sm font-black text-slate-950 tracking-wide uppercase leading-snug">
                                        {prob.title}
                                    </h3>
                                    {prob.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-1.5">
                                            {prob.tags.map((tag, idx) => (
                                                <div key={idx} className="flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-slate-800 bg-white/90 px-2.5 py-0.5 rounded-md border border-orange-500/15 shadow-2xs">
                                                    <span className="w-3.5 h-3.5 rounded-full bg-red-600 text-white flex items-center justify-center font-black text-[8px] flex-shrink-0">
                                                        ✕
                                                    </span>
                                                    <span className="tracking-wide">{tag}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Thumbnail ảnh góc phải (Đã bỏ viền, bóng và nền trắng) */}
                                <div className="w-24 sm:w-38 overflow-hidden p-2 flex-shrink-0">
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

function PentagonSolutionSection({ circularSteps, bgImageUrl }) {
    return (
        <section className="relative w-full py-12 px-4 flex flex-col items-center">

            {/* Thay đổi py-6 thành py-10 để tăng chiều cao nền */}
            <div className="relative w-full py-16 overflow-hidden flex justify-center items-center">
                <div
                    className="absolute inset-0 w-screen left-1/2 -translate-x-1/2 pointer-events-none z-0 bg-no-repeat bg-center"
                    style={{
                        backgroundImage: `url(${bgTitle3})`,
                        backgroundSize: '100% 100%'
                    }}
                />

                <div className="relative z-10 bg-white border-y border-slate-900 px-8 py-2.5 shadow-xs">
                    <div className="absolute left-[-12px] top-[-1px] bottom-[-1px] w-3 bg-orange-500 transform skew-x-[20deg]" />
                    <div className="absolute right-[-12px] top-[-1px] bottom-[-1px] w-3 bg-orange-500 transform skew-x-[20deg]" />
                    <h2 className="text-base sm:text-lg font-black tracking-wider uppercase text-slate-900">
                        GIẢI PHÁP CHIẾN LƯỢC TẠI <span className="text-orange-600">CMIC MEDIA</span>
                    </h2>
                </div>
            </div>

            {/* 2. KHỐI NỀN + HÌNH ẢNH THAY THẾ SƠ ĐỒ NGŨ GIÁC */}
            <div className="relative w-full overflow-hidden flex flex-col items-center py-6">

                {/* Ảnh nền tràn 100% màn hình - Căn xuất hiện từ đỉnh TOP */}
                <div
                    className="absolute inset-0 w-screen left-1/2 -translate-x-1/2 pointer-events-none z-0 bg-cover bg-top bg-no-repeat"
                    style={{ backgroundImage: `url(${bgImageUrl})` }}
                />

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

function TimelineFlowSection({ workflowSteps, bgImageUrl }) {
    return (
        <section className="relative py-12 px-4 max-w-7xl mx-auto z-10 bg-white">

            <div className="text-center mb-10 space-y-1 relative z-10">
                <span className="text-[11px] font-bold tracking-widest text-orange-600 uppercase block">— LUỒNG PHÁT TRIỂN DỰ ÁN —</span>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight uppercase">Quy Trình 5 Bước Vận Hành</h2>
            </div>

            <div className="relative w-full z-10">
                <div className="absolute left-6 md:left-1/2 top-2 bottom-2 w-0 border-l-2 border-dashed border-slate-200 -translate-x-1/2" />

                <div className="space-y-10">
                    {workflowSteps.map((step, idx) => {
                        const isLeftColumn = idx % 2 === 0;

                        return (
                            <div key={idx} className="relative w-full flex flex-col md:flex-row items-start">
                                <div className="absolute left-6 md:left-1/2 top-1.5 w-3.5 h-3.5 bg-white border-3 border-slate-950 rounded-full z-30 -translate-x-1/2" />

                                <div className={`w-full md:w-[48%] pl-12 md:pl-0 ${isLeftColumn ? 'md:pr-10 md:text-right md:ml-0' : 'md:pl-10 md:text-left md:ml-auto'} group/timeline`}>
                                    <div className={`flex items-center gap-2 mb-1 ${isLeftColumn ? 'md:justify-end' : 'justify-start'}`}>
                                        <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-800 border border-slate-200">
                                            STAGE {step.num}
                                        </span>
                                    </div>
                                    <h3 className="text-sm md:text-base font-black text-slate-950 tracking-tight mb-1 uppercase group-hover/timeline:text-orange-600 transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-slate-500 text-xs font-normal leading-relaxed mb-3 max-w-lg inline-block">
                                        {step.desc}
                                    </p>

                                    <div className={`w-full flex ${isLeftColumn ? 'justify-start md:justify-end' : 'justify-start'} py-1`}>
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
        <section className="relative w-full py-12 px-4 bg-slate-50 border-t border-slate-200/80 z-10">
            <div className="relative z-20 max-w-xl mx-auto w-full">
                <form onSubmit={handleFormSubmit} className="w-full bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-xl flex flex-col space-y-4">
                    <div className="text-center space-y-1 mb-1">
                        <h2 className="text-xl font-black text-slate-900 tracking-tight uppercase">LIÊN HỆ VỚI CHÚNG TÔI</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="flex flex-col space-y-1 text-left">
                            <label className="text-[10px] font-bold tracking-wider uppercase text-slate-500">Họ và tên *</label>
                            <input type="text" name="fullName" required value={contactData.fullName} onChange={handleInputChange} className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-orange-500 bg-slate-50/50 text-slate-900 transition-all placeholder:text-slate-400" placeholder="Nguyễn Văn A" />
                        </div>
                        <div className="flex flex-col space-y-1 text-left">
                            <label className="text-[10px] font-bold tracking-wider uppercase text-slate-500">Số điện thoại *</label>
                            <input type="tel" name="phone" required value={contactData.phone} onChange={handleInputChange} className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-orange-500 bg-slate-50/50 text-slate-900 transition-all placeholder:text-slate-400" placeholder="0901 234 567" />
                        </div>
                    </div>

                    <div className="flex flex-col space-y-1 text-left">
                        <label className="text-[10px] font-bold tracking-wider uppercase text-slate-500">Địa chỉ Email *</label>
                        <input type="email" name="email" required value={contactData.email} onChange={handleInputChange} className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-orange-500 bg-slate-50/50 text-slate-900 transition-all placeholder:text-slate-400" placeholder="name@company.com" />
                    </div>

                    <div className="flex flex-col space-y-1 text-left">
                        <label className="text-[10px] font-bold tracking-wider uppercase text-slate-500">Bạn cần CMIC MEDIA tư vấn gì? *</label>
                        <textarea name="consultRequest" required rows={3} value={contactData.consultRequest} onChange={handleInputChange} className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-orange-500 bg-slate-50/50 text-slate-900 transition-all resize-none placeholder:text-slate-400" placeholder="Nêu rõ bài toán cần giải quyết..." />
                    </div>

                    <div className="pt-1">
                        <button type="submit" className="w-full bg-slate-950 hover:bg-orange-600 text-white font-bold text-xs py-3.5 rounded-lg shadow-md transition-all uppercase tracking-widest">
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
        { num: "01", title: "NGHIÊN CỨU VÀ ĐỊNH HÌNH SITEMAP", desc: "Khảo sát sản phẩm, dịch vụ và tệp khách hàng mục tiêu để lên sơ đồ các trang cần thiết." },
        { num: "02", title: "THIẾT KẾ WIREFRAME & UI/UX (VISUAL DESIGN)", desc: "Phác thảo bố cục, lựa chọn màu sắc thương hiệu và thiết kế giao diện chi tiết cho từng màn hình thiết bị (Desktop, Mobile, Tablet)." },
        { num: "03", title: "LẬP TRÌNH & TÍCH HỢP HỆ THỐNG", desc: "Chuyển hóa bản thiết kế thành code, tối ưu tốc độ, cài đặt các công cụ tracking đo lường và bảo mật hệ thống." },
        { num: "04", title: "KIỂM THỬ & BÀN GIAO", desc: "Chạy thử nghiệm trên đa trình duyệt, sửa lỗi, đào tạo nhân sự của khách hàng quản trị và chính thức nghiệm thu bàn giao." },
        { num: "05", title: "GIẢI PHÁP CHĂM SÓC & VẬN HÀNH WEBSITE TOÀN DIỆN", desc: "Bảo trì định kỳ, cập nhật nội dung, theo dõi hiệu năng hệ thống liên tục giúp tối ưu chi phí và tăng trưởng bền vững." }
    ];

    return (
        <div className="w-full bg-white font-sans antialiased text-slate-600 selection:bg-orange-500 selection:text-white relative min-h-screen overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000001_1px,transparent_1px),linear-gradient(to_bottom,#00000001_1px,transparent_1px)] bg-[length:50px_50px] pointer-events-none z-0" />

            <HeroSection />

            <UnifiedProblemsSection webProblems={webProblems} bgImageUrl={bgImageUrl} />

            <PentagonSolutionSection circularSteps={circularSteps} bgImageUrl={bgSession3} />

            <TimelineFlowSection workflowSteps={workflowSteps} bgImageUrl={bgImageUrl} />

            <ContactFormSection
                contactData={contactData}
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
            />
        </div>
    );
}