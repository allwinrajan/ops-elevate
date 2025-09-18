import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, Plus, ExternalLink } from "lucide-react";

const Integrations = () => {
  const integrations = [
    { name: "GitHub", status: "Connected", category: "Version Control" },
    { name: "Docker", status: "Available", category: "Containerization" },
    { name: "Kubernetes", status: "Available", category: "Orchestration" },
    { name: "Jenkins", status: "Available", category: "CI/CD" },
    { name: "Slack", status: "Connected", category: "Communication" },
    { name: "Jira", status: "Available", category: "Project Management" }
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Integrations</h1>
          <p className="text-muted-foreground mt-1">
            Connect your favorite tools and services.
          </p>
        </div>
        
        <Button className="bg-gradient-primary hover:opacity-90">
          <Plus className="h-4 w-4 mr-2" />
          Browse Integrations
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {integrations.map((integration, index) => (
          <Card key={index} className="border-border bg-card hover:shadow-enterprise transition-shadow duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <CardTitle className="text-lg">{integration.name}</CardTitle>
              <Badge variant={integration.status === 'Connected' ? 'default' : 'secondary'}>
                {integration.status}
              </Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                {integration.category}
              </p>
              <Button 
                variant={integration.status === 'Connected' ? 'outline' : 'default'} 
                className="w-full"
              >
                {integration.status === 'Connected' ? (
                  <>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Configure
                  </>
                ) : (
                  <>
                    <Zap className="h-4 w-4 mr-2" />
                    Connect
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Integrations;