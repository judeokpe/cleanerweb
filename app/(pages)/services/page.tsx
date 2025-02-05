export default function Services() {
    const services = [
      {
        title: 'Residential Cleaning',
        description: 'Comprehensive cleaning solutions for homes and apartments.',
      },
      {
        title: 'Commercial Cleaning',
        description: 'Professional cleaning services for offices and commercial spaces.',
      },
      {
        title: 'Deep Cleaning',
        description: 'Thorough deep cleaning for a complete refresh of your space.',
      },
      {
        title: 'Move In/Out Cleaning',
        description: 'Specialized cleaning services for moving transitions.',
      },
    ];
  
    return (
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Professional cleaning services tailored to your needs
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
              >
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }