'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Alert } from '@/components/ui/alert';

interface User {
  name: string;
  username: string;
  email: string;
  isVerified: boolean;
}

export default function Profile() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch('/api/profile');
        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
        } else {
          setError('Failed to fetch user profile');
        }
      } catch (err) {
        setError('An error occurred while fetching user profile');
      }
    };

    fetchUserProfile();
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/logout', { method: 'POST' });
      if (response.ok) {
        router.push('/login');
      } else {
        setError('Failed to logout');
      }
    } catch (err) {
      setError('An error occurred during logout');
    }
  };

  const handleResendVerification = async () => {
    try {
      const response = await fetch('/api/verify-email', { method: 'POST' });
      const data = await response.json();
      if (response.ok) {
        setError('');
        alert(data.message);
      } else {
        setError(data.error || 'Failed to resend verification email');
      }
    } catch (err) {
      setError('An error occurred while resending verification email');
    }
  };

  if (error) {
    return <Alert type="error" message={error} />;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <p className="text-gray-900">{user.name}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
          <p className="text-gray-900">{user.username}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <p className="text-gray-900">{user.email}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email Verification Status</label>
          <p className={`text-${user.isVerified ? 'green' : 'red'}-600`}>
            {user.isVerified ? 'Verified' : 'Not Verified'}
          </p>
          {!user.isVerified && (
            <Button onClick={handleResendVerification} className="mt-2">
              Resend Verification Email
            </Button>
          )}
        </div>
        <Button onClick={handleLogout} variant="secondary">Logout</Button>
      </div>
    </div>
  );
}