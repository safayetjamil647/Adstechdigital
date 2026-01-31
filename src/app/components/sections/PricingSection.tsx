export default function PricingSection() {
  return (
    <section id='pricing' className='py-20 bg-gray-50'>
      <div className='max-w-5xl mx-auto px-6 text-center'>
        <h2 className='text-3xl font-bold mb-12 text-gray-800'>Pricing</h2>
        <div className='grid md:grid-cols-3 gap-8'>
          {[
            {
              name: 'Starter',
              price: '$800/mo',
              features: ['Up to 10 users', 'Email support'],
            },
            {
              name: 'Pro',
              price: '£59/mo',
              features: ['Up to 50 users', 'Advanced compliance tools'],
            },
            {
              name: 'Enterprise',
              price: 'Custom',
              features: ['Unlimited users', 'Dedicated support'],
            },
          ].map((plan) => (
            <div key={plan.name} className='p-6 bg-white rounded-xl shadow'>
              <h3 className='text-xl font-semibold mb-4 text-blue-600'>
                {plan.name}
              </h3>
              <p className='text-3xl font-bold mb-6'>{plan.price}</p>
              <ul className='space-y-2 text-gray-600'>
                {plan.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
