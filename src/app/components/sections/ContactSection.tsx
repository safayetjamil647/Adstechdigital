export default function ContactSection() {
  return (
    <section id='contact' className='bg-blue-600 py-20 text-white'>
      <div className='mx-auto max-w-4xl px-6 text-center'>
        <h2 className='mb-6 text-3xl font-bold'>Get in Touch</h2>
        <p className='mb-8 text-lg'>
          Ready to fix Ads Campaigns for your ecommerce ? Let’s talk.
        </p>
        <a
          href='mailto:adstechdigitalinfo@gmail.com'
          className='rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-gray-100'
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
