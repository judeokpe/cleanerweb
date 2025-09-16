export default function About() {
    return (
      <div className="py-24 sm:py-32 bg-neutral-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl md:p-16 shadow-md p-4">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-center">
              About Us
            </h1>
            <div className="mt-16 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  We are dedicated to providing top-quality cleaning services with a focus on customer satisfaction. 
                  Our team of experienced professionals ensures that every space we clean meets our high standards of cleanliness.
                </p>
              </section>
  
              <section>
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  To deliver exceptional cleaning services that exceed our clients&apos; expectations, 
                  creating healthier and more comfortable environments for homes and businesses alike.
                </p>
              </section>
  
              <section>
                <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Experienced and professional staff</li>
                  <li>Eco-friendly cleaning products</li>
                  <li>Flexible scheduling options</li>
                  <li>Competitive pricing</li>
                  <li>100% satisfaction guarantee</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }