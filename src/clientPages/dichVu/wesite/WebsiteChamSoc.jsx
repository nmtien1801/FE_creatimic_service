import React, { useEffect, useRef, useState } from "react";
import { Phone, XCircle, CheckCircle2, Search, FileText, Sliders, MonitorPlay } from "lucide-react";

function useScrollReveal() {
    const [isRevealed, setIsRevealed] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsRevealed(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
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
    const [heroRef, heroRevealed] = useScrollReveal();
    const [probRef, probRevealed] = useScrollReveal();
    const [valRef, valRevealed] = useScrollReveal();
    const [sec1Ref, sec1Revealed] = useScrollReveal();
    const [sec2Ref, sec2Revealed] = useScrollReveal();
    const [sec3Ref, sec3Revealed] = useScrollReveal();
    const [sec4Ref, sec4Revealed] = useScrollReveal();

    return (
        <div className="bg-[#faf8f6] text-neutral-800 min-h-screen antialiased overflow-x-hidden font-sans scroll-smooth">

            {/* ================= SECTION 1: HERO SECTION ================= */}
            <section
                ref={heroRef}
                className={`max-w-6xl mx-auto px-6 pt-20 pb-20 transition-all duration-[1000ms] ease-out transform ${heroRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
            >
                <div className="text-center max-w-4xl mx-auto space-y-6">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 leading-tight tracking-tight uppercase">
                        Giải pháp chăm sóc &amp; vận hành website toàn diện –<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ed792f] to-[#ff8e42]">Tăng trưởng lượng traffic tự nhiên bền vững</span>
                    </h1>

                    <div className="max-w-3xl mx-auto pt-2">
                        <p className="text-neutral-500 leading-relaxed text-sm sm:text-base text-justify sm:text-center font-normal">
                            Một website sinh lời là một website được chăm sóc liên tục. CMIC MEDIA cung cấp giải pháp quản trị website chuyên nghiệp: từ bảo trì kỹ thuật đến cập nhật các thay đổi, nội dung giá trị mỗi ngày, giúp doanh nghiệp khai thác tối đa tiềm năng kênh kỹ thuật số của mình.
                        </p>
                    </div>

                    <div className="pt-4" id="cta-top">
                        <a href="#register-bottom" className="inline-flex items-center bg-[#ed792f] text-white font-semibold text-xs px-8 py-3 rounded-lg hover:bg-neutral-950 transition-all duration-300 shadow-sm uppercase tracking-wider">
                            Đăng ký nhận tư vấn
                        </a>
                    </div>
                </div>
            </section>


            {/* ================= SECTION 2: VẤN ĐỀ LÃNG QUÊN ================= */}
            <section
                ref={probRef}
                className="py-24 bg-white border-y border-neutral-200/40 px-6"
            >
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Cột tiêu đề trái trượt theo */}
                    <div className="space-y-4 lg:sticky lg:top-24 h-fit">
                        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 leading-tight">
                            Lý do website của bạn đang bị khách hàng và Google "lãng quên"
                        </h2>
                        <div className="w-12 h-[2px] bg-[#ed792f]" />
                        <div className="relative w-full aspect-video bg-neutral-100 rounded-xl overflow-hidden border border-neutral-200/60 shadow-sm mb-6">
                            <img
                                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop"
                                alt="Website Management Problem"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Cột nội dung bên phải */}
                    <div className={`space-y-6 transition-all duration-1000 ease-out transform ${probRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        }`}>
                        <div className="divide-y divide-neutral-100">
                            {[
                                "Hàng tháng trời không có bài viết mới khiến Google đánh giá website ngừng hoạt động và hạ thứ hạng tìm kiếm.",
                                "Thông tin về sản phẩm, dịch vụ, bảng giá đã cũ kỹ, không đồng bộ với thực tế kinh doanh làm khách hàng mất lòng tin.",
                                "Hệ thống gặp lỗi hình ảnh bị vỡ, link bị chết (Lỗi 404), banner sự kiện từ năm ngoái vẫn chưa được gỡ xuống.",
                                "Doanh nghiệp không có nhân sự chuyên môn để tối ưu hóa từ khóa SEO giúp tiếp cận khách hàng miễn phí trên Google."
                            ].map((text, idx) => (
                                <div key={idx} className="py-4 first:pt-0 last:pb-0 flex items-start gap-3">
                                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                                    <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed text-justify">
                                        {text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* ================= SECTION 3: HỆ GIÁ TRỊ ĐỒNG HÀNH ================= */}
            <section
                ref={valRef}
                className="py-24 max-w-6xl mx-auto px-6"
            >
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">
                        Hệ giá trị khi đồng hành chăm sóc website cùng CMIC Media
                    </h2>
                    <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed">
                        Dịch vụ chăm sóc website của chúng tôi giúp tài sản số của bạn luôn ở trong trạng thái đỉnh cao về hiệu suất vận hành:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Hạng mục 1 */}
                    <div className={`space-y-4 border-t border-neutral-200/60 pt-6 group transition-all duration-[800ms] ease-out transform ${valRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                        <div className="flex items-baseline gap-2">
                            <span className="text-xs font-mono font-semibold text-neutral-400 group-hover:text-[#ed792f] transition-colors">01 /</span>
                            <h3 className="text-base font-semibold text-neutral-900">Bảo trì kỹ thuật và sao lưu dữ liệu</h3>
                        </div>
                        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-normal text-justify">
                            Thường xuyên kiểm tra tốc độ tải trang, cập nhật plugin bảo mật, backup dữ liệu định kỳ phòng ngừa mọi rủi ro mất mát thông tin.
                        </p>
                    </div>

                    {/* Hạng mục 2 */}
                    <div className={`space-y-4 border-t border-neutral-200/60 pt-6 group transition-all duration-[800ms] ease-out transform ${valRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                        <div className="flex items-baseline gap-2">
                            <span className="text-xs font-mono font-semibold text-neutral-400 group-hover:text-[#ed792f] transition-colors">02 /</span>
                            <h3 className="text-base font-semibold text-neutral-900">Tăng trưởng Organic Traffic</h3>
                        </div>
                        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-normal text-justify">
                            Thông qua chiến lược SEO bài bản, đưa các từ khóa sản phẩm/dịch vụ của bạn lên trang đầu Google, tiếp cận khách hàng đúng thời điểm họ phát sinh nhu cầu mua sắm.
                        </p>
                    </div>

                    {/* Hạng mục 3 */}
                    <div className={`space-y-4 border-t border-neutral-200/60 pt-6 group transition-all duration-[800ms] ease-out transform ${valRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                        <div className="flex items-baseline gap-2">
                            <span className="text-xs font-mono font-semibold text-neutral-400 group-hover:text-[#ed792f] transition-colors">03 /</span>
                            <h3 className="text-base font-semibold text-neutral-900">Tối ưu hóa trải nghiệm người dùng liên tục</h3>
                        </div>
                        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-normal text-justify">
                            Thay đổi banner, cập nhật pop-up thu lead theo từng chiến dịch kinh doanh của doanh nghiệp để liên tục kích thích chuyển đổi.
                        </p>
                    </div>
                </div>
            </section>


            {/* ================= SECTION 4: THỰC THI NHỮNG GÌ? ================= */}
            <section className="py-24 bg-white border-t border-neutral-200/40 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center max-w-xl mx-auto mb-20 space-y-2">
                        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 uppercase">
                            CMIC MEDIA SẼ THỰC THI NHỮNG GÌ?
                        </h2>
                        <div className="w-12 h-[2px] bg-[#ed792f] mx-auto mt-2" />
                    </div>

                    <div className="space-y-24">
                        {/* Hạng Mục 1: Cấu trúc xuôi (Đã sửa items-start và h-fit) */}
                        <div
                            ref={sec1Ref}
                            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-neutral-100 pt-10 transition-all duration-1000 ease-out transform ${sec1Revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                                }`}
                        >
                            <div className="space-y-4 lg:sticky lg:top-24 h-fit">
                                <div className="flex items-center gap-3">
                                    <div className="p-2.5 bg-neutral-50 text-[#ed792f] rounded-lg shrink-0 flex items-center justify-center">
                                        <Search className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-base font-semibold text-neutral-900 uppercase tracking-wide">
                                        Nghiên cứu từ khoá
                                    </h3>
                                </div>
                                <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed text-justify font-normal">
                                    Nghiên cứu từ khóa là bước đặt nền móng cho toàn bộ ngôi nhà SEO. Nếu không có từ khóa, bạn sẽ tốn hàng tháng trời viết bài nhưng không tiếp cận được đến người mua hàng. CMIC MEDIA sử dụng các công cụ phân tích dữ liệu chuyên sâu để tìm ra chính xác những cụm từ khóa có tỷ lệ chuyển đổi cao nhất dành riêng cho ngành hàng của bạn.
                                </p>
                            </div>
                            <div className="space-y-5">
                                <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest border-b pb-2">Chiến lược chọn từ khoá</h4>
                                <FeatureItem title="Phân tích Mục đích Tìm kiếm (Search Intent):" desc="Chúng tôi phân loại từ khóa thành 4 nhóm rõ rệt: Từ khóa Thông tin (Tìm hiểu), Từ khóa Cân nhắc (So sánh), Từ khóa Địa phương (Local) và đặc biệt là Từ khóa Thương mại/Mua hàng. Tập trung nguồn lực đánh mạnh vào nhóm từ khóa mua hàng để ra chuyển đổi ngay lập tức." />
                                <FeatureItem title="Tìm kiếm khoảng trống thị trường (Opportunity Gap):" desc="Khai thác những từ khóa ngách dài, có độ cạnh tranh thấp mà đối thủ của bạn đã bỏ quên, giúp website của bạn lên top nhanh chóng với chi phí tối ưu nhất." />
                                <FeatureItem title="Xây dựng bộ Mindmap Từ khóa toàn diện:" desc="Bàn giao bộ tài liệu phân nhánh từ khóa chi tiết theo từng dòng sản phẩm/dịch vụ, làm kim chỉ nam cho hoạt động viết bài dài hạn của doanh nghiệp." />
                            </div>
                        </div>

                        {/* Hạng Mục 2: Cấu trúc đảo (Đã sửa items-start và h-fit) */}
                        <div
                            ref={sec2Ref}
                            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-neutral-100 pt-10 transition-all duration-1000 ease-out transform ${sec2Revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                                }`}
                        >
                            <div className="space-y-5 lg:order-last lg:sticky lg:top-24 h-fit">
                                <div className="flex items-center gap-3">
                                    <div className="p-2.5 bg-neutral-50 text-[#ed792f] rounded-lg shrink-0 flex items-center justify-center">
                                        <FileText className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-base font-semibold text-neutral-900 uppercase tracking-wide">
                                        Viết bài SEO
                                    </h3>
                                </div>
                                <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed text-justify font-normal">
                                    Một bài viết SEO xuất sắc phải làm hài lòng hai đối tượng: Thuật toán quét của Google và Bộ não đọc của Con người. Đội ngũ Copywriter tại CMIC MEDIA sản xuất những bài viết Long-form có chiều sâu chuyên môn cao, văn phong hiện đại, chuyên nghiệp, giữ chân người đọc lâu hơn và biến họ thành Lead.
                                </p>
                            </div>
                            <div className="space-y-5">
                                <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest border-b pb-2">Tiêu chuẩn bài viết SEO</h4>
                                <FeatureItem title="Chuẩn kỹ thuật SEO Onpage:" desc="Tối ưu hóa các thẻ Tiêu đề (Title), Mô tả (Meta Description), phân bổ các thẻ Heading (H2, H3, H4) khoa học, chèn từ khóa tự nhiên tuyệt đối, không nhồi nhét khiên cưỡng." />
                                <FeatureItem title="Nội dung độc bản 100%:" desc="Cam kết không sao chép, không lạm dụng AI tạo bài viết rác. Mọi bài viết đều có lập luận rõ ràng, số liệu chứng minh và giải quyết triệt để thắc mắc của người tìm kiếm." />
                                <FeatureItem title="Lồng ghép CTA tinh tế:" desc="Không bán hàng thô bạo. Bài viết dẫn dắt người đọc từ việc nhận ra vấn đề của bản thân, thấu hiểu giải pháp và cuối cùng là click vào form đăng ký nhận tư vấn một cách hoàn toàn tự nguyện." />
                            </div>
                        </div>

                        {/* Hạng Mục 3: Cấu trúc xuôi (Đã sửa items-start và h-fit) */}
                        <div
                            ref={sec3Ref}
                            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-neutral-100 pt-10 transition-all duration-1000 ease-out transform ${sec3Revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                                }`}
                        >
                            <div className="space-y-4 lg:sticky lg:top-24 h-fit">
                                <div className="flex items-center gap-3">
                                    <div className="p-2.5 bg-neutral-50 text-[#ed792f] rounded-lg shrink-0 flex items-center justify-center">
                                        <Sliders className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-base font-semibold text-neutral-900 uppercase tracking-wide">
                                        Cập nhật sản phẩm, dịch vụ, giá cả
                                    </h3>
                                </div>
                                <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed text-justify font-normal">
                                    Sự nhất quán thông tin là chìa khóa tạo nên trải nghiệm mua sắm số mượt mà. CMIC MEDIA thay doanh nghiệp chịu trách nhiệm quản trị, xây dựng, thiết kế và cập nhật toàn bộ danh mục sản phẩm, thông tin dịch vụ và chính sách giá cả dựa trên mục tiêu kinh doanh của doanh nghiệp để đảm bảo khách hàng luôn tiếp cận thông tin chính xác nhất.
                                </p>
                            </div>
                            <div className="space-y-5">
                                <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest border-b pb-2">Các đầu việc CMIC Media sẽ đảm nhiệm</h4>
                                <FeatureItem title="Chuẩn hóa nội dung, hình ảnh mô tả sản phẩm/dịch vụ:" desc="Thiết kế hình ảnh đồng bộ nhận diện thương hiệu, soạn nội dung mô tả, giới thiệu tính năng, thông số kỹ thuật, lợi ích sản phẩm một cách hấp dẫn, rõ ràng, tối ưu hóa các từ khóa liên quan để hỗ trợ SEO." />
                                <FeatureItem title="Cập nhật dữ liệu giá cả &amp; Chương trình ưu đãi:" desc="Cập nhật ngay lập tức các thay đổi về giá, thiết lập các nhãn giảm giá (Tag Sale), cài đặt đồng hồ đếm ngược cho các chiến dịch flash-sale ngắn hạn theo yêu cầu kinh doanh." />
                                <FeatureItem title="Sắp xếp bố cục danh mục khoa học:" desc="Phân loại sản phẩm/dịch vụ vào đúng nhóm, cấu hình bộ lọc thông minh (theo giá, theo tính năng) giúp khách hàng tìm thấy thứ họ cần trong vòng 2 cú click chuột." />
                            </div>
                        </div>

                        {/* Hạng Mục 4: Cấu trúc đảo (Đã sửa items-start và h-fit) */}
                        <div
                            ref={sec4Ref}
                            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-neutral-100 pt-10 transition-all duration-1000 ease-out transform ${sec4Revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                                }`}
                        >
                            <div className="space-y-5 lg:order-last lg:sticky lg:top-24 h-fit">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2.5 bg-neutral-50 text-[#ed792f] rounded-lg shrink-0 flex items-center justify-center">
                                            <MonitorPlay className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-base font-semibold text-neutral-900 uppercase tracking-wide">
                                            Thiết kế Banner, Pop-up Website
                                        </h3>
                                    </div>
                                </div>
                                <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed text-justify font-normal">
                                    Banner trang chủ và Pop-up là những "thông báo vàng" trên website của bạn. CMIC MEDIA thiết kế các ấn phẩm visual chuyên nghiệp, bắt mắt, mang ngôn ngữ thiết kế hiện đại, xuất hiện đúng lúc nhằm thu hút sự chú ý tối đa của người dùng, phục vụ cho các mục tiêu chuyển đổi chiến dịch.
                                </p>
                            </div>
                            <div className="space-y-5">
                                <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest border-b pb-2">Tư duy thiết kế Visual</h4>
                                <FeatureItem title="Ưu tiên sản phẩm/dịch vụ cốt lõi:" desc="Banner trực quan hoá thông tin các sản phẩm, dịch vụ cốt lõi lên vị trí đầu tiên của trang để khách hàng dễ dàng nắm bắt." />
                                <FeatureItem title="Nhắc thông báo sự kiện &amp; Chương trình ưu đãi:" desc="Pop-up cập nhật ngay lập tức các thay đổi về giá, thiết lập các nhãn giảm giá (Tag Sale), cài đặt đồng hồ đếm ngược cho các chiến dịch flash-sale ngắn hạn theo yêu cầu kinh doanh." />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function FeatureItem({ title, desc }) {
    return (
        <div className="flex gap-3 items-start group">
            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed text-justify">
                <strong className="text-neutral-900 font-semibold">{title}</strong> {desc}
            </p>
        </div>
    );
}