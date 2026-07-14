import { Link, useLocation } from "react-router-dom";

export default function Navbar() {

  const location = useLocation();

  const links = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "Assessment",
    path: "/assessment"
  }
];


  return (

    <nav className="border-b border-zinc-200 bg-white">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">


        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3"
        >

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 text-white font-bold">
            R
          </div>


          <div>

            <h1 className="font-bold text-zinc-900">
              RescueAI
            </h1>

            <p className="text-xs text-zinc-500">
              Emergency Intelligence
            </p>

          </div>


        </Link>




        {/* Navigation */}

        <div className="ml-auto flex items-center gap-3">


          {
            links.map((link)=>(
              
              <Link
                key={link.path}
                to={link.path}
                className={`rounded-xl px-4 py-2 text-sm transition ${
                  
                  location.pathname === link.path
                  ? "bg-zinc-900 text-white"
                  : "text-zinc-600 hover:bg-zinc-100"

                }`}
              >

                {link.name}

              </Link>


            ))
          }


        </div>



      </div>


    </nav>

  );

}