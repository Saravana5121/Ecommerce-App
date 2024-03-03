const Banner = () => {
  return (
    <>
      <section className="mt-[1rem] bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-10 lg:flex lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Unwrap Savings:
              <span className="sm:block">
                {" "}
                Get 10% Off on All Apple Products Today!
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              Sleek design iPhones | cutting-edge performance MacBooks!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
