export default function FeaturesSection() {
  const features = [
    {
      title: 'Google and Meta Ads',
      desc: 'Google and Meta Ads Campaigns and Audit Expert ',
    },
    {
      title: 'Ecommerce Sales Campaign Management',
      desc: 'Shopify Ecommerce Sales Boost ',
    },
    {
      title: 'Internal and External Tooling For Campaigns',
      desc: 'Web and Mobile Applications Development for campaigns',
    },
  ];

  return (
    <section id='features' className='bg-gray-50 py-20'>
      <div className='mx-auto max-w-6xl px-6'>
        <h2 className='mb-12 text-center text-3xl font-bold text-gray-800'>
          Key Features
        </h2>
        <div className='grid gap-8 md:grid-cols-3'>
          {features.map((f) => (
            <div key={f.title} className='rounded-xl bg-white p-6 shadow'>
              <h3 className='mb-2 text-xl font-semibold text-blue-600'>
                {f.title}
              </h3>
              <p className='text-gray-600'>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
