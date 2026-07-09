import React, { useEffect, useRef, useState } from "react";
import { Phone, XCircle, CheckCircle2, Search, FileText, Sliders, MonitorPlay } from "lucide-react";

// Hook xử lý hiệu ứng trồi lên, mờ dần mượt mà khi cuộn chuột đến nơi
function useScrollReveal() {
    const [isRevealed, setIsRevealed] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsRevealed(true);
                    observer.unobserve(entry.target); // Chạy 1 lần duy nhất khi cuộn qua
                }
            },
            { threshold: 0.1 } // Kích hoạt khi 10% phần tử xuất hiện trên màn hình
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) observer.disconnect();
        };
    }, []);

    return [elementRef, isRevealed];
}

export default function CmicCarePage() {
    // Khởi tạo các điểm neo hiệu ứng cuộn cho từng session và phần tử
    const [heroRef, heroRevealed] = useScrollReveal();
    const [probRef, probRevealed] = useScrollReveal();
    const [valRef, valRevealed] = useScrollReveal();
    const [sec1Ref, sec1Revealed] = useScrollReveal();
    const [sec2Ref, sec2Revealed] = useScrollReveal();
    const [sec3Ref, sec3Revealed] = useScrollReveal();
    const [sec4Ref, sec4Revealed] = useScrollReveal();

    return (
        <div className="bg-white text-slate-900 min-h-screen antialiased overflow-x-hidden font-sans scroll-smooth">
            
            {/* ================= SESSION 1: HERO SECTION ================= */}
            <section 
                ref={heroRef}
                className={`max-w-5xl mx-auto px-6 pt-20 pb-16 text-center transition-all duration-[1000ms] ease-out transform ${
                    heroRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
            >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 leading-tight tracking-tight mb-4 uppercase">
                    Giải pháp chăm sóc &amp; vận hành website toàn diện –<br />
                    <span className="text-[#f27830]">Tăng trưởng lượng traffic tự nhiên bền vững</span>
                </h1>

                <div className="bg-[#fff6f0] rounded-3xl p-6 sm:p-10 max-w-4xl mx-auto mt-8 shadow-sm">
                    <p className="text-slate-700 leading-relaxed font-medium text-base sm:text-lg">
                        Một website sinh lời là một website được chăm sóc liên tục. CMIC MEDIA cung cấp giải pháp quản trị website chuyên nghiệp: từ bảo trì kỹ thuật đến cập nhật các thay đổi, nội dung giá trị mỗi ngày, giúp doanh nghiệp khai thác tối đa tiềm năng kênh kỹ thuật số của mình.
                    </p>
                </div>

                <div className="mt-10" id="cta-top">
                    <button className="relative inline-flex items-center gap-2 bg-[#f27830] text-white font-extrabold px-10 py-4 rounded-full transition-transform hover:scale-105 active:scale-95 shadow-lg group">
                        <div className="absolute inset-1.5 border border-dashed border-black/40 rounded-full pointer-events-none"></div>
                        <span className="relative z-10 text-lg uppercase tracking-wide">Đăng ký nhận tư vấn</span>
                        <Phone className="relative z-10 w-5 h-5 fill-current" />
                    </button>
                </div>
            </section>


            {/* ================= SESSION 2: VẤN ĐỀ LÃNG QUÊN ================= */}
            <section 
                ref={probRef}
                className="py-20 bg-slate-50 border-t border-slate-100 overflow-hidden"
            >
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight uppercase">
                            Lý do website của bạn đang bị<br />
                            <span className="text-[#f27830]">khách hàng và Google "lãng quên"</span>
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        {/* Ảnh minh họa bên trái trượt mượt từ trái vào */}
                        <div className={`lg:col-span-5 flex justify-center transition-all duration-1000 ease-out transform ${
                            probRevealed ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
                        }`}>
                            <img 
                                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop" 
                                alt="Website Management Problem" 
                                className="w-full max-w-sm rounded-2xl shadow-xl object-cover aspect-video hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        {/* Danh sách lỗi bên phải trượt mượt từ dưới lên */}
                        <div className={`lg:col-span-7 space-y-6 transition-all duration-1000 ease-out delay-200 transform ${
                            probRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                        }`}>
                            {[
                                "Hàng tháng trời không có bài viết mới khiến Google đánh giá website ngừng hoạt động và hạ thứ hạng tìm kiếm.",
                                "Thông tin về sản phẩm, dịch vụ, bảng giá đã cũ kỹ, không đồng bộ với thực tế kinh doanh làm khách hàng mất lòng tin.",
                                "Hệ thống gặp lỗi hình ảnh bị vỡ, link bị chết (Lỗi 404), banner sự kiện từ năm ngoái vẫn chưa được gỡ xuống.",
                                "Doanh nghiệp không có nhân sự chuyên môn để tối ưu hóa từ khóa SEO giúp tiếp cận khách hàng miễn phí trên Google."
                            ].map((text, idx) => (
                                <div key={idx} className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                                    <XCircle className="w-8 h-8 text-red-500 flex-shrink-0 mt-0.5 fill-red-100" />
                                    <p className="text-slate-700 font-medium text-base leading-relaxed">
                                        {text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* ================= SESSION 3: HỆ GIÁ TRỊ ĐỒNG HÀNH ================= */}
            <section 
                ref={valRef}
                className="py-20 bg-white border-t border-slate-100"
            >
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight uppercase">
                            Hệ giá trị khi đồng hành<br />
                            <span className="text-[#f27830]">chăm sóc website cùng CMIC Media</span>
                        </h2>
                        <p className="text-slate-600 mt-4 font-medium text-base sm:text-lg">
                            Dịch vụ chăm sóc website của chúng tôi giúp tài sản số của bạn luôn ở trong trạng thái đỉnh cao về hiệu suất vận hành:
                        </p>
                    </div>

                    {/* Hiệu ứng trồi lên so le giữa các block thẻ giá trị */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Thẻ 1 */}
                        <div className={`bg-[#f27830] text-white p-8 rounded-3xl shadow-lg transition-all duration-[800ms] ease-out transform hover:-translate-y-2 hover:shadow-xl ${
                            valRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                        }`}>
                            <div className="flex items-start gap-4 mb-6 border-b border-white/30 pb-4">
                                <span className="text-6xl font-black leading-none opacity-90">1</span>
                                <h3 className="text-lg font-bold uppercase tracking-wide pt-1">Bảo trì kỹ thuật và sao lưu dữ liệu</h3>
                            </div>
                            <p className="text-sm sm:text-base leading-relaxed opacity-95 font-medium">
                                Thường xuyên kiểm tra tốc độ tải trang, cập nhật plugin bảo mật, backup dữ liệu định kỳ phòng ngừa mọi rủi ro mất mát thông tin.
                            </p>
                        </div>
                        
                        {/* Thẻ 2 */}
                        <div className={`bg-[#f27830] text-white p-8 rounded-3xl shadow-lg transition-all duration-[800ms] ease-out delay-150 transform hover:-translate-y-2 hover:shadow-xl ${
                            valRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                        }`}>
                            <div className="flex items-start gap-4 mb-6 border-b border-white/30 pb-4">
                                <span className="text-6xl font-black leading-none opacity-90">2</span>
                                <h3 className="text-lg font-bold uppercase tracking-wide pt-1">Tăng trưởng Organic Traffic</h3>
                            </div>
                            <p className="text-sm sm:text-base leading-relaxed opacity-95 font-medium">
                                Thông qua chiến lược SEO bài bản, đưa các từ khóa sản phẩm/dịch vụ của bạn lên trang đầu Google, tiếp cận khách hàng đúng thời điểm họ phát sinh nhu cầu mua sắm.
                            </p>
                        </div>

                        {/* Thẻ 3 */}
                        <div className={`bg-[#f27830] text-white p-8 rounded-3xl shadow-lg transition-all duration-[800ms] ease-out delay-300 transform hover:-translate-y-2 hover:shadow-xl ${
                            valRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                        }`}>
                            <div className="flex items-start gap-4 mb-6 border-b border-white/30 pb-4">
                                <span className="text-6xl font-black leading-none opacity-90">3</span>
                                <h3 className="text-lg font-bold uppercase tracking-wide pt-1">Tối ưu hóa trải nghiệm người dùng liên tục</h3>
                            </div>
                            <p className="text-sm sm:text-base leading-relaxed opacity-95 font-medium">
                                Thay đổi banner, cập nhật pop-up thu lead theo từng chiến dịch kinh doanh của doanh nghiệp để liên tục kích thích chuyển đổi.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* ================= SESSION 4: THỰC THI NHỮNG GÌ? ================= */}
            <section className="py-20 bg-slate-50 border-t border-slate-100 overflow-hidden">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight uppercase">
                            CMIC MEDIA SẼ THỰC THI NHỮNG GÌ?
                        </h2>
                    </div>

                    <div className="space-y-24">
                        
                        {/* --- Hạng Mục 1: Nghiên cứu từ khóa --- */}
                        <div 
                            ref={sec1Ref}
                            className={`transition-all duration-1000 ease-out transform ${
                                sec1Revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                            }`}
                        >
                            <h3 className="text-xl font-bold uppercase mb-4 text-slate-900">Nghiên cứu từ khoá</h3>
                            <div className="bg-[#f27830] text-white p-6 sm:p-8 rounded-3xl shadow-md mb-8 transition-transform duration-300 hover:scale-[1.005]">
                                <p className="text-base font-medium leading-relaxed">
                                    Nghiên cứu từ khóa là bước đặt nền móng cho toàn bộ ngôi nhà SEO. Nếu không có từ khóa, bạn sẽ tốn hàng tháng trời viết bài nhưng không tiếp cận được đến người mua hàng. CMIC MEDIA sử dụng các công cụ phân tích dữ liệu chuyên sâu để tìm ra chính xác những cụm từ khóa có tỷ lệ chuyển đổi cao nhất dành riêng cho ngành hàng của bạn.
                                </p>
                            </div>
                            <div className="grid md:grid-cols-12 gap-8 items-center">
                                <div className="md:col-span-4 flex flex-col items-center text-center">
                                    <h4 className="text-2xl font-extrabold uppercase text-slate-800 mb-4">Chiến lược<br/>chọn từ khoá</h4>
                                    <Search className="w-24 h-24 text-[#f27830] opacity-80 animate-[pulse_3s_infinite]" strokeWidth={1.5} />
                                </div>
                                <div className="md:col-span-8 space-y-6">
                                    <FeatureItem 
                                        title="Phân tích Mục đích Tìm kiếm (Search Intent):"
                                        desc="Chúng tôi phân loại từ khóa thành 4 nhóm rõ rệt: Từ khóa Thông tin (Tìm hiểu), Từ khóa Cân nhắc (So sánh), Từ khóa Địa phương (Local) và đặc biệt là Từ khóa Thương mại/Mua hàng. Tập trung nguồn lực đánh mạnh vào nhóm từ khóa mua hàng để ra chuyển đổi ngay lập tức."
                                    />
                                    <FeatureItem 
                                        title="Tìm kiếm khoảng trống thị trường (Opportunity Gap):"
                                        desc="Khai thác những từ khóa ngách dài, có độ cạnh tranh thấp mà đối thủ của bạn đã bỏ quên, giúp website của bạn lên top nhanh chóng với chi phí tối ưu nhất."
                                    />
                                    <FeatureItem 
                                        title="Xây dựng bộ Mindmap Từ khóa toàn diện:"
                                        desc="Bàn giao bộ tài liệu phân nhánh từ khóa chi tiết theo từng dòng sản phẩm/dịch vụ, làm kim chỉ nam cho hoạt động viết bài dài hạn của doanh nghiệp."
                                    />
                                </div>
                            </div>
                        </div>

                        {/* --- Hạng Mục 2: Viết bài SEO --- */}
                        <div 
                            ref={sec2Ref}
                            className={`transition-all duration-1000 ease-out transform ${
                                sec2Revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                            }`}
                        >
                            <h3 className="text-xl font-bold uppercase mb-4 text-slate-900">Viết bài SEO</h3>
                            <div className="bg-[#f27830] text-white p-6 sm:p-8 rounded-3xl shadow-md mb-8 transition-transform duration-300 hover:scale-[1.005]">
                                <p className="text-base font-medium leading-relaxed">
                                    Một bài viết SEO xuất sắc phải làm hài lòng hai đối tượng: Thuật toán quét của Google và Bộ não đọc của Con người. Đội ngũ Copywriter tại CMIC MEDIA sản xuất những bài viết Long-form có chiều sâu chuyên môn cao, văn phong hiện đại, chuyên nghiệp, giữ chân người đọc lâu hơn và biến họ thành Lead.
                                </p>
                            </div>
                            <div className="grid md:grid-cols-12 gap-8 items-center">
                                <div className="md:col-span-4 flex flex-col items-center text-center md:order-last">
                                    <h4 className="text-2xl font-extrabold uppercase text-slate-800 mb-4">Tiêu chuẩn<br/>bài viết SEO</h4>
                                    <FileText className="w-24 h-24 text-[#f27830] opacity-80 animate-[pulse_3s_infinite]" strokeWidth={1.5} />
                                </div>
                                <div className="md:col-span-8 space-y-6">
                                    <FeatureItem 
                                        title="Chuẩn kỹ thuật SEO Onpage:"
                                        desc="Tối ưu hóa các thẻ Tiêu đề (Title), Mô tả (Meta Description), phân bổ các thẻ Heading (H2, H3, H4) khoa học, chèn từ khóa tự nhiên tuyệt đối, không nhồi nhét khiên cưỡng."
                                    />
                                    <FeatureItem 
                                        title="Nội dung độc bản 100%:"
                                        desc="Cam kết không sao chép, không lạm dụng AI tạo bài viết rác. Mọi bài viết đều có lập luận rõ ràng, số liệu chứng minh và giải quyết triệt để thắc mắc của người tìm kiếm."
                                    />
                                    <FeatureItem 
                                        title="Lồng ghép CTA tinh tế:"
                                        desc="Không bán hàng thô bạo. Bài viết dẫn dắt người đọc từ việc nhận ra vấn đề của bản thân, thấu hiểu giải pháp và cuối cùng là click vào form đăng ký nhận tư vấn một cách hoàn toàn tự nguyện."
                                    />
                                </div>
                            </div>
                        </div>

                        {/* --- Hạng Mục 3: Cập nhật sản phẩm --- */}
                        <div 
                            ref={sec3Ref}
                            className={`transition-all duration-1000 ease-out transform ${
                                sec3Revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                            }`}
                        >
                            <h3 className="text-xl font-bold uppercase mb-4 text-slate-900">Cập nhật sản phẩm, dịch vụ, giá cả</h3>
                            <div className="bg-[#f27830] text-white p-6 sm:p-8 rounded-3xl shadow-md mb-8 transition-transform duration-300 hover:scale-[1.005]">
                                <p className="text-base font-medium leading-relaxed">
                                    Sự nhất quán thông tin là chìa khóa tạo nên trải nghiệm mua sắm số mượt mà. CMIC MEDIA thay doanh nghiệp chịu trách nhiệm quản trị, xây dựng, thiết kế và cập nhật toàn bộ danh mục sản phẩm, thông tin dịch vụ và chính sách giá cả dựa trên mục tiêu kinh doanh của doanh nghiệp để đảm bảo khách hàng luôn tiếp cận thông tin chính xác nhất.
                                </p>
                            </div>
                            <div className="grid md:grid-cols-12 gap-8 items-center">
                                <div className="md:col-span-4 flex flex-col items-center text-center">
                                    <h4 className="text-2xl font-extrabold uppercase text-slate-800 mb-4">Các đầu việc<br/>CMIC Media sẽ đảm nhiệm</h4>
                                    <Sliders className="w-24 h-24 text-[#f27830] opacity-80 animate-[pulse_3s_infinite]" strokeWidth={1.5} />
                                </div>
                                <div className="md:col-span-8 space-y-6">
                                    <FeatureItem 
                                        title="Chuẩn hóa nội dung, hình ảnh mô tả sản phẩm/dịch vụ:"
                                        desc="Thiết kế hình ảnh đồng bộ nhận diện thương hiệu, soạn nội dung mô tả, giới thiệu tính năng, thông số kỹ thuật, lợi ích sản phẩm một cách hấp dẫn, rõ ràng, tối ưu hóa các từ khóa liên quan để hỗ trợ SEO."
                                    />
                                    <FeatureItem 
                                        title="Cập nhật dữ liệu giá cả & Chương trình ưu đãi:"
                                        desc="Cập nhật ngay lập tức các thay đổi về giá, thiết lập các nhãn giảm giá (Tag Sale), cài đặt đồng hồ đếm ngược cho các chiến dịch flash-sale ngắn hạn theo yêu cầu kinh doanh."
                                    />
                                    <FeatureItem 
                                        title="Sắp xếp bố cục danh mục khoa học:"
                                        desc="Phân loại sản phẩm/dịch vụ vào đúng nhóm, cấu hình bộ lọc thông minh (theo giá, theo tính năng) giúp khách hàng tìm thấy thứ họ cần trong vòng 2 cú click chuột."
                                    />
                                </div>
                            </div>
                        </div>

                        {/* --- Hạng Mục 4: Thiết kế Banner, Pop-up --- */}
                        <div 
                            ref={sec4Ref}
                            className={`transition-all duration-1000 ease-out transform ${
                                sec4Revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                            }`}
                        >
                            <h3 className="text-xl font-bold uppercase mb-4 text-slate-900">Thiết kế Banner, Pop-up Website</h3>
                            <div className="bg-[#f27830] text-white p-6 sm:p-8 rounded-3xl shadow-md mb-8 transition-transform duration-300 hover:scale-[1.005]">
                                <p className="text-base font-medium leading-relaxed">
                                    Banner trang chủ và Pop-up là những "thông báo vàng" trên website của bạn. CMIC MEDIA thiết kế các ấn phẩm visual chuyên nghiệp, bắt mắt, mang ngôn ngữ thiết kế hiện đại, xuất hiện đúng lúc nhằm thu hút sự chú ý tối đa của người dùng, phục vụ cho các mục tiêu chuyển đổi chiến dịch.
                                </p>
                            </div>
                            <div className="grid md:grid-cols-12 gap-8 items-center">
                                <div className="md:col-span-4 flex flex-col items-center text-center md:order-last">
                                    <h4 className="text-2xl font-extrabold uppercase text-slate-800 mb-4">Tư duy thiết kế<br/>Visual</h4>
                                    <MonitorPlay className="w-24 h-24 text-[#f27830] opacity-80 animate-[pulse_3s_infinite]" strokeWidth={1.5} />
                                </div>
                                <div className="md:col-span-8 space-y-6">
                                    <FeatureItem 
                                        title="Ưu tiên sản phẩm/dịch vụ cốt lõi:"
                                        desc="Banner trực quan hoá thông tin các sản phẩm, dịch vụ cốt lõi lên vị trí đầu tiên của trang để khách hàng dễ dàng nắm bắt."
                                    />
                                    <FeatureItem 
                                        title="Nhắc thông báo sự kiện & Chương trình ưu đãi:"
                                        desc="Pop-up cập nhật ngay lập tức các thay đổi về giá, thiết lập các nhãn giảm giá (Tag Sale), cài đặt đồng hồ đếm ngược cho các chiến dịch flash-sale ngắn hạn theo yêu cầu kinh doanh."
                                    />
                                    
                                    {/* Nút đăng ký quay lại đầu trang */}
                                    <div className="pt-6 text-right">
                                        <div className="inline-block relative">
                                            <a href="#cta-top" className="relative inline-flex items-center gap-2 bg-[#f27830] text-white font-extrabold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-md">
                                                <div className="absolute inset-1 border border-dashed border-black/40 rounded-full pointer-events-none"></div>
                                                <span className="relative z-10 uppercase text-sm">Đăng ký nhận tư vấn</span>
                                                <Phone className="relative z-10 w-4 h-4 fill-current" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}

// Component phụ trợ hiển thị hàng Tích Xanh mượt mà
function FeatureItem({ title, desc }) {
    return (
        <div className="flex items-start gap-4 transition-transform duration-300 hover:translate-x-1">
            <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5 fill-green-100" />
            <p className="text-slate-700 text-base leading-relaxed">
                <strong className="text-slate-900">{title}</strong> {desc}
            </p>
        </div>
    );
}