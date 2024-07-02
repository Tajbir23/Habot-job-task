const Footer = () => {
    return (
      <footer className="bg-[#123557] py-10 text-white font-poppins">
        <div className="mx-5 p-5 md:mx-10 lg:mx-20 xl:mx-36 border-y-2 border-[#FFFFFF33] flex flex-col md:flex-row justify-between gap-10">
          <div className="flex flex-col md:flex-row gap-10">
            <div>
              <img className="h-10" src="/images/logo2.svg" alt="logo" />
              <p className="mt-4 font-light text-[16px]">© R Singhania</p>
            </div>
  
            <div className="flex flex-wrap gap-5">
              <div>
                <h1 className="font-bold text-[16px] mb-2">Company</h1>
                <ul>
                  <li className="text-xs font-light"><a href="#">About</a></li>
                  <li className="text-xs font-light"><a href="#">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h1 className="font-bold text-[16px] mb-2">Terms</h1>
                <ul>
                  <li className="text-xs font-light"><a href="#">Data privacy</a></li>
                  <li className="text-xs font-light"><a href="#">Terms</a></li>
                  <li className="text-xs font-light"><a href="#">Accessibility</a></li>
                </ul>
              </div>
              <div>
                <h1 className="font-bold text-[16px] mb-2">Related</h1>
                <ul>
                  <li className="text-xs font-light"><a href="#">Find Buyer</a></li>
                  <li className="text-xs font-light"><a href="#">Feedback</a></li>
                </ul>
              </div>
            </div>
          </div>
  
          <div className="flex justify-center md:justify-end items-center">
            <ul className="flex gap-5">
              <li><a href="#" aria-label="LinkedIn"><img src="/images/linkedin.svg" alt="LinkedIn" /></a></li>
              <li><a href="#" aria-label="Twitter"><img src="/images/twitter.svg" alt="Twitter" /></a></li>
              <li><a href="#" aria-label="Facebook"><img src="/images/facebook.svg" alt="Facebook" /></a></li>
              <li><a href="#" aria-label="Instagram"><img src="/images/insta.svg" alt="Instagram" /></a></li>
            </ul>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  