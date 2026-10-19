# 🎬 Video Editor & Motion Graphics Portfolio Website

A cinematic, high-retention portfolio website built for **Video Editors, Motion Graphics Designers, and AI Visual Artists**. Engineered to showcase both **16:9 YouTube Long-Form** projects and **9:16 Viral Reels / Shorts / TikToks** in one seamless experience.

---

## 🚀 Live Local Preview
The development server is running locally at:
👉 **[http://localhost:5173/](http://localhost:5173/)**

---

## ✨ Features Included

1. **Dual-Format Video Grid**:
   - **16:9 Widescreen Cards**: Designed for YouTube documentaries, talking head cuts, commercial promos, and motion design reels.
   - **9:16 Vertical Smartphone Cards**: Styled like mobile screens for TikToks, Instagram Reels, and YouTube Shorts with video hover loops.
2. **Category Filter Tabs**:
   - 🔥 All Projects
   - 🎬 YouTube (16:9)
   - 📱 Reels & Shorts (9:16)
   - ✨ Motion Graphics & 3D
   - 🤖 AI Video & VFX (Runway Gen-3, Midjourney, Kling AI)
3. **Responsive Video Lightbox Modal**:
   - Automatically adapts to **16:9 widescreen** or **9:16 vertical phone view**.
   - Supports **YouTube embeds** and **direct MP4 video clips**.
   - Displays project duration, total views, retention rate, client name, creative breakdown, and software used.
4. **Interactive Before & After Split Slider**:
   - Allows clients to drag a slider to compare flat RAW Log footage with the final color-graded, sound-designed master.
5. **Production Workflow Timeline**:
   - 5-step studio pipeline (Hook Analysis -> Pacing -> Motion VFX -> Sound Design -> 4K Delivery).
6. **Transparent Services & Pricing**:
   - Short-Form Viral Pack, YouTube Flagship Long-Form, and Custom Motion/AI Visuals with instant inquiry linkage.
7. **Creator Testimonials & Retention Badges**:
   - Client reviews showcasing subscriber growth and retention improvements.
8. **High-Converting Contact & Chat System**:
   - 1-Click direct chat buttons: **WhatsApp**, **Email**, and **Calendly**.
   - Interactive Project Inquiry form with celebration confetti!

---

## 🛠️ How to Customize with Your Own Videos and Information

All your videos, contact info, and portfolio text are organized in one single file:
📁 **[`src/data/portfolioData.ts`](file:///g:/Personal%20Website/src/data/portfolioData.ts)**

### 1. Update Your Name, Bio, and Social Links
Open `src/data/portfolioData.ts` and edit `PERSONAL_INFO`:
```ts
export const PERSONAL_INFO = {
  name: "Your Name",
  title: "Video Editor & Motion Designer",
  bio: "Your custom bio here...",
  socials: {
    youtube: "https://youtube.com/@yourchannel",
    instagram: "https://instagram.com/yourhandle",
    whatsapp: "https://wa.me/YOUR_PHONE_NUMBER", // e.g. 15551234567
    email: "you@example.com",
    calendly: "https://calendly.com/yourlink",
  },
  showreel: {
    title: "2026 Commercial Showreel",
    videoUrl: "https://www.youtube-nocookie.com/embed/YOUR_SHOWREEL_ID",
    thumbnail: "YOUR_THUMBNAIL_URL",
  }
};
```

### 2. Add Your YouTube Videos (16:9)
In `PROJECTS`:
```ts
{
  id: "yt-my-project",
  title: "My Client YouTube Video Title",
  client: "Client Channel Name",
  category: "youtube",
  format: "16:9",
  aspectRatio: "16/9",
  thumbnailUrl: "https://img.youtube.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg",
  videoUrl: "https://www.youtube-nocookie.com/embed/YOUR_VIDEO_ID",
  videoType: "youtube",
  duration: "12:30",
  views: "1.5M",
  retentionRate: "72%",
  description: "Explanation of your editing techniques, pacing, and sound design.",
  softwareUsed: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
}
```

### 3. Add Your Reels & Shorts (9:16)
```ts
{
  id: "reel-my-project",
  title: "Viral Hook Short for Client",
  client: "Creator Handle",
  category: "reels",
  format: "9:16",
  aspectRatio: "9/16",
  thumbnailUrl: "https://your-image-link.jpg",
  videoUrl: "https://your-video-link.mp4", // Or YouTube Shorts embed
  videoType: "mp4", // or 'youtube'
  duration: "0:30",
  views: "2.4M",
  retentionRate: "110%",
  description: "Fast-paced captions, dynamic zoom cuts, and sound effects.",
  softwareUsed: ["CapCut Pro", "After Effects"],
}
```

---

## 📦 How to Deploy Your Website to the Internet (Free)

When you are ready to give clients your portfolio link:

### Option A: Vercel (Fastest & 100% Free)
1. Push your folder to a GitHub repository or download the project.
2. Go to [vercel.com](https://vercel.com) and sign in.
3. Click **"Add New Project"** and select your GitHub repository.
4. Click **"Deploy"** (Vercel automatically detects Vite).
5. Within 30 seconds, you get a custom live link like `https://alex-editor-portfolio.vercel.app` to share with clients!

### Option B: Netlify
1. Run `npm run build` in your terminal.
2. Drag and drop the generated `dist` folder into [app.netlify.com/drop](https://app.netlify.com/drop).
3. Your website is instantly live!
