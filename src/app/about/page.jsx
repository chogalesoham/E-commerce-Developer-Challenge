const About = () => {
  return (
    <>
      <section
        style={{ marginTop: "10px", padding: "2rem 1rem" }}
        className="section__container bg-[#f4e5ec] rounded-lg"
      >
        <h2
          style={{ marginBottom: "1.5rem" }}
          className="section__header capitalize text-3xl font-bold text-center"
        >
          About Us
        </h2>
        <p
          style={{ marginBottom: "1.5rem" }}
          className="section__subheader text-center text-gray-700"
        >
          We provide exceptional products to enhance your lifestyle with quality
          and elegance.
        </p>
      </section>
      <section className=" w-full">
        <div
          style={{ padding: "3rem 1.5rem" }}
          className="container mx-auto"
          id="about-us"
        >
          <div
            style={{ marginTop: "3rem" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Dress Collection Card */}
            <div
              style={{ padding: "1.5rem", marginBottom: "1.5rem" }}
              className="bg-white shadow-lg rounded-lg transform transition hover:scale-105"
              data-aos="zoom-in"
            >
              <img
                src="https://faberlic.com/images/stories/News/dress-int-2016-2.jpg"
                className="h-52 w-full object-fill rounded-xl"
              />
              <h3
                style={{ margin: "10px 0px" }}
                className="text-xl font-semibold text-orange-600"
              >
                Dress Collection
              </h3>
              <p className="text-gray-600">
                Explore our latest fashion collections, featuring trendy designs
                and premium quality.
              </p>
            </div>

            {/* Jewellery Card */}
            <div
              style={{ padding: "1.5rem", marginBottom: "1.5rem" }}
              className="bg-white shadow-lg rounded-lg transform transition hover:scale-105"
              data-aos="zoom-in"
            >
              <img
                src="https://i.pinimg.com/originals/ba/11/28/ba112815cc05fd1c5087c46a6221fa83.jpg"
                className="h-52 w-full object-cover rounded-xl"
              />
              <h3
                style={{ margin: "10px 0px" }}
                className="text-xl font-semibold text-orange-600"
              >
                Jewellery
              </h3>
              <p className="text-gray-600">
                Adorn yourself with our elegant jewellery collection that blends
                tradition with modernity.
              </p>
            </div>

            {/* Cosmetics Card */}
            <div
              style={{ padding: "1.5rem", marginBottom: "1.5rem" }}
              className="bg-white shadow-lg rounded-lg transform transition hover:scale-105"
              data-aos="zoom-in"
            >
              <img
                src="https://avatars.mds.yandex.net/i?id=10b10dcee80051a744f1606cff65dc2ad7f2a2e2-9065783-images-thumbs&n=13"
                className="h-52 w-full object-cover rounded-xl"
              />
              <h3
                style={{ margin: "10px 0px" }}
                className="text-xl font-semibold text-orange-600"
              >
                Cosmetics
              </h3>
              <p className="text-gray-600">
                Discover our premium cosmetics range to enhance your natural
                beauty and glow.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
