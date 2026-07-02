import React, { useState } from 'react';
import { LoginScreen } from '@/components/login/LoginScreen';
import { FeedScreen } from '@/components/feed/FeedScreen';

export default function HomeScreen() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <LoginScreen onLogin={() => setIsLoggedIn(true)} />;
  }

  return <FeedScreen />;
}
