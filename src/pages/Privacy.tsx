import { Link } from "react-router-dom";
import { Shield, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link to="/">
          <Button variant="outline" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <div className="glass-card p-8 md:p-12 glow-border animate-fade-in">
          <div className="flex items-center gap-4 mb-8">
            <Shield className="w-12 h-12 text-primary" />
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
          </div>

          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Our Commitment to Privacy</h2>
              <p>
                DataGuard respects your privacy and is committed to protecting your personal information. 
                We understand the importance of data security, especially when dealing with sensitive datasets.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Data Processing</h2>
              <p>
                When you upload a CSV file to DataGuard:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li>Files are processed in real-time for analysis</li>
                <li>No data is permanently stored on our servers</li>
                <li>Analysis results are computed and displayed immediately</li>
                <li>All file data is deleted after the analysis session ends</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Security Measures</h2>
              <p>
                We employ enterprise-grade security measures to protect your data:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li>All data transmissions are encrypted using SSL/TLS</li>
                <li>Files are processed in isolated, secure environments</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Compliance with industry-standard security protocols</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Demonstration Notice</h2>
              <p>
                For demonstration purposes, analysis results may be simulated. This platform showcases 
                the capabilities of dataset analysis and threat detection systems. In a production environment, 
                actual machine learning models would process your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">User Information</h2>
              <p>
                We collect minimal user information necessary for account creation and authentication:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li>Email address (for account access)</li>
                <li>Name (for personalization)</li>
                <li>Password (encrypted and never stored in plain text)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li>Access your personal information</li>
                <li>Request deletion of your account and associated data</li>
                <li>Opt-out of communications</li>
                <li>Request information about how your data is used</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Contact Us</h2>
              <p>
                If you have any questions or concerns about our privacy practices, please don't hesitate 
                to contact us. We're committed to addressing your privacy concerns promptly and transparently.
              </p>
            </section>

            <section className="border-t border-primary/20 pt-6 mt-8">
              <p className="text-sm">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
