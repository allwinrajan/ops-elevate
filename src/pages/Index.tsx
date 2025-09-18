import { StatsCards } from "@/components/dashboard/stats-cards";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { AIInsights } from "@/components/dashboard/ai-insights";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Plus, 
  ArrowRight,
  Clock,
  Target,
  GitBranch
} from "lucide-react";

const Index = () => {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            Good morning, Alex 👋
          </h1>
          <p className="text-muted-foreground mt-1">
            Here's what's happening with your projects today.
          </p>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            Today
          </Button>
          <Button className="bg-gradient-primary hover:opacity-90">
            <Plus className="h-4 w-4 mr-2" />
            New Project
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <StatsCards />

      {/* Main Content Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        
        {/* Current Sprint Progress */}
        <Card className="lg:col-span-1 border-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="h-5 w-5 text-primary" />
              <span>Current Sprint</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Sprint 2024-Q1</span>
                <Badge variant="secondary">5 days left</Badge>
              </div>
              <Progress value={75} className="h-2" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>18 of 24 tasks</span>
                <span>75% complete</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Due Today</span>
                </div>
                <span className="text-sm font-medium">3 tasks</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <GitBranch className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">In Review</span>
                </div>
                <span className="text-sm font-medium">2 PRs</span>
              </div>
            </div>
            
            <Button variant="outline" className="w-full">
              View Sprint Board
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <RecentActivity />
        </div>
      </div>

      {/* AI Insights */}
      <AIInsights />
    </div>
  );
};

export default Index;
