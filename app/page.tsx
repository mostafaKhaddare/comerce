import Hero from "@/components/home/Hero";
export default function Home() {
  return (
    <>
      <Hero />
      <section className="card-block-section py-8 bg-accent">
        <div className="container mx-10 ">
          <div className="carousel-header text-left container mb-6 w-full flex justify-between items-center ">
            <h5 className="h2-bold text-md md:text-4xl tracking-wide text-">
              the most famous lighting categories
            </h5>
            <div className="next-prev"></div>
          </div>
        </div>
      </section>
    </>
  );
}
