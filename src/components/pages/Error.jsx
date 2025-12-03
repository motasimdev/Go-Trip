import pic from "@/assets/error.png";
import picTwo from "@/assets/errorFZF.png";
import Container from "../Container";
import Button from "../Button";

const Error = () => {
  return (
    <>
      <section className="py-3 lg:py-[220px] px-3 lg:px-0">
        <Container>
          <div className="md:flex items-center justify-between">
            <div className="md:w-[48%]">
              <img src={pic} alt="" />
            </div>
            <div className="md:w-[42%]">
              <img src={picTwo} alt="" />
              <div className="mt-10 lg:mt-[70px] pr-20">
                <h3 className="text-2xl lg:text-3xl text-textClr1 font-semibold pb-4">
                  Oops! It looks like you're lost.
                </h3>
                <p className="mb-10 text-sm lg:text-base text-textClr1">
                  The page you're looking for isn't available. Try to search
                  again or use the go to.
                </p>
                <Button
                href="/"
                Tagname="a"
                  className={
                    "bg-textClr3 text-white hover:bg-white hover:text-textClr3 transition-colors duration-300 border border-textClr3 "
                  }
                >
                  Go back to homepage
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Error;
