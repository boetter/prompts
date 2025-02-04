import { Component, type ReactNode } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Card className="m-4">
          <CardHeader className="flex flex-row items-center gap-2">
            <AlertCircle className="h-5 w-5 text-destructive" />
            <h2 className="text-lg font-semibold">Noget gik galt</h2>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Der opstod en fejl ved indlæsning af komponenten. Prøv at genindlæse siden.
            </p>
          </CardContent>
        </Card>
      );
    }

    return this.props.children;
  }
}
