import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Cloud, Clock, AlertTriangle } from "lucide-react";

export default function DeliveryPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 py-12 md:py-16 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto space-y-12">

        <header className="space-y-3">
          <h1 className="text-2xl sm:text-4xl font-bold leading-tight text-[#ed792f]">
            CHÍNH SÁCH VẬN CHUYỂN VÀ GIAO NHẬN
          </h1>
        </header>

        <main className="space-y-8">
          <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-semibold text-base">
              <Cloud className="text-[#ed792f]" size={20} />
              <span>Phương thức cung ứng dịch vụ:</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              CMIC MEDIA không cung cấp hàng hóa vật lý. Toàn bộ dịch vụ và sản phẩm số (báo cáo, hình ảnh thiết kế, video, tài khoản quảng cáo...) được bàn giao trực tuyến qua các kênh: Email, Google Drive, Zalo, Slack hoặc các nền tảng quản lý công việc do hai bên thống nhất.
            </p>
          </div>

          <section className="space-y-2">
            <div className="flex items-center gap-2 text-slate-900 font-semibold text-base">
              <Clock className="text-[#ed792f]" size={18} />
              <span>Thời hạn bàn giao:</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed font-normal pl-6">
              Tiến độ thực hiện và thời gian bàn giao từng hạng mục công việc được quy định chi tiết trong Hợp đồng hoặc Phụ lục hợp đồng kèm theo.
            </p>
          </section>

          <div className="p-5 rounded-xl border border-orange-200 bg-orange-50/40 space-y-2">
            <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
              <AlertTriangle className="text-[#ed792f]" size={18} />
              <span>Biện pháp xử lý khi chậm trễ:</span>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed font-normal">
              Nếu có sự chậm trễ phát sinh do yếu tố khách quan hoặc bất khả kháng, CMIC MEDIA sẽ thông báo bằng văn bản (hoặc email) cho khách hàng trước ít nhất 24 giờ để cùng thương lượng, điều chỉnh lại lộ trình triển khai phù hợp.
            </p>
          </div>
        </main>

        <footer className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-slate-900 text-sm">Theo dõi tiến độ dự án?</p>
            <p className="text-xs text-slate-500 font-normal">Liên hệ chuyên viên phụ trách để nhận thông tin cập nhật.</p>
          </div>
          <Link
            to="/lien-he"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#ed792f] hover:underline"
          >
            Liên hệ hỗ trợ <ArrowRight size={16} />
          </Link>
        </footer>

      </div>
    </div>
  );
}