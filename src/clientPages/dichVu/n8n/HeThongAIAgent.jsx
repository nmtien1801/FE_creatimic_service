import React, { useState } from "react";
import { ChevronDown, Phone, Play, PlayCircle, Zap, ArrowRight, Bot, Clock, AlertTriangle, CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";
import ContactForm from '../../../components/FormContact';

/* ---------------------------------------------------------------
   BRAND COLOR PALETTE & TOKENS
   --------------------------------------------------------------- */
const C = {
    ink: "#14181F",          // Dark Background / Main Text
    orange: "#F2680C",       // Brand Orange
    orangeHover: "#D95B0A",
    navy: "#1D428A",         // Brand Navy
    bgLight: "#F7F8FC",      // Off-white Background
    cardBg: "#FFFFFF",
    border: "#E2E8F0",
    dimText: "#64748B",
};

const bgSession1 = "/agent/bgHero.png";
const bgSession31 = "/agent/bgSs31.png";
const bgSession32 = "/agent/bgSs32.png";
const bgSession33 = "/agent/bgSs33.png";
const bgSession5 = "/agent/bgSs5.png";
const bgSession7 = "/agent/bgSs7.png";

/* ---------------------------------------------------------------
   1. HERO SECTION (Gradient, Glassmorphic AI Card & CTA Glow)
   --------------------------------------------------------------- */
function HeroSection() {
    return (
        <section className="relative w-full pt-20 pb-24 md:pt-32 md:pb-62 overflow-hidden text-white bg-cover bg-center bg-no-repeat">
            {/* 1. Lớp Ảnh Nền bgSession1 */}
            <div
                className="absolute inset-0 w-full h-full pointer-events-none z-0"
                style={{
                    backgroundImage: `url(${bgSession1})`,
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            />

            {/* 2. Lớp Overlay tối nhẹ (giúp chữ và card hiển thị rõ ràng trên mọi hình nền) */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] pointer-events-none z-0" />

            {/* 3. Nội dung Hero */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Grid */}
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-center">
                    {/* Left Column: Heading & CTAs */}
                    <div className="lg:col-span-7 text-left space-y-4">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F2680C]/10 border border-[#F2680C]/30 text-[#F2680C] text-xs font-bold uppercase tracking-wider">
                            Kỷ Nguyên Tự Động Hoá Doanh Nghiệp
                        </div>

                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white uppercase tracking-tight leading-tight">
                            Ứng Dụng <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2680C] via-orange-400 to-amber-300">
                                AI Agent N8N
                            </span>
                        </h1>

                        <p className="text-sm sm:text-base font-normal text-slate-300 max-w-xl leading-relaxed">
                            Giải phóng <span className="text-[#F2680C] font-semibold underline decoration-[#F2680C]/40">80% nguồn lực vận hành</span> thủ công cho SME bằng các trợ lý thông minh làm việc xuyên suốt 24/7.
                        </p>

                        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                            <a
                                href="#lien-he"
                                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white text-xs md:text-sm bg-[#F2680C] shadow-[0_0_20px_rgba(242,104,12,0.35)] hover:shadow-[0_0_30px_rgba(242,104,12,0.5)] hover:bg-[#D95B0A] transition-all duration-300 uppercase"
                            >
                                <Phone size={15} fill="#FFF" />
                                <span>ĐĂNG KÝ NHẬN TƯ VẤN</span>
                            </a>

                            <a
                                href="#demo-video"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 backdrop-blur-md transition-all text-xs md:text-sm"
                            >
                                <Play size={15} className="text-[#F2680C] fill-[#F2680C]" />
                                <span>Xem Video Demo</span>
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Glassmorphic Floating AI Card */}
                    <div className="lg:col-span-5 relative">
                        <div className="relative p-6 rounded-2xl bg-slate-900/80 border border-white/15 backdrop-blur-xl shadow-2xl space-y-4">
                            <div className="flex items-center justify-between pb-3 border-b border-white/10">
                                <div className="flex items-center gap-2.5">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#F2680C] to-amber-400 flex items-center justify-center shadow-md">
                                        <Zap size={20} className="text-white fill-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-sm">CMIC AI Agent</h4>
                                        <p className="text-[11px] text-emerald-400 flex items-center gap-1 font-medium">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                                            Active System 24/7
                                        </p>
                                    </div>
                                </div>
                                <span className="text-[10px] font-mono font-bold text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                                    v2.4
                                </span>
                            </div>

                            <div className="space-y-2 text-xs">
                                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                                    <span className="text-slate-300">Đồng bộ CRM Lead</span>
                                    <span className="font-semibold text-emerald-400">Tự động 1s</span>
                                </div>

                                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                                    <span className="text-slate-300">Phản hồi khách ban đêm</span>
                                    <span className="font-semibold text-cyan-400">100% Instant</span>
                                </div>

                                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                                    <span className="text-slate-300">Báo cáo ROI Realtime</span>
                                    <span className="font-semibold text-purple-400">Gửi Telegram/Zalo</span>
                                </div>
                            </div>

                            <div className="p-3 rounded-xl bg-gradient-to-r from-[#F2680C]/20 to-transparent border border-[#F2680C]/30 flex items-center justify-between">
                                <span className="text-xs font-semibold text-white">Cắt giảm chi phí nhân sự</span>
                                <span className="text-base font-extrabold text-[#F2680C]">~ 80%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------------------------------------------------------
   2. COMPARISON SECTION (Thủ công vs AI Agent)
   --------------------------------------------------------------- */
function ComparisonSection() {
    return (
        <section className="py-16 md:py-24 bg-[#F7F8FC] border-b border-slate-200/80 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Dẫn Dắt */}
                <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
                    <span className="text-[#F2680C] font-extrabold text-xs uppercase tracking-widest bg-[#F2680C]/10 px-3.5 py-1.5 rounded-full border border-[#F2680C]/20">
                        Sự Chuyển Đổi Mô Hình
                    </span>
                    <h2 className="text-2xl md:text-3xl font-black text-[#14181F] uppercase">
                        Bứt Phá Vận Hành Cùng AI Agent
                    </h2>
                </div>

                {/* Khối Chuyển Đổi (Transformation Container) */}
                <div className="relative grid md:grid-cols-2 gap-6 md:gap-8 items-stretch">

                    {/* NÚT MŨI TÊN CHUYỂN ĐỔI Ở GIỮA (Bridge Element) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-[#F2680C] text-white flex items-center justify-center shadow-lg shadow-[#F2680C]/30 ring-4 ring-white animate-pulse">
                            <ArrowRight size={22} strokeWidth={2.5} />
                        </div>
                    </div>

                    {/* 1. KHỐI HIỆN TRẠNG: VẬN HÀNH THỦ CÔNG (TRÁI) */}
                    <div className="relative p-6 md:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-md flex flex-col justify-between space-y-6 group hover:border-red-300 transition-all">
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 text-xs font-bold uppercase tracking-wider">
                                    <AlertTriangle size={14} /> Trước Khi Có AI
                                </div>
                                <span className="text-xs font-mono text-slate-400 font-semibold">Thủ công</span>
                            </div>

                            <h3 className="text-lg md:text-xl font-black text-[#14181F]">
                                Quy Trình Rời Rạc & Chậm Chạp
                            </h3>

                            <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-normal">
                                Ngừng lãng phí hàng giờ liền của nhân sự vào những <strong className="text-red-600 font-semibold">tác vụ lặp đi lặp lại một cách thủ công</strong>, phản hồi khách chậm và rò rỉ cơ hội bán hàng vào tay đối thủ.
                            </p>
                        </div>

                        {/* Metrics So Sánh - Bên Cũ */}
                        <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-3 text-xs">
                            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                                <span className="text-slate-400 block text-[11px]">Tốc độ phản hồi</span>
                                <span className="font-extrabold text-red-600 text-sm">Vài giờ - 1 ngày</span>
                            </div>
                            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                                <span className="text-slate-400 block text-[11px]">Thời gian hoạt động</span>
                                <span className="font-extrabold text-slate-700 text-sm">8 tiếng / ngày</span>
                            </div>
                        </div>
                    </div>

                    {/* Mũi tên chuyển đổi trên Mobile */}
                    <div className="flex md:hidden justify-center -my-3 z-20">
                        <div className="w-10 h-10 rounded-full bg-[#F2680C] text-white flex items-center justify-center shadow-md">
                            <ArrowRight size={18} className="rotate-90" />
                        </div>
                    </div>

                    {/* 2. KHỐI ĐÍCH ĐẾN: TỰ ĐỘNG HOÁ AI AGENT (PHẢI) */}
                    <div className="relative p-6 md:p-8 rounded-3xl bg-gradient-to-br from-white via-orange-50/30 to-orange-100/20 border-2 border-[#F2680C]/40 shadow-xl flex flex-col justify-between space-y-6 hover:shadow-2xl transition-all">

                        {/* Glow Badge Nổi Bật */}
                        <div className="absolute -top-3 right-6 bg-[#F2680C] text-white text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-md tracking-wider">
                            Đột phá hiệu suất
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2680C]/10 border border-[#F2680C]/30 text-[#F2680C] text-xs font-bold uppercase tracking-wider">
                                    <Bot size={15} /> Tự Động Hoá AI Agent
                                </div>
                                <span className="text-xs font-mono text-[#F2680C] font-bold">n8n Workflow</span>
                            </div>

                            <h3 className="text-lg md:text-xl font-black text-[#14181F]">
                                Vận Hành Thông Minh 24/7
                            </h3>

                            <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-normal">
                                CMIC MEDIA thiết lập các trợ lý vận hành thông minh (AI Agents) <strong className="text-[#F2680C] font-semibold">tự động xử lý công việc 24/7 với độ chính xác tuyệt đối</strong> và chi phí vận hành tối giản.
                            </p>
                        </div>

                        {/* Metrics So Sánh - Bên Mới */}
                        <div className="pt-4 border-t border-[#F2680C]/20 grid grid-cols-2 gap-3 text-xs">
                            <div className="p-2.5 rounded-xl bg-white border border-[#F2680C]/20 shadow-xs">
                                <span className="text-slate-500 block text-[11px]">Tốc độ phản hồi</span>
                                <span className="font-extrabold text-[#F2680C] text-sm">Tức thì (&lt; 1 giây)</span>
                            </div>
                            <div className="p-2.5 rounded-xl bg-white border border-[#F2680C]/20 shadow-xs">
                                <span className="text-slate-500 block text-[11px]">Thời gian hoạt động</span>
                                <span className="font-extrabold text-emerald-600 text-sm">24/7 Không nghỉ</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

/* ---------------------------------------------------------------
   3. YOUTUBE DEMO & CONTACT FORM (Kèm Background bgSession31 & tái sử dụng ContactForm)
   --------------------------------------------------------------- */
function VideoContactSection() {
    return (
        <section id="demo-video" className="relative w-full py-12 md:py-16 overflow-hidden bg-[#F7F8FC]">
            
            {/* =========================================================
               HỆ THỐNG GRID TỌA ĐỘ BẮT ẢNH NỀN (10 CỘT X 10 HÀNG)
               ========================================================= */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
                {/* 1. bgSs31: Góc dưới bên trái (w: 5/10 = 50%, h: 4/10 = 40%) */}
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

                {/* 2. bgSs32: Góc trên bên phải (w: 2/10 = 20%, h: 3/10 = 30%) */}
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

                {/* 3. bgSs33: Chính giữa bên phải (w: 8/10 = 80%, h: 5/10 = 50%) */}
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

            {/* =========================================================
               NỘI DUNG CHÍNH (XUẤT HIỆN ĐÈ LÊN BACKGROUNDS)
               ========================================================= */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                {/* YouTube Video Section */}
                <div className="pb-12 md:pb-16 px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">

                        {/* 1. CỘT TRÁI (LEFT COLUMN): TITLE, DESCRIPTION & FEATURE BADGES */}
                        <div className="lg:col-span-7 text-left space-y-6">
                            {/* Badge Tiêu Đề */}
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2680C]/10 border border-[#F2680C]/25 text-[#F2680C] text-xs font-extrabold uppercase tracking-widest">
                                <Sparkles size={14} className="animate-pulse" />
                                <span>Trải Nghiệm Thực Tế</span>
                            </div>

                            {/* Title */}
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#14181F] tracking-tight uppercase leading-tight">
                                Xem Kịch Bản {" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2680C] to-amber-500">
                                    AI Agent N8N
                                </span> {" "}
                                Tự Động Hoá
                            </h2>

                            {/* Subtitle */}
                            <p className="text-xs md:text-sm text-slate-600 font-normal leading-relaxed">
                                Khám phá cách các trợ lý AI vận hành thực tế: tự động tiếp nhận Lead, đồng bộ dữ liệu CRM và phản hồi khách hàng thông minh chỉ trong vài giây.
                            </p>

                            {/* Danh Sách 3 Điểm Nhấn (Feature Cards Dàn Ngang) */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                                <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-center gap-3 hover:border-[#F2680C]/40 transition-colors">
                                    <div className="w-9 h-9 rounded-lg bg-[#F2680C]/10 flex items-center justify-center shrink-0">
                                        <Zap size={18} className="text-[#F2680C]" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xs md:text-sm text-[#14181F]">Xử lý tức thì</h4>
                                        <p className="text-[11px] text-slate-500 leading-tight">Tốc độ phản hồi khách hàng &lt; 1 giây</p>
                                    </div>
                                </div>

                                <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-center gap-3 hover:border-emerald-500/40 transition-colors">
                                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                                        <CheckCircle2 size={18} className="text-emerald-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xs md:text-sm text-[#14181F]">Độ chính xác 100%</h4>
                                        <p className="text-[11px] text-slate-500 leading-tight">Chuẩn hóa dữ liệu, không sai sót</p>
                                    </div>
                                </div>

                                <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-center gap-3 hover:border-purple-500/40 transition-colors">
                                    <div className="w-9 h-9 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                                        <Bot size={18} className="text-purple-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xs md:text-sm text-[#14181F]">Tự học dữ liệu</h4>
                                        <p className="text-[11px] text-slate-500 leading-tight">Được huấn luyện theo kịch bản công ty bạn</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2. CỘT PHẢI (RIGHT COLUMN): KHUNG VIDEO YOUTUBE EMBED */}
                        <div className="lg:col-span-5">
                            <div className="relative group">
                                {/* Hiệu ứng Halo Glow phát sáng phía sau */}
                                <div className="absolute -inset-1.5 bg-gradient-to-r from-[#F2680C]/30 via-purple-500/20 to-[#1D428A]/30 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500 pointer-events-none" />

                                {/* Khung Window Container */}
                                <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl border border-slate-200/80 bg-slate-950">
                                    {/* Thanh Header Giả Lập Phần Mềm macOS */}
                                    <div className="bg-slate-900/90 border-b border-white/10 px-4 py-2.5 flex items-center justify-between text-xs text-slate-400">
                                        <div className="flex items-center gap-1.5">
                                            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                                            <span className="ml-2 text-[11px] font-mono text-slate-400 hidden sm:inline">
                                                demo.cmicmedia.vn / ai-agent-n8n
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-1.5 font-semibold text-emerald-400 text-[11px]">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                                            Live Demo Stream
                                        </div>
                                    </div>

                                    {/* YouTube Embed */}
                                    <iframe
                                        className="w-full aspect-video"
                                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                        title="CMIC MEDIA AI AGENT N8N DEMO"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Contact Form Container - Tái Sử Dụng ContactForm Component */}
                <div id="lien-he" className="max-w-2xl mx-auto rounded-2xl bg-white/95 backdrop-blur-sm shadow-xl">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}

/* ---------------------------------------------------------------
   4. PAIN POINTS SECTION (Thực trạng doanh nghiệp - 4 Cột Ngang)
   --------------------------------------------------------------- */
const PAIN_POINTS = [
    {
        img: "/agent/img2.png",
        desc: "Nhân sự phải copy-paste thông tin khách hàng tiềm năng từ Facebook, Website vào Google Sheets bằng tay một cách chậm chạp."
    },
    {
        img: "/agent/img3.png",
        desc: "Khách hàng nhắn tin hỏi mua hàng vào ban đêm, phải đợi đến sáng hôm sau nhân sự mới rep khiến tỷ lệ rớt đơn tăng cao."
    },
    {
        img: "/agent/img4.png",
        desc: "Việc gửi email xác nhận, đẩy thông báo đơn hàng, cập nhật trạng thái vận chuyển hoàn toàn làm thủ công, dễ xảy ra sai sót."
    },
    {
        img: "/agent/img5.png",
        desc: "Chủ doanh nghiệp mất quá nhiều thời gian để thúc giục nhân sự làm báo cáo tổng hợp dữ liệu từ nhiều kênh."
    }
];

function PainPointsSection() {
    return (
        <section className="py-16 md:py-20 bg-[#1D428A] text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-center">
                <div className="max-w-2xl mx-auto space-y-2">
                    <span className="text-[#F2680C] font-bold text-xs uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full border border-white/15">
                        THỰC TRẠNG DOANH NGHIỆP
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#F2680C] uppercase leading-snug">
                        Bộ máy của bạn có đang bị quá tải bởi các tác vụ rác?
                    </h2>
                    <p className="text-xs md:text-sm text-slate-200 font-normal">
                        Hầu hết các doanh nghiệp vừa và nhỏ hiện nay đều đang gặp tình trạng <span className="font-semibold text-amber-300">"nghẽn cổ chai"</span> trong khâu vận hành hằng ngày vì:
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {PAIN_POINTS.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/15 shadow-lg text-left space-y-3"
                        >
                            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/10">
                                <img src={item.img} alt="Thực trạng" className="w-full h-full object-cover" />
                            </div>
                            <p className="text-xs text-slate-100 font-normal leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-[#F2680C] uppercase leading-relaxed pt-2">
                    BẠN CÓ MUỐN TIẾT KIỆM NGUỒN LỰC CHO DOANH NGHIỆP,<br />CẮT GIẢM CÁC CHI PHÍ VẬN HÀNH KHÔNG CẦN THIẾT???
                </h3>
            </div>
        </section>
    );
}

/* ---------------------------------------------------------------
   5. SOLUTION SECTION (N8N Đóng khung)
   --------------------------------------------------------------- */
const SOLUTIONS = [
    {
        title: "Tự động hóa đồng bộ dữ liệu",
        desc: "Khi có Lead mới từ bất kỳ kênh nào, hệ thống tự động đẩy dữ liệu về CRM, tự phân phối cho sale trực ban và thông báo ngay về Zalo/Telegram của quản lý trong vòng 1 giây."
    },
    {
        title: "Trợ lý Chatbot AI",
        desc: "AI được huấn luyện bằng chính tài liệu sản phẩm và quy trình của doanh nghiệp, tự động tư vấn, trả lời các câu hỏi của khách hàng theo thời gian thực một cách tự nhiên như người thật."
    },
    {
        title: "Tự động hóa Chiến dịch Marketing",
        desc: "Tự động phân loại nhóm khách hàng dựa trên hành vi mua sắm, kích hoạt chuỗi Email Marketing chăm sóc, gửi tin nhắn chúc mừng sinh nhật cá nhân hóa hoàn toàn tự động."
    },
    {
        title: "Báo cáo dữ liệu theo thời gian thực",
        desc: "Định kỳ cuối ngày hoặc cuối tuần, AI Agent tự động quét dữ liệu chi phí quảng cáo, lượng lead đổ về, tự động tính toán ROI và xuất thành một dashboard báo cáo trực quan gửi thẳng vào group chat của ban giám đốc."
    }
];

function SolutionSection() {
    return (
        <section className="relative w-full py-16 md:py-20 bg-white overflow-hidden">
            {/* 1. Lớp Ảnh Nền Sơ Đồ Vi Mạch Chìm (bgSession5) */}
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

            {/* 2. Nội dung chính nằm đè lên nền */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-center">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#14181F] uppercase leading-tight">
                    <span className="text-[#F2680C]">GIẢI</span> CỖ MÁY KHÔNG NGỦ CỦA DOANH NGHIỆP <br />
                    <span className="text-[#F2680C]">PHÁP</span> AI AGENT (N8N)
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
                    {/* Khối 1: Tự động hóa đồng bộ dữ liệu */}
                    <div className="p-5 rounded-2xl border-2 border-black text-left bg-white/90 backdrop-blur-xs shadow-sm space-y-1.5 z-10">
                        <h4 className="text-sm font-bold text-[#F2680C]">{SOLUTIONS[0].title}</h4>
                        <p className="text-xs text-slate-700 font-normal leading-relaxed">{SOLUTIONS[0].desc}</p>
                    </div>

                    {/* Khối 2: Trợ lý Chatbot AI */}
                    <div className="p-5 rounded-2xl border-2 border-black text-left bg-white/90 backdrop-blur-xs shadow-sm space-y-1.5 z-10">
                        <h4 className="text-sm font-bold text-[#F2680C]">{SOLUTIONS[1].title}</h4>
                        <p className="text-xs text-slate-700 font-normal leading-relaxed">{SOLUTIONS[1].desc}</p>
                    </div>

                    {/* Khối Trung Tâm: LOGO N8N & MÔ TẢ */}
                    <div className="md:col-span-2 py-4 flex flex-col items-center justify-center space-y-3 z-10">
                        {/* Logo N8N Chữ Lớn 3D Xanh Công Nghệ */}
                        <div className="w-full max-w-[280px] md:max-w-[360px] mx-auto flex items-center justify-center">
                            <img
                                src="/agent/img1.png"
                                alt="N8N AI Agent"
                                className="w-full h-auto object-contain drop-shadow-md"
                            />
                        </div>
                        <p className="text-xs md:text-sm text-slate-900 font-bold max-w-md leading-relaxed text-center">
                            Nền tảng tự động hóa quy trình mạnh mẽ nhất hiện nay kết hợp với Trí Tuệ Nhân Tạo (AI) để xây dựng hệ thống tự vận hành chuyên sâu cho bạn.
                        </p>
                    </div>

                    {/* Khối 3: Tự động hóa Chiến dịch Marketing */}
                    <div className="p-5 rounded-2xl border-2 border-black text-left bg-white/90 backdrop-blur-xs shadow-sm space-y-1.5 z-10">
                        <h4 className="text-sm font-bold text-[#F2680C]">{SOLUTIONS[2].title}</h4>
                        <p className="text-xs text-slate-700 font-normal leading-relaxed">{SOLUTIONS[2].desc}</p>
                    </div>

                    {/* Khối 4: Báo cáo dữ liệu theo thời gian thực */}
                    <div className="p-5 rounded-2xl border-2 border-black text-left bg-white/90 backdrop-blur-xs shadow-sm space-y-1.5 z-10">
                        <h4 className="text-sm font-bold text-[#F2680C]">{SOLUTIONS[3].title}</h4>
                        <p className="text-xs text-slate-700 font-normal leading-relaxed">{SOLUTIONS[3].desc}</p>
                    </div>
                </div>

                {/* Nút Đăng Ký */}
                <div className="pt-2">
                    <a
                        href="#lien-he"
                        className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-white text-xs md:text-sm bg-[#F2680C] hover:bg-[#D95B0A] shadow-md transition-all uppercase"
                    >
                        <Phone size={14} fill="#FFF" />
                        <span>ĐĂNG KÝ NHẬN TƯ VẤN</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
/* ---------------------------------------------------------------
   6. WORKFLOW TIMELINE SECTION (Quy Trình 4 Bước Vạt Góc)
   --------------------------------------------------------------- */
const WORKFLOW_STEPS = [
    { step: "01. Khảo sát & Tư vấn", desc: "Bạn điền Form đăng ký, CMIC MEDIA sẽ liên hệ để phân tích các \"nghẽn cổ chai\" trong quy trình hiện tại của bạn." },
    { step: "02. Thiết kế giải pháp", desc: "Chúng tôi lên sơ đồ logic và demo cách hệ thống n8n & AI Agent sẽ xử lý công việc đó." },
    { step: "03. Xây dựng & Huấn luyện", desc: "Tiến hành kết nối các phần mềm và nạp dữ liệu huấn luyện AI." },
    { step: "04. Nghiệm thu & Bàn giao", desc: "Chạy thử nghiệm, tinh chỉnh và chuyển giao tài khoản quản lý cho doanh nghiệp." }
];

function WorkflowSection() {
    return (
        <section className="py-16 md:py-20 bg-white border-t border-slate-100">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                <h2 className="text-xl md:text-2xl font-bold uppercase text-left text-[#14181F] tracking-tight">
                    QUY TRÌNH HỢP TÁC
                </h2>

                <div className="space-y-4">
                    {WORKFLOW_STEPS.map((item, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row items-center gap-3">
                            <div
                                className="w-full sm:w-1/2 bg-[#F2680C] text-white font-bold p-3 text-xs md:text-sm rounded-md"
                                style={{ clipPath: 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)' }}
                            >
                                {item.step}
                            </div>
                            <div className="w-full sm:w-1/2 bg-white p-3 rounded-lg border-2 border-orange-400 text-xs text-slate-800 leading-relaxed">
                                {item.desc}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ---------------------------------------------------------------
   7. FAQS SECTION (Cấu trúc gốc 100% - Tinh chỉnh font-size)
   --------------------------------------------------------------- */
const FAQS = [
    {
        q: "AI Agent là gì và nó khác gì với một con Chatbot thông thường?",
        a: "Chatbot thông thường chỉ trả lời theo kịch bản có sẵn (khách nhấn nút A thì hiện câu trả lời A). Nếu khách hỏi lệch đi một chút là chatbot sẽ \"đơ\".\n\nAI Agent (Trợ lý thông minh) thì cao cấp hơn nhiều. Nó có \"não bộ\" là trí tuệ nhân tạo (như ChatGPT, Claude) được học toàn bộ tài liệu sản phẩm và quy trình của riêng công ty bạn. AI Agent biết tự tư duy, hiểu ý định của khách hàng để tự động trò chuyện tự nhiên như người thật, tự xử lý tác vụ (như tạo lead, kiểm tra kho) và tự sửa lỗi khi quy trình gặp sự cố."
    },
    {
        q: "n8n là gì và tại sao CMIC MEDIA lại lựa chọn nền tảng này để xây dựng hệ thống tự động hoá cho doanh nghiệp?",
        a: "n8n là một trong những nền tảng tự động hóa quy trình làm việc (Workflow Automation) mạnh mẽ và linh hoạt nhất hiện nay trên thế giới. Khác với các công cụ cũ chỉ nối các ứng dụng lại với nhau một cách đơn giản, n8n cho phép can thiệp sâu vào logic code, xử lý dữ liệu phức tạp và tích hợp trực tiếp các mô hình Trí tuệ nhân tạo (AI).\n\nCMIC MEDIA chọn n8n vì nó giúp doanh nghiệp tối ưu chi phí vận hành lâu dài (không bị tính phí ngặt nghèo theo từng lượt chạy như các nền tảng khác) và đảm bảo tính bảo mật dữ liệu tuyệt đối."
    },
    {
        q: "Doanh nghiệp của tôi có cần phải biết lập trình hay rành công nghệ để sử dụng không?",
        a: "Hoàn toàn không. CMIC MEDIA sẽ chịu trách nhiệm toàn bộ từ khâu khảo sát quy trình, lập trình, kết nối API cho đến bàn giao hệ thống hoàn chỉnh. Đội ngũ của bạn chỉ cần sử dụng các công cụ quen thuộc hàng ngày như Google Sheets, Zalo, hay CRM như bình thường. Hệ thống tự động hóa sẽ chạy ngầm ở phía sau."
    },
    {
        q: "Dữ liệu khách hàng và thông tin nội bộ của công ty có được bảo mật không?",
        a: "Bảo mật tuyệt đối. Khác với các nền tảng đám mây chia sẻ tài nguyên công cộng, hệ thống n8n được CMIC MEDIA thiết lập trên hạ tầng máy chủ riêng (Private Server) được mã hóa của doanh nghiệp bạn. Dữ liệu chỉ lưu chuyển nội bộ giữa các ứng dụng của bạn mà không bị rò rỉ ra bên ngoài."
    },
    {
        q: "Chi phí duy trì hệ thống này hàng tháng có đắt không?",
        a: "Rất tối ưu so với việc thuê nhân sự. Bạn chỉ cần trả chi phí rất nhỏ cho hạ tầng máy chủ và chi phí sử dụng AI (chỉ vài trăm nghìn đến vài triệu/tháng tùy quy mô doanh nghiệp). Đổi lại, bạn có một \"cỗ máy\" làm việc 24/7 không bao giờ nghỉ phép, thay thế được 80% công việc thủ công của nhân sự và nâng cao hiệu suất làm việc."
    }
];

function FaqSection() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="relative w-full py-10 md:py-14 px-4 md:px-20 bg-[#FCFAF8] overflow-hidden font-sans border-t border-gray-200">
            {/* Ảnh nền Full-width tràn 100% màn hình */}
            {bgSession7 && (
                <div
                    className="absolute top-0 bottom-0 w-screen left-1/2 -translate-x-1/2 pointer-events-none z-0 scale-x-110"
                    style={{
                        backgroundImage: `url(${bgSession7})`,
                        backgroundPosition: 'center center',
                        backgroundSize: '100% 100%',
                        backgroundRepeat: 'no-repeat'
                    }}
                />
            )}

            <div className="absolute inset-0 grain-soft opacity-60 z-0 pointer-events-none" />

            <div className="relative z-10 w-full flex flex-col space-y-6 max-w-4xl mx-auto">
                {/* Header FAQ: Chữ FAQs + Đường kẻ ngang + Chấm tròn */}
                <div className="w-full flex items-center justify-between border-b-2 border-[#14181F]/80 pb-1.5">
                    <div className="flex items-center space-x-2 w-full">
                        <div className="flex items-center gap-3 w-full">
                            <h2 className="text-xl md:text-2xl font-black text-[#14181F] tracking-tight uppercase shrink-0">
                                FAQs
                            </h2>
                            <div className="h-[1.5px] bg-[#14181F] flex-1 relative">
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full border-2 border-[#14181F] bg-white" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Danh sách FAQs đóng/mở */}
                <div className="w-full flex flex-col space-y-3.5 text-left">
                    {FAQS.map((faq, index) => {
                        const isOpen = openIndex === index;
                        const formattedIndex = String(index + 1).padStart(2, "0");

                        return (
                            <div key={index} className="w-full flex flex-col space-y-1.5 border-b border-gray-200/60 pb-3">
                                <button
                                    type="button"
                                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                    className="w-full text-left focus:outline-none flex items-start justify-between gap-3 group cursor-pointer"
                                >
                                    <h3 className="text-xs md:text-sm font-bold text-[#14181F] flex items-start gap-2 leading-snug group-hover:text-[#F2680C] transition-colors">
                                        {/* Icon mũi tên tam giác đen chuẩn thiết kế */}
                                        <span className="text-black text-xs mt-0.5 shrink-0 select-none">
                                            ➤
                                        </span>
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
                                    <div className="pl-5 pt-1">
                                        <div className="text-[#4B5160] text-xs leading-relaxed whitespace-pre-line font-normal">
                                            {faq.a}
                                        </div>
                                    </div>
                                )}
                            </div>
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
        </div>
    );
}