import { cn } from "@school-wits/utils";
import { IconType } from "react-icons";
import { NavLink, useLocation } from "react-router-dom";
import { sidebarLinks } from "../../constants";

export const SidebarMenu = function () {
  const { pathname } = useLocation();

  return (
    <ul className="menu bg-base-200 rounded-box w-56 gap-y-2">
      {sidebarLinks.map((l, i) => {
        if (l.link)
          return (
            <li key={i}>
              <NavItem
                isActive={pathname.split("/")[1] === l.link.split("/")[1]}
                link={l.link}
                name={l.name}
                Icon={l.Icon}
                className="font-semibold text-base"
              />
            </li>
          );
        else if (l.sublinks) {
          return (
            <li key={i}>
              <details>
                <summary className="font-semibold text-base capitalize">
                  <div className="flex items-center gap-2.5">
                    <span>{l.Icon && <l.Icon />}</span>
                    <span>{l.name}</span>
                  </div>
                </summary>
                <ul>
                  {l.sublinks.map((sL, id) => (
                    <li key={id}>
                      <NavItem link={sL.link} name={sL.name} />
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          );
        } else return null;
      })}
    </ul>
  );
};

interface NavItemProps {
  link: string;
  Icon?: IconType;
  name: string;
  isActive?: boolean;
  className?: string;
}

const NavItem = function ({
  link,
  Icon,
  name,
  isActive,
  className,
}: NavItemProps) {
  console.log(isActive);
  return (
    <NavLink
      to={link}
      className={cn(
        "flex items-center gap-2.5 py-2 font-medium capitalize",
        isActive && "bg-neutral text-neutral-content",
        className
      )}
    >
      <span>{Icon && <Icon />}</span>
      <span>{name}</span>
    </NavLink>
  );
};
