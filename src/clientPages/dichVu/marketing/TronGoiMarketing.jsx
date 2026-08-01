import React from "react";
import { Phone } from "lucide-react";
import ContactForm from '../../../components/FormContact';

/* ================= SECTION 1: HERO BANNER ================= */
function HeroBanner() {
    return (
        <div
            className="relative w-full px-6 py-10 px-10 md:px-35"
            style={{
                background: "linear-gradient(100deg, #626567 0%, #ffffff 32%, #fbe2cf 68%, #f0904f 100%)"
            }}
        >
            <div className="relative flex flex-col md:flex-row items-center justify-end min-h-[400px]">
                {/* LEFT: Image Container */}
                <div className="w-full md:w-[46%] mb-8 md:mb-0 relative md:absolute md:left-0 md:top-65 md:-translate-y-1/2 z-10">
                    <div className="relative w-full aspect-[16/10] overflow-hidden shadow-2xl">
                        <img
                            src="/trongoi.marketing/img1.png"
                            alt="Handshake illustration"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* RIGHT: Content Container */}
                <div className="w-full md:w-[50%] z-10">
                    <div>
                       <div className="relative py-3 sm:py-4 lg:py-5 w-full overflow-hidden">
    {/* TIÊU ĐỀ CHÍNH - Thu gọn font size vừa vặn với màn Tablet */}
    <h1 className="relative z-10 text-black font-bold uppercase tracking-tighter leading-none text-2xl sm:text-3xl md:text-4xl lg:text-6xl">
        ĐỐI TÁC CHIẾN LƯỢC
    </h1>

    {/* KHỐI NỀN TRẮNG RỘNG - Xử lý không cho tràn màn hình Tablet */}
    <div className="inline-block bg-white -mt-2 sm:-mt-3 lg:-mt-5 ml-[5%] sm:ml-[8%] lg:ml-[12%] pl-3 sm:pl-5 lg:pl-8 pr-4 sm:pr-8 lg:pr-20 pt-3 sm:pt-5 lg:pt-8 pb-2 sm:pb-3 lg:pb-4 shadow-sm max-w-[90%]">
        <p className="font-bold uppercase tracking-wider text-black text-xs sm:text-base md:text-lg lg:text-3xl leading-snug lg:leading-none whitespace-normal sm:whitespace-nowrap">
            INHOUSE MARKETING PARTNER
        </p>
    </div>
</div>

                        <p className="text-neutral-800 text-base sm:text-lg leading-relaxed text-justify">
                            Thay thế mô hình thuê freelancer chắp vá hay agency làm theo dự án
                            ngắn hạn. CMIC MEDIA mang đến gói giải pháp tổng thể: cùng bạn xây
                            dựng chiến lược phát triển trên toàn bộ tài sản số, sản xuất nội
                            dung đa kênh, triển khai chiến dịch, đo lường dữ liệu và tối ưu vận
                            hành. Chúng tôi cam kết đồng hành lâu dài cùng mục tiêu kinh doanh
                            của doanh nghiệp.
                        </p>

                        {/* NÚT ĐĂNG KÝ NẰM CHÍNH GIỮA CỘT 2 */}
                        <div className="flex justify-center mt-8 relative md:absolute md:right-1/7 md:top-1/1 md:-translate-y-1/2 z-10">
                            <button
                                type="button"
                                className="group inline-flex items-center gap-3 rounded-full pl-7 pr-2 py-2.5 font-extrabold text-white shadow-xl transition-transform duration-150 hover:scale-[1.03] active:scale-[0.98]"
                                style={{ background: "linear-gradient(90deg, #f0904f 0%, #e8752b 100%)" }}
                            >
                                <span className="tracking-wide text-sm sm:text-base uppercase">
                                    Đăng ký nhận tư vấn
                                </span>
                                <span
                                    className="flex items-center justify-center rounded-full p-2.5"
                                    style={{ background: "rgba(0,0,0,0.15)" }}
                                >
                                    <Phone size={18} strokeWidth={2.5} className="text-black fill-black" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ================= SECTION 2: PROBLEM & CONTACT FORM ================= */
function ProblemAndContact() {
    return (
        <div className="w-full px-10 md:px-35 py-12 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* LEFT COLUMN: Problem points (7 cols) */}
                <div className="lg:col-span-7 space-y-6 text-neutral-800 text-base sm:text-lg leading-relaxed">
                    <p>
                        Trong giai đoạn thị trường cạnh tranh gay gắt, để bứt phá doanh thu, mỗi doanh nghiệp SME đều cần một hệ thống Marketing vận hành đồng bộ và chuẩn chỉnh.
                    </p>

                    <p className="text-lg font-normal">
                        Tuy nhiên, <strong className="font-bold text-black">việc triển khai Marketing tổng thể đòi hỏi rất nhiều <span className="text-red-600 font-bold">tài nguyên</span>:</strong>
                    </p>

                    {/* Item 1 */}
                    <div className="space-y-2 pt-2">
                        <div className="inline-block bg-[#fcd8c1] text-red-600 font-bold px-3 py-1 text-base sm:text-lg rounded-sm">
                            01. Tối ưu chi phí & nguồn lực
                        </div>
                        <p className="text-neutral-700">
                            Cần giải pháp vừa đáp ứng đầy đủ các vị trí chuyên môn (Chiến lược, Content, Design, Web, Ads, Data), vừa đảm bảo ngân sách tối ưu và linh hoạt cho doanh nghiệp.
                        </p>
                    </div>

                    {/* Item 2 */}
                    <div className="space-y-2 pt-2">
                        <div className="inline-block bg-[#fcd8c1] text-red-600 font-bold px-3 py-1 text-base sm:text-lg rounded-sm">
                            02. Xây dựng tài sản số bền vững
                        </div>
                        <p className="text-neutral-700">
                            Không chỉ tập trung vào ngắn hạn, doanh nghiệp cần sở hữu hệ thống kênh, dữ liệu khách hàng và quy trình vận hành riêng biệt để phát triển dài hạn.
                        </p>
                    </div>

                    {/* Item 3 */}
                    <div className="space-y-2 pt-2">
                        <div className="inline-block bg-[#fcd8c1] text-red-600 font-bold px-3 py-1 text-base sm:text-lg rounded-sm">
                            03. Đo lường chính xác & Tự động hóa
                        </div>
                        <p className="text-neutral-700">
                            Cần các công cụ quản trị dữ liệu minh bạch để theo dõi hiệu quả kinh doanh thực tế, tối ưu chi phí vận hành.
                        </p>
                    </div>
                </div>

                {/* RIGHT COLUMN: Contact Form (5 cols) */}
                <div className="lg:col-span-5">
                    <ContactForm />
                </div>
            </div>

            {/* BOTTOM BANNER / CONCLUSION BOX */}
            <div className="mt-10 bg-[#fbd0b4] border border-[#d6641e] p-4 sm:p-5 text-center rounded-sm">
                <p className="font-extrabold text-neutral-900 text-base sm:text-lg md:text-xl leading-snug">
                    CMIC MEDIA ra đời để mang đến giải pháp trọn gói, giải quyết trọn vẹn những bài toán này cho doanh nghiệp của bạn.
                </p>
            </div>
        </div>
    );
}

/* ================= SECTION 3: MÔ HÌNH ALL-IN-ONE ================= */
function AllInOneModel() {
    return (
        <div className="w-full px-10 md:px-35 py-12 md:py-16">
            {/* Header Section 3 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-12">
                <div className="md:col-span-6 flex justify-center">
                    <img
                        src="/trongoi.marketing/img2.png"
                        alt="Biểu đồ năng lực"
                        className="w-full max-w-[420px] h-auto object-contain"
                    />
                </div>

                <div className="md:col-span-6 space-y-3">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight uppercase leading-tight">
                        CHÚNG TÔI MANG ĐẾN MÔ HÌNH
                    </h2>
                    <p className="text-xl sm:text-2xl font-extrabold text-[#e8752b]">
                        All-in-One Marketing Partner
                    </p>
                    <p className="text-neutral-700 text-base sm:text-lg leading-relaxed pt-2">
                        Tích hợp 4 năng lực cốt lõi trong một gói dịch vụ duy nhất, giúp doanh nghiệp vận hành marketing hiệu quả, chuyên nghiệp và tự chủ lâu dài:
                    </p>
                </div>
            </div>

            {/* Main Content Grid: 4 Năng lực cốt lõi */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Left Side: Mục 01, 02 */}
                <div className="md:col-span-6 space-y-8">
                    <div className="space-y-2">
                        <div className="inline-block bg-[#fcd8c1] text-[#1c1c1c] font-extrabold px-3 py-1 text-base sm:text-lg rounded-sm">
                            01. Cố vấn chiến lược & Phễu chuyển đổi
                        </div>
                        <p className="text-neutral-700 leading-relaxed text-base sm:text-lg">
                            Định hình chiến lược marketing gắn liền với mô hình kinh doanh. Thiết kế phễu bán hàng và hành trình trải nghiệm khách hàng tối ưu nhất cho từng ngành hàng.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <div className="inline-block bg-[#fcd8c1] text-[#1c1c1c] font-extrabold px-3 py-1 text-base sm:text-lg rounded-sm">
                            02. Đội ngũ thực thi chuyên nghiệp
                        </div>
                        <p className="text-neutral-700 leading-relaxed text-base sm:text-lg">
                            Trực tiếp triển khai trọn gói mọi hoạt động hàng ngày: Viết bài, thiết kế hình ảnh, sản xuất video ngắn, tối ưu SEO/Website, chạy quảng cáo và quản trị hệ thống kênh đa nền tảng.
                        </p>
                    </div>
                </div>

                {/* Right Side: Ảnh ghép Business (img2) */}
                <div className="md:col-span-6 flex justify-center">
                    <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-neutral-200">
                        <img
                            src="/trongoi.marketing/img3.png"
                            alt="Business Handshake keyboard"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Left Side Bottom: Biểu đồ hình quạt / bánh (img3) */}
                <div className="md:col-span-6 flex justify-center order-2 md:order-1 pt-6 md:pt-0">
                    <img
                        src="/trongoi.marketing/img4.png"
                        alt="Mô hình bánh đà Marketing"
                        className="w-full max-w-[380px] h-auto object-contain"
                    />
                </div>

                {/* Right Side Bottom: Mục 03, 04 */}
                <div className="md:col-span-6 space-y-8 order-1 md:order-2">
                    <div className="space-y-2">
                        <div className="inline-block bg-[#fcd8c1] text-[#1c1c1c] font-extrabold px-3 py-1 text-base sm:text-lg rounded-sm">
                            03. Ứng dụng công nghệ & Tự động hóa
                        </div>
                        <p className="text-neutral-700 leading-relaxed text-base sm:text-lg">
                            Xây dựng hệ thống Dashboard đo lường chỉ số kinh doanh real-time và ứng dụng AI Agent (n8n) để tự động hóa quy trình vận hành, tối ưu hóa năng suất làm việc.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <div className="inline-block bg-[#fcd8c1] text-[#1c1c1c] font-extrabold px-3 py-1 text-base sm:text-lg rounded-sm">
                            04. Đào tạo - Phát triển đội ngũ inhouse
                        </div>
                        <p className="text-neutral-700 leading-relaxed text-base sm:text-lg">
                            Đồng hành cùng doanh nghiệp tuyển dụng, phỏng vấn, trực tiếp đào tạo kỹ năng chuyên môn và chuyển giao trọn bộ quy trình chuẩn (SOP) giúp đội ngũ nội bộ nhanh chóng làm chủ và tự vận hành hệ thống marketing lâu dài.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ================= SECTION 4: LỘ TRÌNH ĐỒNG HÀNH TOÀN DIỆN ================= */
function Roadmap() {
    return (
        <div
            className="w-full py-16 px-10 md:px-35"
            style={{
                background: "linear-gradient(180deg, #fff2e8 0%, #fcd7be 40%, #f0904f 100%)"
            }}
        >
            <div className="w-full space-y-8">
                {/* Header Section 4 */}
                <div className="text-center space-y-2">
                    <h2 className="text-xl md:text-2xl font-extrabold text-neutral-900 tracking-tight uppercase">
                        Lộ trình đồng hành toàn diện
                    </h2>
                    <p className="text-xl sm:text-2xl font-extrabold text-[#e85d04] uppercase tracking-wide">
                        3 Giai đoạn
                    </p>
                </div>

                {/* GIAI ĐOẠN 1 */}
                <div className="bg-[#fde2d1]/90 border border-[#f8a873] rounded-2xl shadow-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row items-stretch">
                        {/* CỘT ẢNH: Chiều rộng tự động (w-auto) ôm khít viền ảnh, không thừa 2 bên */}
                        <div className="w-full md:w-auto md:max-w-[35%] shrink-0 flex items-center justify-center bg-[#fde2d1]">
                            <img
                                src="/trongoi.marketing/img5.png"
                                alt="Giai đoạn 1: Chuẩn hoá hạ tầng"
                                className="w-full h-full object-contain max-h-[300px] md:max-h-[360px] rounded-l-2xl p-2"
                            />
                        </div>

                        {/* CỘT NỘI DUNG: flex-1 tự động tràn vào áp sát mép ảnh */}
                        <div className="flex-1 p-6 md:p-8 space-y-4">
                            <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900 leading-snug">
                                Giai đoạn 1: Chuẩn hoá hạ tầng & Khởi tạo tài sản số
                            </h3>

                            <ul className="space-y-3 text-neutral-900 text-sm sm:text-base leading-relaxed">
                                <li className="flex items-start gap-2.5">
                                    <span className="text-black font-bold text-lg leading-none mt-1">•</span>
                                    <div>
                                        <strong className="font-bold text-black">Audit tổng thể:</strong> Rà soát lại toàn bộ thực trạng các kênh marketing hiện tại, nghiên cứu thị trường và phân tích đối thủ cạnh tranh.
                                    </div>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <span className="text-black font-bold text-lg leading-none mt-1">•</span>
                                    <div>
                                        <strong className="font-bold text-black">Setup nền tảng:</strong> Thiết kế/tối ưu Website/Landing Page chuẩn chuyển đổi; thiết lập và đồng bộ nhận diện thương hiệu trên các kênh Social (Facebook, TikTok, YouTube...).
                                    </div>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <span className="text-black font-bold text-lg leading-none mt-1">•</span>
                                    <div>
                                        <strong className="font-bold text-black">Thiết lập Tracking:</strong> Cấu hình hệ thống đo lường dữ liệu và khởi tạo Dashboard báo cáo công khai để quản trị chỉ số hiệu quả.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* GIAI ĐOẠN 2 */}
                <div className="bg-[#fde2d1]/90 border border-[#f8a873] rounded-2xl shadow-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row items-stretch">
                        <div className="w-full md:w-auto md:max-w-[35%] shrink-0 flex items-center justify-center bg-[#fde2d1]">
                            <img
                                src="/trongoi.marketing/img6.png"
                                alt="Giai đoạn 2: Vận hành đa kênh"
                                className="w-full h-full object-contain max-h-[300px] md:max-h-[360px] rounded-l-2xl p-2"
                            />
                        </div>

                        <div className="flex-1 p-6 md:p-8 space-y-4">
                            <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900 leading-snug">
                                Giai đoạn 2: Vận hành đa kênh & Tối ưu phễu chuyển đổi
                            </h3>

                            <ul className="space-y-3 text-neutral-900 text-sm sm:text-base leading-relaxed">
                                <li className="flex items-start gap-2.5">
                                    <span className="text-black font-bold text-lg leading-none mt-1">•</span>
                                    <div>
                                        <strong className="font-bold text-black">Sản xuất nội dung đồng bộ:</strong> Triển khai bài viết chuẩn SEO, chăm sóc kênh Social hàng tuần, sản xuất chuỗi video ngắn thu hút traffic tự nhiên.
                                    </div>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <span className="text-black font-bold text-lg leading-none mt-1">•</span>
                                    <div>
                                        <strong className="font-bold text-black">Vận hành Funnel & CRM:</strong> Kích hoạt phễu thu thập lead, xây dựng kịch bản Email Marketing/Automation tự động nuôi dưỡng và chăm sóc khách hàng tiềm năng.
                                    </div>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <span className="text-black font-bold text-lg leading-none mt-1">•</span>
                                    <div>
                                        <strong className="font-bold text-black">Tối ưu hóa liên tục:</strong> Định kỳ đọc báo cáo dữ liệu hàng tuần cùng chủ doanh nghiệp để điều chỉnh chiến lược và tối ưu ngân sách dựa trên hiệu quả thực tế.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* GIAI ĐOẠN 3 */}
                <div className="bg-[#fde2d1]/90 border border-[#f8a873] rounded-2xl shadow-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row items-stretch">
                        <div className="w-full md:w-auto md:max-w-[35%] shrink-0 flex items-center justify-center bg-[#fde2d1]">
                            <img
                                src="/trongoi.marketing/img7.png"
                                alt="Giai đoạn 3: Tự động hóa vận hành"
                                className="w-full h-full object-contain max-h-[300px] md:max-h-[360px] rounded-l-2xl p-2"
                            />
                        </div>

                        <div className="flex-1 p-6 md:p-8 space-y-4">
                            <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900 leading-snug">
                                Giai đoạn 3: Tự động hóa vận hành & Chuyển giao hệ thống
                            </h3>

                            <ul className="space-y-3 text-neutral-800 text-sm sm:text-base leading-relaxed">
                                <li className="flex items-start gap-2.5">
                                    <span className="text-black font-bold text-lg leading-none mt-1">•</span>
                                    <div>
                                        <strong className="font-bold text-black">Tích hợp AI Agent (n8n):</strong> Tự động hóa các khâu thu thập data, đồng bộ đơn hàng và báo cáo tự động, giúp tối ưu thời gian và chi phí vận hành.
                                    </div>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <span className="text-black font-bold text-lg leading-none mt-1">•</span>
                                    <div>
                                        <strong className="font-bold text-black">Đóng gói bộ quy trình (SOP):</strong> Chuẩn hóa toàn bộ tài liệu hướng dẫn quy trình vận hành marketing đã kiểm chứng thành công.
                                    </div>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <span className="text-black font-bold text-lg leading-none mt-1">•</span>
                                    <div>
                                        <strong className="font-bold text-black">Đào tạo & Chuyển giao:</strong> Hỗ trợ phỏng vấn, đào tạo nhân sự và chuyển giao toàn bộ quy trình cùng hệ thống tài sản số để doanh nghiệp chủ động vận hành lâu dài.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ================= MAIN COMPONENT ================= */
export default function MarketingLandingPage() {
    return (
        <div className="w-full bg-white text-neutral-800 font-sans">
            <HeroBanner />
            <ProblemAndContact />
            <AllInOneModel />
            <Roadmap />
        </div>
    );
}