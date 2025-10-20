import { Home, Upload, Shield, LogIn, UserPlus, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Upload, label: "Upload", path: "/upload" },
    { icon: Shield, label: "Privacy Policy", path: "/privacy" },
    { icon: LogIn, label: "Login", path: "/login" },
    { icon: UserPlus, label: "Sign Up", path: "/signup" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full w-64 glass-card border-r border-primary/20 z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <Shield className="w-8 h-8 text-primary animate-glow-pulse" />
              <span className="text-2xl font-bold text-primary">DataGuard</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="lg:hidden"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive(item.path)
                    ? "bg-primary/20 border-l-4 border-primary text-primary"
                    : "hover:bg-primary/10 text-muted-foreground hover:text-foreground"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Footer */}
          <div className="pt-6 border-t border-primary/20">
            <p className="text-xs text-muted-foreground text-center">
              © 2025 DataGuard
              <br />
              Secure. Smart. Reliable.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
