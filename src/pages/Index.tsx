import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, ShieldCheck, BarChart } from "lucide-react";
import { Link } from "@tanstack/react-router";

const features = [
  {
    icon: <Zap className="h-8 w-8 text-indigo-500" />,
    title: "Lightning Fast",
    description: "Our platform is optimized for speed, ensuring a seamless and responsive experience for all users.",
    delay: "animation-delay-200",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-indigo-500" />,
    title: "Secure by Design",
    description: "With enterprise-grade security, your data is always protected against the latest threats.",
    delay: "animation-delay-400",
  },
  {
    icon: <BarChart className="h-8 w-8 text-indigo-500" />,
    title: "Advanced Analytics",
    description: "Gain valuable insights with our powerful analytics dashboard and drive your business forward.",
    delay: "animation-delay-600",
  },
];

const Index = () => {
  return (
    <>
      <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
        <div className="text-center lg:text-start space-y-6">
          <main className="text-5xl md:text-6xl font-bold animate-fade-in-up">
            <h1 className="inline">
              <span className="inline bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Build
              </span>{" "}
              your future
            </h1>{" "}
            with{" "}
            <h2 className="inline">
              <span className="inline bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Stellar
              </span>{" "}
              solutions
            </h2>
          </main>

          <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0 animate-fade-in-up animation-delay-200">
            Empowering innovation through cutting-edge technology. We provide the tools and expertise to turn your vision into reality.
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4 animate-fade-in-up animation-delay-400">
            <Button className="w-full md:w-1/3 bg-indigo-600 hover:bg-indigo-700">Get Started</Button>
            <Button asChild variant="outline" className="w-full md:w-1/3">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>

        {/* Hero cards */}
        <div className="hidden lg:block animate-fade-in-up animation-delay-600">
          <div className="w-[350px] h-[350px] bg-indigo-100 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-20"></div>
          <img src="https://picsum.photos/seed/tech1/600/400" alt="Technology" className="rounded-lg shadow-lg border" />
        </div>
      </section>

      <section id="features" className="container py-24 sm:py-32 space-y-8">
        <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
          Our{" "}
          <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Core Features
          </span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map(({ icon, title, description, delay }) => (
            <Card key={title} className={`bg-background/80 backdrop-blur-sm border hover:shadow-lg transition-shadow animate-fade-in-up ${delay} opacity-0`} style={{ animationFillMode: 'forwards' }}>
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center rounded-lg mb-4">
                  {icon}
                </div>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent>{description}</CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default Index;