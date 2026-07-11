import React from 'react';
import { motion } from 'framer-motion';
import {
    AlertCircle,
    TrendingUp,
    Layers,
    Cpu,
    DollarSign,
    Award,
    ArrowRight,
    Globe,
    MessageSquare,
    CheckCircle2
} from 'lucide-react';

// Cấu hình hiệu ứng Framer Motion mượt mà
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-[#faf8f6] text-slate-800 font-sans selection:bg-[#ed792f] selection:text-white overflow-x-hidden">

            {/* 1. HERO SECTION */}
            <header className="relative bg-gradient-to-br from-slate-900 via-[#3d200f] to-slate-900 text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Lớp phủ Grid công nghệ nhẹ */}
                <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px]"></div>
                {/* Glow hiệu ứng màu cam thương hiệu */}
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#ed792f]/20 rounded-full blur-3xl animate-pulse"></div>

                <div className="max-w-6xl mx-auto text-center relative z-10">
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block bg-[#ed792f]/10 text-[#ff914d] border border-[#ed792f]/30 px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider mb-6"
                    >
                        GIẢI PHÁP IN-HOUSE MARKETING AGENCY
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="text-4xl sm:text-6xl font-black tracking-tight leading-none mb-6"
                    >
                        PHÒNG MARKETING THUÊ NGOÀI <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ed792f] to-[#ffaa73]">THỰC CHIẾN CMIC MEDIA</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="max-w-3xl mx-auto text-base sm:text-lg text-slate-300 mb-10 leading-relaxed"
                    >
                        Vần hành theo mô hình <span className="text-white font-semibold">in-house marketing agency</span>, đồng hành cùng Startup, SME và Cá nhân kinh doanh thiết kế & vận hành hệ thống online marketing bài bản, dễ quản lý và đo lường.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col sm:flex-row justify-center gap-4"
                    >
                        <a href="#register" className="bg-[#ed792f] hover:bg-[#d66520] text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-[#ed792f]/20 transform hover:-translate-y-0.5 transition flex items-center justify-center gap-2 group">
                            Đăng ký nhận tư vấn ngay
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="#services" className="bg-white/10 hover:bg-white/15 text-white border border-white/20 font-medium px-8 py-4 rounded-xl transition">
                            Khám phá dịch vụ
                        </a>
                    </motion.div>
                </div>
            </header>

            {/* 2. PAIN POINTS SECTION */}
            <section className="py-20 px-4 max-w-6xl mx-auto">
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                        Doanh nghiệp bạn có đang gặp phải <br />
                        <span className="text-[#ed792f] font-black">Những "Điểm Nghẽn" Này?</span>
                    </h2>
                </motion.div>

                <motion.div
                    variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {[
                        { title: "Marketing manh mún, rời rạc", desc: "Làm nhiều kênh (Facebook, TikTok, Website) nhưng không có sự kết nối, không tạo ra chuyển đổi." },
                        { title: "\"Đốt tiền\" quảng cáo nhưng dừng là hết khách", desc: "Phụ thuộc hoàn toàn vào Ads, chi phí ngày càng cao nhưng không giữ chân được khách hàng." },
                        { title: "Khó đo lường, phân bổ theo cảm tính", desc: "Không có dashboard báo cáo chỉ số rõ ràng, không biết dòng tiền thực sự đang hiệu quả ở kênh nào." },
                        { title: "Khủng hoảng nhân sự freelance", desc: "Thiếu chuyên môn xây chiến lược, chi phí vận hành bộ máy marketing nội bộ chưa tối ưu và khó đồng hành dài hạn." }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx} variants={fadeInUp} whileHover={{ y: -4 }}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex gap-4 items-start relative overflow-hidden group"
                        >
                            <div className="absolute top-0 left-0 w-1 h-full bg-[#ed792f] opacity-40 group-hover:opacity-100 transition-opacity"></div>
                            <div className="p-2 bg-orange-50 text-[#ed792f] rounded-lg shrink-0">
                                <AlertCircle className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-1.5">{item.title}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* 3. VALUE PROPOSITION */}
            <section className="bg-slate-900 text-white py-20 px-4 relative overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                        className="max-w-3xl mb-14"
                    >
                        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ff914d] to-[#ed792f] mb-4">
                            Marketing là tài sản số giúp bạn tạo dòng tiền bền vững
                        </h2>
                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                            CMIC MEDIA đóng vai trò là một đối tác chiến lược. Chúng tôi không nhận làm <span className="text-[#ff914d] font-semibold">"thuê theo đầu việc"</span>. Chúng tôi vào cuộc để: <span className="text-orange-300">Xây nền tảng – Chuẩn hoá quy trình – Thiết lập hệ thống đo lường – Đồng hành vận hành.</span>
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                        {[
                            { icon: <Layers className="w-5 h-5 text-[#ff914d]" />, title: "Hệ thống hóa bài bản", desc: "Tập trung xây dựng các tài sản số lâu dài (Website, Funnel, CRM) thuộc sở hữu của riêng bạn." },
                            { icon: <DollarSign className="w-5 h-5 text-emerald-400" />, title: "Tối ưu chi phí & Tinh gọn", desc: "Chi phí linh hoạt, thấp hơn nhiều so với việc duy trì một phòng marketing cồng kềnh." },
                            { icon: <Award className="w-5 h-5 text-amber-400" />, title: "Chuyển giao năng lực", desc: "Từng bước giúp doanh nghiệp của bạn làm chủ hệ thống, tự vận hành và giảm phụ thuộc vào bên ngoài." }
                        ].map((value, idx) => (
                            <motion.div
                                key={idx} variants={fadeInUp}
                                className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm"
                            >
                                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                                    {value.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-2 text-white">{value.title}</h3>
                                <p className="text-sm text-slate-400 leading-relaxed">{value.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 4. SERVICES SECTION (THU NHỎ COMPONENT & TINH GỌN LẠI) */}
            <section id="services" className="py-20 px-4 bg-orange-50/30">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
                            Các dịch vụ chính CMIC MEDIA cung cấp
                        </h2>
                        <div className="w-16 h-1 bg-[#ed792f] mx-auto rounded-full"></div>
                    </div>

                    {/* Grid dịch vụ thu nhỏ thành 3 cột */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

                        {/* Service 1 */}
                        <motion.div
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 flex flex-col justify-between"
                        >
                            <div>
                                <div className="p-2.5 bg-orange-50 text-[#ed792f] rounded-xl w-fit mb-4"><Globe className="w-6 h-6" /></div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Dựng & thiết kế Website / Landing Page</h3>
                                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                                    Không bán web đơn lẻ. Chúng tôi xây dựng Tài sản số cốt lõi thỏa mãn 3 yếu tố trọng tâm.
                                </p>
                            </div>
                            <div className="text-xs text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-100">
                                <span className="font-semibold text-[#ed792f]">Tiêu chuẩn:</span> Thẩm mỹ thương hiệu — Trải nghiệm mượt mà — Tỷ lệ chuyển đổi.
                            </div>
                        </motion.div>

                        {/* Service 2 */}
                        <motion.div
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60"
                        >
                            <div className="p-2.5 bg-orange-50 text-[#ed792f] rounded-xl w-fit mb-4"><MessageSquare className="w-6 h-6" /></div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Chăm sóc toàn diện các “điểm chạm” trên social</h3>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                Đăng bài ngẫu hứng là cách nhanh nhất để triệt tiêu hiệu quả truyền thông. CMIC MEDIA đồng hành cùng bạn xây dựng ma trận nội dung đồng bộ, giáo dục thị trường và biến các kênh mạng xã hội thành phễu thu hút Lead chất lượng cao với chi phí tối ưu nhất.
                            </p>
                        </motion.div>

                        {/* Service 3 */}
                        <motion.div
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60"
                        >
                            <div className="p-2.5 bg-orange-50 text-[#ed792f] rounded-xl w-fit mb-4"><Cpu className="w-6 h-6" /></div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Thiết kế hệ thống AI Agent</h3>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                Sử dụng nền tảng tự động hóa mạnh mẽ <strong>n8n</strong> kết hợp trí tuệ nhân tạo (AI) để chuẩn hóa quy trình vận hành tự động, giúp giải phóng đến 80% nguồn lực cho SME.
                            </p>
                        </motion.div>
                    </div>

                    {/* Dịch vụ trọn gói lớn nằm ngang làm điểm nhấn */}
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                        className="bg-gradient-to-r from-slate-950 to-slate-900 text-white p-6 sm:p-8 rounded-2xl shadow-md border border-[#ed792f]/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6"
                    >
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-[#ed792f] text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded">Giải pháp Core</span>
                                <h3 className="text-xl font-bold">Trọn gói Marketing thực chiến</h3>
                            </div>
                            <p className="text-xs text-slate-400 leading-relaxed">
                                CMIC MEDIA xây dựng chiến lược, thiết lập tài sản số, sản xuất nội dung đa kênh, cài đặt hệ thống đo lường dữ liệu và ứng dụng AI tự động hóa vận hành. Đồng hành như một phòng marketing nội bộ thực chiến cam kết theo doanh thu.
                            </p>
                        </div>
                        <a href="#register" className="bg-[#ed792f] hover:bg-[#d66520] text-white text-xs font-bold px-5 py-3 rounded-lg transition whitespace-nowrap shrink-0">
                            Nhận tư vấn gói tổng thể
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* 5. PROCESS SECTION */}
            <section className="pb-20 px-4 max-w-4xl mx-auto">
                <div className="text-center mb-14">
                    <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Quy trình hợp tác tinh gọn</h2>
                    <p className="text-xs text-slate-500">Chuyên nghiệp, rõ ràng và minh bạch trong từng bước đi</p>
                </div>

                <div className="relative border-l border-slate-200 ml-4 sm:ml-24 space-y-10">
                    {[
                        { step: "01", title: "Đăng ký nhận tư vấn", body: "Điền form thông tin yêu cầu của doanh nghiệp." },
                        { step: "02", title: "Tư vấn viên liên hệ trao đổi", body: "Khảo sát sâu về mô hình và các điểm nghẽn hiện tại." },
                        { step: "03", title: "Gửi proposal giải pháp", body: "Bản kế hoạch khung định hướng và phân bổ ngân sách." },
                        { step: "04", title: "Ký hợp đồng hợp tác", body: "Cam kết chỉ số rõ ràng bằng văn bản pháp lý." },
                        { step: "05", title: "Lập kế hoạch chi tiết và triển khai", body: "Xây dựng hệ thống tài sản số và phân bổ nhân sự." },
                        { step: "06", title: "Theo dõi & Báo cáo định kỳ", body: "Dashboard minh bạch, cải tiến liên tục dựa trên số liệu thực tế." }
                    ].map((proc, idx) => (
                        <motion.div
                            key={idx} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }} transition={{ delay: idx * 0.08 }}
                            className="relative pl-6 group"
                        >
                            <div className="absolute -left-[5.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-white border-2 border-[#ed792f] group-hover:bg-[#ed792f] transition-colors"></div>
                            <div className="flex items-baseline gap-2 mb-0.5">
                                <span className="text-[11px] font-mono font-bold text-[#ed792f]">{proc.step}.</span>
                                <h4 className="text-base font-bold text-slate-900">{proc.title}</h4>
                            </div>
                            <p className="text-xs text-slate-600">{proc.body}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 6. CONVERTING FORM */}
            <section id="register" className="bg-gradient-to-br from-[#3d200f] to-slate-900 text-white py-16 px-4">
                <div className="max-w-3xl mx-auto bg-white text-slate-950 rounded-2xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-[#ed792f]"></div>

                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-black mb-2 text-slate-900">Bứt phá doanh thu cùng CMIC MEDIA</h2>
                        <p className="text-xs text-slate-600 max-w-sm mx-auto">
                            Đừng để hệ thống Marketing rời rạc triệt tiêu ngân sách của bạn. Hãy thiết lập phòng Marketing In-house ngay hôm nay!
                        </p>
                    </div>

                    <form onSubmit={(e) => e.preventDefault()} className="space-y-4 text-xs sm:text-sm">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-semibold text-slate-700 mb-1">Họ và tên *</label>
                                <input type="text" placeholder="Nguyễn Văn A" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#ed792f] transition-shadow bg-slate-50" required />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-slate-700 mb-1">Số điện thoại / Zalo *</label>
                                <input type="tel" placeholder="0901234567" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#ed792f] transition-shadow bg-slate-50" required />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">Tên Doanh nghiệp / Mô hình kinh doanh</label>
                            <input type="text" placeholder="Công ty TNHH Thương Mại ABC..." className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#ed792f] transition-shadow bg-slate-50" />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">"Điểm nghẽn" lớn nhất bạn đang gặp phải?</label>
                            <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#ed792f] transition-shadow bg-slate-50 text-slate-700 text-xs">
                                <option>Marketing manh mún, rời rạc, ít chuyển đổi</option>
                                <option>Đốt tiền quảng cáo (Ngừng Ads là ngừng khách)</option>
                                <option>Khó đo lường chỉ số, quản lý bằng cảm tính</option>
                                <option>Khủng hoảng hoặc thiếu nhân sự chuyên môn</option>
                                <option>Khác...</option>
                            </select>
                        </div>

                        <motion.button
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-[#ed792f] text-white font-bold py-3.5 rounded-xl shadow-md shadow-[#ed792f]/10 hover:bg-[#d66520] transition duration-200 text-sm tracking-wide mt-4"
                        >
                            Gửi yêu cầu & Đăng ký tư vấn miễn phí
                        </motion.button>
                    </form>
                </div>
            </section>
        </div>
    );
}