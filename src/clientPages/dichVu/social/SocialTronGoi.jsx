import React, { useEffect, useRef, useState } from "react";
import { Phone, XCircle } from "lucide-react";
import ContactForm from "../../../components/FormContact";

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

// ================= HERO SECTION (ĐÃ GỘP CONTACT KHÔNG VIỀN/NỀN) =================
function HeroSection() {
    return (
        <section id="hero-top" className="relative max-w-5xl mx-auto px-6 pt-20 pb-16 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
            <div
                className="absolute inset-0 w-screen left-1/2 -translate-x-1/2 pointer-events-none z-0 scale-x-110"
                style={{
                    backgroundImage: `url('/social/bg1.png')`,
                    backgroundPosition: 'center center',
                    backgroundSize: '100% 100%',
                    backgroundRepeat: 'no-repeat'
                }}
            />

            <div className="relative z-10 flex flex-col items-center text-center space-y-12">
                {/* Tiêu đề căn giữa */}
                <h1 className="text-xl sm:text-2xl md:text-[40px] font-extrabold text-neutral-900 leading-snug tracking-tight uppercase">
                    DỊCH VỤ CHĂM SÓC HỆ SINH THÁI NỘI DUNG<br />
                    <span className="text-[#ed792f] block mt-1">ĐA KÊNH THỰC CHIẾN CHO SME</span>
                </h1>

                {/* Khung Video Premium căn giữa */}
                <div className="w-full max-w-4xl animate-[float_5s_ease-in-out_infinite_0.2s]">
                    <div className="relative w-full aspect-video bg-neutral-100 rounded-xl overflow-hidden border border-neutral-200/60 shadow-lg">
                        <iframe
                            className="w-full h-full object-cover"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            title="CMIC Media Content Introduction Video"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                {/* Đoạn mô tả */}
                <p className="text-neutral-700 leading-relaxed text-base sm:text-lg max-w-4xl mx-auto text-center font-medium">
                    Đăng bài ngẫu hứng là cách nhanh nhất để triệt tiêu hiệu quả truyền thông. CMIC MEDIA đồng hành cùng bạn xây dựng ma trận nội dung đồng bộ, giáo dục thị trường và biến các kênh mạng xã hội thành phễu thu hút lead chất lượng cao với chi phí tối ưu nhất.
                </p>

                {/* Phần Form đăng ký */}
                <div id="register-bottom" className="w-full max-w-2xl mx-auto space-y-6 pt-4">
                    <div className="w-full">
                        <ContactForm />
                    </div>
                </div>

            </div>
        </section>
    );
}

