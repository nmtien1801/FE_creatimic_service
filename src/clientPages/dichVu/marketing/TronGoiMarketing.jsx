import React, { useState } from "react";
import { Phone, XCircle, CheckCircle2, Check } from "lucide-react";

export default function CmicMarketingPartnerPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        problem: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("CMIC Media đã nhận yêu cầu tư vấn 1:1 của bạn!");
        setFormData({ name: "", email: "", company: "", problem: "" });
    };

    return (
        <div className="bg-slate-50 text-slate-900 min-h-screen antialiased overflow-x-hidden font-sans scroll-smooth relative">

            {/* Hiệu ứng nền chuyển động nhẹ nhàng */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-tr from-orange-500/5 via-transparent to-purple-500/5 animate-[pulseBg_8s_ease-in-out_infinite] -z-10" />

            {/* ================= SECTION 1: HERO SECTION & FORM (Đối chiếu image_638046.png) ================= */}
            <section className="max-w-6xl mx-auto px-6 pt-16 pb-20 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
                {/* Thu nhỏ title tinh tế, vuông vức */}
                <div className="text-center max-w-4xl mx-auto mb-14 space-y-3">
                    <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 text-orange-700 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
                        In-house Marketing Partner
                    </div>
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-950 leading-snug tracking-tight uppercase">
                        Dịch Vụ "In-House Marketing Partner" –<br />
                        <span className="text-[#f27830]">Phòng Marketing Thuê Ngoài Toàn Diện Cho SME</span>
                    </h1>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    {/* Cột trái: Text giới thiệu trượt từ trái sang */}
                    <div className="lg:col-span-6 space-y-6 opacity-0 animate-[slideRight_0.8s_ease-out_0.2s_forwards]">
                        <p className="text-slate-800 font-medium text-base sm:text-lg leading-relaxed">
                            Phá bỏ mô hình thuê freelancer chắp vá hay agency ngắn hạn chỉ biết đốt tiền chạy ads. <span className="font-bold text-slate-950">CMIC MEDIA</span> mang đến gói giải pháp tổng thể:
                        </p>
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                            Thay bạn xây dựng chiến lược, thiết lập toàn bộ tài sản số, sản xuất nội dung đa kênh, cài đặt hệ thống đo lường dữ liệu và ứng dụng AI tự động hóa vận hành. Chúng tôi làm việc như một phòng marketing nội bộ thực chiến, cam kết đồng hành lâu dài cùng mục tiêu doanh thu của doanh nghiệp.
                        </p>
                    </div>

                    {/* Cột phải: Form Đăng ký trượt từ phải sang */}
                    <div id="form-tu-van" className="lg:col-span-6 bg-[#f27830] text-white p-6 sm:p-8 rounded-[2rem] shadow-xl flex flex-col justify-between h-full transform transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_25px_50px_rgba(242,120,48,0.3)] opacity-0 animate-[slideLeft_0.8s_ease-out_0.4s_forwards]">
                        <div>
                            <div className="flex items-center justify-between mb-6 border-b border-white/20 pb-3">
                                <h3 className="text-lg sm:text-xl font-black tracking-wide text-white uppercase">
                                    ĐĂNG KÝ NHẬN TƯ VẤN
                                </h3>
                                <span className="text-4xl font-black">1:1</span>
                            </div>
                            <form onSubmit={handleSubmit} className="space-y-4 text-slate-900">
                                <div>
                                    <label className="block text-xs font-bold text-orange-50 uppercase tracking-wider mb-1">Họ và tên</label>
                                    <input type="text" name="name" required value={formData.name} onChange={handleInputChange} placeholder="Nhập họ và tên" className="w-full px-4 py-2.5 rounded-full bg-white text-sm font-medium focus:outline-none shadow-inner border border-transparent focus:border-stone-900 transition-colors" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-orange-50 uppercase tracking-wider mb-1">Email</label>
                                    <input type="email" name="email" required value={formData.email} onChange={handleInputChange} placeholder="Nhập email" className="w-full px-4 py-2.5 rounded-full bg-white text-sm font-medium focus:outline-none shadow-inner border border-transparent focus:border-stone-900 transition-colors" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-orange-50 uppercase tracking-wider mb-1">Tên doanh nghiệp</label>
                                    <input type="text" name="company" required value={formData.company} onChange={handleInputChange} placeholder="Nhập tên doanh nghiệp" className="w-full px-4 py-2.5 rounded-full bg-white text-sm font-medium focus:outline-none shadow-inner border border-transparent focus:border-stone-900 transition-colors" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-orange-50 uppercase tracking-wider mb-1">Vấn đề doanh nghiệp bạn đang gặp phải</label>
                                    <textarea rows="2" name="problem" value={formData.problem} onChange={handleInputChange} className="w-full px-4 py-2.5 rounded-2xl bg-white text-sm font-medium focus:outline-none leading-relaxed shadow-inner border border-transparent focus:border-stone-900 transition-colors" />
                                </div>
                                <button type="submit" className="w-full bg-stone-900 hover:bg-stone-800 text-white font-extrabold py-3 rounded-full border border-transparent transition-all active:scale-[0.98] uppercase tracking-wider text-xs mt-2">
                                    Gửi yêu cầu nhận tư vấn
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>


            {/* ================= SECTION 2: SỰ MẮC KẸT (Đối chiếu image_638065.png) ================= */}
            <section className="py-20 bg-white border-t border-slate-100 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-950 leading-snug tracking-tight uppercase">
                            SỰ "MẮC KẸT" CỦA<br />
                            <span className="text-[#f27830]">CHỦ DOANH NGHIỆP SMES HIỆN TẠI</span>
                        </h2>
                        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4.5 mt-5 max-w-2xl mx-auto shadow-sm">
                            <p className="text-slate-700 font-medium text-sm sm:text-base">
                                Hơn ai hết, chúng tôi thấu hiểu những nỗi bực bội và rào cản lớn mà các chủ doanh nghiệp đang phải gánh chịu khi làm Marketing
                            </p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-4 flex justify-center animate-[float_4s_ease-in-out_infinite]">
                            <div className="relative w-56 h-64 bg-slate-50 rounded-full border-4 border-dashed border-slate-200 flex items-center justify-center">
                                <div className="absolute m-auto w-40 h-40 bg-white rounded-full border-2 border-slate-100 shadow-md flex items-center justify-center">
                                    <span className="text-3xl font-black text-slate-900 tracking-wide">SME</span>
                                </div>
                            </div>
                        </div>

                        {/* Các hàng lỗi xuất hiện đồng đều */}
                        <div className="lg:col-span-8 space-y-5">
                            {[
                                { title: "Thuê Agency đại trà:", text: "Họ chỉ tập trung vào việc chạy ads, cam kết các chỉ số ảo (reaction, spam inbox). Khi bạn dừng chi tiền quảng cáo, dòng khách hàng lập tức sụt giảm về con số 0. Bạn không sở hữu bất kỳ một tài sản bền vững nào." },
                                { title: "Thuê Đội ngũ Freelancer tự do:", text: "Chi phí có thể rẻ ban đầu nhưng họ làm việc thiếu quy trình bài bản, không có tư duy chiến lược tổng thể bám sát mục tiêu kinh doanh, không có đội ngũ back-up và chỉ làm theo từng task riêng lẻ." },
                                { title: "Tự xây dựng phòng Marketing In-house:", text: "Chi phí lương thưởng cho một bộ máy đầy đủ vị trí (Trưởng phòng, Copywriter, Designer, Kỹ thuật Web, Chạy Ads...) là cực kỳ đắt đỏ, vượt quá nguồn lực của một SME. Thêm vào đó là bài toán khó khăn trong khâu tuyển dụng và quản trị nhân sự chuyên môn." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-4 bg-slate-50 p-5 rounded-2xl hover:shadow-md transition-all duration-300 border border-slate-100">
                                    <XCircle className="w-7 h-7 text-red-500 flex-shrink-0 fill-red-500/10 mt-0.5" />
                                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                                        <strong className="text-slate-900 font-bold block mb-0.5">{item.title}</strong> {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* ================= SECTION 3: GIẢI PHÁP CMIC MEDIA (Đối chiếu image_638083.png) ================= */}
            <section className="py-20 bg-slate-50 border-t border-slate-100 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.8s_forwards]">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-950 leading-snug tracking-tight uppercase">
                            CMIC MEDIA GIẢI QUYẾT<br />
                            <span className="text-[#f27830]">KHOẢNG TRỐNG THỊ TRƯỜNG NHƯ THẾ NÀO?</span>
                        </h2>
                        <div className="bg-white border border-slate-200 rounded-2xl p-5 mt-5 max-w-3xl mx-auto shadow-sm">
                            <p className="text-slate-700 font-medium text-sm sm:text-base leading-relaxed">
                                Chúng tôi chọn một lối đi hoàn toàn khác biệt: Xây dựng năng lực marketing dài hạn và có khả năng chuyển giao cho khách hàng. Gói dịch vụ trọn gói của <span className="font-bold text-slate-950">CMIC MEDIA</span> là sự kết hợp hoàn hảo giữa 3 vai trò trong 1 gói chi phí duy nhất:
                            </p>
                        </div>
                    </div>

                    {/* Thẻ 3 cột giải pháp tự động trồi lên sang trọng */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            { step: "1", title: "Chuyên gia cố vấn chiến lược (Consulting)", desc: "Định hình chiến lược marketing dựa trên mô hình kinh doanh, quy hoạch phễu chuyển đổi, thiết kế hành trình khách hàng chuẩn chỉnh." },
                            { step: "2", title: "Đội ngũ thực thi chuyên nghiệp (Executive)", desc: "Trực tiếp nhúng tay vào làm việc hằng ngày: Viết bài, thiết kế hình ảnh, sản xuất, edit video, tối ưu website, quản trị hạ tầng số." },
                            { step: "3", title: "Kỹ sư công nghệ tự động hóa (Tech Dev)", desc: "Triển khai cài đặt các dashboard đo lường chỉ số thực và ứng dụng AI Agent (n8n) để tinh gọn bộ máy vận hành." }
                        ].map((item, idx) => (
                            <div key={idx} className="relative bg-[#f27830] text-white p-7 rounded-3xl shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl mt-4 md:mt-0">
                                <div className="absolute -top-5 -left-3 w-11 h-14 bg-stone-950 text-white rounded-2xl flex items-center justify-center text-lg font-black border-2 border-white shadow-md">
                                    {item.step}
                                </div>
                                <h3 className="text-base sm:text-lg font-bold uppercase tracking-wide border-b border-white/20 pb-3 mb-3 text-center pt-2 min-h-[56px] flex items-center justify-center">
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


            {/* ================= SECTION 4: LỘ TRÌNH 3 GIAI ĐOẠN (Đối chiếu image_6380a5.png / image_6380c6.png) ================= */}
            <section className="py-20 bg-white border-t border-slate-100 opacity-0 animate-[fadeInUp_0.8s_ease-out_1s_forwards]">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-14">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-950 leading-snug tracking-tight uppercase">
                            LỘ TRÌNH ĐỒNG HÀNH TOÀN DIỆN<br />
                            <span className="text-[#f27830]">3 GIAI ĐOẠN CỦA CMIC MEDIA</span>
                        </h2>
                        <div className="bg-orange-50 border border-orange-100 rounded-full py-2 px-6 mt-4 inline-block text-xs sm:text-sm text-slate-700 font-medium">
                            Chúng tôi triển khai công việc theo lộ trình rõ ràng, có kế hoạch chia nhỏ theo từng tuần/tháng để chủ doanh nghiệp dễ dàng kiểm soát tiến độ
                        </div>
                    </div>

                    <div className="space-y-6">
                        {/* GIAI ĐOẠN 1 */}
                        <div className="bg-[#f27830] text-white p-6 sm:p-8 rounded-3xl shadow-md transition-all duration-300 hover:shadow-xl">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-stone-950 text-white rounded-xl flex items-center justify-center text-xl font-black shadow-inner">1</div>
                                <h3 className="text-lg sm:text-xl font-bold tracking-wide">Giai đoạn 1: Chuẩn hóa hạ tầng &amp; Khởi tạo tài sản số</h3>
                            </div>
                            <div className="space-y-4 text-xs sm:text-sm font-medium">
                                <div className="flex items-start gap-3"><CheckCircle2 className="w-5 h-7 text-green-300 flex-shrink-0" /><p><strong>Audit tổng thể:</strong> Rà soát lại toàn bộ thực trạng các kênh marketing hiện tại, phân tích đối thủ cạnh tranh sát sườn.</p></div>
                                <div className="flex items-start gap-3"><CheckCircle2 className="w-5 h-7 text-green-300 flex-shrink-0" /><p><strong>Setup nền tảng:</strong> Thiết kế/tối ưu lại Website/Landing Page chuẩn chuyển đổi, cấu hình hệ thống Social đồng bộ nhận diện.</p></div>
                                <div className="flex items-start gap-3"><CheckCircle2 className="w-5 h-7 text-green-300 flex-shrink-0" /><p><strong>Thiết lập Tracking:</strong> Xây dựng dashboard báo cáo chỉ số trung gian công khai để đo lường chính xác nguồn khách.</p></div>
                            </div>
                        </div>

                        {/* GIAI ĐOẠN 2 */}
                        <div className="bg-[#f27830] text-white p-6 sm:p-8 rounded-3xl shadow-md transition-all duration-300 hover:shadow-xl">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-stone-950 text-white rounded-xl flex items-center justify-center text-xl font-black shadow-inner">2</div>
                                <h3 className="text-lg sm:text-xl font-bold tracking-wide">Giai đoạn 2: Vận hành đa kênh &amp; Kích hoạt phễu chuyển đổi</h3>
                            </div>
                            <div className="space-y-4 text-xs sm:text-sm font-medium">
                                <div className="flex items-start gap-3"><CheckCircle2 className="w-5 h-7 text-green-300 flex-shrink-0" /><p><strong>Sản xuất nội dung đồng bộ:</strong> Viết bài blog chuẩn SEO, chăm sóc Fanpage hằng tuần, sản xuất video TikTok/Reels/YouTube kéo traffic tự nhiên.</p></div>
                                <div className="flex items-start gap-3"><CheckCircle2 className="w-5 h-7 text-green-300 flex-shrink-0" /><p><strong>Vận hành Funnel &amp; CRM:</strong> Kích hoạt phễu thu lead bằng tài liệu miễn phí, cấu hình Email Marketing tự động nuôi dưỡng và làm ấm lead.</p></div>
                                <div className="flex items-start gap-3"><CheckCircle2 className="w-5 h-7 text-green-300 flex-shrink-0" /><p><strong>Họp tối ưu hằng tuần:</strong> Đọc chỉ số báo cáo định kỳ hằng tuần cùng chủ doanh nghiệp, điều chỉnh ngân sách dựa trên dữ liệu thực tế mang về.</p></div>
                            </div>
                        </div>

                        {/* GIAI ĐOẠN 3 */}
                        <div className="bg-[#f27830] text-white p-6 sm:p-8 rounded-3xl shadow-md transition-all duration-300 hover:shadow-xl">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-stone-950 text-white rounded-xl flex items-center justify-center text-xl font-black shadow-inner">2</div>
                                <h3 className="text-lg sm:text-xl font-bold tracking-wide">Giai đoạn 3: Tự động hóa vận hành và Chuyển giao quy trình</h3>
                            </div>
                            <div className="space-y-4 text-xs sm:text-sm font-medium">
                               <div className="flex items-start gap-3"><CheckCircle2 className="w-5 h-7 text-green-400 flex-shrink-0" /><p><strong>Tích hợp AI Agent n8n:</strong> Xây dựng kịch bản tự động hóa các khâu nhập liệu data, thông báo đơn hàng, báo cáo để giải phóng sức lao động.</p></div>
                                <div className="flex items-start gap-3"><CheckCircle2 className="w-5 h-7 text-green-400 flex-shrink-0" /><p><strong>Đóng gói bộ quy trình (SOP):</strong> Viết tài liệu hướng dẫn công việc chi tiết cho từng hạng mục marketing đã triển khai thành công.</p></div>
                                <div className="flex items-start gap-3"><CheckCircle2 className="w-5 h-7 text-green-400 flex-shrink-0" /><p><strong>Đào tạo &amp; Chuyển giao:</strong> Hỗ trợ tuyển dụng nhân sự in-house và đào tạo, chuyển giao hệ thống quy trình lại cho doanh nghiệp tự chủ vận hành.</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ================= SECTION 5: CAM KẾT VÀNG & CTA (Đối chiếu image_6380e4.png) ================= */}
            <section className="py-20 bg-slate-50 border-t border-slate-100 opacity-0 animate-[fadeInUp_0.8s_ease-out_1.2s_forwards]">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-14">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-950 leading-tight tracking-tight uppercase">
                            CAM KẾT VÀNG TỪ <span className="text-[#f27830]">CMIC MEDIA</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-16 text-center">
                        {[
                            { title: "NÓI KHÔNG VỚI CHỈ SỐ ẢO", text: "Chúng tôi không báo cáo lượt reach, lượt like vô nghĩa. CMIC MEDIA báo cáo số lượng Lead thực tế, tỷ lệ chuyển đổi và ROI dòng tiền rõ ràng." },
                            { title: "MINH BẠCH 100% TÀI NGUYÊN", text: "Toàn bộ mật khẩu hệ thống, mã nguồn website, tài khoản tracking, file thiết kế gốc Figma... đều thuộc quyền sở hữu vĩnh viễn của bạn. Chúng tôi tuyệt đối không giữ tài nguyên để ràng buộc khách hàng." },
                            { title: "TINH GỌN VÀ TRÁCH NHIỆM", text: "Làm việc sâu sát như những người cộng sự nội bộ của công ty bạn, thấu hiểu sản phẩm và đồng cam cộng khổ cùng mục tiêu tăng trưởng của doanh nghiệp." }
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center group">
                                <Check className="w-10 h-10 text-green-500 mb-2 transform group-hover:scale-110 transition-transform" strokeWidth={4} />
                                <h3 className="text-sm font-bold uppercase mb-3 text-slate-900 tracking-wide">{item.title}</h3>
                                <div className="bg-[#f27830] text-white p-6 rounded-2xl shadow-md w-full h-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                                    <p className="text-xs sm:text-sm font-medium leading-relaxed">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Nút bấm quay lại điền form chuẩn màu sắc */}
                    <div className="text-center relative max-w-sm mx-auto">
                        <a href="#form-tu-van" className="relative inline-flex items-center gap-2 bg-[#f27830] text-white font-extrabold px-8 py-4 rounded-full transition-transform hover:scale-105 active:scale-95 shadow-lg group w-full justify-center">
                            <div className="absolute inset-1 border border-dashed border-stone-900/40 rounded-full pointer-events-none"></div>
                            <span className="relative z-10 text-sm uppercase tracking-wider">ĐĂNG KÝ NHẬN TƯ VẤN</span>
                            <Phone className="relative z-10 w-4 h-4 fill-current" />
                        </a>
                    </div>
                </div>
            </section>

            {/* ================= CORE LANDING PAGE CSS KEYFRAMES ================= */}
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