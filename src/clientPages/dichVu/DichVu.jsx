import React, { useEffect, useRef, useState } from "react";

const serviceColumns = [
    {
        code: "WEB",
        title: "Website - Landing Page",
        titlePath: "/dich-vu/website-landing-page/tron-goi",
        imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80",
        description:
            "Nền móng số đầu tiên khách hàng nhìn thấy — tốc độ nhanh, giao diện tối giản sang trọng và luôn sẵn sàng chuyển đổi.",
        items: [
            { label: "Trọn gói thiết kế & xây dựng", path: "/dich-vu/website-landing-page/tron-goi" },
            { label: "Xây dựng Website - Landing Page", path: "/dich-vu/website-landing-page/xay-dung" },
            { label: "Thiết kế giao diện Website - Landing Page", path: "/dich-vu/website-landing-page/thiet-ke-giao-dien" },
            { label: "Chăm sóc website toàn diện", path: "/dich-vu/website-landing-page/cham-soc" },
        ],
    },
    {
        code: "SOC",
        title: "Chăm sóc kênh social",
        titlePath: "/dich-vu/cham-soc-kenh-social/tron-goi",
        imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=80",
        description:
            "Duy trì nhịp xuất hiện đều đặn trên mọi nền tảng, để thương hiệu luôn được nhắc tới đúng lúc.",
        items: [
            { label: "Trọn gói kênh social", path: "/dich-vu/cham-soc-kenh-social/tron-goi" },
            { label: "Chăm sóc Fanpage", path: "/dich-vu/cham-soc-kenh-social/fanpage" },
            { label: "Chăm sóc Instagram", path: "/dich-vu/cham-soc-kenh-social/instagram" },
            { label: "Chăm sóc YouTube", path: "/dich-vu/cham-soc-kenh-social/youtube" },
            { label: "Chăm sóc TikTok", path: "/dich-vu/cham-soc-kenh-social/tiktok" },
            { label: "Chăm sóc LinkedIn", path: "/dich-vu/cham-soc-kenh-social/linkedin" },
            { label: "Email Marketing", path: "/dich-vu/cham-soc-kenh-social/email-marketing" },
        ],
    },
    {
        code: "AI",
        title: "Hệ thống AI Agent (n8n)",
        titlePath: "/dich-vu/he-thong-ai-agent",
        imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1000&q=80",
        description:
            "Tự động hoá vận hành bằng AI — trả lời khách hàng, xử lý đơn hàng, đồng bộ dữ liệu 24/7 không nghỉ.",
        items: [
            { label: "Chatbot chăm sóc khách hàng 24/7", path: "/dich-vu/he-thong-ai-agent#chatbot" },
            { label: "Tự động hoá quy trình bán hàng & đơn hàng", path: "/dich-vu/he-thong-ai-agent#quy-trinh" },
            { label: "Kết nối đa kênh: Zalo, Facebook, Email, CRM", path: "/dich-vu/he-thong-ai-agent#ket-noi" },
            { label: "Báo cáo & phân tích dữ liệu tự động", path: "/dich-vu/he-thong-ai-agent#bao-cao" },
        ],
    },
    {
        code: "MKT",
        title: "Trọn gói Marketing",
        titlePath: "/dich-vu/tron-goi-marketing",
        imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80",
        description:
            "Một chiến lược, mọi kênh cùng chạy — từ nội dung đến quảng cáo, đo lường tới tối ưu liên tục.",
        items: [
            { label: "Chiến lược marketing tổng thể theo tháng/quý", path: "/dich-vu/tron-goi-marketing#chien-luoc" },
            { label: "Quảng cáo Facebook & Google Ads", path: "/dich-vu/tron-goi-marketing#quang-cao" },
            { label: "Sản xuất nội dung đa nền tảng", path: "/dich-vu/tron-goi-marketing#noi-dung" },
            { label: "Đo lường hiệu quả & tối ưu liên tục", path: "/dich-vu/tron-goi-marketing#toi-uu" },
        ],
    },
];

