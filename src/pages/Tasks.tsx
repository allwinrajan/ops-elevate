import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckSquare, Plus, Filter } from "lucide-react";

const Tasks = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Tasks</h1>
          <p className="text-muted-foreground mt-1">
            Track and manage your development tasks.
          </p>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button className="bg-gradient-primary hover:opacity-90">
            <Plus className="h-4 w-4 mr-2" />
            New Task
          </Button>
        </div>
      </div>

      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <CheckSquare className="h-5 w-5 text-primary" />
            <span>Task Management</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <CheckSquare className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">Task Management System</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Organize your development workflow with intelligent task tracking, AI-powered recommendations, and seamless project integration.
            </p>
            <Button className="bg-gradient-primary hover:opacity-90">
              <Plus className="h-4 w-4 mr-2" />
              Create Your First Task
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Tasks;