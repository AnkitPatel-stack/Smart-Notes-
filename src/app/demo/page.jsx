// import {
//   Card,
//   CardContent,
//   Container,
//   Grid,
//   Typography,
//   Box,
// } from "@mui/material"
// import {
//   Edit as EditIcon,
//   Psychology as PsychologyIcon,
//   Search as SearchIcon,
//   Assignment as AssignmentIcon,
//   Speed as SpeedIcon,
// } from "@mui/icons-material"
// import ParticleBackground from "../components/particle-background"
// import ScrollAnimation from "../components/scroll-animation"
// import StaggeredScrollAnimation from "../components/staggered-scroll-animation"

// function ProductDemo() {
//   const efficiencyGains = [
//     {
//       title: "Documentation Speed",
//       improvement: "75% faster",
//       description: "AI-assisted documentation",
//       icon: SpeedIcon,
//       color: "linear-gradient(to right, #3b82f6, #06b6d4)",
//     },
//     {
//       title: "Knowledge Retention",
//       improvement: "90% improvement",
//       description: "Better knowledge management",
//       icon: PsychologyIcon,
//       color: "linear-gradient(to right, #22c55e, #059669)",
//     },
//     {
//       title: "Action Tracking",
//       improvement: "80% better",
//       description: "Enhanced accountability",
//       icon: AssignmentIcon,
//       color: "linear-gradient(to right, #8b5cf6, #ec4899)",
//     },
//     {
//       title: "Research Efficiency",
//       improvement: "65% reduction",
//       description: "Smart linking and search",
//       icon: SearchIcon,
//       color: "linear-gradient(to right, #f97316, #ef4444)",
//     },
//   ]

//   const beforeAfterComparison = {
//     before: {
//       title: "Manual Note-Taking",
//       challenges: [
//         "Handwritten or basic text notes",
//         "Time-consuming manual documentation",
//         "Difficulty finding specific information",
//         "Inconsistent note-taking formats",
//         "Lost action items and follow-ups",
//         "Limited collaboration on notes",
//       ],
//       painPoints: [
//         "Hours spent on manual documentation",
//         "Missed action items and deadlines",
//         "Inconsistent information capture",
//         "Difficulty sharing and collaborating",
//       ],
//     },
//     after: {
//       title: "AI-Powered Knowledge Management",
//       capabilities: [
//         "AI-assisted smart note creation",
//         "Automated summarization and documentation",
//         "Instant information search and retrieval",
//         "Standardized, intelligent formatting",
//         "Automatic action item tracking",
//         "Seamless collaborative note-taking",
//       ],
//       improvements: [
//         "Minutes spent on automated documentation",
//         "Zero missed action items",
//         "Consistent, intelligent information capture",
//         "Enhanced sharing and collaboration",
//       ],
//     },
//   }

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         background: "linear-gradient(135deg, #4c1d95 0%, #5b21b6 50%, #312e81 100%)",
//         position: "relative",
//         overflow: "hidden",
//         pt: 2,
//       }}
//     >
//       <ParticleBackground count={50} speed={0.3} />

//       <Box sx={{ position: "relative", zIndex: 10, py: 12 }}>
//         <Container maxWidth="xl">
//           <ScrollAnimation direction="up" distance={50} duration={0.8} delay={0.1}>
//             <Box sx={{ textAlign: "center", mb: 8 }}>
//               <Box
//                 sx={{
//                   display: "inline-flex",
//                   alignItems: "center",
//                   px: 2,
//                   py: 1,
//                   borderRadius: "9999px",
//                   backgroundColor: "rgba(139, 92, 246, 0.2)",
//                   backdropFilter: "blur(4px)",
//                   border: "1px solid rgba(167, 139, 250, 0.3)",
//                   color: "#e9d5ff",
//                   fontSize: "0.875rem",
//                   fontWeight: 500,
//                   mb: 4,
//                 }}
//               >
//                 📝 Week 17-18: Faster & Accurate Processing
//               </Box>
//               <Typography
//                 variant="h2"
//                 sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" }, fontWeight: "bold", color: "white", mb: 2 }}
//               >
//                 Notes -{" "}
//                 <span
//                   style={{
//                     background: "linear-gradient(to right, #c4b5fd, #f9a8d4)",
//                     WebkitBackgroundClip: "text",
//                     WebkitTextFillColor: "transparent",
//                   }}
//                 >
//                   AI Enhanced
//                 </span>
//               </Typography>
//               <Typography
//                 variant="h6"
//                 sx={{ fontSize: "1.25rem", color: "#e9d5ff", maxWidth: "32rem", mx: "auto", mb: 4 }}
//               >
//                 AI-enhanced note-taking and knowledge management
//               </Typography>

