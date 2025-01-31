import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import { prompts, PromptCategory } from "@/data/prompts";
import PromptCard from "@/components/prompt-card";
import SearchBar from "@/components/search-bar";
import CategoryFilter from "@/components/category-filter";

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<PromptCategory | "all">("all");

  const filteredPrompts = prompts.filter((prompt) => {
    const matchesSearch = prompt.title.toLowerCase().includes(search.toLowerCase()) ||
                         prompt.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "all" || prompt.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-2">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary/80 to-purple-500 bg-clip-text text-transparent">
              Prompt Library
            </h1>
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover and use creative prompts for AI conversations
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
          <AnimatePresence mode="popLayout">
            {filteredPrompts.map((prompt, index) => (
              <motion.div
                key={prompt.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
              >
                <PromptCard prompt={prompt} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredPrompts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-muted-foreground mt-12"
          >
            No prompts found matching your criteria
          </motion.div>
        )}
      </div>
    </div>
  );
}