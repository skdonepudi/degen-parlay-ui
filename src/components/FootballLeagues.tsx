import { MdOutlineMoreHoriz } from "react-icons/md";
import Image from "next/image";
export default function FootballLeagues() {
  const leagues = [
    {
      name: "Premier League",
      country: "England",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/560px-Premier_League_Logo.svg.png",
      matches: 25
    },
    {
      name: "La Liga",
      country: "Spain",
      logo: "https://media.glassdoor.com/sqll/2045817/laliga-squarelogo-1567593025336.png",
      matches: 25
    },
    {
      name: "Serie A",
      country: "Italy",
      logo: "https://seeklogo.com/images/S/serie-a-logo-BED7334CA4-seeklogo.com.png",
      matches: 25
    },
    {
      name: "Bundesliga",
      country: "Germany",
      logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/0/0a/Bundesliga-logo.svg/1200px-Bundesliga-logo.svg.png",
      matches: 25
    },
    {
      name: "Ligue 1",
      country: "France",
      logo: "https://www.tonicradio.fr/wp-content/uploads/2019/06/Ligue1.svg_.png",
      matches: 25
    },
    {
      name: "Eredivisie",
      country: "Netherlands",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Eredivisie_nieuw_logo_2017-.svg/460px-Eredivisie_nieuw_logo_2017-.svg.png",
      matches: 25
    }
  ];
  return (
    <div className="w-auto">
      <div>
        <div className="flex justify-between items-center">
          <h3 className="text-lg leading-6 font-bold text-gray-900">Football Leagues</h3>
          <div className="flex items-center">
            <button className=" text-sm font-semibold text-gray-400 ml-4 px-2 py-2 rounded-full hover:bg-gray-300 transition duration-200">
              <MdOutlineMoreHoriz className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="mt-4 border rounded">
          {leagues.map(league => (
            <div key={league.name} className="flex justify-between items-center pl-8 py-2 border-b ">
              <div className="flex items-center">
                <span className="px-3 py-1">
                  <Image src={league.logo} width={40} height={40} alt="League Logo"  />
                </span>
                <div className="pr-24">
                  <p className="text-sm leading-6 font-semibold text-gray-900 ml-2">{league.name}</p>
                  <p className="text-xs leading-6 font-semibold text-gray-400 ml-2">{league.country}</p>
                </div>
              </div>
              <p className="text-gray-300 pr-8">{league.matches}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
