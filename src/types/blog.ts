// Blog post frontmatter structure
export interface BlogPostFrontmatter {
  path: string;
  date: string;
  formattedDate?: string;
  title: string;
  subTitle: string;
  author: string;
  cardImage: string;
  featureImage: string;
  featureImagePhone?: string;
  onHover?: string;
  hashtags: string;
  hidden: boolean;
}

// Complete blog post structure
export interface BlogPost {
  slug: string;
  frontmatter: BlogPostFrontmatter;
  content: string;
  excerpt: string;
}

// Theme structure for styled-components
export interface Theme {
  bgColor: string;
  textColor: string;
  accentColor: string;
  post: {
    link: {
      color: string;
      visited: string;
      hover: string;
    };
  };
}

// Poll data structure
export interface PollData {
  id: string;
  question: string;
  answers: string[];
  labels?: string[];
}

// Navigation menu item
export interface MenuItem {
  label: string;
  href: string;
  external?: boolean;
}

// SEO metadata
export interface SEOData {
  title: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

// Page props for blog pages
export interface BlogPageProps {
  post: BlogPost;
}

export interface HomePageProps {
  posts: BlogPost[];
  featuredPost: BlogPost;
}

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
} 