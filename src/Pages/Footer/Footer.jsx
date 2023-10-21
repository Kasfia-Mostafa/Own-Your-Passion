import { SiDungeonsanddragons } from "react-icons/si";
const Footer = () => {
  return (
    <div>
      <footer className="p-4  md:p-8 lg:p-10 dark:bg-gray-800 font-PlayFair">
        <div className="mx-auto max-w-screen-xl text-center">
          <div>
            <div className="flex items-center justify-center">
              <div className="p-2">
                <SiDungeonsanddragons className="text-4xl" />
              </div>
              <div>
                <span className="self-center font-lobster font-body text-4xl font-semibold whitespace-nowrap dark:text-white">
                  OYP
                </span>
              </div>
            </div>
          </div>
          <p className="my-6 text-gray-500 dark:text-gray-400">
          Products encompass a diverse range, offering functionality, connectivity, and automation.
          </p>
          <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
            <li>
              <p href="#" className="mr-4 hover:underline md:mr-6 text-gray-500 dark:text-gray-400">
                About
              </p>
            </li>
            <li>
              <p href="#" className="mr-4 md:mr-6 text-gray-500 dark:text-gray-400">
                Premium
              </p>
            </li>
            <li>
              <p href="#" className="mr-4 md:mr-6 text-gray-500 dark:text-gray-400">
                Campaigns
              </p>
            </li>
            <li>
              <p href="#" className="mr-4 md:mr-6 text-gray-500 dark:text-gray-400">
                Blog
              </p>
            </li>
            <li>
              <p href="#" className="mr-4 md:mr-6 text-gray-500 dark:text-gray-400">
                FAQs
              </p>
            </li>
            <li>
              <p href="#" className="mr-4 md:mr-6 text-gray-500 dark:text-gray-400">
                Contact
              </p>
            </li>
          </ul>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2020-2023{" "}
            
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
