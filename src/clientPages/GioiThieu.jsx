import React from 'react';
import ContactForm from '../components/FormContact';

const bgImageUrl = "https://web.hn.ss.bfcplatform.vn/muadienmay/content/article2/3087889034-1620532650.jpg";
const bgSession3 = "/gioiThieu/bgSs3.png";
const bgSession4 = "/gioiThieu/bgSs4.png";

// ========================================================
// SESSION 1: BANNER VỀ CHÚNG TÔI
// ========================================================
function BannerSection() {
  return (
    <section className="relative w-full overflow-hidden min-h-[400px] md:min-h-[480px] py-28 md:py-36 px-4 md:px-8 bg-gray-950 flex flex-col items-center justify-center text-center">
      <img
        src={bgImageUrl}
        alt="About Banner Background"
        className="absolute inset-0 w-full h-full object-cover blur-sm scale-105 opacity-40 pointer-events-none z-0"
      />
      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="relative z-20 space-y-4 max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-wide uppercase drop-shadow-md">
          VỀ CHÚNG TÔI
        </h1>
        <p className="text-xs md:text-sm font-medium text-gray-200 tracking-wider uppercase inline-block">
          Câu chuyện thương hiệu - Tầm nhìn - Sứ mệnh - Giá trị cốt lõi
        </p>
      </div>
    </section>
  );
}

