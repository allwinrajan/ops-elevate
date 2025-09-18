import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Sparkles, MessageSquare, Lightbulb } from "lucide-react";

const AI = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">AI Assistant</h1>
        <p className="text-muted-foreground mt-1">
          Get intelligent recommendations and automated insights for your DevOps workflow.
        </p>
      </div>

      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Brain className="h-5 w-5 text-primary" />
            <span>AI-Powered DevOps Assistant</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <Brain className="h-12 w-12 mx-auto text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Intelligent DevOps Companion</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Leverage AI to optimize your workflows, get smart recommendations, automate documentation, and predict potential issues before they happen.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
              <div className="text-center p-4 border rounded-lg border-border">
                <Sparkles className="h-8 w-8 mx-auto text-primary mb-3" />
                <div className="font-medium mb-1">Smart Recommendations</div>
                <div className="text-sm text-muted-foreground">Performance optimizations</div>
              </div>
              <div className="text-center p-4 border rounded-lg border-border">
                <MessageSquare className="h-8 w-8 mx-auto text-accent mb-3" />
                <div className="font-medium mb-1">Chat Assistant</div>
                <div className="text-sm text-muted-foreground">Ask questions, get answers</div>
              </div>
              <div className="text-center p-4 border rounded-lg border-border">
                <Lightbulb className="h-8 w-8 mx-auto text-warning mb-3" />
                <div className="font-medium mb-1">Auto Documentation</div>
                <div className="text-sm text-muted-foreground">Generate docs automatically</div>
              </div>
            </div>
            <Button className="bg-gradient-primary hover:opacity-90">
              <Brain className="h-4 w-4 mr-2" />
              Start AI Session
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AI;