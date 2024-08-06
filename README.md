# Authentication Website with Next.js

This is a basic authentication website built with Next.js, featuring sign-up and login functionality using email, Google, and GitHub. Email verification is handled via Nodemailer.

## Features

- Sign up with Google, GitHub, or email
- Email verification
- Login
- Registration
- Password management (reset-password, forget-password)
- User profile handling
- Logout

## Technologies Used

- Next.js
- NextAuth
- Nodemailer

## Installation

1. Clone the repository:

```bash
git clone https://github.com/dhaneshkumarTech/nextAuth
cd nextAuth
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file in the root of your project and add the following environment variables:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret

EMAIL_SERVER=smtp://user:pass@smtp.mailtrap.io:2525
EMAIL_FROM=no-reply@yourdomain.com

GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret

GOOGLE_ID=your_google_client_id
GOOGLE_SECRET=your_google_client_secret
```

4. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Routes

- `/login` - Login page
- `/register` - Registration page
- `/reset-password` - Reset password page
- `/forgot-password` - Forget password page
- `/verify-email` - Email verification page
- `/logout` - Logout route
- `/profile` - User profile page

## How to Use

1. **Register**: Sign up using email, Google, or GitHub.
2. **Verify Email**: Check your email for a verification link and verify your email address.
3. **Login**: Use your email, Google, or GitHub credentials to log in.
4. **Password Management**: If you forget your password, use the forget-password route to reset it.
5. **Profile**: Access and manage your user profile.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [NextAuth.js](https://next-auth.js.org/)
- [Nodemailer](https://nodemailer.com/)

Feel free to contribute or raise issues on GitHub. Happy coding!
