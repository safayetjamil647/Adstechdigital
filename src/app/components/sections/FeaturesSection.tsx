export default function FeaturesSection() {
  const features = [
    {
      title: "Google and Meta Ads",
      desc: "Google and Meta Ads Campaigns and Audit Expert ",
    },
    {
      title: "Ecommerce Sales Campaign Management",
      desc: "Shopify Ecommerce Sales Boost ",
    },
    {
      title: "Internal and External Tooling For Campaigns",
      desc: "Web and Mobile Applications Development for campaigns",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Key Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="p-6 bg-white shadow rounded-xl">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">
                {f.title}
              </h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
