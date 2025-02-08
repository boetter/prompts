import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Check, Copy, ExternalLink } from "lucide-react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";
import { useConfetti } from "@/hooks/use-confetti";
import type { Prompt } from "@/data/prompts";
import { categoryColors } from "@/data/prompts";

interface PromptCardProps {
  prompt: Prompt;
  index: number;
}

export default function PromptCard({ prompt, index }: PromptCardProps) {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const { triggerConfetti } = useConfetti();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const categoryColor = categoryColors[prompt.category];

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(prompt.content);
    setCopied(true);
    if (buttonRef.current) {
      triggerConfetti(buttonRef.current);
    }
    toast({
      title: "Kopieret til udklipsholder",
      description: "Prompten er blevet kopieret til din udklipsholder",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        duration: 0.3,
        delay: index * 0.05,
        type: "spring",
        stiffness: 100,
      }}
      layout
      className="h-full"
      role="article"
      aria-label={`Prompt: ${prompt.title}`}
    >
      <Card className={`group flex flex-col hover:shadow-lg transition-all duration-300 ${categoryColor.bg}`}>
        <CardHeader className="pb-2">
          <div className="flex items-start justify-between">
            <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
              {prompt.title}
            </h3>
          </div>
        </CardHeader>
        <CardContent className="pb-4">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {prompt.content}
          </p>
        </CardContent>
        <CardFooter className="flex gap-2 pt-0">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  ref={buttonRef}
                  variant="outline"
                  className="flex-1 group-hover:border-primary/50 relative overflow-hidden bg-background"
                  onClick={copyToClipboard}
                  aria-label={`Kopier prompt: ${prompt.title}`}
                >
                  <motion.div
                    className="absolute inset-0 bg-primary/5"
                    initial={false}
                    animate={copied ? {
                      scale: [0, 4],
                      opacity: [0.5, 0],
                    } : {}}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                  />
                  <motion.div
                    className="flex items-center gap-2 relative"
                    animate={copied ? {
                      x: [0, -4, 4, 0],
                    } : {}}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                  >
                    <motion.div
                      animate={copied ? {
                        scale: [1, 0.8, 1.2, 1],
                        rotate: [0, -10, 10, 0],
                      } : {}}
                      transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                      }}
                    >
                      {copied ? (
                        <Check className="h-4 w-4 text-green-500" aria-hidden="true" />
                      ) : (
                        <Copy className="w-4 h-4 group-hover:text-primary transition-colors" aria-hidden="true" />
                      )}
                    </motion.div>
                    <span className="group-hover:text-primary transition-colors">
                      {copied ? "Kopieret!" : "Kopier prompt"}
                    </span>
                  </motion.div>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Kopier prompt til udklipsholder</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="group-hover:border-primary/50 bg-background"
                  onClick={() => window.open(prompt.exampleUrl, '_blank')}
                  aria-label="Se eksempel på prompt brug"
                >
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Se eksempel på prompt brug</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardFooter>
      </Card>
    </motion.div>
  );
}