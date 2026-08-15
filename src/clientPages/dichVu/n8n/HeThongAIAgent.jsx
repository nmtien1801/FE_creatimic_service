import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, Phone, Play, ArrowRight, Bot, AlertTriangle, CheckCircle2, Sparkles, Zap } from "lucide-react";
import ContactForm from '../../../components/FormContact';

/* ---------------------------------------------------------------
   CUSTOM HOOK & REVEAL COMPONENT
   --------------------------------------------------------------- */
function useRevealOnScroll(options = { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, options);

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return [ref, isVisible];
}

function Reveal({ children, as: Tag = 'div', delay = 0, className = '', ...rest }) {
    const [ref, isVisible] = useRevealOnScroll();
    return (
        <Tag
            ref={ref}
            className={`reveal-on-scroll ${isVisible ? 'is-visible' : ''} ${className}`}
            style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
            {...rest}
        >
            {children}
        </Tag>
    );
}

/* ---------------------------------------------------------------
   BRAND COLOR PALETTE & TOKENS
   --------------------------------------------------------------- */
const bgSession1 = "/agent/bgHero.png";
const bgSession31 = "/agent/bgSs31.png";
const bgSession32 = "/agent/bgSs32.png";
const bgSession33 = "/agent/bgSs33.png";
const bgSession5 = "/agent/bgSs5.png";
const bgSession7 = "/agent/bgSs7.png";

/* ---------------------------------------------------------------
   1. HERO SECTION
   --------------------------------------------------------------- */
const img6 = "/agent/img6.png";
const img7 = "/agent/img7.png";

