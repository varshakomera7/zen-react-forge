import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            About Our Studio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a passionate team of designers and developers dedicated to creating 
            exceptional digital experiences that make a lasting impact.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-0 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl text-primary-foreground">🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Creative Design</h3>
              <p className="text-muted-foreground">
                We craft visually stunning designs that capture your brand's essence 
                and engage your audience.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-0 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl text-primary-foreground">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Fast Performance</h3>
              <p className="text-muted-foreground">
                Lightning-fast websites optimized for speed, SEO, and user experience 
                across all devices.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-0 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl text-primary-foreground">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Modern Technology</h3>
              <p className="text-muted-foreground">
                Built with the latest technologies and best practices for scalability 
                and maintainability.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;