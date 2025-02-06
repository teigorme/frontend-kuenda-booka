import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Page() {
  return (
    <div className="lg:flex justify-between items-start w-full gap-4 h-full">
      <div className="lg:w-[75%]">
        <div className="relative w-full lg:h-96 h-56  bg-black rounded-2xl overflow-hidden shadow-lg border border-gray-700">
          <Image
            src="/images/3.jpg"
            alt="Grafana Dashboard"
            layout="fill"
            className="opacity-70 object-cover"
          />
        </div>
        <h2 className="font-semibold lg:text-xl mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          aliquid, quas recusandae modi quam commodi.
        </h2>
        <div className="flex gap-4 items-center mt-2">
          <Image
            src="/images/1.png"
            alt="Grafana Dashboard"
            width={48}
            height={48}
            className="h-12 w-12 rounded-full"
          />

          <div className="text-lg text-start">
            <h2>Canal X</h2>
            <h4 className="text-sm">34 mil sub - 30 minutos</h4>
          </div>

          <div>
            <Button className="rounded-2xl" size={"default"}>
              Subscrever
            </Button>
          </div>
        </div>

        <div className="bg-gray-900 p-2 mt-4 rounded-2xl text-justify">
          <h2>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
            perferendis dolorem consequuntur ducimus quos itaque sequi
            praesentium. Sequi unde exercitationem incidunt quis, tempora velit
            consequatur excepturi eum. Rem corrupti earum saepe adipisci
            possimus maxime accusantium commodi nulla molestias quidem beatae
            accusamus labore, dignissimos in praesentium quo omnis ex aperiam
            dolor nemo fuga, itaque maiores voluptate nostrum. Aliquam
            cupiditate dolor dolores nihil! Adipisci eos vel ab itaque sed
            quidem, nulla exercitationem.
          </h2>
        </div>
      </div>
      <div className="lg:w-[25%] lg:pt-0 py-4">
        <div className="shadow-lg border rounded-2xl border-gray-300 w-full  p-4">
          <h2 className="font-semibold text-lg">
            Módulos - Lorem ipsum dolor...
          </h2>
          <Separator className="mb-2" />

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Módulo 1</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Módulo 2</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Módulo 3</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Módulo 4</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Módulo 5</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Page;
