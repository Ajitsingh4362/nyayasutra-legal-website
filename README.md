# NyayaSutra — Legal Intelligence Platform

Premium Next.js platform with admin dashboard, blog, courses, gallery/media, contact queries and student enrollments.

## Run locally

```bash
npm install
npm run dev
```

Open: http://localhost:3000

## Admin Login

Open: http://localhost:3000/admin

Default local credentials:

```txt
Email: admin@nyayasutra.org
Password: admin123
```

For production, change credentials in `.env.local` and Vercel Environment Variables.

## Required ENV for full backend/media upload

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/nyayasutra
JWT_SECRET=change-this-to-a-long-secure-secret
ADMIN_EMAIL=admin@nyayasutra.org
ADMIN_PASSWORD=your_secure_password
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

On Vercel, set `NEXT_PUBLIC_SITE_URL=https://nyayasutra.org`.

## Features

- Social links with safe custom text icons
- Full-page language translation through Google Translate dropdown
- Admin login without visible default password text
- Blog creation with formatting toolbar and featured image upload
- Course creation with thumbnail, video URL, PDF/audio upload and clickable modules
- Gallery/media direct upload using Cloudinary
- Student course enrollment system with WhatsApp redirect and admin tracking
- Internship application system with WhatsApp redirect and admin tracking
- Contact query save + WhatsApp redirect
- MongoDB backend with memory fallback for local demo
- Cloudinary upload API with image optimization
- Responsive premium legal UI

## Deployment

Push to the same GitHub repo connected to Vercel. Existing domain `nyayasutra.org` will keep working after successful deployment.
