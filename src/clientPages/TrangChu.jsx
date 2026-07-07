import React from 'react';
import { 
  Phone, 
  XCircle, 
  UserCheck, 
  MessageSquare, 
  Send, 
  FileText, 
  Settings, 
  Calendar,
  ArrowRight,
  ArrowDown,
  ArrowLeft
} from 'lucide-react';

export default function TrangChu() {
    // DATA SESSION 2: Điểm nghẽn
    const problems = [
        {
            title: "Marketing\nmanh mún, rời rạc",
            desc: "Làm nhiều kênh (Facebook, TikTok, Website) nhưng không có sự kết nối, không tạo ra chuyển đổi."
        },
        {
            title: '"Đốt tiền" quảng cáo\nhưng dừng là hết khách',
            desc: "Phụ thuộc hoàn toàn vào Ads, chi phí ngày càng cao nhưng không giữ chân được khách hàng."
        },
        {
            title: "Khó đo lường,\nphân bổ theo cảm tính",
            desc: "Không có dashboard báo cáo chỉ số rõ ràng, không biết dòng tiền thực sự đang hiệu quả ở kênh nào."
        },
        {
            title: "Khủng hoảng\nnhân sự freelance",
            desc: "Thiếu chuyên môn xây chiến lược, chi phí vận hành bộ máy marketing nội bộ chưa tối ưu và khó đồng hành dài hạn."
        }
    ];

    // DATA SESSION 3: Giá trị cốt lõi
    const values = [
        {
            badge: "HỆ THỐNG HÓA BÀI BẢN",
            desc: "Tập trung xây dựng các tài sản số lâu dài (Website, Funnel, CRM) thuộc sở hữu của riêng bạn."
        },
        {
            badge: "TỐI ƯU CHI PHÍ & TINH GỌN",
            desc: "Chi phí linh hoạt, thấp hơn nhiều so với việc duy trì một phòng marketing cồng kềnh."
        },
        {
            badge: "CHUYỂN GIAO NĂNG LỰC",
            desc: "Từng bước giúp doanh nghiệp của bạn làm chủ hệ thống, tự vận hành và giảm phụ thuộc vào bên ngoài."
        }
    ];

    // DATA SESSION 4: Các dịch vụ chính
    const services = [
        {
            title: "DỰNG VÀ THIẾT KẾ\nWEBSITE & LANDING PAGE",
            desc: "Tại CMIC MEDIA, chúng tôi không bán một trang web đơn lẻ. Chúng tôi cung cấp giải pháp Xây dựng Tài sản số cốt lõi. Một website được thiết kế bởi CMIC MEDIA thỏa mãn 3 yếu tố trọng tâm: Thẩm mỹ thương hiệu - Trải nghiệm mượt mà - Tỷ lệ chuyển đổi tối đa."
        },
        {
            title: "CHĂM SÓC TOÀN DIỆN\nCÁC “ĐIỂM CHẠM” TRÊN SOCIAL",
            desc: "Đăng bài ngẫu hứng là cách nhanh nhất để triệt tiêu hiệu quả truyền thông. CMIC MEDIA đồng hành cùng bạn xây dựng ma trận nội dung đồng bộ, giáo dục thị trường và biến các kênh mạng xã hội thành phễu thu hút Lead chất lượng cao với chi phí tối ưu nhất."
        },
        {
            title: "THIẾT KẾ HỆ THỐNG AI AGENT",
            desc: "Chúng tôi sử dụng n8n – nền tảng tự động hóa quy trình mạnh mẽ nhất hiện nay kết hợp với trí tuệ nhân tạo (AI) để xây dựng hệ thống tự động hóa vận hành, giải phóng 80% nguồn lực cho SME."
        },
        {
            title: "TRỌN GÓI MARKETING",
            desc: "CMIC MEDIA giúp bạn xây dựng chiến lược, thiết lập toàn bộ tài sản số, sản xuất nội dung đa kênh, cài đặt hệ thống đo lường dữ liệu và ứng dụng AI tự động hóa vận hành. Chúng tôi làm việc như một phòng marketing nội bộ thực chiến, cam kết đồng hành lâu dài cùng mục tiêu doanh thu của doanh nghiệp."
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans selection:bg-[#ed792f] selection:text-white antialiased">
            
            {/* =======================================================
                SESSION 1: HERO SECTION
               ======================================================= */}
            <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-6">
                    <div className="space-y-2">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-950 tracking-tight">
                            GIẢI PHÁP IN-HOUSE MARKETING AGENCY
                        </h1>
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#ed792f] tracking-wide">
                            PHÒNG MARKETING THUÊ NGOÀI THỰC CHIẾN
                        </h2>
                    </div>
                    
                    <div className="bg-[#fff6f0] p-6 md:p-8 rounded-[32px] text-gray-800 leading-relaxed text-justify text-sm md:text-base border border-orange-100/50">
                        <p>
                            <strong className="font-bold text-gray-950">CMIC MEDIA</strong> vận hành theo mô hình in-house marketing agency (phòng marketing nội bộ), nhằm đồng hành cùng Startup, SME và Cá nhân kinh doanh trong việc thiết kế và vận hành một hệ thống online marketing bài bản, dễ quản lý và đo lường hiệu quả. Thay vì triển khai các hoạt động marketing rời rạc hoặc phụ thuộc vào quảng cáo trả phí, mô hình của chúng tôi tập trung giúp doanh nghiệp xây dựng nền tảng marketing bền vững thông qua các tài sản số cốt lõi như website, hệ thống nội dung đa kênh, phễu chuyển đổi, ads, email/CRM và công cụ đo lường.
                        </p>
                    </div>
                    
                    <button className="inline-flex items-center gap-3 bg-[#ed792f] hover:bg-[#d66523] text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-orange-500/20 transition duration-300 transform hover:scale-[1.02] text-base md:text-lg group">
                        <span>ĐĂNG KÝ NHẬN TƯ VẤN</span>
                        <div className="bg-white/20 p-1.5 rounded-full">
                            <Phone className="w-5 h-5 fill-white text-[#ed792f]" />
                        </div>
                    </button>
                </div>

                <div className="lg:col-span-5 relative grid grid-cols-2 gap-4 p-2">
                    <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                        <img src="path-to-image1.jpg" className="w-full h-full object-cover opacity-80" alt="Dịch vụ 1" />
                    </div>
                    <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                        <img src="path-to-image2.jpg" className="w-full h-full object-cover opacity-80" alt="Dịch vụ 2" />
                    </div>
                    <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                        <img src="path-to-image3.jpg" className="w-full h-full object-cover opacity-80" alt="Dịch vụ 3" />
                    </div>
                    <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                        <img src="path-to-image4.jpg" className="w-full h-full object-cover opacity-80" alt="Dịch vụ 4" />
                    </div>
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white p-4 rounded-full shadow-xl border border-gray-100 flex items-center justify-center w-16 h-16 md:w-20 md:h-20">
                            <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="border-gray-100" />

            {/* =======================================================
                SESSION 2: ĐIỂM NGHẼN CỦA DOANH NGHIỆP
               ======================================================= */}
            <section className="bg-white py-16 px-6 max-w-7xl mx-auto">
                <div className="text-center space-y-2 mb-16">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-950 tracking-tight uppercase">
                        DOANH NGHIỆP BẠN CÓ ĐANG GẶP PHẢI
                    </h2>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#ed792f] tracking-wide uppercase">
                        NHỮNG "ĐIỂM NGHẼN" NÀY?
                    </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
                    {problems.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center space-y-4 px-2">
                            <div className="relative flex items-center justify-center">
                                <XCircle className="w-14 h-14 text-red-500 fill-red-500 stroke-white drop-shadow-md" />
                            </div>
                            <h4 className="text-lg md:text-xl font-bold text-[#ed792f] leading-snug whitespace-pre-line min-h-[56px] flex items-center justify-center">
                                {item.title}
                            </h4>
                            <p className="text-gray-800 text-sm md:text-base leading-relaxed max-w-xs sm:max-w-none">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <hr className="border-gray-100" />

            {/* =======================================================
                SESSION 3: MARKETING LÀ TÀI SẢN SỐ
               ======================================================= */}
            <section className="bg-white py-16 px-6 max-w-7xl mx-auto space-y-12">
                <div className="text-center space-y-6 max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-950 tracking-tight uppercase leading-tight">
                        <span className="text-[#ed792f]">MARKETING</span> LÀ TÀI SẢN SỐ GIÚP BẠN<br />TẠO DÒNG TIỀN BỀN VỮNG
                    </h2>
                    <div className="bg-[#fff6f0] px-6 py-6 rounded-[28px] border border-orange-100/70 shadow-sm text-sm md:text-base text-gray-800 leading-relaxed">
                        CMIC MEDIA đóng vai trò là một đối tác chiến lược. Chúng tôi không nhận làm "thuê theo đầu việc". Chúng tôi vào cuộc để <strong className="text-gray-950 font-bold">Xây nền tảng – Chuẩn hoá quy trình – Thiết lập hệ thống đo lường – Đồng hành vận hành.</strong>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 pt-6">
                    {values.map((value, idx) => (
                        <div key={idx} className="relative flex flex-col pt-6">
                            <div className="absolute top-0 left-6 right-6 bg-black text-[#ed792f] text-center font-bold text-sm md:text-base py-2.5 rounded-t-xl z-10 uppercase tracking-wide shadow-md">
                                {value.badge}
                            </div>
                            <div className="bg-[#ed792f] text-white p-6 md:p-8 rounded-2xl shadow-lg shadow-orange-500/10 text-justify text-sm md:text-base leading-relaxed flex-1 mt-4 pt-10 min-h-[160px]">
                                <p>{value.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <hr className="border-gray-100" />

            {/* =======================================================
                SESSION 4: CÁC DỊCH VỤ CHÍNH CMIC MEDIA CUNG CẤP
               ======================================================= */}
            <section className="bg-white py-16 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-950 tracking-tight uppercase">
                        CÁC DỊCH VỤ CHÍNH <span className="text-[#ed792f]">CMIC MEDIA CUNG CẤP</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-16 md:gap-y-12">
                    {services.map((svc, index) => (
                        <div key={index} className="space-y-3 flex flex-col">
                            <h3 className="text-lg md:text-xl font-extrabold text-[#ed792f] tracking-wide whitespace-pre-line leading-snug">
                                {svc.title}
                            </h3>
                            <p className="text-gray-800 text-sm md:text-base leading-relaxed text-justify">
                                {svc.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <hr className="border-gray-100" />

            {/* =======================================================
                SESSION 5: QUY TRÌNH HỢP TÁC
               ======================================================= */}
            <section className="bg-white py-16 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-950 tracking-tight uppercase">
                        QUY TRÌNH <span className="text-[#ed792f]">HỢP TÁC</span>
                    </h2>
                </div>

                {/* Khối quy trình responsive tốt */}
                <div className="hidden lg:flex flex-col gap-6 max-w-6xl mx-auto">
                    {/* Hàng 1 (Bước 1 -> 2 -> 3) */}
                    <div className="grid grid-cols-5 items-center">
                        {/* Bước 1 */}
                        <div className="bg-black text-white p-6 rounded-3xl border-2 border-[#ed792f]/40 text-center flex flex-col items-center justify-center space-y-4 shadow-xl h-44">
                            <UserCheck className="w-10 h-10 text-[#ed792f]" />
                            <span className="font-extrabold text-sm tracking-wider">ĐĂNG KÝ NHẬN TƯ VẤN</span>
                        </div>
                        {/* Mũi tên 1 -> 2 */}
                        <div className="flex justify-center"><ArrowRight className="w-8 h-8 text-[#ed792f] animate-pulse" /></div>
                        {/* Bước 2 */}
                        <div className="bg-black text-white p-6 rounded-3xl border-2 border-[#ed792f]/40 text-center flex flex-col items-center justify-center space-y-4 shadow-xl h-44">
                            <MessageSquare className="w-10 h-10 text-[#ed792f]" />
                            <span className="font-extrabold text-sm tracking-wider">TƯ VẤN VIÊN LIÊN HỆ TRAO ĐỔI</span>
                        </div>
                        {/* Mũi tên 2 -> 3 */}
                        <div className="flex justify-center"><ArrowRight className="w-8 h-8 text-[#ed792f] animate-pulse" /></div>
                        {/* Bước 3 */}
                        <div className="bg-black text-white p-6 rounded-3xl border-2 border-[#ed792f]/40 text-center flex flex-col items-center justify-center space-y-4 shadow-xl h-44">
                            <Send className="w-10 h-10 text-[#ed792f]" />
                            <span className="font-extrabold text-sm tracking-wider">GỬI PROPOSAL</span>
                        </div>
                    </div>

                    {/* Mũi tên đi xuống từ bước 3 xuống bước 4 */}
                    <div className="grid grid-cols-5">
                        <div className="col-start-5 flex justify-center py-2">
                            <ArrowDown className="w-8 h-8 text-[#ed792f]" />
                        </div>
                    </div>

                    {/* Hàng 2 (Bước 6 <- 5 <- 4) */}
                    <div className="grid grid-cols-5 items-center">
                        {/* Bước 6 */}
                        <div className="bg-black text-white p-6 rounded-3xl border-2 border-[#ed792f]/40 text-center flex flex-col items-center justify-center space-y-4 shadow-xl h-44">
                            <FileText className="w-10 h-10 text-[#ed792f]" />
                            <span className="font-extrabold text-xs tracking-wider">THEO DÕI ĐỊNH KỲ, HỌP HÀNH VÀ GỬI BÁO CÁO ĐỊNH KỲ</span>
                        </div>
                        {/* Mũi tên 5 -> 6 */}
                        <div className="flex justify-center"><ArrowLeft className="w-8 h-8 text-[#ed792f] animate-pulse" /></div>
                        {/* Bước 5 */}
                        <div className="bg-black text-white p-6 rounded-3xl border-2 border-[#ed792f]/40 text-center flex flex-col items-center justify-center space-y-4 shadow-xl h-44">
                            <Settings className="w-10 h-10 text-[#ed792f]" />
                            <span className="font-extrabold text-sm tracking-wider">LẬP KẾ HOẠCH VÀ TRIỂN KHAI CÔNG VIỆC</span>
                        </div>
                        {/* Mũi tên 4 -> 5 */}
                        <div className="flex justify-center"><ArrowLeft className="w-8 h-8 text-[#ed792f] animate-pulse" /></div>
                        {/* Bước 4 */}
                        <div className="bg-black text-white p-6 rounded-3xl border-2 border-[#ed792f]/40 text-center flex flex-col items-center justify-center space-y-4 shadow-xl h-44 relative overflow-hidden group">
                            <Calendar className="w-10 h-10 text-[#ed792f]" />
                            <span className="font-extrabold text-sm tracking-wider z-10">KÝ HỢP ĐỒNG HỢP TÁC</span>
                            <div className="absolute top-4 bg-white text-black font-black px-4 py-1 rounded-full text-[10px] uppercase shadow-sm tracking-widest scale-95 pointer-events-none">
                              FOLLOW
                            </div>
                        </div>
                    </div>
                </div>

                {/* Layout dành riêng cho Mobile/Tablet (Xếp dọc tuyến tính) */}
                <div className="flex lg:hidden flex-col items-center space-y-4 max-w-sm mx-auto">
                    {[
                        { icon: <UserCheck className="w-8 h-8 text-[#ed792f]" />, text: "ĐĂNG KÝ NHẬN TƯ VẤN" },
                        { icon: <MessageSquare className="w-8 h-8 text-[#ed792f]" />, text: "TƯ VẤN VIÊN LIÊN HỆ TRAO ĐỔI" },
                        { icon: <Send className="w-8 h-8 text-[#ed792f]" />, text: "GỬI PROPOSAL" },
                        { icon: <Calendar className="w-8 h-8 text-[#ed792f]" />, text: "KÝ HỢP ĐỒNG HỢP TÁC" },
                        { icon: <Settings className="w-8 h-8 text-[#ed792f]" />, text: "LẬP KẾ HOẠCH VÀ TRIỂN KHAI CÔNG VIỆC" },
                        { icon: <FileText className="w-8 h-8 text-[#ed792f]" />, text: "THEO DÕI ĐỊNH KỲ, HỌP HÀNH VÀ GỬI BÁO CÁO ĐỊNH KỲ" },
                    ].map((step, i) => (
                        <React.Fragment key={i}>
                            <div className="w-full bg-black text-white p-6 rounded-2xl border border-[#ed792f]/30 text-center flex flex-col items-center space-y-3 shadow-md">
                                {step.icon}
                                <span className="font-extrabold text-sm tracking-wide">{step.text}</span>
                            </div>
                            {i < 5 && <ArrowDown className="w-6 h-6 text-[#ed792f]" />}
                        </React.Fragment>
                    ))}
                </div>
            </section>

        </div>
    );
}