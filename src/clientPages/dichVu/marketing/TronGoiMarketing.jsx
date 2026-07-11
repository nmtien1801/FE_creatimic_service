import React, { useState } from "react";
import { XCircle, CheckCircle2, Check } from "lucide-react";

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
        <div className="bg-[#faf8f6] text-neutral-800 min-h-screen antialiased overflow-x-hidden font-sans scroll-smooth relative">

            {/* ================= SECTION 1: HERO SECTION & FORM ================= */}
            <section className="max-w-6xl mx-auto px-6 pt-24 pb-20 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    
                    {/* Cột trái: Giới thiệu */}
                    <div className="space-y-6 text-left lg:sticky lg:top-24">
                        <div className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-[#ed792f]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ed792f]" />
                            In-house Marketing Partner
                        </div>
                        <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 leading-tight tracking-tight uppercase">
                            Dịch Vụ "In-House Marketing Partner" –<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ed792f] to-[#ff8e42]">Phòng Marketing Thuê Ngoài Toàn Diện Cho SME</span>
                        </h1>
                        <div className="space-y-4 pt-2">
                            <p className="text-neutral-500 font-medium text-sm sm:text-base leading-relaxed text-justify">
                                Phá bỏ mô hình thuê freelancer chắp vá hay agency ngắn hạn chỉ biết đốt tiền chạy ads. <span className="text-neutral-900 font-semibold">CMIC MEDIA</span> mang đến gói giải pháp tổng thể:
                            </p>
                            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed text-justify font-normal">
                                Thay bạn xây dựng chiến lược, thiết lập toàn bộ tài sản số, sản xuất nội dung đa kênh, cài đặt hệ thống đo lường dữ liệu và ứng dụng AI tự động hóa vận hành. Chúng tôi làm việc như một phòng marketing nội bộ thực chiến, cam kết đồng hành lâu dài cùng mục tiêu doanh thu của doanh nghiệp.
                            </p>
                        </div>
                    </div>

                    {/* Cột phải: Form Đăng ký tối giản cao cấp */}
                    <div id="form-tu-van" className="bg-white border border-neutral-200/60 p-6 sm:p-8 rounded-xl shadow-sm">
                        <div className="flex items-center justify-between mb-6 border-b border-neutral-100 pb-4">
                            <h3 className="text-base font-bold tracking-wide text-neutral-900 uppercase">
                                ĐĂNG KÝ NHẬN TƯ VẤN
                            </h3>
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm font-medium">
                            <div>
                                <label className="block font-bold text-neutral-700 uppercase tracking-wide mb-1">Họ và tên</label>
                                <input type="text" name="name" required value={formData.name} onChange={handleInputChange} placeholder="Nhập họ và tên" className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#ed792f] transition-shadow bg-neutral-50" />
                            </div>
                            <div>
                                <label className="block font-bold text-neutral-700 uppercase tracking-wide mb-1">Email</label>
                                <input type="email" name="email" required value={formData.email} onChange={handleInputChange} placeholder="Nhập email" className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#ed792f] transition-shadow bg-neutral-50" />
                            </div>
                            <div>
                                <label className="block font-bold text-neutral-700 uppercase tracking-wide mb-1">Tên doanh nghiệp</label>
                                <input type="text" name="company" required value={formData.company} onChange={handleInputChange} placeholder="Nhập tên doanh nghiệp" className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#ed792f] transition-shadow bg-neutral-50" />
                            </div>
                            <div>
                                <label className="block font-bold text-neutral-700 uppercase tracking-wide mb-1">Vấn đề doanh nghiệp bạn đang gặp phải</label>
                                <textarea rows="3" name="problem" value={formData.problem} onChange={handleInputChange} placeholder="Mô tả chi tiết vấn đề..." className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#ed792f] transition-shadow bg-neutral-50 leading-relaxed" />
                            </div>
                            <button type="submit" className="w-full bg-[#ed792f] text-white font-semibold py-3 rounded-lg hover:bg-neutral-950 transition-all duration-300 uppercase tracking-wider text-xs shadow-sm mt-2">
                                Gửi yêu cầu nhận tư vấn
                            </button>
                        </form>
                    </div>

                </div>
            </section>


            {/* ================= SECTION 2: SỰ MẮC KẸT ================= */}
            <section className="py-24 bg-white border-y border-neutral-200/40 px-6 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.3s_forwards]">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    
                    {/* Cột tiêu đề đối xứng trái */}
                    <div className="space-y-4">
                        <span className="text-[11px] font-medium tracking-wider text-[#ed792f] uppercase block">Phân tích thị trường</span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 leading-tight tracking-tight uppercase">
                            SỰ "MẮC KẸT" CỦA<br />
                            <span className="text-[#ed792f] block mt-1">CHỦ DOANH NGHIỆP SMES HIỆN TẠI</span>
                        </h2>
                        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed text-justify font-normal pt-2">
                            Hơn ai hết, chúng tôi thấu hiểu những nỗi bực bội và rào cản lớn mà các chủ doanh nghiệp đang phải gánh chịu khi làm Marketing
                        </p>
                        <div className="w-12 h-[2px] bg-[#ed792f]" />
                    </div>

                    {/* Cột danh sách lỗi căn chỉnh lề bên phải */}
                    <div className="space-y-6">
                        <div className="divide-y divide-neutral-100">
                            {[
                                { title: "Thuê Agency đại trà:", text: "Họ chỉ tập trung vào việc chạy ads, cam kết các chỉ số ảo (reaction, spam inbox). Khi bạn dừng chi tiền quảng cáo, dòng khách hàng lập tức sụt giảm về con số 0. Bạn không sở hữu bất kỳ một tài sản bền vững nào." },
                                { title: "Thuê Đội ngũ Freelancer tự do:", text: "Chi phí có thể rẻ ban đầu nhưng họ làm việc thiếu quy trình bài bản, không có tư duy chiến lược tổng thể bám sát mục tiêu kinh doanh, không có đội ngũ back-up và chỉ làm theo từng task riêng lẻ." },
                                { title: "Tự xây dựng phòng Marketing In-house:", text: "Chi phí lương thưởng cho một bộ máy đầy đủ vị trí (Trưởng phòng, Copywriter, Designer, Kỹ thuật Web, Chạy Ads...) là cực kỳ đắt đỏ, vượt quá nguồn lực của một SME. Thêm vào đó là bài toán khó khăn trong khâu tuyển dụng và quản trị nhân sự chuyên môn." }
                            ].map((item, idx) => (
                                <div key={idx} className="py-4 first:pt-0 last:pb-0 flex items-start gap-3 group">
                                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                                    <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed text-justify">
                                        <strong className="text-neutral-900 font-medium block mb-1 group-hover:text-[#ed792f] transition-colors">{item.title}</strong> {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>


            {/* ================= SECTION 3: GIẢI PHÁP CMIC MEDIA ================= */}
            <section className="py-24 max-w-6xl mx-auto px-6 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.5s_forwards]">
                <div className="mb-16 space-y-3 max-w-3xl">
                    <span className="text-[11px] font-medium tracking-wider text-[#ed792f] uppercase block">Mô hình giải quyết</span>
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 uppercase">
                        CMIC MEDIA GIẢI QUYẾT KHOẢNG TRỐNG THỊ TRƯỜNG NHƯ THẾ NÀO?
                    </h2>
                    <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed text-justify">
                        Chúng tôi chọn một lối đi hoàn toàn khác biệt: Xây dựng năng lực marketing dài hạn và có khả năng chuyển giao cho khách hàng. Gói dịch vụ trọn gói của CMIC MEDIA là sự kết hợp hoàn hảo giữa 3 vai trò trong 1 gói chi phí duy nhất:
                    </p>
                </div>

                {/* Lưới 3 cột mở rộng tinh gọn phân tách bằng border t */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { step: "01", title: "Chuyên gia cố vấn chiến lược (Consulting)", desc: "Định hình chiến lược marketing dựa trên mô hình kinh doanh, quy hoạch phễu chuyển đổi, thiết kế hành trình khách hàng chuẩn chỉnh." },
                        { step: "02", title: "Đội ngũ thực thi chuyên nghiệp (Executive)", desc: "Trực tiếp nhúng tay vào làm việc hằng ngày: Viết bài, thiết kế hình ảnh, sản xuất, edit video, tối ưu website, quản trị hạ tầng số." },
                        { step: "03", title: "Kỹ sư công nghệ tự động hóa (Tech Dev)", desc: "Triển khai cài đặt các dashboard đo lường chỉ số thực và ứng dụng AI Agent (n8n) để tinh gọn bộ máy vận hành." }
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


            {/* ================= SECTION 4: LỘ TRÌNH 3 GIAI ĐOẠN ================= */}
            <section className="py-24 bg-white border-t border-neutral-200/40 px-6 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-16 space-y-2">
                        <span className="text-[11px] font-medium tracking-wider text-[#ed792f] uppercase block">Quy trình đồng hành</span>
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 uppercase">
                            LỘ TRÌNH ĐỒNG HÀNH TOÀN DIỆN 3 GIAI ĐOẠN CỦA CMIC MEDIA
                        </h2>
                        <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed pt-1">
                            Chúng tôi triển khai công việc theo lộ trình rõ ràng, có kế hoạch chia nhỏ theo từng tuần/tháng để chủ doanh nghiệp dễ dàng kiểm soát tiến độ
                        </p>
                        <div className="w-12 h-[2px] bg-[#ed792f] pt-1" />
                    </div>

                    {/* Danh sách các giai đoạn dọc tinh tế */}
                    <div className="space-y-12">
                        
                        {/* GIAI ĐOẠN 1 */}
                        <div className="space-y-4 group">
                            <h3 className="text-base sm:text-lg font-bold text-neutral-900 border-l-2 border-[#ed792f] pl-3 uppercase">
                                Giai đoạn 1: Chuẩn hóa hạ tầng &amp; Khởi tạo tài sản số
                            </h3>
                            <div className="space-y-3 pl-4 font-normal text-xs sm:text-sm text-neutral-500">
                                <div className="flex items-start gap-2.5"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /><p className="text-justify"><strong className="text-neutral-900 font-medium">Audit tổng thể:</strong> Rà soát lại toàn bộ thực trạng các kênh marketing hiện tại, phân tích đối thủ cạnh tranh sát sườn.</p></div>
                                <div className="flex items-start gap-2.5"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /><p className="text-justify"><strong className="text-neutral-900 font-medium">Setup nền tảng:</strong> Thiết kế/tối ưu lại Website/Landing Page chuẩn chuyển đổi, cấu hình hệ thống Social đồng bộ nhận diện.</p></div>
                                <div className="flex items-start gap-2.5"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /><p className="text-justify"><strong className="text-neutral-900 font-medium">Thiết lập Tracking:</strong> Xây dựng dashboard báo cáo chỉ số trung gian công khai để đo lường chính xác nguồn khách.</p></div>
                            </div>
                        </div>

                        {/* GIAI ĐOẠN 2 */}
                        <div className="space-y-4 group">
                            <h3 className="text-base sm:text-lg font-bold text-neutral-900 border-l-2 border-[#ed792f] pl-3 uppercase">
                                Giai đoạn 2: Vận hành đa kênh &amp; Kích hoạt phễu chuyển đổi
                            </h3>
                            <div className="space-y-3 pl-4 font-normal text-xs sm:text-sm text-neutral-500">
                                <div className="flex items-start gap-2.5"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /><p className="text-justify"><strong className="text-neutral-900 font-medium">Sản xuất nội dung đồng bộ:</strong> Viết bài blog chuẩn SEO, chăm sóc Fanpage hằng tuần, sản xuất video TikTok/Reels/YouTube kéo traffic tự nhiên.</p></div>
                                <div className="flex items-start gap-2.5"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /><p className="text-justify"><strong className="text-neutral-900 font-medium">Vận hành Funnel &amp; CRM:</strong> Kích hoạt phễu thu lead bằng tài liệu miễn phí, cấu hình Email Marketing tự động nuôi dưỡng và làm ấm lead.</p></div>
                                <div className="flex items-start gap-2.5"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /><p className="text-justify"><strong className="text-neutral-900 font-medium">Họp tối ưu hằng tuần:</strong> Đọc chỉ số báo cáo định kỳ hằng tuần cùng chủ doanh nghiệp, điều chỉnh ngân sách dựa trên dữ liệu thực tế mang về.</p></div>
                            </div>
                        </div>

                        {/* GIAI ĐOẠN 3 */}
                        <div className="space-y-4 group">
                            <h3 className="text-base sm:text-lg font-bold text-neutral-900 border-l-2 border-[#ed792f] pl-3 uppercase">
                                Giai đoạn 3: Tự động hóa vận hành và Chuyển giao quy trình
                            </h3>
                            <div className="space-y-3 pl-4 font-normal text-xs sm:text-sm text-neutral-500">
                                <div className="flex items-start gap-2.5"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /><p className="text-justify"><strong className="text-neutral-900 font-medium">Tích hợp AI Agent n8n:</strong> Xây dựng kịch bản tự động hóa các khâu nhập liệu data, thông báo đơn hàng, báo cáo để giải phóng sức lao động.</p></div>
                                <div className="flex items-start gap-2.5"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /><p className="text-justify"><strong className="text-neutral-900 font-medium">Đóng gói bộ quy trình (SOP):</strong> Viết tài liệu hướng dẫn công việc chi tiết cho từng hạng mục marketing đã triển khai thành công.</p></div>
                                <div className="flex items-start gap-2.5"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /><p className="text-justify"><strong className="text-neutral-900 font-medium">Đào tạo &amp; Chuyển giao:</strong> Hỗ trợ tuyển dụng nhân sự in-house và đào tạo, chuyển giao hệ thống quy trình lại cho doanh nghiệp tự chủ vận hành.</p></div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* ================= SECTION 5: CAM KẾT VÀNG & CTA ================= */}
            <section className="py-24 bg-[#faf8f6] border-t border-neutral-200/40 px-6 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.7s_forwards]">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
                        <span className="text-[11px] font-medium tracking-wider text-[#ed792f] uppercase block">Giá trị cốt lõi</span>
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 uppercase">
                            CAM KẾT VÀNG TỪ CMIC MEDIA
                        </h2>
                        <div className="w-12 h-[2px] bg-[#ed792f] mx-auto mt-2" />
                    </div>

                    {/* Lưới 3 cột mở cho cam kết vàng */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
                        {[
                            { title: "NÓI KHÔNG VỚI CHỈ SỐ ẢO", text: "Chúng tôi không báo cáo lượt reach, lượt like vô nghĩa. CMIC MEDIA báo cáo số lượng Lead thực tế, tỷ lệ chuyển đổi và ROI dòng tiền rõ ràng." },
                            { title: "MINH BẠCH 100% TÀI NGUYÊN", text: "Toàn bộ mật khẩu hệ thống, mã nguồn website, tài khoản tracking, file thiết kế gốc Figma... đều thuộc quyền sở hữu vĩnh viễn của bạn. Chúng tôi tuyệt đối không giữ tài nguyên để ràng buộc khách hàng." },
                            { title: "TINH GỌN VÀ TRÁCH NHIỆM", text: "Làm việc sâu sát như những người cộng sự nội bộ của công ty bạn, thấu hiểu sản phẩm và đồng cam cộng khổ cùng mục tiêu tăng trưởng của doanh nghiệp." }
                        ].map((item, idx) => (
                            <div key={idx} className="space-y-4 border-t border-neutral-200/60 pt-5 group flex flex-col justify-between">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-green-500 shrink-0" strokeWidth={3} />
                                        <h3 className="text-base font-bold text-neutral-900 group-hover:text-[#ed792f] transition-colors uppercase tracking-wide">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-normal text-justify">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Nút đăng ký nhận tư vấn cuối trang dạng Minimal Link */}
                    <div className="pt-6 border-t border-neutral-200/40 flex justify-center">
                        <a href="#form-tu-van" className="bg-[#ed792f] text-white font-medium text-xs px-8 py-3 rounded-lg hover:bg-neutral-950 transition-all duration-300 shadow-sm uppercase tracking-wider">
                            Đăng ký nhận tư vấn ngay
                        </a>
                    </div>
                </div>
            </section>

            {/* CSS Animation Keyframes */}
            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(12px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>

        </div>
    );
}