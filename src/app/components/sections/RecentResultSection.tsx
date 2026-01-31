import Image from 'next/image';

// Example dynamic data
const resultsData = [
  {
    name: 'Lubrigyn',
    logo: '/logos/lubrigyn.png',
    metric: '291%',
    description: 'Conversion Rate Increase',
  },
  {
    name: 'Magniche',
    logo: '/logos/magniche.png',
    metric: '$171,541+',
    description: 'Monthly Revenue Increase',
  },
  {
    name: 'FyneChef',
    logo: '/logos/fynechef.png',
    metric: '148%',
    description: 'Higher Order Value',
  },
  {
    name: 'Better than Bamboo',
    logo: '/logos/bamboo.png',
    metric: '$354,950+',
    description: 'Monthly Revenue Increase',
  },
  {
    name: 'DoubleWave',
    logo: '/logos/doublewave.png',
    metric: '357%',
    description: 'Higher Revenue YoY',
  },
  {
    name: 'EstiGlo',
    logo: '/logos/estiglo.png',
    metric: '$15+',
    description: 'Average Order Value',
  },
  {
    name: 'Gurum',
    logo: '/logos/gurum.png',
    metric: '50%',
    description: 'Add to Cart Increase',
  },
  {
    name: 'Zinala',
    logo: '/logos/zinala.png',
    metric: '148%',
    description: 'Higher Order Value',
  },
  {
    name: 'IMPACT Battery',
    logo: '/logos/impact.png',
    metric: '$1,00,02,162+',
    description: 'Sales in the First 6 Months',
  },
  {
    name: 'The GIRO Company',
    logo: '/logos/giro.png',
    metric: '$89,983+',
    description: 'Monthly Revenue Increase',
  },
];

export default function RecentResults() {
  return (
    <section className='bg-blue-50 px-6 py-16 md:px-20'>
      <div className='relative mb-8'>
        <p className='absolute -top-6 left-0 -rotate-12 transform text-gray-500 italic'>
          some recent results
        </p>
      </div>

      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-5'>
        {resultsData.map((item, idx) => (
          <div
            key={idx}
            className='flex flex-col items-center rounded-lg bg-white p-4 text-center shadow transition hover:shadow-md'
          >
            <div className='relative mb-3 h-24 w-24'>
              <Image
                src={item.logo}
                alt={item.name}
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <p className='mb-1 font-semibold text-green-500'>↑ {item.metric}</p>
            <p className='text-sm text-gray-700'>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
