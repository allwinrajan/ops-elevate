import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Settings as SettingsIcon, User, Bell, Shield, Palette } from "lucide-react";

const Settings = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-1">
          Customize your DevOps platform experience.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <User className="h-5 w-5 text-primary" />
              <span>Profile Settings</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Display Name</Label>
              <input 
                id="name"
                type="text" 
                defaultValue="Alex Chen"
                className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <input 
                id="email"
                type="email" 
                defaultValue="alex.chen@company.com"
                className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm"
              />
            </div>
            <Button>Save Changes</Button>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bell className="h-5 w-5 text-primary" />
              <span>Notifications</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-notifications">Email Notifications</Label>
                <div className="text-sm text-muted-foreground">
                  Receive email updates for important events
                </div>
              </div>
              <Switch id="email-notifications" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="push-notifications">Push Notifications</Label>
                <div className="text-sm text-muted-foreground">
                  Get notified about project updates
                </div>
              </div>
              <Switch id="push-notifications" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="ai-suggestions">AI Suggestions</Label>
                <div className="text-sm text-muted-foreground">
                  Receive intelligent recommendations
                </div>
              </div>
              <Switch id="ai-suggestions" defaultChecked />
            </div>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-primary" />
              <span>Security</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                <div className="text-sm text-muted-foreground">
                  Add an extra layer of security
                </div>
              </div>
              <Switch id="two-factor" />
            </div>
            <Button variant="outline" className="w-full">
              Change Password
            </Button>
            <Button variant="outline" className="w-full">
              Download Security Report
            </Button>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Palette className="h-5 w-5 text-primary" />
              <span>Appearance</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Theme Preference</Label>
              <div className="text-sm text-muted-foreground mb-3">
                Use the theme toggle in the header to switch between light and dark modes
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="compact-mode">Compact Mode</Label>
                <div className="text-sm text-muted-foreground">
                  Reduce spacing and padding
                </div>
              </div>
              <Switch id="compact-mode" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings;