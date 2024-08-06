// app/verify-email/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Alert } from '@/components/ui/alert';

export default function VerifyEmail() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<'verifying' | 'success' | 'error'>('verifying');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const verifyEmail = async () => {
      const token = searchParams.get('token');
      if (!token) {
        setStatus('error');
        setMessage('Invalid verification link');
        return;
      }

      try {
        const response = await fetch('/api/verify-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token }),
        });

        const data = await response.json();

        if (response.ok) {
          setStatus('success');
          setMessage(data.message);
          setTimeout(() => router.push('/login'), 3000);
        } else {
          setStatus('error');
          setMessage(data.error);
        }
      } catch (error) {
        setStatus('error');
        setMessage('An error occurred during email verification');
      }
    };

    verifyEmail();
  }, [router, searchParams]);

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Email Verification</h1>
      {status === 'verifying' && <p>Verifying your email...</p>}
      {status === 'success' && <Alert type="success" message={message} />}
      {status === 'error' && <Alert type="error" message={message} />}
      {status !== 'verifying' && (
        <p className="mt-4">
          You will be redirected to the login page in a few seconds...
        </p>
      )}
    </div>
  );
}