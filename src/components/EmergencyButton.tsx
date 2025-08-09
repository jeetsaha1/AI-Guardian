import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const EmergencyButton = () => {
  const [isPressed, setIsPressed] = useState(false);
  const { toast } = useToast();

  const handleEmergencyCall = () => {
    setIsPressed(true);
    toast({
      title: "Emergency Alert Activated",
      description: "Calling emergency services and notifying contacts...",
      variant: "destructive",
    });
    
    // In a real app, this would trigger actual emergency protocols
    setTimeout(() => {
      setIsPressed(false);
    }, 3000);
  };

  return (
    <div className="text-center space-y-4">
      <Button
        variant="emergency"
        size="icon-lg"
        onClick={handleEmergencyCall}
        disabled={isPressed}
        className={`rounded-full h-20 w-20 ${isPressed ? 'animate-pulse-emergency' : ''}`}
      >
        {isPressed ? (
          <AlertTriangle className="h-8 w-8" />
        ) : (
          <Phone className="h-8 w-8" />
        )}
      </Button>
      <div>
        <h3 className="text-lg font-semibold text-foreground">Emergency</h3>
        <p className="text-sm text-muted-foreground">Tap for instant help</p>
      </div>
    </div>
  );
};

export default EmergencyButton;