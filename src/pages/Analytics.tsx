import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, Activity, Clock } from "lucide-react";

const Analytics = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
        <p className="text-muted-foreground mt-1">
          Insights and performance metrics for your DevOps workflow.
        </p>
      </div>

      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="h-5 w-5 text-primary" />
            <span>Performance Analytics</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <BarChart3 className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">Advanced Analytics Dashboard</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Track team productivity, deployment frequency, lead times, and other key DevOps metrics with detailed visualizations and AI-driven insights.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="text-center">
                <TrendingUp className="h-8 w-8 mx-auto text-success mb-2" />
                <div className="text-sm font-medium">Performance</div>
              </div>
              <div className="text-center">
                <Activity className="h-8 w-8 mx-auto text-primary mb-2" />
                <div className="text-sm font-medium">Activity</div>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 mx-auto text-warning mb-2" />
                <div className="text-sm font-medium">Lead Time</div>
              </div>
              <div className="text-center">
                <BarChart3 className="h-8 w-8 mx-auto text-accent mb-2" />
                <div className="text-sm font-medium">Reports</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;