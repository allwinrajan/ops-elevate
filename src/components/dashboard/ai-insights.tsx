import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Brain, 
  TrendingUp, 
  Clock, 
  Target,
  Lightbulb,
  ArrowRight
} from "lucide-react"

const insights = [
  {
    id: 1,
    type: "optimization",
    title: "Deployment Time Optimization",
    description: "Your deployment times can be reduced by 40% by implementing parallel testing strategies.",
    impact: "High",
    category: "Performance",
    action: "View Recommendations",
    icon: TrendingUp
  },
  {
    id: 2,
    type: "productivity",
    title: "Peak Productivity Hours",
    description: "Your team is most productive between 10 AM - 2 PM. Consider scheduling critical tasks during this window.",
    impact: "Medium",
    category: "Productivity",
    action: "Optimize Schedule",
    icon: Clock
  },
  {
    id: 3,
    type: "suggestion",
    title: "Code Review Bottleneck",
    description: "Code reviews are taking 2x longer than industry average. Consider implementing automated pre-checks.",
    impact: "High",
    category: "Process",
    action: "Setup Automation",
    icon: Target
  },
  {
    id: 4,
    type: "insight",
    title: "Security Scan Frequency",
    description: "Increase security scans to daily for critical repositories to maintain compliance standards.",
    impact: "Medium",
    category: "Security",
    action: "Configure Scans",
    icon: Lightbulb
  }
]

const getImpactColor = (impact: string) => {
  switch (impact) {
    case "High":
      return "bg-destructive/10 text-destructive border-destructive/20"
    case "Medium":
      return "bg-warning/10 text-warning border-warning/20"
    case "Low":
      return "bg-success/10 text-success border-success/20"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export function AIInsights() {
  return (
    <Card className="border-border bg-card">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center space-x-2">
          <Brain className="h-5 w-5 text-primary" />
          <CardTitle className="text-lg font-semibold">AI Insights & Recommendations</CardTitle>
        </div>
        <Badge variant="secondary" className="bg-primary/10 text-primary">
          4 New
        </Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        {insights.map((insight) => {
          const Icon = insight.icon
          return (
            <div key={insight.id} className="p-4 rounded-lg border border-border bg-card-elevated hover:shadow-md transition-all duration-200">
              <div className="flex items-start justify-between space-x-4">
                <div className="flex items-start space-x-3 flex-1">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center space-x-2">
                      <h4 className="text-sm font-semibold text-card-foreground">
                        {insight.title}
                      </h4>
                      <Badge 
                        variant="outline" 
                        className={getImpactColor(insight.impact)}
                      >
                        {insight.impact} Impact
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-muted-foreground">
                      {insight.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs">
                        {insight.category}
                      </Badge>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-primary hover:text-primary-hover h-auto p-0"
                      >
                        {insight.action}
                        <ArrowRight className="h-3 w-3 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
        
        <div className="pt-4 border-t">
          <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
            <Brain className="h-4 w-4 mr-2" />
            Generate More Insights
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}