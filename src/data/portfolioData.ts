import type { ProjectItem, ServicePackage, Testimonial, BeforeAfterPair } from '../types';

export const PERSONAL_INFO = {
  name: "Pervez Mosaraf",
  title: "Video Editor & Motion Graphics Designer",
  tagline: "High-Retention YouTube Edits, SaaS Animations, Viral Reels & AI Visuals",
  bio: "Hi, I'm Pervez Mosaraf. I specialize in crafting high-impact SaaS product animations, cinematic YouTube video edits, viral 9:16 reels, and next-generation AI video productions that captivate audiences and drive conversions.",
  location: "Dhaka, Bangladesh / Worldwide Remote",
  availability: "Available for New Projects & Monthly Retainers",
  yearsExperience: "5+ Years",
  stats: {
    totalViews: "15M+",
    projectsCompleted: "180+",
    avgRetention: "76%",
    avgTurnaround: "24-48h",
  },
  socials: {
    youtube: "https://youtube.com/@pervezmosaraf",
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/8801772291692",
    whatsappNumber: "+880 1772-291692",
    email: "mosarafpervez@gmail.com",
    twitter: "https://twitter.com",
    calendly: "https://calendly.com",
  },
  showreel: {
    title: "SaaS Product & Motion Graphics Showcase",
    duration: "Featured",
    videoUrl: "https://www.youtube-nocookie.com/embed/qg13QW-tBnI",
    videoType: "youtube" as const,
    thumbnail: "https://img.youtube.com/vi/qg13QW-tBnI/hqdefault.jpg",
  }
};

