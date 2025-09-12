# Modern Portfolio

A modern, responsive portfolio website built with **Astro**, **React**, and **Tailwind CSS**.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Astro for optimal loading speeds
- **Interactive**: React components for dynamic user interactions
- **Animations**: Beautiful CSS animations and hover effects
- **Sections Included**:
  - Hero/Landing section with personal introduction
  - About section with skills and personal information
  - Projects showcase with live demos and GitHub links
  - Work Experience timeline
  - Education and Certifications
  - Contact form with social media links

## 🛠️ Tech Stack

- **Astro** - Static site generator
- **React** - UI components
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animations (ready to integrate)

## 🏗️ Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── astro.config.mjs
├── package.json
├── tailwind.config.cjs
└── tsconfig.json
```

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## 🎨 Customization

### Personal Information
Update the following components with your personal information:

- **Hero.tsx**: Update name, title, and description
- **About.tsx**: Update bio, skills, and personal image
- **Projects.tsx**: Replace with your actual projects
- **Experience.tsx**: Add your work experience
- **Education.tsx**: Update education and certifications
- **Contact.tsx**: Update contact information and social links

### Styling
- Colors can be customized in `tailwind.config.cjs`
- Additional animations can be added in the main `index.astro` file
- Layout adjustments can be made in individual component files

### Images
- Add your profile picture to the `public/` directory
- Update project images or use the emoji placeholders provided
- Replace the favicon with your own

## 📱 Responsive Design

The portfolio is fully responsive and includes:
- Mobile-first approach
- Flexible grid layouts
- Responsive navigation
- Optimized images and content for all screen sizes

## 🎭 Animations

The portfolio includes various CSS animations:
- Fade in effects
- Slide animations (left, right, up)
- Hover transitions
- Loading animations

## 🔧 Configuration

### Astro Configuration
The `astro.config.mjs` file includes:
- React integration
- Tailwind CSS integration
- Build optimizations

### Tailwind Configuration
Custom theme extensions in `tailwind.config.cjs`:
- Primary color palette
- Custom animations
- Extended spacing and typography

## 📊 Performance

This portfolio is optimized for:
- Fast loading times with Astro's static generation
- Minimal JavaScript bundle size
- Optimized images and assets
- SEO-friendly structure

## 🌐 Deployment

The portfolio can be deployed to:
- **Vercel**: `npm run build` and deploy the `dist/` folder
- **Netlify**: Connect your repository for automatic deployments
- **GitHub Pages**: Use GitHub Actions for automated deployment

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Note**: Remember to replace placeholder content with your actual information before deploying!
