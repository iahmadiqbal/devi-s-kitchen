import { Sparkles } from "lucide-react";

const AnnouncementBanner = () => {
  return (
    <div className="bg-gradient-to-r from-primary via-primary-dark to-primary text-primary-foreground py-3 px-4">
      <div className="container mx-auto text-center">
        {/* Text */}
        <p className="text-sm md:text-base font-medium">
          ⭐ Our menu pricing is coming soon — stay tuned for something delicious
        </p>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
