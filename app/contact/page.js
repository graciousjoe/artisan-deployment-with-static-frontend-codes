import Image from "next/image";
export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <div className="relative h-[70vh] md:h-150 w-full bg-[url('/assets/contact-hero.png')] bg-no-repeat bg-cover bg-center md:bg-top mt-20 p-6 flex items-end justify-start">
        <h1 className=" text-white text-3xl md:text-5xl font-bold">
          Contact Us
        </h1>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <div>
          <p>
            We are here to help you connect, create and collaborate. Whether you
            are an artisan looking to grow your network or a customer serching
            for trusted profesionals, we will love to hear from you, Got a
            question, suggestion, or issue? let's talk
          </p>

          <div>
            {" "}
            <p className="font-medium flex gap-2 mt-4">
              <Image
                src="/icons/envelope.svg"
                alt="Email Us"
                width={24}
                height={24}
              />
              Email Us
            </p>
            <p>support@artisanlinkup.com</p>
            <p>Reach out anytime, we will respond within 24 hours</p>
          </div>

          <div>
            <p className="font-medium flex gap-2 mt-4">
              <Image
                src="/icons/messages.png"
                alt="Call or WhatsApp"
                width={24}
                height={24}
              />
              Call or WhatsApp
            </p>
            <p>+234xxxxxxxxx</p>
            <p>Available Monday to Friday, 9am-5pm (WAT)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
