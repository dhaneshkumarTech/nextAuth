// app/page.tsx
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to AuthFlow</h1>
      
      <p className="mb-6">
        AuthFlow is a comprehensive user authentication system built with Next.js 14. It provides a secure and user-friendly way to manage user accounts, including registration, login, email verification, and password reset functionalities.
      </p>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>User registration with email verification</li>
          <li>Secure login system</li>
          <li>Password reset functionality</li>
          <li>User profile management</li>
          <li>Email notifications for account actions</li>
          <li>Responsive design for desktop and mobile devices</li>
        </ul>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
        <p className="mb-4">To start using AuthFlow, follow these simple steps:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Register an account by clicking the button below</li>
          <li>Verify your email by clicking the link sent to your inbox</li>
          <li>Log in to access your secure account</li>
        </ol>
      </div>
      
      <div className="flex space-x-4 mb-8">
        <Link href="/register">
          <Button>Register Now</Button>
        </Link>
        <Link href="/login">
          <Button variant="secondary">Login</Button>
        </Link>
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold mb-4">Learn More</h2>
        <p>
          For a complete guide on using AuthFlow, including troubleshooting tips and technical details, please refer to our{' '}
          <Link href="/documentation" className="text-blue-600 hover:underline">
            documentation
          </Link>.
        </p>
      </div>
    </div>
  );
}