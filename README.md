# MT International - Company Website

A modern, responsive company website built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Purple gradient theme with glassmorphism effects
- **Responsive**: Works perfectly on all devices
- **Fast Performance**: Built with Next.js 15 for optimal speed
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Interactive**: Smooth animations and micro-interactions
- **Accessible**: ARIA labels and keyboard navigation support

## 📋 Pages

- **Homepage**: Hero section, company stats, services preview, testimonials
- **About**: Team information, company values, interactive stats
- **Services**: Detailed service offerings with individual pages
- **Blog**: Tech articles and insights
- **Contact**: Contact form with EmailJS integration

## 🛠️ Tech Stack

- **Framework**: Next.js 15.2.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Animations**: Framer Motion
- **Email Service**: EmailJS
- **Icons**: Lucide React
- **Charts**: Recharts

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd NCompanyWebsite
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your EmailJS configuration:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
NCompanyWebsite/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── blog/              # Blog pages
│   ├── contact/           # Contact page
│   ├── services/          # Services pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── ui/               # Shadcn/ui components
│   ├── header.tsx        # Navigation header
│   ├── footer.tsx        # Site footer
│   └── ...               # Other components
├── public/               # Static assets
│   ├── images/           # Image files
│   └── ...               # Other assets
├── lib/                  # Utility functions
└── styles/               # Additional styles
```

## 🎨 Customization

### Colors
The primary color scheme uses purple gradients. You can customize colors in:
- `tailwind.config.ts` - Tailwind configuration
- `app/globals.css` - CSS custom properties

### Content
- **Team Members**: Update `components/team-section.tsx`
- **Services**: Modify `app/services/[slug]/page.tsx`
- **Blog Posts**: Edit `app/blog/[slug]/page.tsx`

## 📧 Email Integration

The contact form uses EmailJS for sending emails. To set up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a service (Gmail, Outlook, etc.)
3. Create an email template
4. Add your credentials to `.env.local`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm start
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is private and proprietary to MT International.

## 📞 Contact

- **Email**: mtinternational139@gmail.com
- **Phone**: +92 (301) 021-9324
- **Location**: Karachi, Pakistan

---

Built with ❤️ by the MT International team
