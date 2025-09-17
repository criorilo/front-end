import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <Card className="max-w-md w-full bg-gradient-card border-0 shadow-soft text-center">
        <CardContent className="p-8">
          <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-soft">
            <Heart className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
          <h2 className="text-xl font-semibold text-foreground mb-2">Página não encontrada</h2>
          <p className="text-muted-foreground mb-6">
            Ops! A página que você está procurando não existe ou foi movida.
          </p>
          <Button 
            onClick={() => window.location.href = "/"}
            className="bg-gradient-primary hover:opacity-90 transition-smooth shadow-soft"
          >
            <Home className="mr-2 h-4 w-4" />
            Voltar ao Início
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