function Node({ x, y, r, label, sub, delay }) {
    return (
        <g style={{ animation: `nodeFloat 6s ease-in-out ${delay}s infinite` }}>
            <circle cx={x} cy={y} r={r + 12} fill="none" stroke="#FF5D3A" strokeOpacity="0.05" strokeWidth="1">
                <animate attributeName="r" values={`${r + 6};${r + 14};${r + 6}`} dur="3s" begin={`${delay}s`} repeatCount="indefinite" />
                <animate attributeName="stroke-opacity" values="0.15;0;0.15" dur="3s" begin={`${delay}s`} repeatCount="indefinite" />
            </circle>
            <circle cx={x} cy={y} r={r} fill="#FFFFFF" stroke="url(#gradientOrange)" strokeWidth="1.5" style={{ filter: "drop-shadow(0 10px 20px rgba(255,93,58,0.06))" }} />
            <text x={x} y={y + 4} textAnchor="middle" fontFamily="'JetBrains Mono', monospace" fontSize="10" fontWeight="600" fill="#0F172A" letterSpacing="0.5">
                {label}
            </text>
            {sub && (
                <text x={x} y={y + r + 20} textAnchor="middle" fontFamily="'Inter', sans-serif" fontSize="10" fontWeight="500" fill="#94A3B8" letterSpacing="0.2">
                    {sub}
                </text>
            )}
        </g>
    );
}

