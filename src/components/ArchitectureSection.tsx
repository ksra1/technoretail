import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import architectureDiagram from "@/assets/architecture-diagram.png";

export const ArchitectureSection = () => {
  const [customImage, setCustomImage] = useState("");
  const [currentImage, setCurrentImage] = useState(architectureDiagram);
  const [isEditing, setIsEditing] = useState(false);

  const handleImageUpdate = () => {
    if (customImage.trim()) {
      setCurrentImage(customImage);
      setIsEditing(false);
    }
  };

  const handleReset = () => {
    setCurrentImage(architectureDiagram);
    setCustomImage("");
    setIsEditing(false);
  };

  return (
    <section id="architecture" className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Solution Architecture</h2>
          <p className="text-center text-muted-foreground mb-8 text-lg">
            High-level architecture showing data flow and system integration
          </p>

          <Card className="p-8 shadow-lg">
            <div className="mb-6 flex flex-wrap gap-3 justify-end">
              {!isEditing ? (
                <Button onClick={() => setIsEditing(true)} variant="outline">
                  Swap Architecture Image
                </Button>
              ) : (
                <>
                  <Button onClick={handleReset} variant="outline">
                    Reset to Original
                  </Button>
                  <Button onClick={() => setIsEditing(false)} variant="ghost">
                    Cancel
                  </Button>
                </>
              )}
            </div>

            {isEditing && (
              <div className="mb-6 p-4 border border-border rounded-lg bg-muted/50">
                <Label htmlFor="image-url" className="text-sm font-medium mb-2 block">
                  Enter Image URL
                </Label>
                <div className="flex gap-2">
                  <Input
                    id="image-url"
                    type="text"
                    placeholder="https://example.com/architecture.png"
                    value={customImage}
                    onChange={(e) => setCustomImage(e.target.value)}
                    className="flex-1"
                  />
                  <Button onClick={handleImageUpdate}>Update</Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Enter a direct URL to an image file (PNG, JPG, SVG)
                </p>
              </div>
            )}

            <div className="bg-gradient-to-br from-muted/30 to-background rounded-lg p-4 overflow-auto">
              <img
                src={currentImage}
                alt="Adobe Experience Platform Architecture Diagram"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-3 text-secondary">Data Sources</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>Website (Real-Time Events via Web SDK)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>Mobile App (Real-Time Events via Mobile SDK)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>Point of Sale (Batch or Streaming Data)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>CRM (Batch or Streaming Data)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>Customer Service (Batch Data)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3 text-secondary">Adobe Experience Platform</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>Customer Journey Analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>Adobe Target (Personalization)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>Adobe Journey Optimizer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>Adobe Experience Manager</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>Adobe Campaign</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