export const PROJECTS: ProjectItem[] = [
  // ==========================================
  // 0. FEATURED: INTRODUCE SAAS ANIMATION (FIRST ITEM)
  // ==========================================
  {
    id: "saas-intro",
    title: "Featured SaaS Product Animation & Workflow Explainer",
    client: "SaaS Product Launch",
    category: "motion",
    format: "16:9",
    aspectRatio: "16/9",
    thumbnailUrl: "https://img.youtube.com/vi/qg13QW-tBnI/hqdefault.jpg",
    videoUrl: "https://www.youtube-nocookie.com/embed/qg13QW-tBnI",
    videoType: "youtube",
    duration: "Featured",
    views: "Featured Masterpiece",
    retentionRate: "92%",
    description: "High-converting SaaS product animation introducing features with clean UI motion graphics, dynamic camera transitions, and immersive sound design.",
    softwareUsed: ["After Effects", "Premiere Pro", "Illustrator"],
    featured: true,
    metrics: {
      views: "Top Showcase",
      retention: "92% Watch Time",
      subscribersGained: "Conversion Optimized"
    }
  },

  // ==========================================
  // 1. RECENT YOUTUBE / LONG-FORM VIDEOS
  // ==========================================
  {
    id: "yt-1",
    title: "High-Retention YouTube Commercial Edit & Narrative Flow",
    client: "Recent Client Project",
    category: "youtube",
    format: "16:9",
    aspectRatio: "16/9",
    thumbnailUrl: "https://img.youtube.com/vi/1gVZK0FRBtY/hqdefault.jpg",
    videoUrl: "https://www.youtube-nocookie.com/embed/1gVZK0FRBtY",
    videoType: "youtube",
    duration: "4K Master",
    views: "Recent Work",
    retentionRate: "78%",
    description: "Fast-paced storytelling, custom motion graphics lower-thirds, sound engineering, and color grading tuned for high audience retention.",
    softwareUsed: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    featured: true,
    metrics: {
      views: "High Engagement",
      retention: "78% Retention",
      subscribersGained: "Channel Growth"
    }
  },
  {
    id: "yt-2",
    title: "Cinematic Video Production & Pacing Breakdown",
    client: "Recent Client Project",
    category: "youtube",
    format: "16:9",
    aspectRatio: "16/9",
    thumbnailUrl: "https://img.youtube.com/vi/czWdvcP8j7c/hqdefault.jpg",
    videoUrl: "https://www.youtube-nocookie.com/embed/czWdvcP8j7c",
    videoType: "youtube",
    duration: "4K Master",
    views: "Recent Work",
    retentionRate: "74%",
    description: "Dynamic rhythm editing with impact hits, seamless cutaways, visual overlays, and audio mastering.",
    softwareUsed: ["Premiere Pro", "After Effects", "Audition"],
    featured: true,
    metrics: {
      views: "Client Deliverable",
      retention: "74% Retention",
      subscribersGained: "Broadcast Quality"
    }
  },
  {
    id: "yt-3",
    title: "Dynamic Storytelling & Visual Effects Showcase",
    client: "Recent Client Project",
    category: "youtube",
    format: "16:9",
    aspectRatio: "16/9",
    thumbnailUrl: "https://img.youtube.com/vi/m3X_C8ZovFw/hqdefault.jpg",
    videoUrl: "https://www.youtube-nocookie.com/embed/m3X_C8ZovFw",
    videoType: "youtube",
    duration: "4K Master",
    views: "Recent Work",
    retentionRate: "72%",
    description: "Creative visual narrative with kinetic typography, seamless zooms, and polished color calibration.",
    softwareUsed: ["Premiere Pro", "After Effects"],
    featured: false,
    metrics: {
      views: "Client Favorite",
      retention: "72% Retention",
      subscribersGained: "100% Approval"
    }
  },
  {
    id: "yt-4",
    title: "Commercial Motion Graphics & Narrative Edit",
    client: "Recent Client Project",
    category: "youtube",
    format: "16:9",
    aspectRatio: "16/9",
    thumbnailUrl: "https://img.youtube.com/vi/CXoAxf3YGAk/hqdefault.jpg",
    videoUrl: "https://www.youtube-nocookie.com/embed/CXoAxf3YGAk",
    videoType: "youtube",
    duration: "4K Master",
    views: "Recent Work",
    retentionRate: "75%",
    description: "Engaging commercial video featuring custom graphic elements, rhythmic cuts, and pristine sound design.",
    softwareUsed: ["Premiere Pro", "After Effects", "Photoshop"],
    featured: false,
  },
  {
    id: "yt-5",
    title: "Product Showcase & Narrative Video Editing",
    client: "Recent Client Project",
    category: "youtube",
    format: "16:9",
    aspectRatio: "16/9",
    thumbnailUrl: "https://img.youtube.com/vi/eqUuX7UoLs8/hqdefault.jpg",
    videoUrl: "https://www.youtube-nocookie.com/embed/eqUuX7UoLs8",
    videoType: "youtube",
    duration: "4K Master",
    views: "Recent Work",
    retentionRate: "70%",
    description: "High-definition visual sequencing with animated callouts, transitions, and audio level mixing.",
    softwareUsed: ["Premiere Pro", "After Effects"],
    featured: false,
  },

  // ==========================================
  // 2. MOTION GRAPHICS & ANIMATION
  // ==========================================
  {
    id: "motion-1",
    title: "3D Motion Graphics & Dynamic Kinetic Animation",
    client: "Motion Design Client",
    category: "motion",
    format: "16:9",
    aspectRatio: "16/9",
    thumbnailUrl: "https://img.youtube.com/vi/8DMkGkYmT0o/hqdefault.jpg",
    videoUrl: "https://www.youtube-nocookie.com/embed/8DMkGkYmT0o",
    videoType: "youtube",
    duration: "Motion Reel",
    views: "Motion Showcase",
    description: "Custom graphic animation sequences, kinetic typography, shape layers, and synchronized sound foley.",
    softwareUsed: ["After Effects", "Illustrator", "Premiere Pro"],
    featured: true,
  },
  {
    id: "motion-2",
    title: "Brand Motion & Vector Animation Sequences",
    client: "Brand Identity Client",
    category: "motion",
    format: "16:9",
    aspectRatio: "16/9",
    thumbnailUrl: "https://img.youtube.com/vi/F1cBqWIYhLw/hqdefault.jpg",
    videoUrl: "https://www.youtube-nocookie.com/embed/F1cBqWIYhLw",
    videoType: "youtube",
    duration: "Animation",
    views: "Creative Edit",
    description: "Smooth vector animations, character easing, isometric transitions, and brand identity motion.",
    softwareUsed: ["After Effects", "Illustrator"],
    featured: true,
  },

  // ==========================================
  // 3. AI VIDEO & GENERATIVE VISUALS
  // ==========================================
  {
    id: "ai-1",
    title: "Next-Gen AI Video Production & Visual Storytelling",
    client: "AI Creative Lab",
    category: "ai",
    format: "16:9",
    aspectRatio: "16/9",
    thumbnailUrl: "https://img.youtube.com/vi/yf3bxNF6T9Y/hqdefault.jpg",
    videoUrl: "https://www.youtube-nocookie.com/embed/yf3bxNF6T9Y",
    videoType: "youtube",
    duration: "AI Generated",
    views: "AI Showcase",
    retentionRate: "88%",
    description: "Generative AI video sequences synthesized with precision camera motion, character consistency, and sound design.",
    softwareUsed: ["Runway Gen-3", "Midjourney", "After Effects", "Topaz AI"],
    featured: true,
  },
  {
    id: "ai-2",
    title: "AI-Enhanced Cinematic Visuals & Dynamic Grading",
    client: "Creative Studio",
    category: "ai",
    format: "16:9",
    aspectRatio: "16/9",
    thumbnailUrl: "https://img.youtube.com/vi/gKyYzNtlWhw/hqdefault.jpg",
    videoUrl: "https://www.youtube-nocookie.com/embed/gKyYzNtlWhw",
    videoType: "youtube",
    duration: "AI Visuals",
    views: "Trending",
    retentionRate: "85%",
    description: "Blending generative AI scenes with human post-production polishing, color grading, and audio layering.",
    softwareUsed: ["Runway", "After Effects", "Premiere Pro"],
    featured: true,
  },
  {
    id: "ai-3",
    title: "AI Visual Narrative & Motion Exploration",
    client: "Generative Media Project",
    category: "ai",
    format: "16:9",
    aspectRatio: "16/9",
    thumbnailUrl: "https://img.youtube.com/vi/eSJHshxZ-B4/hqdefault.jpg",
    videoUrl: "https://www.youtube-nocookie.com/embed/eSJHshxZ-B4",
    videoType: "youtube",
    duration: "AI Concept",
    views: "Viral AI",
    retentionRate: "82%",
    description: "Futuristic generative concept video with fluid transitions, ambient soundscapes, and cinematic atmosphere.",
    softwareUsed: ["Midjourney", "Runway", "After Effects"],
    featured: false,
  },

  // ==========================================
  // 4. SHORTS & REELS (9:16 VERTICAL VIRAL EDITS)
  // ==========================================
  {
    id: "short-1",
    title: "Viral Hook Short: Dynamic Cut & Kinetic Captions",
    client: "Reels / Shorts Creator",
    category: "reels",
    format: "9:16",
    aspectRatio: "9/16",
    thumbnailUrl: "https://img.youtube.com/vi/QD-m6bs8usw/hqdefault.jpg",
    videoUrl: "https://www.youtube-nocookie.com/embed/QD-m6bs8usw",
    videoType: "youtube",
    duration: "0:30",
    views: "Viral Short",
    retentionRate: "115%",
    description: "High-energy 9:16 vertical short with animated subtitles, sound effects, punch zooms, and loop outro.",
    softwareUsed: ["Premiere Pro", "After Effects", "CapCut Pro"],
    featured: true,
  },
  {
    id: "short-2",
    title: "Retention Hook Reel: Fast-Paced Visual Flow",
    client: "Reels / Shorts Creator",
    category: "reels",
    format: "9:16",
    aspectRatio: "9/16",
    thumbnailUrl: "https://img.youtube.com/vi/g2osnJaVLmY/hqdefault.jpg",
    videoUrl: "https://www.youtube-nocookie.com/embed/g2osnJaVLmY",
    videoType: "youtube",
    duration: "0:25",
    views: "Trending",
    retentionRate: "108%",
    description: "Engineered for maximum viewer retention with dynamic captions, sound design, and pattern interrupts.",
    softwareUsed: ["Premiere Pro", "After Effects"],
    featured: true,
  },
  {
    id: "short-3",
    title: "Viral Short-Form Motion Graphics & B-Roll Overlay",
    client: "Social Media Client",
    category: "reels",
    format: "9:16",
    aspectRatio: "9/16",
    thumbnailUrl: "https://img.youtube.com/vi/qcxFd55vm5M/hqdefault.jpg",
    videoUrl: "https://www.youtube-nocookie.com/embed/qcxFd55vm5M",
    videoType: "youtube",
    duration: "0:35",
    views: "Viral Edit",
    retentionRate: "112%",
    description: "Multi-layered visual hooks with sound effects, dynamic zooms, and animated emoji highlights.",
    softwareUsed: ["After Effects", "CapCut Pro"],
    featured: true,
  },
  {
    id: "short-4",
    title: "High-Engagement Short-Form Video Edit",
    client: "Creator Studio",
    category: "reels",
    format: "9:16",
    aspectRatio: "9/16",
    thumbnailUrl: "https://img.youtube.com/vi/mPBhjBzEVBw/hqdefault.jpg",
    videoUrl: "https://www.youtube-nocookie.com/embed/mPBhjBzEVBw",
    videoType: "youtube",
    duration: "0:40",
    views: "Top Reel",
    retentionRate: "104%",
    description: "Crafted for TikTok & YouTube Shorts algorithms with retention-focused editing techniques.",
    softwareUsed: ["Premiere Pro", "After Effects"],
    featured: false,
  },
  {
    id: "short-5",
    title: "Viral Retention Reel: Story & Sound Sync",
    client: "Content Creator",
    category: "reels",
    format: "9:16",
    aspectRatio: "9/16",
    thumbnailUrl: "https://img.youtube.com/vi/35CkS0kSEOE/hqdefault.jpg",
    videoUrl: "https://www.youtube-nocookie.com/embed/35CkS0kSEOE",
    videoType: "youtube",
    duration: "0:30",
    views: "Viral Cut",
    retentionRate: "110%",
    description: "Frame-by-frame rhythm sync with sound effects, whooshes, risers, and vibrant subtitles.",
    softwareUsed: ["Premiere Pro", "After Effects"],
    featured: false,
  },
  {
    id: "short-6",
    title: "Dynamic Social Media Short & Motion Effects",
    client: "Social Brand",
    category: "reels",
    format: "9:16",
    aspectRatio: "9/16",
    thumbnailUrl: "https://img.youtube.com/vi/k_7xVzStr14/hqdefault.jpg",
    videoUrl: "https://www.youtube-nocookie.com/embed/k_7xVzStr14",
    videoType: "youtube",
    duration: "0:28",
    views: "Trending",
    retentionRate: "106%",
    description: "Eye-catching visual pacing, color grading, and custom text animation for social feeds.",
    softwareUsed: ["CapCut Pro", "Premiere Pro"],
    featured: false,
  },
  {
    id: "short-7",
    title: "Viral Short Cut: Hormozi / Vox Style Pacing",
    client: "Personal Brand",
    category: "reels",
    format: "9:16",
    aspectRatio: "9/16",
    thumbnailUrl: "https://img.youtube.com/vi/QYaJn9N2X2Q/hqdefault.jpg",
    videoUrl: "https://www.youtube-nocookie.com/embed/QYaJn9N2X2Q",
    videoType: "youtube",
    duration: "0:32",
    views: "Viral Short",
    retentionRate: "114%",
    description: "Retention masterclass with kinetic typography, seamless cutaways, and Foley sound design.",
    softwareUsed: ["Premiere Pro", "After Effects"],
    featured: false,
  },
  {
    id: "short-8",
    title: "High-Energy Reel: Micro-Transitions & Zoom Cuts",
    client: "Creator Channel",
    category: "reels",
    format: "9:16",
    aspectRatio: "9/16",
    thumbnailUrl: "https://img.youtube.com/vi/WUDg7Dwg-jc/hqdefault.jpg",
    videoUrl: "https://www.youtube-nocookie.com/embed/WUDg7Dwg-jc",
    videoType: "youtube",
    duration: "0:34",
    views: "Trending Reel",
    retentionRate: "109%",
    description: "Seamless transitions between talking head footage, screen recordings, and cinematic b-roll.",
    softwareUsed: ["Premiere Pro", "After Effects"],
    featured: false,
  },
  {
    id: "short-9",
    title: "Viral TikTok / Reel: Sound Design & Visual Hooks",
    client: "Growth Creator",
    category: "reels",
    format: "9:16",
    aspectRatio: "9/16",
    thumbnailUrl: "https://img.youtube.com/vi/rmZ3SXwzXJM/hqdefault.jpg",
    videoUrl: "https://www.youtube-nocookie.com/embed/rmZ3SXwzXJM",
    videoType: "youtube",
    duration: "0:42",
    views: "Viral Hook",
    retentionRate: "116%",
    description: "Crafted to prevent swipe-aways in the first 2 seconds with punchy audio and bold text callouts.",
    softwareUsed: ["CapCut Pro", "Premiere Pro", "After Effects"],
    featured: false,
  }
];

