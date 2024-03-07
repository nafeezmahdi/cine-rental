import TrendingLogo from "../assets/icons/trending.svg";
import NewReleaseLogo from "../assets/icons/newRelease.svg";
import SoonLogo from "../assets/icons/comingSoon.svg";
import FavoriteLogo from "../assets/icons/favorite.svg";
import WatchLaterLogo from "../assets/icons/watchLater.svg";

export default function Sidebar() {
  return (
    <aside>
      <ul className="space-y-2">
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
            href="#"
          >
            <img src={TrendingLogo} width="24" height="24" alt="TrendingLogo" />
            <span>Trending</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <img
              src={NewReleaseLogo}
              width="24"
              height="24"
              alt="NewReleaseLogo"
            />
            <span>New Releases</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <img src={SoonLogo} width="24" height="24" alt="ComingSoonLogo" />
            <span>Coming Soon</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <img src={FavoriteLogo} width="24" height="24" alt="FavoriteLogo" />
            <span>Favorites</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <img
              src={WatchLaterLogo}
              width="24"
              height="24"
              alt="WatchLaterLogo"
            />
            <span>Watch Later</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}
