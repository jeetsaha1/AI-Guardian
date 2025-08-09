import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Shield, AlertTriangle, Eye, Users, RefreshCw } from "lucide-react";

const RiskAssessment = () => {
  const riskFactors = [
    { 
      icon: Eye, 
      label: "Lighting", 
      score: 75, 
      status: "good" as const,
      description: "Well-lit area"
    },
    { 
      icon: Users, 
      label: "Crowd Density", 
      score: 60, 
      status: "moderate" as const,
      description: "Moderate foot traffic"
    },
    { 
      icon: Shield, 
      label: "Security", 
      score: 85, 
      status: "good" as const,
      description: "CCTV monitored"
    },
  ];

  const overallRisk = 73;

  const getRiskColor = (score: number) => {
    if (score >= 75) return "success";
    if (score >= 50) return "warning";
    return "destructive";
  };

  const getRiskLevel = (score: number) => {
    if (score >= 75) return "Low Risk";
    if (score >= 50) return "Moderate Risk";
    return "High Risk";
  };

  return (
    <Card className="shadow-card border-0 bg-gradient-to-br from-card to-accent/10">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-warning" />
            <span>Risk Assessment</span>
          </div>
          <Button variant="ghost" size="sm">
            <RefreshCw className="h-4 w-4" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Overall Risk Score */}
        <div className="text-center space-y-2">
          <div className="text-2xl font-bold text-foreground">{overallRisk}%</div>
          <Badge variant={getRiskColor(overallRisk) as any} className="text-sm">
            {getRiskLevel(overallRisk)}
          </Badge>
          <Progress value={overallRisk} className="w-full h-2" />
        </div>

        {/* Risk Points */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-foreground">Risk Points</h4>
          {riskFactors.map((factor, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
              <div className="flex items-center space-x-3">
                <factor.icon className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">{factor.label}</p>
                  <p className="text-xs text-muted-foreground">{factor.description}</p>
                </div>
              </div>
              <Badge variant={getRiskColor(factor.score) as any} className="text-xs">
                {factor.score}%
              </Badge>
            </div>
          ))}
        </div>

        {/* AI Recommendations */}
        <div className="bg-gradient-secondary/10 p-3 rounded-lg border border-accent/20">
          <h4 className="text-sm font-medium text-foreground mb-2">AI Recommendations</h4>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li>• Stay in well-lit areas</li>
            <li>• Share your location with trusted contacts</li>
            <li>• Keep emergency contacts readily available</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default RiskAssessment;