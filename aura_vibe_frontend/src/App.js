import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';

import AppLayout from './components/layout/AppLayout';
import RequireAuth from './components/auth/RequireAuth';

import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';

import FeedPage from './pages/feed/FeedPage';
import ExplorePage from './pages/explore/ExplorePage';
import ProfilePage from './pages/profile/ProfilePage';
import EditProfilePage from './pages/profile/EditProfilePage';
import NotificationsPage from './pages/notifications/NotificationsPage';
import StoriesPage from './pages/stories/StoriesPage';
import DMsPage from './pages/dms/DMsPage';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import AudioReelsPage from './pages/audio/AudioReelsPage';
import AICaptionsPage from './pages/ai/AICaptionsPage';
import PostSchedulePage from './pages/schedule/PostSchedulePage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <AppLayout>
            <Routes>
              {/* Auth routes */}
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/forgot" element={<ForgotPasswordPage />} />
              {/* Main user content (requires auth) */}
              <Route element={<RequireAuth />}>
                <Route path="/" element={<FeedPage />} />
                <Route path="/explore" element={<ExplorePage />} />
                <Route path="/profile/:username" element={<ProfilePage />} />
                <Route path="/profile/:username/edit" element={<EditProfilePage />} />
                <Route path="/notifications" element={<NotificationsPage />} />
                <Route path="/stories" element={<StoriesPage />} />
                <Route path="/dms/*" element={<DMsPage />} />
                <Route path="/admin" element={<AdminDashboardPage />} />
                {/* Optional/bonus features */}
                <Route path="/audio-reels" element={<AudioReelsPage />} />
                <Route path="/ai-captions" element={<AICaptionsPage />} />
                <Route path="/schedule" element={<PostSchedulePage />} />
              </Route>
              {/* 404 */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </AppLayout>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
}
