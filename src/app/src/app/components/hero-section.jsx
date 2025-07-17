"use client"
import { Box, Typography, Button, Card, CardContent, Grid, Container, useTheme, useMediaQuery } from "@mui/material"
import { ArrowForward, PlayArrow, AutoAwesome, Bolt, Psychology, Edit, Assignment } from "@mui/icons-material"
import Link from "next/link"
import { motion } from "framer-motion"
import ParticleBackground from "./particle-background"
import ScrollAnimation from "./scroll-animation"
import StaggeredScrollAnimation from "./staggered-scroll-animation"

const HeroSection = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const isTablet = useMediaQuery(theme.breakpoints.down("md"))

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const buttonVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.3, ease: "easeOut" } },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.2, ease: "easeOut" },
    }),
    hover: { scale: 1.03, transition: { duration: 0.3 } },
  }

  return (
    <Box
      component="section"
      sx={{
        minHeight: "100vh",
        overflow: "hidden",
        background: "linear-gradient(135deg, #4c1d95 0%, #5b21b6 50%, #312e81 100%)",
        position: "relative",
        pt: { xs: "6rem", sm: "6rem", md: "6rem", lg: "2rem" },
      }}
    >
      {/* Particle Background */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
        <ParticleBackground count={isMobile ? 30 : isTablet ? 45 : 60} speed={0.3} />
      </motion.div>

      {/* Gradient Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(to right, rgba(76, 29, 149, 0.5), transparent)",
        }}
      />

      <Container maxWidth={false} sx={{ position: "relative", height: "100%" }}>
        <Box
          sx={{
            pl: { xs: 0, sm: 4, md: 4, lg: 4 },
            pr: { xs: 0, sm: 4, md: 4, lg: 4 },
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid container justifyContent="center" spacing={{ xs: 2, sm: 2, md: 4, lg: 4 }} sx={{ width: "100%" }}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  zIndex: 10,
                  textAlign: { xs: "center", md: "center", lg: "left" },
                  justifyContent: { xs: "center", md: "center", lg: "flex-start" },
                  alignItems: { xs: "center", md: "center", lg: "flex-start" },
                }}
              >
                {/* Badge */}
                <ScrollAnimation direction="up" distance={30} duration={0.6} delay={0.1}>
                  <Box
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      px: { xs: 1.5, sm: 2, md: 2.5 },
                      py: { xs: 0.8, sm: 1, md: 1.2 },
                      borderRadius: "9999px",
                      backgroundColor: "rgba(168, 85, 247, 0.2)",
                      border: "1px solid rgba(167, 139, 250, 0.3)",
                      backdropFilter: "blur(4px)",
                      alignSelf: { xs: "center", md: "flex-start" },
                      maxWidth: "fit-content",
                    }}
                  >
                    <Bolt
                      sx={{
                        fontSize: { xs: 14, sm: 16, md: 18 },
                        color: "#d8b4fe",
                        mr: { xs: 0.5, sm: 1 },
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: "medium",
                        color: "#e9d5ff",
                        fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.875rem" },
                      }}
                    >
                      Week 17-18: Faster & Accurate Processing
                    </Typography>
                  </Box>
                </ScrollAnimation>

                <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 2, sm: 3 } }}>
                  <ScrollAnimation direction="up" distance={40} duration={0.8} delay={0.2}>
                    <Typography
                      variant="h1"
                      sx={{
                        fontSize: {
                          xs: "1.9rem",
                          sm: "2.5rem",
                          md: "3rem",
                          lg: "4rem",
                          xl: "4rem",
                        },
                        fontWeight: "bold",
                        lineHeight: { xs: 1.1, sm: 1.2 },
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          background: "linear-gradient(to right, #c4b5fd, #f9a8d4)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        Smart Notes
                      </Box>
                      <br />
                      <Box
                        component="span"
                        sx={{
                          background: "linear-gradient(to right, #67e8f9, #60a5fa)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        AI Enhanced
                      </Box>
                    </Typography>
                  </ScrollAnimation>
                  <ScrollAnimation direction="up" distance={30} duration={0.7} delay={0.3}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem", lg: "1.7rem" },
                        color: "#ede9fe",
                        fontWeight: "light",
                      }}
                    >
                      Your AI-Powered{" "}
                      <Box component="span" sx={{ color: "#67e8f9", fontWeight: "medium" }}>
                        Knowledge Management Partner
                      </Box>
                    </Typography>
                  </ScrollAnimation>
                  <ScrollAnimation direction="up" distance={30} duration={0.6} delay={0.4}>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#e9d5ff",
                        maxWidth: { xs: "100%", sm: "90%", md: "600px" },
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                        lineHeight: { xs: 1.5, sm: 1.6 },
                      }}
                    >
                      Transform your note-taking with intelligent automation. Smart Notes - AI Enhanced streamlines
                      documentation from smart text editing to automated summarization, working around the clock to
                      enhance your productivity and knowledge retention.
                    </Typography>
                  </ScrollAnimation>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    gap: { xs: 2, sm: 2.5, md: 3 },
                    alignItems: { xs: "stretch", sm: "center" },
                    justifyContent: { xs: "center", md: "flex-start" },
                  }}
                >
                  <ScrollAnimation direction="up" distance={30} duration={0.6} delay={0.5}>
                    <motion.div variants={buttonVariants} initial="hidden" animate="visible" whileHover="hover">
                      <Button
                        variant="contained"
                        size={isMobile ? "medium" : "large"}
                        component={Link}
                        href="/demo"
                        sx={{
                          background: "linear-gradient(to right, #a855f7, #ec4899)",
                          "&:hover": { background: "linear-gradient(to right, #9333ea, #db2777)" },
                          color: "#fff",
                          textTransform: "none",
                          boxShadow: "0 4px 15px rgba(168, 85, 247, 0.25)",
                          px: { xs: 2, sm: 2.5, md: 3 },
                          py: { xs: 1, sm: 1.2, md: 1.5 },
                          fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                          borderRadius: { xs: 2, sm: 2.5 },
                        }}
                        startIcon={<PlayArrow />}
                      >
                        View Demo
                      </Button>
                    </motion.div>
                  </ScrollAnimation>
                  <ScrollAnimation direction="up" distance={30} duration={0.6} delay={0.5}>
                    <motion.div variants={buttonVariants} initial="hidden" animate="visible" whileHover="hover">
                      <Button
                        variant="outlined"
                        size={isMobile ? "medium" : "large"}
                        sx={{
                          borderColor: "rgba(167, 139, 250, 0.5)",
                          color: "#fff",
                          backgroundColor: "transparent",
                          backdropFilter: "blur(4px)",
                          "&:hover": {
                            backgroundColor: "rgba(168, 85, 247, 0.2)",
                            borderColor: "rgba(167, 139, 250, 0.8)",
                          },
                          textTransform: "none",
                          px: { xs: 2, sm: 2.5, md: 3 },
                          py: { xs: 1, sm: 1.2, md: 1.5 },
                          fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                          borderRadius: { xs: 2, sm: 2.5 },
                        }}
                        endIcon={<ArrowForward />}
                      >
                        Get Started
                      </Button>
                    </motion.div>
                  </ScrollAnimation>
                </Box>

                {/* Feature Cards */}
                <StaggeredScrollAnimation direction="up" distance={30} duration={0.5} staggerDelay={0.1}>
                  <Grid
                    container
                    spacing={{ xs: 1, sm: 1.2, md: 1.5 }}
                    sx={{
                      pt: { xs: 1.5, sm: 2.5, md: 3.5 },
                      justifyContent: { xs: "center", md: "flex-start" },
                    }}
                  >
                    {[
                      { Icon: AutoAwesome, title: "Smart Text Editor", subtitle: "Rich formatting with AI assistance" },
                      { Icon: Psychology, title: "AI Summarization", subtitle: "Automated content summarization" },
                      {
                        Icon: Assignment,
                        title: "Action Item Tracking",
                        subtitle: "Automatic identification & assignment",
                      },
                      { Icon: Bolt, title: "75% Faster Creation", subtitle: "AI-assisted documentation" },
                    ].map((feature, index) => (
                      <Grid item key={index} xs={6} sm={6} md={3} lg={3} xl={3}>
                        <motion.div
                          custom={index}
                          variants={cardVariants}
                          initial="hidden"
                          animate="visible"
                          whileHover="hover"
                        >
                          <Card
                            sx={{
                              backgroundColor: "rgba(255, 255, 255, 0.1)",
                              backdropFilter: "blur(4px)",
                              border: "1px solid rgba(255, 255, 255, 0.2)",
                              borderRadius: { xs: 1.2, sm: 1.5, md: 2 },
                              p: { xs: 0.8, sm: 1, md: 1.2 },
                              height: "100%",
                              transition: "all 0.3s ease",
                            }}
                          >
                            <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
                              <feature.Icon
                                sx={{
                                  fontSize: { xs: 16, sm: 18, md: 20, lg: 22 },
                                  color: "#67e8f9",
                                  mb: { xs: 0.5, sm: 0.7, md: 0.8 },
                                }}
                              />
                              <Typography
                                variant="body2"
                                sx={{
                                  fontWeight: "medium",
                                  color: "#fff",
                                  mb: { xs: 0.2, sm: 0.3, md: 0.4 },
                                  fontSize: {
                                    xs: "0.65rem",
                                    sm: "0.75rem",
                                    md: "0.8rem",
                                    lg: "0.875rem",
                                  },
                                }}
                              >
                                {feature.title}
                              </Typography>
                              <Typography
                                variant="caption"
                                sx={{
                                  color: "#e9d5ff",
                                  fontSize: {
                                    xs: "0.55rem",
                                    sm: "0.6rem",
                                    md: "0.65rem",
                                    lg: "0.7rem",
                                  },
                                  lineHeight: 1.3,
                                }}
                              >
                                {feature.subtitle}
                              </Typography>
                            </CardContent>
                          </Card>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                </StaggeredScrollAnimation>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <ScrollAnimation direction="right" distance={60} duration={0.8} delay={0.3}>
                <Box
                  sx={{
                    position: "relative",
                    zIndex: 10,
                    display: "flex",
                    justifyContent: "center",
                    mt: { xs: 2, sm: 3, md: 0 },
                    px: { xs: 1, sm: 2 },
                  }}
                >
                  {/* Smart Notes Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <Box
                      sx={{
                        maxWidth: 500,
                        width: { xs: 350, sm: 370, md: 400, lg: 450 },
                        mx: "auto",
                      }}
                    >
                      <Card
                        sx={{
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                          backdropFilter: "blur(10px)",
                          border: "1px solid rgba(255, 255, 255, 0.2)",
                          borderRadius: { xs: 2, sm: 4 },
                          overflow: "hidden",
                          transition: "transform 0.3s ease",
                          "&:hover": {
                            transform: "translateY(-5px)",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            position: "relative",
                            aspectRatio: "16/10",
                            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            overflow: "hidden",
                          }}
                        >
                          {/* Placeholder for Smart Notes Image */}
                          <Box
                            sx={{
                              position: "absolute",
                              inset: 0,
                              background: "linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(236, 72, 153, 0.3))",
                            }}
                          />
                          <Box
                            sx={{
                              textAlign: "center",
                              color: "white",
                              zIndex: 10,
                              p: 4,
                            }}
                          >
                            <Edit sx={{ fontSize: 64, mb: 2, opacity: 0.9 }} />
                            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                              Smart Notes Interface
                            </Typography>
                            <Typography sx={{ color: "#e9d5ff", fontSize: "0.9rem" }}>
                              AI-powered note-taking and knowledge management
                            </Typography>
                          </Box>

                          {/* Decorative elements */}
                          <Box
                            sx={{
                              position: "absolute",
                              top: 20,
                              right: 20,
                              width: 60,
                              height: 60,
                              borderRadius: "50%",
                              background: "rgba(255, 255, 255, 0.1)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <AutoAwesome sx={{ color: "#fff", fontSize: 24 }} />
                          </Box>

                          <Box
                            sx={{
                              position: "absolute",
                              bottom: 20,
                              left: 20,
                              width: 40,
                              height: 40,
                              borderRadius: "50%",
                              background: "rgba(255, 255, 255, 0.1)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Psychology sx={{ color: "#fff", fontSize: 20 }} />
                          </Box>
                        </Box>
                      </Card>
                    </Box>
                  </motion.div>
                </Box>
              </ScrollAnimation>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default HeroSection
