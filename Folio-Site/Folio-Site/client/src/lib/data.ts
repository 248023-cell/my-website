import { Instagram, Video } from "lucide-react";
import heroBg from "@assets/generated_images/minimalist_photography_studio_background.png";
import cameraStand from "@assets/generated_images/professional_camera_tripod_product_shot.png";
import lighting from "@assets/generated_images/studio_lighting_equipment_product_shot.png";
import camera from "@assets/generated_images/professional_camera_product_shot.png";
import portrait from "@assets/generated_images/female_photographer_portrait.png";

export const portfolioData = {
  personal: {
    name: "Sara Salem Hafez Hammouri",
    shortName: "Sara Hammouri",
    title: "Photographer",
    tagline: "Capturing moments that matter.",
    email: "248023@ppu.edu.ps",
    phone: "0568802910",
    bio: "Looking for an opportunity to further develop and enhance my new skills in photography. I believe in the power of visual storytelling and the art of freezing time through a lens.",
    social: [
      {
        platform: "Instagram",
        url: "https://www.instagram.com/sarahammouri066?igsh=czc5OXQ0OXc5NnQ5&utm_source=qr",
        icon: Instagram
      },
      {
        platform: "TikTok",
        url: "https://www.tiktok.com/@sarahammouri1?_r=1&_t=ZS-91yg9FRRpCf",
        icon: Video
      }
    ]
  },
  images: {
    hero: heroBg,
    profile: portrait, // Fallback/Generated high-quality portrait
  },
  skills: [
    { name: "Photography", level: 95 },
    { name: "Video Editing", level: 90 },
    { name: "Social Media", level: 90 },
    { name: "Programming", level: 80 },
    { name: "Content Writing", level: 70 },
  ],
  projects: [
    {
      id: 1,
      title: "Camera Stand",
      description: "Strong and durable camera support system designed for stability in any environment. Easy to carry and deploy for on-location shoots.",
      image: cameraStand,
      link: "#"
    },
    {
      id: 2,
      title: "Studio Lighting",
      description: "Professional lighting setup featuring adjustable color temperature and remote control. Essential for creating mood and depth in portraiture.",
      image: lighting,
      link: "#"
    },
    {
      id: 3,
      title: "4K Cinema Camera",
      description: "High-end digital camera setup with external audio and wide-angle lens. Perfect for both crisp photography and cinematic video production.",
      image: camera,
      link: "#"
    }
  ]
};
