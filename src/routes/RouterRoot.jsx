import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AdminLayout from "../components/layout/AdminLayout.jsx";
import ClientLayout from "../components/layout/ClientLayout.jsx";
import Dashboard from "../adminPages/system/Dashboard";
import NewsManager from "../adminPages/news/NewsManager.jsx";
import NewsDetail from "../adminPages/news/NewsDetail.jsx";
import ChangePassWord from "../adminPages/system/ChangePassWord.jsx";
import ResetPassNV from "../adminPages/system/ResetPassNV.jsx";
import Account from "../adminPages/system/Account.jsx";
import Login from "../adminPages/auth/Login.jsx";
import Register from "../adminPages/auth/Register.jsx";
import LoadingSpinner from "../components/LoadingSpinner.jsx";
import { GetAccount } from "../redux/authSlice";
import Cookies from "js-cookie";

import Home from "../clientPages/TrangChu.jsx";
import About from "../clientPages/GioiThieu.jsx";
import Service from "../clientPages/dichVu/DichVu.jsx";
import WebsiteTronGoi from "../clientPages/dichVu/wesite/WebsiteTronGoi.jsx";
import WebsiteXayDung from "../clientPages/dichVu/wesite/WebsiteXayDung.jsx";
import WebsiteThietKe from "../clientPages/dichVu/wesite/WebsiteThietKe.jsx";
import WebsiteChamSoc from "../clientPages/dichVu/wesite/WebsiteChamSoc.jsx";
import SocialTronGoi from "../clientPages/dichVu/social/SocialTronGoi.jsx";
import SocialFanpage from "../clientPages/dichVu/social/SocialFanpage.jsx";
import SocialInstagram from "../clientPages/dichVu/social/SocialInstagram.jsx";
import SocialYoutube from "../clientPages/dichVu/social/SocialYoutube.jsx";
import SocialTiktok from "../clientPages/dichVu/social/SocialTiktok.jsx";
import SocialLinkedin from "../clientPages/dichVu/social/SocialLinkedin.jsx";
import SocialEmailMarketing from "../clientPages/dichVu/social/SocialEmailMarketing.jsx";
import HeThongAIAgent from "../clientPages/dichVu/n8n/HeThongAIAgent.jsx";
import TronGoiMarketing from "../clientPages/dichVu/marketing/TronGoiMarketing.jsx";
import News from "../clientPages/TinTuc.jsx";
import Contact from "../clientPages/LienHe.jsx";
import PostDetail from '../components/post/postDetail.jsx'
import HoSoNangLuc from "../clientPages/HoSoNangLuc.jsx";

import ChinhSach1 from '../components/chinhsach/Chinhsach1.jsx'
import ChinhSach2 from '../components/chinhsach/Chinhsach2.jsx'
import ChinhSach3 from '../components/chinhsach/Chinhsach3.jsx'
import ChinhSach4 from '../components/chinhsach/Chinhsach4.jsx'

const ProtectedRoute = ({ children }) => {
  const { userInfo, isLoading } = useSelector((state) => state.auth);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!userInfo || Object.keys(userInfo).length === 0) {
    return <Navigate to="/login" replace />;
  }

  if (userInfo.role === "client") return <Navigate to="/profile/info" replace />;

  return children;
};

const PublicRoute = ({ children }) => {
  const { userInfo, isLoading } = useSelector((state) => state.auth);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (userInfo && Object.keys(userInfo).length > 0) {
    return <Navigate to="/profile/info" replace />;
  }

  return children;
};

function RouterRoot() {
  const dispatch = useDispatch();
  const { userInfo, isLoading, hasCheckedAuth } = useSelector((state) => state.auth);

  useEffect(() => {
    const token = Cookies.get("fr");

    if (token && !hasCheckedAuth && !isLoading) {
      dispatch(GetAccount());
    }
  }, [dispatch, hasCheckedAuth, isLoading]);

  return (
    <Router>
      <Routes>
        {/* public route */}
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />

        {/* Client routes */}
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Navigate to="trang-chu" replace />} />
          <Route path="trang-chu" element={<Home />} />
          <Route path="gioi-thieu" element={<About />} />

          <Route path="dich-vu" element={<Service />} />

          <Route path="dich-vu/website-landing-page/tron-goi" element={<WebsiteTronGoi />} />
          <Route path="dich-vu/website-landing-page/xay-dung" element={<WebsiteXayDung />} />
          <Route path="dich-vu/website-landing-page/thiet-ke-giao-dien" element={<WebsiteThietKe />} />
          <Route path="dich-vu/website-landing-page/cham-soc" element={<WebsiteChamSoc />} />

          <Route path="dich-vu/cham-soc-kenh-social/tron-goi" element={<SocialTronGoi />} />
          <Route path="dich-vu/cham-soc-kenh-social/fanpage" element={<SocialFanpage />} />
          <Route path="dich-vu/cham-soc-kenh-social/instagram" element={<SocialInstagram />} />
          <Route path="dich-vu/cham-soc-kenh-social/youtube" element={<SocialYoutube />} />
          <Route path="dich-vu/cham-soc-kenh-social/tiktok" element={<SocialTiktok />} />
          <Route path="dich-vu/cham-soc-kenh-social/linkedin" element={<SocialLinkedin />} />
          <Route path="dich-vu/cham-soc-kenh-social/email-marketing" element={<SocialEmailMarketing />} />

          <Route path="tin-tuc" element={<News />} />
          <Route path="/tin-tuc/:title/:id" element={<PostDetail />} />
          <Route path="lien-he" element={<Contact />} />
          <Route path="ho-so-nang-luc" element={<HoSoNangLuc />} />

          <Route path="dieu-khoan-dich-vu-va-dieu-kien-giao-dich-chung" element={<ChinhSach1 />} />
          <Route path="cac-phuong-thuc-thanh-toan" element={<ChinhSach2 />} />
          <Route path="chinh-sach-van-chuyen-va-giao-nhan" element={<ChinhSach3 />} />
          <Route path="chinh-sach-bao-mat-thong-tin-ca-nhan" element={<ChinhSach4 />} />

        </Route>

        {/* private route */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          {/* route system */}
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile/info" element={<Account />} />
          <Route path="profile/change-password" element={<ChangePassWord />} />
          <Route path="profile/change-password-staff" element={<ResetPassNV />} />

          {/* route news */}
          <Route path="news/detail" element={<NewsDetail />} />   {/* Đăng tin */}
          <Route path="news/manager" element={<NewsManager />} />           {/* Danh sách tin (ví dụ) */}

        </Route>

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default RouterRoot;