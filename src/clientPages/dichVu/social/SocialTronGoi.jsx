import React, { useEffect, useRef, useState } from "react";
import { XCircle } from "lucide-react";

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

export default function CmicContentCarePage() {
    const [heroRef, heroRevealed] = useScrollReveal();
    const [probTitleRef, probTitleRevealed] = useScrollReveal();
    const [probContentRef, probRevealed] = useScrollReveal();
    const [valRef, valRevealed] = useScrollReveal();
    const [sec1Ref, sec1Revealed] = useScrollReveal();
    const [sec2Ref, sec2Revealed] = useScrollReveal();
    const [sec3Ref, sec3Revealed] = useScrollReveal();
    const [sec4Ref, sec4Revealed] = useScrollReveal();

    return (
        <div className="bg-[#faf8f6] text-neutral-800 min-h-screen antialiased overflow-x-hidden font-sans scroll-smooth relative">
            
            {/* ================= SECTION 1: HERO SECTION & PREMIUM VIDEO ================= */}
            <section id="hero-top" className="max-w-6xl mx-auto px-6 pt-24 pb-20 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7 space-y-6 text-left">
                        <div className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-[#ed792f]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ed792f]" />
                            Dịch vụ chăm sóc
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 leading-tight tracking-tight uppercase">
                            DỊCH VỤ CHĂM SÓC<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ed792f] to-[#ff8e42]">HỆ SINH THÁI NỘI DUNG ĐA KÊNH THỰC CHIẾN</span>
                        </h1>
                        <p className="text-neutral-500 leading-relaxed text-sm sm:text-base text-justify">
                            Đăng bài ngẫu hứng là cách nhanh nhất để triệt tiêu hiệu quả truyền thông. CMIC MEDIA đồng hành cùng bạn xây dựng ma trận nội dung đồng bộ, giáo dục thị trường và biến các kênh mạng xã hội thành phễu thu hút Lead chất lượng cao với chi phí tối ưu nhất.
                        </p>
                        <div className="pt-2">
                            <a href="#register-bottom" className="inline-flex items-center bg-[#ed792f] text-white font-medium text-xs px-6 py-3 rounded-lg hover:bg-neutral-950 transition-all duration-300 shadow-sm uppercase tracking-wider">
                                Đăng ký nhận tư vấn
                            </a>
                        </div>
                    </div>

                    {/* Khung Video Premium cân bằng bên phải */}
                    <div className="lg:col-span-5 w-full animate-[float_5s_ease-in-out_infinite_0.2s]">
                        <div className="relative w-full aspect-video bg-neutral-100 rounded-xl overflow-hidden border border-neutral-200/60 shadow-sm">
                            <iframe
                                className="w-full h-full object-cover"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                                title="CMIC Media Content Introduction Video"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>


            {/* ================= SECTION 2: THỰC TRẠNG GẶP PHẢI ================= */}
            <section className="py-24 bg-white border-y border-neutral-200/40 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    
                    {/* Cột tiêu đề đối xứng bên trái có gắn hiệu ứng cuộn chuột xuất hiện */}
                    <div 
                        ref={probTitleRef}
                        className={`space-y-4 transition-all duration-1000 ease-out transform ${
                            probTitleRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        }`}
                    >
                        <span className="text-[11px] font-medium tracking-wider text-[#ed792f] uppercase block">Nhận diện vấn đề</span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 leading-tight tracking-tight uppercase">
                            THỰC TRẠNG GẶP PHẢI –<br />
                            <span className="text-[#ed792f] block mt-1">BẠN CÓ ĐANG LÀM SOCIAL THEO BẢN NĂNG?</span>
                        </h2>
                        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed text-justify font-normal pt-2">
                            Nhiều chủ doanh nghiệp và cá nhân kinh doanh đang tốn rất nhiều thời gian tự mày mò quản lý mạng xã hội nhưng nhận lại kết quả lẹt đẹt:
                        </p>
                        <div className="w-12 h-[2px] bg-[#ed792f]" />
                    </div>

                    {/* Cột danh sách lỗi căn chỉnh ngay ngắn bên phải */}
                    <div 
                        ref={probContentRef}
                        className={`space-y-6 transition-all duration-1000 ease-out delay-150 transform ${
                            probRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        }`}
                    >
                        <div className="relative w-full aspect-video bg-neutral-100 rounded-xl overflow-hidden border border-neutral-200/60 shadow-sm mb-4">
                            <img 
                                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=600&auto=format&fit=crop" 
                                alt="Social Media Instinct Problem Illustration" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="divide-y divide-neutral-100">
                            {[
                                "Bài đăng thưa thớt, không theo một lộ trình hay tuyến nội dung (Content Pillar) rõ ràng.",
                                "Hình ảnh, video tự thiết kế bằng AI bị mờ, không đúng yêu cầu, không đáp ứng bộ nhận diện thương hiệu làm giảm uy tín doanh nghiệp.",
                                "Chỉ tập trung vào bài viết bán hàng trực diện khiến người theo dõi nhàm chán và bấm hủy tương tác.",
                                "Không biết cách làm video marketing, chỉ quay rồi đăng lên hoặc viết bài ngẫu hứng, không có chiến lược chuyển đổi trên mạng xã hội."
                            ].map((text, idx) => (
                                <div key={idx} className="py-4 first:pt-0 last:pb-0 flex items-start gap-3">
                                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                                    <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed text-justify">
                                        {text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>


            {/* ================= SECTION 3: GIẢI PHÁP TRỌN GÓI ================= */}
            <section 
                ref={valRef}
                className={`py-24 max-w-6xl mx-auto px-6 transition-all duration-[1000ms] ease-out transform ${
                    valRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
            >
                <div className="mb-16 space-y-3">
                    <span className="text-[11px] font-medium tracking-wider text-[#ed792f] uppercase block">Tư duy chiến lược</span>
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 uppercase">
                        GIẢI PHÁP TRỌN GÓI TỪ CMIC MEDIA
                    </h2>
                    <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed text-justify max-w-3xl">
                        Chúng tôi tiếp cận hệ sinh thái mạng xã hội bằng tư duy chiến lược dài hạn, tập trung vào việc gọi đúng vấn đề - tạo dựng niềm tin - dẫn dắt nhu cầu - chuyển đổi.
                    </p>
                </div>

                {/* Lưới 3 cột mở phân tách bằng đường kẻ t */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { step: "01", title: "XÂY DỰNG BỘ QUY CHUẨN VISUAL", desc: "Thiết kế khung ảnh, phong cách màu sắc nhất quán cho toàn bộ các kênh, tạo độ nhận diện thương hiệu sâu sắc ngay từ cái nhìn đầu tiên." },
                        { step: "02", title: "ĐA DẠNG HÓA ĐỊNH DẠNG NỘI DUNG", desc: "Kết hợp linh hoạt giữa bài viết nhận diện, phân tích chuyên sâu, hình ảnh graphic trực quan, video ngắn, video dài và tài liệu đi kèm giá trị." },
                        { step: "03", title: "QUẢN TRỊ VÀ TỐI ƯU THEO DỮ LIỆU", desc: "Đo lường các chỉ số phản ánh hiệu suất nội dung, khung giờ vàng của tệp khách hàng mục tiêu để liên tục cải tiến chất lượng thành phẩm." }
                    ].map((item, idx) => (
                        <div key={idx} className="space-y-4 border-t border-neutral-200/60 pt-6 group">
                            <div className="flex items-baseline gap-2">
                                <span className="text-xs font-mono font-bold text-neutral-400 group-hover:text-[#ed792f] transition-colors">{item.step} /</span>
                                <h3 className="text-base font-bold text-neutral-900 uppercase tracking-wide">
                                    {item.title}
                                </h3>
                            </div>
                            <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-normal text-justify">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>


            {/* ================= SECTION 4: CÁC GÓI DỊCH VỤ CHĂM SÓC SOCIAL ================= */}
            <section className="py-24 bg-white border-t border-neutral-200/40 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-16 space-y-2">
                        <span className="text-[11px] font-medium tracking-wider text-[#ed792f] uppercase block">Danh mục kênh vận hành</span>
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 uppercase">
                            CÁC GÓI DỊCH VỤ CHĂM SÓC SOCIAL
                        </h2>
                        <div className="w-12 h-[2px] bg-[#ed792f] mt-2" />
                    </div>

                    {/* Lưới 3 cột dịch vụ đồng đều cân đối */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {[
                            { channel: "CHĂM SÓC FANPAGE", iconText: "FB", desc: "Facebook vẫn là chiến trường tạo phễu và giữ chân khách hàng lớn nhất tại Việt Nam. CMIC MEDIA thay doanh nghiệp quản trị Fanpage toàn diện, xây dựng nội dung tương tác thực, chuẩn hóa hình ảnh nhận diện và biến Fanpage thành bộ mặt trực tuyến uy tín hàng đầu của bạn." },
                            { channel: "CHĂM SÓC INSTAGRAM", iconText: "IG", desc: "Đối với các ngành hàng yêu cầu cao về mặt hình ảnh, phong cách và trải nghiệm thị giác của phân khúc khách hàng hiện đại, Instagram là kênh không thể bỏ qua. CMIC MEDIA giúp doanh nghiệp kiến tạo một trang Instagram nghệ thuật, đồng bộ và cuốn hút." },
                            { channel: "CHĂM SÓC YOUTUBE", iconText: "YT", desc: "Video dài trên YouTube là công cụ mạnh mẽ nhất để xây dựng niềm tin tuyệt đối với khách hàng trước khi họ ra quyết định ký hợp đồng giá trị cao. CMIC MEDIA chịu trách nhiệm chuẩn hóa, tối ưu kỹ thuật SEO và quản trị vận hành kênh YouTube chuyên nghiệp cho doanh nghiệp của bạn." },
                            { channel: "CHĂM SÓC TIKTOK", iconText: "TT", desc: "Bạn muốn xây dựng thương hiệu cá nhân thành một chuyên gia trong ngành, hay muốn thương hiệu doanh nghiệp tiếp cận với đúng tệp khách hàng? Kênh TikTok do CMIC MEDIA vận hành không hướng đến những lượt view 'nhảm nhí', chúng tôi hỗ trợ bạn tạo ra những video ngắn bám sát định hướng kinh doanh." },
                            { channel: "CHĂM SÓC LINKEDIN", iconText: "LN", desc: "LinkedIn là thánh địa dành riêng cho các mối quan hệ doanh nghiệp với doanh nghiệp (B2B), các chủ doanh nghiệp lớn và đối tác chiến lược. CMIC MEDIA giúp bạn xây dựng trang cá nhân và trang doanh nghiệp trên LinkedIn với các nội dung giáo dục chuẩn mực, theo hướng chuyên gia để mở khóa những cơ hội hợp tác nghìn đô." },
                            { channel: "EMAIL MARKETING", iconText: "EM", desc: "Chi phí để thu hút một khách hàng mới (CAC) ngày càng đắt đỏ. Nếu bạn thu thập dữ liệu khách hàng từ các điểm chạm rồi bỏ quên, bạn đang lãng phí tiền bạc. CMIC MEDIA thiết kế hệ thống Email Marketing tự động hóa hoàn toàn, liên tục tương tác và khai thác tối đa giá trị từ tệp data của bạn." }
                        ].map((item, idx) => (
                            <div key={idx} className="space-y-4 border-t border-neutral-200/60 pt-5 flex flex-col justify-between group">
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-base font-bold text-neutral-900 group-hover:text-[#ed792f] transition-colors uppercase tracking-wide">
                                            {item.channel}
                                        </h3>
                                        <span className="w-7 h-7 rounded-lg bg-neutral-50 border border-neutral-200/60 flex items-center justify-center font-mono font-bold text-[10px] text-neutral-400 group-hover:bg-[#ed792f]/10 group-hover:text-[#ed792f] transition-colors">
                                            {item.iconText}
                                        </span>
                                    </div>
                                    <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-normal text-justify">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ================= SECTION 5: MỘT SỐ DỰ ÁN TIÊU BIỂU ================= */}
            <section className="bg-[#faf8f6] py-24 border-t border-neutral-200/40 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-16 space-y-2">
                        <span className="text-[11px] font-medium tracking-wider text-[#ed792f] uppercase block">Case studies</span>
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 uppercase">
                            Một số dự án tiêu biểu
                        </h2>
                        <p className="text-xs sm:text-sm text-neutral-500 font-normal">Hệ thống ma trận phân phối nội dung đa kênh mang về tăng trưởng vượt bậc</p>
                    </div>

                    {/* Grid Dự Án đối xứng bo góc mềm mịn */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
                        {[
                            { title: "Bài viết định hướng Fanpage & Bài đăng cộng đồng", img: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=500&auto=format&fit=crop" },
                            { title: "Sản xuất bộ Visual Graphic, Banner truyền thông", img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=500&auto=format&fit=crop" },
                            { title: "Chuỗi chiến dịch Video ngắn Reels/Tiktok đa nền tảng", img: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=500&auto=format&fit=crop" },
                            { title: "Video tư vấn dài chuyên sâu tích hợp kênh Youtube", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=500&auto=format&fit=crop" },
                            { title: "Dashboard báo cáo hiệu suất nội dung Meta Business", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop" }
                        ].map((project, idx) => (
                            <div key={idx} className="group rounded-xl overflow-hidden border border-neutral-200/60 shadow-sm bg-white flex flex-col justify-between">
                                <div className="overflow-hidden aspect-[4/3]">
                                    <img 
                                        src={project.img} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                                    />
                                </div>
                                <div className="p-4 bg-white">
                                    <h3 className="font-semibold text-neutral-900 text-xs sm:text-sm group-hover:text-[#ed792f] transition-colors leading-snug">
                                        {project.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION REGISTRATION BOTTOM BUTTON ONLY (Đã lược bỏ hoàn toàn Footer) */}
            <section id="register-bottom" className="bg-neutral-950 py-16 text-center px-6">
                <div className="max-w-4xl mx-auto space-y-6">
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                        Sẵn sàng bứt phá doanh thu cùng hệ thống tài sản số?
                    </h3>
                    <div className="flex justify-center">
                        <button className="bg-[#ed792f] hover:bg-[#d66520] text-white text-xs font-medium px-6 py-3 rounded-lg transition-all duration-300 shadow-sm">
                            Nhận tư vấn chiến lược miễn phí
                        </button>
                    </div>
                </div>
            </section>

            {/* CSS Keyframe Animations */}
            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(12px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-8px); }
                }
            `}</style>

        </div>
    );
}