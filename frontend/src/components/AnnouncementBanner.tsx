import { Star } from "lucide-react";

const AnnouncementBanner = () => {
  return (
    <div className="bg-gradient-to-b from-surface-light to-white py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg border-2 border-primary/20 p-8 md:p-10">
          <div className="flex flex-col items-center justify-center text-center gap-4">
            {/* Star Icon */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-lg">
              <Star className="w-8 h-8 text-primary-foreground fill-primary-foreground" />
            </div>
            {/* Text */}
            <p className="text-lg md:text-xl font-semibold text-foreground leading-relaxed">
              Our menu pricing is coming soon — stay tuned for something delicious
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
