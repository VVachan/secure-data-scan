import { Link } from "react-router-dom";
import { Shield, Upload, Zap, Lock, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  const features = [
    {
      icon: Upload,
      title: "Easy Upload",
      description: "Drag and drop your CSV files with support up to 300MB",
    },
    {
      icon: Zap,
      title: "Quick Analysis",
      description: "Get instant insights powered by advanced algorithms",
    },
    {
      icon: Lock,
      title: "Secure & Reliable",
      description: "Your data is processed securely with enterprise-grade protection",
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "We respect your privacy. Files are analyzed and never stored",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/40 to-red-900/30" />
        
        {/* Floating Lock Icons */}
        <div className="absolute inset-0 overflow-hidden">
          <Lock className="absolute top-[10%] left-[15%] w-16 h-16 text-primary/20 animate-pulse" style={{ animationDelay: '0s', animationDuration: '3s' }} />
          <Lock className="absolute top-[25%] right-[20%] w-24 h-24 text-primary/15 animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }} />
          <Lock className="absolute top-[45%] left-[8%] w-12 h-12 text-primary/25 animate-pulse" style={{ animationDelay: '2s', animationDuration: '3.5s' }} />
          <Lock className="absolute top-[60%] right-[12%] w-20 h-20 text-primary/20 animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '4.5s' }} />
          <Lock className="absolute top-[75%] left-[25%] w-14 h-14 text-primary/15 animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '3s' }} />
          <Lock className="absolute top-[20%] right-[45%] w-10 h-10 text-primary/30 animate-pulse" style={{ animationDelay: '2.5s', animationDuration: '4s' }} />
          <Lock className="absolute top-[85%] right-[35%] w-16 h-16 text-primary/20 animate-pulse" style={{ animationDelay: '0.8s', animationDuration: '3.5s' }} />
          <Lock className="absolute top-[35%] left-[40%] w-12 h-12 text-primary/25 animate-pulse" style={{ animationDelay: '1.8s', animationDuration: '4.2s' }} />
          <Lock className="absolute top-[55%] right-[60%] w-18 h-18 text-primary/15 animate-pulse" style={{ animationDelay: '2.2s', animationDuration: '3.8s' }} />
          <Lock className="absolute top-[15%] left-[70%] w-14 h-14 text-primary/20 animate-pulse" style={{ animationDelay: '1.2s', animationDuration: '4.5s' }} />
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card glow-border">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Secure Dataset Analysis</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Welcome to{" "}
              <span className="text-primary glow-text">DataGuard</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Upload your CSV files easily and get quick insights from your data!
            </p>
            
            <Link to="/upload">
              <Button size="lg" className="btn-glow text-lg px-8 py-6 rounded-full">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">About DataGuard</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              DataGuard is a powerful dataset upload and analysis portal designed to make data insights accessible to everyone.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card p-6 hover:glow-border transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-card p-8 md:p-12 text-center space-y-6 glow-border">
            <Target className="w-16 h-16 text-primary mx-auto" />
            <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              To empower organizations and individuals with cutting-edge data analysis tools that detect threats and provide actionable insights. We believe in making cybersecurity accessible, transparent, and effective for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-primary/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-primary">DataGuard</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Your trusted partner for secure dataset analysis and threat detection.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/" className="hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/upload" className="hover:text-primary transition-colors">
                    Upload Dataset
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="text-primary">📧</span>
                  <a 
                    href="mailto:datagaurd@gmail.com" 
                    className="hover:text-primary transition-colors"
                  >
                    datagaurd@gmail.com
                  </a>
                </li>
                <li className="text-xs mt-4">
                  Need help? Contact our support team for assistance with your datasets.
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-primary/20 text-center text-sm text-muted-foreground">
            <p>© 2025 DataGuard. All rights reserved. | Secure. Smart. Reliable.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
