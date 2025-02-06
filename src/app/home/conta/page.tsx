import Card from "@/components/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Page() {
  return (
    <div>
      <Tabs defaultValue="buy-courses">
        <TabsList>
          <TabsTrigger value="buy-courses">Cursos adqueridos</TabsTrigger>
          <TabsTrigger value="my-courses">Meus Curso</TabsTrigger>
          <TabsTrigger value="settings">Definições</TabsTrigger>
        </TabsList>
        <TabsContent value="buy-courses">
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-4 py-4">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </TabsContent>
        <TabsContent value="my-courses">
          {" "}
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-4 py-4">
            <Card />
            <Card />
            <Card />
          </div>
        </TabsContent>
        <TabsContent value="settings">
       
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Page;
