export type VideoCategory = 'all' | 'youtube' | 'reels' | 'motion' | 'ai';
export type VideoFormat = '16:9' | '9:16';

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: 'youtube' | 'reels' | 'motion' | 'ai';
  format: VideoFormat;
  thumbnailUrl: string;
  /** Direct MP4 video preview URL or YouTube Embed URL */
  videoUrl: string;
  /** Whether the video is hosted on YouTube or direct MP4 */
  videoType: 'youtube' | 'mp4';
  duration?: string;
  views?: string;
  retentionRate?: string;
  description: string;
  softwareUsed: string[];
  featured?: boolean;
  aspectRatio: string;
  metrics?: {
    views?: string;
    watchTime?: string;
    retention?: string;
    subscribersGained?: string;
  };
}

export interface ServicePackage {
  id: string;
  title: string;
  subtitle: string;
  priceTag: string;
  deliveryTime: string;
  popular?: boolean;
  features: string[];
  bestFor: string;
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  channelOrCompany: string;
  avatarUrl: string;
  subscriberCount?: string;
  content: string;
  metricBadge?: string;
}

export interface BeforeAfterPair {
  id: string;
  title: string;
  subtitle: string;
  rawImage: string;
  editedImage: string;
  details: string;
}
