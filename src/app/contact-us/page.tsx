import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { H2Title } from "@/components/ui/title";
export default function ContactUs() {
  const items = [
    {
      q: "متن سوال",
      a: "متن جواب",
    },
    {
      q: "متن سوال",
      a: "متن جواب",
    },
    {
      q: "متن سوال",
      a: "متن جواب",
    },
    {
      q: "متن سوال",
      a: "متن جواب",
    },
    {
      q: "متن سوال",
      a: "متن جواب",
    },
    {
      q: "متن سوال",
      a: "متن جواب",
    },
    {
      q: "متن سوال",
      a: "متن جواب",
    },
  ];
  return (
    <div className="p-10">
      <H2Title
        title="سوالات متداول"
        className="place-self-center font-black text-xl"
      />
      <Accordion type="single" collapsible>
        {items.map((item, index) => (
          <AccordionItem value={`item-${index}`} key={`a-${index}`}>
            <AccordionTrigger>{`${item.q}-${index + 1}`}</AccordionTrigger>
            <AccordionContent>{item.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
