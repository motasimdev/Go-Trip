import React from "react";
import Container from "../../Container";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const Des_faq = () => {
  return (
    <>
      <section className="py-15 lg:pt-[120px] lg:pb-20 px-3 lg:px-0">
        <Container>
          <div className="md:flex justify-between">
            <div className="md:w-[30%] md:pl-13 lg:pl-0 mb-5 md:mb-0">
              <h3 className="text-3xl text-textClr1 font-semibold">
                FAQs about London
              </h3>
            </div>

            <div className="md:w-[60%]">
              <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    How much does it cost to stay at The Crown Hotel?
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco.
                    </p>
                    <p>
                      Key features include advanced processing capabilities, and
                      an intuitive user interface designed for both beginners
                      and experts.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>What type of room can I book at The Crown Hotel?</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      We offer worldwide shipping through trusted courier
                      partners. Standard delivery takes 3-5 business days, while
                      express shipping ensures delivery within 1-2 business
                      days.
                    </p>
                    <p>
                      All orders are carefully packaged and fully insured. Track
                      your shipment in real-time through our dedicated tracking
                      portal.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>What kind of breakfast is served at The Crown Hotel?</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      We stand behind our products with a comprehensive 30-day
                      return policy. If you&apos;re not completely satisfied,
                      simply return the item in its original condition.
                    </p>
                    <p>
                      Our hassle-free return process includes free return
                      shipping and full refunds processed within 48 hours of
                      receiving the returned item.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Does The Crown Hotel have a restaurant on site?</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      We stand behind our products with a comprehensive 30-day
                      return policy. If you&apos;re not completely satisfied,
                      simply return the item in its original condition.
                    </p>
                    <p>
                      Our hassle-free return process includes free return
                      shipping and full refunds processed within 48 hours of
                      receiving the returned item.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>What are the check-in and check-out times at The Crown Hotel?</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      We stand behind our products with a comprehensive 30-day
                      return policy. If you&apos;re not completely satisfied,
                      simply return the item in its original condition.
                    </p>
                    <p>
                      Our hassle-free return process includes free return
                      shipping and full refunds processed within 48 hours of
                      receiving the returned item.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Des_faq;