// ========================================================
// SESSION 2: CÂU CHUYỆN THƯƠNG HIỆU - TẦM NHÌN - SỨ MỆNH
// ========================================================
function AboutStorySection() {
  return (
    <section className="relative w-full overflow-hidden py-10 md:py-14 px-10 md:px-30 bg-white">
      <img
        src={bgImageUrl}
        alt="Background Blur"
        className="absolute inset-0 w-full h-full object-cover blur-2xl scale-105 opacity-10 pointer-events-none z-0"
      />
      <div className="absolute inset-0 opacity-20 pointer-events-none z-10 flex items-center justify-center">
        <svg className="w-full h-full" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 300 C 200 150, 400 450, 900 150 M-100 330 C 200 180, 400 480, 900 180" stroke="#E86A24" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="relative z-20 w-full mx-auto space-y-12 px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 flex justify-center relative w-full mx-auto aspect-square max-w-sm">
            <div className="w-[82%] h-[82%] rounded-3xl overflow-hidden shadow-xl border-4 border-white absolute top-0 left-0">
              <img src="/gioiThieu/img1ss2.png" alt="Teamwork" className="w-full h-full object-cover" />
            </div>
            <div className="w-[58%] h-[52%] rounded-2xl overflow-hidden shadow-2xl border-4 border-indigo-950 absolute bottom-0 right-0 z-20">
              <img src="/gioiThieu/img2ss2.png" alt="Puzzle Pieces" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col space-y-3.5 text-left">
            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-gray-950">
              CÂU CHUYỆN <span className="text-orange-600">THƯƠNG HIỆU</span>
            </h2>
            <div className="space-y-3.5 text-sm md:text-base text-gray-700 font-normal leading-relaxed">
              <p>
                Hành trình khởi nghiệp của các SME và cá nhân kinh doanh tại Việt Nam chưa bao giờ là dễ dàng. Giữa làn sóng chuyển đổi số bùng nổ, nhiều doanh nghiệp lúng túng rơi vào cái bẫy mang tên "Marketing ngắn hạn": đốt quá nhiều chi phí cho quảng cáo nhưng không đọng lại giá trị cốt lõi, hay vận hành một bộ máy cồng kềnh nhưng thiếu hiệu quả thực tế.
              </p>
              <p>
                Thấu hiểu sâu sắc nỗi đau đó, CMIC MEDIA ra đời. Chúng tôi chọn đồng hành cùng các Startup & SME với một tư duy khác biệt: <span className="text-gray-950 font-bold italic">Marketing không phải là một khoản chi phí xa xỉ, mà là quá trình xây dựng Tài sản số bền vững.</span>
              </p>
              <p>
                Chúng tôi không hứa hẹn những con số ảo hay vẽ ra những hạng mục "đủ bộ" nhưng vô thưởng vô phạt. Tại CMIC MEDIA, mọi giải pháp – từ xây dựng website tối ưu, vận hành hệ sinh thái nội dung đa kênh, đến thiết kế các phễu chuyển đổi – đều được thiết kế theo triết lý:
              </p>
              <p className="font-bold text-gray-950 italic pt-2 border-t border-gray-200">
                Tinh gọn - Hệ thống hóa - Tập trung vào hiệu quả thực tế.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 flex flex-col space-y-5 text-left">
            <div className="space-y-3 text-sm md:text-base text-gray-700 font-normal leading-relaxed">
              <p>
                Chúng tôi không chỉ làm dịch vụ, chúng tôi hòa mình làm một phần đội ngũ nội bộ của khách hàng, cùng trăn trở, cùng tối ưu và cùng tăng trưởng.
              </p>
              <p>
                Không dừng lại ở một Marketing Agency, tầm nhìn của CMIC MEDIA là một hành trình dài hạn. Từ việc tối ưu hóa vận hành hiện tại, chúng tôi đang từng bước hướng tới việc phát triển nền tảng học tập SaaS và các công cụ công nghệ (Tech dev) tự động hóa trong tương lai, nhằm giải phóng nguồn lực và nâng cao năng suất cho doanh nghiệp.
              </p>
              <p>
                CMIC MEDIA ở đây để chứng minh rằng:
              </p>
              <p className="font-semibold text-gray-950">
                Ngay cả với một ngân sách tối ưu và một đội ngũ tinh gọn, doanh nghiệp của bạn vẫn hoàn toàn có thể sở hữu một bệ phóng bài bản và vững chắc trên không gian số.
              </p>
            </div>

            <div className="space-y-1.5 pt-1 mt-12">
              <h3 className="text-lg md:text-xl font-bold uppercase tracking-wide text-gray-950">
                TẦM NHÌN
              </h3>
              <div className="p-4 md:p-5 bg-gradient-to-r from-orange-500/10 via-orange-100/30 to-white rounded-xl border-l-4 border-orange-500 shadow-sm">
                <p className="text-sm md:text-base text-gray-800 font-normal leading-relaxed">
                  Trở thành cố vấn và đối tác marketing đáng tin cậy cho SME và Cá nhân kinh doanh tại Việt Nam, giúp họ xây dựng hệ thống tài sản số bài bản, bền vững và tạo ra kết quả kinh doanh thực tế mà không cần tốn quá nhiều chi phí vận hành.
                </p>
              </div>
            </div>

            <div className="space-y-1.5 pt-1">
              <div className="flex justify-end">
                <h3 className="text-lg md:text-xl font-bold uppercase tracking-wide text-gray-950">
                  SỨ MỆNH
                </h3>
              </div>
              <div className="p-4 md:p-5 bg-gradient-to-l from-orange-500/10 via-orange-100/30 to-white rounded-xl border-r-4 border-orange-500 shadow-sm">
                <p className="text-sm md:text-base text-gray-800 font-normal leading-relaxed">
                  Chúng tôi tồn tại để đồng hành cùng doanh nghiệp trong việc xây dựng chiến lược và hệ thống digital marketing bài bản, dễ vận hành và phục vụ trực tiếp cho mục tiêu kinh doanh. Thông qua việc phát triển các tài sản số cốt lõi, chúng tôi giúp khách hàng triển khai linh hoạt và tiết kiệm chi phí, đồng thời từng bước hình thành nền tảng tăng trưởng bền vững thay vì phụ thuộc vào những giải pháp ngắn hạn hoặc tốn nhiều nguồn lực nhưng không tạo ra giá trị lâu dài.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end relative self-stretch items-start pt-2">
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-xl border-4 border-white z-20">
              <img
                src={bgImageUrl}
                alt="CMIC Leader Profile"
                className="w-full h-full min-h-[500px] max-h-[650px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ========================================================
// SESSION 3: GIÁ TRỊ CỐT LÕI
// ========================================================
function CoreValuesSection({ coreValues }) {
  return (
    <section className="relative w-full overflow-hidden py-10 md:py-14 bg-gray-50 flex justify-center">
      <div
        className="absolute top-0 bottom-0 w-screen left-1/2 -translate-x-1/2 pointer-events-none z-0 scale-x-110"
        style={{
          backgroundImage: `url(${bgSession3})`,
          backgroundPosition: 'center center',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className="relative z-20 w-full max-w-4xl mx-auto px-4 md:px-8 flex flex-col space-y-8 items-center">
        <div className="w-full max-w-xs mx-auto flex items-center bg-gray-950 text-white rounded-full pr-5 pl-1.5 py-1 shadow-md border border-gray-800">
          <div className="w-8 h-8 rounded-full bg-orange-500 flex-shrink-0 flex items-center justify-center font-bold text-sm shadow-inner">★</div>
          <h2 className="text-base md:text-lg font-bold uppercase tracking-wider pl-3 text-center flex-1">
            GIÁ TRỊ CỐT LÕI
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-1 w-full">
          {coreValues.map((val, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 flex flex-col text-left transition-all duration-300 hover:shadow-md"
            >
              <div className="bg-orange-500 text-white text-center py-2 font-bold text-sm md:text-base tracking-wide uppercase">
                {val.title}
              </div>
              <div className="p-4 md:p-5 bg-white flex-1 flex items-center">
                <p className="text-gray-700 text-xs md:text-sm leading-relaxed font-normal">
                  {val.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ========================================================
// SESSION 4: SECTION CHỨA FORM LIÊN HỆ
// ========================================================
function ContactSection() {
  return (
    <section className="relative w-full overflow-hidden py-10 md:py-14 px-4 md:px-8 bg-white flex justify-center">
      <div
        className="absolute top-0 bottom-0 w-screen left-1/2 -translate-x-1/2 pointer-events-none z-0 scale-x-110"
        style={{
          backgroundImage: `url(${bgSession4})`,
          backgroundPosition: 'center center',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className="relative z-20 w-full max-w-lg mx-auto">
        <ContactForm />
      </div>
    </section>
  );
}

// ========================================================
// COMPONENT CHÍNH ABOUT PAGE
// ========================================================
export default function AboutPage() {
  const coreValues = [
    {
      title: "HIỆU QUẢ",
      desc: "Chúng tôi tập trung giải quyết đúng vấn đề kinh doanh của khách hàng, không hứa hẹn quá đà và không triển khai những hạng mục chỉ để \"đủ bộ\" nhưng không mang lại giá trị thực."
    },
    {
      title: "HỆ THỐNG",
      desc: "Mọi hoạt động marketing đều được triển khai theo các bước rõ ràng, có quy trình cụ thể và tập trung xây dựng những nền tảng online có thể sử dụng lâu dài, giúp khách hàng tiết kiệm công sức và chi phí về sau."
    },
    {
      title: "ĐỒNG HÀNH",
      desc: "Chúng tôi làm việc như một phần của đội ngũ nội bộ, cùng khách hàng hiểu vấn đề, điều chỉnh chiến lược và tối ưu liên tục trong quá trình vận hành."
    },
    {
      title: "TINH GỌN",
      desc: "Đội ngũ được tổ chức tinh gọn, làm việc online và linh hoạt theo từng giai đoạn phát triển của doanh nghiệp, nhằm tối ưu chi phí, thời gian và hiệu quả cho cả hai phía."
    }
  ];

  return (
    <div className="w-full bg-white font-sans antialiased text-gray-900 selection:bg-orange-500 selection:text-white">
      <BannerSection />
      <AboutStorySection />
      <CoreValuesSection coreValues={coreValues} />
      <ContactSection />
    </div>
  );
}