export const BEFORE_AFTER_DATA: BeforeAfterPair[] = [
  {
    id: "ba-1",
    title: "Cinematic Color Grade & Dynamic Graphics",
    subtitle: "Flat RAW Log Footage vs Final Commercial Master",
    rawImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=50&sat=-100&con=0",
    editedImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=90",
    details: "Custom DaVinci color grading, film grain emulation, dynamic animated lower-thirds, glow effects, and multi-track Foley sound design."
  },
  {
    id: "ba-2",
    title: "Talking Head Retention Transformation",
    subtitle: "Dull Stationary Shot vs High-Engagement Master",
    rawImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=50&sat=-80",
    editedImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=90",
    details: "Digital multi-cam punch zooms, animated charts, kinetic typography, b-roll overlays, and acoustic vocal cleanup."
  }
];

export const EDITING_TOOLKIT = [
  { name: "Adobe Premiere Pro", category: "NLE / Editing", icon: "Pr", color: "from-purple-600 to-indigo-700" },
  { name: "After Effects", category: "VFX & Motion", icon: "Ae", color: "from-indigo-600 to-purple-800" },
  { name: "DaVinci Resolve", category: "Color Grading", icon: "Dr", color: "from-rose-500 to-red-700" },
  { name: "Runway Gen-3", category: "Generative AI", icon: "Rw", color: "from-cyan-500 to-blue-600" },
  { name: "Midjourney v6", category: "AI Visuals", icon: "Mj", color: "from-emerald-500 to-teal-700" },
  { name: "CapCut Pro", category: "Viral Subtitles", icon: "Cc", color: "from-slate-700 to-slate-900" },
  { name: "Adobe Illustrator", category: "Vector Assets", icon: "Ai", color: "from-amber-600 to-orange-700" },
  { name: "Adobe Audition", category: "Sound Design", icon: "Au", color: "from-emerald-600 to-green-700" },
];

