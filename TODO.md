# Blog Migration TODO List

## Phase 1: Vertical Slice - Single Post + All Pages Structure

### 🎯 Goal: Get one blog post (diabetes post) fully working with all page templates

---

## 1. Project Setup & Dependencies ✅ **MILESTONE: Basic Next.js App Runs** ✅ COMPLETED
- [x] Initialize Next.js 14 project with App Router
- [x] Install core dependencies:
  - [x] `@next/mdx` or `next-mdx-remote` for MDX processing
  - [x] `gray-matter` for frontmatter parsing
  - [x] `styled-components` for styling
  - [x] `react-icons` for icons
- [x] Install blog-specific dependencies:
  - [x] `firebase` for interactive features
  - [x] `react-minimal-pie-chart` for polls
  - [x] `react-player` for YouTube embeds
  - [x] `aos` for animations
  - [x] `react-share` for social sharing
- [x] Configure `next.config.js` for MDX and styled-components
- [x] Set up TypeScript with enhanced configuration and type definitions

**🟢 CHECKPOINT: `npm run dev` works, shows default Next.js page** ✅ WORKING
**🟢 TypeScript configured with strict settings and blog-specific types** ✅ WORKING

---

## 2. Basic App Structure ⚠️ **Skeleton Site (Empty Pages)**
- [ ] Create `app/` directory structure:
  - [ ] `app/layout.js` - Root layout
  - [ ] `app/page.js` - Homepage
  - [ ] `app/blog/[slug]/page.js` - Individual blog posts
  - [ ] `app/about/page.js` - About page
  - [ ] `app/contact/page.js` - Contact page
  - [ ] `app/books/page.js` - Books page
  - [ ] `app/trips/page.js` - Trips page
  - [ ] `app/404.js` - 404 page

**🟡 CHECKPOINT: Site runs, all pages accessible but mostly empty**

---

## 3. Content Setup ⚠️ **Content Ready (Not Yet Rendered)**
- [ ] Create `content/` directory
- [ ] Copy diabetes post from `old_blog/src/posts/2024/diabetes/`
  - [ ] Copy `_diabetes.mdx` → `content/diabetes.mdx`
  - [ ] Copy all images to `public/images/diabetes/`
- [ ] Create `lib/posts.js` utility functions:
  - [ ] `getPostBySlug(slug)` - Get single post
  - [ ] `getAllPosts()` - Get all posts (for later)
  - [ ] `parsePostContent(content)` - Parse MDX with frontmatter

**🔴 CHECKPOINT: Content exists but not yet displayed**

---

## 4. Core Components Migration ⚠️ **Components Ready (Not Yet Integrated)**
- [ ] Create `components/` directory
- [ ] Copy and adapt core layout components:
  - [ ] `Layout.js` - Main layout wrapper
  - [ ] `Header.js` - Site header with navigation
  - [ ] `Footer.js` - Site footer
  - [ ] `Seo.js` - SEO/meta tags component
- [ ] Copy and adapt blog-specific components:
  - [ ] `blog/Mdx.js` - MDX renderer with custom components
  - [ ] `blog/BlogImage.js` - Image component
  - [ ] `blog/YouTube.js` - YouTube embed
  - [ ] `blog/Poll.js` - Interactive poll (Firebase)
  - [ ] `blog/TextBox.js` - Text boxes
  - [ ] `blog/Text.js` - Text utilities (Dialogue, etc.)

**🔴 CHECKPOINT: Components exist but may have import errors**

---

## 5. Styling Setup ⚠️ **Styling Ready**
- [ ] Configure styled-components with Next.js
- [ ] Copy theme configuration from old blog
- [ ] Create global styles
- [ ] Ensure responsive design works
- [ ] Copy and adapt component styles

**🔴 CHECKPOINT: Styling configured but not yet applied to content**

---

## 6. Single Post Implementation ✅ **MILESTONE: First Fully Functional Feature**
- [ ] Implement `app/blog/[slug]/page.js`:
  - [ ] `generateStaticParams()` for static generation
  - [ ] `generateMetadata()` for SEO
  - [ ] Post rendering with MDX
- [ ] Test diabetes post renders correctly:
  - [ ] Frontmatter parsing works
  - [ ] Images display properly
  - [ ] Custom components render (YouTube, Poll, TextBox)
  - [ ] Styling matches original
  - [ ] Interactive features work (Firebase polls)

**🟢 CHECKPOINT: `/blog/diabetes` works perfectly with all features**

---

## 7. Homepage Implementation ✅ **MILESTONE: Core Site Functional**
- [ ] Create basic homepage structure
- [ ] Implement featured post section (diabetes post)
- [ ] Add placeholder sections for:
  - [ ] Latest posts slider
  - [ ] Category-based sliders
  - [ ] Random posts
- [ ] Ensure homepage links to diabetes post

**🟢 CHECKPOINT: Homepage + diabetes post = functional blog**

---

## 8. Static Pages Implementation ✅ **MILESTONE: Complete Site Structure**
- [ ] Implement About page (copy content from old blog)
- [ ] Implement Contact page
- [ ] Implement Books page (basic structure)
- [ ] Implement Trips page (basic structure)
- [ ] Implement 404 page

**🟢 CHECKPOINT: All pages work, complete site navigation**

---

## 9. Navigation & Routing ✅ **MILESTONE: Professional Site**
- [ ] Implement main navigation menu
- [ ] Ensure all pages are accessible
- [ ] Add breadcrumbs for blog posts
- [ ] Test internal linking works

**🟢 CHECKPOINT: Fully navigable professional site**

---

## 10. Testing & Polish ✅ **MILESTONE: Production Ready**
- [ ] Test responsive design on mobile/tablet
- [ ] Verify all images load correctly
- [ ] Test Firebase integration (polls, reactions)
- [ ] Check performance with Lighthouse
- [ ] Verify SEO meta tags
- [ ] Test social sharing functionality

**🟢 CHECKPOINT: Production-ready vertical slice**

---

## Phase 1 Success Criteria ✅
- [ ] Diabetes post renders perfectly with all features
- [ ] All static pages exist and are navigable
- [ ] Homepage shows featured post
- [ ] Interactive features work (polls, YouTube)
- [ ] Styling matches original design
- [ ] Site is fully responsive
- [ ] Performance is good (Lighthouse score >90)

---

## Phase 2: Full Content Migration (After Phase 1)
- [ ] Migrate all posts from 2024
- [ ] Migrate posts from 2023, 2022, etc.
- [ ] Implement pagination
- [ ] Implement category filtering
- [ ] Implement search functionality
- [ ] Add RSS feed
- [ ] Optimize build performance

---

## Notes
- Focus on getting ONE post perfect before scaling
- Use the diabetes post as it has most complex features (polls, images, custom components)
- Don't worry about GraphQL - use simple file reading
- Prioritize functionality over perfect styling initially
- Test each component as you migrate it

---

## Quick Start Commands
```bash
# Create Next.js project
npx create-next-app@latest new_blog --app --typescript --tailwind --eslint

# Install dependencies
npm install @next/mdx gray-matter styled-components react-icons firebase react-minimal-pie-chart react-player aos react-share

# Start development
npm run dev
```

---

## 🎯 **Key Runnable Milestones Summary:**

1. **After Section 1**: Basic Next.js app runs
2. **After Section 6**: Diabetes post works perfectly 
3. **After Section 7**: Homepage + blog post = functional blog
4. **After Section 10**: Complete production-ready site

**Recommendation**: Work in chunks through Section 6 for first major milestone! 