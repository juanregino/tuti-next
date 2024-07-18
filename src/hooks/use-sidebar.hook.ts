"use client";
import { useState } from "react";

export const useSidebarHook = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return { sidebarVisible, toggleSidebar };
}