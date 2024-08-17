// app/documentation/page.tsx
import React from 'react';
import Link from 'next/link';

export default function Documentation() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">AuthFlow Documentation</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><a href="#features" className="text-blue-600 hover:underline">Features</a></li>
          <li><a href="#getting-started" className="text-blue-600 hover:underline">Getting Started</a></li>
          <li><a href="#user-guide" className="text-blue-600 hover:underline">User Guide</a></li>
          <li><a href="#technical-overview" className="text-blue-600 hover:underline">Technical Overview</a></li>
          <li><a href="#security-measures" className="text-blue-600 hover:underline">Security Measures</a></li>
          <li><a href="#troubleshooting" className="text-blue-600 hover:underline">Troubleshooting</a></li>
          <li><a href="#contact-and-support" className="text-blue-600 hover:underline">Contact and Support</a></li>
        </ul>
      </div>
      
      <div id="features">
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <p>AuthFlow offers a robust set of features for user authentication:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>User registration with email verification</li>
          <li>Secure login system</li>
          <li>Password reset functionality</li>
          <li>User profile management</li>
          <li>Email notifications for account actions</li>
          <li>Responsive design for desktop and mobile devices</li>
        </ul>
        <br />
        <hr />
        <br />
      </div>
      
      <div id="getting-started">
        <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Register an Account: Click on the "Register" link in the navigation bar and fill out the registration form.</li>
          <li>Verify Your Email: Check your email for a verification link and click it to activate your account.</li>
          <li>Log In: Once verified, use your email and password to log in to your account.</li>
        </ol>
        <br />
        <hr />
        <br />
      </div>
      
      <div id="user-guide">
        <h2 className="text-2xl font-semibold mb-4">User Guide</h2>
        <h3 className="text-xl font-semibold">Registration</h3>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Click on "Register" in the navigation bar.</li>
          <li>Fill in your full name, desired username, email address, and password.</li>
          <li>Click "Register" to create your account.</li>
          <li>Check your email for a verification link.</li>
        </ol>
        <br />
        <hr />
        <br />
        <h3 className="text-xl font-semibold">Email Verification</h3>
        <ol className="list-decimal pl-6 space-y-2">
          <li>After registration, check your email inbox (and spam folder) for a verification email.</li>
          <li>Click on the verification link in the email.</li>
          <li>You'll be redirected to a page confirming your email verification.</li>
        </ol>
        <br />
        <hr />
        <br />
        <h3 className="text-xl font-semibold">Logging In</h3>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Click on "Login" in the navigation bar.</li>
          <li>Enter your registered email and password.</li>
          <li>Click "Login" to access your account.</li>
        </ol>
        <br />
        <hr />
        <br />
        <h3 className="text-xl font-semibold">Forgot Password</h3>
        <ol className="list-decimal pl-6 space-y-2">
          <li>On the login page, click "Forgot password?"</li>
          <li>Enter your registered email address.</li>
          <li>Check your email for a password reset link.</li>
          <li>Click the link and enter your new password.</li>
        </ol>
        <br />
        <hr />
        <br />
        <h3 className="text-xl font-semibold">User Profile</h3>
        <ol className="list-decimal pl-6 space-y-2">
          <li>After logging in, click on "Profile" in the navigation bar.</li>
          <li>View your account details.</li>
          <li>If your email is not verified, you can request a new verification email.</li>
        </ol>
        <br />
        <hr />
        <br />
        <h3 className="text-xl font-semibold">Logging Out</h3>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Click on "Logout" in the navigation bar or on your profile page.</li>
          <li>You'll be redirected to the login page.</li>
        </ol>
        <br />
        <hr />
        <br />
      </div>
      
      <div id="technical-overview">
        <h2 className="text-2xl font-semibold mb-4">Technical Overview</h2>
        <p>AuthFlow is built using the following technologies:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Frontend: Next.js 14, React, Tailwind CSS</li>
          <li>Backend: Next.js API Routes</li>
          <li>Database: MongoDB (assumed based on the use of models)</li>
          <li>Authentication: JSON Web Tokens (JWT)</li>
          <li>Email Service: Custom email sender (likely using a service like SendGrid or Nodemailer)</li>
        </ul>
        <p>The application follows a modular structure with separate components for each functionality, ensuring maintainability and scalability.</p>
        <br />
        <hr />
        <br />
      </div>
      <br/>
      <div id="security-measures">
        <h2 className="text-2xl font-semibold mb-4">Security Measures</h2>
        <p>AuthFlow implements several security best practices:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Passwords are hashed before storage</li>
          <li>JWT tokens are used for session management</li>
          <li>Email verification prevents unauthorized account creation</li>
          <li>Secure password reset process with time-limited tokens</li>
          <li>HTTPS encryption for all data transmission (to be implemented on deployment)</li>
        </ul>
        <br />
        <hr />
        <br />
      </div>
      
      <div id="troubleshooting">
        <h2 className="text-2xl font-semibold mb-4">Troubleshooting</h2>
        <p>If you encounter any issues:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Email Not Received:</strong> Check your spam folder. If the email is still missing, try requesting a new verification email from your profile page.</li>
          <li><strong>Login Issues:</strong> Ensure your email is verified. If you've forgotten your password, use the "Forgot password?" feature.</li>
          <li><strong>Account Locked:</strong> Contact support if you believe your account has been locked due to multiple failed login attempts.</li>
        </ul>
        <br />
        <hr />
        <br />
      </div>
      
      <div id="contact-and-support">
        <h2 className="text-2xl font-semibold mb-4">Contact and Support</h2>
        <p>For additional help or to report issues, please contact our support team at <a href="mailto:support@authflow.com" className="text-blue-600 hover:underline">support@authflow.com</a>.</p>
        <p>We hope you find AuthFlow helpful for your authentication needs. Your security and user experience are our top priorities. If you have any suggestions for improvement, please let us know!</p>
        <br />
        <hr />
        <br />
      </div>
      
      <div className="mt-8">
        <Link href="/" className="text-blue-600 hover:underline">
          &larr; Back to Home
        </Link>
      </div>
    </div>
  );
}