function HeroSection() {
    // ---- Lazy load + fade-in cho background bằng IntersectionObserver ----
    const sectionRef = useRef(null);
    const [bgLoaded, setBgLoaded] = useState(false);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const node = sectionRef.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect(); // chỉ cần trigger 1 lần
                }
            },
            { rootMargin: '200px 0px', threshold: 0.01 } // nạp sớm trước khi tới gần
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!inView) return;
        const img = new Image();
        img.src = bgSession1;
        img.onload = () => setBgLoaded(true);
    }, [inView]);

    return (
        <section
            ref={sectionRef}
            className="relative w-full min-h-[70vh] sm:min-h-[85vh] lg:min-h-screen flex flex-col justify-between overflow-hidden text-white bg-[#0B0E14]"
        >
            {/* CSS Custom cho hiệu ứng viền đen chữ (Stroke) & Animation floating */}
            <style>{`
                @keyframes heroImgFloat {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-16px); }
                }
                .text-stroke-black {
                    -webkit-text-stroke: 2px #000000;
                    paint-order: stroke fill;
                }
                @media (min-width: 768px) {
                    .text-stroke-black {
                        -webkit-text-stroke: 3.5px #000000;
                    }
                }
            `}</style>

            {/* 1. Lớp Ảnh Nền bgSession1 — Responsive Attachment & Scaling (z-0) */}
            <div
                className={`absolute inset-0 w-full h-full pointer-events-none z-0 transition-opacity duration-1000 ${bgLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                style={{
                    backgroundImage: inView ? `url(${bgSession1})` : 'none',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                {/* Dùng div tĩnh đè để ép style responsive không bị vỡ bởi inline style */}
                <div
                    className="w-full h-full bg-cover sm:bg-cover bg-center bg-scroll md:bg-fixed"
                    style={{
                        backgroundImage: inView ? `url(${bgSession1})` : 'none',
                    }}
                />
            </div>

            {/* 2. Lớp Ảnh img6 — Responsive Object Contain/Cover (z-1) */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-1 flex items-center justify-center">
                <img
                    src={img6}
                    alt="AI Agent N8N Overlay"
                    loading="lazy"
                    className="w-full h-full object-contain md:object-cover select-none"
                    style={{ animation: 'heroImgFloat 6s ease-in-out infinite' }}
                />
            </div>

            {/* Nền màu chờ ảnh load */}
            <div className="absolute inset-0 bg-[#0B0E14] -z-10" />

            {/* 3. Overlay Gradient tối nhẹ (z-2) */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60 pointer-events-none z-2" />

            {/* 4. Lớp Ảnh img7 — Responsive Position & Sizing (z-3) */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-3 flex items-center justify-center p-2 sm:p-4">
                <img
                    src={img7}
                    alt="AI Center Graphic"
                    loading="lazy"
                    className="w-auto h-auto max-w-[90%] sm:max-w-[85%] max-h-[35vh] sm:max-h-[50vh] md:max-h-[65vh] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)] select-none -translate-x-3 -translate-y-2 sm:-translate-x-10 sm:-translate-y-5 md:-translate-x-[72px] md:-translate-y-[36px] transition-all duration-300"
                />
            </div>

            {/* 5. Khối Nội Dung Chữ Đặt Ở Góc Kèm Padding Căn Chỉnh (z-10) */}
            <Reveal className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-10 md:px-16 lg:px-20 py-8 sm:py-10 md:py-16 flex flex-col justify-between min-h-[70vh] sm:min-h-[85vh] lg:min-h-screen">

                {/* Dòng chữ GÓC TRÊN BÊN TRÁI: KỶ NGUYÊN TỰ ĐỘNG HOÁ */}
                <div className="text-left w-full pt-2 md:pt-6">
                    <h2 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-wider text-stroke-black drop-shadow-[0_8px_8px_rgba(0,0,0,0.8)] inline-block">
                        KỶ NGUYÊN TỰ ĐỘNG HOÁ
                    </h2>
                </div>

                {/* Dòng chữ GÓC DƯỚI BÊN PHẢI: ỨNG DỤNG AI AGENT N8N & Subtitle */}
                <div className="text-right w-full flex flex-col items-end space-y-1 sm:space-y-1.5 md:space-y-3 pb-2 md:pb-6">
                    <h1 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-none drop-shadow-[0_8px_8px_rgba(0,0,0,0.9)]">
                        <span className="text-white text-stroke-black mr-1.5 sm:mr-2 md:mr-3">
                            ỨNG DỤNG
                        </span>
                        <span className="text-[#F2680C] text-stroke-black">
                            AI AGENT N8N
                        </span>
                    </h1>

                    <p className="text-xs sm:text-xl md:text-2xl font-extrabold text-white uppercase tracking-wide text-stroke-black drop-shadow-md">
                        Giải Phóng 80% Nguồn Lực Cho SME
                    </p>
                </div>

            </Reveal>
        </section>
    );
}

/* ---------------------------------------------------------------
   2. COMPARISON SECTION (Dàn 2 cột song song 1 hàng)
   --------------------------------------------------------------- */
function ComparisonSection() {
    return (
        <section className="py-10 md:py-16 bg-[#F7F8FC] border-b border-slate-200/80 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">

                <Reveal className="text-center max-w-xl mx-auto mb-8 space-y-1.5">
                    <span className="text-[#F2680C] font-extrabold text-[10px] sm:text-xs uppercase tracking-widest bg-[#F2680C]/10 px-3 py-1 rounded-full border border-[#F2680C]/20">
                        Sự Chuyển Đổi Mô Hình
                    </span>
                    <h2 className="text-base sm:text-2xl md:text-3xl font-black text-[#14181F] uppercase">
                        Bứt Phá Vận Hành Cùng AI Agent
                    </h2>
                </Reveal>

                {/* Cố định 2 cột 1 hàng */}
                <Reveal className="relative grid grid-cols-2 gap-2 sm:gap-6 items-stretch">

                    {/* Bridge Icon ở giữa */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center">
                        <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-[#F2680C] text-white flex items-center justify-center shadow-md ring-2 sm:ring-4 ring-white">
                            <ArrowRight size={14} className="sm:w-5 sm:h-5" strokeWidth={2.5} />
                        </div>
                    </div>

                    {/* TRÁI: VẬN HÀNH THỦ CÔNG */}
                    <div className="relative p-3 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-3">
                        <div className="space-y-2 text-left">
                            <div className="flex items-center justify-between">
                                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 text-[9px] sm:text-xs font-bold uppercase tracking-wider">
                                    <AlertTriangle size={11} /> Trước Khi Có AI
                                </div>
                                <span className="text-[9px] sm:text-xs text-slate-400 font-semibold hidden sm:inline">Thủ công</span>
                            </div>

                            <h3 className="text-xs sm:text-lg font-black text-[#14181F] leading-snug">
                                Quy Trình Rời Rạc & Chậm Chạp
                            </h3>

                            <p className="text-[10px] sm:text-xs md:text-sm text-slate-600 leading-tight sm:leading-relaxed font-normal">
                                Ngừng lãng phí hàng giờ liền của nhân sự vào những tác vụ lặp đi lặp lại thủ công, phản hồi khách chậm và rò rỉ cơ hội bán hàng.
                            </p>
                        </div>

                        <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-1.5 text-[9px] sm:text-xs text-left">
                            <div className="p-1.5 sm:p-2 rounded-lg bg-slate-50 border border-slate-100">
                                <span className="text-slate-400 block text-[8px] sm:text-[10px]">Tốc độ phản hồi</span>
                                <span className="font-extrabold text-red-600 text-[9px] sm:text-xs">Vài giờ - 1 ngày</span>
                            </div>
                            <div className="p-1.5 sm:p-2 rounded-lg bg-slate-50 border border-slate-100">
                                <span className="text-slate-400 block text-[8px] sm:text-[10px]">Thời gian hoạt động</span>
                                <span className="font-extrabold text-slate-700 text-[9px] sm:text-xs">8 tiếng / ngày</span>
                            </div>
                        </div>
                    </div>

                    {/* PHẢI: TỰ ĐỘNG HOÁ AI AGENT */}
                    <div className="relative p-3 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white via-orange-50/30 to-orange-100/20 border-2 border-[#F2680C]/40 shadow-md flex flex-col justify-between space-y-3">
                        <div className="space-y-2 text-left">
                            <div className="flex items-center justify-between">
                                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#F2680C]/10 border border-[#F2680C]/30 text-[#F2680C] text-[9px] sm:text-xs font-bold uppercase tracking-wider">
                                    <Bot size={11} /> AI Agent
                                </div>
                                <span className="text-[9px] sm:text-xs text-[#F2680C] font-bold hidden sm:inline">n8n Workflow</span>
                            </div>

                            <h3 className="text-xs sm:text-lg font-black text-[#14181F] leading-snug">
                                Vận Hành Thông Minh 24/7
                            </h3>

                            <p className="text-[10px] sm:text-xs md:text-sm text-slate-700 leading-tight sm:leading-relaxed font-normal">
                                Thiết lập các trợ lý vận hành thông minh tự động xử lý công việc 24/7 với độ chính xác tuyệt đối và chi phí tối giản.
                            </p>
                        </div>

                        <div className="pt-2 border-t border-[#F2680C]/20 grid grid-cols-2 gap-1.5 text-[9px] sm:text-xs text-left">
                            <div className="p-1.5 sm:p-2 rounded-lg bg-white border border-[#F2680C]/20">
                                <span className="text-slate-500 block text-[8px] sm:text-[10px]">Tốc độ phản hồi</span>
                                <span className="font-extrabold text-[#F2680C] text-[9px] sm:text-xs">Tức thì (&lt; 1s)</span>
                            </div>
                            <div className="p-1.5 sm:p-2 rounded-lg bg-white border border-[#F2680C]/20">
                                <span className="text-slate-500 block text-[8px] sm:text-[10px]">Thời gian hoạt động</span>
                                <span className="font-extrabold text-emerald-600 text-[9px] sm:text-xs">24/7 Không nghỉ</span>
                            </div>
                        </div>
                    </div>

                </Reveal>
            </div>
        </section>
    );
}

/* ---------------------------------------------------------------
   3. YOUTUBE DEMO & CONTACT FORM
   --------------------------------------------------------------- */
function VideoContactSection() {
    return (
        <section id="demo-video" className="relative w-full py-8 md:py-14 overflow-hidden bg-[#F7F8FC]">
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
                {bgSession31 && (
                    <div
                        className="absolute bottom-0 left-0 w-1/2 h-[40%]"
                        style={{
                            backgroundImage: `url(${bgSession31})`,
                            backgroundPosition: 'left bottom',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat'
                        }}
                    />
                )}
                {bgSession32 && (
                    <div
                        className="absolute top-0 right-0 w-[20%] h-[30%]"
                        style={{
                            backgroundImage: `url(${bgSession32})`,
                            backgroundPosition: 'right top',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat'
                        }}
                    />
                )}
                {bgSession33 && (
                    <div
                        className="absolute top-1/2 right-0 -translate-y-1/2 w-[80%] h-[50%]"
                        style={{
                            backgroundImage: `url(${bgSession33})`,
                            backgroundPosition: 'right center',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat'
                        }}
                    />
                )}
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 space-y-8">
                <Reveal className="grid lg:grid-cols-12 gap-6 items-center">
                    <div className="lg:col-span-4 text-left space-y-3">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F2680C]/10 border border-[#F2680C]/25 text-[#F2680C] text-[10px] sm:text-xs font-extrabold uppercase tracking-widest">
                            <Sparkles size={12} className="animate-pulse" />
                            <span>Trải Nghiệm Thực Tế</span>
                        </div>

                        <h2 className="text-base sm:text-2xl md:text-3xl font-black text-[#14181F] tracking-tight uppercase leading-snug">
                            Xem Kịch Bản {" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2680C] to-amber-500">
                                AI Agent N8N
                            </span> {" "}
                            Tự Động Hoá
                        </h2>

                        <p className="text-[11px] sm:text-xs md:text-sm text-slate-600 font-normal leading-relaxed">
                            Khám phá cách các trợ lý AI vận hành thực tế: tự động tiếp nhận Lead, đồng bộ dữ liệu CRM và phản hồi khách hàng thông minh chỉ trong vài giây.
                        </p>

                        {/* 3 Thẻ tính năng nằm 1 hàng cố định */}
                        <div className="grid grid-cols-3 gap-1.5 sm:gap-3 pt-1">
                            <div className="p-2 sm:p-3 rounded-lg bg-white border border-slate-200/80 shadow-2xs flex flex-col sm:flex-row items-center sm:items-start gap-1.5">
                                <Zap size={15} className="text-[#F2680C] shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[10px] sm:text-xs text-[#14181F] leading-tight">Xử lý tức thì</h4>
                                    <p className="text-[8px] sm:text-[10px] text-slate-500 leading-tight">Tốc độ &lt; 1s</p>
                                </div>
                            </div>

                            <div className="p-2 sm:p-3 rounded-lg bg-white border border-slate-200/80 shadow-2xs flex flex-col sm:flex-row items-center sm:items-start gap-1.5">
                                <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[10px] sm:text-xs text-[#14181F] leading-tight">Chính xác 100%</h4>
                                    <p className="text-[8px] sm:text-[10px] text-slate-500 leading-tight">Chuẩn hóa dữ liệu</p>
                                </div>
                            </div>

                            <div className="p-2 sm:p-3 rounded-lg bg-white border border-slate-200/80 shadow-2xs flex flex-col sm:flex-row items-center sm:items-start gap-1.5">
                                <Bot size={15} className="text-purple-600 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[10px] sm:text-xs text-[#14181F] leading-tight">Tự học dữ liệu</h4>
                                    <p className="text-[8px] sm:text-[10px] text-slate-500 leading-tight">Nạp kịch bản riêng</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-8">
                        <div className="relative overflow-hidden rounded-xl shadow-lg border border-slate-200/80 bg-slate-950">
                            <iframe
                                className="w-full aspect-video"
                                src="https://www.youtube.com/embed/hNlcmAJa4b4"
                                title="CMIC MEDIA AI AGENT N8N DEMO"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </Reveal>

                <Reveal id="lien-he" className="max-w-xl mx-auto rounded-xl bg-white/95 backdrop-blur-sm shadow-md">
                    <ContactForm />
                </Reveal>
            </div>
        </section>
    );
}

/* ---------------------------------------------------------------
   4. PAIN POINTS SECTION (Dàn 1 hàng 4 cột cố định)
   --------------------------------------------------------------- */
const PAIN_POINTS = [
    {
        img: "/agent/img2.png",
        desc: "Nhân sự phải copy-paste thông tin khách hàng từ Facebook, Website vào Sheets bằng tay rất chậm."
    },
    {
        img: "/agent/img3.png",
        desc: "Khách nhắn tin ban đêm, sáng hôm sau mới rep khiến tỷ lệ rớt đơn tăng cao."
    },
    {
        img: "/agent/img4.png",
        desc: "Gửi email xác nhận, đẩy thông báo đơn hàng hoàn toàn thủ công, dễ xảy ra sai sót."
    },
    {
        img: "/agent/img5.png",
        desc: "Chủ doanh nghiệp tốn nhiều thời gian thúc giục nhân sự làm báo cáo tổng hợp dữ liệu."
    }
];

function PainPointsSection() {
    return (
        <section className="py-10 md:py-16 bg-[#1D428A] text-white">
            <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 space-y-6 text-center">
                <Reveal className="max-w-4xl mx-auto space-y-1">
                    <span className="text-[#F2680C] font-bold text-[9px] sm:text-xs uppercase tracking-wider bg-white/10 px-2.5 py-0.5 rounded-full border border-white/15">
                        THỰC TRẠNG DOANH NGHIỆP
                    </span>
                    <h2 className="text-sm sm:text-xl md:text-2xl font-bold text-[#F2680C] uppercase leading-snug">
                        Bộ máy của bạn có đang bị quá tải bởi các tác vụ rác?
                    </h2>
                    <p className="text-[10px] sm:text-xs text-slate-200 font-normal">
                        Hầu hết SME hiện nay đều đang gặp tình trạng nghẽn cổ chai trong khâu vận hành hằng ngày.
                    </p>
                </Reveal>

                {/* Cố định 1 hàng 4 cột */}
                <div className="grid grid-cols-4 gap-1.5 sm:gap-4">
                    {PAIN_POINTS.map((item, idx) => (
                        <Reveal
                            key={idx}
                            delay={idx * 80}
                            className="bg-white/10 backdrop-blur-sm p-1.5 sm:p-3 rounded-lg sm:rounded-2xl border border-white/15 shadow-sm text-left space-y-1 sm:space-y-2"
                        >
                            <div className="w-full aspect-[4/3] rounded-md sm:rounded-xl overflow-hidden border border-white/10">
                                <img src={item.img} alt="Thực trạng" className="w-full h-full object-cover" />
                            </div>
                            <p className="text-[9px] sm:text-xs text-slate-100 font-normal leading-tight sm:leading-relaxed">
                                {item.desc}
                            </p>
                        </Reveal>
                    ))}
                </div>

                <Reveal>
                    <div className="mt-4 p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#F2680C] via-[#FF8A00] to-[#F2680C] text-white shadow-lg border border-white/20 max-w-6xl mx-auto">
                        <h3 className="text-xs sm:text-base md:text-xl font-black uppercase tracking-tight leading-snug drop-shadow-sm">
                            BẠN CÓ MUỐN TIẾT KIỆM NGUỒN LỰC & CẮT GIẢM CHI PHÍ VẬN HÀNH KHÔNG CẦN THIẾT?
                        </h3>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

/* ---------------------------------------------------------------
   5. SOLUTION SECTION (N8N Đóng khung đối xứng 2 cột)
   --------------------------------------------------------------- */
const SOLUTIONS = [
    {
        title: "Tự động hóa đồng bộ dữ liệu",
        desc: "Khi có Lead mới, hệ thống tự đẩy về CRM, phân phối cho sale và thông báo Zalo/Telegram trong 1s."
    },
    {
        title: "Trợ lý Chatbot AI",
        desc: "AI học tài liệu quy trình doanh nghiệp, tự tư vấn, trả lời khách hàng 24/7 như người thật."
    },
    {
        title: "Tự động hóa Marketing",
        desc: "Phân loại khách hàng theo hành vi, kích hoạt chuỗi Email & Zalo chăm sóc tự động."
    },
    {
        title: "Báo cáo dữ liệu thời gian thực",
        desc: "Tự động quét chi phí ad, lead, ROI xuất dashboard báo cáo gửi thẳng vào chat sếp."
    }
];

function SolutionSection() {
    return (
        <section className="relative w-full py-10 md:py-16 bg-white overflow-hidden">
            {bgSession5 && (
                <div
                    className="absolute inset-0 w-full h-full pointer-events-none z-0"
                    style={{
                        backgroundImage: `url(${bgSession5})`,
                        backgroundPosition: 'center center',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat'
                    }}
                />
            )}

            <div className="relative z-10 max-w-5xl mx-auto px-2 sm:px-6 lg:px-8 space-y-6 text-center">
                <Reveal>
                    <h2 className="text-sm sm:text-xl md:text-2xl font-extrabold text-[#14181F] uppercase leading-tight">
                        <span className="text-[#F2680C]">GIẢI PHÁP</span> CỖ MÁY KHÔNG NGỦ AI AGENT (N8N)
                    </h2>
                </Reveal>

                {/* Cố định 2 cột */}
                <div className="grid grid-cols-2 gap-2 sm:gap-4 items-stretch">
                    {/* Khối 1 */}
                    <Reveal delay={100} className="p-2.5 sm:p-4 rounded-xl border-1.5 sm:border-2 border-black text-left bg-white/90 shadow-2xs space-y-1">
                        <h4 className="text-[11px] sm:text-xs md:text-sm font-bold text-[#F2680C]">{SOLUTIONS[0].title}</h4>
                        <p className="text-[9px] sm:text-xs text-slate-700 font-normal leading-tight sm:leading-relaxed">{SOLUTIONS[0].desc}</p>
                    </Reveal>

                    {/* Khối 2 */}
                    <Reveal delay={200} className="p-2.5 sm:p-4 rounded-xl border-1.5 sm:border-2 border-black text-left bg-white/90 shadow-2xs space-y-1">
                        <h4 className="text-[11px] sm:text-xs md:text-sm font-bold text-[#F2680C]">{SOLUTIONS[1].title}</h4>
                        <p className="text-[9px] sm:text-xs text-slate-700 font-normal leading-tight sm:leading-relaxed">{SOLUTIONS[1].desc}</p>
                    </Reveal>

                    {/* Logo N8N ở giữa */}
                    <Reveal className="col-span-2 py-2 flex flex-col items-center justify-center space-y-1.5">
                        <div className="w-full max-w-[180px] sm:max-w-[280px] mx-auto flex items-center justify-center">
                            <img
                                src="/agent/img1.png"
                                alt="N8N AI Agent"
                                className="w-full h-auto object-contain drop-shadow-sm"
                            />
                        </div>
                        <p className="text-[10px] sm:text-xs md:text-sm text-slate-900 font-bold max-w-md leading-tight text-center">
                            Nền tảng tự động hóa quy trình mạnh mẽ nhất kết hợp AI để xây dựng hệ thống tự vận hành.
                        </p>
                    </Reveal>

                    {/* Khối 3 */}
                    <Reveal delay={100} className="p-2.5 sm:p-4 rounded-xl border-1.5 sm:border-2 border-black text-left bg-white/90 shadow-2xs space-y-1">
                        <h4 className="text-[11px] sm:text-xs md:text-sm font-bold text-[#F2680C]">{SOLUTIONS[2].title}</h4>
                        <p className="text-[9px] sm:text-xs text-slate-700 font-normal leading-tight sm:leading-relaxed">{SOLUTIONS[2].desc}</p>
                    </Reveal>

                    {/* Khối 4 */}
                    <Reveal delay={200} className="p-2.5 sm:p-4 rounded-xl border-1.5 sm:border-2 border-black text-left bg-white/90 shadow-2xs space-y-1">
                        <h4 className="text-[11px] sm:text-xs md:text-sm font-bold text-[#F2680C]">{SOLUTIONS[3].title}</h4>
                        <p className="text-[9px] sm:text-xs text-slate-700 font-normal leading-tight sm:leading-relaxed">{SOLUTIONS[3].desc}</p>
                    </Reveal>
                </div>

                <Reveal>
                    <a
                        href="#lien-he"
                        className="inline-flex items-center gap-1.5 px-5 py-2 sm:px-6 sm:py-2.5 rounded-full font-bold text-white text-[10px] sm:text-xs bg-[#F2680C] hover:bg-[#D95B0A] shadow-md transition-all uppercase"
                    >
                        <Phone size={12} fill="#FFF" />
                        <span>ĐĂNG KÝ NHẬN TƯ VẤN</span>
                    </a>
                </Reveal>
            </div>
        </section>
    );
}

/* ---------------------------------------------------------------
   6. WORKFLOW TIMELINE SECTION (Dàn song song 1 hàng)
   --------------------------------------------------------------- */
const WORKFLOW_STEPS = [
    { step: "01. Khảo sát & Tư vấn", desc: "Bạn điền Form đăng ký, CMIC MEDIA sẽ phân tích các nghẽn cổ chai trong quy trình." },
    { step: "02. Thiết kế giải pháp", desc: "Lên sơ đồ logic và demo cách hệ thống n8n & AI Agent xử lý công việc." },
    { step: "03. Xây dựng & Huấn luyện", desc: "Tiến hành kết nối phần mềm và nạp dữ liệu huấn luyện AI." },
    { step: "04. Nghiệm thu & Bàn giao", desc: "Chạy thử nghiệm, tinh chỉnh và chuyển giao tài khoản quản lý cho doanh nghiệp." }
];

function WorkflowSection() {
    return (
        <section className="pb-10 md:pb-16 bg-white border-t border-slate-100">
            <div className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8 space-y-5">
                <Reveal>
                    <h2 className="text-base sm:text-xl font-bold uppercase text-left text-[#14181F] tracking-tight">
                        QUY TRÌNH HỢP TÁC
                    </h2>
                </Reveal>

                <div className="space-y-3">
                    {WORKFLOW_STEPS.map((item, idx) => (
                        <Reveal key={idx} delay={idx * 80} className="grid grid-cols-12 gap-1.5 sm:gap-3 items-center">
                            {/* Khối tiêu đề bước (5/12) */}
                            <div
                                className="col-span-5 bg-[#F2680C] text-white font-bold p-2 sm:p-3 text-[10px] sm:text-xs md:text-sm rounded-md truncate text-left"
                                style={{ clipPath: 'polygon(0% 0%, 92% 0%, 100% 50%, 92% 100%, 0% 100%)' }}
                            >
                                {item.step}
                            </div>
                            {/* Khối mô tả bước (7/12) */}
                            <div className="col-span-7 bg-white p-2 sm:p-3 rounded-lg border-1.5 border-orange-400 text-[9px] sm:text-xs text-slate-800 leading-tight sm:leading-relaxed text-left">
                                {item.desc}
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ---------------------------------------------------------------
   7. FAQS SECTION
   --------------------------------------------------------------- */
const FAQS = [
    {
        q: "AI Agent là gì và nó khác gì với một con Chatbot thông thường?",
        a: "Chatbot thông thường chỉ trả lời theo kịch bản có sẵn. AI Agent (Trợ lý thông minh) có trí tuệ nhân tạo học toàn bộ tài liệu công ty bạn, tự tư vấn, trò chuyện tự nhiên như người thật và tự xử lý tác vụ."
    },
    {
        q: "n8n là gì và tại sao CMIC MEDIA lại lựa chọn nền tảng này?",
        a: "n8n là nền tảng tự động hóa quy trình làm việc (Workflow Automation) mạnh mẽ nhất thế giới, tối ưu chi phí vận hành lâu dài và đảm bảo tính bảo mật dữ liệu tuyệt đối."
    },
    {
        q: "Doanh nghiệp của tôi có cần phải biết lập trình hay rành công nghệ không?",
        a: "Hoàn toàn không. CMIC MEDIA chịu trách nhiệm toàn bộ từ khảo sát, lập trình đến bàn giao. Đội ngũ của bạn sử dụng công cụ quen thuộc như Google Sheets, Zalo, CRM bình thường."
    },
    {
        q: "Dữ liệu khách hàng và thông tin nội bộ có được bảo mật không?",
        a: "Bảo mật tuyệt đối. Hệ thống n8n được thiết lập trên hạ tầng máy chủ riêng (Private Server) được mã hóa của doanh nghiệp bạn."
    },
    {
        q: "Chi phí duy trì hệ thống này hàng tháng có đắt không?",
        a: "Rất tối ưu so với việc thuê nhân sự. Bạn chỉ trả chi phí nhỏ cho máy chủ và AI, đổi lại có trợ lý làm việc 24/7 không bao giờ nghỉ."
    }
];

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

function FaqSection() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="relative w-full py-8 md:py-12 px-3 md:px-16 bg-[#FCFAF8] overflow-hidden font-sans border-t border-gray-200">
            {/* ---- BẮT ĐẦU NỀN MỚI ---- */}
            <div className="absolute inset-0 flow-lines opacity-50 z-0 pointer-events-none" />
            <Ambient tone="teal" />
            <div className="absolute inset-0 grain-soft opacity-40 z-0 pointer-events-none" />
            {/* ---- KẾT THÚC NỀN MỚI ---- */}

            <div className="relative z-10 w-full flex flex-col space-y-4 max-w-4xl mx-auto">
                <Reveal className="w-full flex items-center justify-between border-b-2 border-[#14181F]/80 pb-1">
                    <div className="flex items-center gap-2 w-full">
                        <h2 className="text-base sm:text-xl font-black text-[#14181F] tracking-tight uppercase shrink-0">
                            FAQs
                        </h2>
                    </div>
                </Reveal>

                <div className="w-full flex flex-col space-y-2.5 text-left">
                    {FAQS.map((faq, index) => {
                        const isOpen = openIndex === index;
                        const formattedIndex = String(index + 1).padStart(2, "0");

                        return (
                            <Reveal key={index} delay={index * 60} className="w-full flex flex-col space-y-1 border-b border-gray-200/80 pb-2">
                                <button
                                    type="button"
                                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                    className="w-full text-left flex items-start justify-between gap-2 cursor-pointer group py-1"
                                >
                                    {/* Tiêu đề câu hỏi */}
                                    <h3 className="text-xs sm:text-sm md:text-base font-extrabold text-[#14181F] flex items-start gap-1.5 leading-snug group-hover:text-[#C96F1E] transition-colors">
                                        <span className="text-[#C96F1E] text-xs mt-0.5 shrink-0">➤</span>
                                        <span className="pt-0.5">
                                            {formattedIndex}. {faq.q}
                                        </span>
                                    </h3>

                                    <span
                                        className="shrink-0 mt-0.5 text-[#14181F] transition-transform duration-200"
                                        style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
                                    >
                                        <ChevronDown className="w-4 h-4" />
                                    </span>
                                </button>

                                {isOpen && (
                                    <div className="pl-3 sm:pl-4 pt-1 pb-1">
                                        <div className="text-[#23272F] text-xs sm:text-sm leading-relaxed font-medium bg-white/80 backdrop-blur-sm p-2.5 sm:p-3 rounded-lg border border-gray-200/80 shadow-2xs">
                                            {faq.a}
                                        </div>
                                    </div>
                                )}
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

/* ---------------------------------------------------------------
   MAIN LANDING PAGE COMPONENT
   --------------------------------------------------------------- */
export default function CmicLanding() {
    return (
        <div className="min-h-screen bg-white text-[#14181F] font-sans antialiased selection:bg-[#F2680C] selection:text-white">
            <HeroSection />
            <ComparisonSection />
            <VideoContactSection />
            <PainPointsSection />
            <SolutionSection />
            <WorkflowSection />
            <FaqSection />

            <style>{`
                .reveal-on-scroll {
                    opacity: 0;
                    transform: translateY(28px);
                    transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
                    will-change: opacity, transform;
                }
                .reveal-on-scroll.is-visible {
                    opacity: 1;
                    transform: translateY(0);
                }
                @media (prefers-reduced-motion: reduce) {
                    .reveal-on-scroll {
                        opacity: 1;
                        transform: none;
                        transition: none;
                    }
                }
            `}</style>
        </div>
    );
}