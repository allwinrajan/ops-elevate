import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  GitCommit, 
  CheckCircle, 
  AlertTriangle, 
  FileText,
  Users,
  Zap
} from "lucide-react"

const activities = [
  {
    id: 1,
    type: "commit",
    user: "Alex Chen",
    userAvatar: "/api/placeholder/32/32",
    action: "Deployed microservices architecture",
    project: "E-commerce Platform",
    time: "2 minutes ago",
    icon: GitCommit,
    status: "success"
  },
  {
    id: 2,
    type: "task",
    user: "Sarah Martinez",
    userAvatar: "/api/placeholder/32/32",
    action: "Completed security audit",
    project: "Payment Gateway",
    time: "15 minutes ago",
    icon: CheckCircle,
    status: "success"
  },
  {
    id: 3,
    type: "alert",
    user: "System",
    userAvatar: null,
    action: "High CPU usage detected",
    project: "Production Server",
    time: "32 minutes ago",
    icon: AlertTriangle,
    status: "warning"
  },
  {
    id: 4,
    type: "document",
    user: "David Kim",
    userAvatar: "/api/placeholder/32/32",
    action: "Updated deployment documentation",
    project: "DevOps Toolkit",
    time: "1 hour ago",
    icon: FileText,
    status: "info"
  },
  {
    id: 5,
    type: "team",
    user: "Emily Rodriguez",
    userAvatar: "/api/placeholder/32/32",
    action: "Added to project team",
    project: "ML Pipeline",
    time: "2 hours ago",
    icon: Users,
    status: "info"
  },
  {
    id: 6,
    type: "integration",
    user: "Mike Johnson",
    userAvatar: "/api/placeholder/32/32",
    action: "Connected Slack integration",
    project: "Monitoring Dashboard",
    time: "3 hours ago",
    icon: Zap,
    status: "success"
  }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "success":
      return "bg-success/10 text-success border-success/20"
    case "warning":
      return "bg-warning/10 text-warning border-warning/20"
    case "info":
      return "bg-primary/10 text-primary border-primary/20"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export function RecentActivity() {
  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon
          return (
            <div key={activity.id} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
              <div className={`p-2 rounded-full ${getStatusColor(activity.status)}`}>
                <Icon className="h-4 w-4" />
              </div>
              
              <div className="flex-1 space-y-1">
                <div className="flex items-center space-x-2">
                  {activity.userAvatar ? (
                    <Avatar className="h-5 w-5">
                      <AvatarImage src={activity.userAvatar} alt={activity.user} />
                      <AvatarFallback className="text-xs">
                        {activity.user.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  ) : null}
                  <span className="text-sm font-medium text-card-foreground">
                    {activity.user}
                  </span>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  {activity.action}
                </p>
                
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {activity.project}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {activity.time}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}