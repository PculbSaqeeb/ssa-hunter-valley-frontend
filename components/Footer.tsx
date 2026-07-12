import Image from 'next/image';

const FOOTER_LINKS = [
  "About Us",
  "Coaches",
  "News",
  "Matches",
  "Events",
  "FAQs",
  "Programs",
  "Amenities",
  "Blogs",
];

export default function Footer() {
  return (
    <footer className="w-full flex flex-col">
      <div className="bg-white px-6 py-12 lg:py-[90px] md:px-12 xl:px-16 2xl:px-[135px]">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 lg:gap-24 w-full max-w-[1440px] mx-auto">
        
        {/* Left Side: Logo */}
        <div className="flex shrink-0">
          {/* Using an img tag assuming the logo image is provided or will be added */}
          <Image 
            src="/images/footer-logo.svg" 
            alt="SSA Logo" 
            width={200}
            height={60}
            className="w-[150px] md:w-[180px] xl:w-[200px] object-contain" 
          />
        </div>

        {/* Right Side: Links and Info */}
        <div className="flex-1 flex flex-col w-full">
          
          {/* Top Row: Links Grid */}
          <nav className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-y-6 gap-x-4">
            {FOOTER_LINKS.map((link) => (
              <a 
                key={link} 
                href="#" 
                className="text-[14px] text-black hover:text-[#99B81B] transition-colors font-medium"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Divider Line */}
          <div className="w-full border-t border-gray-300 mt-10 mb-8"></div>

          {/* Bottom Row: Contact & Socials */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-[150px]">
            
            {/* Contact Info */}
            <div className="flex flex-col gap-4">
              <h3 
                className="text-[#99B81B] font-semibold text-[18px]"
              >
                Signature Slam Academy
              </h3>
              
              <p 
                className="text-[14px] text-gray-800"
              >
                30 Wills Hill Road, Lovedale, NSW
              </p>
              
              <div className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#99B81B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <p className="text-[14px] text-black font-medium">
                  + 91 5642589752
                </p>
              </div>

              <div className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#99B81B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <p className="text-[14px] text-black font-medium">
                  info@ssagroup.com
                </p>
              </div>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-4">
              <h3 
                className="text-[#99B81B] font-semibold text-[18px]"
              >
                Connect with us
              </h3>
              
              <div className="flex items-center gap-5 mt-1">
                {/* Facebook */}
                <a href="#" className="text-black hover:text-[#99B81B] transition-colors">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                {/* X / Twitter */}
                <a href="#" className="text-black hover:text-[#99B81B] transition-colors">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                  </svg>
                </a>
                {/* Instagram */}
                <a href="#" className="text-black hover:text-[#99B81B] transition-colors">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                {/* YouTube */}
                <a href="#" className="text-black hover:text-[#99B81B] transition-colors">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
        </div>
      </div>
      
      {/* Copyright & Links Bottom Bar */}
      <div className="bg-gradient-to-r from-[#003A5D] to-[#99B81B] text-white h-auto py-4 md:py-0 md:h-[40px] px-6 md:px-12 xl:px-16 2xl:px-[135px] flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] md:text-[14px]">
        <p className="hover:text-white/80 cursor-pointer">Terms And Conditions</p>
        <p className="text-center opacity-90">© 2025 SSA Group. All Rights Reserved. www.signatureslamacademy.com</p>
        <p className="hover:text-white/80 cursor-pointer">Privacy Policy</p>
      </div>
    </footer>
  );
}


