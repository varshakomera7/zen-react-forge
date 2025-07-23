import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Web Design",
      description: "Custom designs tailored to your brand identity and business goals.",
      features: ["Responsive Design", "UI/UX Optimization", "Brand Integration"]
    },
    {
      title: "Web Development", 
      description: "Modern, scalable websites built with cutting-edge technologies.",
      features: ["React & TypeScript", "Performance Optimization", "SEO Ready"]
    },
    {
      title: "E-Commerce",
      description: "Complete online stores that drive sales and enhance customer experience.",
      features: ["Secure Payments", "Inventory Management", "Analytics Integration"]
    },
    {
      title: "Maintenance",
      description: "Ongoing support and updates to keep your website running smoothly.",
      features: ["Regular Updates", "Security Monitoring", "Performance Tracking"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to launch, we provide comprehensive web solutions 
            that help your business thrive in the digital world.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-border/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group cursor-pointer"
            >
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;