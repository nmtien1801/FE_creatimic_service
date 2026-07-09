import React, { useState } from "react";
import { 
    Briefcase, 
    Layers, 
    TrendingUp, 
    Target, 
    Mail, 
    Phone, 
    ChevronRight, 
    Award,
    Sparkles,
    CheckCircle2
} from "lucide-react";

export default function MarketerPortfolio() {
    const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Cảm ơn bạn đã liên hệ! Tôi sẽ phản hồi lại trong vòng 24 giờ.");
        setContactForm({ name: '', email: '', message: '' });
    };

    return (
        <div className="bg-[#fafafa] text-slate-900 min-h-screen antialiased overflow-x-hidden font-sans scroll-smooth relative">
            
            {/* BACKGROUND GRADIENT NỀN LUXURY CHẠY NGẦM */}
            <div className="absolute top-0 left-0 w-full h-[650px] bg-gradient-to-br from-orange-500/5 via-transparent to-purple-500/5 animate-[pulseBg_10s_ease-in-out_infinite] -z-10" />

            {/* ================= SESSION 1: HERO PORTFOLIO SECTION ================= */}
            <section className="max-w-6xl mx-auto px-6 pt-20 pb-24 grid lg:grid-cols-12 gap-12 items-center opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
                <div className="lg:col-span-7 space-y-6">
                    <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 text-orange-700 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
                        Senior Marketing Specialist
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 leading-[1.15] tracking-tight">
                        Kiến Tạo Hệ Sinh Thái<br />
                        <span className="text-[#f27830]">Nội Dung &amp; Vận Hành Tự Động</span>
                    </h1>

                    <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-medium">
                        Với **5 năm kinh nghiệm thực chiến**, tôi không chỉ làm Social theo bản năng hay chạy Ads ngắn hạn. Tôi định hình chiến lược toàn diện cho doanh nghiệp: Từ xây dựng bộ quy chuẩn Visual, đa dạng hóa định dạng nội dung cho đến tối ưu hạ tầng công nghệ sạch (n8n, CRM) giúp chuyển hóa traffic thành dòng tiền bền vững.
                    </p>

                    <div className="pt-4 flex flex-wrap gap-4">
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-[#f27830] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:-translate-y-1 active:scale-95"
                        >
                            Hợp tác cùng tôi
                            <ChevronRight className="w-4 h-4" />
                        </a>
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 hover:text-slate-950 font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-sm hover:border-slate-900"
                        >
                            Xem các dự án tiêu biểu
                        </a>
                    </div>
                </div>

                {/* Khu vực ảnh chân dung cá nhân / Portfolio Branding bên phải */}
                <div className="lg:col-span-5 flex justify-center animate-[float_6s_ease-in-out_infinite_0.2s]">
                    <div className="relative w-full max-w-sm p-3 bg-white rounded-[2.5rem] border border-slate-200 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]">
                        <img 
                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500&auto=format&fit=crop" 
                            alt="Senior Marketer Professional Chân Dung" 
                            className="w-full h-auto rounded-[2rem] object-cover aspect-[4/5] filter contrast-[1.02]"
                        />
                        {/* Huy hiệu 5 năm kinh nghiệm nổi bật */}
                        <div className="absolute -bottom-4 -left-4 bg-stone-950 text-white p-4 rounded-2xl shadow-xl border border-stone-800 flex items-center gap-3">
                            <span className="text-3xl font-black text-[#f27830]">5+</span>
                            <span className="text-xs uppercase font-bold tracking-wider text-slate-300 leading-tight">Năm<br />Thực Chiến</span>
                        </div>
                    </div>
                </div>
            </section>


            {/* ================= SESSION 2: LÕI NĂNG LỰC THỰC CHIẾN ================= */}
            <section className="bg-white py-24 border-t border-slate-100 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.3s_forwards]">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight uppercase">
                            BỘ BA LÕI NĂNG LỰC CỐT LÕI
                        </h2>
                        <p className="text-slate-500 text-sm sm:text-base mt-2">Giải pháp giải phóng nguồn lực và tối ưu khoảng trống thị trường</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* Năng lực 1 */}
                        <div className="bg-[#f27830] text-white p-8 rounded-[2rem] shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-stone-950/20 flex items-center justify-center mb-6">
                                    <Target className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold uppercase border-b border-white/20 pb-3 mb-4">
                                    Cố Vấn Chiến Lược
                                </h3>
                                <p className="text-sm sm:text-base leading-relaxed opacity-95 font-medium">
                                    Định hình ma trận nội dung đồng bộ, quy hoạch phễu chuyển đổi phễu thu hút Lead, thiết kế hành trình trải nghiệm người dùng sâu sắc ngay từ cái nhìn đầu tiên.
                                </p>
                            </div>
                        </div>

                        {/* Năng lực 2 */}
                        <div className="bg-[#f27830] text-white p-8 rounded-[2rem] shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-stone-950/20 flex items-center justify-center mb-6">
                                    <Layers className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold uppercase border-b border-white/20 pb-3 mb-4">
                                    Đa Kênh Thực Thi
                                </h3>
                                <p className="text-sm sm:text-base leading-relaxed opacity-95 font-medium">
                                    Quản trị, sản xuất nội dung đồng bộ cho hệ sinh thái Fanpage, TikTok, YouTube, Instagram và LinkedIn. Đảm bảo chuẩn hóa hình ảnh nhận diện, thu hút tệp data chất lượng cao.
                                </p>
                            </div>
                        </div>

                        {/* Năng lực 3 */}
                        <div className="bg-[#f27830] text-white p-8 rounded-[2rem] shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-stone-950/20 flex items-center justify-center mb-6">
                                    <TrendingUp className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold uppercase border-b border-white/20 pb-3 mb-4">
                                    Công Nghệ &amp; Tự Động
                                </h3>
                                <p className="text-sm sm:text-base leading-relaxed opacity-95 font-medium">
                                    Ứng dụng AI Agent (n8n), kết nối tự động hóa Email Marketing, CRM quản lý dữ liệu, cài đặt đo lường chỉ số thực giúp tinh gọn bộ máy vận hành doanh nghiệp.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ================= SESSION 3: TRIẾT LÝ LÀM VIỆC & CAM KẾT ================= */}
            <section className="py-20 bg-slate-50 border-t border-slate-100 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.5s_forwards]">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-14">
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight uppercase">
                            TRIẾT LÝ &amp; CAM KẾT VÀNG
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 text-center">
                        {[
                            { title: "Nói Không Với Chỉ Số Ảo", desc: "Không báo cáo lượt reach, lượt tương tác ngẫu hứng vô nghĩa. Tôi tập trung đo lường số lượng Lead thực tế, tỷ lệ chuyển đổi và ROI dòng tiền rõ ràng." },
                            { title: "Minh Bạch 100% Tài Nguyên", desc: "Toàn bộ mật khẩu hệ thống, tài khoản tracking, file thiết kế gốc Figma... đều thuộc quyền sở hữu vĩnh viễn của bạn. Tôi tuyệt đối không giữ tài sản để ràng buộc khách hàng." },
                            { title: "Trách Nhiệm Như Cộng Sự", desc: "Làm việc sâu sát như một nhân sự In-house thuộc bộ máy cốt lõi của công ty bạn, thấu hiểu sản phẩm và đồng cam cộng khổ cùng mục tiêu tăng trưởng." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center group transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                                <Award className="w-10 h-10 text-orange-600 mb-3" />
                                <h3 className="text-sm font-bold text-slate-900 mb-2 uppercase">{item.title}</h3>
                                <div className="w-8 h-0.5 bg-orange-200 mb-3 group-hover:w-16 transition-all duration-300" />
                                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light text-justify">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ================= SESSION 4: CÁC DỰ ÁN DẤU ẤN TIÊU BIỂU ================= */}
            <section id="projects" className="bg-white py-20 border-t border-slate-100 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.7s_forwards]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight uppercase">
                            DỰ ÁN TIÊU BIỂU ĐÃ TRIỂN KHAI
                        </h2>
                        <p className="text-slate-500 text-sm mt-2">Các sản phẩm thiết kế hệ thống và ma trận nội dung mang lại hiệu suất đỉnh cao</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            { title: "Ma Trận Phân Phối Nội Dung Hệ Sinh Thái Đa Kênh", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500&auto=format&fit=crop" },
                            { title: "Bộ Quy Chuẩn Visual & Hình Ảnh Nhận Diện Thương Hiệu", img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=500&auto=format&fit=crop" },
                            { title: "Hệ Thống Tự Động Hóa Đồng Bộ Dữ Liệu Lead Bằng n8n", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop" },
                            { title: "Kịch Bản Trợ Lý Ảo AI Chatbot Tư Vấn Chuyên Sâu 24/7", img: "https://images.unsplash.com/photo-1531746790731-6c2079ee777b?q=80&w=500&auto=format&fit=crop" },
                            { title: "Xây Dựng Phễu Chuyển Đổi Landing Page Hiệu Suất Cao", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=500&auto=format&fit=crop" }
                        ].map((project, idx) => (
                            <div key={idx} className="group rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                                <div className="overflow-hidden aspect-[16/10]">
                                    <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                </div>
                                <div className="p-5 border-t border-slate-100">
                                    <h3 className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-orange-600 transition-colors leading-snug">
                                        {project.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ================= SESSION 5: CONTACT & CONVERSION POINT ================= */}
            <section id="lien-he" className="bg-stone-950 text-white py-16 text-center px-6 border-t border-stone-800">
                <div className="max-w-2xl mx-auto space-y-6">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white uppercase">
                        Nâng Tầm Vận Hành Marketing Doanh Nghiệp Bạn?
                    </h3>
                    <p className="text-stone-400 text-sm sm:text-base max-w-lg mx-auto font-light leading-relaxed">
                        Hãy kết nối ngay hôm nay để cùng thảo luận, kiểm tra thực trạng và lên phương án xây dựng ma trận tài sản số độc quyền cho thương hiệu của bạn.
                    </p>
                    <div>
                        <a 
                            href="#form-tu-van" 
                            className="inline-flex items-center gap-2 bg-[#f27830] hover:bg-orange-600 text-white font-extrabold px-8 py-3.5 rounded-full transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-orange-600/10"
                        >
                            Đăng Ký Khảo Sát 1:1 Miễn Phí
                            <Phone className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Các Keyframes CSS cho hiệu ứng Landing Page tự động chạy mượt mà */}
            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes slideRight {
                    from { opacity: 0; transform: translateX(-25px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes slideLeft {
                    from { opacity: 0; transform: translateX(25px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-8px); }
                }
                @keyframes pulseBg {
                    0%, 100% { opacity: 0.5; }
                    50% { opacity: 1; }
                }
            `}</style>

        </div>
    );
}