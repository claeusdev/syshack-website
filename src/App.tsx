import { useState } from 'react';
import { Trophy } from 'lucide-react';

export default function HackathonWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="font-bold text-xl">SysHack</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">About</a>
                <a href="#prizes" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Prizes</a>
                <a href="#schedule" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Schedule</a>
                <a href="#register" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Register</a>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">About</a>
              <a href="#prizes" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Prizes</a>
              <a href="#schedule" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Schedule</a>
              <a href="#register" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Register</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-75"></div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Systems Programming Hackathon</h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">Build, optimize, and innovate with low-level programming. Join us for an exciting weekend of coding challenges and win up to £250 in prizes!</p>
          <div className="mt-10">
            <a
              href="#register"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-900 bg-green-400 hover:bg-green-500"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">About</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What is SysHack?
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              An intensive weekend of systems programming challenges!
            </p>
          </div>

          <div className="mt-10">
            <div className="prose prose-lg text-gray-500 mx-auto">
              <p>
                Join us for an intensive weekend of systems programming challenges! This hackathon focuses on building efficient,
                performant software that interacts directly with hardware and operating systems. Whether you're interested in OS
                development, embedded systems, or high-performance computing, this is your chance to showcase your skills and win prizes.
              </p>
              <p>
                Participants will work in teams of up to 4 people to create innovative solutions using languages like C, C++, Rust, Go, or Assembly.
                Projects will be judged based on technical complexity, performance optimization, and practical applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section id="prizes" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Prizes</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Win Big
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              A total prize pool of £500 will be awarded to the top teams
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* First Prize */}
              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-lg">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                        <Trophy className="h-8 w-8 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">1st Place</h3>
                    <p className="mt-2 text-4xl font-bold text-green-500">£250</p>
                    <p className="mt-5 text-base text-gray-500">
                      Plus recognition at the closing ceremony and featured on our website
                    </p>
                  </div>
                </div>
              </div>

              {/* Second Prize */}
              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-lg">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                        <Trophy className="h-8 w-8 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">2nd Place</h3>
                    <p className="mt-2 text-4xl font-bold text-green-500">£150</p>
                    <p className="mt-5 text-base text-gray-500">
                      Plus recognition at the closing ceremony
                    </p>
                  </div>
                </div>
              </div>

              {/* Third Prize */}
              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-lg">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                        <Trophy className="h-8 w-8 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">3rd Place</h3>
                    <p className="mt-2 text-4xl font-bold text-green-500">£100</p>
                    <p className="mt-5 text-base text-gray-500">
                      Plus recognition at the closing ceremony
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Registration</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Join the Challenge
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Open to students, professionals, and hobbyists interested in systems programming
            </p>
          </div>

          <div className="mt-10 max-w-xl mx-auto">
            <div className="mt-8 text-center">
              <a
                href="https://forms.gle/HaA8tcajsRMv9BEK8"
                type="button"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Register Now
              </a>
              <p className="mt-2 text-sm text-gray-500">Registration closes one week before the event</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">About</h3>
              <p className="mt-4 text-base text-gray-300">
                SysHack is dedicated to promoting systems programming skills and innovation through competitive and collaborative events.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Organized by</h3>
              <ul className="mt-4 space-y-4">
                <li className="text-base text-gray-300">
                  Twitter: @jo_cl06
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Sponsors</h3>
              <ul className="mt-4 space-y-4">
                <li className="text-base text-gray-300">
                  Become a sponsor! Contact us for more information. @jo_cl06
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8">
            <p className="text-center text-base text-gray-400">
              &copy; 2025 SysHack. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
