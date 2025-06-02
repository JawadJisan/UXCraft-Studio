# UXCraft Studio - Professional Video Production Website

A modern, responsive website for UXCraft Studio, a professional video editing and production company. Built with React, TypeScript, and Tailwind CSS, featuring smooth animations, modern design, and comprehensive portfolio showcase.

## 🌟 Features

### Core Sections
- **Hero Section** - Video background with compelling introduction
- **About Video** - Dedicated video section showcasing studio capabilities
- **Name & Info** - Studio introduction and key information
- **Services** - Comprehensive list of video production services
- **Portfolio** - Showcase of completed projects
- **Reels** - Short-form video content gallery
- **Documentary** - Documentary work showcase
- **AI Project Visualizer** - Interactive project visualization
- **About Us** - Detailed company information
- **Testimonials** - Client reviews and feedback
- **Contact Form** - Professional contact interface
- **Footer** - Complete site navigation and social links

### Technical Features
- **Responsive Design** - Optimized for all device sizes
- **Smooth Scrolling** - Enhanced navigation experience
- **Loading Animation** - Professional loading screen
- **Active Section Tracking** - Dynamic navigation highlighting
- **Mobile-First Design** - Progressive enhancement approach
- **Modern UI Components** - Built with shadcn/ui
- **Gradient Animations** - Beautiful visual effects
- **Social Media Integration** - Direct links to all platforms

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3.1
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **State Management**: React Hooks
- **Animations**: CSS Transitions & Transforms

## 📦 Dependencies

### Core Dependencies
- React & React DOM
- TypeScript
- Tailwind CSS
- React Router DOM
- Lucide React (Icons)
- shadcn/ui Components
- Vite (Build Tool)

### UI & Styling
- class-variance-authority
- clsx
- tailwind-merge
- tailwindcss-animate

### Additional Libraries
- @tanstack/react-query (Data Fetching)
- React Hook Form (Form Management)
- Zod (Schema Validation)
- Date-fns (Date Utilities)
- Recharts (Charts/Analytics)

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone <your-repository-url>
cd uxcraft-studio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
Navigate to `http://localhost:8080`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Site footer
│   ├── VideoHero.tsx       # Hero video section
│   ├── AboutVideo.tsx      # About video component
│   ├── NameAndInfo.tsx     # Studio information
│   ├── Services.tsx        # Services showcase
│   ├── Portfolio.tsx       # Project portfolio
│   ├── Reels.tsx          # Video reels gallery
│   ├── Documentary.tsx     # Documentary showcase
│   ├── AboutUs.tsx        # Company information
│   ├── Testimonials.tsx   # Client testimonials
│   ├── ContactForm.tsx    # Contact interface
│   └── AIProjectVisualizer.tsx # Interactive visualizer
├── pages/
│   ├── Index.tsx          # Main page component
│   └── NotFound.tsx       # 404 error page
├── hooks/
│   ├── use-mobile.tsx     # Mobile detection hook
│   └── use-toast.ts       # Toast notifications
├── lib/
│   └── utils.ts           # Utility functions
├── App.tsx                # Main application component
├── main.tsx              # Application entry point
└── index.css             # Global styles
```

## 🎨 Design System

### Color Palette
- **Primary**: Studio Purple (`#8b5cf6`)
- **Secondary**: Studio Blue (`#3b82f6`)
- **Background**: Dark theme with gradient overlays
- **Text**: White with gray variations for hierarchy

### Typography
- **Headings**: Orbitron font family
- **Body Text**: Inter font family
- **Gradients**: Purple to blue transitions

### Components
- Custom gradient buttons
- Animated loading states
- Responsive navigation
- Modern card layouts
- Interactive hover effects

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1400px

## 🌐 Social Media Integration

The website includes direct links to:
- YouTube: [UXCraft Studio Channel](https://www.youtube.com/channel/UCzHSHT9GjgiIwv9HY4uiEyg)
- Facebook: [UXCraft Studio](https://www.facebook.com/uxcraftstudio)
- Twitter: [Faysal Amin](https://x.com/FaysalAmin75496)
- LinkedIn: [UXCraft Studio](https://www.linkedin.com/company/uxcraft-studio)

## 📞 Contact Information

- **Email**: uxcraftstudio936@gmail.com
- **Phone**: +880 1986 483724
- **WhatsApp**: +880 1986 483724
- **Location**: Dhaka, Bangladesh

## 🎬 Services Offered

- Video Editing
- Color Grading
- Motion Graphics
- Audio Post-Production
- 3D Animation
- Documentary Editing

## 🔧 Development Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## 📝 Environment Variables

Create a `.env` file in the root directory for any environment-specific configurations:

```env
VITE_API_URL=your_api_url_here
VITE_CONTACT_EMAIL=uxcraftstudio936@gmail.com
```

## 🚀 Deployment

This project can be deployed on various platforms:

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push to main branch

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### Other Platforms
The built files in the `dist` directory can be deployed to any static hosting service.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is proprietary and belongs to UXCraft Studio. All rights reserved.

## 👨‍💻 Development Team

- **Developer**: UXCraft Studio Team
- **Design**: UXCraft Studio
- **Contact**: uxcraftstudio936@gmail.com

## 🔄 Updates & Maintenance

- Regular dependency updates
- Performance optimizations
- New feature additions based on client feedback
- SEO improvements
- Accessibility enhancements

---

**UXCraft Studio** - Transforming your vision into stunning visual stories that captivate audiences and elevate your brand through professional video editing and animation.

For support or inquiries, please contact us at uxcraftstudio936@gmail.com or call +880 1986 483724.
