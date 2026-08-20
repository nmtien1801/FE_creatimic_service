import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, AlertCircle, ArrowRightCircle } from "lucide-react";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 py-12 md:py-16 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto space-y-12">
        
        <header className="space-y-3">
          <h1 className="text-2xl sm:text-4xl font-bold leading-tight text-[#ed792f]">
            ĐIỀU KIỆN GIAO DỊCH CHUNG
          </h1>
        </header>

        <main className="space-y-8">
          <section className="space-y-2">
            <h2 className="text-base font-semibold text-slate-900">Đối tượng áp dụng:</h2>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Tất cả các cá nhân, tổ chức, doanh nghiệp sử dụng dịch vụ tư vấn, thực hiện chiến dịch truyền thông, marketing và các dịch vụ agency khác do CMIC MEDIA cung cấp.
            </p>
          </section>

          <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2.5">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-900 flex items-center gap-2">
              <ArrowRightCircle size={17} className="text-[#ed792f]" /> Quy trình giao dịch:
            </h2>
            <p className="text-sm text-slate-700 font-normal">
              Khách hàng gửi yêu cầu (Brief) -&gt; CMIC MEDIA tư vấn và gửi báo giá -&gt; Hai bên thống nhất, ký kết Hợp đồng dịch vụ -&gt; CMIC MEDIA triển khai và bàn giao.
            </p>
          </div>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-slate-900">Trách nhiệm của khách hàng:</h2>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Cung cấp đầy đủ, chính xác thông tin, hình ảnh, tài liệu gốc và chịu trách nhiệm về tính pháp lý của các nội dung do mình cung cấp.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-slate-900">Trách nhiệm của CMIC MEDIA:</h2>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Thực hiện dịch vụ theo đúng tiến độ, chất lượng cam kết trong Hợp đồng; Bảo mật thông tin dự án của khách hàng.
            </p>
          </section>

          <div className="p-5 rounded-xl border border-amber-200/80 bg-amber-50/40 space-y-2">
            <h2 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
              <AlertCircle size={18} className="text-amber-600" /> Chính sách hoàn trả/hủy dịch vụ:
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed font-normal">
              Do tính chất đặc thù của dịch vụ agency, các chi phí đã triển khai theo đúng tiến độ và được nghiệm thu sẽ không được hoàn lại. Việc chấm dứt hợp đồng trước thời hạn sẽ được thực hiện theo các điều khoản phạt vi phạm đã thỏa thuận cụ thể trong Hợp đồng dịch vụ giữa hai bên.
            </p>
          </div>
        </main>

        <footer className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-slate-900 text-sm">Cần giải đáp điều khoản?</p>
            <p className="text-xs text-slate-500 font-normal">Đội ngũ hỗ trợ luôn sẵn sàng giải đáp thắc mắc.</p>
          </div>
          <Link
            to="/lien-he"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#ed792f] hover:underline"
          >
            Liên hệ tư vấn <ArrowRight size={16} />
          </Link>
        </footer>

      </div>
    </div>
  );
}