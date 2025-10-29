import React from 'react';
import Navbar from './components/Navbar';
import { AcademicCapIcon, PresentationChartLineIcon, LightBulbIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="bg-blue-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
                Transforming Education in<br />Ghana for Grades 2–10
              </h1>
              <p className="text-gray-600 max-w-xl">
                PAS Academy provides comprehensive, curriculum-aligned online learning experiences for Basic, JHS, and SHS students across Ghana. Empowering every student to achieve academic excellence.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 bg-blue-900 text-white rounded-md shadow-sm text-sm font-medium hover:bg-blue-900"
                >
                  Explore Courses
                </a>

                <a
                  href="#"
                  className="inline-flex text-gray-700 items-center justify-center px-5 py-3 border border-gray-300 bg-white rounded-md text-sm font-medium hover:bg-gray-100"
                >
                  REGISTER A COURSE <span className="ml-2">→</span>
                </a>
              </div>
            </div>

            <div>
              <img
                src="hero1.jpeg"
                alt=""
                className="w-full rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mt-30">Why Choose PAS Academy?</h2>
            <p className="mt-4 text-gray-600">
              Our platform is meticulously crafted to support every student's unique learning journey,
              combining quality content with an engaging learning environment.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-orange-500 rounded-lg">
              <div className="flex items-center justify-center h-12 text-white">
                <AcademicCapIcon className="h-15 w-15" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-white">Comprehensive Curriculum</h3>
              <p className="mt-2 text-sm text-gray-500">
                Access a wide range of subjects aligned with the official Ghanaian Basic, JHS, and SHS curricula.
              </p>
            </div>

            <div className="text-center p-6 bg-blue-800 rounded-lg">
              <div className="flex items-center justify-center h-12 text-white">
                <PresentationChartLineIcon className="h-15 w-15" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-white">Grade-Specific Learning</h3>
              <p className="mt-2 text-sm text-gray-100">
                Tailored content for students from Grade 2 to 10, ensuring age-appropriate and effective education.
              </p>
            </div>

            <div className="text-center p-6 bg-green-600 rounded-lg">
              <div className="flex items-center justify-center h-12 text-white">
                <LightBulbIcon className="h-15 w-15" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-white">Interactive & Engaging</h3>
              <p className="mt-2 text-sm text-gray-500">
                Experience learning with videos, quizzes, and multimedia resources designed for active participation.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="#"
              className="inline-flex mb-30 items-center px-5 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100"
            >
              View All Courses <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-purple-600 py-20 text-white text-center">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-4xl font-semibold">Ready to Unlock Your Child's Full Potential?</h2>
          <a
            href="#"
            className="mt-8 inline-flex items-center justify-center px-5 py-3 bg-white text-blue-600 rounded-md shadow-sm text-sm font-medium hover:bg-blue-50"
          >
            Start Learning Today <span className="ml-2">→</span>
          </a>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mt-30 text-gray-800">What Our Community Says</h2>
            <p className="mt-4 text-gray-600">
              Hear from students and parents who have experienced the PAS Academy difference.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-gray-700 italic">
                <span className="text-blue-600 text-lg">"</span>
                EduGhana has made learning so much more fun and accessible for my son. His grades have significantly improved since we started using the platform!
              </div>
              <div className="mt-4 flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1573496800648-aa0aa8833a21?w=64&h=64&fit=crop&auto=format"
                  alt="Akua Mensah"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <div className="font-medium text-gray-800">Akua Mensah</div>
                  <div className="text-gray-500 text-sm">Parent of a Grade 6 Student</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-gray-700 italic">
                <span className="text-blue-600 text-lg">"</span>
                The JHS curriculum content is incredibly thorough and easy to understand. The practice quizzes really help me prepare for exams.
              </div>
              <div className="mt-4 flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&auto=format"
                  alt="Kwame Nkrumah"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <div className="font-medium text-gray-800">Kwame Nkrumah</div>
                  <div className="text-gray-500 text-sm">JHS 2 Student</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-gray-700 italic">
                <span className="text-blue-600 text-lg">"</span>
                As an educator, I appreciate the structured approach and the quality of the resources. It's an excellent supplementary tool for our students.
              </div>
              <div className="mt-4 flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d674x?w=64&h=64&fit=crop&auto=format"
                  alt="Mrs. Adwoa Amoah"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <div className="font-medium text-gray-800">Mrs. Adwoa Amoah</div>
                  <div className="text-gray-500 text-sm">Head Teacher, Accra Basic School</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
