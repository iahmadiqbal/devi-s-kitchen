import { Star } from "lucide-react";

const AnnouncementBanner = () => {
  return (
    <div className=" py-4 mt-36 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center justify-center gap-2 text-center">
          {/* Star Icon */}
          <Star className="w-4 h-4 text-primary fill-primary flex-shrink-0" />

          {/* Text */}
          <p className="text-sm md:text-base font-medium text-foreground ">
            Our menu pricing is coming soon — stay tuned for something delicious
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
