import { PromptCategory, promptCategories, categoryColors } from "@/data/prompts";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  selectedCategory: PromptCategory | "all";
  onCategoryChange: (category: PromptCategory | "all") => void;
}

export default function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <motion.div 
      className="flex flex-wrap gap-2 justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Button
        variant={selectedCategory === "all" ? "default" : "outline"}
        onClick={() => onCategoryChange("all")}
        size="sm"
        className={cn(
          "font-medium transition-all duration-200",
          selectedCategory === "all" && "bg-primary"
        )}
      >
        All Categories
      </Button>
      {promptCategories.map((category) => {
        const isSelected = selectedCategory === category;
        const colors = categoryColors[category];

        return (
          <Button
            key={category}
            variant={isSelected ? "default" : "outline"}
            onClick={() => onCategoryChange(category)}
            size="sm"
            className={cn(
              "capitalize font-medium transition-all duration-200",
              isSelected && colors.bg,
              isSelected && colors.text
            )}
          >
            {category}
          </Button>
        );
      })}
    </motion.div>
  );
}