export const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Ingestion & Retention Hook",
    description: "Analyzing raw footage to craft an irresistible 3-5 second hook that stops the scroll and keeps drop-off rates near zero.",
    icon: "Target"
  },
  {
    step: "02",
    title: "Narrative Pacing & Rough Cut",
    description: "Removing dead air, stutters, and rambling. Constructing a tight narrative rhythm that keeps viewers locked in from start to finish.",
    icon: "Scissors"
  },
  {
    step: "03",
    title: "Motion Graphics & UI Animation",
    description: "Custom SaaS mockups, kinetic text, lower-thirds, and visual metaphors that illustrate ideas clearly and memorably.",
    icon: "Layers"
  },
  {
    step: "04",
    title: "Hollywood Sound Design & Grade",
    description: "Layering 80+ Foley effects (whooshes, risers, impacts, sub-drops) with filmic color grading and vocal frequency mastering.",
    icon: "Volume2"
  },
  {
    step: "05",
    title: "4K Master Delivery & Revisions",
    description: "Delivered via Frame.io for timestamped feedback, fast revisions, and high-bitrate export ready for YouTube and social media.",
    icon: "CheckCircle2"
  }
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: "pkg-shorts",
    title: "Viral Short-Form Pack",
    subtitle: "TikTok, Reels & YouTube Shorts (9:16)",
    priceTag: "Starting at $50 / video",
    deliveryTime: "24-48 Hours",
    popular: true,
    badge: "Most Popular",
    bestFor: "Creators and brands scaling TikTok, Instagram Reels, and YouTube Shorts",
    features: [
      "Dynamic Hormozi / Vox-style kinetic captions",
      "Custom sound design with Foley, risers & trending tracks",
      "Punch-in zooms, motion tracking & emoji callouts",
      "Custom cover frame / thumbnail concept included",
      "Engineered for 100%+ viewer retention loops",
      "Unlimited quick revisions until you love it"
    ]
  },
  {
    id: "pkg-youtube",
    title: "YouTube Flagship Long-Form",
    subtitle: "Complete 10-25 Min Video Production (16:9)",
    priceTag: "Starting at $180 / video",
    deliveryTime: "3-5 Business Days",
    popular: false,
    badge: "High-Retention",
    bestFor: "YouTubers, SaaS founders, educators, and video podcasters",
    features: [
      "Multi-camera sync & precision pacing assembly",
      "Custom After Effects motion graphics & lower-thirds",
      "Audio cleanup & multi-track sound engineering",
      "Cinematic color grading (Rec.709 / Film emulation)",
      "Curated copyright-safe music licensing",
      "Dedicated Frame.io review link"
    ]
  },
  {
    id: "pkg-custom",
    title: "SaaS Animation & AI Visuals",
    subtitle: "Product Launch Videos, 2D/3D Motion & AI",
    priceTag: "Custom Quote",
    deliveryTime: "Tailored to Scope",
    popular: false,
    badge: "Premium Quality",
    bestFor: "Tech startups, SaaS companies, and brands launching products",
    features: [
      "SaaS product explainer & UI screen animations",
      "Generative AI video scenes (Runway Gen-3, Midjourney)",
      "Custom 2D/3D vector motion graphics (After Effects)",
      "Sound design & voiceover synchronization",
      "4K ProRes & web-optimized exports",
      "Direct WhatsApp / Slack collaboration"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "Alex Vance",
    role: "Tech YouTuber (1.2M Subscribers)",
    channelOrCompany: "FutureTech",
    avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
    content: "Pervez completely elevated our channel's production quality. Our average view duration jumped from 39% to 72% within the first month. Fast turnaround and incredible attention to detail.",
    metricBadge: "+3.8M Views in 45 Days"
  },
  {
    id: "t-2",
    name: "Sarah Jenkins",
    role: "Founder & CMO",
    channelOrCompany: "CloudScale SaaS",
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    content: "The SaaS product animation Pervez created for our launch page was a game-changer. Conversions increased by 44% immediately. His motion graphics are clean, modern, and punchy.",
    metricBadge: "+44% Sign-Up Rate"
  },
  {
    id: "t-3",
    name: "Ryan Carter",
    role: "Content Creator",
    channelOrCompany: "GrowthPulse",
    avatarUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&q=80",
    content: "Pervez is my secret weapon for Reels and Shorts. The retention hooks and sound effects make every video feel like it was produced by a high-end agency. 10/10 recommended!",
    metricBadge: "1.4M Viral Views"
  }
];

export const FAQS = [
  {
    q: "How do I send you raw footage and project files?",
    a: "You can send files via Google Drive, Dropbox, WeTransfer, or Frame.io. Once we start working together, I provide a shared private cloud folder."
  },
  {
    q: "How does the revision process work?",
    a: "We review cuts through Frame.io, where you can leave timestamped comments directly on the video screen. Quick tweaks and adjustments are included until you are 100% satisfied."
  },
  {
    q: "Can you create both SaaS product animations and YouTube videos?",
    a: "Yes! I specialize in both high-retention YouTube storytelling and clean SaaS product motion graphics. Many clients also have me repurpose long-form videos into viral 9:16 Shorts/Reels."
  },
  {
    q: "Where do you get music and sound effects?",
    a: "I use licensed commercial libraries (Artlist, Epidemic Sound, and private Foley packs), guaranteeing zero copyright strikes on YouTube, Meta, or TikTok."
  },
  {
    q: "What is your typical turnaround time?",
    a: "Reels and Shorts: 24 to 48 hours. Long-form YouTube edits: 3 to 5 business days depending on length and complexity."
  }
];
