export default function HeroSection() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-50 to-white text-center px-6"
    >
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
        Makes Ads Campaign Handy To Boost Your Sales
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
        One platform to manage campaigns, ads, and tools — built for
        medium and large ecommerce,shopify platforms.
      </p>
      <a
        href="#features"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Explore Features
      </a>
    </section>
  );
}
