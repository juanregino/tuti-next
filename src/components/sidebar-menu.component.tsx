"use client";
import { useState } from "react";
import Link from "next/link";
import { menuItems } from "./models";
import { usePathname } from "next/navigation";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

interface MenuItem {
  name: string;
  href: string;
  icon: React.ReactNode;
  subitems?: MenuItem[];
}

export function SideBar() {
  const currentPath = usePathname();
  const [openSubMenus, setOpenSubMenus] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleSubMenu = (itemName: string) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  return (
    <aside
      id="logo-sidebar"
      className={
        "hidden sm:block z-40 bg-white border-r border-gray-200 dark:bg-[#011880] dark:border-gray-700 font-medium"
      }
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-slate-100 dark:bg-primary-100">
        <ul className="space-y-2 font-medium">
          {menuItems.map((item: MenuItem) => (
            <li key={item.name}>
              <div className="flex items-center justify-between">
                <Link
                  href={item.href}
                  className={`flex items-center p-2 text-white rounded-lg font-medium   hover:bg-white/90 hover:text-primary-100 group ${
                    currentPath === item.href
                      ? "bg-white dark:text-primary-100"
                      : ""
                  }`}
                >
                  {item.icon}
                  <span className="ms-3">{item.name}</span>
                </Link>
                {item.subitems && (
                  <button
                    onClick={() => toggleSubMenu(item.name)}
                    className="p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    {openSubMenus[item.name] ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <ExpandMoreIcon />
                    )}
                  </button>
                )}
              </div>
              {item.subitems && openSubMenus[item.name] && (
                <ul className="pl-5 mt-1 space-y-1">
                  {item.subitems.map((subItem) => (
                    <li key={subItem.name}>
                      <Link
                        href={subItem.href}
                        className={`flex items-center p-2 text-white rounded-lg  hover:bg-white/90 hover:text-primary-100 group ${
                          currentPath === subItem.href
                            ? "bg-white dark:text-primary-100"
                            : ""
                        }`}
                      >
                        {subItem.icon}
                        <span className="ms-3">{subItem.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
