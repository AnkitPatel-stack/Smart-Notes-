"use client"

import {
  Card,
  CardContent,
  Box,
  Typography,
  Grid,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material"
import {
  AutoAwesome,
  Description,
  Search,
  Assignment,
  Psychology,
  RecordVoiceOver,
  Link,
  CalendarToday,
  History,
  GetApp,
  TrendingUp,
  Speed,
  CheckCircle,
  Cancel,
  ArrowForward,
  SmartToy,
  Edit,
} from "@mui/icons-material"
import ParticleBackground from "./particle-background"
import ScrollAnimation from "./scroll-animation"
import StaggeredScrollAnimation from "./staggered-scroll-animation"
import { ScaleScrollAnimation } from "./advanced-scroll-animations"

export default function NotesAIEnhancedSection() {
  const beforeAfterData = {
    before: {
      title: "Manual Note-Taking and Documentation",
      subtitle: "Current Challenges",
      challenges: [
        "Handwritten or basic text notes",
        "Time-consuming manual documentation",
        "Difficulty finding specific information",
        "Inconsistent note-taking formats",
        "Lost action items and follow-ups",
        "Limited collaboration on notes",
      ],
      painPoints: [
        { icon: Edit, metric: "Hours spent", description: "on manual documentation" },
        { icon: Assignment, metric: "Missed items", description: "and deadlines" },
        { icon: Description, metric: "Inconsistent", description: "information capture" },
        { icon: Link, metric: "Limited", description: "sharing and collaboration" },
      ],
    },
    after: {
      title: "AI-Powered Knowledge Management",
      subtitle: "New Capabilities",
      capabilities: [
        "AI-assisted smart note creation",
        "Automated summarization and documentation",
        "Instant information search and retrieval",
        "Standardized, intelligent formatting",
        "Automatic action item tracking",
        "Seamless collaborative note-taking",
      ],
      improvements: [
        { icon: Speed, metric: "Minutes spent", description: "on automated documentation" },
        { icon: CheckCircle, metric: "Zero missed", description: "action items" },
        { icon: SmartToy, metric: "Consistent", description: "intelligent information capture" },
        { icon: Link, metric: "Enhanced", description: "sharing and collaboration" },
      ],
    },
  }

  const keyFeatures = [
    {
      icon: AutoAwesome,
      title: "Smart Text Editor",
      description: "Rich formatting with AI-powered writing assistance and intelligent suggestions.",
      color: "linear-gradient(to right, #8b5cf6, #ec4899)",
    },
    {
      icon: Psychology,
      title: "AI-Powered Summarization",
      description: "Automatically summarize long content and extract key insights from meetings.",
      color: "linear-gradient(to right, #06b6d4, #3b82f6)",
    },
    {
      icon: Search,
      title: "Keyword Extraction & Tagging",
      description: "Automated keyword identification and intelligent tagging for better organization.",
      color: "linear-gradient(to right, #10b981, #059669)",
    },
    {
      icon: Assignment,
      title: "Action Item Identification",
      description: "Automatically detect and assign action items with deadline tracking.",
      color: "linear-gradient(to right, #f59e0b, #d97706)",
    },
    {
      icon: Psychology,
      title: "Sentiment Analysis",
      description: "Analyze feedback sessions and meeting sentiment for better insights.",
      color: "linear-gradient(to right, #ef4444, #dc2626)",
    },
    {
      icon: RecordVoiceOver,
      title: "Voice-to-Text Transcription",
      description: "Real-time voice transcription with speaker identification and formatting.",
      color: "linear-gradient(to right, #8b5cf6, #7c3aed)",
    },
    {
      icon: Link,
      title: "Cross-referencing & Linking",
      description: "Smart suggestions for linking related content and building knowledge graphs.",
      color: "linear-gradient(to right, #06b6d4, #0891b2)",
    },
    {
      icon: Search,
      title: "Search & Retrieval",
      description: "Advanced search across all notes with AI-powered content discovery.",
      color: "linear-gradient(to right, #84cc16, #65a30d)",
    },
    {
      icon: CalendarToday,
      title: "Calendar/Meeting Integration",
      description: "Seamless integration with calendar systems and meeting platforms.",
      color: "linear-gradient(to right, #f97316, #ea580c)",
    },
    {
      icon: History,
      title: "Version History & Collaboration",
      description: "Track changes, collaborate in real-time, and maintain version control.",
      color: "linear-gradient(to right, #6366f1, #4f46e5)",
    },
    {
      icon: Description,
      title: "Template Library",
      description: "Pre-built templates for common note types and meeting formats.",
      color: "linear-gradient(to right, #ec4899, #db2777)",
    },
    {
      icon: GetApp,
      title: "Export Capabilities",
      description: "Export notes in multiple formats including PDF, Word, and Markdown.",
      color: "linear-gradient(to right, #64748b, #475569)",
    },
  ]

  const efficiencyMetrics = [
    {
      title: "Documentation Speed",
      before: "Hours of manual work",
      after: "Minutes with AI",
      improvement: "75% faster",
      description: "AI-assisted documentation",
      icon: Speed,
      color: "linear-gradient(to right, #3b82f6, #06b6d4)",
    },
    {
      title: "Knowledge Retention",
      before: "Lost information",
      after: "Perfect recall",
      improvement: "90% improvement",
      description: "Better institutional knowledge",
      icon: Psychology,
      color: "linear-gradient(to right, #22c55e, #059669)",
    },
    {
      title: "Action Tracking",
      before: "Missed follow-ups",
      after: "Complete tracking",
      improvement: "80% better",
      description: "Enhanced accountability",
      icon: Assignment,
      color: "linear-gradient(to right, #8b5cf6, #ec4899)",
    },
    {
      title: "Research Efficiency",
      before: "Hours searching",
      after: "Instant results",
      improvement: "65% reduction",
      description: "Smart linking and search",
      icon: Search,
      color: "linear-gradient(to right, #f97316, #ef4444)",
    },
  ]

  const roleImpactData = [
    {
      role: "Note Takers",
      reduction: "-95%",
      description: "Meeting notes and transcription automated",
      status: "reduced",
    },
    {
      role: "Documentation Specialists",
      reduction: "-80%",
      description: "Content organization and summarization automated",
      status: "reduced",
    },
    {
      role: "Knowledge Base Maintainers",
      reduction: "-75%",
      description: "Knowledge organization and tagging automated",
      status: "reduced",
    },
    {
      role: "AI Note Optimization Specialist",
      reduction: "New",
      description: "Optimizes AI note-taking and summarization",
      status: "new",
    },
    {
      role: "Knowledge Architecture Designer",
      reduction: "New",
      description: "Designs knowledge organization systems",
      status: "new",
    },
    {
      role: "Semantic Analysis Expert",
      reduction: "New",
      description: "Improves AI understanding of note content",
      status: "new",
    },
  ]

  return (
    <Box
      component="section"
      sx={{
        py: 12,
        background: "linear-gradient(to bottom, #7e22ce, #312e81, #6b21a8)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Particle Background */}
      <ParticleBackground count={45} speed={0.25} />

      <Box
        sx={{
          px: 2,
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Section Header */}
        <ScrollAnimation direction="up" distance={50} duration={0.8} delay={0.1}>
          <Box sx={{ textAlign: "center", mb: 8 }}>
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
              📝 Week 17-18: AI-Enhanced Notes
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2.25rem", md: "3rem" },
                fontWeight: 700,
                color: "#fff",
                mb: 3,
              }}
            >
              Notes -
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(to right, #c4b5fd, #f9a8d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {" "}
                AI Enhanced
              </Box>
            </Typography>
            <Typography
              sx={{
                fontSize: "1.25rem",
                color: "#ede9fe",
                maxWidth: 768,
                mx: "auto",
              }}
            >
              AI-enhanced collaborative note-taking and knowledge management for faster & accurate processing
            </Typography>
          </Box>
        </ScrollAnimation>

        {/* Efficiency Metrics */}
        <StaggeredScrollAnimation direction="up" distance={60} duration={0.7} staggerDelay={0.15}>
          <Grid container spacing={3} sx={{ mb: 10 }} justifyContent={"center"}>
            {efficiencyMetrics.map((metric, index) => {
              const IconComponent = metric.icon
              return (
                <Grid item xs={12} md={6} lg={3} key={index}>
                  <Card
                    sx={{
                      width: 280,
                      minHeight: 220,
                      background: "rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(4px)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      textAlign: "center",
                      transition: "all 0.3s",
                      "&:hover": {
                        background: "rgba(255, 255, 255, 0.2)",
                        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box
                        sx={{
                          width: 56,
                          height: 56,
                          background: metric.color,
                          borderRadius: 2,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mx: "auto",
                          mb: 2,
                          transition: "transform 0.3s",
                          "&:hover": {
                            transform: "scale(1.1)",
                          },
                        }}
                      >
                        <IconComponent sx={{ fontSize: 28, color: "#fff" }} />
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: "#fff", mb: 1, textAlign: "center" }}>
                        {metric.title}
                      </Typography>
                      <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5, textAlign: "left" }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <Typography sx={{ color: "#fca5a5", fontSize: "0.875rem" }}>Before:</Typography>
                          <Typography sx={{ color: "#fecaca", fontSize: "0.875rem" }}>{metric.before}</Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <Typography sx={{ color: "#86efac", fontSize: "0.875rem" }}>After:</Typography>
                          <Typography sx={{ color: "#bbf7d0", fontSize: "0.875rem" }}>{metric.after}</Typography>
                        </Box>
                        <Box sx={{ pt: 1, textAlign: "center" }}>
                          <Chip
                            label={metric.improvement}
                            sx={{
                              background: "linear-gradient(to right, #22c55e, #059669)",
                              color: "#fff",
                              fontSize: "0.75rem",
                              fontWeight: 600,
                            }}
                          />
                        </Box>
                      </Box>
                      <Typography sx={{ color: "#e9d5ff", fontSize: "0.8rem", mt: 1, textAlign: "center" }}>
                        {metric.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        </StaggeredScrollAnimation>

        {/* Before vs After Comparison */}
        <ScrollAnimation direction="up" distance={50} duration={0.8} delay={0.2}>
          <Grid container spacing={4} sx={{ mb: 10 }} justifyContent={"center"}>
            {/* Before - Manual Note-Taking */}
            <Grid item xs={12} lg={6}>
              <Card
                sx={{
                  width: "100%",
                  minHeight: 400,
                  background: "rgba(239, 68, 68, 0.1)",
                  backdropFilter: "blur(4px)",
                  border: "1px solid rgba(248, 113, 113, 0.3)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: 4,
                    background: "linear-gradient(to right, #ef4444, #f97316)",
                  }}
                />
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        background: "rgba(239, 68, 68, 0.2)",
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 2,
                      }}
                    >
                      <Edit sx={{ fontSize: 24, color: "#f87171" }} />
                    </Box>
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 700, color: "#fff", mb: 0.5 }}>
                        {beforeAfterData.before.title}
                      </Typography>
                      <Typography sx={{ color: "#fecaca", fontSize: "0.875rem" }}>
                        {beforeAfterData.before.subtitle}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ mb: 4, display: "flex", flexDirection: "column", gap: 1 }}>
                    {beforeAfterData.before.challenges.map((challenge, index) => (
                      <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                        <Cancel sx={{ fontSize: 16, color: "#f87171", flexShrink: 0 }} />
                        <Typography sx={{ color: "#fee2e2", fontSize: "0.875rem" }}>{challenge}</Typography>
                      </Box>
                    ))}
                  </Box>

                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: "#fff", mb: 1.5 }}>
                      Key Pain Points:
                    </Typography>
                    {beforeAfterData.before.painPoints.map((point, index) => {
                      const IconComponent = point.icon
                      return (
                        <Box
                          key={index}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1.5,
                            background: "rgba(239, 68, 68, 0.1)",
                            borderRadius: 1,
                            p: 1.5,
                            mb: 1,
                          }}
                        >
                          <IconComponent sx={{ fontSize: 20, color: "#f87171" }} />
                          <Box>
                            <Typography component="span" sx={{ fontWeight: 600, color: "#fff", mr: 1 }}>
                              {point.metric}
                            </Typography>
                            <Typography component="span" sx={{ color: "#fecaca", fontSize: "0.875rem" }}>
                              {point.description}
                            </Typography>
                          </Box>
                        </Box>
                      )
                    })}
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* After - AI-Powered Knowledge Management */}
            <Grid item xs={12} lg={6}>
              <Card
                sx={{
                  width: "100%",
                  minHeight: 400,
                  background: "rgba(34, 197, 94, 0.1)",
                  backdropFilter: "blur(4px)",
                  border: "1px solid rgba(74, 222, 128, 0.3)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: 4,
                    background: "linear-gradient(to right, #22c55e, #059669)",
                  }}
                />
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        background: "rgba(34, 197, 94, 0.2)",
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 2,
                      }}
                    >
                      <SmartToy sx={{ fontSize: 24, color: "#4ade80" }} />
                    </Box>
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 700, color: "#fff", mb: 0.5 }}>
                        {beforeAfterData.after.title}
                      </Typography>
                      <Typography sx={{ color: "#bbf7d0", fontSize: "0.875rem" }}>
                        {beforeAfterData.after.subtitle}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ mb: 4, display: "flex", flexDirection: "column", gap: 1 }}>
                    {beforeAfterData.after.capabilities.map((capability, index) => (
                      <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                        <CheckCircle sx={{ fontSize: 16, color: "#4ade80", flexShrink: 0 }} />
                        <Typography sx={{ color: "#dcfce7", fontSize: "0.875rem" }}>{capability}</Typography>
                      </Box>
                    ))}
                  </Box>

                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: "#fff", mb: 1.5 }}>
                      Achieved Improvements:
                    </Typography>
                    {beforeAfterData.after.improvements.map((improvement, index) => {
                      const IconComponent = improvement.icon
                      return (
                        <Box
                          key={index}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1.5,
                            background: "rgba(34, 197, 94, 0.1)",
                            borderRadius: 1,
                            p: 1.5,
                            mb: 1,
                          }}
                        >
                          <IconComponent sx={{ fontSize: 20, color: "#4ade80" }} />
                          <Box>
                            <Typography component="span" sx={{ fontWeight: 600, color: "#fff", mr: 1 }}>
                              {improvement.metric}
                            </Typography>
                            <Typography component="span" sx={{ color: "#bbf7d0", fontSize: "0.875rem" }}>
                              {improvement.description}
                            </Typography>
                          </Box>
                        </Box>
                      )
                    })}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </ScrollAnimation>

        {/* Transformation Arrow */}
        <ScaleScrollAnimation scaleRange={[0.8, 1]} threshold={0.3}>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 10 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(4px)",
                borderRadius: "9999px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                px: 4,
                py: 2,
              }}
            >
              <Edit sx={{ fontSize: 24, color: "#f87171" }} />
              <Typography sx={{ color: "#fff", fontWeight: 600 }}>Manual Note-Taking</Typography>
              <ArrowForward sx={{ fontSize: 24, color: "#c4b5fd" }} />
              <SmartToy sx={{ fontSize: 24, color: "#4ade80" }} />
              <Typography sx={{ color: "#fff", fontWeight: 600 }}>AI-Enhanced Notes</Typography>
            </Box>
          </Box>
        </ScaleScrollAnimation>

        {/* Key Features Grid */}
        <ScrollAnimation direction="up" distance={50} duration={0.8} delay={0.3}>
          <Box sx={{ mb: 10 }}>
            <Box sx={{ textAlign: "center", mb: 6 }}>
              <Typography variant="h3" sx={{ fontSize: "1.875rem", fontWeight: 700, color: "#fff", mb: 1 }}>
                Key Features
              </Typography>
              <Typography sx={{ color: "#e9d5ff", fontSize: "1rem" }}>
                Comprehensive AI-powered note-taking capabilities
              </Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Grid container spacing={3} sx={{ maxWidth: 1400 }} justifyContent={"center"}>
                {keyFeatures.map((feature, index) => {
                  const IconComponent = feature.icon
                  return (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                      <Card
                        sx={{
                          width: 280,
                          height: 200,
                          background: "rgba(255, 255, 255, 0.1)",
                          backdropFilter: "blur(4px)",
                          border: "1px solid rgba(255, 255, 255, 0.2)",
                          transition: "all 0.3s",
                          "&:hover": {
                            background: "rgba(255, 255, 255, 0.2)",
                            transform: "translateY(-4px)",
                            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
                          },
                          position: "relative",
                          overflow: "hidden",
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            height: "4px",
                            background: feature.color,
                          },
                        }}
                      >
                        <CardContent sx={{ p: 3, height: "100%", display: "flex", flexDirection: "column" }}>
                          <Box
                            sx={{
                              width: 48,
                              height: 48,
                              background: feature.color,
                              borderRadius: 2,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              mb: 2,
                              transition: "transform 0.3s",
                              "&:hover": {
                                transform: "scale(1.1)",
                              },
                            }}
                          >
                            <IconComponent sx={{ fontSize: 24, color: "#fff" }} />
                          </Box>
                          <Typography variant="h6" sx={{ fontWeight: 700, color: "#fff", mb: 1, fontSize: "1rem" }}>
                            {feature.title}
                          </Typography>
                          <Typography
                            sx={{
                              color: "#e9d5ff",
                              fontSize: "0.875rem",
                              lineHeight: 1.4,
                              flex: 1,
                            }}
                          >
                            {feature.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  )
                })}
              </Grid>
            </Box>
          </Box>
        </ScrollAnimation>

        {/* Role Impact Analysis */}
        <ScrollAnimation direction="up" distance={60} duration={0.8} delay={0.3}>
          <Box sx={{ mb: 8 }}>
            <Box sx={{ textAlign: "center", mb: 6 }}>
              <Typography variant="h3" sx={{ fontSize: "1.875rem", fontWeight: 700, color: "#fff", mb: 1 }}>
                Role Impact Analysis
              </Typography>
              <Typography sx={{ color: "#e9d5ff", fontSize: "1rem" }}>
                How AI-Enhanced Notes transforms workforce roles
              </Typography>
            </Box>

            <Card
              sx={{
                maxWidth: 1000,
                mx: "auto",
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(4px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                overflow: "hidden",
              }}
            >
              <CardContent sx={{ p: 0 }}>
                <Box sx={{ overflowX: "auto" }}>
                  <Table>
                    <TableHead>
                      <TableRow sx={{ background: "linear-gradient(to right, #7c3aed, #ec4899)" }}>
                        <TableCell sx={{ color: "#fff", fontWeight: 700, p: 2, textAlign: "left" }}>Role</TableCell>
                        <TableCell sx={{ color: "#fff", fontWeight: 700, p: 2, textAlign: "center", minWidth: 120 }}>
                          Impact
                        </TableCell>
                        <TableCell sx={{ color: "#fff", fontWeight: 700, p: 2, textAlign: "left", minWidth: 300 }}>
                          Description
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {roleImpactData.map((row, index) => (
                        <TableRow
                          key={index}
                          sx={{
                            backgroundColor: index % 2 === 0 ? "rgba(255, 255, 255, 0.05)" : "transparent",
                            "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
                          }}
                        >
                          <TableCell
                            sx={{
                              p: 2,
                              color: "#fff",
                              fontWeight: 500,
                              borderRight: "1px solid rgba(255, 255, 255, 0.1)",
                            }}
                          >
                            {row.role}
                          </TableCell>
                          <TableCell
                            sx={{
                              p: 2,
                              textAlign: "center",
                              borderRight: "1px solid rgba(255, 255, 255, 0.1)",
                            }}
                          >
                            <Chip
                              label={row.reduction}
                              sx={{
                                background:
                                  row.status === "reduced"
                                    ? "linear-gradient(to right, #ef4444, #dc2626)"
                                    : "linear-gradient(to right, #22c55e, #059669)",
                                color: "#fff",
                                fontWeight: 600,
                              }}
                            />
                          </TableCell>
                          <TableCell sx={{ p: 2, color: "#e9d5ff" }}>{row.description}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Box>
              </CardContent>
            </Card>

            {/* Summary Stats */}
            <Box sx={{ mt: 6, textAlign: "center" }}>
              <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} md={4}>
                  <Card
                    sx={{
                      background: "linear-gradient(to bottom right, rgba(239, 68, 68, 0.2), rgba(220, 38, 38, 0.2))",
                      backdropFilter: "blur(4px)",
                      border: "1px solid rgba(248, 113, 113, 0.3)",
                    }}
                  >
                    <CardContent sx={{ p: 3, textAlign: "center" }}>
                      <TrendingUp sx={{ fontSize: 48, color: "#f87171", mx: "auto", mb: 2 }} />
                      <Typography variant="h4" sx={{ fontWeight: 700, color: "#fff", mb: 1 }}>
                        -83%
                      </Typography>
                      <Typography sx={{ color: "#fecaca", fontSize: "0.875rem" }}>Average Role Reduction</Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Card
                    sx={{
                      background: "linear-gradient(to bottom right, rgba(34, 197, 94, 0.2), rgba(5, 150, 105, 0.2))",
                      backdropFilter: "blur(4px)",
                      border: "1px solid rgba(74, 222, 128, 0.3)",
                    }}
                  >
                    <CardContent sx={{ p: 3, textAlign: "center" }}>
                      <CheckCircle sx={{ fontSize: 48, color: "#4ade80", mx: "auto", mb: 2 }} />
                      <Typography variant="h4" sx={{ fontWeight: 700, color: "#fff", mb: 1 }}>
                        +3
                      </Typography>
                      <Typography sx={{ color: "#bbf7d0", fontSize: "0.875rem" }}>New Specialized Roles</Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Card
                    sx={{
                      background: "linear-gradient(to bottom right, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2))",
                      backdropFilter: "blur(4px)",
                      border: "1px solid rgba(167, 139, 250, 0.3)",
                    }}
                  >
                    <CardContent sx={{ p: 3, textAlign: "center" }}>
                      <AutoAwesome sx={{ fontSize: 48, color: "#c4b5fd", mx: "auto", mb: 2 }} />
                      <Typography variant="h4" sx={{ fontWeight: 700, color: "#fff", mb: 1 }}>
                        Upskilling
                      </Typography>
                      <Typography sx={{ color: "#e9d5ff", fontSize: "0.875rem" }}>
                        Focus on Higher-Value Work
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </ScrollAnimation>
      </Box>
    </Box>
  )
}
