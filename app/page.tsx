'use client';

import * as React from 'react';

import { AnimatedButton, Button } from '@/components/ui/button';
import {
  ArrowRight,
  BarChart3,
  ChevronDown,
  CreditCard,
  FileText,
  Info,
  Plus,
  Settings,
  User,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/components/ui/toast';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import Image from 'next/image';
import { Input } from '@/components/ui/input/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { Progress } from '@/components/ui/progress';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [showToast, setShowToast] = React.useState(false);
  const [toastVariant, setToastVariant] = React.useState<
    'default' | 'success' | 'error' | 'warning' | 'info'
  >('default');

  const [progressValue, setProgressValue] = React.useState(30);
  const [sliderValue, setSliderValue] = React.useState([50]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgressValue((prev) => {
        if (prev >= 100) return 0;
        return prev + 1;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  const showToastWithVariant = (
    variant: 'default' | 'success' | 'error' | 'warning' | 'info'
  ) => {
    setToastVariant(variant);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-ghibli-beige-light/40 via-white to-ghibli-beige/30">
      {/* Header/Navigation */}
      <header className="border-b border-ghibli-beige-dark/20 bg-white/70 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-xl font-bold text-ghibli-brown mr-1">
                <span className="text-ghibli-green-dark">Anime UI</span>
              </span>
              <Badge variant="outline" className="ml-2">
                Beta
              </Badge>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              {/*<Tabs
                value={selectedTab}
                onValueChange={setSelectedTab}
                className="w-auto"
              >
                <TabsList>
                  <TabsTrigger value="components">Components</TabsTrigger>
                  <TabsTrigger value="primitives">Sho</TabsTrigger>
                  <TabsTrigger value="icons">Icons</TabsTrigger>
                  <TabsTrigger value="colors">Colors</TabsTrigger>
                </TabsList>
              </Tabs>*/}
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="/showcase"
                className="text-ghibli-brown hover:text-ghibli-green-dark transition-colors text-sm"
              >
                Showcase
              </a>

              <Button variant="ghost" size="icon" className="text-ghibli-brown">
                <Link
                  href="https://github.com/a10x-dev/anime-ui"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 border-b border-ghibli-beige-dark/10">
        <div className="absolute inset-0 z-0 bg-[url('/forest-bg.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl font-bold text-ghibli-green-dark mb-4">
                Start building
                <br />
                your app now
              </h1>
              <p className="text-xl text-ghibli-brown/80 mb-8 max-w-md">
                An open source component library inspired by the worlds of
                Studio Ghibli
              </p>
              <div className="flex space-x-4">
                <AnimatedButton
                  variant="nature"
                  size="lg"
                  animation="hover"
                  rounded="pill"
                  className="gap-2"
                  onClick={() => router.push('/components')}
                >
                  Get started <ArrowRight size={16} />
                </AnimatedButton>
                <Button
                  variant="outline"
                  size="lg"
                  rounded="pill"
                  onClick={() => router.push('/showcase')}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                  Showcase
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="rounded-xl border-2 border-ghibli-beige-dark/30 bg-white/80 backdrop-blur-sm p-4 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src="/ui-path.png"
                alt="Anime UI Showcase"
                width={800}
                height={500}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Showcase Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* Team Management Card */}
            <Card className="border-ghibli-beige-dark/30 shadow-sm">
              <CardHeader>
                <CardTitle>Your team</CardTitle>
                <CardDescription>
                  Invite and manage your team members.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex">
                    <Input
                      type="email"
                      placeholder="Email address"
                      rounded="leftFull"
                      className="w-full"
                    />
                    <Button className="rounded-r-full border-2 border-l-0 border-ghibli-beige-dark bg-ghibli-beige hover:bg-ghibli-beige-dark">
                      Invite
                    </Button>
                  </div>

                  <div className="space-y-3">
                    {[
                      {
                        name: 'Chihiro Ogino',
                        email: 'chihiro@spiritedaway.com',
                      },
                      { name: 'Howl Jenkins', email: 'howl@movingcastle.com' },
                      { name: 'San Wolf', email: 'san@mononoke.forest' },
                      { name: 'Kiki Delivery', email: 'kiki@delivery.service' },
                    ].map((user, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-ghibli-beige/20"
                      >
                        <div className="flex items-center gap-3">
                          <Avatar variant="nature" />
                          <div>
                            <p className="text-sm font-medium">{user.name}</p>
                            <p className="text-xs text-ghibli-brown/70">
                              {user.email}
                            </p>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon">
                          <ChevronDown
                            size={16}
                            className="text-ghibli-brown/50"
                          />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sign Up Form Card */}
            <Card className="border-ghibli-beige-dark/30 shadow-sm">
              <CardHeader>
                <CardTitle>Sign up</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email address</Label>
                    <Input
                      id="email"
                      placeholder="Enter your email"
                      type="email"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <a
                        href="#"
                        className="text-xs text-ghibli-green-dark hover:underline"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                    />
                  </div>

                  <div className="flex flex-col gap-2 pt-2">
                    <Button variant="nature" className="w-full">
                      Create an account
                    </Button>
                    <Button variant="outline" className="w-full">
                      Sign in
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Financial Performance Card */}
            <Card className="border-ghibli-beige-dark/30 shadow-sm">
              <CardHeader>
                <CardTitle>Financial performance</CardTitle>
                <CardDescription>
                  Review your company&apos;s KPIs compared to targets
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-ghibli-brown">MRR</span>
                        <Badge
                          variant="outline"
                          className="bg-ghibli-green-light/10 text-ghibli-green-dark"
                        >
                          +3.2%
                        </Badge>
                      </div>
                      <p className="text-2xl font-bold">¥350K</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-ghibli-brown">OpEx</span>
                        <Badge
                          variant="outline"
                          className="bg-ghibli-red-light/10 text-red-500"
                        >
                          +12%
                        </Badge>
                      </div>
                      <p className="text-2xl font-bold">¥211K</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-ghibli-brown">GPM</span>
                        <Badge
                          variant="outline"
                          className="bg-ghibli-red-light/10 text-red-500"
                        >
                          -1.2%
                        </Badge>
                      </div>
                      <p className="text-2xl font-bold">44.6%</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-ghibli-brown">NPM</span>
                        <Badge
                          variant="outline"
                          className="bg-ghibli-yellow/10 text-amber-600"
                        >
                          0.0%
                        </Badge>
                      </div>
                      <p className="text-2xl font-bold">9.1%</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <BarChart3 className="text-ghibli-green" />
                    <p className="text-xs text-ghibli-brown/70">
                      Monthly performance trend
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Company Card */}
            <Card className="border-ghibli-beige-dark/30 shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Your company card</CardTitle>
                  <CardDescription>
                    View and manage your corporate card.
                  </CardDescription>
                </div>
                <Button variant="ghost" size="icon">
                  <Info size={16} />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-ghibli-green to-ghibli-blue rounded-xl p-4 text-white shadow-lg">
                    <div className="flex justify-between items-start mb-8">
                      <div>
                        <p className="text-xs opacity-80">AnimeUI Card</p>
                      </div>
                      <div className="flex gap-1">
                        <div className="h-4 w-4 bg-white rounded-full opacity-70"></div>
                        <div className="h-4 w-4 bg-white rounded-full opacity-90"></div>
                      </div>
                    </div>
                    <p className="text-lg font-medium mb-6">Sophie Hatter</p>
                    <div className="flex justify-between items-center">
                      <p className="text-xs">4023 8249 5027 1846</p>
                      <p className="text-xs">09/27</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <Button variant="outline" className="text-xs" size="sm">
                      Freeze
                    </Button>
                    <Button variant="nature" className="text-xs" size="sm">
                      Done
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity Card */}
            <Card className="border-ghibli-beige-dark/30 shadow-sm">
              <CardHeader>
                <CardTitle>Recent activity</CardTitle>
                <CardDescription>
                  Review what has happened over the past days
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      user: 'Totoro',
                      action: 'Approved invoice #3461',
                      time: '2 hours ago',
                      icon: <FileText size={14} />,
                    },
                    {
                      user: 'Kiki',
                      action: 'Purchased 15 office chairs',
                      time: 'Yesterday',
                      icon: <CreditCard size={14} />,
                    },
                    {
                      user: 'Haku',
                      action: 'Responded to your comment',
                      time: '2 days ago',
                      icon: <MessageSquare size={14} />,
                    },
                    {
                      user: 'Ponyo',
                      action: 'Created 4 invoices',
                      time: '3 days ago',
                      icon: <FileText size={14} />,
                    },
                    {
                      user: 'Yubaba',
                      action: 'Updated client details',
                      time: 'Last week',
                      icon: <User size={14} />,
                    },
                  ].map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 pb-3 border-b border-ghibli-beige/50 last:border-0"
                    >
                      <Avatar variant="nature" className="mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">{activity.user}</p>
                        <p className="text-xs text-ghibli-brown flex items-center gap-1">
                          {activity.icon} {activity.action}
                        </p>
                        <p className="text-xs text-ghibli-brown/70">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Notifications Settings Card */}
            <Card className="border-ghibli-beige-dark/30 shadow-sm">
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>
                  Manage your notification settings.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="border-b border-ghibli-beige pb-3">
                      <h3 className="text-sm font-medium mb-2">Comments</h3>
                      <p className="text-xs text-ghibli-brown mb-3">
                        Receive notifications when someone comments on your
                        documents or mentions you.
                      </p>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="comments-push" className="text-xs">
                            Push
                          </Label>
                          <Switch id="comments-push" />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="comments-email" className="text-xs">
                            Email
                          </Label>
                          <Switch id="comments-email" />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="comments-slack" className="text-xs">
                            Slack
                          </Label>
                          <Switch id="comments-slack" variant="nature" />
                        </div>
                      </div>
                    </div>

                    <div className="border-b border-ghibli-beige pb-3">
                      <h3 className="text-sm font-medium mb-2">Favorites</h3>
                      <p className="text-xs text-ghibli-brown mb-3">
                        Receive notifications when there is activity related to
                        your favorited items.
                      </p>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="favorites-push" className="text-xs">
                            Push
                          </Label>
                          <Switch id="favorites-push" variant="sky" />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="favorites-email" className="text-xs">
                            Email
                          </Label>
                          <Switch id="favorites-email" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium mb-2">
                        New documents
                      </h3>
                      <p className="text-xs text-ghibli-brown mb-3">
                        Receive notifications whenever people on your team
                        create new documents.
                      </p>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="documents-push" className="text-xs">
                            Push
                          </Label>
                          <Switch id="documents-push" variant="spirit" />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="documents-email" className="text-xs">
                            Email
                          </Label>
                          <Switch id="documents-email" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-ghibli-beige/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-ghibli-green-dark mb-4">
              Pricing
            </h2>
            <p className="text-ghibli-brown max-w-xl mx-auto">
              No credit card required. Every plan includes a 30-day trial of all
              Pro features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <Card className="border-ghibli-beige-dark/30 shadow-sm">
              <CardHeader>
                <CardTitle>Basic</CardTitle>
                <CardDescription>3 team members</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="text-3xl font-bold">
                    ¥0{' '}
                    <span className="text-sm font-normal text-ghibli-brown">
                      /mo
                    </span>
                  </p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-ghibli-green"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Expense tracking
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-ghibli-green"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Invoicing
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-ghibli-green"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Payment tracking
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Get Started
                </Button>
              </CardFooter>
            </Card>

            {/* Growth Plan */}
            <Card className="border-ghibli-beige-dark/30 shadow-sm">
              <CardHeader>
                <CardTitle>Growth</CardTitle>
                <CardDescription>10 team members</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="text-3xl font-bold">
                    ¥49{' '}
                    <span className="text-sm font-normal text-ghibli-brown">
                      /mo
                    </span>
                  </p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-ghibli-green"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Online payments
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-ghibli-green"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Recurring invoices
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-ghibli-green"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Bill management
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="nature" className="w-full">
                  Start Trial
                </Button>
              </CardFooter>
            </Card>

            {/* Pro Plan */}
            <Card className="border-ghibli-beige-dark/30 shadow-sm">
              <CardHeader>
                <CardTitle>Pro</CardTitle>
                <CardDescription>Unlimited team members</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="text-3xl font-bold">
                    ¥99{' '}
                    <span className="text-sm font-normal text-ghibli-brown">
                      /mo
                    </span>
                  </p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-ghibli-green"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Custom invoices
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-ghibli-green"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Multi-business
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-ghibli-green"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Team collaboration
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="sky" className="w-full">
                  Contact Sales
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* To-do Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-ghibli-green-dark mb-4">
              To-do
            </h2>
            <Card className="border-ghibli-beige-dark/30 shadow-sm mb-4">
              <CardContent className="p-4">
                <p className="text-sm text-ghibli-brown mb-4">
                  Stay on top of your daily tasks.
                </p>
                <div className="space-y-3">
                  {[
                    { label: 'Create a design system', completed: true },
                    { label: 'Improve user onboarding flow', completed: false },
                    {
                      label: 'Update component documentation',
                      completed: false,
                    },
                    {
                      label: 'Plan quarterly strategy meeting',
                      completed: false,
                    },
                    {
                      label: 'Review recent feature requests',
                      completed: false,
                    },
                  ].map((task, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Checkbox
                        id={`task-${index}`}
                        checked={task.completed}
                        variant="nature"
                      />
                      <Label
                        htmlFor={`task-${index}`}
                        className={`text-sm ${
                          task.completed
                            ? 'line-through text-ghibli-brown/60'
                            : ''
                        }`}
                      >
                        {task.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="bg-ghibli-beige/10 flex items-center gap-2 p-4">
                <Input
                  placeholder="Add a new task..."
                  className="flex-1"
                  variant="nature"
                />
                <Button variant="outline" size="icon">
                  <Plus size={16} />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Components Showcase */}
      <section className="py-16 bg-ghibli-beige/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-ghibli-green-dark mb-4">
              More UI Components
            </h2>
            <p className="text-ghibli-brown max-w-xl mx-auto">
              Explore our comprehensive library of beautifully designed and
              fully accessible components.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Dialog Showcase */}
            <Card className="border-ghibli-beige-dark/30 shadow-sm">
              <CardHeader>
                <CardTitle>Dialog</CardTitle>
                <CardDescription>
                  Modal dialogs for important content
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="nature">Open Dialog</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Edit Profile</DialogTitle>
                      <DialogDescription>
                        Make changes to your profile here. Click save when
                        you&apos;re done.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Name
                        </Label>
                        <Input
                          id="name"
                          defaultValue="Chihiro Ogino"
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                          Username
                        </Label>
                        <Input
                          id="username"
                          defaultValue="chihiro"
                          className="col-span-3"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="nature">Save changes</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                <p className="text-sm text-ghibli-brown mt-2">
                  Dialogs prompt users for input or display important
                  information.
                </p>
              </CardContent>
            </Card>

            {/* Dropdown Menu Showcase */}
            <Card className="border-ghibli-beige-dark/30 shadow-sm">
              <CardHeader>
                <CardTitle>Dropdown Menu</CardTitle>
                <CardDescription>
                  Toggle contextual overlays for displaying lists of links
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="sky">Open Menu</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2"
                      >
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                        <polyline points="16 17 21 12 16 7" />
                        <line x1="21" y1="12" x2="9" y2="12" />
                      </svg>
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <p className="text-sm text-ghibli-brown mt-2">
                  Dropdown menus display a list of actions or options.
                </p>
              </CardContent>
            </Card>

            {/* HoverCard Showcase */}
            <Card className="border-ghibli-beige-dark/30 shadow-sm">
              <CardHeader>
                <CardTitle>Hover Card</CardTitle>
                <CardDescription>
                  For sighted users to preview content before clicking
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-4">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <span>@totoro</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="16" x2="12" y2="12" />
                        <line x1="12" y1="8" x2="12.01" y2="8" />
                      </svg>
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80" animationVariant="grow">
                    <div className="flex justify-between space-x-4">
                      <Avatar alt="Totoro" variant="nature" />
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold">Totoro</h4>
                        <p className="text-sm">
                          A friendly forest spirit who helps those in need.
                          Known for his magical umbrella and ability to grow
                          trees.
                        </p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
                <p className="text-sm text-ghibli-brown mt-2">
                  Hover cards display additional context when hovering over an
                  element.
                </p>
              </CardContent>
            </Card>

            {/* Select Showcase */}
            <Card className="border-ghibli-beige-dark/30 shadow-sm">
              <CardHeader>
                <CardTitle>Select</CardTitle>
                <CardDescription>
                  Displays a list of options for the user to pick from
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="space-y-2">
                  <Label htmlFor="ghibli-character">Favorite Character</Label>
                  <Select>
                    <SelectTrigger id="ghibli-character">
                      <SelectValue placeholder="Select a character" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="totoro">Totoro</SelectItem>
                      <SelectItem value="kiki">Kiki</SelectItem>
                      <SelectItem value="howl">Howl Jenkins</SelectItem>
                      <SelectItem value="chihiro">Chihiro</SelectItem>
                      <SelectItem value="ponyo">Ponyo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <p className="text-sm text-ghibli-brown mt-2">
                  Select components allow users to choose from a list of
                  options.
                </p>
              </CardContent>
            </Card>

            {/* Toast Showcase */}
            <Card className="border-ghibli-beige-dark/30 shadow-sm">
              <CardHeader>
                <CardTitle>Toast</CardTitle>
                <CardDescription>
                  Succinct messages that notify users of updates
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    onClick={() => showToastWithVariant('success')}
                    variant="nature"
                  >
                    Success
                  </Button>
                  <Button
                    onClick={() => showToastWithVariant('error')}
                    variant="destructive"
                  >
                    Error
                  </Button>
                  <Button
                    onClick={() => showToastWithVariant('warning')}
                    variant="sky"
                  >
                    Warning
                  </Button>
                  <Button onClick={() => showToastWithVariant('info')}>
                    Info
                  </Button>
                </div>
                <p className="text-sm text-ghibli-brown mt-2">
                  Toasts provide brief notifications about app processes.
                </p>
                <div className="border border-dashed border-ghibli-beige p-3 rounded-md">
                  <p className="text-xs text-ghibli-brown/80">
                    Click any button above to see a toast notification.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Tooltip Showcase */}
            <Card className="border-ghibli-beige-dark/30 shadow-sm">
              <CardHeader>
                <CardTitle>Tooltip</CardTitle>
                <CardDescription>
                  Short informative messages that appear on hover
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-4">
                <div className="flex gap-4">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Add to favorites</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="11" cy="11" r="8"></circle>
                          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Search</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>View team</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <p className="text-sm text-ghibli-brown mt-2">
                  Tooltips provide additional context on hover.
                </p>
              </CardContent>
            </Card>

            {/* Progress Showcase */}
            <Card className="border-ghibli-beige-dark/30 shadow-sm">
              <CardHeader>
                <CardTitle>Progress</CardTitle>
                <CardDescription>
                  Displays an indicator showing completion of a task
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label>Project Completion</Label>
                    <span className="text-sm text-ghibli-brown">
                      {progressValue}%
                    </span>
                  </div>
                  <Progress
                    value={progressValue}
                    className="w-full"
                    variant="nature"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label>Upload Status</Label>
                    <span className="text-sm text-ghibli-brown">75%</span>
                  </div>
                  <Progress value={75} className="w-full" variant="sky" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label>Download Progress</Label>
                    <span className="text-sm text-ghibli-brown">90%</span>
                  </div>
                  <Progress value={90} className="w-full" variant="spirit" />
                </div>

                <p className="text-sm text-ghibli-brown mt-2">
                  Progress indicators visually communicate the status of an
                  operation.
                </p>
              </CardContent>
            </Card>

            {/* Slider Showcase */}
            <Card className="border-ghibli-beige-dark/30 shadow-sm">
              <CardHeader>
                <CardTitle>Slider</CardTitle>
                <CardDescription>
                  Select a value from a range with your mouse or keyboard
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <Label>Volume</Label>
                      <span className="text-sm text-ghibli-brown">
                        {sliderValue[0]}%
                      </span>
                    </div>
                    <Slider
                      defaultValue={sliderValue}
                      max={100}
                      step={1}
                      variant="nature"
                      onValueChange={setSliderValue}
                    />
                  </div>
                </div>
                <p className="text-sm text-ghibli-brown mt-2">
                  Sliders allow users to select a value from a range.
                </p>
              </CardContent>
            </Card>

            {/* Tabs Showcase */}
            <Card className="border-ghibli-beige-dark/30 shadow-sm">
              <CardHeader>
                <CardTitle>Tabs</CardTitle>
                <CardDescription>
                  Switch between different views
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="account" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                  </TabsList>
                  <TabsContent
                    value="account"
                    className="p-4 bg-white/50 rounded-md mt-2 border border-ghibli-beige/50"
                  >
                    <p className="text-sm text-ghibli-brown">
                      Account settings and preferences.
                    </p>
                  </TabsContent>
                  <TabsContent
                    value="password"
                    className="p-4 bg-white/50 rounded-md mt-2 border border-ghibli-beige/50"
                  >
                    <p className="text-sm text-ghibli-brown">
                      Change your password here.
                    </p>
                  </TabsContent>
                  <TabsContent
                    value="settings"
                    className="p-4 bg-white/50 rounded-md mt-2 border border-ghibli-beige/50"
                  >
                    <p className="text-sm text-ghibli-brown">
                      Manage your app settings.
                    </p>
                  </TabsContent>
                </Tabs>
                <p className="text-sm text-ghibli-brown mt-4">
                  Tabs organize content into separate views the user can
                  navigate between.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-ghibli-green-dark/5 border-t border-ghibli-beige-dark/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-ghibli-green-dark mb-4">
                Anime UI
              </h3>
              <p className="text-sm text-ghibli-brown">
                A magical component library inspired by the worlds of Studio
                Ghibli
              </p>
            </div>

            <div>
              <h4 className="font-medium text-ghibli-green-dark mb-3">
                Documentation
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/components"
                    className="text-sm text-ghibli-brown hover:text-ghibli-green-dark"
                  >
                    Getting Started
                  </Link>
                </li>
                <li>
                  <Link
                    href="/components"
                    className="text-sm text-ghibli-brown hover:text-ghibli-green-dark"
                  >
                    Components
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-ghibli-green-dark mb-3">
                Community
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://github.com/a10x-dev/anime-ui"
                    className="text-sm text-ghibli-brown hover:text-ghibli-green-dark"
                  >
                    GitHub
                  </a>
                </li>

                <li>
                  <a
                    href="https://x.com/manduks"
                    className="text-sm text-ghibli-brown hover:text-ghibli-green-dark"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-ghibli-green-dark mb-3">More</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/showcase"
                    className="text-sm text-ghibli-brown hover:text-ghibli-green-dark"
                  >
                    Showcase
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-ghibli-beige-dark/20 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-ghibli-brown">
              © {new Date().getFullYear()} Anime UI. Released under the MIT
              License.
            </p>

            <div className="flex space-x-4 mt-4 md:mt-0">
              <Button variant="ghost" size="icon">
                <Link
                  href="https://github.com/a10x-dev/anime-ui"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open('https://x.com/manduks', '_blank')}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </footer>

      {/* Toast Provider */}
      <ToastProvider>
        {showToast && (
          <Toast
            variant={toastVariant}
            open={showToast}
            onOpenChange={setShowToast}
          >
            <ToastTitle>
              {toastVariant === 'default' && 'Notification'}
              {toastVariant === 'success' && 'Success!'}
              {toastVariant === 'error' && 'Error'}
              {toastVariant === 'warning' && 'Warning'}
              {toastVariant === 'info' && 'Information'}
            </ToastTitle>
            <ToastDescription>
              {toastVariant === 'default' && 'This is a default notification.'}
              {toastVariant === 'success' &&
                'Your action completed successfully!'}
              {toastVariant === 'error' &&
                'Something went wrong. Please try again.'}
              {toastVariant === 'warning' &&
                'Please check the details before continuing.'}
              {toastVariant === 'info' &&
                'Here is some information you might find useful.'}
            </ToastDescription>
            <ToastAction altText="Dismiss">Dismiss</ToastAction>
            <ToastClose />
          </Toast>
        )}
        <ToastViewport />
      </ToastProvider>
    </div>
  );
}

function MessageSquare({
  size,
  ...props
}: React.SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
