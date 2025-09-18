import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileOutput, Download, Calendar, FileText, FileSpreadsheet } from "lucide-react";

const ExportCenter = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Export Center</h1>
        <p className="text-muted-foreground mt-1">
          Generate and download comprehensive project reports and data exports.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileSpreadsheet className="h-5 w-5 text-primary" />
              <span>Project Data Export</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Export project details, task progress, and team metrics in CSV format.
            </p>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="h-4 w-4 mr-2" />
                Select Date Range
              </Button>
              <Button className="w-full bg-gradient-primary hover:opacity-90">
                <Download className="h-4 w-4 mr-2" />
                Export CSV
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="h-5 w-5 text-accent" />
              <span>PDF Reports</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Generate comprehensive PDF reports with charts, analytics, and insights.
            </p>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="h-4 w-4 mr-2" />
                Select Date Range
              </Button>
              <Button className="w-full bg-gradient-secondary hover:opacity-90">
                <Download className="h-4 w-4 mr-2" />
                Generate PDF
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileOutput className="h-5 w-5 text-primary" />
            <span>Export History</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <FileOutput className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No exports yet</h3>
            <p className="text-muted-foreground">
              Your export history will appear here once you generate your first report.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExportCenter;