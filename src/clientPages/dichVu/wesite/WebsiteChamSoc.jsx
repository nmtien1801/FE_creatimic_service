import React from 'react';
import ContactForm from '../../../components/FormContact';

/* =========================================
    SECTION 1: Header Hero (bg1.png)
========================================= */
const HeroHeaderSection = () => {
    return (
        <section
            className="relative w-full aspect-[21/9] min-h-[400px] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center"
            style={{ backgroundImage: "url('/dichvu.chamSoc/bg1.png')" }}
        >
            <div className="text-center px-4 w-full">
                <h1 className="text-xl md:text-3xl lg:text-4xl font-extrabold text-white uppercase tracking-wide leading-tight drop-shadow-md mb-2 md:mb-4">
                    GIẢI PHÁP CHĂM SÓC VÀ VẬN HÀNH <br className="hidden md:block" /> WEBSITE TOÀN DIỆN
                </h1>
                <p className="text-sm md:text-lg lg:text-xl text-white font-medium drop-shadow-md">
                    Tăng trưởng traffic tự nhiên - bền vững
                </p>
            </div>
        </section>
    );
};

/* =========================================
    SECTION 2: Description & Button (bg2.png)
========================================= */
const HeroDescriptionSection = () => {
    return (
        <section
            className="relative w-full aspect-video min-h-[600px] bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/dichvu.chamSoc/bg2.png')" }}
        >
            <div className="absolute top-[25%] md:top-[30%] left-[8%] md:left-[10%] w-[84%] md:w-[40%] pr-2 md:pr-8">
                <p className="text-white text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed font-medium">
                    Một website sinh lời là một website được chăm sóc liên tục.{' '}
                    <strong className="text-white font-bold">CMIC MEDIA</strong> cung cấp giải pháp quản trị website chuyên nghiệp: từ bảo trì kỹ thuật đến cập nhật các thay đổi, nội dung giá trị mỗi ngày, giúp doanh nghiệp khai thác tối đa tiềm năng kênh kỹ thuật số của mình.
                </p>
            </div>

            <div className="absolute bottom-[8%] md:bottom-[10%] left-1/2 -translate-x-1/2">
                <button className="flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-black font-bold text-sm md:text-base lg:text-lg uppercase py-3 px-6 md:px-8 rounded-full transition-all duration-300 shadow-xl">
                    Đăng ký nhận tư vấn
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2a9 9 0 0 0-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z" />
                    </svg>
                </button>
            </div>
        </section>
    );
};

