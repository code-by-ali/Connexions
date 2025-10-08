import {
  Phone,
  PhoneOff,
  MapPin,
  Heart,
  AlertCircle,
  Shield,
} from "lucide-react";
import Watch11SafetyImg from "@/public/assets/watch-11-safety-section-img.svg";
import CommonImage from "../common/CommonImage";

export default function Watch11Safety() {
  const features = [
    {
      icon: Phone,
      title: "Emergency SOS call",
      description:
        "Get quick help with a press and hold. Plus, share medical information like allergies and medications with first responders.",
      color: "text-red-500",
    },
    {
      icon: PhoneOff,
      title: "Fall detection or a car crash.",
      description:
        "If Apple Watch detects a severe car crash or a hard fall, it can connect you to emergency services and notify your emergency contacts.",
      color: "text-red-500",
    },
    {
      icon: MapPin,
      title: "Crash Detection. You automatically get help if you need it most.",
      description:
        "If you're in a severe car crash, your Apple Watch can call emergency services and share your location even if you're unable to.",
      color: "text-red-500",
    },
    {
      icon: Heart,
      title: "When you sense there's a issue.",
      description:
        "Get notified of unusually high or low heart rates and irregular heart rhythms, which could be signs of a serious underlying condition.",
      color: "text-red-500",
    },
    {
      icon: AlertCircle,
      title: "Fall detection and you aren't what to do.",
      description:
        "If Apple Watch detects that you've taken a hard fall, it can help connect you to emergency services if you're immobile or unresponsive.",
      color: "text-red-500",
    },
    {
      icon: Shield,
      title: "When you give Siren/Alert.",
      description:
        "If you're somewhere you don't feel safe, you can discreetly activate a loud siren to attract attention and help from nearby.",
      color: "text-red-500",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-red-500 text-sm font-medium mb-2">Safety</p>
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-6">
            A real lifeline.
          </h2>
          <p className="text-base text-gray-700 max-w-3xl mx-auto">
            Packed with innovative safety features, Apple Watch Series 9 has
            your back. It's designed to summon help when you need it most — even
            if you can't reach your iPhone.
          </p>
        </div>

        {/* Apple Watch Image */}
        <div className="relative w-full max-w-2xl mx-auto my-16">
          <CommonImage
            src={Watch11SafetyImg.src || Watch11SafetyImg}
            alt="Apple Watch showing safety features"
            width={800}
            height={600}
            className="w-full h-auto"
          />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
          {" "}
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="flex flex-col items-start">
                {/* Icon */}
                <div className={`mb-4 ${feature.color}`}>
                  <IconComponent size={32} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
