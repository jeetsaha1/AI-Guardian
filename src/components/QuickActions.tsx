import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Share2, Camera, Mic } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const QuickActions = () => {
  const { toast } = useToast();

  const handleAction = (action: string) => {
    toast({
      title: `${action} Activated`,
      description: `${action} feature has been triggered.`,
    });
  };

  const actions = [
    {
      icon: MessageCircle,
      label: "Quick Alert",
      description: "Send location to contacts",
      variant: "accent" as const,
      action: "Quick Alert"
    },
    {
      icon: Share2,
      label: "Share Location",
      description: "Share real-time location",
      variant: "hero" as const,
      action: "Location Sharing"
    },
    {
      icon: Camera,
      label: "Capture Evidence",
      description: "Take photo/video secretly",
      variant: "default" as const,
      action: "Evidence Capture"
    },
    {
      icon: Mic,
      label: "Voice Command",
      description: "Activate voice assistant",
      variant: "secondary" as const,
      action: "Voice Command"
    }
  ];

  return (
    <Card className="shadow-card border-0">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant}
              className="h-auto p-4 flex flex-col items-center space-y-2 text-center"
              onClick={() => handleAction(action.action)}
            >
              <action.icon className="h-6 w-6" />
              <div>
                <div className="text-sm font-medium">{action.label}</div>
                <div className="text-xs opacity-80">{action.description}</div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;