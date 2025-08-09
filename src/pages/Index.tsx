import Navbar from "@/components/Navbar";
import EmergencyButton from "@/components/EmergencyButton";
import RouteInfo from "@/components/RouteInfo";
import RiskAssessment from "@/components/RiskAssessment";
import QuickActions from "@/components/QuickActions";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/30">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Hero Section with Emergency Button */}
        <section className="text-center space-y-6">
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Your Personal Safety Guardian
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              AI-powered protection designed specifically for women's safety. Get instant help, route guidance, and real-time risk assessment.
            </p>
          </div>
          
          {/* Emergency Button */}
          <div className="flex justify-center py-4">
            <EmergencyButton />
          </div>

          {/* Status Indicators */}
          <div className="flex justify-center space-x-4">
            <Badge variant="outline" className="flex items-center space-x-1">
              <Shield className="h-3 w-3 text-success" />
              <span>Protected</span>
            </Badge>
            <Badge variant="outline" className="flex items-center space-x-1">
              <Users className="h-3 w-3 text-primary" />
              <span>2 Contacts Online</span>
            </Badge>
            <Badge variant="outline" className="flex items-center space-x-1">
              <MapPin className="h-3 w-3 text-accent" />
              <span>Location Shared</span>
            </Badge>
          </div>
        </section>

        {/* Main Dashboard */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Route Info */}
          <div className="lg:col-span-1 space-y-6">
            <RouteInfo />
            
            {/* Quick Stats */}
            <Card className="shadow-card border-0">
              <CardContent className="p-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">24/7</div>
                    <div className="text-xs text-muted-foreground">Protection</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">5sec</div>
                    <div className="text-xs text-muted-foreground">Response Time</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Middle Column - Risk Assessment */}
          <div className="lg:col-span-1">
            <RiskAssessment />
          </div>

          {/* Right Column - Quick Actions */}
          <div className="lg:col-span-1">
            <QuickActions />
          </div>
        </section>

        {/* Recent Activity */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Recent Activity</h2>
          <Card className="shadow-card border-0">
            <CardContent className="p-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                    <span className="text-sm">Safe route completed to Downtown Office</span>
                  </div>
                  <span className="text-xs text-muted-foreground">2 min ago</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Location shared with emergency contact</span>
                  </div>
                  <span className="text-xs text-muted-foreground">15 min ago</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Risk assessment updated for current area</span>
                  </div>
                  <span className="text-xs text-muted-foreground">1 hour ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Index;