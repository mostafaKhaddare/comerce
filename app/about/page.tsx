"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Award,
  Building2,
  Users2,
  Lightbulb,
  Target,
  Zap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const stats = [
    {
      icon: <Building2 className="h-6 w-6" />,
      value: "10+",
      label: "Years Experience",
    },
    {
      icon: <Users2 className="h-6 w-6" />,
      value: "1000+",
      label: "Happy Clients",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      value: "5000+",
      label: "Projects Completed",
    },
    {
      icon: <Award className="h-6 w-6" />,
      value: "25+",
      label: "Industry Awards",
    },
  ];

  const values = [
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "Innovation First",
      description:
        "We continuously push the boundaries of lighting control technology, bringing the latest advancements to our clients.",
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Energy Efficiency",
      description:
        "Our solutions are designed to maximize energy savings while delivering optimal lighting performance.",
    },
    {
      icon: <Users2 className="h-6 w-6 text-primary" />,
      title: "Customer Success",
      description:
        "We measure our success through the success and satisfaction of our clients.",
    },
  ];

  const features = [
    "Advanced DMX & DALI Control Systems",
    "Smart Building Integration",
    "Custom Lighting Solutions",
    "Energy Management",
    "24/7 Technical Support",
    "Professional Installation",
    "Remote Monitoring",
    "Regular Maintenance",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop"
          alt="Lighting Control Systems"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Badge className="bg-primary/10 text-primary mb-4 backdrop-blur-sm">
            About Tipix
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Illuminating the Future of
            <span className="text-primary"> Lighting Control</span>
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Leading the industry in innovative lighting control solutions since
            2013
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-none shadow-lg bg-card">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-primary/10 text-primary">Our Story</Badge>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                A Decade of Excellence in Lighting Control Innovation
              </h2>
              <p className="text-muted-foreground">
                Since our founding in 2013, Tipix has been at the forefront of
                lighting control technology. We've evolved from a small team of
                passionate engineers to a global leader in smart lighting
                solutions, serving clients across industries and continents.
              </p>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="rounded-full">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop"
                alt="Our Story"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge className="bg-primary/10 text-primary mb-4">Our Values</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Principles That Drive Us
          </h2>
          <p className="text-muted-foreground">
            Our core values shape every decision we make and every solution we
            deliver to our clients.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardHeader>
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  {value.icon}
                </div>
                <CardTitle>{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{value.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Lighting Control?
          </h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who have revolutionized their
            lighting systems with Tipix.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="rounded-full text-primary"
          >
            Contact Us Today <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}
