import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Navigation, Clock, ShieldCheck } from "lucide-react";

const RouteInfo = () => {
  const [currentRoute, setCurrentRoute] = useState({
    from: "Current Location",
    to: "Downtown Office",
    duration: "25 min",
    distance: "8.5 km",
    safetyScore: 85,
    status: "safe"
  });

  const getSafetyColor = (score: number) => {
    if (score >= 80) return "success";
    if (score >= 60) return "warning";
    return "destructive";
  };

  return (
    <Card className="shadow-card border-0 bg-gradient-to-br from-card to-secondary/20">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center space-x-2">
          <Navigation className="h-5 w-5 text-primary" />
          <span>Route Information</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Route Details */}
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <MapPin className="h-4 w-4 text-muted-foreground mt-1" />
            <div className="flex-1">
              <p className="text-sm font-medium">{currentRoute.from}</p>
              <p className="text-xs text-muted-foreground">to {currentRoute.to}</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{currentRoute.duration}</span>
              </div>
              <span className="text-sm text-muted-foreground">{currentRoute.distance}</span>
            </div>
            
            <Badge variant={getSafetyColor(currentRoute.safetyScore) as any} className="flex items-center space-x-1">
              <ShieldCheck className="h-3 w-3" />
              <span>{currentRoute.safetyScore}% Safe</span>
            </Badge>
          </div>
        </div>

        {/* Mock Map Area */}
        <div className="bg-muted rounded-lg h-32 flex items-center justify-center border-2 border-dashed border-border">
          <div className="text-center">
            <MapPin className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Interactive Map View</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <Button variant="hero" size="sm" className="w-full">
            Start Navigation
          </Button>
          <Button variant="outline" size="sm" className="w-full">
            Share Route
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RouteInfo;