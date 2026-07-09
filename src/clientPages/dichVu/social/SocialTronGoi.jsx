import React from "react";
import { Phone, XCircle, CheckCircle2 } from "lucide-react";

export default function CmicContentCarePage() {
    return (
        <div className="bg-slate-50 text-slate-900 min-h-screen antialiased overflow-x-hidden font-sans scroll-smooth relative">
            
            {/* Hiệu ứng nền gradient chuyển động nhẹ nhàng */}
            <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-tr from-orange-500/5 via-transparent to-indigo-500/5 animate-[pulseBg_8s_ease-in-out_infinite] -z-10" />

            {/* ================= SESSION 1: HERO SECTION & PREMIUM VIDEO ================= */}
            <section id="hero-top" className="max-w-6xl mx-auto px-6 pt-16 pb-20 text-center opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
                <div className="space-y-4 max-w-4xl mx-auto mb-12">
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-950 leading-tight tracking-tight uppercase">
                        DỊCH VỤ CHĂM SÓC<br />
                        <span className="text-[#f27830]">HỆ SINH THÁI NỘI DUNG ĐA KÊNH THỰC CHIẾN</span>
                    </h1>
                    <div className="bg-[#fff6f0] border border-orange-100/60 rounded-3xl p-6 max-w-3xl mx-auto shadow-sm">
                        <p className="text-slate-700 font-medium text-base sm:text-lg leading-relaxed">
                            Đăng bài ngẫu hứng là cách nhanh nhất để triệt tiêu hiệu quả truyền thông. <span className="text-[#f27830] font-bold">CMIC MEDIA</span> đồng hành cùng bạn xây dựng ma trận nội dung đồng bộ, giáo dục thị trường và biến các kênh mạng xã hội thành phễu thu hút Lead chất lượng cao với chi phí tối ưu nhất.
                        </p>
                    </div>
                </div>

                {/* Khung Video Premium độc lập */}
                <div className="max-w-4xl mx-auto w-full flex flex-col justify-center mb-12 animate-[float_5s_ease-in-out_infinite_0.2s]">
                    <div className="relative w-full aspect-video bg-slate-950 rounded-2xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.25)] border border-slate-200/60 transform hover:scale-[1.01] transition-all duration-500">
                        <iframe
                            className="w-full h-full object-cover"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                            title="CMIC Media Content Introduction Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                {/* Nút Đăng Ký nhận tư vấn mượt mà */}
                <div className="text-center">
                    <button className="relative inline-flex items-center gap-2 bg-[#f27830] text-white font-extrabold px-10 py-4.5 rounded-full text-base sm:text-lg transition-transform hover:scale-105 active:scale-95 shadow-xl group">
                        <div className="absolute inset-1.5 border border-dashed border-black/40 rounded-full pointer-events-none" />
                        <span className="relative z-10 uppercase tracking-wide">ĐĂNG KÝ NHẬN TƯ VẤN</span>
                        <Phone className="relative z-10 w-5 h-5 fill-current" />
                    </button>
                </div>
            </section>


            {/* ================= SESSION 2: THỰC TRẠNG GẶP PHẢI ================= */}
            <section className="py-24 bg-white border-t border-slate-100 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.3s_forwards]">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-2xl sm:text-4xl font-black text-slate-950 leading-tight tracking-tight uppercase">
                            THỰC TRẠNG GẶP PHẢI –<br />
                            <span className="text-[#f27830] block mt-1">BẠN CÓ ĐANG LÀM SOCIAL THEO BẢN NĂNG?</span>
                        </h2>
                        <div className="bg-orange-50 border border-orange-100/70 rounded-2xl p-4.5 mt-5 max-w-3xl mx-auto">
                            <p className="text-slate-700 font-semibold text-sm sm:text-base">
                                Nhiều chủ doanh nghiệp và cá nhân kinh doanh đang tốn rất nhiều thời gian tự mày mò quản lý mạng xã hội nhưng nhận lại kết quả lẹt đẹt:
                            </p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-5 flex justify-center animate-[float_4s_ease-in-out_infinite]">
                            <img 
                                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=600&auto=format&fit=crop" 
                                alt="Social Media Instinct Problem Illustration" 
                                className="w-full max-w-sm rounded-3xl shadow-xl object-cover aspect-[4/3] transition-transform duration-500 hover:scale-105"
                            />
                        </div>

                        <div className="lg:col-span-7 space-y-5">
                            {[
                                "Bài đăng thưa thớt, không theo một lộ trình hay tuyến nội dung (Content Pillar) rõ ràng.",
                                "Hình ảnh, video tự thiết kế bằng AI bị mờ, không đúng yêu cầu, không đáp ứng bộ nhận diện thương hiệu làm giảm uy tín doanh nghiệp.",
                                "Chỉ tập trung vào bài viết bán hàng trực diện khiến người theo dõi nhàm chán và bấm hủy tương tác.",
                                "Không biết cách làm video marketing, chỉ quay rồi đăng lên hoặc viết bài ngẫu hứng, không có chiến lược chuyển đổi trên mạng xã hội."
                            ].map((text, idx) => (
                                <div key={idx} className="flex items-start gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                    <XCircle className="w-7 h-7 text-red-500 flex-shrink-0 mt-0.5 fill-red-500/10" />
                                    <p className="text-slate-700 font-medium text-sm sm:text-base leading-relaxed">
                                        {text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* ================= SESSION 3: GIẢI PHÁP TRỌN GÓI ================= */}
            <section className="py-24 bg-slate-50 border-t border-slate-100 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.5s_forwards]">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-2xl sm:text-4xl font-black text-slate-950 leading-tight tracking-tight uppercase">
                            GIẢI PHÁP TRỌN GÓI TỪ <span className="text-[#f27830]">CMIC MEDIA</span>
                        </h2>
                        <div className="bg-white border border-slate-200 rounded-2xl p-5 mt-5 max-w-3xl mx-auto shadow-sm">
                            <p className="text-slate-700 font-medium text-sm sm:text-base leading-relaxed">
                                Chúng tôi tiếp cận hệ sinh thái mạng xã hội bằng tư duy chiến lược dài hạn, tập trung vào việc gọi đúng vấn đề - tạo dựng niềm tin - dẫn dắt nhu cầu - chuyển đổi.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            { step: "1", title: "XÂY DỰNG BỘ QUY CHUẨN VISUAL", desc: "Thiết kế khung ảnh, phong cách màu sắc nhất quán cho toàn bộ các kênh, tạo độ nhận diện thương hiệu sâu sắc ngay từ cái nhìn đầu tiên." },
                            { step: "2", title: "ĐA DẠNG HÓA ĐỊNH DẠNG NỘI DUNG", desc: "Kết hợp linh hoạt giữa bài viết nhận diện, phân tích chuyên sâu, hình ảnh graphic trực quan, video ngắn, video dài và tài liệu đi kèm giá trị." },
                            { step: "3", title: "QUẢN TRỊ VÀ TỐI ƯU THEO DỮ LIỆU", desc: "Đo lường các chỉ số phản ánh hiệu suất nội dung, khung giờ vàng của tệp khách hàng mục tiêu để liên tục cải tiến chất lượng thành phẩm." }
                        ].map((item, idx) => (
                            <div key={idx} className="relative bg-[#f27830] text-white p-8 rounded-[2rem] shadow-lg transition-transform duration-300 hover:-translate-y-2 mt-4 md:mt-0">
                                <div className="absolute -top-5 -left-3 w-12 h-14 bg-stone-950 text-white rounded-2xl flex items-center justify-center text-xl font-black border-2 border-white shadow-md">
                                    {item.step}
                                </div>
                                <h3 className="text-base sm:text-lg font-black uppercase tracking-wide border-b border-white/20 pb-3 mb-4 text-center pt-2 min-h-[56px] flex items-center justify-center">
                                    {item.title}
                                </h3>
                                <p className="text-xs sm:text-sm leading-relaxed opacity-95 font-medium text-justify">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ================= SESSION 4: CÁC GÓI DỊCH VỤ CHĂM SÓC SOCIAL (SỬ DỤNG ICON TỪ PUBLIC) ================= */}
            <section className="py-24 bg-white border-t border-slate-100 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.7s_forwards]">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight uppercase">
                            CÁC GÓI DỊCH VỤ<br />
                            <span className="text-[#f27830] block mt-1">CHĂM SÓC SOCIAL</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                        {[
                            { channel: "CHĂM SÓC FANPAGE", iconPath: "/zalo.webp", desc: "Facebook vẫn là chiến trường tạo phễu và giữ chân khách hàng lớn nhất tại Việt Nam. CMIC MEDIA thay doanh nghiệp quản trị Fanpage toàn diện, xây dựng nội dung tương tác thực, chuẩn hóa hình ảnh nhận diện và biến Fanpage thành bộ mặt trực tuyến uy tín hàng đầu của bạn." },
                            { channel: "CHĂM SÓC INSTAGRAM", iconPath: null, desc: "Đối với các ngành hàng yêu cầu cao về mặt hình ảnh, phong cách và trải nghiệm thị giác của phân khúc khách hàng hiện đại, Instagram là kênh không thể bỏ qua. CMIC MEDIA giúp doanh nghiệp kiến tạo một trang Instagram nghệ thuật, đồng bộ và cuốn hút." },
                            { channel: "CHĂM SÓC YOUTUBE", iconPath: "/YouTube.png", desc: "Video dài trên YouTube là công cụ mạnh mẽ nhất để xây dựng niềm tin tuyệt đối với khách hàng trước khi họ ra quyết định ký hợp đồng giá trị cao. CMIC MEDIA chịu trách nhiệm chuẩn hóa, tối ưu kỹ thuật SEO và quản trị vận hành kênh YouTube chuyên nghiệp cho doanh nghiệp của bạn." },
                            { channel: "CHĂM SÓC TIKTOK", iconPath: "/tiktok.png", desc: "Bạn muốn xây dựng thương hiệu cá nhân thành một chuyên gia trong ngành, hay muốn thương hiệu doanh nghiệp tiếp cận với đúng tệp khách hàng? Kênh TikTok do CMIC MEDIA vận hành không hướng đến những lượt view 'nhảm nhí', chúng tôi hỗ trợ bạn tạo ra những video ngắn bám sát định hướng kinh doanh." },
                            { channel: "CHĂM SÓC LINKEDIN", iconPath: null, desc: "LinkedIn là thánh địa dành riêng cho các mối quan hệ doanh nghiệp với doanh nghiệp (B2B), các chủ doanh nghiệp lớn và đối tác chiến lược. CMIC MEDIA giúp bạn xây dựng trang cá nhân và trang doanh nghiệp trên LinkedIn với các nội dung giáo dục chuẩn mực, theo hướng chuyên gia để mở khóa những cơ hội hợp tác nghìn đô." },
                            { channel: "EMAIL MARKETING", iconPath: null, desc: "Chi phí để thu hút một khách hàng mới (CAC) ngày càng đắt đỏ. Nếu bạn thu thập dữ liệu khách hàng từ các điểm chạm rồi bỏ quên, bạn đang lãng phí tiền bạc. CMIC MEDIA thiết kế hệ thống Email Marketing tự động hóa hoàn toàn, liên tục tương tác và khai thác tối đa giá trị từ tệp data của bạn." }
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col h-full bg-[#f27830] text-white p-7 rounded-[2rem] shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                                <div className="border-b border-white/20 pb-4 mb-4 flex items-center justify-between">
                                    <h3 className="text-base sm:text-lg font-black tracking-wide uppercase">
                                        {item.channel}
                                    </h3>
                                    
                                    {/* Nhúng trực tiếp logo từ thư mục public, nếu không có file ảnh thì dùng chữ đại diện */}
                                    {item.iconPath ? (
                                        <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center p-1.5 shadow-md">
                                            <img src={item.iconPath} alt={`${item.channel} icon`} className="w-full h-full object-contain" />
                                        </div>
                                    ) : (
                                        <span className="w-8 h-8 rounded-full bg-stone-950 border-2 border-white flex items-center justify-center font-bold text-xs shadow-inner">
                                            {item.channel.split(" ")[2]?.charAt(0) || "E"}
                                        </span>
                                    )}
                                </div>
                                <p className="text-xs sm:text-sm leading-relaxed opacity-95 font-medium text-justify flex-1">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Nút CTA phụ trợ chuẩn chỉnh */}
                    <div className="text-center relative max-w-sm mx-auto">
                        <a href="#hero-top" className="relative inline-flex items-center gap-2 bg-[#f27830] text-white font-extrabold px-8 py-4 rounded-full transition-transform hover:scale-105 active:scale-95 shadow-lg group w-full justify-center">
                            <div className="absolute inset-1 border border-dashed border-black/40 rounded-full pointer-events-none" />
                            <span className="relative z-10 uppercase text-sm">ĐĂNG KÝ NHẬN TƯ VẤN</span>
                            <Phone className="relative z-10 w-4 h-4 fill-current" />
                        </a>
                    </div>
                </div>
            </section>


            {/* ================= SESSION 5: MỘT SỐ DỰ ÁN TIÊU BIỂU ================= */}
            <section className="bg-slate-50 py-20 border-t border-slate-100 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.9s_forwards]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight uppercase">
                            Một số dự án tiêu biểu
                        </h2>
                        <p className="text-slate-500 text-sm mt-2 font-medium">Hệ thống ma trận phân phối nội dung đa kênh mang về tăng trưởng vượt bậc</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
                        {[
                            { title: "Bài viết định hướng Fanpage & Bài đăng cộng đồng", img: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=500&auto=format&fit=crop" },
                            { title: "Sản xuất bộ Visual Graphic, Banner truyền thông", img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=500&auto=format&fit=crop" },
                            { title: "Chuỗi chiến dịch Video ngắn Reels/Tiktok đa nền tảng", img: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=500&auto=format&fit=crop" },
                            { title: "Video tư vấn dài chuyên sâu tích hợp kênh Youtube", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=500&auto=format&fit=crop" },
                            { title: "Dashboard báo cáo hiệu suất nội dung Meta Business", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop" }
                        ].map((project, idx) => (
                            <div key={idx} className="group rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                                <div className="overflow-hidden aspect-[4/3]">
                                    <img 
                                        src={project.img} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-5 border-t border-slate-100 bg-white">
                                    <h3 className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-orange-600 transition-colors leading-snug">
                                        {project.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Keyframes key gốc */}
            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(24px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                @keyframes pulseBg {
                    0%, 100% { opacity: 0.6; }
                    50% { opacity: 1; }
                }
            `}</style>

        </div>
    );
}