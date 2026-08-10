import React, { useRef, useState } from 'react';
import ContactForm from '../../../components/FormContact';

/* =========================================
    SCROLL REVEAL (hiệu ứng xuất hiện khi lăn chuột)
========================================= */
function RevealStyles() {
    return (
        <style>{`
            .reveal-on-scroll {
                opacity: 0;
                transform: translateY(28px);
                transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
                will-change: opacity, transform;
            }
            .reveal-on-scroll.is-visible {
                opacity: 1;
                transform: translateY(0);
            }
            @media (prefers-reduced-motion: reduce) {
                .reveal-on-scroll {
                    opacity: 1;
                    transform: none;
                    transition: none;
                }
            }
        `}</style>
    );
}

function useRevealOnScroll(options = { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    React.useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, options);

        observer.observe(node);
        return () => observer.disconnect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return [ref, isVisible];
}

function Reveal({ children, as: Tag = 'div', delay = 0, className = '', style = {}, ...rest }) {
    const [ref, isVisible] = useRevealOnScroll();
    return (
        <Tag
            ref={ref}
            className={`reveal-on-scroll ${isVisible ? 'is-visible' : ''} ${className}`}
            style={{ ...style, transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
            {...rest}
        >
            {children}
        </Tag>
    );
}

/* =========================================
    SECTION 1: Header Hero (bg1.png)
========================================= */
const HeroHeaderSection = () => {
    return (
        <Reveal
            as="section"
            className="relative w-full py-12 sm:py-20 md:py-28 bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden"
            style={{ backgroundImage: "url('/dichvu.chamSoc/bg1.png')" }}
        >
            {/* Lớp phủ làm tối ảnh nền giúp chữ nổi bật và dễ đọc hơn */}
            <div className="absolute inset-0 bg-black/40 z-0" />

            {/* Khung chứa nội dung - Có max-w để chữ không bị tràn quá rộng */}
            <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 w-full max-w-4xl mx-auto flex flex-col items-center">
                
                {/* Tiêu đề chính */}
                <h1 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white uppercase tracking-wide leading-tight drop-shadow-md mb-2 sm:mb-4">
                    GIẢI PHÁP CHĂM SÓC VÀ VẬN HÀNH WEBSITE TOÀN DIỆN
                </h1>

                {/* Subtitle / Slogan */}
                <p className="text-sm sm:text-lg lg:text-xl text-orange-400 font-semibold drop-shadow-md mb-4 sm:mb-6">
                    Tăng trưởng traffic tự nhiên - bền vững
                </p>

                {/* Đoạn văn mô tả (Đã căn giữa đồng bộ & giới hạn độ rộng) */}
                <p className="text-gray-100 text-xs sm:text-base lg:text-lg leading-relaxed font-normal max-w-2xl text-center">
                    Một website sinh lời là một website được chăm sóc liên tục.{' '}
                    <strong className="text-white font-bold">CMIC MEDIA</strong> cung cấp giải pháp quản trị website chuyên nghiệp: từ bảo trì kỹ thuật đến cập nhật các thay đổi, nội dung giá trị mỗi ngày, giúp doanh nghiệp khai thác tối đa tiềm năng kênh kỹ thuật số của mình.
                </p>

            </div>
        </Reveal>
    );
};

/* =========================================
    SECTION 3: Form Contact
========================================= */
const ContactFormSection = () => {
    return (
        <Reveal as="section" className="w-full py-8 sm:py-12 bg-slate-50 flex justify-center items-center px-3 sm:px-4">
            <div className="w-full max-w-xl mx-auto">
                <ContactForm />
            </div>
        </Reveal>
    );
};

/* =========================================
    SECTION 4: Lý do Website bị lãng quên
========================================= */
const WhyNeglectedSection = () => {
    const reasons = [
        "Hàng tháng trời không có bài viết mới khiến Google đánh giá website ngừng hoạt động và hạ thứ hạng tìm kiếm.",
        "Thông tin về sản phẩm, dịch vụ, bảng giá đã cũ kỹ, không đồng bộ với thực tế kinh doanh làm khách hàng mất lòng tin.",
        "Hệ thống gặp lỗi hình ảnh bị vỡ, link bị chết (Lỗi 404), banner sự kiện từ năm ngoái vẫn chưa được gỡ xuống.",
        "Doanh nghiệp không có nhân sự chuyên môn để tối ưu hóa từ khóa SEO giúp tiếp cận khách hàng miễn phí trên Google."
    ];

    return (
        <Reveal
            as="section"
            className="relative w-full py-10 sm:py-16 text-slate-900 flex justify-center items-center px-3 sm:px-4 bg-cover sm:bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/dichvu.chamSoc/bg4.png')" }}
        >
            <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
                <h2 className="text-base sm:text-2xl md:text-3xl font-extrabold text-center uppercase tracking-tight leading-snug sm:leading-tight mb-6 sm:mb-10">
                    LÝ DO WEBSITE CỦA BẠN <br />
                    ĐANG BỊ <span className="text-[#C96F1E]">KHÁCH HÀNG</span> VÀ{' '}
                    <span className="inline-block font-bold">
                        <span className="text-[#4285F4]">G</span>
                        <span className="text-[#EA4335]">o</span>
                        <span className="text-[#FBBC05]">o</span>
                        <span className="text-[#4285F4]">g</span>
                        <span className="text-[#34A853]">l</span>
                        <span className="text-[#EA4335]">e</span>
                    </span>{' '}
                    <span className="text-[#C96F1E]">LÃNG QUÊN</span>
                </h2>

                <div className="w-full space-y-3 sm:space-y-5 max-w-3xl text-left">
                    {reasons.map((text, index) => (
                        <Reveal key={index} delay={index * 90} className="flex items-start gap-2.5 sm:gap-4">
                            <div className="flex-shrink-0 w-5 h-5 sm:w-7 sm:h-7 rounded-full border-2 border-[#dc2626] flex items-center justify-center mt-0.5">
                                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[#dc2626]" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                            <p className="text-xs sm:text-sm md:text-base font-medium leading-relaxed text-slate-800">
                                {text}
                            </p>
                        </Reveal>
                    ))}
                </div>
            </div>
        </Reveal>
    );
};

/* =========================================
    SECTION 5: Hệ Giá Trị Khi Đồng Hành
========================================= */
const ValueSystemSection = () => {
    const values = [
        {
            title: "Bảo trì kỹ thuật và sao lưu dữ liệu",
            description: "Thường xuyên kiểm tra tốc độ tải trang, cập nhật plugin bảo mật, backup dữ liệu định kỳ phòng ngừa mọi rủi ro mất mát thông tin"
        },
        {
            title: "Tăng trưởng organic traffic",
            description: "Thông qua chiến lược SEO bài bản, đưa các từ khóa sản phẩm/dịch vụ của bạn lên trang đầu Google, tiếp cận khách hàng đúng thời điểm họ phát sinh nhu cầu mua sắm."
        },
        {
            title: "Tối ưu hoá trải nghiệm người dùng thường xuyên",
            description: "Thay đổi banner, cập nhật pop-up thu lead theo từng chiến dịch kinh doanh của doanh nghiệp để liên tục kích thích chuyển đổi."
        }
    ];

    return (
        <Reveal
            as="section"
            className="relative w-full py-10 sm:py-16 text-slate-900 flex justify-center items-center px-3 sm:px-4 overflow-hidden bg-cover sm:bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/dichvu.chamSoc/bg5.png')" }}
        >
            <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
                <div className="text-center mb-6 sm:mb-8">
                    <h2 className="text-base sm:text-2xl md:text-3xl font-extrabold uppercase tracking-tight mb-2">
                        HỆ GIÁ TRỊ KHI ĐỒNG HÀNH
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base text-slate-700 max-w-3xl mx-auto leading-relaxed">
                        Dịch vụ chăm sóc website của chúng tôi giúp tài sản số của bạn luôn ở trong trạng thái đỉnh cao về hiệu suất vận hành.
                    </p>
                </div>

                <div className="relative mb-8 sm:mb-10">
                    <div className="bg-[#e65c00] text-white font-bold text-xs sm:text-lg md:text-xl uppercase tracking-wide py-2 px-5 sm:px-8 rounded-sm shadow-md text-center">
                        CHĂM SÓC WEBSITE TẠI CMIC MEDIA
                    </div>
                    <div className="absolute -bottom-3 -right-3 sm:-right-4 w-5 h-5 sm:w-7 sm:h-7 text-[#1a1a2e] animate-bounce">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-md">
                            <path d="M13.64 21.97C13.14 22.21 12.54 22 12.31 21.5L10.13 16.7L7.1 19.7C6.71 20.09 6.04 19.81 6.04 19.26V4.74C6.04 4.19 6.71 3.91 7.1 4.3L17.7 14.9C18.09 15.29 17.81 15.96 17.26 15.96H13.13L15.31 20.76C15.54 21.26 15.33 21.86 14.83 22.09L13.64 21.97Z" />
                        </svg>
                    </div>
                </div>

                <div className="w-full space-y-4 sm:space-y-6 max-w-3xl text-left">
                    {values.map((item, index) => (
                        <Reveal key={index} delay={index * 90} className="flex items-start gap-2.5 sm:gap-4">
                            <div className="flex-shrink-0 w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-[#00c853] flex items-center justify-center mt-1 shadow-xs">
                                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xs sm:text-base md:text-lg font-bold text-slate-900 mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-[11px] sm:text-xs md:text-sm leading-relaxed text-slate-700">
                                    {item.description}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </Reveal>
    );
};

/* =========================================
    SECTION 6: Chúng Tôi Sẽ Thực Thi Những Gì?
========================================= */
const ImplementationSection = () => {
    const strategyPoints = [
        {
            title: "Phân tích Mục đích Tìm kiếm (Search Intent):",
            description: "Chúng tôi phân loại từ khóa thành 4 nhóm rõ rệt: Từ khóa Thông tin (Tìm hiểu), Từ khóa Cân nhắc (So sánh), Từ khóa Địa phương (Local) và đặc biệt là Từ khóa Thương mại/Mua hàng. Tập trung nguồn lực đánh mạnh vào nhóm từ khóa mua hàng để ra chuyển đổi ngay lập tức."
        },
        {
            title: "Tìm kiếm khoảng trống thị trường (Opportunity Gap):",
            description: "Khai thác những từ khóa ngách dài, có độ cạnh tranh thấp mà đối thủ của bạn đã bỏ quên, giúp website của bạn lên top nhanh chóng với chi phí tối ưu nhất."
        },
        {
            title: "Xây dựng bộ Mindmap Từ khóa toàn diện:",
            description: "Bàn giao bộ tài liệu phân nhánh từ khóa chi tiết theo từng dòng sản phẩm/dịch vụ, làm kim chỉ nam cho hoạt động viết bài dài hạn của doanh nghiệp."
        }
    ];

    return (
        <Reveal as="section" className="w-full py-8 sm:py-12 bg-white text-slate-900 flex justify-center items-center px-3 sm:px-4 overflow-hidden">
            <div className="w-full max-w-4xl mx-auto flex flex-col items-start text-left">

                <h2 className="text-base sm:text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-slate-900 mb-3 sm:mb-4">
                    CHÚNG TÔI SẼ THỰC THI NHỮNG GÌ?
                </h2>

                <div className="bg-[#e65c00] text-white font-bold text-xs sm:text-sm uppercase py-1 px-3.5 sm:px-5 rounded-sm mb-3 sm:mb-4 inline-block">
                    NGHIÊN CỨU TỪ KHÓA
                </div>

                <p className="text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8">
                    Nghiên cứu từ khóa là bước đặt nền móng cho toàn bộ ngôi nhà SEO. Nếu không có từ khóa, bạn sẽ tốn hàng tháng trời viết bài nhưng không tiếp cận được đến người mua hàng. CMIC MEDIA sử dụng các công cụ phân tích dữ liệu chuyên sâu để tìm ra chính xác những cụm từ khóa có tỷ lệ chuyển đổi cao nhất dành riêng cho ngành hàng của bạn.
                </p>

                <div className="w-full grid grid-cols-12 gap-3 sm:gap-6 items-center">
                    <div className="col-span-4 flex flex-col items-center text-center md:text-left">
                        <h3 className="text-xs sm:text-lg md:text-xl font-extrabold uppercase text-slate-900 leading-snug mb-2 sm:mb-4">
                            CHIẾN LƯỢC <br /> CHỌN TỪ KHÓA
                        </h3>

                        <div className="w-16 h-16 sm:w-28 sm:h-28 relative flex items-center justify-center drop-shadow-md">
                            <img
                                src="/dichvu.chamSoc/img1.png"
                                alt="Tiêu chuẩn bài viết SEO"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>

                    <div className="col-span-8 space-y-3 sm:space-y-4">
                        {strategyPoints.map((item, index) => (
                            <Reveal key={index} delay={index * 90} className="flex items-start gap-2 sm:gap-3">
                                <div className="flex-shrink-0 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-[#00c853] flex items-center justify-center mt-0.5 shadow-xs">
                                    <svg className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-slate-800 text-[11px] sm:text-xs md:text-sm leading-relaxed">
                                    <strong className="text-slate-900 font-bold">{item.title}</strong>{' '}
                                    {item.description}
                                </p>
                            </Reveal>
                        ))}
                    </div>
                </div>

            </div>
        </Reveal>
    );
};

/* =========================================
    SECTION 7: Viết Bài SEO
========================================= */
const SeoWritingSection = () => {
    const seoStandards = [
        {
            title: "Chuẩn kỹ thuật SEO Onpage:",
            description: "Tối ưu hóa các thẻ Tiêu đề (Title), Mô tả (Meta Description), phân bổ các thẻ Heading (H2, H3, H4) khoa học, chèn từ khóa tự nhiên tuyệt đối, không nhồi nhét khiên cưỡng."
        },
        {
            title: "Nội dung độc bản 100%:",
            description: "Cam kết không sao chép, không lạm dụng AI tạo bài viết rác. Mọi bài viết đều có lập luận rõ ràng, số liệu chứng minh và giải quyết triệt để thắc mắc của người tìm kiếm."
        },
        {
            title: "Lồng ghép CTA tinh tế:",
            description: "Không bán hàng thô bạo. Bài viết dẫn dắt người đọc từ việc nhận ra vấn đề của bản thân, thấu hiểu giải pháp và cuối cùng là click vào form đăng ký nhận tư vấn một cách hoàn toàn tự nguyện."
        }
    ];

    return (
        <Reveal as="section" className="w-full py-6 sm:py-8 bg-white text-slate-900 flex justify-center items-center px-3 sm:px-4 overflow-hidden">
            <div className="w-full max-w-4xl mx-auto flex flex-col items-start text-left">

                <div className="bg-[#e65c00] text-white font-bold text-xs sm:text-sm uppercase py-1 px-3.5 sm:px-5 rounded-sm mb-3 sm:mb-4 inline-block">
                    VIẾT BÀI SEO
                </div>

                <p className="text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8">
                    Một bài viết SEO xuất sắc phải làm hài lòng hai đối tượng: Thuật toán quét của Google và Bộ não đọc của Con người. Đội ngũ Copywriter tại CMIC MEDIA sản xuất những bài viết Long-form có chiều sâu chuyên môn cao, văn phong hiện đại, chuyên nghiệp, giữ chân người đọc lâu hơn và biến họ thành Lead.
                </p>

                <div className="w-full grid grid-cols-12 gap-3 sm:gap-6 items-center">

                    <div className="col-span-4 flex flex-col items-center text-center md:text-left">
                        <h3 className="text-xs sm:text-lg md:text-xl font-extrabold uppercase text-slate-900 leading-snug mb-2 sm:mb-4">
                            TIÊU CHUẨN <br /> BÀI VIẾT SEO
                        </h3>

                        <div className="w-16 h-16 sm:w-28 sm:h-28 relative flex items-center justify-center drop-shadow-md">
                            <img
                                src="/dichvu.chamSoc/img2.png"
                                alt="Tiêu chuẩn bài viết SEO"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>

                    <div className="col-span-8 space-y-3 sm:space-y-4">
                        {seoStandards.map((item, index) => (
                            <Reveal key={index} delay={index * 90} className="flex items-start gap-2 sm:gap-3">
                                <div className="flex-shrink-0 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-[#00c853] flex items-center justify-center mt-0.5 shadow-xs">
                                    <svg className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-slate-800 text-[11px] sm:text-xs md:text-sm leading-relaxed">
                                    <strong className="text-slate-900 font-bold">{item.title}</strong>{' '}
                                    {item.description}
                                </p>
                            </Reveal>
                        ))}
                    </div>

                </div>

            </div>
        </Reveal>
    );
};

/* =========================================
    SECTION 8: Cập Nhật Sản Phẩm, Dịch Vụ
========================================= */
const ProductUpdateSection = () => {
    const updateTasks = [
        {
            title: "Chuẩn hóa nội dung, hình ảnh mô tả sản phẩm/dịch vụ:",
            description: "Thiết kế hình ảnh đồng bộ nhận diện thương hiệu, soạn nội dung mô tả, giới thiệu tính năng, thông số kỹ thuật, lợi ích sản phẩm một cách hấp dẫn, rõ ràng, tối ưu hóa các từ khóa liên quan để hỗ trợ SEO."
        },
        {
            title: "Cập nhật dữ liệu giá cả & Chương trình ưu đãi:",
            description: "Cập nhật ngay lập tức các thay đổi về giá, thiết lập các nhãn giảm giá (Tag Sale), cài đặt đồng hồ đếm ngược cho các chiến dịch flash-sale ngắn hạn theo yêu cầu kinh doanh."
        },
        {
            title: "Sắp xếp bố cục danh mục khoa học:",
            description: "Phân loại sản phẩm/dịch vụ vào đúng nhóm, cấu hình bộ lọc thông minh (theo giá, theo tính năng) giúp khách hàng tìm thấy thứ họ cần trong vòng 2 cú click chuột."
        }
    ];

    return (
        <Reveal as="section" className="w-full py-6 sm:py-8 bg-white text-slate-900 flex justify-center items-center px-3 sm:px-4 overflow-hidden">
            <div className="w-full max-w-4xl mx-auto flex flex-col items-start text-left">

                <div className="bg-[#e65c00] text-white font-bold text-xs sm:text-sm uppercase py-1 px-3.5 sm:px-5 rounded-sm mb-3 sm:mb-4 inline-block">
                    CẬP NHẬT SẢN PHẨM, DỊCH VỤ, GIÁ CẢ
                </div>

                <p className="text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8">
                    Sự nhất quán thông tin là chìa khóa tạo nên trải nghiệm mua sắm số mượt mà. CMIC MEDIA thay doanh nghiệp chịu trách nhiệm quản trị, xây dựng, thiết kế và cập nhật toàn bộ danh mục sản phẩm, thông tin dịch vụ và chính sách giá cả dựa trên mục tiêu kinh doanh của doanh nghiệp để đảm bảo khách hàng luôn tiếp cận thông tin chính xác nhất.
                </p>

                <div className="w-full grid grid-cols-12 gap-3 sm:gap-6 items-center">

                    <div className="col-span-4 flex flex-col items-center text-center md:text-left">
                        <h3 className="text-xs sm:text-lg md:text-xl font-extrabold uppercase text-slate-900 leading-snug mb-2 sm:mb-4">
                            CÁC ĐẦU VIỆC <br /> CMIC MEDIA ĐẢM NHIỆM
                        </h3>

                        <div className="w-16 h-16 sm:w-28 sm:h-28 relative flex items-center justify-center drop-shadow-md">
                            <img
                                src="/dichvu.chamSoc/img3.png"
                                alt="Cập nhật sản phẩm"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>

                    <div className="col-span-8 space-y-3 sm:space-y-4">
                        {updateTasks.map((item, index) => (
                            <Reveal key={index} delay={index * 90} className="flex items-start gap-2 sm:gap-3">
                                <div className="flex-shrink-0 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-[#00c853] flex items-center justify-center mt-0.5 shadow-xs">
                                    <svg className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-slate-800 text-[11px] sm:text-xs md:text-sm leading-relaxed">
                                    <strong className="text-slate-900 font-bold">{item.title}</strong>{' '}
                                    {item.description}
                                </p>
                            </Reveal>
                        ))}
                    </div>

                </div>

            </div>
        </Reveal>
    );
};

/* =========================================
    SECTION 9: Thiết Kế Banner, Pop-up
========================================= */
const DesignBannerSection = () => {
    const designTasks = [
        {
            title: "Ưu tiên sản phẩm/dịch vụ cốt lõi:",
            description: "Banner trực quan hoá thông tin các sản phẩm, dịch vụ cốt lõi lên vị trí đầu tiên của trang để khách hàng dễ dàng nắm bắt."
        },
        {
            title: "Nhắc thông báo sự kiện & Chương trình ưu đãi:",
            description: "Pop-up cập nhật ngay lập tức các thay đổi về giá, thiết lập các nhãn giảm giá (Tag Sale), cài đặt đồng hồ đếm ngược cho các chiến dịch flash-sale ngắn hạn theo yêu cầu kinh doanh."
        }
    ];

    return (
        <Reveal as="section" className="w-full py-6 sm:py-8 bg-white text-slate-900 flex justify-center items-center px-3 sm:px-4 overflow-hidden">
            <div className="w-full max-w-4xl mx-auto flex flex-col items-start text-left">

                <div className="bg-[#e65c00] text-white font-bold text-xs sm:text-sm uppercase py-1 px-3.5 sm:px-5 rounded-sm mb-3 sm:mb-4 inline-block">
                    THIẾT KẾ BANNER, POP-UP WEBSITE
                </div>

                <p className="text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8">
                    Banner trang chủ và Pop-up là những "thông báo vàng" trên website của bạn. CMIC MEDIA thiết kế các ấn phẩm visual chuyên nghiệp, bắt mắt, mang ngôn ngữ thiết kế hiện đại, xuất hiện đúng lúc nhằm thu hút sự chú ý tối đa của người dùng, phục vụ cho các mục tiêu chuyển đổi chiến dịch.
                </p>

                <div className="w-full grid grid-cols-12 gap-3 sm:gap-6 items-center mb-8 sm:mb-12">

                    <div className="col-span-4 flex flex-col items-center text-center md:text-left">
                        <h3 className="text-xs sm:text-lg md:text-xl font-extrabold uppercase text-slate-900 leading-snug mb-2 sm:mb-4">
                            TƯ DUY THIẾT KẾ
                        </h3>

                        <div className="w-16 h-16 sm:w-28 sm:h-28 relative flex items-center justify-center drop-shadow-md">
                            <img
                                src="/dichvu.chamSoc/img4.png"
                                alt="Tư duy thiết kế"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>

                    <div className="col-span-8 space-y-3 sm:space-y-4">
                        {designTasks.map((item, index) => (
                            <Reveal key={index} delay={index * 90} className="flex items-start gap-2 sm:gap-3">
                                <div className="flex-shrink-0 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-[#00c853] flex items-center justify-center mt-0.5 shadow-xs">
                                    <svg className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-slate-800 text-[11px] sm:text-xs md:text-sm leading-relaxed">
                                    <strong className="text-slate-900 font-bold">{item.title}</strong>{' '}
                                    {item.description}
                                </p>
                            </Reveal>
                        ))}
                    </div>
                </div>

                {/* NÚT ĐĂNG KÝ TƯ VẤN Ở CUỐI */}
                <div className="w-full flex justify-center mt-6 sm:mt-10 mb-6">
                    <button className="flex items-center justify-center gap-1.5 sm:gap-2 bg-[#f97316] hover:bg-[#ea580c] text-black font-bold text-xs sm:text-base md:text-lg uppercase py-2.5 px-6 sm:py-3.5 sm:px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap">
                        <span>ĐĂNG KÝ NHẬN TƯ VẤN</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2a9 9 0 0 0-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z" />
                        </svg>
                    </button>
                </div>

            </div>
        </Reveal>
    );
};

/* =========================================
    MAIN COMPONENT
========================================= */
const ServiceCareWebsite = () => {
    return (
        <div className="w-full overflow-hidden font-sans">
            <RevealStyles />
            <HeroHeaderSection />
            <ContactFormSection />
            <WhyNeglectedSection />
            <ValueSystemSection />
            <ImplementationSection />
            <SeoWritingSection />
            <ProductUpdateSection />
            <DesignBannerSection />
        </div>
    );
};

export default ServiceCareWebsite;