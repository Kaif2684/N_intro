export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export type Skill = {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'ml' | 'Web 3.0';
};


export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}