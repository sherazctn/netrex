import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import netrexLogo from "@/assets/netrex-logo.png";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulated login check
    if (email === "sherazctn@gmail.com" && password === "Dubai@2026") {
      // Show OTP screen
      setShowOTP(true);
      toast({
        title: "OTP Sent",
        description: "A verification code has been sent to your email and WhatsApp.",
      });
    } else {
      toast({
        title: "Invalid Credentials",
        description: "Please check your email and password.",
        variant: "destructive",
      });
    }
    
    setIsLoading(false);
  };

  const handleOTPVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate OTP verification (for demo, accept any 6-digit code)
    if (otp.length === 6) {
      localStorage.setItem("adminAuth", "true");
      toast({
        title: "Login Successful",
        description: "Welcome to the admin dashboard.",
      });
      navigate("/admin/dashboard");
    } else {
      toast({
        title: "Invalid OTP",
        description: "Please enter a valid 6-digit code.",
        variant: "destructive",
      });
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-secondary/30 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-card rounded-3xl shadow-xl border border-border p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <img src={netrexLogo} alt="NETREX" className="h-12 mx-auto mb-4" />
            <h1 className="font-display text-2xl font-bold">Admin Portal</h1>
            <p className="text-muted-foreground text-sm mt-2">
              {showOTP ? "Enter verification code" : "Sign in to your account"}
            </p>
          </div>

          {!showOTP ? (
            <form onSubmit={handleLogin} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="admin@netrex.ae"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 rounded-full"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 rounded-full"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>
          ) : (
            <form onSubmit={handleOTPVerify} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="otp">Verification Code</Label>
                <Input
                  id="otp"
                  type="text"
                  placeholder="Enter 6-digit code"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                  className="text-center text-2xl tracking-[0.5em] rounded-full"
                  maxLength={6}
                  required
                />
                <p className="text-xs text-muted-foreground text-center mt-2">
                  Code sent to your email and WhatsApp
                </p>
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? "Verifying..." : "Verify & Login"}
              </Button>

              <button
                type="button"
                onClick={() => setShowOTP(false)}
                className="w-full text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                ← Back to login
              </button>
            </form>
          )}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-6">
          © {new Date().getFullYear()} NETREX. All rights reserved.
        </p>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