/* =========================================
    SECTION 3: Form Contact
========================================= */
const ContactFormSection = () => {
    return (
        <section className="w-full py-12 md:py-16 bg-slate-50 flex justify-center items-center px-4">
            <div className="w-full max-w-2xl mx-auto">
                <ContactForm />
            </div>
        </section>
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
        <section 
            className="relative w-full py-16 text-slate-900 flex justify-center items-center px-4 bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/dichvu.chamSoc/bg4.png')" }}
        >
            <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
                <h2 className="text-xl md:text-3xl lg:text-4xl font-extrabold text-center uppercase tracking-tight leading-tight mb-10 md:mb-12">
                    LÝ DO WEBSITE CỦA BẠN <br />
                    ĐANG BỊ <span className="text-[#f97316]">KHÁCH HÀNG</span> VÀ{' '}
                    <span className="inline-block font-bold">
                        <span className="text-[#4285F4]">G</span>
                        <span className="text-[#EA4335]">o</span>
                        <span className="text-[#FBBC05]">o</span>
                        <span className="text-[#4285F4]">g</span>
                        <span className="text-[#34A853]">l</span>
                        <span className="text-[#EA4335]">e</span>
                    </span>{' '}
                    <span className="text-[#f97316]">LÃNG QUÊN</span>
                </h2>

                <div className="w-full space-y-5 md:space-y-6 max-w-3xl">
                    {reasons.map((text, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-[#dc2626] flex items-center justify-center mt-0.5">
                                <svg className="w-4 h-4 text-[#dc2626]" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                            <p className="text-sm md:text-base lg:text-lg font-medium leading-relaxed text-slate-800">
                                {text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
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
        <section 
            className="relative w-full py-16 text-slate-900 flex justify-center items-center px-4 overflow-hidden bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/dichvu.chamSoc/bg5.png')" }}
        >
            <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight mb-3">
                        HỆ GIÁ TRỊ KHI ĐỒNG HÀNH
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
                        Dịch vụ chăm sóc website của chúng tôi giúp tài sản số của bạn luôn ở trong trạng thái đỉnh cao về hiệu suất vận hành.
                    </p>
                </div>

                <div className="relative mb-12">
                    <div className="bg-[#e65c00] text-white font-bold text-lg md:text-2xl uppercase tracking-wide py-2.5 px-8 md:px-10 rounded-sm shadow-md text-center">
                        CHĂM SÓC WEBSITE TẠI CMIC MEDIA
                    </div>
                    <div className="absolute -bottom-4 -right-4 md:-right-5 w-7 h-7 md:w-8 md:h-8 text-[#1a1a2e] animate-bounce">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-md">
                            <path d="M13.64 21.97C13.14 22.21 12.54 22 12.31 21.5L10.13 16.7L7.1 19.7C6.71 20.09 6.04 19.81 6.04 19.26V4.74C6.04 4.19 6.71 3.91 7.1 4.3L17.7 14.9C18.09 15.29 17.81 15.96 17.26 15.96H13.13L15.31 20.76C15.54 21.26 15.33 21.86 14.83 22.09L13.64 21.97Z" />
                        </svg>
                    </div>
                </div>

                <div className="w-full space-y-6 md:space-y-8 max-w-3xl">
                    {values.map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#00c853] flex items-center justify-center mt-1 shadow-sm">
                                <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-base md:text-lg lg:text-xl font-bold text-slate-900 mb-1.5">
                                    {item.title}
                                </h3>
                                <p className="text-sm md:text-base leading-relaxed text-slate-700">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
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
        <section className="w-full py-16 bg-white text-slate-900 flex justify-center items-center px-4 overflow-hidden">
            <div className="w-full max-w-4xl mx-auto flex flex-col items-start">

                <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight text-slate-900 mb-6">
                    CHÚNG TÔI SẼ THỰC THI NHỮNG GÌ?
                </h2>

                <div className="bg-[#e65c00] text-white font-bold text-sm md:text-base uppercase py-1.5 px-5 rounded-sm mb-5 inline-block">
                    NGHIÊN CỨU TỪ KHÓA
                </div>

                <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-10">
                    Nghiên cứu từ khóa là bước đặt nền móng cho toàn bộ ngôi nhà SEO. Nếu không có từ khóa, bạn sẽ tốn hàng tháng trời viết bài nhưng không tiếp cận được đến người mua hàng. CMIC MEDIA sử dụng các công cụ phân tích dữ liệu chuyên sâu để tìm ra chính xác những cụm từ khóa có tỷ lệ chuyển đổi cao nhất dành riêng cho ngành hàng của bạn.
                </p>

                <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
                        <h3 className="text-xl md:text-2xl font-extrabold uppercase text-slate-900 leading-snug mb-5">
                            CHIẾN LƯỢC <br /> CHỌN TỪ KHÓA
                        </h3>

                        <div className="w-24 h-24 md:w-32 md:h-32 relative flex items-center justify-center drop-shadow-xl">
                            <img
                                src="/dichvu.chamSoc/img1.png"
                                alt="Tiêu chuẩn bài viết SEO"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>

                    <div className="md:col-span-8 space-y-5 md:space-y-6">
                        {strategyPoints.map((item, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#00c853] flex items-center justify-center mt-1 shadow-sm">
                                    <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-slate-800 text-sm md:text-base leading-relaxed">
                                    <strong className="text-slate-900 font-bold">{item.title}</strong>{' '}
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
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
        <section className="w-full py-8 bg-white text-slate-900 flex justify-center items-center px-4 overflow-hidden">
            <div className="w-full max-w-4xl mx-auto flex flex-col items-start">

                <div className="bg-[#e65c00] text-white font-bold text-sm md:text-base uppercase py-1.5 px-5 rounded-sm mb-5 inline-block">
                    VIẾT BÀI SEO
                </div>

                <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-10">
                    Một bài viết SEO xuất sắc phải làm hài lòng hai đối tượng: Thuật toán quét của Google và Bộ não đọc của Con người. Đội ngũ Copywriter tại CMIC MEDIA sản xuất những bài viết Long-form có chiều sâu chuyên môn cao, văn phong hiện đại, chuyên nghiệp, giữ chân người đọc lâu hơn và biến họ thành Lead.
                </p>

                <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-center">

                    <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
                        <h3 className="text-xl md:text-2xl font-extrabold uppercase text-slate-900 leading-snug mb-5">
                            TIÊU CHUẨN <br /> BÀI VIẾT SEO
                        </h3>

                        <div className="w-24 h-24 md:w-32 md:h-32 relative flex items-center justify-center drop-shadow-xl">
                            <img
                                src="/dichvu.chamSoc/img2.png"
                                alt="Tiêu chuẩn bài viết SEO"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>

                    <div className="md:col-span-8 space-y-5 md:space-y-6">
                        {seoStandards.map((item, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#00c853] flex items-center justify-center mt-1 shadow-sm">
                                    <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-slate-800 text-sm md:text-base leading-relaxed">
                                    <strong className="text-slate-900 font-bold">{item.title}</strong>{' '}
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
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
        <section className="w-full py-8 bg-white text-slate-900 flex justify-center items-center px-4 overflow-hidden">
            <div className="w-full max-w-4xl mx-auto flex flex-col items-start">

                <div className="bg-[#e65c00] text-white font-bold text-sm md:text-base uppercase py-1.5 px-5 rounded-sm mb-5 inline-block">
                    CẬP NHẬT SẢN PHẨM, DỊCH VỤ, GIÁ CẢ
                </div>

                <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-10">
                    Sự nhất quán thông tin là chìa khóa tạo nên trải nghiệm mua sắm số mượt mà. CMIC MEDIA thay doanh nghiệp chịu trách nhiệm quản trị, xây dựng, thiết kế và cập nhật toàn bộ danh mục sản phẩm, thông tin dịch vụ và chính sách giá cả dựa trên mục tiêu kinh doanh của doanh nghiệp để đảm bảo khách hàng luôn tiếp cận thông tin chính xác nhất.
                </p>

                <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-center">

                    <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
                        <h3 className="text-xl md:text-2xl font-extrabold uppercase text-slate-900 leading-snug mb-5">
                            CÁC ĐẦU VIỆC <br /> CMIC MEDIA SẼ ĐẢM NHIỆM
                        </h3>

                        <div className="w-24 h-24 md:w-32 md:h-32 relative flex items-center justify-center drop-shadow-xl">
                            <img
                                src="/dichvu.chamSoc/img3.png"
                                alt="Tiêu chuẩn bài viết SEO"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>

                    <div className="md:col-span-8 space-y-5 md:space-y-6">
                        {updateTasks.map((item, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#00c853] flex items-center justify-center mt-1 shadow-sm">
                                    <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-slate-800 text-sm md:text-base leading-relaxed">
                                    <strong className="text-slate-900 font-bold">{item.title}</strong>{' '}
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
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
        <section className="w-full py-8 bg-white text-slate-900 flex justify-center items-center px-4 overflow-hidden">
            <div className="w-full max-w-4xl mx-auto flex flex-col items-center md:items-start">

                <div className="bg-[#e65c00] text-white font-bold text-sm md:text-base uppercase py-1.5 px-5 rounded-sm mb-5 inline-block">
                    THIẾT KẾ BANNER, POP-UP WEBSITE
                </div>

                <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-10">
                    Banner trang chủ và Pop-up là những "thông báo vàng" trên website của bạn. CMIC MEDIA thiết kế các ấn phẩm visual chuyên nghiệp, bắt mắt, mang ngôn ngữ thiết kế hiện đại, xuất hiện đúng lúc nhằm thu hút sự chú ý tối đa của người dùng, phục vụ cho các mục tiêu chuyển đổi chiến dịch.
                </p>

                <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-14">

                    <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
                        <h3 className="text-xl md:text-2xl font-extrabold uppercase text-slate-900 leading-snug mb-5">
                            TƯ DUY THIẾT KẾ
                        </h3>

                        <div className="w-24 h-24 md:w-32 md:h-32 relative flex items-center justify-center drop-shadow-xl">
                            <img
                                src="/dichvu.chamSoc/img4.png"
                                alt="Tiêu chuẩn bài viết SEO"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>

                    <div className="md:col-span-8 space-y-5 md:space-y-6">
                        {designTasks.map((item, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#00c853] flex items-center justify-center mt-1 shadow-sm">
                                    <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-slate-800 text-sm md:text-base leading-relaxed">
                                    <strong className="text-slate-900 font-bold">{item.title}</strong>{' '}
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* NÚT ĐĂNG KÝ TƯ VẤN Ở CUỐI */}
                <div className="w-full flex justify-center mt-16 mb-8">
                    <button className="flex items-center justify-center gap-2 md:gap-3 bg-[#f97316] hover:bg-[#ea580c] text-black font-bold text-base md:text-xl uppercase py-3 px-8 md:py-4 md:px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                        ĐĂNG KÝ NHẬN TƯ VẤN
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-7 md:w-7" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2a9 9 0 0 0-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z" />
                        </svg>
                    </button>
                </div>

            </div>
        </section>
    );
};

/* =========================================
    MAIN COMPONENT (Gộp và Render toàn bộ Trang)
========================================= */
const ServiceCareWebsite = () => {
    return (
        <div className="w-full overflow-hidden font-sans">
            <HeroHeaderSection />
            <HeroDescriptionSection />
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