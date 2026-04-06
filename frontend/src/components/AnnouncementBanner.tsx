import { Sparkles } from "lucide-react";

const AnnouncementBanner = () => (
  <div className="bg-gradient-to-r from-primary via-primary-dark to-primary text-primary-foreground py-3 px-4">
    <div className="container mx-auto flex items-center justify-center gap-2 text-center">
      <Sparkles className="w-5 h-5 animate-pulse" />
      <p className="text-sm md:text-base font-medium">
        Our menu pricing is coming soon — stay tuned for something delicious!
      </p>
      <Sparkles className="w-5 h-5 animate-pulse" />
    </div>
  </div>
);

export default AnnouncementBanner;
