import { getAbbreviation } from "@school-wits/utils";
import { useState } from "react";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useAuth } from "../../contexts/AuthContext";
import { ClickOutside } from "../../utils/ClickOutside";

export const DropdownUser = function () {
  const { user, setUser, setToken } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogOut = function () {
    if (!setUser || !setToken) return;

    setUser(null);
    setToken(null);

    localStorage.removeItem("loggedUser");
    localStorage.removeItem("loggedToken");
  };

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <div
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4 cursor-pointer px-4 bg-base-200 rounded-lg hover:bg-base-300 duration-200 py-2"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium capitalize">
            {user?.fullName}
          </span>
          <span className="block text-xs capitalize">
            {user?.roles
              ?.map((role: { name: string }) =>
                role.name.split("_")[1].toLowerCase()
              )
              .join(", ")}
          </span>
        </span>

        <span className="h-12 w-12 flex items-center bg-accent justify-center rounded-full overflow-hidden">
          {user?.profileImage ? (
            <img src={user?.profileImage} alt="User" />
          ) : (
            <span className="text-xl text-accent-content mb-1.5 font-semibold">
              {getAbbreviation(user?.fullName)}
            </span>
          )}
        </span>
      </div>

      {dropdownOpen && (
        <div
          className={`absolute right-0 mt-5 flex w-[250px] flex-col rounded-md shadow-lg bg-base-100`}
        >
          <div>
            <div className="p-4 border-b border-base-300">
              <p className="font-semibold">Signed in as</p>
              <p className="text-sm">{user?.email}</p>
            </div>
            <div className="p-4">
              <button
                onClick={handleLogOut}
                className="flex w-full items-center gap-2 btn btn-error text-white"
              >
                <RiLogoutBoxLine /> Log Out
              </button>
            </div>
          </div>
        </div>
      )}
    </ClickOutside>
  );
};