// ================= BRAND MARQUEE & PAIN POINTS SECTION =================
function BrandMarqueeSection() {
    const icons = [
        { src: "/facebook.png", alt: "Facebook" },
        { src: "/tiktok.png", alt: "Tiktok" },
        { src: "/YouTube.png", alt: "Youtube" },
        { src: "/instagram.jpg", alt: "Instagram" },
        { src: "/linkedin.png", alt: "LinkedIn" },
    ];

    return (
        <section className="py-16 bg-[#faf8f6] overflow-hidden border-y border-neutral-200/40">
            <div className="max-w-6xl mx-auto px-6 space-y-16">
                {/* Phần Marquee icon mạng xã hội */}
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <p className="text-neutral-800 text-base sm:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
                        Nhiều chủ doanh nghiệp và cá nhân kinh doanh đang tốn rất nhiều thời gian tự mày mò quản lý mạng xã hội...
                    </p>

                    <div className="relative w-full overflow-hidden flex">
                        <div className="flex w-max animate-[marquee_25s_linear_infinite] items-center gap-16 sm:gap-24">
                            {[...icons, ...icons, ...icons].map((item, index) => (
                                <div key={index} className="flex items-center justify-center shrink-0">
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        className="w-12 h-12 sm:w-14 sm:h-14 object-contain transition-transform duration-300 hover:scale-110 drop-shadow-sm"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Phần: NHƯNG NHẬN LẠI KẾT QUẢ LẸT ĐẸT */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-10">
                    <div className="lg:col-span-7 space-y-8">
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight uppercase">
                            NHƯNG NHẬN LẠI KẾT QUẢ <span className="text-red-600">LẸT ĐẸT</span>
                        </h2>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="shrink-0 mt-1">
                                    <XCircle className="w-8 h-8 text-red-600 fill-red-50" />
                                </div>
                                <p className="text-neutral-700 text-base sm:text-lg leading-relaxed font-normal">
                                    Bài đăng thưa thớt, không theo một lộ trình hay tuyến nội dung rõ ràng để đạt mục tiêu kinh doanh.
                                </p>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="shrink-0 mt-1">
                                    <XCircle className="w-8 h-8 text-red-600 fill-red-50" />
                                </div>
                                <p className="text-neutral-700 text-base sm:text-lg leading-relaxed font-normal">
                                    Hình ảnh tự thiết kế bằng công cụ miễn phí bị mờ, không đúng kích thước chuẩn, bố cục lộn xộn làm giảm uy tín thương hiệu.
                                </p>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="shrink-0 mt-1">
                                    <XCircle className="w-8 h-8 text-red-600 fill-red-50" />
                                </div>
                                <p className="text-neutral-700 text-base sm:text-lg leading-relaxed font-normal">
                                    Chỉ tập trung vào bài viết bán hàng trực diện khiến người theo dõi nhàm chán và bấm hủy tương tác.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 flex justify-center">
                        <div className="w-full max-w-md">
                            <img
                                src="/social/img1.png"
                                alt="Kết quả lẹt đẹt khi tự làm nội dung"
                                className="w-full h-auto object-contain drop-shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ================= SOLUTION SECTION COMPONENT (SECTION 4) =================
function SolutionSection() {
    return (
        <section className="py-14 bg-white overflow-hidden">
            {/* Thêm max-w-6xl và mx-auto để ảnh nền giới hạn bằng khung nội dung */}
            <div className="relative max-w-7xl mx-auto px-6 py-8 space-y-8">
                {/* Ảnh nền có giới hạn chiều rộng */}
                <div
                    className="absolute inset-0 pointer-events-none z-0 rounded-2xl"
                    style={{
                        backgroundImage: `url('/social/bg3.png')`,
                        backgroundPosition: 'center center',
                        backgroundSize: '100% 100%',
                        backgroundRepeat: 'no-repeat'
                    }}
                />

                {/* Nội dung bên trong (để nổi lên trên ảnh nền) */}
                <div className="relative z-10 text-center">
                    <h2 className="text-xl sm:text-2xl font-extrabold text-neutral-900 uppercase tracking-tight">
                        GIẢI PHÁP TRỌN GÓI TỪ <span className="text-[#ed792f]">CMIC MEDIA</span>
                    </h2>
                </div>

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
                    <div className="flex flex-col space-y-4 text-center md:text-left">
                        <h3 className="text-xl font-bold text-neutral-900 min-h-[56px] flex items-center justify-center md:justify-start">
                            Thiết kế nhận diện thương hiệu
                        </h3>
                        <p className="text-neutral-600 text-base leading-relaxed">
                            Không chỉ dừng lại ở logo, đây là hệ thống quy chuẩn toàn diện từ màu sắc, phông chữ đến ấn phẩm truyền thông, giúp thương hiệu luôn nổi bật, chuyên nghiệp và khắc sâu vào tâm trí khách hàng.
                        </p>
                    </div>

                    <div className="flex flex-col space-y-4 text-center md:text-left">
                        <h3 className="text-xl font-bold text-[#ed792f] min-h-[56px] flex items-center justify-center md:justify-start">
                            Nội dung đa dạng hoá
                        </h3>
                        <p className="text-neutral-600 text-base leading-relaxed">
                            Kết hợp linh hoạt giữa bài viết nhận diện, phân tích chuyên sâu, hình ảnh graphic trực quan, video ngắn, video dài và tài liệu đi kèm giá trị.
                        </p>
                    </div>

                    <div className="flex flex-col space-y-4 text-center md:text-left">
                        <h3 className="text-xl font-bold text-neutral-900 min-h-[56px] flex items-center justify-center md:justify-start">
                            Tối ưu theo dữ liệu
                        </h3>
                        <p className="text-neutral-600 text-base leading-relaxed">
                            Chuyển hóa các chỉ số marketing thực tế thành hành động cải tiến cụ thể. Bằng cách phân tích sâu hành vi và hiệu suất, chúng tôi tinh chỉnh chiến dịch liên tục nhằm thúc đẩy chuyển đổi và tối đa hóa mục tiêu kinh doanh của doanh nghiệp.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ================= SERVICES SECTION (SECTION 5 - CÁC GÓI DỊCH VỤ) =================
function ServicesSection() {
    const servicesTop = [
        {
            title: 'CHĂM SÓC FANPAGE',
            description: 'Facebook vẫn là chiến trường tạo phễu và giữ chân khách hàng lớn nhất tại Việt Nam. CMIC MEDIA thay doanh nghiệp quản trị Fanpage toàn diện, xây dựng nội dung tương tác thực, chuẩn hóa hình ảnh nhận diện và biến Fanpage thành bộ mặt trực tuyến uy tín hàng đầu của bạn.',
            icon: '/facebook.png',
        },
        {
            title: 'CHĂM SÓC INSTAGRAM',
            description: 'Đối với các ngành hàng yêu cầu cao về mặt hình ảnh, phong cách và trải nghiệm thị giác của phân khúc khách hàng hiện đại, Instagram là kênh không thể bỏ qua. CMIC MEDIA giúp doanh nghiệp kiến tạo một trang Instagram nghệ thuật, đồng bộ và cuốn hút.',
            icon: '/instagram.jpg',
        },
        {
            title: 'CHĂM SÓC YOUTUBE',
            description: 'Video dài trên YouTube là công cụ mạnh mẽ nhất để xây dựng niềm tin tuyệt đối với khách hàng trước khi họ ra quyết định ký hợp đồng giá trị cao. CMIC MEDIA chịu trách nhiệm chuẩn hóa, tối ưu kỹ thuật SEO và quản trị vận hành kênh YouTube chuyên nghiệp cho doanh nghiệp của bạn.',
            icon: '/YouTube.png',
        },
        {
            title: 'CHĂM SÓC TIKTOK',
            description: 'Bạn muốn đầu tư lâu dài cho thương hiệu cá nhân, hay muốn thương hiệu doanh nghiệp nhanh chóng phủ sóng và tiếp cận khách hàng mục tiêu? Kênh TikTok do CMIC MEDIA vận hành không hướng đến những lượt view “nhảm nhí”, chúng tôi tạo ra những video ngắn có chuyển đổi cao.',
            icon: '/tiktok.png',
        }
    ];

    return (
        <section className="bg-white overflow-hidden relative pb-32">
            {/* Ảnh nền bg5.png đặt ở bottom của section */}
            <div
                className="absolute bottom-20 left-0 right-0 h-64 md:h-200 pointer-events-none z-0"
                style={{
                    backgroundImage: `url('/social/bg5.png')`,
                    backgroundPosition: '80% 100%',
                    backgroundSize: '100% 100%',
                    backgroundRepeat: 'no-repeat'
                }}
            />

            <div className="max-w-6xl mx-auto px-6 relative z-10">

                <div className="relative flex flex-col items-center mb-20 pt-16">
                    <div className="bg-[#ed792f] text-white rounded-2xl py-6 px-12 text-center shadow-xl z-10">
                        <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wider leading-snug">
                            CÁC GÓI<br />DỊCH VỤ
                        </h2>
                    </div>
                    <div className="w-0 h-0 border-l-[24px] border-l-transparent border-r-[24px] border-r-transparent border-t-[30px] border-t-[#ed792f] -mt-1 z-10"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-24 relative mb-20">
                    <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 border-l-2 border-dashed border-neutral-300 hidden md:block z-0"></div>

                    {/* 1. Fanpage */}
                    <div className="flex flex-col md:flex-row-reverse items-center md:items-start text-center md:text-right gap-6 relative z-10">
                        <div className="shrink-0">
                            <img src={servicesTop[0].icon} alt="Facebook" className="w-14 h-14 object-contain drop-shadow-sm" />
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-xl font-extrabold text-neutral-900 uppercase tracking-tight">{servicesTop[0].title}</h3>
                            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">{servicesTop[0].description}</p>
                        </div>
                    </div>

                    {/* 2. Instagram */}
                    <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 relative z-10">
                        <div className="shrink-0">
                            <img src={servicesTop[1].icon} alt="Instagram" className="w-14 h-14 object-contain drop-shadow-sm" />
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-xl font-extrabold text-neutral-900 uppercase tracking-tight">{servicesTop[1].title}</h3>
                            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">{servicesTop[1].description}</p>
                        </div>
                    </div>

                    {/* 3. Youtube */}
                    <div className="flex flex-col md:flex-row-reverse items-center md:items-start text-center md:text-right gap-6 relative z-10 pt-6">
                        <div className="shrink-0">
                            <img src={servicesTop[2].icon} alt="Youtube" className="w-14 h-14 object-contain drop-shadow-sm" />
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-xl font-extrabold text-neutral-900 uppercase tracking-tight">{servicesTop[2].title}</h3>
                            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">{servicesTop[2].description}</p>
                        </div>
                    </div>

                    {/* 4. Tiktok */}
                    <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 relative z-10 pt-6">
                        <div className="shrink-0">
                            <img src={servicesTop[3].icon} alt="Tiktok" className="w-14 h-14 object-contain drop-shadow-sm" />
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-xl font-extrabold text-neutral-900 uppercase tracking-tight">{servicesTop[3].title}</h3>
                            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">{servicesTop[3].description}</p>
                        </div>
                    </div>
                </div>

                {/* LinkedIn */}
                <div className="relative max-w-2xl mx-auto px-8 text-center space-y-6 z-10">
                    <div className="flex justify-center">
                        <div className="shrink-0">
                            <img src="/linkedin.png" alt="LinkedIn" className="w-14 h-14 object-contain drop-shadow-sm" />
                        </div>
                    </div>
                    <h3 className="text-xl font-extrabold text-neutral-900 uppercase tracking-tight">CHĂM SÓC LINKEDIN</h3>
                    <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                        LinkedIn là thánh địa dành riêng cho các mối quan hệ doanh nghiệp với doanh nghiệp (B2B), các chủ doanh nghiệp lớn và đối tác chiến lược. CMIC MEDIA giúp bạn xây dựng trang cá nhân và trang doanh nghiệp trên LinkedIn với các nội dung chuẩn mực, tư duy vĩ mô để mở khóa những cơ hội hợp tác nghìn đô.
                    </p>
                </div>

            </div>
        </section>
    );
}

// ================= PORTFOLIO & CTA SECTION (SECTION 6) =================
function PortfolioSection() {
    // 4 hình ảnh mẫu dự án thực tế trong ảnh 1
    const portfolioImages = [
        "/social/img2.png",
        "/social/img3.png",
        "/social/img4.png",
        "/social/img5.png",
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 space-y-16">

                {/* Lưới hiển thị 4 hình ảnh dự án thực tế */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
                    {portfolioImages.map((imgSrc, index) => (
                        <div key={index} className="transition-transform duration-300 hover:-translate-y-1">
                            <img
                                src={imgSrc}
                                alt={`Dự án thực tế ${index + 1}`}
                                className="w-full h-auto object-cover rounded-lg"
                            />
                        </div>
                    ))}
                </div>

                {/* Nút CTA: ĐĂNG KÝ NHẬN TƯ VẤN kèm icon điện thoại */}
                <div className="flex justify-center pt-6">
                    <a
                        href="#register-bottom"
                        className="inline-flex items-center gap-3 bg-[#ed792f] hover:bg-[#d66822] text-white font-bold text-xl sm:text-xl py-4 px-10 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
                    >
                        <span>ĐĂNG KÝ NHẬN TƯ VẤN</span>
                        <Phone className="w-6 h-6 fill-white" />
                    </a>
                </div>

            </div>
        </section>
    );
}

// ================= WORKFLOW SECTION (SECTION 7 - QUY TRÌNH HỢP TÁC) =================
function WorkflowSection() {
    const steps = [
        {
            number: "01",
            title: "Đăng ký nhận tư vấn",
            desc: "Điền form thông tin tư vấn"
        },
        {
            number: "02",
            title: "Tư vấn viên liên hệ trao đổi",
            desc: "Khảo sát các kênh marketing và xác định điểm nghẽn hiện tại"
        },
        {
            number: "03",
            title: "Gửi proposal giải pháp",
            desc: "Bản kế hoạch định hướng và phân bổ ngân sách"
        },
        {
            number: "04",
            title: "Ký hợp đồng hợp tác",
            desc: "Cam kết chỉ số và thời hạn hợp tác bằng văn bản pháp lý"
        },
        {
            number: "05",
            title: "Lập kế hoạch và triển khai",
            desc: "Nghiên cứu, lập kế hoạch đa kênh và thực thi công việc"
        },
        {
            number: "06",
            title: "Theo dõi và gửi báo cáo",
            desc: "Theo dõi đảm bảo tiến độ công việc, gửi báo cáo hàng tháng"
        }
    ];

    return (
        <section className="pb-24 bg-white overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 space-y-16">
                {/* Tiêu đề Quy trình hợp tác */}
                <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 uppercase tracking-tight">
                        QUY TRÌNH HỢP TÁC
                    </h2>
                </div>

                {/* Danh sách các bước dạng timeline */}
                <div className="relative border-l-2 border-neutral-900 ml-4 md:ml-6 space-y-10 pl-6 md:pl-10">
                    {steps.map((step, index) => (
                        <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group">

                            {/* Dấu chấm trên đường timeline */}
                            <div className="absolute -left-[31px] md:-left-[47px] top-1.5 md:top-1/2 md:-translate-y-1/2 w-4 h-4 bg-white border-4 border-neutral-900 rounded-full"></div>

                            {/* Khối bên trái: Mũi tên cam chứa tiêu đề bước */}
                            <div className="w-full md:w-5/12 bg-[#ed792f] text-white py-4 px-6 rounded-r-xl shadow-sm relative flex items-center">
                                <span className="font-bold text-xl sm:text-xl uppercase tracking-wide">
                                    {step.number}. {step.title}
                                </span>
                            </div>

                            {/* Khối bên phải: Card nội dung mô tả trắng viền cam */}
                            <div className="w-full md:w-6/12 bg-white border border-[#ed792f] rounded-2xl py-4 px-6 shadow-sm">
                                <p className="text-neutral-700 text-base font-medium leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

// ================= MAIN PAGE COMPONENT =================
export default function CmicContentCarePage() {
    return (
        <div className="bg-[#faf8f6] text-neutral-800 min-h-screen antialiased overflow-x-hidden font-sans scroll-smooth relative">
            <HeroSection />
            <BrandMarqueeSection />
            <SolutionSection />
            <ServicesSection />
            <PortfolioSection />
            <WorkflowSection />

            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(12px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-8px); }
                }
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-33.333%); }
                }
            `}</style>
        </div>
    );
}