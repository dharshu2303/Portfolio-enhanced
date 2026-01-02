# Deployment Guide

This guide provides step-by-step instructions for deploying the Portfolio application to production.

## Prerequisites

- GitHub account
- Vercel account (for frontend)
- Railway/Render account (for backend)
- OpenAI API key (optional, for enhanced chatbot)

## Frontend Deployment (Vercel)

### Step 1: Prepare Repository

Ensure all changes are committed and pushed to GitHub:
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Deploy to Vercel

1. Visit [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "Add New Project"
3. Import your `Portfolio-enhanced` repository
4. Configure the project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)

### Step 3: Configure Environment Variables

In Vercel project settings, add the following environment variables:

```env
NEXT_PUBLIC_API_URL=https://your-backend-url.railway.app
OPENAI_API_KEY=sk-your-actual-openai-api-key
```

**Note**: Replace `your-backend-url.railway.app` with your actual backend URL after deploying the backend.

### Step 4: Deploy

Click "Deploy" and wait for the build to complete. Your site will be available at:
```
https://your-project-name.vercel.app
```

### Step 5: Custom Domain (Optional)

1. Go to Project Settings > Domains
2. Add your custom domain
3. Follow DNS configuration instructions

## Backend Deployment (Railway)

### Step 1: Prepare Backend

Ensure your backend has all necessary files:
- `backend/server.js`
- `backend/package.json`
- `backend/routes/api.js`
- `backend/data/projects.js`
- `backend/data/certifications.js`

### Step 2: Deploy to Railway

1. Visit [railway.app](https://railway.app) and sign in with GitHub
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose your `Portfolio-enhanced` repository
5. Railway will detect the repository

### Step 3: Configure Root Directory

Since the backend is in a subdirectory:

1. Go to your service settings
2. Under "Build", set:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

### Step 4: Environment Variables

Railway auto-assigns PORT, but you can add:
```env
PORT=5000
```

### Step 5: Get Backend URL

After deployment, Railway provides a URL like:
```
https://your-backend.railway.app
```

Copy this URL and update it in your Vercel environment variables.

## Alternative: Backend on Render

### Step 1: Create Web Service

1. Visit [render.com](https://render.com)
2. Click "New +" > "Web Service"
3. Connect your GitHub repository

### Step 2: Configure Service

- **Name**: portfolio-backend
- **Root Directory**: `backend`
- **Environment**: Node
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Plan**: Free

### Step 3: Environment Variables

Add:
```env
PORT=5000
```

### Step 4: Deploy

Click "Create Web Service" and wait for deployment.

## Post-Deployment Steps

### 1. Update Frontend Environment Variables

Go back to Vercel and update `NEXT_PUBLIC_API_URL` with your deployed backend URL.

### 2. Redeploy Frontend

In Vercel dashboard:
1. Go to Deployments
2. Click "Redeploy" on the latest deployment
3. This ensures the new backend URL is used

### 3. Test API Endpoints

Test your backend endpoints:
```bash
curl https://your-backend-url.railway.app/api/projects
curl https://your-backend-url.railway.app/api/certifications
```

### 4. Test Frontend

Visit your deployed site and test:
- ✅ Projects section loads data
- ✅ Certifications section loads data
- ✅ Chatbot works (with or without OpenAI)
- ✅ Contact form submits to Formspree
- ✅ All animations work
- ✅ Responsive on mobile

## Environment Variables Reference

### Frontend (.env.local in Vercel)
```env
NEXT_PUBLIC_API_URL=https://your-backend-url.railway.app
OPENAI_API_KEY=sk-your-openai-api-key-here
```

### Backend (.env in Railway/Render)
```env
PORT=5000
```

## CORS Configuration for Production

The backend is already configured to accept requests from any origin:
```javascript
app.use(cors());
```

For production, you may want to restrict CORS to your frontend domain only:

```javascript
// In backend/server.js
app.use(cors({
  origin: 'https://your-domain.vercel.app'
}));
```

## Troubleshooting

### Frontend Shows "Loading..." Forever

**Issue**: Backend API not reachable
**Solution**: 
1. Check `NEXT_PUBLIC_API_URL` is correct in Vercel
2. Verify backend is running on Railway/Render
3. Check backend logs for errors

### Chatbot Not Responding

**Issue**: OpenAI API key missing or invalid
**Solution**:
1. Check `OPENAI_API_KEY` in Vercel
2. Verify key is valid and has credits
3. Chatbot falls back to rule-based responses if API fails

### Backend API Errors

**Issue**: Backend routes returning 500
**Solution**:
1. Check Railway/Render logs
2. Verify all dependencies installed
3. Check file paths are correct

### Build Failures

**Issue**: Vercel build fails
**Solution**:
1. Run `npm run build` locally to test
2. Check all dependencies are in package.json
3. Review build logs in Vercel

## Performance Optimization

### Enable Vercel Analytics

1. Go to Vercel project settings
2. Enable Analytics
3. Monitor Core Web Vitals

### Image Optimization

Images are automatically optimized by Next.js. Ensure you're using the `Image` component:
```jsx
import Image from 'next/image'

<Image src="/photo.jpg" alt="Profile" width={300} height={300} />
```

### Caching

Vercel automatically caches static assets. For API routes, add cache headers if needed:
```javascript
// In API route
export async function GET() {
  return new Response(JSON.stringify(data), {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'
    }
  })
}
```

## Monitoring

### Vercel Logs

View frontend logs in Vercel dashboard under "Logs" tab.

### Railway/Render Logs

View backend logs in Railway/Render dashboard.

### Error Tracking (Optional)

Consider adding Sentry for error tracking:
```bash
npm install @sentry/nextjs
```

## Backup and Version Control

Always maintain your code on GitHub:
1. Tag releases: `git tag v1.0.0`
2. Create production branch: `git checkout -b production`
3. Document changes in commit messages

## Security Checklist

- ✅ API keys stored in environment variables (not in code)
- ✅ CORS configured appropriately
- ✅ No sensitive data in frontend code
- ✅ Dependencies up to date
- ✅ HTTPS enabled (automatic on Vercel/Railway/Render)

## Support

For issues:
1. Check deployment logs
2. Review this guide
3. Check Next.js documentation
4. Check Railway/Render documentation
5. Contact support if needed

## Cost Estimates

### Free Tier Limits

**Vercel Free Tier:**
- 100 GB bandwidth/month
- Unlimited projects
- Analytics included

**Railway Free Tier:**
- $5 free credit/month
- ~500 hours of uptime

**Render Free Tier:**
- 750 hours/month
- Sleeps after 15 min inactivity

**Upgrade if:**
- Traffic exceeds free limits
- Need custom domains
- Require 24/7 uptime
- Need more compute resources

---

**Congratulations!** Your portfolio is now live on the internet! 🎉
