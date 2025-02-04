import { useState, useEffect, Suspense, lazy } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import { prompts, PromptCategory } from "@/data/prompts";
import SearchBar from "@/components/search-bar";
import CategoryFilter from "@/components/category-filter";
import { Button } from "@/components/ui/button";
import ErrorBoundary from "@/components/error-boundary";

const PromptCard = lazy(() => import("@/components/prompt-card"));

const PROMPTS_PER_PAGE = 8;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<PromptCategory | "all">("all");
  const [displayCount, setDisplayCount] = useState(PROMPTS_PER_PAGE);

  useEffect(() => {
    setDisplayCount(PROMPTS_PER_PAGE);
  }, [search, selectedCategory]);

  const filteredPrompts = prompts.filter((prompt) => {
    const searchMatch = 
      prompt.title.toLowerCase().includes(search.toLowerCase()) ||
      prompt.content.toLowerCase().includes(search.toLowerCase());

    const categoryMatch = selectedCategory === "all" || prompt.category === selectedCategory;

    return searchMatch && categoryMatch;
  });

  const visiblePrompts = filteredPrompts.slice(0, displayCount);
  const hasMore = displayCount < filteredPrompts.length;

  const loadMore = () => {
    setDisplayCount(prev => Math.min(prev + PROMPTS_PER_PAGE, filteredPrompts.length));
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-2">
            <h1 className="text-5xl font-bold animate-gradient bg-gradient-to-r from-primary/90 via-purple-500 to-primary/90 bg-clip-text text-transparent">
              Prompt Bibliotek
            </h1>
            <motion.div
              animate={{ 
                rotate: [0, 15, -15, 0],
                scale: [1, 1.2, 1.2, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
              aria-hidden="true"
            >
              <Sparkles className="w-8 h-8 text-primary" />
            </motion.div>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Udforsk og brug kreative prompts til AI samtaler
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <SearchBar value={search} onChange={setSearch} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <CategoryFilter 
              selectedCategory={selectedCategory} 
              onCategoryChange={setSelectedCategory} 
            />
          </motion.div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr"
        >
          <AnimatePresence mode="popLayout">
            <ErrorBoundary>
              <Suspense fallback={
                <div className="col-span-full text-center py-8 text-muted-foreground">
                  Indlæser prompts...
                </div>
              }>
                {visiblePrompts.map((prompt, index) => (
                  <PromptCard key={prompt.id} prompt={prompt} index={index} />
                ))}
              </Suspense>
            </ErrorBoundary>
          </AnimatePresence>
        </motion.div>

        {filteredPrompts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-muted-foreground mt-12"
            role="alert"
            aria-live="polite"
          >
            Ingen prompts fundet der matcher dine kriterier
          </motion.div>
        )}

        {hasMore && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center mt-12"
          >
            <Button
              variant="outline"
              size="lg"
              onClick={loadMore}
              className="px-8"
              aria-label="Vis flere prompts"
            >
              Vis flere prompts
            </Button>
          </motion.div>
        )}
      </div>
    </main>
  );
}