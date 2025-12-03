import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Para15 from "@/components/Para15";
import banner from "@/assets/blog/banner.png"

const Blog_banner = () => {
  return (
    <>
      <section className="py-4 md:py-7.5 lg:py-10 px-3 lg:px-0">
        <Container>
          <div
            className="mb-8 md:mb-9 lg:mb-11 text-center"
            data-aos="fade-up"
          >
            <Para15 text={"Adventure travel"} className={"text-textClr3"}/>
            <Heading
              title={"Top 13 must-see natural wonders in Indonesia"}
              subTitle={"April 06, 2022"}
            />
            <div className="mt-5 md:mt-10">
                <img src={banner} alt="" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Blog_banner;
