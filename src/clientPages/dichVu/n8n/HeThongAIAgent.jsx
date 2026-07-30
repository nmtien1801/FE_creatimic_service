import React, { useState } from "react";
import { ChevronRight, Phone, PlayCircle, Zap } from "lucide-react";

/* ---------------------------------------------------------------
   TOKENS & MÀU SẮC CHUẨN BẢN THIẾT KẾ
   --------------------------------------------------------------- */
const C = {
    bgWhite: "#FFFFFF",
    bgNavy: "#1D428A",       // Màu xanh Navy chuẩn Section Thực trạng
    orange: "#F2680C",       // Cam Accent
    textDark: "#14181F",
    textGray: "#4B5160",
    borderOrange: "#F2680C",
};

const FONT_BODY = "'Inter', sans-serif";

/* Nút hình Oval cam đặc trưng */
const OvalButton = ({ children, href = "#lien-he" }) => (
    <a
        href={href}
        className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-extrabold text-sm md:text-base text-white shadow-md hover:scale-105 transition-transform uppercase tracking-wider"
        style={{ background: C.orange }}
    >
        {children}
        <span className="w-6 h-6 rounded-full bg-black/20 flex items-center justify-center ml-1">
            <Phone size={14} fill="#FFF" />
        </span>
    </a>
);

/* ---------------------------------------------------------------
   DATA
   --------------------------------------------------------------- */
const PAIN_POINTS = [
    {
        img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=400&auto=format&fit=crop",
        desc: "Nhân sự phải copy-paste thông tin khách hàng tiềm năng từ Facebook, Website vào Google Sheets bằng tay một cách chậm chạp."
    },
    {
        img: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=400&auto=format&fit=crop",
        desc: "Khách hàng nhắn tin hỏi mua hàng vào ban đêm, phải đợi đến sáng hôm sau nhân sự mới rep khiến tỷ lệ rớt đơn tăng cao."
    },
    {
        img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=400&auto=format&fit=crop",
        desc: "Việc gửi email xác nhận, đẩy thông báo đơn hàng, cập nhật trạng thái vận chuyển hoàn toàn làm thủ công, dễ xảy ra sai sót của con người."
    },
    {
        img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&auto=format&fit=crop",
        desc: "Chủ doanh nghiệp mất quá nhiều thời gian để thúc giục nhân sự làm báo cáo tổng hợp dữ liệu từ nhiều kênh."
    }
];

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