//               <Card
//                 sx={{
//                   maxWidth: 896,
//                   mx: "auto",
//                   backgroundColor: "rgba(255, 255, 255, 0.1)",
//                   backdropFilter: "blur(4px)",
//                   border: "1px solid rgba(255, 255, 255, 0.2)",
//                   mb: 8,
//                   borderRadius: 4,
//                 }}
//               >
//                 <CardContent sx={{ p: 0 }}>
//                   <Box
//                     sx={{
//                       position: "relative",
//                       overflow: "hidden",
//                       borderRadius: 1,
//                       aspectRatio: "16/9",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         position: "absolute",
//                         top: 0,
//                         left: 0,
//                         right: 0,
//                         bottom: 0,
//                         background:
//                           "linear-gradient(to bottom right, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2))",
//                       }}
//                     />
//                     <Box sx={{ textAlign: "center", color: "white", zIndex: 10 }}>
//                       <EditIcon sx={{ fontSize: 80, mb: 2, opacity: 0.8 }} />
//                       <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
//                         Smart Notes Demo
//                       </Typography>
//                       <Typography sx={{ color: "#e9d5ff" }}>See AI-enhanced note-taking in action</Typography>
//                     </Box>
//                   </Box>
//                 </CardContent>
//               </Card>
//             </Box>
//           </ScrollAnimation>

//           <ScrollAnimation direction="up" distance={40} duration={0.7} delay={0.2}>
//             <Box sx={{ mb: 10 }}>
//               <Box sx={{ textAlign: "center", mb: 6 }}>
//                 <Typography variant="h3" sx={{ fontSize: "2.5rem", fontWeight: "bold", color: "white", mb: 2 }}>
//                   Efficiency Gains & Impact
//                 </Typography>
//                 <Typography sx={{ color: "#e9d5ff" }}>
//                   Measurable improvements in productivity and knowledge management
//                 </Typography>
//               </Box>
//               <StaggeredScrollAnimation direction="up" distance={50} duration={0.6} staggerDelay={0.1}>
//                 <Grid container spacing={3} justifyContent="center">
//                   {efficiencyGains.map((gain, index) => {
//                     const IconComponent = gain.icon
//                     return (
//                       <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
//                         <Card
//                           sx={{
//                             width: 280,
//                             minHeight: 220,
//                             backgroundColor: "rgba(255, 255, 255, 0.1)",
//                             backdropFilter: "blur(4px)",
//                             border: "1px solid rgba(255, 255, 255, 0.2)",
//                             transition: "all 0.3s",
//                             "&:hover": {
//                               backgroundColor: "rgba(255, 255, 255, 0.2)",
//                               transform: "translateY(-4px)",
//                             },
//                           }}
//                         >
//                           <CardContent sx={{ p: 3, textAlign: "center" }}>
//                             <Box
//                               sx={{
//                                 width: 56,
//                                 height: 56,
//                                 background: gain.color,
//                                 borderRadius: 2,
//                                 display: "flex",
//                                 alignItems: "center",
//                                 justifyContent: "center",
//                                 mx: "auto",
//                                 mb: 2,
//                               }}
//                             >
//                               <IconComponent sx={{ fontSize: 28, color: "#fff" }} />
//                             </Box>
//                             <Typography variant="h6" sx={{ fontWeight: 700, color: "#fff", mb: 1 }}>
//                               {gain.title}
//                             </Typography>
//                             <Typography variant="h5" sx={{ fontWeight: 800, color: "#4ade80", mb: 1 }}>
//                               {gain.improvement}
//                             </Typography>
//                             <Typography sx={{ color: "#e9d5ff", fontSize: "0.875rem" }}>{gain.description}</Typography>
//                           </CardContent>
//                         </Card>
//                       </Grid>
//                     )
//                   })}
//                 </Grid>
//               </StaggeredScrollAnimation>
//             </Box>
//           </ScrollAnimation>

