import Link from 'next/link';
import Button from './components/ui/Button';

export default function Home() {
  return (
    <div className="relative isolate">
      {/* Hero Section */}
      <div className="relative px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Cleanliness Meets Perfection
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Professional cleaning services that transform your space into a pristine environment.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/contact">
                <Button size="lg">Get a Quote</Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Preview Section */}
      <div className="bg-gray-50 dark:bg-gray-800 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Cleaning Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              We offer a comprehensive range of cleaning services to meet all your needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}