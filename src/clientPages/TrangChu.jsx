import React, { useState } from 'react';
import ContactForm from '../components/FormContact';
import { ChevronRight, ChevronDown } from "lucide-react";

// ========================================================
// DESIGN SYSTEM
// Palette — Ink #14181F · Paper #FBF9F6 · Amber #DD8A3B (primary)
//           Teal #135C50 (chiến lược/tin cậy) · Terracotta #B23A2E (cảnh báo)
// Chữ hiển thị: 'Be Vietnam Pro' (tiêu đề) · 'Inter' (nội dung)
// ========================================================
const bgSession1 = "/trangChu/bgSs1.png";
const bgSession2 = "/trangChu/bgSs2.png";
const bgSession7 = "/trangChu/bgSs7.png";

function FontStyles() {
    return (
        <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@600;700;800;900&family=Inter:wght@400;500;600;700;800&display=swap');
            .cmic-landing { font-family: 'Inter', system-ui, -apple-system, sans-serif; }
            .cmic-landing h1, .cmic-landing h2, .cmic-landing h3, .cmic-landing .font-display {
                font-family: 'Be Vietnam Pro', system-ui, -apple-system, sans-serif;
            }
            .cmic-landing .dot-field {
                background-image: radial-gradient(circle, rgba(20,24,31,0.12) 1px, transparent 1px);
                background-size: 16px 16px;
            }
            .cmic-landing .blueprint-grid {
                background-image:
                    linear-gradient(rgba(19,92,80,0.10) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(19,92,80,0.10) 1px, transparent 1px);
                background-size: 32px 32px;
            }
            .cmic-landing .scatter-field {
                background-image: radial-gradient(circle, rgba(178,58,46,0.16) 1.5px, transparent 1.5px);
                background-size: 20px 20px;
            }
            .cmic-landing .flow-lines {
                background-image: repeating-linear-gradient(115deg, rgba(20,24,31,0.05) 0px, rgba(20,24,31,0.05) 1px, transparent 1px, transparent 14px);
            }
            .cmic-landing .grain-soft {
                background-image: radial-gradient(rgba(20,24,31,0.05) 1px, transparent 1px);
                background-size: 12px 12px;
            }
        `}</style>
    );
}

// Khối màu nền mềm phía sau mỗi section
function Ambient({ tone = 'amber' }) {
    const tones = {
        amber: ['#F3B372', '#DD8A3B'],
        teal: ['#63B3A4', '#135C50'],
        terracotta: ['#E4A08B', '#B23A2E'],
        ink: ['#9098A8', '#20242E'],
    };
    const [c1, c2] = tones[tone] || tones.amber;
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden z-0" aria-hidden="true">
            <div className="absolute -top-20 -right-16 w-48 sm:w-72 h-48 sm:h-72 rounded-full blur-3xl opacity-20" style={{ background: c1 }} />
            <div className="absolute -bottom-20 -left-16 w-44 sm:w-64 h-44 sm:h-64 rounded-full blur-3xl opacity-[0.15]" style={{ background: c2 }} />
        </div>
    );
}

function IconBadge({ children, tone = 'terracotta', size = 'md' }) {
    const tones = {
        terracotta: 'from-[#C9503E] to-[#93291E]',
        amber: 'from-[#F0A155] to-[#C96F1E]',
        teal: 'from-[#3E9484] to-[#0F4B41]',
        ink: 'from-[#454D5F] to-[#171B24]',
    };
    const sizes = { md: 'w-10 h-10 rounded-xl', sm: 'w-8 h-8 rounded-lg' };
    return (
        <div className={`flex-shrink-0 ${sizes[size]} bg-gradient-to-br ${tones[tone]} flex items-center justify-center shadow-sm shadow-black/10 ring-1 ring-black/5 text-white`}>
            {children}
        </div>
    );
}

// ---- Bộ icon line-art ----
const ic = "w-5 h-5";
const icSm = "w-4 h-4";

const NetworkIcon = ({ className = ic }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="5" cy="6" r="2.3" stroke="currentColor" strokeWidth="1.75" />
        <circle cx="19" cy="6.5" r="2.3" stroke="currentColor" strokeWidth="1.75" />
        <circle cx="11.5" cy="18" r="2.3" stroke="currentColor" strokeWidth="1.75" />
        <path d="M7 7.3L9.8 15.9M16.8 8.1L13.3 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeDasharray="2.2 3.2" />
    </svg>
);
const FlameCoinIcon = ({ className = ic }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 3.2c1.1 2.1-.5 3-1 4.3-.6 1.7.5 2.7 1.5 2.2.9-.5 1-1.6.7-2.3 1.9 1 2.8 3.1 2.2 5.1-.7 2.4-3 3.7-5.4 3-2.1-.6-3.5-2.8-3-5.1.6-2.5 3-4.8 5-7.2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <circle cx="12" cy="16.6" r="1.05" fill="currentColor" />
    </svg>
);
const UserAlertIcon = ({ className = ic }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="9.3" cy="8" r="3.1" stroke="currentColor" strokeWidth="1.75" />
        <path d="M4 19.6c.5-3.5 3-5.4 5.7-5.4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        <circle cx="17.6" cy="14" r="4.6" stroke="currentColor" strokeWidth="1.5" />
        <path d="M17.6 11.8v3.1M17.6 17.3h.01" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
);
const CompassIcon = ({ className = ic }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="12" cy="12" r="8.3" stroke="currentColor" strokeWidth="1.75" />
        <path d="M14.5 9.5l-1.3 3.9-3.9 1.3 1.3-3.9 3.9-1.3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
);
const PhoneIcon = ({ className = ic }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2a1 1 0 011-.24c1.13.37 2.33.57 3.6.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.27.2 2.47.57 3.6a1 1 0 01-.25 1.02l-2.2 2.18z" stroke="currentColor" strokeWidth="0.4" fill="currentColor" />
    </svg>
);
const FormIcon = ({ className = icSm }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
        <rect x="4.5" y="3.5" width="15" height="17" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 8.5h8M8 12h8M8 15.5h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);
const ChatIcon = ({ className = icSm }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M4.5 6.6A2 2 0 016.5 4.6h11a2 2 0 012 2v7.4a2 2 0 01-2 2H10l-4 3.4v-3.4H6.5a2 2 0 01-2-2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
);
const DocIcon = ({ className = icSm }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M7 3.6h7.2l3.3 3.3V20a1 1 0 01-1 1H7a1 1 0 01-1-1V4.6a1 1 0 011-1Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M9 12h6M9 15.4h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);
const SignIcon = ({ className = icSm }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M4 18.6c2.3.2 3-2 4.6-4.2 1.7-2.3 2.7-6.3 1.2-6.7-1.5-.4-2.7 3-2.3 5 .4 2 2.4 3 4.6 2 2.6-1.2 4-3.4 5-3 .8.3-.3 1.7-1.3 2.4-1 .8.6 1.3 2 .7 1-.4 1.8-1 2.2-1.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
const RocketIcon = ({ className = icSm }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 15.5c3.6-1.4 6-4.7 6-9.9-5.2 0-8.5 2.4-9.9 6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M8.1 11.6L5 12.9l2.4 2.4-1 3.5 3.5-1 2.4 2.4 1.3-3.1" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="14.2" cy="9.3" r="1.3" stroke="currentColor" strokeWidth="1.4" />
    </svg>
);
const ChartIcon = ({ className = icSm }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M4.5 19.5h15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M7 19.5v-5.2M12 19.5V8.4M17 19.5v-8.7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
);
const HelpIcon = ({ className = icSm }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="12" cy="12" r="8.2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9.7 9.4a2.3 2.3 0 014.3 1.1c0 1.5-2 1.7-2 3.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="12" cy="16.6" r="0.15" stroke="currentColor" strokeWidth="1.8" />
    </svg>
);

// ========================================================
// DATA
// ========================================================
const PROBLEMS_DATA = [
    {
        title: "Marketing manh mún, rời rạc",
        description: "Làm nhiều kênh (Facebook, TikTok, YouTube, Website) nhưng không có sự kết nối, không tạo ra chuyển đổi."
    },
    {
        title: "Đốt tiền quảng cáo nhưng dừng là hết khách",
        description: "Phụ thuộc hoàn toàn vào ads, biên lợi nhuận giảm nhưng vẫn không giữ chân được khách hàng."
    },
    {
        title: "Khủng hoảng nhân sự freelance",
        description: "Chỉ làm theo task, thiếu tư duy hệ thống, không bám sát mục tiêu kinh doanh khiến hoạt động marketing chỉ đẹp trên dashboard."
    },
    {
        title: "Làm việc theo cảm tính",
        description: "Không biết đọc chỉ số, lọc KPI nào để marketing gắn liền với hoạt động kinh doanh và làm sao để tối ưu hiệu quả."
    }
];
const PROBLEM_ICONS = [NetworkIcon, FlameCoinIcon, UserAlertIcon, CompassIcon];

const SERVICES_DATA = [
    {
        title: "Dựng và thiết kế Website - Landing Page",
        description: "Chúng tôi cung cấp giải pháp Xây dựng Tài sản số cốt lõi. Một website được thiết kế bởi CMIC MEDIA sẽ thỏa mãn 3 yếu tố trọng tâm: Thẩm mỹ thương hiệu – Trải nghiệm mượt mà – Tỷ lệ chuyển đổi tối đa.",
        image: "/trangChu/img1Ss4.png",
    },
    {
        title: "Chăm sóc các kênh Digital Marketing",
        description: "Chúng tôi đồng hành cùng bạn xây dựng ma trận nội dung theo phễu chuyển đổi bám sát hành trình khách hàng, biến các kênh mạng xã hội thành công cụ hỗ trợ cho team sale với chi phí phải chăng nhất.",
        image: "/trangChu/img2Ss4.png",
    },
    {
        title: "Thiết kế giải pháp AI Automation n8n",
        description: "Kỷ nguyên AI đang phát triển mạnh hơn bao giờ hết. Nếu bạn ưu tiên doanh nghiệp vận hành một người, hoặc không muốn tốn quá nhiều nguồn lực về nhân sự, thời gian thực hiện các nhiệm vụ lặp lại thì AI Agent là lựa chọn tối ưu.",
        image: "/trangChu/img3Ss4.png",
    },
    {
        title: "Tư vấn chiến lược & Đào tạo đội ngũ",
        description: "Tốn rất nhiều tiền vào marketing nhưng kết quả chẳng thấy đâu. Sale vẫn cật lực tự tìm kiếm khách hàng, thuyết phục mỏi miệng mà không được tin tưởng. Chúng tôi sẽ kiểm tra toàn bộ hệ thống kinh doanh và đưa ra đường lối giúp doanh nghiệp giải quyết bài toán thực tế.",
        image: "/trangChu/img4Ss4.png",
    }
];

const STEPS_DATA = [
    { stepNum: "01. Đăng ký nhận tư vấn", detail: "Điền form thông tin tư vấn" },
    { stepNum: "02. Tư vấn viên liên hệ trao đổi", detail: "Khảo sát các kênh marketing và xác định điểm nghẽn hiện tại" },
    { stepNum: "03. Gửi proposal giải pháp", detail: "Bản kế hoạch định hướng và phân bổ ngân sách" },
    { stepNum: "04. Ký hợp đồng hợp tác", detail: "Cam kết chỉ số và thời hạn hợp tác bằng văn bản pháp lý" },
    { stepNum: "05. Lập kế hoạch và triển khai", detail: "Nghiên cứu, lập kế hoạch đa kênh và thực thi công việc" },
    { stepNum: "06. Theo dõi và gửi báo cáo", detail: "Theo dõi đảm bảo tiến độ công việc, gửi báo cáo hàng tháng" }
];
const STEP_ICONS = [FormIcon, ChatIcon, DocIcon, SignIcon, RocketIcon, ChartIcon];

const FAQS_DATA = [
    {
        question: "01. Chi phí dịch vụ agency tối thiểu là bao nhiêu?",
        answer: <><strong>Chi phí cho các dịch vụ là không cố định</strong> và phụ thuộc vào nhu cầu mà anh/chị cần sử dụng. Nếu anh/chị chưa có ngân sách cụ thể, CMIC MEDIA sẽ liên hệ trao đổi, làm rõ mục tiêu, nhu cầu thiết yếu, sau đó gửi bản kế hoạch định hướng và báo giá chi tiết. Còn trong trường hợp đã có sẵn ngân sách cụ thể, chúng tôi sẽ dựa trên ngân sách của anh/chị để tư vấn giải pháp phù hợp nhất.</>
    },
    {
        question: "02. Thời hạn hợp tác tối thiểu giữa 2 bên sẽ diễn ra trong bao lâu?",
        answer: <>Để đảm bảo thời gian hợp tác hiệu quả, 2 bên sẽ cần trao đổi và thống nhất thời hạn làm việc <strong>tối thiểu là 2 tháng</strong>. Điều này được soạn thảo minh bạch trong hợp đồng trước khi hai bên giao kết.</>
    },
    {
        question: "03. Agency có cam kết ra doanh số không?",
        answer: <>Quá trình từ marketing cho đến lúc ra doanh số sẽ còn phụ thuộc vào rất nhiều khâu, ví dụ như thời gian phản hồi, cách tư vấn, sản phẩm, v.v... Vậy nên, chúng tôi chỉ có thể cam kết các chỉ số trực tiếp ảnh hưởng đến quá trình tiếp cận và chuyển đổi thành khách hàng chất lượng, cho thấy rõ <strong>hiệu quả marketing trong bài toán kinh doanh lớn của doanh nghiệp.</strong></>
    }
];

// ==========================================================
// INDIVIDUAL SESSION COMPONENTS
// ==========================================================

// SESSION 1: HERO
function HeroSection() {
    return (
        <section className="relative w-full overflow-hidden py-10 md:py-14 px-4 sm:px-6 lg:px-8">
            <div
                className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40 sm:opacity-100"
                style={{
                    backgroundImage: `url(${bgSession1})`,
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            />

            {/* Container căn giữa & giới hạn khung max-w-7xl */}
            <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-[#14181F]">
                <div className="lg:col-span-7 flex flex-col justify-center items-center lg:items-start space-y-4 text-center lg:text-left">
                    <div className="space-y-1">
                        <h1 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight uppercase text-[#14181F] leading-tight">
                            GIẢI PHÁP IN-HOUSE MARKETING AGENCY
                        </h1>
                        <p className="text-xs sm:text-sm lg:text-base font-extrabold text-[#C96F1E] uppercase tracking-wide">
                            PHÒNG MARKETING THUÊ NGOÀI THỰC CHIẾN
                        </p>
                    </div>

                    <div className="bg-white/85 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-black/5 shadow-sm space-y-3 text-left">
                        <p className="text-[#3F4658] text-xs sm:text-sm leading-relaxed">
                            <strong className="text-[#14181F] font-bold">CMIC MEDIA</strong> vận hành theo mô hình{" "}
                            <strong className="text-[#C96F1E] font-bold">in-house marketing agency</strong>{" "}
                            (phòng marketing nội bộ), nhằm đồng hành cùng{" "}
                            <strong className="text-[#C96F1E] font-bold">Startup, SME và Cá nhân kinh doanh</strong>{" "}
                            trong việc thiết kế và vận hành một hệ thống online marketing bài bản, dễ quản lý và đo lường hiệu quả.
                        </p>

                        <p className="text-[#3F4658] text-xs sm:text-sm leading-relaxed">
                            Thay vì triển khai các hoạt động marketing rời rạc hoặc phụ thuộc vào quảng cáo trả phí, mô hình của chúng tôi tập trung giúp doanh nghiệp{" "}
                            <strong className="text-[#C96F1E] font-bold">
                                xây dựng nền tảng marketing bền vững thông qua các tài sản số cốt lõi
                            </strong>{" "}
                            như website, hệ thống nội dung đa kênh, phễu chuyển đổi, ads, email/CRM và công cụ đo lường.
                        </p>
                    </div>

                    <div className="pt-2">
                        <button className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F0A155] to-[#C96F1E] text-white font-extrabold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 uppercase tracking-wide">
                            <IconBadge tone="ink" size="sm"><PhoneIcon className="w-3.5 h-3.5" /></IconBadge>
                            <span>ĐĂNG KÝ NHẬN TƯ VẤN</span>
                        </button>
                    </div>
                </div>

                <div className="lg:col-span-5 flex justify-center items-center">
                    <div className="relative w-full max-w-sm lg:max-w-none aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-black/5">
                        <img
                            src="/trangChu/imgSs1.png"
                            alt="CMIC Media Banner"
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

// COMBINED SESSION 2 & 3: PROBLEMS + STRATEGY
function ProblemsAndStrategySection({ problems }) {
    return (
        <section className="relative w-full overflow-hidden py-8 md:py-14 px-3 sm:px-6 lg:px-8">
            {/* Container căn giữa & giới hạn khung max-w-7xl */}
            <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col space-y-10 md:space-y-12">

                {/* PART 1: PROBLEMS (2 cột trên Mobile, 4 cột trên Laptop) */}
                <div className="w-full flex flex-col space-y-4 sm:space-y-6">
                    <h2 className="text-base sm:text-xl md:text-2xl font-black text-[#14181F] text-center tracking-tight uppercase leading-snug">
                        Doanh nghiệp của bạn có đang gặp phải những <span className="text-[#B23A2E]">điểm nghẽn</span> này?
                    </h2>

                    {/* Chia 2 cột trên màn hình nhỏ (2 hàng x 2 cột), tự động chuyển thành 4 cột trên màn rộng */}
                    <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
                        {problems.map((item, index) => {
                            const Icon = PROBLEM_ICONS[index] || NetworkIcon;
                            return (
                                <div key={index} className="flex flex-col items-start gap-2 sm:gap-3 bg-white/90 backdrop-blur-xs p-3 sm:p-4 rounded-xl shadow-sm border border-black/5 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 group">
                                    <IconBadge tone="terracotta" size="sm">
                                        <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 group-hover:scale-110 transition-transform duration-300" />
                                    </IconBadge>
                                    <div className="flex-1 space-y-1">
                                        <h3 className="text-xs sm:text-sm md:text-base font-extrabold text-[#93291E] leading-snug">{item.title}</h3>
                                        <p className="text-[#4B5160] text-[11px] sm:text-xs md:text-sm leading-normal sm:leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* PART 2: STRATEGY */}
                <div className="w-full flex flex-col space-y-8 text-[#14181F]">
                    <div className="w-full flex items-center justify-center py-2 px-2 sm:px-4">
                        <div className="flex items-center justify-center gap-1 sm:gap-2 max-w-fit text-center">
                            <div className="flex flex-col items-center self-stretch justify-between shrink-0 pointer-events-none">
                                <span className="text-2xl sm:text-3xl font-black font-display leading-none text-[#135C50]">“</span>
                                <div className="w-[1.5px] h-full bg-[#135C50]/25 my-1"></div>
                            </div>

                            <div className="space-y-0.5 px-1 sm:px-2">
                                <p className="text-sm sm:text-base md:text-lg font-semibold text-[#14181F] tracking-wide">
                                    Marketing là tài sản số giúp bạn tạo dòng tiền bền vững
                                </p>
                                <p className="text-sm sm:text-base md:text-lg font-black text-[#135C50] tracking-wider uppercase">
                                    CMIC MEDIA
                                </p>
                            </div>

                            <div className="flex flex-col items-center self-stretch justify-between shrink-0 pointer-events-none">
                                <div className="w-[1.5px] h-full bg-[#135C50]/25 my-1"></div>
                                <span className="text-2xl sm:text-3xl font-black font-display leading-none text-[#135C50]">”</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-3 sm:gap-6 lg:gap-8 items-center w-full pt-2">
                        {/* Phễu Marketing - Nằm bên trái (4/12 cột trên mobile, 5/12 trên lg) */}
                        <div className="col-span-4 lg:col-span-5 flex justify-center items-center w-full max-w-[120px] sm:max-w-[180px] lg:max-w-[200px] mx-auto overflow-hidden">
                            <img
                                src="/trangChu/pheuSs3.png"
                                alt="Marketing Funnel"
                                className="w-full h-auto object-contain"
                            />
                        </div>

                        {/* Nội dung đối tác chiến lược - Nằm bên phải (8/12 cột trên mobile, 7/12 trên lg) */}
                        <div className="col-span-8 lg:col-span-7 flex flex-col space-y-1.5 sm:space-y-3 text-left">
                            <div>
                                <h3 className="text-xs sm:text-lg md:text-xl font-black text-[#14181F] uppercase tracking-tight leading-tight">
                                    CMIC MEDIA ĐÓNG VAI TRÒ LÀ
                                </h3>
                                <p className="text-[11px] sm:text-base font-extrabold text-[#C96F1E] uppercase tracking-wide">
                                    Đối tác chiến lược
                                </p>
                            </div>

                            <ul className="space-y-1 sm:space-y-1.5 text-[10px] sm:text-sm md:text-base text-[#3F4658] font-bold list-none pl-0">
                                <li className="flex items-start sm:items-center gap-1.5 sm:gap-2 leading-tight sm:leading-normal">
                                    <span className="text-[#135C50] text-xs sm:text-base">•</span>
                                    <span>Chúng tôi không làm &ldquo;thuê theo đầu việc&rdquo;</span>
                                </li>
                                <li className="flex items-start sm:items-center gap-1.5 sm:gap-2 leading-tight sm:leading-normal">
                                    <span className="text-[#135C50] text-xs sm:text-base">•</span>
                                    <span>Chúng tôi vào cuộc để giúp bạn</span>
                                </li>
                            </ul>

                            {/* Các nhãn giải pháp */}
                            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-0.5 sm:pt-1">
                                <div className="inline-flex items-center bg-gradient-to-r from-[#146356] to-[#0F4B41] text-white rounded-md sm:rounded-lg shadow-sm divide-x divide-white/25 overflow-hidden">
                                    <div className="px-1.5 sm:px-3 py-1 text-[9px] sm:text-xs font-extrabold tracking-wide uppercase">
                                        Xây hệ thống
                                    </div>
                                    <div className="px-1.5 sm:px-3 py-1 text-[9px] sm:text-xs font-extrabold tracking-wide uppercase">
                                        Chuẩn hoá quy trình
                                    </div>
                                </div>

                                <div className="inline-flex items-center bg-gradient-to-r from-[#C96F1E] to-[#A85916] text-white rounded-md sm:rounded-lg shadow-sm divide-x divide-white/25 overflow-hidden">
                                    <div className="px-1.5 sm:px-3 py-1 text-[9px] sm:text-xs font-extrabold tracking-wide uppercase">
                                        Vận hành
                                    </div>
                                    <div className="px-1.5 sm:px-3 py-1 text-[9px] sm:text-xs font-extrabold tracking-wide uppercase">
                                        Đo lường & Tối ưu
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center pt-2 w-full flex flex-col items-center space-y-0.5">
                        <p className="text-base sm:text-lg md:text-xl font-display italic tracking-wide font-medium text-[#0F4B41]">KPI MARKETING</p>
                        <div className="w-44 sm:w-56 h-4 text-[#0F4B41] flex justify-center">
                            <svg className="w-full h-full" viewBox="0 0 300 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 5 Q 75 18, 150 18 T 290 5 M150 18 L 150 22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                            </svg>
                        </div>
                        <p className="text-xl sm:text-2xl md:text-3xl font-display italic font-medium tracking-wide text-[#0F4B41]">DOANH SỐ</p>
                    </div>
                </div>

            </div>
        </section>
    );
}

// SESSION 4: SERVICES
function ServicesSection({ services }) {
    return (
        <section className="relative w-full overflow-hidden py-10 md:py-14 px-4 sm:px-6 lg:px-8">
            {/* Container căn giữa & giới hạn khung max-w-7xl */}
            <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col space-y-8 md:space-y-10">
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-[#14181F] text-left tracking-tight uppercase border-l-4 border-[#C96F1E] pl-3">
                    Các dịch vụ chính CMIC MEDIA cung cấp
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 w-full">
                    {services.map((svc, index) => (
                        <div
                            key={index}
                            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full p-2 rounded-2xl"
                        >
                            <div className="w-full sm:w-2/5 shrink-0 flex items-center justify-center">
                                <img
                                    src={svc.image}
                                    alt={svc.title}
                                    className="w-full max-w-[220px] sm:max-w-none h-auto object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                                    style={{
                                        filter: 'drop-shadow(3px 5px 6px rgba(0, 0, 0, 0.2))'
                                    }}
                                />
                            </div>

                            <div className="w-full sm:w-3/5 flex flex-col space-y-2 text-left">
                                <h3 className="text-sm sm:text-base font-black text-[#14181F] tracking-tight leading-snug">
                                    {svc.title}
                                </h3>

                                <div className="relative w-full pt-1 pl-1">
                                    <div className="absolute inset-0 bg-[#C96F1E] rounded-2xl translate-x-1 translate-y-1 sm:translate-x-1.5 sm:translate-y-1.5 z-0" />
                                    <div className="relative z-10 bg-[#FAF8F5] border-[2px] border-[#0F4B41] rounded-2xl p-3 sm:p-3.5 shadow-sm">
                                        <p className="text-[#14181F] text-xs sm:text-xs md:text-sm font-medium leading-relaxed">
                                            {svc.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// SESSION 5: FORM
function ConsultationFormSection() {
    return (
        <section className="relative w-full overflow-hidden py-10 md:py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#FDF0DF]/60">
            <Ambient tone="amber" />
            {/* Container căn giữa & giới hạn khung max-w-5xl */}
            <div className="relative z-10 max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 text-center lg:text-left space-y-3">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#14181F] tracking-tight uppercase leading-snug">
                        Sẵn sàng tăng bứt phá doanh số cùng CMIC MEDIA?
                    </h2>
                    <p className="text-[#4B5160] text-xs sm:text-sm leading-relaxed max-w-lg mx-auto lg:mx-0">
                        Để lại thông tin nhận tư vấn miễn phí, đội ngũ chuyên gia của chúng tôi sẽ chủ động liên hệ khảo sát và đưa ra lộ trình phù hợp nhất cho doanh nghiệp của bạn.
                    </p>
                </div>
                <div className="lg:col-span-6 w-full max-w-md mx-auto lg:max-w-none">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}

// SESSION 6: WORKFLOW
function WorkflowSection({ steps }) {
    return (
        <section className="relative w-full overflow-hidden py-8 md:py-14 px-3 sm:px-6 lg:px-8 bg-[#FBF9F6]">
            <div className="absolute inset-0 flow-lines opacity-50 z-0" />
            <Ambient tone="teal" />

            {/* Container căn giữa & giới hạn khung max-w-5xl */}
            <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col space-y-5 sm:space-y-6">
                <h2 className="text-base sm:text-xl md:text-2xl font-black text-[#14181F] text-left tracking-tight uppercase">
                    Quy trình hợp tác
                </h2>

                {/* Trục Timeline dọc */}
                <div className="relative w-full flex flex-col space-y-3 sm:space-y-4 pl-5 sm:pl-8 md:pl-10">
                    <div className="absolute left-[8px] sm:left-[14px] md:left-[16px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-[#C96F1E] via-[#0F4B41] to-[#14181F] pointer-events-none rounded-full" />

                    {steps.map((step, idx) => {
                        const Icon = STEP_ICONS[idx] || DocIcon;
                        return (
                            <div key={idx} className="relative w-full grid grid-cols-12 gap-1.5 sm:gap-3 items-center pl-3 sm:pl-5 text-left group">
                                {/* Dot Icon nằm chính giữa đường timeline */}
                                <div className="absolute -left-[17px] sm:-left-[24px] md:-left-[31px] top-1/2 -translate-y-1/2 w-3 sm:w-4 h-3 sm:h-4 bg-white border-[2px] sm:border-[2.5px] border-[#14181F] rounded-full z-30 flex items-center justify-center group-hover:border-[#C96F1E] transition-colors duration-300">
                                    <div className="w-1 h-1 rounded-full bg-[#14181F] group-hover:bg-[#C96F1E] transition-colors duration-300" />
                                </div>

                                {/* Nhãn bước - Đã BỎ 'truncate', cho phép xuống dòng mượt mà */}
                                <div className="col-span-5 lg:col-span-4 w-full">
                                    <div
                                        className="w-full flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-[#C96F1E] to-[#A85916] text-white font-extrabold text-[10px] sm:text-xs md:text-sm py-1.5 sm:py-2 px-2 sm:px-3 rounded-md sm:rounded-lg shadow-sm select-none"
                                    >
                                        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                                        <span className="leading-tight break-words">{step.stepNum}</span>
                                    </div>
                                </div>

                                {/* Chi tiết bước */}
                                <div className="col-span-7 lg:col-span-8 w-full">
                                    <div className="w-full bg-white border border-[#C96F1E]/40 rounded-md sm:rounded-lg p-2 sm:p-3 shadow-xs min-h-[38px] sm:min-h-[44px] flex items-center">
                                        <p className="text-[#14181F] font-bold text-[10px] sm:text-xs md:text-sm leading-tight sm:leading-snug">
                                            {step.detail}
                                        </p>
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
// SESSION 7: FAQS
// 1. Component con xử lý độc lập từng Thẻ FAQ (Siêu siêu mượt, phản hồi 0ms)
function FaqItem({ faq, isOpenDefault = false }) {
    const [isOpen, setIsOpen] = useState(isOpenDefault);

    return (
        <div className="overflow-hidden rounded-2xl border border-[#14181F]/10 bg-white/80 backdrop-blur shadow-sm transition-all duration-200 hover:shadow-md">
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="group flex w-full items-center justify-between gap-3 sm:gap-4 p-3.5 sm:p-4 text-left transition-colors duration-150 hover:bg-[#FFF7EE]"
            >
                <div className="flex items-start gap-2.5 sm:gap-3">
                    <IconBadge tone="amber" size="sm">
                        <HelpIcon className="w-3.5 h-3.5" />
                    </IconBadge>

                    <h3
                        className={`text-sm sm:text-base font-extrabold leading-snug transition-colors duration-200 ${isOpen ? "text-[#C96F1E]" : "text-[#14181F]"
                            } group-hover:text-[#C96F1E]`}
                    >
                        {faq.question}
                    </h3>
                </div>

                <ChevronDown
                    size={20}
                    className={`flex-shrink-0 text-[#C96F1E] transition-transform duration-200 ease-out ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </button>

            {/* Khối Nội dung với transition mượt & nhanh (250ms) */}
            <div
                className={`grid transition-all duration-250 ease-out ${isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <div className="overflow-hidden">
                    <div className="px-4 sm:px-12 md:px-16 pb-4 sm:pb-5 pt-1">
                        <p className="text-xs sm:text-sm leading-6 sm:leading-7 text-[#4B5160]">
                            {faq.answer}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// 2. Component Cha FAQ chính
function FaqSection({ faqs }) {
    return (
        <section className="relative w-full py-10 md:py-14 px-4 sm:px-6 lg:px-8 bg-[#FCFAF8]">
            <div
                className="absolute top-0 bottom-0 w-screen left-1/2 -translate-x-1/2 pointer-events-none z-0 scale-x-110 overflow-hidden"
                style={{
                    backgroundImage: `url(${bgSession7})`,
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            />

            <div className="absolute inset-0 grain-soft opacity-60 z-0" />

            <div className="relative z-10 max-w-5xl mx-auto flex flex-col space-y-6">
                <div className="w-full flex items-center justify-between border-b-2 border-[#14181F]/80 pb-1.5">
                    <div className="flex items-center space-x-2">
                        <div className="flex flex-col items-center">
                            <div className="w-1.5 h-1.5 bg-[#14181F] rounded-full" />
                            <div className="w-[1.5px] h-5 bg-[#14181F]" />
                        </div>

                        <h2 className="text-lg sm:text-xl md:text-2xl font-black text-[#14181F] uppercase tracking-tight">
                            FAQs
                        </h2>
                    </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                    {faqs.map((faq, index) => (
                        <FaqItem
                            key={index}
                            faq={faq}
                            isOpenDefault={index === 0} // Mặc định mở câu đầu tiên
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

// ========================================================
// MAIN COMPONENT
// ========================================================
export default function MarketingLandingPage() {
    return (
        <div className="cmic-landing overflow-x-hidden bg-[#FBF9F6] antialiased selection:bg-[#DD8A3B] selection:text-white">
            <FontStyles />
            <HeroSection />

            <div className="relative w-full overflow-hidden">
                <div
                    className="absolute inset-0 w-screen left-1/2 -translate-x-1/2 pointer-events-none z-0 scale-x-110"
                    style={{
                        backgroundImage: `url(${bgSession2})`,
                        backgroundPosition: 'center center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                />

                <ProblemsAndStrategySection problems={PROBLEMS_DATA} />
                <ServicesSection services={SERVICES_DATA} />
            </div>

            <ConsultationFormSection />
            <WorkflowSection steps={STEPS_DATA} />
            <FaqSection faqs={FAQS_DATA} />
        </div>
    );
}