//           <ScrollAnimation direction="up" distance={40} duration={0.7} delay={0.1}>
//             <Box sx={{ mb: 10 }}>
//               <Box sx={{ textAlign: "center", mb: 6 }}>
//                 <Typography variant="h3" sx={{ fontSize: "2.5rem", fontWeight: "bold", color: "white", mb: 2 }}>
//                   Before vs After Implementation
//                 </Typography>
//                 <Typography sx={{ color: "#e9d5ff" }}>
//                   See the transformation from manual processes to AI-powered efficiency
//                 </Typography>
//               </Box>
//               <Grid container spacing={4} justifyContent="center">
//                 <Grid item xs={12} lg={6}>
//                   <Card
//                     sx={{
//                       backgroundColor: "rgba(239, 68, 68, 0.1)",
//                       backdropFilter: "blur(4px)",
//                       border: "1px solid rgba(248, 113, 113, 0.3)",
//                       minHeight: 400,
//                     }}
//                   >
//                     <CardContent sx={{ p: 4 }}>
//                       <Typography variant="h5" sx={{ fontWeight: "bold", color: "#fff", mb: 3 }}>
//                         {beforeAfterComparison.before.title}
//                       </Typography>
//                       <Typography variant="h6" sx={{ color: "#fecaca", mb: 2 }}>
//                         Current Challenges:
//                       </Typography>
//                       <Box sx={{ mb: 3 }}>
//                         {beforeAfterComparison.before.challenges.map((challenge, index) => (
//                           <Typography key={index} sx={{ color: "#fee2e2", mb: 1, fontSize: "0.9rem" }}>
//                             • {challenge}
//                           </Typography>
//                         ))}
//                       </Box>
//                       <Typography variant="h6" sx={{ color: "#fecaca", mb: 2 }}>
//                         Key Pain Points:
//                       </Typography>
//                       <Box>
//                         {beforeAfterComparison.before.painPoints.map((point, index) => (
//                           <Typography key={index} sx={{ color: "#fee2e2", mb: 1, fontSize: "0.9rem" }}>
//                             • {point}
//                           </Typography>
//                         ))}
//                       </Box>
//                     </CardContent>
//                   </Card>
//                 </Grid>

//                 <Grid item xs={12} lg={6}>
//                   <Card
//                     sx={{
//                       backgroundColor: "rgba(34, 197, 94, 0.1)",
//                       backdropFilter: "blur(4px)",
//                       border: "1px solid rgba(74, 222, 128, 0.3)",
//                       minHeight: 400,
//                     }}
//                   >
//                     <CardContent sx={{ p: 4 }}>
//                       <Typography variant="h5" sx={{ fontWeight: "bold", color: "#fff", mb: 3 }}>
//                         {beforeAfterComparison.after.title}
//                       </Typography>
//                       <Typography variant="h6" sx={{ color: "#bbf7d0", mb: 2 }}>
//                         New Capabilities:
//                       </Typography>
//                       <Box sx={{ mb: 3 }}>
//                         {beforeAfterComparison.after.capabilities.map((capability, index) => (
//                           <Typography key={index} sx={{ color: "#dcfce7", mb: 1, fontSize: "0.9rem" }}>
//                             • {capability}
//                           </Typography>
//                         ))}
//                       </Box>
//                       <Typography variant="h6" sx={{ color: "#bbf7d0", mb: 2 }}>
//                         Achieved Improvements:
//                       </Typography>
//                       <Box>
//                         {beforeAfterComparison.after.improvements.map((improvement, index) => (
//                           <Typography key={index} sx={{ color: "#dcfce7", mb: 1, fontSize: "0.9rem" }}>
//                             • {improvement}
//                           </Typography>
//                         ))}
//                       </Box>
//                     </CardContent>
//                   </Card>
//                 </Grid>
//               </Grid>
//             </Box>
//           </ScrollAnimation>
//         </Container>
//       </Box>
//     </Box>
//   )
// }

