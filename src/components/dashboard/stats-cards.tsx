import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  FolderKanban, 
  CheckCircle, 
  Clock, 
  TrendingUp,
  AlertTriangle,
  Users
} from "lucide-react"

const stats = [
  {
    title: "Active Projects",
    value: "12",
    change: "+2",
    changeType: "positive" as const,
    icon: FolderKanban,
    description: "Projects in progress"
  },
  {
    title: "Completed Tasks",
    value: "247",
    change: "+23",
    changeType: "positive" as const,
    icon: CheckCircle,
    description: "This month"
  },
  {
    title: "Pending Tasks",
    value: "18",
    change: "-5",
    changeType: "positive" as const,
    icon: Clock,
    description: "Due this week"
  },
  {
    title: "Team Efficiency",
    value: "94%",
    change: "+8%",
    changeType: "positive" as const,
    icon: TrendingUp,
    description: "Performance score"
  },
  {
    title: "Critical Issues",
    value: "3",
    change: "-2",
    changeType: "positive" as const,
    icon: AlertTriangle,
    description: "Needs attention"
  },
  {
    title: "Team Members",
    value: "8",
    change: "+1",
    changeType: "positive" as const,
    icon: Users,
    description: "Active developers"
  }
]

export function StatsCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <Card key={index} className="border-border bg-card hover:shadow-enterprise transition-shadow duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground mb-1">
                {stat.value}
              </div>
              <div className="flex items-center space-x-2">
                <Badge 
                  variant="secondary"
                  className={`${
                    stat.changeType === 'positive' 
                      ? 'bg-success/10 text-success hover:bg-success/20' 
                      : 'bg-destructive/10 text-destructive hover:bg-destructive/20'
                  } border-none`}
                >
                  {stat.change}
                </Badge>
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}