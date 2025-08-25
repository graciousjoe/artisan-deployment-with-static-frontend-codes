export default function NewsLetter() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-6 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-lg md:text-xl font-semibold">SUBSCRIBE TO OUR NEWSLETTER</h3>
      <p className="text-sm text-gray-600 max-w-md">
        Subscribe to our newsletter and get loads of interesting news and update
        on what we are up to sent to you regularly
      </p>
      <form className="flex gap-2 justify-center items-center mt-4 w-full max-w-md">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-3 py-1 border border-gray-300 rounded-md w-full"
        />
        <button className=" bg-primary text-black px-3 py-1 rounded-md">
          Subscribe
        </button>
      </form>
    </div>
  );
}
