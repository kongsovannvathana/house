export default function Footer() {
  return (
    <>
      <div className="w-full fixed bottom-0 grid gap-2 md:grid-cols-3 md:px-3 pt-3  bg-black text-white">
        <div className=" text-white px-5">
          <h1 className="text-xl font-medium ">RentHouse</h1>
          <p>Your trusted platform for rental houses and rooms.</p>
          <p className="mt-2">Phone: +855 12 345 678</p>
          <p>Email: info@renthouse.com</p>
        </div>
        <div className="w-full py-3 text-center">
          <h1 className="text-center w-full font-medium text-xl ">Follow us</h1>
          <h1>
            <a className="" href="#">
              Tik Tok
            </a>
          </h1>
          <h1>
            <a className="" href="#">
              Facebook
            </a>
          </h1>
          <h1>
            <a className="" href="#">
              Instagram
            </a>
          </h1>
          <h1>
            <a className="" href="#">
              Telegram
            </a>
          </h1>
        </div>
        <div className=" h-[100px]  relative">
          <h1 className="text-xl font-medium">Contact </h1>
          <h1>+855 81277517 | +855 81894543 </h1>

          <h1 className="absolute bottom-2 right-2"> © 2025 RentHouse.</h1>
        </div>
      </div>
    </>
  );
}