export default function CmicLanding() {
    // State quản lý việc ĐÓNG / MỞ câu hỏi FAQ (Mặc định mở câu 01)
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div style={{ background: C.bgWhite, color: C.textDark, fontFamily: FONT_BODY }} className="min-h-screen w-full">
            
            {/* STYLES CHỮ VIỀN BÓNG NỔI & CLIP-PATH VẠT GÓC */}
            <style>{`
                .text-stroke-white {
                    color: #FFFFFF;
                    -webkit-text-stroke: 1.5px #000000;
                    text-shadow: 2px 2px 0px #000;
                }
                .text-stroke-orange {
                    color: #F2680C;
                    -webkit-text-stroke: 1.5px #000000;
                    text-shadow: 2px 2px 0px #000;
                }
                .text-stroke-sub {
                    color: #FFFFFF;
                    -webkit-text-stroke: 1px #000000;
                    text-shadow: 1px 1px 0px #000;
                }
                .clip-arrow {
                    clip-path: polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%);
                }
            `}</style>

            {/* =========================================================
               SS1 — HERO BANNER (ẢNH NỀN CÓ CHỮ ĐÈ LÊN)
               ========================================================= */}
            <section className="w-full px-4 md:px-8 pt-6 pb-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div 
                        className="relative w-full border-2 border-purple-600 rounded-lg overflow-hidden bg-cover bg-center min-h-[380px] md:min-h-[480px] flex flex-col justify-between p-6"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1920&auto=format&fit=crop')`,
                        }}
                    >
                        <div className="text-center pt-2">
                            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-wider text-stroke-white">
                                KỶ NGUYÊN TỰ ĐỘNG HOÁ
                            </h1>
                        </div>

                        <div className="text-center md:text-right pb-2">
                            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase text-stroke-orange">
                                ỨNG DỤNG AI AGENT N8N
                            </h2>
                            <p className="text-base sm:text-xl font-black mt-1 text-stroke-sub">
                                Giải Phóng <span className="text-orange-400">80% Nguồn Lực</span> Cho SME
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* =========================================================
               SS2 — SO SÁNH THỦ CÔNG VS TỰ ĐỘNG (X RED & TICK ORANGE)
               ========================================================= */}
            <section className="w-full pb-12 bg-white px-4">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 text-center">
                    {/* Vế Trái: Tác vụ thủ công */}
                    <div className="flex flex-col items-center max-w-sm">
                        <span className="text-red-600 text-7xl font-black leading-none mb-3">✕</span>
                        <p className="text-xs md:text-sm text-gray-800 font-bold leading-relaxed">
                            Ngừng lãng phí hàng giờ liền của nhân sự vào những <span className="text-red-600">tác vụ lặp đi lặp lại một cách thủ công</span>
                        </p>
                    </div>

                    {/* Mũi tên chỉ sang */}
                    <div className="hidden md:block text-4xl font-black text-black">➔</div>

                    {/* Vế Phải: Tự động AI Agent */}
                    <div className="flex flex-col items-center max-w-sm">
                        <span className="text-orange-500 text-7xl font-black leading-none mb-3">✓</span>
                        <p className="text-xs md:text-sm text-gray-800 font-bold leading-relaxed">
                            CMIC MEDIA thiết lập các trợ lý vận hành thông minh (AI Agents) <span className="text-orange-500">tự động xử lý công việc xuyên suốt 24/7 với độ chính xác tuyệt đối</span> và chi phí vận hành tối giản.
                        </p>
                    </div>
                </div>
            </section>


            {/* =========================================================
               SS3 — VIDEO YOUTUBE, NÚT ĐĂNG KÝ, FORM CONTACT
               ========================================================= */}
            <section className="w-full py-10 bg-white px-4">
                <div className="max-w-2xl mx-auto space-y-8">
                    {/* Video Demo Youtube */}
                    <div className="w-full aspect-video rounded-xl border-2 border-purple-600 overflow-hidden relative bg-black flex flex-col items-center justify-center p-6 text-center text-white bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop')` }}>
                        <div className="flex items-center gap-2 mb-4">
                            <Zap size={22} className="text-orange-500 fill-orange-500" />
                            <span className="font-extrabold text-xl tracking-wide">
                                CMIC <span className="text-orange-500">MEDIA</span>
                            </span>
                        </div>
                        
                        <div className="w-16 h-12 bg-red-600 rounded-2xl flex items-center justify-center mb-4 cursor-pointer hover:scale-110 transition-transform">
                            <PlayCircle size={32} fill="#FFF" className="text-red-600" />
                        </div>

                        <h3 className="text-3xl font-black uppercase text-white tracking-wide">AI AGENT</h3>
                        <p className="text-orange-500 font-bold text-lg mt-1">Tự động hoá tác vụ lặp lại cho doanh nghiệp</p>
                    </div>

                    {/* Nút Đăng Ký */}
                    <div className="text-center">
                        <OvalButton>ĐĂNG KÝ NHẬN TƯ VẤN</OvalButton>
                    </div>

                    {/* Form Contact */}
                    <div className="bg-white border border-gray-400 rounded-3xl p-6 md:p-8 shadow-sm">
                        <h2 className="text-xl md:text-2xl font-bold uppercase mb-6 text-center tracking-tight">
                            LIÊN HỆ VỚI CHÚNG TÔI
                        </h2>
                        <form className="space-y-4 text-xs md:text-sm">
                            <div>
                                <label className="block mb-1 font-bold text-gray-800">Họ và tên*</label>
                                <input required className="w-full p-2.5 rounded-md border border-gray-400 outline-none focus:border-orange-500" />
                            </div>
                            <div>
                                <label className="block mb-1 font-bold text-gray-800">Số điện thoại*</label>
                                <input required className="w-full p-2.5 rounded-md border border-gray-400 outline-none focus:border-orange-500" />
                            </div>
                            <div>
                                <label className="block mb-1 font-bold text-gray-800">Email*</label>
                                <input required type="email" className="w-full p-2.5 rounded-md border border-gray-400 outline-none focus:border-orange-500" />
                            </div>
                            <div>
                                <label className="block mb-1 font-bold text-gray-800">Mô tả quy trình công việc bạn cần tối ưu*</label>
                                <textarea required rows={3} className="w-full p-2.5 rounded-md border border-gray-400 outline-none focus:border-orange-500 resize-none" />
                            </div>
                            <div>
                                <label className="block mb-1 font-bold text-gray-800">Vui lòng cung cấp kênh marketing của doanh nghiệp bạn (nếu có)</label>
                                <textarea rows={2} className="w-full p-2.5 rounded-md border border-gray-400 outline-none focus:border-orange-500 resize-none" />
                            </div>
                            <button type="submit" className="w-full py-3 bg-orange-500 text-white font-black rounded-full uppercase hover:bg-orange-600 transition-colors">
                                GỬI NGAY
                            </button>
                        </form>
                    </div>
                </div>
            </section>


            {/* =========================================================
               SS4 — THỰC TRẠNG DOANH NGHIỆP (NỀN NAVY + 4 CỘT NGANG)
               ========================================================= */}
            <section className="w-full py-14 px-4" style={{ background: C.bgNavy }}>
                <div className="max-w-6xl mx-auto text-center text-white">
                    <h3 className="text-sm md:text-base font-bold tracking-widest uppercase mb-1">
                        THỰC TRẠNG DOANH NGHIỆP
                    </h3>
                    <h2 className="text-2xl md:text-4xl font-black text-orange-500 uppercase leading-snug">
                        BỘ MÁY CỦA BẠN CÓ ĐANG BỊ QUÁ TẢI BỞI CÁC TÁC VỤ RÁC?
                    </h2>
                    <p className="text-xs md:text-sm text-gray-200 mt-3">
                        Hầu hết các doanh nghiệp vừa và nhỏ hiện nay đều đang gặp tình trạng <span className="text-orange-400 font-bold">"nghẽn cổ chai"</span> trong khâu vận hành hằng ngày vì:
                    </p>

                    {/* 4 Thực trạng xếp ngang */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
                        {PAIN_POINTS.map((item, idx) => (
                            <div key={idx} className="flex flex-col text-left">
                                <div className="w-full aspect-[4/3] rounded-lg overflow-hidden mb-3 border border-slate-400">
                                    <img src={item.img} alt="Thực trạng" className="w-full h-full object-cover" />
                                </div>
                                <p className="text-xs text-gray-200 leading-relaxed font-normal">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <h3 className="text-base md:text-xl font-extrabold text-orange-500 uppercase mt-12 leading-snug">
                        BẠN CÓ MUỐN TIẾT KIỆM NGUỒN LỰC CHO DOANH NGHIỆP<br />CẮT GIẢM CÁC CHI PHÍ VẬN HÀNH KHÔNG CẦN THIẾT???
                    </h3>
                </div>
            </section>


            {/* =========================================================
               SS5 — GIẢI PHÁP AI AGENT (N8N ĐÓNG KHUNG)
               ========================================================= */}
            <section className="w-full py-16 px-4 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl md:text-4xl font-black uppercase leading-tight">
                        <span className="text-orange-500">GIẢI</span> cỗ máy không ngủ của doanh nghiệp<br />
                        <span className="text-orange-500">PHÁP</span> AI AGENT (N8N)
                    </h2>

                    {/* Khung Bố Cục N8N Trung Tâm + 4 Khối Border */}
                    <div className="mt-12 relative grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        
                        {/* 1. Tự động hóa đồng bộ */}
                        <div className="border border-black rounded-xl p-4 text-left bg-white z-10">
                            <h4 className="font-bold text-orange-500 text-sm mb-1">Tự động hóa đồng bộ dữ liệu</h4>
                            <p className="text-xs text-gray-700 leading-relaxed">Khi có Lead mới từ bất kỳ kênh nào, hệ thống tự động đẩy dữ liệu về CRM, tự phân phối cho sale trực ban và thông báo ngay về Zalo/Telegram của quản lý trong vòng 1 giây.</p>
                        </div>

                        {/* 2. Trợ lý Chatbot AI */}
                        <div className="border border-black rounded-xl p-4 text-left bg-white z-10">
                            <h4 className="font-bold text-orange-500 text-sm mb-1">Trợ lý Chatbot AI</h4>
                            <p className="text-xs text-gray-700 leading-relaxed">AI được huấn luyện bằng chính tài liệu sản phẩm và quy trình của doanh nghiệp, tự động tư vấn, trả lời các câu hỏi của khách hàng theo thời gian thực một cách tự nhiên như người thật.</p>
                        </div>

                        {/* LOGO N8N LỚN TRUNG TÂM */}
                        <div className="md:col-span-2 my-2 flex flex-col items-center justify-center">
                            <div className="w-48 h-24 bg-cover bg-center rounded-2xl flex items-center justify-center shadow-inner" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400&auto=format&fit=crop')` }}>
                                <span className="text-5xl font-black text-white tracking-tighter">N8N</span>
                            </div>
                            <p className="text-xs text-gray-800 font-bold max-w-md mt-4">
                                Nền tảng tự động hóa quy trình mạnh mẽ nhất hiện nay kết hợp với trí tuệ nhân tạo (AI) để xây dựng hệ thống tự vận hành chuyên sâu cho bạn.
                            </p>
                        </div>

                        {/* 3. Auto Marketing */}
                        <div className="border border-black rounded-xl p-4 text-left bg-white z-10">
                            <h4 className="font-bold text-orange-500 text-sm mb-1">Tự động hóa Chiến dịch Marketing</h4>
                            <p className="text-xs text-gray-700 leading-relaxed">Tự động phân loại nhóm khách hàng dựa trên hành vi mua sắm, kích hoạt chuỗi Email Marketing chăm sóc, gửi tin nhắn chúc mừng sinh nhật cá nhân hóa hoàn toàn tự động.</p>
                        </div>

                        {/* 4. Báo cáo Real-time */}
                        <div className="border border-black rounded-xl p-4 text-left bg-white z-10">
                            <h4 className="font-bold text-orange-500 text-sm mb-1">Báo cáo dữ liệu theo thời gian thực</h4>
                            <p className="text-xs text-gray-700 leading-relaxed">Định kỳ cuối ngày hoặc cuối tuần, AI Agent tự động quét dữ liệu chi phí quảng cáo, lượng lead đổ về, tự động tính toán ROI và xuất thành một dashboard báo cáo trực quan gửi thẳng vào group chat của ban giám đốc.</p>
                        </div>
                    </div>

                    <div className="mt-10">
                        <OvalButton>ĐĂNG KÝ NHẬN TƯ VẤN</OvalButton>
                    </div>
                </div>
            </section>


            {/* =========================================================
               SS6 — QUY TRÌNH HỢP TÁC (4 BƯỚC)
               ========================================================= */}
            <section className="w-full py-14 px-4 bg-white border-t border-gray-100">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-black uppercase text-left mb-8 tracking-tight">QUY TRÌNH HỢP TÁC</h2>
                    
                    <div className="space-y-6">
                        {[
                            { step: "01. Khảo sát & Tư vấn", desc: "Bạn điền Form đăng ký, CMIC MEDIA sẽ liên hệ để phân tích các \"nghẽn cổ chai\" trong quy trình hiện tại của bạn." },
                            { step: "02. Thiết kế giải pháp", desc: "Chúng tôi lên sơ đồ logic và demo cách hệ thống n8n & AI Agent sẽ xử lý công việc đó." },
                            { step: "03. Xây dựng & Huấn luyện", desc: "Tiến hành kết nối các phần mềm và nạp dữ liệu huấn luyện AI." },
                            { step: "04. Nghiệm thu & Bàn giao", desc: "Chạy thử nghiệm, tinh chỉnh và chuyển giao tài khoản quản lý cho doanh nghiệp." }
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col sm:flex-row items-center gap-4">
                                <div className="w-full sm:w-1/2 bg-orange-500 text-white font-bold p-3 text-sm rounded-md relative clip-arrow">
                                    {item.step}
                                </div>
                                <div className="w-full sm:w-1/2 bg-white p-3 rounded-lg border-2 border-orange-400 text-xs text-gray-800 leading-relaxed">
                                    {item.desc}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* =========================================================
               SS7 — FAQS (ĐÓNG/MỜ LINH HOẠT - CHUẨN MẪU THIẾT KẾ)
               ========================================================= */}
            <section className="relative w-full py-12 px-4 bg-white border-t border-gray-200">
                <div className="max-w-3xl mx-auto">
                    
                    {/* Header FAQ: Title + Đường gạch kéo dài + Chấm tròn */}
                    <div className="w-full flex items-center gap-3 mb-8 border-b-2 border-black pb-2">
                        <h2 className="text-2xl font-black uppercase tracking-tight shrink-0">
                            FAQs
                        </h2>
                        <div className="h-[1.5px] bg-black flex-1 relative">
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full border-2 border-black bg-white" />
                        </div>
                    </div>

                    {/* Danh sách Accordion FAQs */}
                    <div className="space-y-4">
                        {FAQS.map((faq, idx) => {
                            const isOpen = openIndex === idx;
                            const formattedIndex = String(idx + 1).padStart(2, "0");

                            return (
                                <div key={idx} className="border-b border-gray-200 pb-3 text-left">
                                    <button
                                        type="button"
                                        onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                                        className="w-full text-left focus:outline-none flex items-start justify-between gap-3 group cursor-pointer"
                                    >
                                        <h3 className="font-extrabold text-sm md:text-base flex items-start text-black leading-snug group-hover:text-orange-600 transition-colors">
                                            <span className="text-black text-sm mt-0.5 shrink-0 mr-2 select-none">
                                                ➤
                                            </span>
                                            <span>
                                                {formattedIndex}. {faq.q}
                                            </span>
                                        </h3>

                                        <span
                                            className="shrink-0 mt-1 text-black transition-transform duration-200"
                                            style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
                                        >
                                            <ChevronRight className="w-5 h-5" />
                                        </span>
                                    </button>

                                    {/* Nội dung câu trả lời */}
                                    {isOpen && (
                                        <div className="pl-6 pt-2">
                                            <p className="text-xs md:text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                                                {faq.a}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>

        </div>
    );
}