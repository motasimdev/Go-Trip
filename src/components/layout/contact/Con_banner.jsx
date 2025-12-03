import Container from "@/components/Container";
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

const Con_banner = () => {
  return (
    <>
      <section className="lg:h-[7 00px]">
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41310.1208399333!2d90.33348068235824!3d23.771142015335045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c09f9ba3d447%3A0x1babce9f1c6c95a3!2sMohammadpur%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1764764682885!5m2!1sen!2sbd"
            width={"100%"}
            height={450}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <Container>
          <div className="">
            <Card className="w-full max-w-sm">
              <CardHeader>
                <CardTitle>Send a message</CardTitle>
                {/* <CardDescription>
                  Enter your email below to login to your account
                </CardDescription>
                <CardAction>
                  <Button variant="link">Sign Up</Button>
                </CardAction> */}
              </CardHeader>
              <CardContent>
                <form>
                  <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                      {/* <Label htmlFor="name">Full Name</Label> */}
                      <Input
                        id="text"
                        type="email"
                        placeholder="Full Name"
                        className={"lg:h-14"}
                      />
                    </div>
                    <div className="grid gap-2">
                      {/* <Label htmlFor="email">Email</Label> */}
                      <Input
                        id="email"
                        type="email"
                        placeholder="Email"
                        className={"lg:h-14"}
                      />
                    </div>
                    <div className="grid gap-2">
                      {/* <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                        <a
                          href="#"
                          className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                        >
                          Forgot your password?
                        </a>
                      </div> */}
                      <Input
                        id="password"
                        type="password"
                        placeholder="Password"
                        className={"lg:h-14"}
                      />
                    </div>
                    <div className="grid gap-2">
                      {/* <Label htmlFor="email">Email</Label> */}
                      <Input
                        id="email"
                        type="email"
                        placeholder="Email"
                        className={"lg:h-14"}
                      />
                      <textarea name="" id="">
                         
                      </textarea>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex-col gap-2">
                <Button type="submit" className="w-full">
                  Login
                </Button>
                <Button variant="outline" className="w-full">
                  Login with Google
                </Button>
              </CardFooter>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Con_banner;
