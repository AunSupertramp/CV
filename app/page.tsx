import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { Sparkles, Rocket, Camera, Plane, Laptop } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import CustomCard from "../components/CustomCard"

const Scene3DWithNoSSR = dynamic(() => import('../components/Scene3D'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="container mx-auto p-4 max-w-4xl">
      <div className="flex flex-col items-center mb-6">
        <Avatar className="w-24 h-24 mb-3">
          <AvatarImage src="/your-photo.png" alt="Aunnop Jusungnoen" />
          <AvatarFallback>AJ</AvatarFallback>
        </Avatar>
        <h1 className="text-xl font-bold mb-1">Aunnop Jusungnoen</h1>
        <h2 className="text-lg text-gray-600 text-center">
          Civil Engineer (B.Eng) | Solution Developer Extraordinaire
        </h2>
      </div>

      <Suspense fallback={<div>Loading 3D scene...</div>}>
        <Scene3DWithNoSSR />
      </Suspense>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <CustomCard title="Contact Information">
            <div className="grid grid-cols-1 gap-2">
              <div>
                <Badge variant="outline" className="mr-2">Email</Badge>
                aunsupertramp@gmail.com
              </div>
            </div>
          </CustomCard>

          <CustomCard title="Work Experience" icon={<Rocket />}>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold">Solution Developer</h3>
                <p className="text-sm text-gray-600">Aurecon | 2023 - Present</p>
                <ul className="list-disc list-inside text-sm mt-2">
                  <li>Create cool tech solutions for engineering projects</li>
                  <li>Work with different teams to bring new tech into projects</li>
                  <li>Lead efforts to make engineering more digital and high-tech</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold">VDC (Virtual Design and Construction) Specialist</h3>
                <p className="text-sm text-gray-600">Kor-It Design and Construction | 2019 - 2022</p>
                <ul className="list-disc list-inside text-sm mt-2">
                  <li>Made projects faster and more accurate using VDC</li>
                  <li>Used cool software like REVIT and Speckle to design better</li>
                  <li>Helped architects and engineers work together to solve design problems</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold">Structural Engineer</h3>
                <p className="text-sm text-gray-600">Qbic Engineer and Architect | 2016 - 2018</p>
                <ul className="list-disc list-inside text-sm mt-2">
                  <li>Designed structures to make sure buildings are safe and strong</li>
                  <li>Worked on various building projects, big and small</li>
                  <li>Learned the basics of engineering that led to my current tech skills</li>
                </ul>
              </div>
            </div>
          </CustomCard>
        </div>

        <div className="space-y-4">
          <CustomCard title="Summary" icon={<Sparkles />}>
            <p className="mb-2">
              Innovative and detail-oriented Civil Engineer turned Solution Developer. 
              I don't just build bridges, I build bridges between problems and solutions!
            </p>
            <p className="mb-2">
              When I'm not coding or designing, I'm on an exciting adventure with my toddler son, 
              discovering the world through his curious eyes and building our own little projects together.
            </p>
            <p>
              Supported by my lovely wife, we make a great team in both life and parenting, 
              balancing our professional ambitions with a warm and loving home.
            </p>
          </CustomCard>

          <CustomCard title="Skills" icon={<Laptop />}>
            <div className="flex flex-wrap gap-2">
              <Badge className="transition-all duration-300 hover:scale-110">REVIT</Badge>
              <Badge className="transition-all duration-300 hover:scale-110">ETABS</Badge>
              <Badge className="transition-all duration-300 hover:scale-110">DYNAMO</Badge>
              <Badge className="transition-all duration-300 hover:scale-110">Unreal Engine</Badge>
              <Badge className="transition-all duration-300 hover:scale-110">Speckle</Badge>
              <Badge className="transition-all duration-300 hover:scale-110">VDC</Badge>
              <Badge className="transition-all duration-300 hover:scale-110">Digital Transformation</Badge>
              <Badge className="transition-all duration-300 hover:scale-110">Problem-Solving</Badge>
              
            </div>
          </CustomCard>

          <CustomCard title="Hobbies" icon={<Camera />}>
            <ul className="list-disc list-inside">
              <li>Gaming: Ex-Dota 2 player, now exploring game development in my free time</li>
              <li>Family Time: Building LEGO and creating mini-projects with my toddler</li>
              <li>Photography: Capturing the beauty of architecture and urban landscapes</li>
              <li>Game Development: Learning new skills and creating small games as a hobby</li>
            </ul>
          </CustomCard>
        </div>
      </div>

      <Button 
        className="mt-6 w-full transition-all duration-300 transform hover:scale-105 hover:rotate-3 active:scale-95" 
        size="lg"
      >
        <Plane className="mr-2" /> Let's Build Something Amazing!
      </Button>
    </main>
  )
}