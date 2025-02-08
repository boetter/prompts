import { useState, useEffect, Suspense, lazy } from "react";
import { Sparkles } from "lucide-react";
import { prompts, PromptCategory } from "@/data/prompts";
import SearchBar from "@/components/search-bar";
import CategoryFilter from "@/components/category-filter";
import { Button } from "@/components/ui/button";
import ErrorBoundary from "@/components/error-boundary";

const PromptCard = lazy(() => import("@/components/prompt-card"));

const PROMPTS_PER_PAGE = 8;

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<PromptCategory | "all">("all");
  const [displayCount, setDisplayCount] = useState(PROMPTS_PER_PAGE);
  const [shuffledPrompts] = useState(() => shuffleArray(prompts));

  useEffect(() => {
    setDisplayCount(PROMPTS_PER_PAGE);
  }, [search, selectedCategory]);

  const filteredPrompts = shuffledPrompts.filter((prompt) => {
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
    <main className="min-h-screen bg-gradient-to-b from-background to-background/80 flex flex-col">
      <div className="container mx-auto px-4 py-12 flex-grow">
        <header className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <h1 className="text-5xl font-bold animate-gradient bg-gradient-to-r from-primary/90 via-purple-500 to-primary/90 bg-clip-text text-transparent">
              Prompt Bibliotek
            </h1>
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Jeg har indsamlet {prompts.length} prompts – måske er der også en for dig?
          </p>
        </header>

        <section className="max-w-3xl mx-auto space-y-8 mb-16">
          <SearchBar value={search} onChange={setSearch} />

          <CategoryFilter 
            selectedCategory={selectedCategory} 
            onCategoryChange={setSelectedCategory} 
          />
        </section>

        <section 
          aria-label="Prompt liste"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-auto"
        >
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
        </section>

        {filteredPrompts.length === 0 && (
          <div
            className="text-center text-muted-foreground mt-12"
            role="alert"
            aria-live="polite"
          >
            Ingen prompts fundet der matcher dine kriterier
          </div>
        )}

        {hasMore && (
          <div 
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
          </div>
        )}
      </div>

      <footer className="w-full py-6 border-t border-border">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>
            Et eksperiment af{" "}
            <a 
              href="https://www.linkedin.com/in/boetter/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Jacob Bøtter
            </a>{" "}
            fra{" "}
            <a 
              href="https://heutedenkenmorgenfertig.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Heute denken, morgen fertig
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}