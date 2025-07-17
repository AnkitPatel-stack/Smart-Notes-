import { Box } from "@mui/material"
import HeroSection from "./components/hero-section"
import AboutSection from "./components/about-section"
import FeaturesSection from "./components/features-section"
import WhyChooseUsSection from "./components/why-choose-us-section"
import NotesAIEnhancedSection from "./components/notes-ai-enhanced-section"

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <WhyChooseUsSection />
      <NotesAIEnhancedSection />
    </Box>
  )
}
