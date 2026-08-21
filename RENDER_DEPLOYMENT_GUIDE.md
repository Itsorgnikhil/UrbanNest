# Render Deployment Guide — UrbanNest Lifestyle Store

Deploying **UrbanNest** on Render takes under 2 minutes. Render will automatically build and publish your Vite React app directly from your GitHub repository: `https://github.com/Itsorgnikhil/UrbanNest`

---

## Method 1: Deploy using Blueprint (Automatic ⚡ - Recommended)

1. Sign in to your [Render Dashboard](https://dashboard.render.com/).
2. Click **New +** at the top right -> Select **Blueprint**.
3. Connect your GitHub account and select your repository: `Itsorgnikhil/UrbanNest`.
4. Render will automatically detect `render.yaml` and configure:
   - **Service Name**: `urbannest-lifestyle-store`
   - **Environment**: `Static Site`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `./dist`
5. Click **Apply**.
6. Done! Render will build your site and give you a live production URL like `https://urbannest-lifestyle-store.onrender.com`.

---

## Method 2: Manual Static Site Setup

If you prefer setting up the Static Site manually on Render:

1. Go to [Render Dashboard](https://dashboard.render.com/) -> Click **New +** -> Select **Static Site**.
2. Connect your GitHub repository: `https://github.com/Itsorgnikhil/UrbanNest`.
3. Configure the fields as follows:
   - **Name**: `urbannest-lifestyle-store`
   - **Branch**: `main`
   - **Root Directory**: *(leave blank)*
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
4. Click **Create Static Site**.
5. Go to **Redirects / Rewrites** in the left menu -> Click **Add Rewrite Rule**:
   - **Source**: `/*`
   - **Destination**: `/index.html`
   - **Action**: `Rewrite`
6. Click **Save Changes**!
