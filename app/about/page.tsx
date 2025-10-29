import Navbar from '../components/Navbar';
import { LightBulbIcon } from '@heroicons/react/24/outline';
import { TrophyIcon } from '@heroicons/react/24/outline';
import { GlobeAltIcon, SparklesIcon, UsersIcon, BookOpenIcon, LightBulbIcon as LightBulbIconSolid } from '@heroicons/react/24/outline';

export default function About() {
  return (
    <>
      <Navbar />
      <section className="bg-blue-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-5xl font-bold leading-tight text-gray-900">
                Empowering Minds for a Brighter Future
              </h1>
              <p className="text-gray-600 max-w-xl">
                PAS Academy is dedicated to transforming education for students from Grade 2 to 10, including Ghanaian basic, JHS, and SHS learners. Our platform provides engaging, accessible, and locally relevant digital learning experiences to inspire a new generation of leaders.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 bg-blue-600 text-white rounded-md shadow-sm text-sm font-medium hover:bg-blue-700"
                >
                  REGISTER A COURSE
                </a>
              </div>
            </div>

            <div>
              <img
                src="/aboutimag.jpeg"
                alt="Abstract 3D rendering"
                className="w-full rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl mt-30 font-semibold text-gray-800">Our Mission</h2>
          <div className="flex items-center justify-center h-12 text-blue-600 mt-4">
            <LightBulbIcon className="h-8 w-8" aria-hidden="true" />
          </div>
          <p className="mt-4 text-gray-600">
            To provide high-quality, engaging, and accessible digital learning resources that empower students across Ghana and beyond to achieve academic excellence and develop critical 21st-century skills.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold mt-30 text-gray-800">Our Vision</h2>
          <div className="flex items-center justify-center h-12 text-orange-500 mt-4">
            <TrophyIcon className="h-8 w-8" aria-hidden="true" />
          </div>
          <p className="mt-4 text-gray-600">
            To be the leading educational technology platform in West Africa, fostering a culture of continuous learning and innovation that equips every student with the tools for success in a rapidly evolving world.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mt-30">What We Offer: Our Core Values for Every Learner</h2>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center h-12 text-blue-600">
                <GlobeAltIcon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-700">Holistic Learning</h3>
              <p className="mt-2 text-sm text-gray-500">
                We foster critical thinking, creativity, and problem-solving skills for a well-rounded educational experience tailored to the Ghanaian curriculum.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center h-12 text-blue-600">
                <SparklesIcon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-700">Engaging Content</h3>
              <p className="mt-2 text-sm text-gray-500">
                Interactive lessons, captivating visuals, and gamified challenges make learning exciting and accessible for every student, from basic to SHS.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center h-12 text-blue-600">
                <UsersIcon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-700">Community & Support</h3>
              <p className="mt-2 text-sm text-gray-500">
                A supportive environment where students, teachers, and parents connect to share knowledge and empower each other's educational journeys.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center h-12 text-blue-600">
                <GlobeAltIcon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-700">Global Standards, Local Context</h3>
              <p className="mt-2 text-sm text-gray-500">
                Our platform integrates international best practices with content relevant to Ghanaian basic, JHS, and SHS curricula, preparing learners for both local and global opportunities.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center h-12 text-blue-600">
                <BookOpenIcon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-700">Personalized Pathways</h3>
              <p className="mt-2 text-sm text-gray-500">
                Adaptive learning paths that cater to individual student needs and paces, ensuring effective mastery of subjects for grades 2 to 10.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center h-12 text-blue-600">
                <LightBulbIconSolid className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-700">Teacher Empowerment</h3>
              <p className="mt-2 text-sm text-gray-500">
                Tools and resources for educators to enhance teaching methods, track student progress, and inspire the next generation of Ghanaian leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mt-30 mb-20 text-gray-800">Meet Our Dedicated Team</h2>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <img
                src=""
                alt="Stephanie Ackotia"
                className="w-24 h-24 rounded-full mx-auto"
              />
              <h3 className="mt-4 text-lg font-medium text-gray-700">Stephanie Ackotia</h3>
              <p className="mt-2 text-sm text-gray-500">IT</p>
              <a href="#" className="mt-2 text-blue-600 hover:text-blue-800">LinkedIn</a>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <img
                src=""
                alt="Sackey Abednego"
                className="w-24 h-24 rounded-full mx-auto"
              />
              <h3 className="mt-4 text-lg font-medium text-gray-700">Sackey Abednego</h3>
              <p className="mt-2 text-sm text-gray-500">Mathematics & Science</p>
              <a href="#" className="mt-2 text-blue-600 hover:text-blue-800">LinkedIn</a>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <img
                src=""
                alt="Ritee"
                className="w-24 h-24 rounded-full mx-auto"
              />
              <h3 className="mt-4 text-lg font-medium text-gray-700">Mrs. Rita Obeng Siaw</h3>
              <p className="mt-2 text-sm text-gray-500">CEO</p>
              <a href="#" className="mt-2 text-blue-600 hover:text-blue-800">LinkedIn</a>
            </div>
              <div className="bg-white rounded-lg shadow-md p-6">
              <img
                src=""
                alt=""
                className="w-24 h-24 rounded-full mx-auto"
              />
              <h3 className="mt-4 text-lg font-medium text-gray-700"></h3>
              <p className="mt-2 text-sm text-gray-500"></p>
              <a href="#" className="mt-2 text-blue-600 hover:text-blue-800">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}