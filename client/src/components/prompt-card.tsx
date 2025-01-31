import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Sparkles } from "lucide-react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";
import type { Prompt } from "@/data/prompts";
import { categoryColors } from "@/data/prompts";

interface PromptCardProps {
  prompt: Prompt;
}

export default function PromptCard({ prompt }: PromptCardProps) {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const categoryColor = categoryColors[prompt.category];

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(prompt.content);
    setCopied(true);
    toast({
      title: "Copied to clipboard",
      description: "The prompt has been copied to your clipboard",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="group h-full flex flex-col hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
        <CardHeader className="relative">
          <div className="flex items-start justify-between space-y-0">
            <div className="space-y-2">
              <h3 className="font-semibold text-xl leading-tight group-hover:text-primary transition-colors">
                {prompt.title}
              </h3>
              <Badge 
                variant="secondary" 
                className={`${categoryColor.bg} ${categoryColor.text} capitalize transition-colors`}
              >
                {prompt.category}
              </Badge>
            </div>
            <Sparkles className="w-5 h-5 text-primary/40 group-hover:text-primary transition-colors" />
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground text-sm leading-relaxed">
            {prompt.description}
          </p>
        </CardContent>
        <CardFooter className="pt-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full hover:bg-primary/5 group-hover:border-primary/50"
                  onClick={copyToClipboard}
                >
                  <motion.div
                    className="flex items-center gap-2"
                    initial={false}
                    animate={copied ? { scale: [1, 1.2, 1] } : {}}
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4 group-hover:text-primary transition-colors" />
                    )}
                    <span className="group-hover:text-primary transition-colors">
                      {copied ? "Copied!" : "Copy Prompt"}
                    </span>
                  </motion.div>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Copy prompt to clipboard</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardFooter>
      </Card>
    </motion.div>
  );
}