# Alex Dee Media - Portfolio Website

A premium, modern portfolio website for Alex Dee Media, a professional photography and videography brand based in Ibadan, Nigeria.

## 🎨 Features

- **Cinematic Hero Section** - Full-screen hero with background image and smooth animations
- **About Section** - Professional portrait and brand story
- **Portfolio Gallery** - Filterable grid with categories (Photography, Video, Brand Campaigns, Social Content)
- **Portfolio Modal** - Full-screen modal for detailed project views
- **Services Section** - 8 professional services with icon cards
- **Testimonials Slider** - Auto-rotating client testimonials
- **Contact Form** - Functional contact form with validation
- **Responsive Design** - Mobile-first, optimized for all devices
- **Smooth Animations** - Framer Motion scroll animations and hover effects
- **SEO Optimized** - Meta tags, semantic HTML, and accessibility features

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Fonts**: Playfair Display (serif), Inter (sans-serif)
- **Deployment**: Railway (Docker)

## 🎨 Design System

### Colors
- **Charcoal**: `#0F1115` - Primary dark
- **Off-white**: `#F5F5F5` - Primary light
- **Warm Gray**: `#B3B3B3` - Secondary
- **Gold**: `#C7A25B` - Accent

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Alex_website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm start
```

## 📦 Deployment

### Railway Deployment

This project is configured for Railway deployment with Docker.

1. **Connect to Railway**
   - Create a new project on [Railway](https://railway.app)
   - Connect your GitHub repository
   - Railway will automatically detect the `Dockerfile`

2. **Environment Variables** (Optional)
   - Copy `.env.example` to `.env`
   - Add any required environment variables in Railway dashboard

3. **Deploy**
   - Railway will automatically build and deploy
   - Your site will be live at the provided Railway URL

### Manual Docker Build

```bash
# Build the image
docker build -t alex-dee-media .

# Run the container
docker run -p 3000:3000 alex-dee-media
```

## 📁 Project Structure

```
Alex_website/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx            # Root layout with fonts & metadata
│   └── page.tsx              # Main page
├── components/
│   ├── Navigation.tsx        # Header navigation
│   ├── Hero.tsx              # Hero section
│   ├── About.tsx             # About section
│   ├── Portfolio.tsx         # Portfolio grid
│   ├── PortfolioModal.tsx    # Portfolio modal
│   ├── Services.tsx          # Services section
│   ├── Testimonials.tsx      # Testimonials slider
│   ├── Contact.tsx           # Contact form
│   └── Footer.tsx            # Footer
├── public/
│   └── images/               # All images
├── tailwind.config.ts        # Tailwind configuration
├── next.config.js            # Next.js configuration
├── Dockerfile                # Docker configuration
├── railway.json              # Railway configuration
└── package.json              # Dependencies
```

## 🎯 Key Sections

### Navigation
- Sticky header with scroll effect
- Mobile hamburger menu
- Smooth scroll to sections

### Hero
- Full-viewport cinematic design
- Animated headline and CTAs
- Scroll indicator

### Portfolio
- Category filtering (All, Photography, Video, Brand Campaigns, Social Content)
- Hover effects with zoom and brightness
- Click to open modal with full details

### Services
8 professional services:
- Commercial Photography
- Brand Videos
- Social Media Content
- Creative Direction
- Photo Editing & Retouching
- Old Photo Restoration
- Video Editing
- Prints & Souvenirs

### Contact
- Form validation
- Contact information
- Social media links (Instagram, WhatsApp, Email)

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance

- Next.js Image optimization
- Lazy loading for images
- Framer Motion optimizations
- Lighthouse score target: > 90

## 📞 Contact Information

- **Location**: Ibadan, Nigeria
- **Phone**: +234 701 708 6970 / +234 810 510 5364
- **Email**: aduragbemiadeyemo1@gmail.com
- **Instagram**: [@alex_deeimage](https://instagram.com/alex_deeimage)

## 📄 License

MIT License - feel free to use this project as a template for your own portfolio.

## 🙏 Credits

**Design & Development**: Built with modern web technologies
**Photography**: Alex Dee Media
**Brand**: Aduragbemi - Alex Dee Media

---

**Alex Dee Media** - *Where memories become masterpieces* 📸
