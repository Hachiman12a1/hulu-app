import SimpleCard from "./SimpleCard";

export default function Introduction() {
  return (
    <section className="content-center md:px-10 xl:px-40 py-12">
      <h2 className="text-center pb-8">Introduction</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        <SimpleCard title="System">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
            perspiciatis eius maxime repellat tempora neque enim consequatur
            quam ullam! Possimus sequi sed provident et quidem, commodi quam
            impedit iure repudiandae!
          </p>
        </SimpleCard>
        <SimpleCard title="Customers">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
            perspiciatis eius maxime repellat tempora neque enim consequatur
            quam ullam! Possimus sequi sed provident et quidem, commodi quam
            impedit iure repudiandae!
          </p>
        </SimpleCard>
        <SimpleCard title="Business">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
            perspiciatis eius maxime repellat tempora neque enim consequatur
            quam ullam! Possimus sequi sed provident et quidem, commodi quam
            impedit iure repudiandae!
          </p>
        </SimpleCard>
      </div>
    </section>
  );
}
