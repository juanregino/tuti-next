import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import TableRowsIcon from '@mui/icons-material/TableRows';
import EditNoteIcon from "@mui/icons-material/EditNote";
import ChecklistIcon from "@mui/icons-material/Checklist";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import InfoIcon from "@mui/icons-material/Info";
import ControlCameraIcon from "@mui/icons-material/ControlCamera";
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
interface MenuItem {
  name: string;
  icon: any;
  href: string;
  subitems?: MenuItem[];
}
export const menuItems: MenuItem[] = [
  {
    name: "Inicio",
    icon: (
      <svg
        className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-primary-100 "
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 21"
      >
        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
      </svg>
    ),
    href: "/dashboard",
  },
  {
    name: "Maestros",
    icon: (
      <svg
        className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-primary-100 " 
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 18"
      >
        <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
      </svg>
    ),
    href: "#",
    subitems: [
      {
        name: "Productos",
        href: "/dashboard/maestros/products",
        icon: (
          <TableRowsIcon className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-primary-100 " />
        ),
      },
      {
        name: "Tiendas",
        href: "/dashboard/maestros/stores",
        icon: (
          <TableRowsIcon className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-primary-100 " />
        ),
      },
      {
        name: "Conductores",
        icon: (
          <svg
          className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-primary-100 "
            xmlns="http://www.w3.org/2000/svg"
           
            viewBox="0 0 48 48"
          >
            <g fill="none">
              <g clip-path="url(#IconifyId1909cd28f764c6b9b0)">
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M0 0h48v48H0zm31.95 19.097c3.071-1.048 2.526-2.8 1.51-4.097H14.819c-1.271 1.349-2.111 3.188 1.219 4.218a8 8 0 1 0 15.912-.12m-1.962.519c-1.57.244-3.618.384-6.26.384c-2.382 0-4.257-.113-5.72-.315Q18 19.842 18 20a6 6 0 1 0 11.988-.384M23 32.062v4.109a3 3 0 0 0-1.88 1.987l-4.517-1.21A8.01 8.01 0 0 1 23 32.061m2 0v4.109c.904.32 1.61 1.06 1.88 1.987l4.517-1.21A8.01 8.01 0 0 0 25 32.061m6.922 6.815l-5.204 1.395a3 3 0 0 1-5.436 0l-5.204-1.395A8 8 0 0 0 16 40v1a1 1 0 1 1-2 0v-.607a2 2 0 0 1-1.808.404l-1.932-.518a2 2 0 0 1-1.414-2.45l.776-2.897a2 2 0 0 1 2.45-1.414l1.932.517a2 2 0 0 1 1.28 1.058A10 10 0 0 1 24 30a10 10 0 0 1 8.713 5.089a2 2 0 0 1 1.279-1.053l1.932-.518a2 2 0 0 1 2.45 1.415l.776 2.897a2 2 0 0 1-1.415 2.45l-1.931.518a2 2 0 0 1-1.804-.4V41a1 1 0 1 1-2 0v-1q0-.572-.078-1.123M24 40a1 1 0 1 0 0-2a1 1 0 0 0 0 2M15 9.5c0-.437 4.516-3.5 9-3.5s9 3.063 9 3.5c0 1.56-.166 2.484-.306 2.987c-.093.33-.402.513-.745.513H16.051c-.343 0-.652-.183-.745-.513C15.166 11.984 15 11.06 15 9.5m7.5-.5a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2z"
                  clip-rule="evenodd"
                />
              </g>
              <defs>
                <clipPath id="IconifyId1909cd28f764c6b9b0">
                  <path d="M0 0h48v48H0z" />
                </clipPath>
              </defs>
            </g>
          </svg>
        ),
        href: "/drivers",
      },
    ],
  },
  {
    name: "Procesos",
    icon: (
      <EditNoteIcon className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-primary-100 " />
    ),
    href: "#",
    subitems: [
      {
        name: "Recibos",
        icon: (
          <ChecklistIcon className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-primary-100 " />
        ),
        href: "/dashboard/rf",
      },
      {
        name: "Orden Pedidos",
        icon: (
          <FeaturedPlayListIcon className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-primary-100 " />
        ),
        href: "/dashboard/op",
      },
      {
        name: "Despacho",
        icon: (
          <FactCheckIcon className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-primary-100 " />
        ),
        href: "/dashboard/dispatch",
      },
    ],
  },

  {
    name: "Informes",
    icon: (
      <InfoIcon className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-primary-100 " />
    ),
    href: "#",
    subitems: [
      {
        name: "Lectura",
        icon: (
          < QrCodeScannerIcon className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-primary-100 " />
        ),
        href: "/dashboard/rf",
      },
      {
        name: "Movimiento Interno",
        icon: (
          <ControlCameraIcon className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-primary-100 " />
        ),
        href: "/dashboard/internal-movement",
      },
      {
        name: "Productos Escaneados",
        icon: (
          <DocumentScannerIcon className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-primary-100 " />
        ),
        href: "/dashboard/inbox",
      },
    ],
  },

  {
    name: "Cerrar sesión",
    icon: (
      <svg
        className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-primary-100 "
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 18 16"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
        />
      </svg>
    ),
    href: "/login",
  },
];
