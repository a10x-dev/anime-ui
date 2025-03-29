# 🌿 Anime UI

<div align="center">
  <img src="public/logo.png" alt="Anime UI Logo" width="180" />
  <p><strong>A magical Ghibli-inspired component library for React and Next.js</strong></p>
  <a href="https://anime-ui.vercel.app">Live Demo</a> •
  <a href="https://anime-ui.vercel.app/components">Components</a> •
  <a href="https://anime-ui.vercel.app/showcase">Showcase</a> •
  <a href="#installation">Installation</a> •
  <a href="#usage">Usage</a>
</div>

![Anime UI Banner](public/banner.png)

## ✨ Features

- 🎨 Beautiful Ghibli-inspired design system
- 🔄 30+ interactive components with animations
- 🌈 Custom color themes: Nature, Sky, and Spirit
- 📱 Fully responsive and mobile-friendly
- ♿ Accessible with keyboard navigation and screen reader support
- 🌙 Built with Next.js, Tailwind CSS, and Radix UI
- 🚀 Optimized for performance and SEO

## 📦 Installation

```bash
# Using npm
npm install anime-ui

# Using yarn
yarn add anime-ui

# Using pnpm
pnpm add anime-ui
```

## 🚀 Quick Start

```jsx
import { Button, Card, CardContent } from '@anime-ui/components';

export default function App() {
  return (
    <Card>
      <CardContent>
        <h1>Hello Anime UI!</h1>
        <Button variant="nature">Get Started</Button>
      </CardContent>
    </Card>
  );
}
```

## 📚 Component Variants

Most components support these magical variants:

- `default` - Classic minimalist style
- `nature` - Inspired by lush forests and earthy greens
- `sky` - Inspired by blue skies and magical flights
- `spirit` - Inspired by mystical spirits and warm amber hues

```jsx
<Button variant="nature">Nature</Button>
<Button variant="sky">Sky</Button>
<Button variant="spirit">Spirit</Button>
```

## 🎭 Animations

Many components support charming animations:

```jsx
<AnimatedButton
  variant="nature"
  animation="hover"
>
  Hover Me!
</AnimatedButton>

<HoverCard>
  <HoverCardTrigger>
    <Avatar alt="Totoro" variant="nature" />
  </HoverCardTrigger>
  <HoverCardContent animationVariant="grow">
    <p>A friendly forest spirit...</p>
  </HoverCardContent>
</HoverCard>
```

## 📋 Available Components

- **Foundations**
  - Button, AnimatedButton
  - Input, Select, Checkbox
  - Radio, Slider, Switch
  - Badge, Tooltip, Avatar
- **Layout**
  - Card, Dialog
  - Dropdown, HoverCard
  - Accordion, Tabs
  - Progress, Toast

Check the [Components Page](https://anime-ui.vercel.app/components) for complete documentation.

## 🛠️ Dev Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/anime-ui.git

# Navigate to the project
cd anime-ui

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 👥 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- Design inspiration from the beautiful worlds of Studio Ghibli
- Built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), and [Radix UI](https://www.radix-ui.com/)
- Icons from [Lucide Icons](https://lucide.dev/)

---

<p align="center">
  Made with ✨ magical code ✨ by the Anime UI team.
</p>