// export default ProductDemo



"use client";

import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
} from "@mui/material";
import {
  Edit as EditIcon,
  Psychology as PsychologyIcon,
  Search as SearchIcon,
  Assignment as AssignmentIcon,
  Speed as SpeedIcon,
  Add as AddIcon,
  ExpandMore as ExpandMoreIcon,
  Lightbulb as LightbulbIcon,
  AutoAwesome as AutoAwesomeIcon,
  Share as ShareIcon,
  Security as SecurityIcon,
  Sync as SyncIcon,
  Devices as DevicesIcon,
} from "@mui/icons-material";
import ParticleBackground from "../components/particle-background";
import ScrollAnimation from "../components/scroll-animation";
import StaggeredScrollAnimation from "../components/staggered-scroll-animation";
import { useState } from "react";

function ProductDemo() {
  const [activeFeature, setActiveFeature] = useState(0);

  const efficiencyGains = [
    {
      title: "Documentation Speed",
      improvement: "75% faster",
      description: "AI-assisted documentation",
      icon: SpeedIcon,
      color: "linear-gradient(to right, #3b82f6, #06b6d4)",
    },
    {
      title: "Knowledge Retention",
      improvement: "90% improvement",
      description: "Better knowledge management",
      icon: PsychologyIcon,
      color: "linear-gradient(to right, #22c55e, #059669)",
    },
    {
      title: "Action Tracking",
      improvement: "80% better",
      description: "Enhanced accountability",
      icon: AssignmentIcon,
      color: "linear-gradient(to right, #8b5cf6, #ec4899)",
    },
    {
      title: "Research Efficiency",
      improvement: "65% reduction",
      description: "Smart linking and search",
      icon: SearchIcon,
      color: "linear-gradient(to right, #f97316, #ef4444)",
    },
  ];

  const beforeAfterComparison = {
    before: {
      title: "Manual Note-Taking",
      challenges: [
        "Handwritten or basic text notes",
        "Time-consuming manual documentation",
        "Difficulty finding specific information",
        "Inconsistent note-taking formats",
        "Lost action items and follow-ups",
        "Limited collaboration on notes",
      ],
      painPoints: [
        "Hours spent on manual documentation",
        "Missed action items and deadlines",
        "Inconsistent information capture",
        "Difficulty sharing and collaborating",
      ],
    },
    after: {
      title: "AI-Powered Knowledge Management",
      capabilities: [
        "AI-assisted smart note creation",
        "Automated summarization and documentation",
        "Instant information search and retrieval",
        "Standardized, intelligent formatting",
        "Automatic action item tracking",
        "Seamless collaborative note-taking",
      ],
      improvements: [
        "Minutes spent on automated documentation",
        "Zero missed action items",
        "Consistent, intelligent information capture",
        "Enhanced sharing and collaboration",
      ],
    },
  };

  const features = [
    {
      title: "AI-Powered Note Creation",
      icon: <AutoAwesomeIcon />,
      description:
        "Our smart notes use artificial intelligence to help you create notes faster and more effectively.",
      details: [
        "Automatically suggests titles based on content",
        "Generates summaries of long notes",
        "Provides smart formatting options",
        "Offers content completion suggestions",
      ],
    },
    {
      title: "Intelligent Search",
      icon: <SearchIcon />,
      description:
        "Find exactly what you need with our advanced search capabilities.",
      details: [
        "Search across all your notes instantly",
        "Understands natural language queries",
        "Finds related concepts, not just keywords",
        "Search within images and documents",
      ],
    },
    {
      title: "Collaboration",
      icon: <ShareIcon />,
      description:
        "Work together seamlessly with your team or across your devices.",
      details: [
        "Real-time note sharing and editing",
        "Comment and mention teammates",
        "Version history and change tracking",
        "Permission controls for shared notes",
      ],
    },
    {
      title: "Security",
      icon: <SecurityIcon />,
      description:
        "Your notes are protected with enterprise-grade security features.",
      details: [
        "End-to-end encryption for all notes",
        "Biometric authentication",
        "Self-destructing notes option",
        "Remote wipe capability",
      ],
    },
    {
      title: "Cross-Platform Sync",
      icon: <SyncIcon />,
      description: "Access your notes anywhere, on any device.",
      details: [
        "Instant sync across all your devices",
        "Offline access with automatic update when online",
        "Optimized for mobile, tablet, and desktop",
        "Low bandwidth mode available",
      ],
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #4c1d95 0%, #5b21b6 50%, #312e81 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <ParticleBackground count={50} speed={0.3} />

      <Box sx={{ position: "relative", zIndex: 10, py: 8 }}>
        <Container maxWidth="xl">
          {/* Hero Section */}
          <ScrollAnimation direction="up" distance={50} duration={0.8} delay={0.1}>
            <Box sx={{ textAlign: "center", mb: 8, px: { xs: 2, md: 0 } }}>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  px: 2,
                  py: 1,
                  borderRadius: "9999px",
                  backgroundColor: "rgba(139, 92, 246, 0.2)",
                  backdropFilter: "blur(4px)",
                  border: "1px solid rgba(167, 139, 250, 0.3)",
                  color: "#e9d5ff",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  mb: 4,
                }}
              >
                
              </Box>
              <Typography
                variant="h2"
                sx={{ 
                  fontSize: { xs: "2.5rem", md: "3.5rem" }, 
                  fontWeight: "bold", 
                  color: "white", 
                  mb: 2,
                  lineHeight: 1.2
                }}
              >
                Notes -{" "}
                <span
                  style={{
                    background: "linear-gradient(to right, #c4b5fd, #f9a8d4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  AI Enhanced
                </span>
              </Typography>
              <Typography
                variant="h6"
                sx={{ 
                  fontSize: "1.25rem", 
                  color: "#e9d5ff", 
                  maxWidth: "32rem", 
                  mx: "auto", 
                  mb: 4,
                  lineHeight: 1.6
                }}
              >
                AI-enhanced note-taking and knowledge management
              </Typography>

              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Card
                  sx={{
                    maxWidth: 896,
                    width: '100%',
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(4px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    mb: 8,
                    borderRadius: 4,
                    overflow: 'hidden'
                  }}
                >
                  <CardContent sx={{ p: 0 }}>
                    <Box
                      sx={{
                        position: "relative",
                        overflow: "hidden",
                        borderRadius: 1,
                        aspectRatio: "16/9",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background:
                            "linear-gradient(to bottom right, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2))",
                        }}
                      />
                      <Box sx={{ textAlign: "center", color: "white", zIndex: 10, p: 4 }}>
                        <EditIcon sx={{ fontSize: 80, mb: 2, opacity: 0.8 }} />
                        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                          Smart Notes Demo
                        </Typography>
                        <Typography sx={{ color: "#e9d5ff", mb: 3 }}>See AI-enhanced note-taking in action</Typography>
                        <Button
                          variant="contained"
                          color="secondary"
                          size="large"
                          startIcon={<AddIcon />}
                          sx={{ borderRadius: 2, px: 4, py: 1.5 }}
                        >
                          Try It Now
                        </Button>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Box>
          </ScrollAnimation>

          {/* Efficiency Gains Section */}
          <ScrollAnimation direction="up" distance={40} duration={0.7} delay={0.2}>
            <Box sx={{ mb: 10, px: { xs: 2, md: 0 } }}>
              <Box sx={{ textAlign: "center", mb: 6 }}>
                <Typography variant="h3" sx={{ 
                  fontSize: "2.5rem", 
                  fontWeight: "bold", 
                  color: "white", 
                  mb: 2 
                }}>
                  Efficiency Gains & Impact
                </Typography>
                <Typography sx={{ color: "#e9d5ff", maxWidth: 600, mx: 'auto' }}>
                  Measurable improvements in productivity and knowledge management
                </Typography>
              </Box>
              <StaggeredScrollAnimation direction="up" distance={50} duration={0.6} staggerDelay={0.1}>
                <Grid container spacing={3} justifyContent="center">
                  {efficiencyGains.map((gain, index) => {
                    const IconComponent = gain.icon;
                    return (
                      <Grid item xs={12} sm={6} md={6} lg={3} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Card
                          sx={{
                            width: '100%',
                            maxWidth: 280,
                            minHeight: 220,
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            backdropFilter: "blur(4px)",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            transition: "all 0.3s",
                            "&:hover": {
                              backgroundColor: "rgba(255, 255, 255, 0.2)",
                              transform: "translateY(-4px)",
                            },
                          }}
                        >
                          <CardContent sx={{ p: 3, textAlign: "center", height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <Box
                              sx={{
                                width: 56,
                                height: 56,
                                background: gain.color,
                                borderRadius: 2,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                mx: "auto",
                                mb: 2,
                              }}
                            >
                              <IconComponent sx={{ fontSize: 28, color: "#fff" }} />
                            </Box>
                            <Typography variant="h6" sx={{ fontWeight: 700, color: "#fff", mb: 1 }}>
                              {gain.title}
                            </Typography>
                            <Typography variant="h5" sx={{ fontWeight: 800, color: "#4ade80", mb: 1 }}>
                              {gain.improvement}
                            </Typography>
                            <Typography sx={{ color: "#e9d5ff", fontSize: "0.875rem", mt: 'auto' }}>
                              {gain.description}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    );
                  })}
                </Grid>
              </StaggeredScrollAnimation>
            </Box>
          </ScrollAnimation>

          {/* Before/After Comparison Section */}
          <ScrollAnimation direction="up" distance={40} duration={0.7} delay={0.1}>
            <Box sx={{ mb: 10, px: { xs: 2, md: 0 } }}>
              <Box sx={{ textAlign: "center", mb: 6 }}>
                <Typography variant="h3" sx={{ 
                  fontSize: "2.5rem", 
                  fontWeight: "bold", 
                  color: "white", 
                  mb: 2 
                }}>
                  Before vs After Implementation
                </Typography>
                <Typography sx={{ color: "#e9d5ff", maxWidth: 600, mx: 'auto' }}>
                  See the transformation from manual processes to AI-powered efficiency
                </Typography>
              </Box>
              <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} lg={6} sx={{ display: 'flex' }}>
                  <Card
                    sx={{
                      backgroundColor: "rgba(239, 68, 68, 0.1)",
                      backdropFilter: "blur(4px)",
                      border: "1px solid rgba(248, 113, 113, 0.3)",
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <CardContent sx={{ p: 4, flex: 1 }}>
                      <Typography variant="h5" sx={{ fontWeight: "bold", color: "#fff", mb: 3 }}>
                        {beforeAfterComparison.before.title}
                      </Typography>
                      <Typography variant="h6" sx={{ color: "#fecaca", mb: 2 }}>
                        Current Challenges:
                      </Typography>
                      <Box sx={{ mb: 3 }}>
                        {beforeAfterComparison.before.challenges.map((challenge, index) => (
                          <Typography key={index} sx={{ color: "#fee2e2", mb: 1, fontSize: "0.9rem" }}>
                            • {challenge}
                          </Typography>
                        ))}
                      </Box>
                      <Typography variant="h6" sx={{ color: "#fecaca", mb: 2 }}>
                        Key Pain Points:
                      </Typography>
                      <Box>
                        {beforeAfterComparison.before.painPoints.map((point, index) => (
                          <Typography key={index} sx={{ color: "#fee2e2", mb: 1, fontSize: "0.9rem" }}>
                            • {point}
                          </Typography>
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} lg={6} sx={{ display: 'flex' }}>
                  <Card
                    sx={{
                      backgroundColor: "rgba(34, 197, 94, 0.1)",
                      backdropFilter: "blur(4px)",
                      border: "1px solid rgba(74, 222, 128, 0.3)",
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <CardContent sx={{ p: 4, flex: 1 }}>
                      <Typography variant="h5" sx={{ fontWeight: "bold", color: "#fff", mb: 3 }}>
                        {beforeAfterComparison.after.title}
                      </Typography>
                      <Typography variant="h6" sx={{ color: "#bbf7d0", mb: 2 }}>
                        New Capabilities:
                      </Typography>
                      <Box sx={{ mb: 3 }}>
                        {beforeAfterComparison.after.capabilities.map((capability, index) => (
                          <Typography key={index} sx={{ color: "#dcfce7", mb: 1, fontSize: "0.9rem" }}>
                            • {capability}
                          </Typography>
                        ))}
                      </Box>
                      <Typography variant="h6" sx={{ color: "#bbf7d0", mb: 2 }}>
                        Achieved Improvements:
                      </Typography>
                      <Box>
                        {beforeAfterComparison.after.improvements.map((improvement, index) => (
                          <Typography key={index} sx={{ color: "#dcfce7", mb: 1, fontSize: "0.9rem" }}>
                            • {improvement}
                          </Typography>
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </ScrollAnimation>

          {/* Features Section */}
          <ScrollAnimation direction="up" distance={40} duration={0.7} delay={0.1}>
            <Box sx={{ 
              mb: 10, 
              px: { xs: 2, md: 0 },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '60vh'
            }}>
              <Box sx={{ 
                width: '100%',
                maxWidth: '1200px'
              }}>
                <Box sx={{ textAlign: "center", mb: 6 }}>
                  <Typography variant="h3" sx={{ 
                    fontSize: "2.5rem", 
                    fontWeight: "bold", 
                    color: "white", 
                    mb: 2 
                  }}>
                    Key Features
                  </Typography>
                  <Typography sx={{ color: "#e9d5ff", maxWidth: 600, mx: 'auto' }}>
                    Discover the powerful capabilities of our AI-enhanced notes
                  </Typography>
                </Box>
                
                <Grid container spacing={4} alignItems="stretch" sx={{ height: '100%' }}>
                  <Grid item xs={12} md={4}>
                    <Paper elevation={0} sx={{ 
                      p: 3, 
                      height: "100%", 
                      borderRadius: 3,
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(4px)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                    }}>
                      <List sx={{ height: '100%' }}>
                        {features.map((feature, index) => (
                          <ListItem
                            button={true} 
                            key={index}
                            selected={activeFeature === index}
                            onClick={() => setActiveFeature(index)}
                            sx={{
                              borderRadius: 2,
                              mb: 1,
                              bgcolor: activeFeature === index ? "rgba(167, 139, 250, 0.3)" : "transparent",
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                bgcolor: activeFeature === index ? "rgba(167, 139, 250, 0.4)" : "rgba(167, 139, 250, 0.1)"
                              }
                            }}
                          >
                            <ListItemIcon sx={{ 
                              color: activeFeature === index ? "#e9d5ff" : "#c4b5fd",
                              minWidth: '36px'
                            }}>
                              {feature.icon}
                            </ListItemIcon>
                            <ListItemText
                              primary={feature.title}
                              primaryTypographyProps={{
                                fontWeight: activeFeature === index ? "bold" : "medium",
                                color: activeFeature === index ? "white" : "#e9d5ff",
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <Card
                      sx={{
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        backdropFilter: "blur(4px)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        height: "100%",
                        borderRadius: 3,
                        minHeight: '400px',
                        display: 'flex',
                        flexDirection: 'column'
                      }}
                    >
                      <CardContent sx={{ 
                        p: 4, 
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        flexGrow: 1
                      }}>
                        <Box sx={{ mb: 3 }}>
                          <Typography variant="h5" sx={{ 
                            fontWeight: "bold", 
                            color: "white", 
                            mb: 2,
                            display: 'flex',
                            alignItems: 'center'
                          }}>
                            <Box sx={{
                              mr: 2,
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: 40,
                              height: 40,
                              borderRadius: '50%',
                              bgcolor: 'rgba(167, 139, 250, 0.2)'
                            }}>
                              {features[activeFeature].icon}
                            </Box>
                            {features[activeFeature].title}
                          </Typography>
                          <Typography variant="body1" sx={{ 
                            color: "#e9d5ff",
                            lineHeight: 1.6
                          }}>
                            {features[activeFeature].description}
                          </Typography>
                        </Box>
                        
                        <List sx={{ mt: 'auto' }}>
                          {features[activeFeature].details.map((detail, index) => (
                            <ListItem 
                              key={index} 
                              sx={{ 
                                px: 0,
                                alignItems: 'flex-start',
                                py: 1
                              }}
                            >
                              <ListItemIcon sx={{ 
                                minWidth: 32,
                                mt: '2px'
                              }}>
                                <LightbulbIcon 
                                  sx={{ 
                                    color: activeFeature === 0 ? '#3b82f6' : 
                                          activeFeature === 1 ? '#10b981' : 
                                          activeFeature === 2 ? '#8b5cf6' : 
                                          activeFeature === 3 ? '#ec4899' : '#f59e0b',
                                    fontSize: '1.2rem'
                                  }} 
                                />
                              </ListItemIcon>
                              <ListItemText 
                                primary={detail} 
                                primaryTypographyProps={{ 
                                  color: "#e9d5ff",
                                  sx: {
                                    position: 'relative',
                                    '&:before': {
                                      content: '""',
                                      position: 'absolute',
                                      left: 0,
                                      bottom: 0,
                                      width: '100%',
                                      height: '1px',
                                      background: 'linear-gradient(to right, rgba(167, 139, 250, 0.3), transparent)',
                                    }
                                  }
                                }}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </ScrollAnimation>

          {/* FAQ Section */}
          <ScrollAnimation direction="up" distance={40} duration={0.7} delay={0.1}>
            <Box sx={{ mb: 10, px: { xs: 2, md: 0 } }}>
              <Box sx={{ textAlign: "center", mb: 6 }}>
                <Typography variant="h3" sx={{ 
                  fontSize: "2.5rem", 
                  fontWeight: "bold", 
                  color: "white", 
                  mb: 2 
                }}>
                  Frequently Asked Questions
                </Typography>
                <Typography sx={{ color: "#e9d5ff", maxWidth: 600, mx: 'auto' }}>
                  Everything you need to know about our AI Notes platform
                </Typography>
              </Box>
              
              <Box sx={{ maxWidth: 800, mx: "auto" }}>
                <Accordion sx={{ 
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(4px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  mb: 2
                }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#e9d5ff" }} />}>
                    <Typography fontWeight="bold" color="white">
                      How is this different from other note-taking apps?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography color="#e9d5ff">
                      Our platform goes beyond basic note storage by using AI to actively enhance
                      your notes. It understands context, suggests connections between ideas,
                      and helps you retrieve information in more natural ways than simple keyword
                      search.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion sx={{ 
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(4px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  mb: 2
                }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#e9d5ff" }} />}>
                    <Typography fontWeight="bold" color="white">
                      Is my data secure?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography color="#e9d5ff">
                      Absolutely. We use end-to-end encryption for all your notes, and you control
                      access. Our security protocols meet enterprise standards, with optional
                      biometric authentication and remote wipe capabilities.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion sx={{ 
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(4px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  mb: 2
                }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#e9d5ff" }} />}>
                    <Typography fontWeight="bold" color="white">
                      Can I use it offline?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography color="#e9d5ff">
                      Yes! All your notes are available offline, and any changes you make will
                      automatically sync when you reconnect. We even offer a low-bandwidth mode
                      for areas with poor connectivity.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion sx={{ 
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(4px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  mb: 2
                }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#e9d5ff" }} />}>
                    <Typography fontWeight="bold" color="white">
                      How does the AI assistance work?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography color="#e9d5ff">
                      Our AI analyzes your notes to understand context, concepts, and relationships.
                      It can suggest better organization, highlight important points you may have
                      missed, and even help you connect ideas across different notes. The more you
                      use it, the better it understands your specific needs.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Box>
          </ScrollAnimation>
        </Container>
      </Box>
    </Box>
  );
}

export default ProductDemo;