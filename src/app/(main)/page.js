import Form from 'next/form'
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#d2e823] font-sans text-[#254f1a]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left z-10">
            <h1 className="text-5xl md:text-8xl font-black leading-[1.1] mb-8 animate-fade-in-up">
              A link in bio built for you.
            </h1>
            <p className="text-xl md:text-2xl font-medium mb-10 text-[#254f1a]/80 max-w-2xl">
              Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
              <Form action='/' className="flex flex-col sm:flex-row gap-2 w-full max-w-lg">
                <div className="relative flex-1">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">{process.env.NEXT_PUBLIC_HOST.slice(7, 16)}/</span>
                  <input 
                    placeholder="yourname" 
                    name='linktr.ee' 
                    type="text" 
                    className='w-full bg-white text-black p-5 pl-[5.5rem] rounded-2xl border-2 border-transparent focus:border-[#d2e823] outline-none transition-all shadow-sm'
                  />
                </div>
                <Link 
                  href="/signup" 
                  className='bg-[#254f1a] hover:bg-[#1b3a13] text-[#ffffff] font-bold px-8 py-5 rounded-full transition-all transform whitespace-nowrap'
                >
                  Claim your Linktree
                </Link>
              </Form>
            </div>
          </div>
          <div className="flex-1 w-full max-w-md md:max-w-full animate-float">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-[#254f1a]">
               <img 
                src="/hero-phone.png" 
                alt="Linktree Phone Mockup"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 1: Customize */}
      <section className="py-24 px-6 bg-[#2665d6] text-[#d2e823]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="flex-1">
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Create and customize your Linktree in minutes
            </h2>
            <p className="text-xl md:text-2xl mb-10 opacity-90">
              Connect all your content across social media, websites, stores and more in one link in bio. Customize every detail or let Linktree automatically enhance it to match your brand and drive more clicks.
            </p>
            <Link 
              href='/signup' 
              className="inline-block bg-[#d2e823] text-[#254f1a] font-bold px-10 py-5 rounded-full hover:bg-white transition-colors"
            >
              Get started for free
            </Link>
          </div>
          <div className="flex-1 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-[#d2e823]/20">
            <img 
               src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" 
               alt="Customization UI"
               className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Feature Section 2: Share */}
      <section className="py-24 px-6 bg-[#780016] text-[#e9c0e9]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Share your Linktree anywhere you like!
            </h2>
            <p className="text-xl md:text-2xl mb-10 opacity-80 text-white">
              Add your unique Linktree URL to all the platforms and places you find your audience. Then use your QR code to drive your offline traffic back to your link in bio.
            </p>
            <Link 
              href='/signup' 
              className="inline-block bg-[#e9c0e9] text-black font-bold px-10 py-5 rounded-full hover:bg-[#de9fde] transition-colors"
            >
              Get started for free
            </Link>
          </div>
          <div className="flex-1 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-red-800">
            <img 
              src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=1000" 
              alt="Sharing Linktree"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Feature Section 3: Analyze */}
      <section className="py-24 px-6 bg-[#e8efd6] text-[#1e2330]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="flex-1">
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Analyze your audience and keep them engaged
            </h2>
            <p className="text-xl md:text-2xl mb-10 opacity-80 text-[#1e2330]">
              Track your engagement over time, monitor revenue and learn what’s converting your audience. Make informed updates on the fly to keep them coming back.
            </p>
            <Link 
              href='/signup' 
              className="inline-block bg-[#e9c0e9] text-black font-bold px-10 py-5 rounded-full hover:bg-[#de9fde] transition-colors"
            >
              Get started for free
            </Link>
          </div>
          <div className="flex-1 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" 
              alt="Analytics Dashboard"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 px-6 bg-white text-center">
        <h2 className="text-5xl md:text-7xl font-black mb-12">
          The only link in bio trusted by 70M+
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 mb-16 grayscale">
            <div className="flex items-center justify-center h-20 text-2xl font-bold">Complex</div>
            <div className="flex items-center justify-center h-20 text-2xl font-bold">VOGUE</div>
            <div className="flex items-center justify-center h-20 text-2xl font-bold">Forbes</div>
            <div className="flex items-center justify-center h-20 text-2xl font-bold">HYPEBEAST</div>
        </div>
        <div className="bg-[#254f1a] text-[#d2e823] p-12 rounded-[3rem] inline-block max-w-3xl transform hover:rotate-1 transition-transform">
            <p className="text-2xl font-bold mb-6">"The fast, friendly and powerful link in bio tool."</p>
            <Link href='/signup' className="underline text-xl font-bold">Explore all plans</Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-[#780016] text-[#e9c0e9]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black mb-12 text-center">Questions? Answered</h2>
          <div className="space-y-4">
            {[ 
              "Why do I need a link in bio tool?", 
              "Is Linktree the original link in bio tool?", 
              "Can you get paid and sell things from a Linktree?", 
              "Is Linktree safe to use on all of my social media profiles?", 
              "What makes Linktree better than the other link in bio options?", 
              "How can I drive more traffic to and through my Linktree?", 
              "How many links should I have on my Linktree?", 
              "Do I need a website to use Linktree?", 
              "Where can I download the app?" 
            ].map((q, i) => (
              <div key={i} className="bg-[#51000f] p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow cursor-pointer flex justify-between items-center group">
                <span className="text-xl font-bold">{q}</span>
                <span className="text-2xl group-hover:rotate-45 transition-transform">+</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Last CTA */}
      <section className="py-32 px-6 bg-[#502274] text-[#e9c0e9] text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-black mb-12 leading-tight">
            Jumpstart your corner of the internet today
          </h2>
          <Form action='/' className='flex flex-col sm:flex-row gap-2 w-full max-w-xl mx-auto text-[18px]'>
            <input placeholder="linktr.ee/yourname" name='linktr.ee' type="text" className='bg-white text-black p-5 rounded-2xl flex-1 outline-none shadow-inner' />
            <Link href="/signup" type='submit' className='bg-[#cee027] text-black font-bold p-5 rounded-full hover:bg-[#bdce23] transition-all transform'>Claim your Linktree</Link>
          </Form>
        </div>
      </section>

      <Footer />
    </div>
  );
}


export function Footer() {
  const sections = [
    {
      title: "Company",
      links: ["The Linktree Blog", "Engineering Blog", "Marketplace", "What's New", "About", "Press", "Careers", "Link In Bio", "Social Good", "Contact"]
    },
    {
      title: "Community",
      links: ["Linktree for Enterprise", "2023 Creator Report", "2022 Creator Report", "Charities", "Creator Profile Directory", "Explore Templates"]
    },
    {
      title: "Support",
      links: ["Help Topics", "Getting Started", "Linktree Pro", "Features & How Tos", "FAQs", "Report a Violation"]
    },
    {
      title: "Trust & Legal",
      links: ["Terms & Conditions", "Privacy Notice", "Cookie Notice", "Trust Center", "Cookie Preferences", "Transparency Report", "Law Enforcement Access Policy", "Human Rights"]
    }
  ];

  return (
    <footer className="bg-[#502274] px-4 md:px-10 py-16 text-[#254f1a] overflow-hidden">
      <div className="max-w-7xl mx-auto bg-white rounded-[32px] p-10 md:p-16 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          {sections.map((section, id) => (
            <div key={id}>
              <h3 className="font-bold text-lg mb-8">{section.title}</h3>
              <ul className="space-y-4 text-sm opacity-80">
                {section.links.map((link, i) => (
                  <li key={i} className="hover:opacity-100 cursor-pointer transition-opacity">{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mt-12">
          <div className="flex flex-wrap gap-4">
            <Link href="/login" className="bg-[#eff0ec] hover:bg-[#e2e3df] text-[#254f1a] font-bold px-8 py-4 rounded-xl transition-colors">
              Log in
            </Link>
            <Link href="/signup" className="bg-[#d2e823] hover:bg-[#bdce23] text-[#254f1a] font-bold px-8 py-4 rounded-full transition-colors">
              Get started for free
            </Link>
          </div>
          
          <div className="flex flex-wrap items-center gap-4">
            {/* App Store Badge Placeholder */}
            <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform">
               <span className="text-xs">Download on the</span>
               <span className="font-bold">App Store</span>
            </div>
            {/* Google Play Badge Placeholder */}
            <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform">
               <span className="text-xs">GET IT ON</span>
               <span className="font-bold">Google Play</span>
            </div>
            {/* Social Icons Placeholders */}
            <div className="flex gap-3">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="w-10 h-10 bg-black rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}