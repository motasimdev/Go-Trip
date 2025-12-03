import Container from "@/components/Container";
import Flex from "@/components/Flex";
import Heading from "@/components/Heading";
import ParaBase from "@/components/ParaBase";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router";

const Con_banner = () => {
  return (
    <>
      <section className="pb-5 md:pb-15 lg:pb-20">
        <div className="w-full h-[500px] lg:h-[700px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41310.1208399333!2d90.33348068235824!3d23.771142015335045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c09f9ba3d447%3A0x1babce9f1c6c95a3!2sMohammadpur%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1764764682885!5m2!1sen!2sbd"
            width={"100%"}
            height={"100%"}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <Container>
          <div className="relative pt-5 lg:m-0 md:pt-0 m-auto w-[350px] lg:w-full">
            <Card className="w-full lg:max-w-sm md:absolute md:right-0 md:-bottom-40">
              <CardHeader>
                <CardTitle className={"text-lg md:text-lg"}>Send a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                      <Input
                        id="text"
                        type="email"
                        placeholder="Full Name"
                        className={"lg:h-14 placeholder:text-[12px] placeholder:lg:text-sm"}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Input
                        id="email"
                        type="email"
                        placeholder="Email"
                        className={"lg:h-14 placeholder:text-[12px] placeholder:lg:text-sm"}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Input
                        id="password"
                        type="password"
                        placeholder="Password"
                        className={"lg:h-14 placeholder:text-[12px] placeholder:lg:text-sm"}
                      />
                    </div>
                    <div className="grid gap-2">
                      <textarea
                        name=""
                        id=""
                        placeholder="Your Messages"
                        className="border h-50 pt-5 pl-4 text-sm rounded-lg shadow-sm resize-none placeholder:text-[12px] placeholder:lg:text-sm"
                      ></textarea>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex-col gap-2 items-start">
                <Link to={"/"}>
                  <Flex className="bg-textClr3 py-3.5 px-7.5 gap-3 group hover:bg-textClr1/10 transition-colors duration-300 rounded-sm">
                    <p className="text-[15px] text-white font-medium group-hover:text-textClr3 transition-colors duration-300">
                      Send a Messsage
                    </p>
                    <MdOutlineArrowOutward className="text-white group-hover:text-textClr3 transition-colors duration-300" />
                  </Flex>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Con_banner;
