import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  FolderKanban, 
  Plus, 
  MoreHorizontal,
  Users,
  Calendar,
  GitBranch
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "E-commerce Platform",
      description: "Microservices architecture for online retail",
      status: "Active",
      progress: 75,
      team: 8,
      deadline: "Mar 15, 2024",
      branches: 12
    },
    {
      id: 2,
      name: "Payment Gateway",
      description: "Secure payment processing system",
      status: "In Review",
      progress: 90,
      team: 5,
      deadline: "Feb 28, 2024",
      branches: 8
    },
    {
      id: 3,
      name: "ML Pipeline",
      description: "Data processing and machine learning pipeline",
      status: "Planning",
      progress: 25,
      team: 6,
      deadline: "Apr 10, 2024",
      branches: 3
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Projects</h1>
          <p className="text-muted-foreground mt-1">
            Manage and track your development projects.
          </p>
        </div>
        
        <Button className="bg-gradient-primary hover:opacity-90">
          <Plus className="h-4 w-4 mr-2" />
          New Project
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id} className="border-border bg-card hover:shadow-enterprise transition-shadow duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <div className="flex items-center space-x-2">
                <FolderKanban className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">{project.name}</CardTitle>
              </div>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                {project.description}
              </p>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Progress</span>
                  <Badge variant={project.status === 'Active' ? 'default' : 'secondary'}>
                    {project.status}
                  </Badge>
                </div>
                <Progress value={project.progress} className="h-2" />
                <span className="text-xs text-muted-foreground">{project.progress}% complete</span>
              </div>
              
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>{project.team}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{project.deadline}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <GitBranch className="h-4 w-4" />
                  <span>{project.branches}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;