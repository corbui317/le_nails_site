import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'FAQ | Soleil Nail Lounge',
  description: 'Frequently asked questions about our services, policies, and appointments at Soleil Nail Lounge.',
}

const faqs = [
  {
    category: 'Appointments & Booking',
    questions: [
      {
        q: 'Do I need an appointment?',
        a: 'While walk-ins are welcome based on availability, we highly recommend booking an appointment to ensure your preferred time and service.',
      },
      {
        q: 'How do I book an appointment?',
        a: 'You can book online through our website, call us at (248) 555-1234, or visit us in person.',
      },
      {
        q: 'Can I request a specific technician?',
        a: 'Yes! You can request your preferred technician when booking. We\'ll do our best to accommodate your request.',
      },
      {
        q: 'What is your cancellation policy?',
        a: 'Please provide at least 24 hours notice for cancellations to avoid a cancellation fee. We understand emergencies happen - please call us as soon as possible.',
      },
    ],
  },
  {
    category: 'Services & Pricing',
    questions: [
      {
        q: 'How long do services typically take?',
        a: 'Basic manicures take 30-45 minutes, pedicures 45-60 minutes, and full sets 60-90 minutes. Detailed service times are provided when booking.',
      },
      {
        q: 'Do you offer gel polish?',
        a: 'Yes! We offer gel polish for both manicures and pedicures. Gel polish lasts 2-3 weeks without chipping.',
      },
      {
        q: 'What nail enhancement services do you offer?',
        a: 'We offer acrylic, gel, Gel-X, pink & white, and builder gel services. Our technicians can help you choose the best option for your needs.',
      },
      {
        q: 'Do you offer lash services?',
        a: 'Yes! We offer classic lash extensions, hybrid sets, volume lashes, lash lifts, and lash tinting.',
      },
    ],
  },
  {
    category: 'Health & Safety',
    questions: [
      {
        q: 'What sanitation measures do you follow?',
        a: 'We follow strict sanitation protocols including sterilizing all metal tools in an autoclave, using disposable files and buffers, and disinfecting all surfaces between clients.',
      },
      {
        q: 'Are your products safe?',
        a: 'Yes! We use professional-grade products from reputable brands. All products meet safety standards and are properly stored.',
      },
      {
        q: 'What if I have allergies or sensitivities?',
        a: 'Please inform us of any allergies or sensitivities when booking. We can often accommodate special needs with alternative products.',
      },
      {
        q: 'Are you licensed?',
        a: 'Yes! All our technicians are licensed and trained professionals who stay current with the latest techniques and safety standards.',
      },
    ],
  },
  {
    category: 'Payment & Policies',
    questions: [
      {
        q: 'What payment methods do you accept?',
        a: 'We accept cash, all major credit cards (Visa, MasterCard, American Express, Discover), and digital payments.',
      },
      {
        q: 'Do you require a deposit?',
        a: 'Some services may require a deposit to secure your appointment, which will be applied to your service total.',
      },
      {
        q: 'What is your tipping policy?',
        a: 'Gratuity is appreciated but never required. Standard tipping for excellent service is 15-20%.',
      },
      {
        q: 'Do you offer gift certificates?',
        a: 'Yes! Gift certificates are available for any amount and make perfect gifts. Contact us or visit the salon to purchase.',
      },
    ],
  },
  {
    category: 'Aftercare & Maintenance',
    questions: [
      {
        q: 'How long will my manicure last?',
        a: 'Regular polish lasts 5-7 days, gel polish lasts 2-3 weeks, and acrylic/gel enhancements should be filled every 2-3 weeks.',
      },
      {
        q: 'How do I care for my nails after service?',
        a: 'Avoid water for 1-2 hours after gel application, use cuticle oil daily, wear gloves for cleaning, and moisturize regularly.',
      },
      {
        q: 'What if I have a problem after my service?',
        a: 'Your satisfaction is important to us! If you experience any issues within 48 hours of your service, please contact us immediately.',
      },
      {
        q: 'How often should I get a pedicure?',
        a: 'We recommend getting a pedicure every 4-6 weeks to maintain healthy, beautiful feet.',
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-script text-primary mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-700 text-lg">
            Find answers to common questions about our services and policies.
          </p>
        </div>

        <div className="space-y-12">
          {faqs.map((category, index) => (
            <div key={index}>
              <h2 className="text-2xl font-script text-primary mb-6 pb-2 border-b-2 border-primary">
                {category.category}
              </h2>
              <div className="space-y-6">
                {category.questions.map((faq, faqIndex) => (
                  <div key={faqIndex} className="bg-accent rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      {faq.q}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-script mb-4">
            Still Have Questions?
          </h2>
          <p className="mb-6 text-lg">
            We're here to help! Feel free to reach out to us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+12485551234"
              className="px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call Us: (248) 555-1234
            </a>
            <Link
              href="/contact"
              className="px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/booking"
            className="inline-block px-8 py-4 bg-primary text-white rounded-lg text-lg hover:bg-primary/80 transition-colors"
          >
            Book Your Appointment
          </Link>
        </div>
      </div>
    </div>
  )
}