export default function LandingPage() {
    const railRef = useRef(null);
    const rowRefs = useRef([]);
    const [visibleRows, setVisibleRows] = useState({});
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const idx = Number(entry.target.dataset.idx);
                        setVisibleRows((prev) => ({ ...prev, [idx]: true }));
                    }
                });
            },
            { threshold: 0.12 }
        );
        rowRefs.current.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const onScroll = () => {
            if (!railRef.current) return;
            const rect = railRef.current.getBoundingClientRect();
            const vh = window.innerHeight || 800;
            const total = rect.height + vh * 0.4;
            const passed = vh * 0.7 - rect.top;
            const pct = Math.min(1, Math.max(0, passed / total));
            setProgress(pct);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: "#FFFFFF", color: "#334155", overflowX: "hidden" }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
                * { box-sizing: border-box; }
                html { scroll-behavior: smooth; background: #FFFFFF; }
                .display { font-family: 'Space Grotesk', sans-serif; }
                .mono { font-family: 'JetBrains Mono', monospace; }
                @keyframes nodeFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
                @keyframes dashFlow { to { stroke-dashoffset: -200; } }
                @keyframes fadeUp { from { opacity: 0; transform: translateY(35px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes softPulse { 0%,100% { box-shadow: 0 0 0 0 rgba(255,93,58,0.2); } 50% { box-shadow: 0 0 0 12px rgba(255,93,58,0); } }
                
                .row-hidden { opacity: 0; transform: translateY(35px); transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1); }
                .row-visible { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                
                .premium-section { position: relative; border-radius: 32px; overflow: hidden; background: #FFFFFF; transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1); }
                .premium-section:hover .img-reveal { transform: scale(1.03); filter: grayscale(0) cubic-bezier(0.16, 1, 0.3, 1); }
                
                .pill-container { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; width: 100%; }
                .interactive-pill { display: flex; align-items: center; padding: 16px 20px; border-radius: 16px; border: 1px solid #F1F5F9; background: #F8FAFC; text-decoration: none; color: #475569; font-size: 13.5px; font-weight: 500; transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
                .interactive-pill:hover { background: #0F172A; border-color: #0F172A; color: #FFFFFF !important; transform: translateX(4px); box-shadow: 0 10px 25px -5px rgba(15,23,42,0.15); }
                
                .btn-primary { background: #FF5D3A; color: #FFF; font-weight: 600; font-size: 14.5px; padding: 16px 36px; border-radius: 999px; text-decoration: none; transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); box-shadow: 0 12px 30px -8px rgba(255,93,58,0.3); display: inline-block; }
                .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 20px 40px -6px rgba(255,93,58,0.45); background: #ff7051 !important; }
                .btn-ghost { border: 1px solid #E2E8F0; color: #475569; font-weight: 600; font-size: 14.5px; padding: 16px 36px; border-radius: 999px; text-decoration: none; transition: all 0.3s ease; display: inline-block; }
                .btn-ghost:hover { border-color: #0F172A; background: #F8FAFC; color: #0F172A !important; }
                
                .img-reveal { filter: grayscale(0.2); transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1); }
                
                @media (max-width: 1024px) {
                    .layout-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
                    .hero-layout { grid-template-columns: 1fr !important; text-align: center; gap: 48px !important; }
                    .hero-actions { justify-content: center; }
                    .hero-illustration { max-width: 440px; margin: 0 auto; }
                    .pill-container { grid-template-columns: 1fr !important; }
                    .img-container-box { height: 320px !important; }
                    .rail-col { display: none !important; }
                    .main-content-col { grid-template-columns: 1fr !important; padding-left: 0 !important; }
                }
            `}</style>

            {/* HERO HERO CHUẨN PREMIUM */}
            <header style={{ padding: "80px 24px 100px", position: "relative", overflow: "hidden", background: "linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)" }}>
                <div style={{ position: "absolute", top: "-10%", left: "-5%", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(255,93,58,0.03) 0%, rgba(0,0,0,0) 70%)", zIndex: 0 }}></div>

                <div className="hero-layout" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 64, alignItems: "center", position: "relative", zIndex: 1 }}>
                    <div>
                        <div className="mono" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: "700", color: "#FF5D3A", border: "1px solid rgba(255,93,58,0.18)", backgroundColor: "rgba(255,93,58,0.03)", borderRadius: 999, padding: "6px 16px", marginBottom: 28, letterSpacing: "1.5px" }}>
                            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#FF5D3A", animation: "softPulse 2s infinite" }} />
                            CREATIMIC STUDIO HẠ TẦNG SỐ CAO CẤP
                        </div>
                        <h1 className="display" style={{ fontSize: "clamp(36px, 5.4vw, 56px)", lineHeight: 1.15, fontWeight: 700, color: "#0F172A", margin: "0 0 28px", letterSpacing: "-1px" }}>
                            Website, Social, AI <br />
                            & Marketing — <span style={{ background: "linear-gradient(90deg, #FF5D3A, #FF7A53)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>chạy chung một mạch.</span>
                        </h1>
                        <p style={{ fontSize: 17, lineHeight: 1.8, color: "#475569", maxWidth: 580, marginBottom: 44 }}>
                            Chúng tôi thiết kế cấu trúc trải nghiệm cao cấp, vận hành hệ thống bền bỉ và tự động hóa điểm chạm dữ liệu, giúp doanh nghiệp làm chủ nhịp điệu tăng trưởng.
                        </p>
                        <div className="hero-actions" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                            <a href="#services" className="btn-primary">
                                Khám phá hạ tầng giải pháp
                            </a>
                            <a href="#contact" className="btn-ghost">
                                Đặt lịch thảo luận chiến lược
                            </a>
                        </div>
                    </div>

                    <div className="hero-illustration">
                        <svg viewBox="0 0 480 380" width="100%" height="auto">
                            <defs>
                                <linearGradient id="gradientOrange" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#FF5D3A" />
                                    <stop offset="100%" stopColor="#FF835C" />
                                </linearGradient>
                            </defs>
                            <line x1="240" y1="190" x2="120" y2="80" stroke="rgba(15,23,42,0.05)" strokeWidth="1.5" strokeDasharray="4 6" style={{ animation: "dashFlow 6s linear infinite" }} />
                            <line x1="240" y1="190" x2="380" y2="70" stroke="rgba(15,23,42,0.05)" strokeWidth="1.5" strokeDasharray="4 6" style={{ animation: "dashFlow 6s linear infinite" }} />
                            <line x1="240" y1="190" x2="100" y2="300" stroke="rgba(15,23,42,0.05)" strokeWidth="1.5" strokeDasharray="4 6" style={{ animation: "dashFlow 6s linear infinite" }} />
                            <line x1="240" y1="190" x2="390" y2="310" stroke="rgba(15,23,42,0.05)" strokeWidth="1.5" strokeDasharray="4 6" style={{ animation: "dashFlow 6s linear infinite" }} />
                            <circle r="3.5" fill="#FF5D3A"><animateMotion dur="3.4s" repeatCount="indefinite" path="M240,190 L120,80" /></circle>
                            <circle r="3.5" fill="#0F172A"><animateMotion dur="4.1s" repeatCount="indefinite" path="M240,190 L380,70" /></circle>
                            <circle r="3.5" fill="#0F172A"><animateMotion dur="3.7s" repeatCount="indefinite" path="M240,190 L100,300" /></circle>
                            <circle r="3.5" fill="#FF5D3A"><animateMotion dur="4.4s" repeatCount="indefinite" path="M240,190 L390,310" /></circle>
                            <Node x={240} y={190} r={32} label="MẠCH" delay={0} />
                            <Node x={120} y={80} r={24} label="WEB" delay={0.3} />
                            <Node x={380} y={70} r={24} label="SOC" delay={0.6} />
                            <Node x={100} y={300} r={24} label="AI" delay={0.9} />
                            <Node x={390} y={310} r={24} label="MKT" delay={1.2} />
                        </svg>
                    </div>
                </div>
            </header>

            {/* SERVICES SECTION */}
            <main id="services" style={{ maxWidth: 1248, margin: "0 auto", padding: "0 24px 100px" }}>
                <div style={{ marginBottom: 96, textAlign: "left", maxWidth: 700 }}>
                    <div className="mono" style={{ fontSize: 11, fontWeight: "700", color: "#FF5D3A", letterSpacing: "2.5px", marginBottom: 16 }}>
                        CAPABILITIES OVERVIEW
                    </div>
                    <h2 className="display" style={{ fontSize: "clamp(28px, 3.8vw, 40px)", fontWeight: 700, margin: 0, color: "#0F172A", lineHeight: 1.25, letterSpacing: "-0.5px" }}>
                        Giải pháp phân hệ đồng bộ kiến trúc số doanh nghiệp
                    </h2>
                </div>

                <div className="main-content-col" style={{ display: "grid", gridTemplateColumns: "48px 1fr", gap: 0 }}>
                    {/* Đường ray Timeline mảnh lướt nhẹ */}
                    <div className="rail-col" ref={railRef} style={{ position: "relative" }}>
                        <div style={{ position: "absolute", left: 16, top: 20, bottom: 20, width: 1.5, background: "#F1F5F9" }} />
                        <div
                            style={{
                                position: "absolute",
                                left: 16,
                                top: 20,
                                width: 1.5,
                                height: `calc(${progress * 100}% - 40px)`,
                                background: "#FF5D3A",
                                transition: "height 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                            }}
                        />
                    </div>

                    {/* KHỐI NỘI DUNG SERVICE ĐAN XEN NGHỆ THUẬT */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "100px" }}>
                        {serviceColumns.map((col, idx) => {
                            const anchorId = { WEB: "web", SOC: "social", AI: "ai", MKT: "marketing" }[col.code];
                            const visible = !!visibleRows[idx];
                            const isEven = idx % 2 === 0;

                            return (
                                <section
                                    id={anchorId}
                                    key={col.code}
                                    ref={(el) => (rowRefs.current[idx] = el)}
                                    data-idx={idx}
                                    className={`premium-section ${visible ? "row-visible" : "row-hidden"}`}
                                    style={{ paddingBottom: "20px" }}
                                // Thêm class tổng để xử lý responsive scale và mask mờ tốt hơn
                                >
                                    <div className="layout-grid" style={{ display: "grid", gridTemplateColumns: isEven ? "1.1fr 1.3fr" : "1.3fr 1.1fr", gap: 64, alignItems: "center" }}>

                                        {/* KHỐI CHỮ */}
                                        <div style={{ order: isEven ? 1 : 2 }}>
                                            <span className="mono" style={{ display: "inline-block", fontSize: 10, fontWeight: "700", color: "#64748B", background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 6, padding: "4px 10px", marginBottom: 24, letterSpacing: 0.5 }}>
                                                MODULE_{col.code}
                                            </span>
                                            <h3 className="display" style={{ fontSize: "clamp(22px, 2.5vw, 28px)", fontWeight: 700, margin: "0 0 18px", color: "#0F172A", letterSpacing: "-0.3px" }}>
                                                {col.title}
                                            </h3>
                                            <p style={{ fontSize: 15, lineHeight: 1.75, color: "#64748B", margin: "0 0 36px" }}>
                                                {col.description}
                                            </p>

                                            {/* Grid chứa danh sách các tương tác con */}
                                            <div className="pill-container">
                                                {col.items.map((item) => (
                                                    <a key={item.path} href={item.path} className="interactive-pill">
                                                        <span>{item.label}</span>
                                                    </a>
                                                ))}
                                            </div>
                                        </div>

                                        {/* KHỐI ẢNH NGHỆ THUẬT */}
                                        <div className="img-container-box" style={{ order: isEven ? 2 : 1, width: "100%", height: "460px", borderRadius: "24px", overflow: "hidden", position: "relative", background: "#F8FAFC", boxShadow: "0 20px 50px -15px rgba(148,163,184,0.12)" }}>
                                            <img
                                                className="img-reveal"
                                                src={col.imageUrl}
                                                alt={col.title}
                                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                                loading="lazy"
                                            />
                                            {/* Lớp phủ chuyển sắc Mask mờ giúp dung hòa bức ảnh vào nền trắng sang trọng */}
                                            <div style={{
                                                position: "absolute",
                                                inset: 0,
                                                background: isEven
                                                    ? "linear-gradient(to right, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 25%)"
                                                    : "linear-gradient(to left, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 25%)"
                                            }} />
                                            <div style={{
                                                position: "absolute",
                                                inset: 0,
                                                background: "linear-gradient(to bottom, rgba(255,255,255,0) 75%, rgba(255,255,255,0.6) 100%)"
                                            }} />
                                        </div>

                                    </div>
                                </section>
                            );
                        })}
                    </div>
                </div>
            </main>
        </div>
    );
}