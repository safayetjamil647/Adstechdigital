export default function ContactSection() {
  return (
    <section id='contact' className='py-20 bg-blue-600 text-white'>
      <div className='max-w-4xl mx-auto px-6 text-center'>
        <h2 className='text-3xl font-bold mb-6'>Get in Touch</h2>
        <p className='mb-8 text-lg'>
          Ready to fix Ads Campaigns for your ecommerce ? Let’s talk.
        </p>
        <a
          href='mailto:adstechdigitalinfo@gmail.com'
          className='bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100'
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
