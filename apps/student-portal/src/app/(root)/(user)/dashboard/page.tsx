export default async function Profile() {
  return (
    <div>
      <section className="bg-primary pt-32 pb-20">
        <div className="main-container">
          <h1 className="text-center text-3xl md:text-4xl font-semibold text-neutral-50">
            Dashboard
          </h1>
        </div>
      </section>
      <section className="bg-neutral-100 py-20">
        <div className="main-container">
          <div className="bg-white rounded-lg overflow-clip shadow-md/20 text-primary p-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary py-8 text-center">
              Cooming Soon ...
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}
