export default function PricingSection() {
  return (
    <section id='pricing' className='bg-gray-50 py-20'>
      <div className='mx-auto max-w-5xl px-6 text-center'>
        <h2 className='mb-12 text-3xl font-bold text-gray-800'>Pricing</h2>
        <div className='grid gap-8 md:grid-cols-3'>
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
            <div key={plan.name} className='rounded-xl bg-white p-6 shadow'>
              <h3 className='mb-4 text-xl font-semibold text-blue-600'>
                {plan.name}
              </h3>
              <p className='mb-6 text-3xl font-bold'>{plan.price}</p>
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
