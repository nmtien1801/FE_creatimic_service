import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, MessageSquare, Search, FileText, CheckCircle2 } from "lucide-react";

export default function QuotationProcessPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 py-12 md:py-16 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto space-y-12">
        
        <header className="space-y-3">
          <h1 className="text-2xl sm:text-4xl font-bold text-[#ed792f] leading-tight">
            QUY TRÌNH TIẾP NHẬN YÊU CẦU VÀ CUNG CẤP BÁO GIÁ
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-4xl">
            Do đặc thù các dịch vụ agency (Marketing tổng thể, Quản trị Fanpage, Chạy quảng cáo Ads, Thiết kế thương hiệu, Sản xuất nội dung...) được thiết kế linh hoạt và tối ưu riêng theo từng mục tiêu, ngân sách của mỗi doanh nghiệp, CMIC MEDIA không áp dụng một mức giá cố định cho mọi khách hàng.
          </p>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-4xl">
            Để đảm bảo tính minh bạch, chúng tôi công khai quy trình tiếp nhận thông tin và cung cấp báo giá dịch vụ cụ thể như sau:
          </p>
        </header>

        <main className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* BƯỚC 1 */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#ed792f]">
                <MessageSquare size={18} />
                <span className="text-xs font-bold uppercase tracking-wider">
                  BƯỚC 1: TIẾP NHẬN BRIEF VÀ THÔNG TIN YÊU CẦU
                </span>
              </div>
              <p className="text-sm text-slate-600 font-normal leading-relaxed">
                Khách hàng gửi yêu cầu tư vấn (Brief) trực tiếp qua Hotline, Email, Zalo hoặc điền vào Form đăng ký nhận tư vấn trên website của CMIC MEDIA.
              </p>
              <p className="text-sm text-slate-600 font-normal leading-relaxed">
                Thông tin tiếp nhận bao gồm: Tên doanh nghiệp, lĩnh vực kinh doanh, dịch vụ cần triển khai và mục tiêu/ngân sách dự kiến (nếu có).
              </p>
            </div>

            {/* BƯỚC 2 */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#ed792f]">
                <Search size={18} />
                <span className="text-xs font-bold uppercase tracking-wider">
                  BƯỚC 2: KHẢO SÁT VÀ TƯ VẤN GIẢI PHÁP
                </span>
              </div>
              <p className="text-sm text-slate-600 font-normal leading-relaxed">
                Đội ngũ chuyên viên của CMIC MEDIA sẽ liên hệ lại với khách hàng trong vòng 24 giờ làm việc để trao đổi sâu hơn về yêu cầu.
              </p>
              <p className="text-sm text-slate-600 font-normal leading-relaxed">
                Chúng tôi tiến hành nghiên cứu thị trường, phân tích đối thủ cạnh tranh và tư vấn gói giải pháp phù hợp nhất với ngân sách của doanh nghiệp.
              </p>
            </div>

            {/* BƯỚC 3 */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#ed792f]">
                <FileText size={18} />
                <span className="text-xs font-bold uppercase tracking-wider">
                  BƯỚC 3: XÂY DỰNG PROPOSAL VÀ GỬI BÁO GIÁ CHI TIẾT
                </span>
              </div>
              <p className="text-sm text-slate-600 font-normal leading-relaxed">
                CMIC MEDIA lập bảng kế hoạch sơ bộ (Proposal) kèm theo bảng báo giá chi tiết cho từng hạng mục công việc (bóc tách rõ ràng chi phí nhân sự, chi phí công cụ, chi phí ngân sách quảng cáo...).
              </p>
              <p className="text-sm text-slate-600 font-normal leading-relaxed">
                Báo giá được gửi chính thức qua Email của khách hàng dưới dạng file PDF có đóng dấu của công ty.
              </p>
            </div>

            {/* BƯỚC 4 */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#ed792f]">
                <CheckCircle2 size={18} />
                <span className="text-xs font-bold uppercase tracking-wider">
                  BƯỚC 4: THỐNG NHẤT VÀ KÝ KẾT HỢP ĐỒNG
                </span>
              </div>
              <p className="text-sm text-slate-600 font-normal leading-relaxed">
                Hai bên cùng thảo luận, điều chỉnh lại các hạng mục và chi phí (nếu có) cho đến khi đạt được sự thống nhất cuối cùng.
              </p>
              <p className="text-sm text-slate-600 font-normal leading-relaxed">
                Chi phí dịch vụ chính thức sẽ được ghi rõ ràng, minh bạch trong Hợp đồng kinh tế và không thay đổi trong suốt quá trình triển khai (trừ trường hợp khách hàng yêu cầu phát sinh hạng mục mới).
              </p>
            </div>

          </div>

          {/* CAM KẾT MINH BẠCH */}
          <div className="p-6 rounded-2xl border-l-4 border-l-[#ed792f] border border-orange-100 bg-orange-50/40 space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-semibold text-base">
              <ShieldCheck className="text-[#ed792f]" size={20} />
              <span>CAM KẾT MINH BẠCH TỪ CMIC MEDIA:</span>
            </div>
            <ul className="space-y-2 text-sm text-slate-700 font-normal">
              <li>Toàn bộ chi phí dịch vụ đều được thông báo trước khi triển khai và có đầy đủ hóa đơn, chứng từ hợp lệ.</li>
              <li>Cam kết không phát sinh bất kỳ chi phí ẩn nào ngoài hợp đồng đã ký kết.</li>
            </ul>
          </div>
        </main>

        <footer className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-slate-900 text-sm">Cần báo giá dự án?</p>
            <p className="text-xs text-slate-500 font-normal">Nhận proposal tùy chỉnh chi tiết trong vòng 24 giờ.</p>
          </div>
          <Link
            to="/lien-he"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#ed792f] hover:underline"
          >
            Gửi yêu cầu tư vấn <ArrowRight size={16} />
          </Link>
        </footer>

      </div>
    </div>
  );
}