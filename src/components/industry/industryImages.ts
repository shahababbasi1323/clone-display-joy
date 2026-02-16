// Category-to-image mapping for industry pages
import healthcareImg from "@/assets/industries/healthcare.jpg";
import legalImg from "@/assets/industries/legal.jpg";
import homeServicesImg from "@/assets/industries/home-services.jpg";
import foodImg from "@/assets/industries/food-hospitality.jpg";
import techImg from "@/assets/industries/technology.jpg";
import educationImg from "@/assets/industries/education.jpg";
import ecommerceImg from "@/assets/industries/ecommerce.jpg";
import automotiveImg from "@/assets/industries/automotive.jpg";
import beautyImg from "@/assets/industries/beauty.jpg";
import financeImg from "@/assets/industries/finance.jpg";
import creativeImg from "@/assets/industries/creative.jpg";
import travelImg from "@/assets/industries/travel.jpg";
import realEstateImg from "@/assets/industries/real-estate.jpg";
import fitnessImg from "@/assets/industries/fitness.jpg";
import logisticsImg from "@/assets/industries/logistics.jpg";
import agricultureImg from "@/assets/industries/agriculture.jpg";
import energyImg from "@/assets/industries/energy.jpg";
import marketingImg from "@/assets/industries/marketing.jpg";

const categoryImages: Record<string, string> = {
  "Healthcare & Medical": healthcareImg,
  "Legal & Professional": legalImg,
  "Home Services & Construction": homeServicesImg,
  "Food & Hospitality": foodImg,
  "Technology & SaaS": techImg,
  "Education & Training": educationImg,
  "Ecommerce & Retail": ecommerceImg,
  "Automotive & Transport": automotiveImg,
  "Beauty & Lifestyle": beautyImg,
  "Finance & Banking": financeImg,
  "Creative & Media": creativeImg,
  "Travel & Tourism": travelImg,
  "Real Estate & Property": realEstateImg,
  "Fitness & Sports": fitnessImg,
  "Logistics & Supply Chain": logisticsImg,
  "Agriculture & Farming": agricultureImg,
  "Energy & Utilities": energyImg,
  "Marketing & Advertising": marketingImg,
  // Fallbacks for other categories
  "Media & Entertainment": creativeImg,
  "Public Sector & Government": legalImg,
  "Government & Public Sector": legalImg,
  "Telecom & Internet": techImg,
  "Repair & Maintenance": techImg,
  "Legal & Professional Services": legalImg,
  "Home Services & Trades": homeServicesImg,
  "Automotive & Transportation": automotiveImg,
  "Beauty & Wellness": beautyImg,
  "Events & Creative": creativeImg,
  "Other Industries": techImg,
};

export function getIndustryCategoryImage(category: string): string {
  return categoryImages[category] || techImg;
}
