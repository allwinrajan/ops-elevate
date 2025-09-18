import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, Plus, UserPlus, Mail } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "DevOps Engineer", 
      email: "alex.chen@company.com",
      status: "Active",
      avatar: "/api/placeholder/40/40"
    },
    {
      name: "Sarah Martinez",
      role: "Site Reliability Engineer",
      email: "sarah.martinez@company.com", 
      status: "Active",
      avatar: "/api/placeholder/40/40"
    },
    {
      name: "David Kim",
      role: "Cloud Architect",
      email: "david.kim@company.com",
      status: "Active", 
      avatar: "/api/placeholder/40/40"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Team</h1>
          <p className="text-muted-foreground mt-1">
            Manage your DevOps team members and collaborate effectively.
          </p>
        </div>
        
        <Button className="bg-gradient-primary hover:opacity-90">
          <UserPlus className="h-4 w-4 mr-2" />
          Invite Member
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <Card key={index} className="border-border bg-card hover:shadow-enterprise transition-shadow duration-200">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-card-foreground">{member.name}</h3>
                    <Badge variant="secondary">{member.status}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                  <div className="flex items-center space-x-1 mt-2">
                    <Mail className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{member.email}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-primary" />
            <span>Team Statistics</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">8</div>
              <div className="text-sm text-muted-foreground">Total Members</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-success">7</div>
              <div className="text-sm text-muted-foreground">Active</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-warning">1</div>
              <div className="text-sm text-muted-foreground">Away</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">12</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Team;