import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavbarFile from "./components/NavbarFile";
// import Nav from "./components/Nav";
import "./App.css";
import Hero from "./components/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import CareerPage from "./components/CareerPage";
import ServicesPage from "./components/ServicesPage";
import ProjectsPage from "./components/ProjectsPage";

function App() {
  return (
    <>
      <NavbarFile />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/Career" element={<CareerPage />} />
          <Route path="/Services" element={<ServicesPage />} />
          <Route path="/Projects" element={<ProjectsPage />} />
        </Routes>
      </BrowserRouter>
      <div className=" position-fixed index_99 d-inline-block robo_position overflow-hidden pt-2">
        <span className="d-inline-block position-relative">
          <div className="robo">
            <svg
              className=" "
              width="167"
              height="139"
              viewBox="0 0 167 139"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="82.7446"
                y="26.7623"
                width="78.3753"
                height="52.4322"
                rx="26.2161"
                fill="#E3E5E1"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M160.296 59.526L160.301 59.669L165.353 58.3035C168.193 53.7157 166.536 47.7443 165.353 45.332L159.754 44.1031L159.774 44.6643C160.647 47.2767 161.12 50.0723 161.12 52.9784C161.12 55.2392 160.834 57.4331 160.296 59.526Z"
                fill="#B3B0A9"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M84.1642 44.4466C83.2441 47.1212 82.7446 49.9914 82.7446 52.9784C82.7446 55.2882 83.0433 57.5282 83.6042 59.662L78.578 58.3035C75.7379 53.7157 77.3946 47.7443 78.578 45.332L84.1762 44.1031L84.1642 44.4466Z"
                fill="#B3B0A9"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M122.069 79.1945H134.904C149.382 79.1945 161.12 67.4571 161.12 52.9784C161.12 38.4996 149.382 26.7623 134.904 26.7623H122.069V79.1945Z"
                fill="#B3B0A9"
              />
              <path
                d="M92.3026 53.1149C92.3026 43.9903 99.6995 36.5933 108.824 36.5933H135.04C144.165 36.5933 151.562 43.9903 151.562 53.1149V53.1149C151.562 62.2396 144.165 69.6365 135.04 69.6365H121.742C121.416 69.6365 121.093 69.6946 120.788 69.808L109.707 73.926C108.388 74.416 107.447 72.6295 108.597 71.8189L108.902 71.6037C109.765 70.9949 109.334 69.6365 108.278 69.6365V69.6365V69.6365C99.455 69.6365 92.3026 62.4841 92.3026 53.6611V53.1149Z"
                fill="#292345"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M108.824 36.5933C99.6995 36.5933 92.3026 43.9903 92.3026 53.1149C92.3026 53.5747 92.3213 54.0301 92.3582 54.4804C93.0524 45.9945 100.159 39.3242 108.824 39.3242H135.04C143.705 39.3242 150.812 45.9945 151.506 54.4804C151.543 54.0301 151.562 53.5747 151.562 53.1149C151.562 43.9903 144.165 36.5933 135.04 36.5933H108.824Z"
                fill="#17152E"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M122.069 69.6365H135.04C144.165 69.6365 151.562 62.2396 151.562 53.1149C151.562 43.9903 144.165 36.5933 135.04 36.5933H122.069V69.6365Z"
                fill="#17152E"
              />
              <circle
                className="left_eye"
                cx="106.776"
                cy="52.1591"
                r="4.91552"
                fill="#8AD1C0"
              />
              <circle
                className="right_eye"
                cx="137.362"
                cy="52.1591"
                r="4.91552"
                fill="#8AD1C0"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M122.069 119.61C100.665 118.358 100.666 94.3489 102.714 88.3442C104.35 83.5425 116.299 82.4295 122.086 82.4727C127.872 82.4295 139.821 83.5425 141.458 88.3442C143.505 94.3489 143.506 118.358 122.103 119.61V119.612C122.097 119.612 122.091 119.612 122.086 119.611C122.08 119.612 122.074 119.612 122.069 119.612V119.61Z"
                fill="#E3E5E1"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M121.593 82.479C118.937 82.5184 114.544 82.5836 107.732 84.3831C106.366 84.9293 106.503 86.1582 108.551 86.1582C109.222 86.1582 110.004 86.1324 110.85 86.1047C115.512 85.9515 122.069 85.7362 122.069 89.4352C122.069 89.4424 122.069 89.4497 122.069 89.4569V119.612C143.506 118.383 143.506 94.352 141.458 88.3442C139.82 83.5383 127.851 82.4275 122.071 82.4728L122.069 82.4715C121.917 82.4742 121.758 82.4765 121.593 82.479Z"
                fill="#B3B0A9"
              />
              <circle cx="111.418" cy="98.3104" r="2.73084" fill="#B3B0A9" />
              <path
                d="M152.518 109.643C149.896 110.08 143.597 107.186 140.775 105.684C130.807 101.041 129.169 81.2426 139.956 86.2947C150.743 91.3468 155.795 109.097 152.518 109.643Z"
                fill="#B3B0A9"
              />
            </svg>
            <svg
              className="right_hand"
              width="21"
              height="25"
              viewBox="0 0 21 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.987706 24.1672C3.60932 24.6042 9.90847 21.7095 12.7303 20.2075C22.6979 15.5651 24.3364 -4.23354 13.5496 0.818525C2.76275 5.87059 -2.28931 23.6211 0.987706 24.1672Z"
                fill="#E3E5E1"
              />
              <path
                d="M7.61993 22.5978C9.59951 21.7998 11.5156 20.8687 12.7578 20.2075C21.3871 16.1884 23.7738 0.809939 17.26 0.0307358C17.0875 0.145576 16.9125 0.269481 16.7351 0.402711C9.72777 5.66388 7.16412 17.017 7.61993 22.5978Z"
                fill="#B3B0A9"
              />
            </svg>
            <svg
              className="eye position-absolute"
              width="12.5"
              height="12.5"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="5.36151" cy="5.15917" r="4.91552" fill="#292345" />
            </svg>
            <svg
              className="eye2 position-absolute"
              width="12.5"
              height="12.5"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="5.36151" cy="5.15917" r="4.91552" fill="#17152E" />
            </svg>
            <span className="mouth_new position-absolute">
              <svg
                width="21"
                height="7"
                viewBox="0 0 21 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1V1C5.59394 7.12526 14.7011 7.35863 19.6028 1.47669L20 1"
                  stroke="white"
                  strokeLinecap="round"
                  fillOpacity="0.50"
                />
              </svg>
            </span>
            <span className=" position-absolute hello_word">
              <svg
                width="63"
                height="51"
                viewBox="0 0 63 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="31.3624"
                  cy="19.3982"
                  rx="31.3624"
                  ry="19.3982"
                  fill="#E3E5E1"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M48.5574 35.6236C57.0905 32.157 62.7248 26.1846 62.7248 19.3982C62.7248 8.68487 48.6834 0 31.3625 0C23.6602 0 16.6064 1.71734 11.1475 4.56672C16.0851 2.56079 21.9935 1.39392 28.3424 1.39392C45.6634 1.39392 59.7048 10.0788 59.7048 20.7921C59.7048 26.7415 55.3746 32.0653 48.5574 35.6236Z"
                  fill="#B3B0A9"
                  fillOpacity="0.25"
                />
                <path
                  d="M12.0155 23.2419V15.9692H13.5532V18.9699H16.6746V15.9692H18.2087V23.2419H16.6746V20.2377H13.5532V23.2419H12.0155ZM19.4765 23.2419V15.9692H24.377V17.2369H21.0141V18.9699H24.1249V20.2377H21.0141V21.9742H24.3912V23.2419H19.4765ZM25.5995 23.2419V15.9692H27.1372V21.9742H30.255V23.2419H25.5995ZM31.2733 23.2419V15.9692H32.811V21.9742H35.9289V23.2419H31.2733ZM43.3472 19.6055C43.3472 20.3986 43.1969 21.0734 42.8962 21.6297C42.5979 22.186 42.1907 22.611 41.6746 22.9046C41.1609 23.1957 40.5832 23.3413 39.9417 23.3413C39.2954 23.3413 38.7153 23.1946 38.2016 22.901C37.6879 22.6074 37.2819 22.1825 36.9836 21.6261C36.6853 21.0698 36.5361 20.3963 36.5361 19.6055C36.5361 18.8125 36.6853 18.1377 36.9836 17.5814C37.2819 17.0251 37.6879 16.6013 38.2016 16.3101C38.7153 16.0165 39.2954 15.8698 39.9417 15.8698C40.5832 15.8698 41.1609 16.0165 41.6746 16.3101C42.1907 16.6013 42.5979 17.0251 42.8962 17.5814C43.1969 18.1377 43.3472 18.8125 43.3472 19.6055ZM41.7883 19.6055C41.7883 19.0918 41.7113 18.6586 41.5574 18.3058C41.4059 17.9531 41.1917 17.6856 40.9147 17.5033C40.6377 17.321 40.3133 17.2298 39.9417 17.2298C39.57 17.2298 39.2456 17.321 38.9687 17.5033C38.6917 17.6856 38.4762 17.9531 38.3223 18.3058C38.1708 18.6586 38.0951 19.0918 38.0951 19.6055C38.0951 20.1193 38.1708 20.5525 38.3223 20.9053C38.4762 21.258 38.6917 21.5255 38.9687 21.7078C39.2456 21.8901 39.57 21.9813 39.9417 21.9813C40.3133 21.9813 40.6377 21.8901 40.9147 21.7078C41.1917 21.5255 41.4059 21.258 41.5574 20.9053C41.7113 20.5525 41.7883 20.1193 41.7883 19.6055ZM46.2653 15.9692L46.1269 21.0615H44.8271L44.6851 15.9692H46.2653ZM45.477 23.3342C45.2426 23.3342 45.0414 23.2514 44.8733 23.0857C44.7052 22.9176 44.6224 22.7163 44.6247 22.482C44.6224 22.25 44.7052 22.0511 44.8733 21.8854C45.0414 21.7197 45.2426 21.6368 45.477 21.6368C45.7019 21.6368 45.8996 21.7197 46.07 21.8854C46.2405 22.0511 46.3269 22.25 46.3293 22.482C46.3269 22.6382 46.2855 22.7814 46.205 22.9117C46.1269 23.0395 46.0239 23.1425 45.896 23.2206C45.7682 23.2964 45.6285 23.3342 45.477 23.3342ZM49.5075 15.9692L49.369 21.0615H48.0693L47.9273 15.9692H49.5075ZM48.7192 23.3342C48.4848 23.3342 48.2836 23.2514 48.1155 23.0857C47.9474 22.9176 47.8645 22.7163 47.8669 22.482C47.8645 22.25 47.9474 22.0511 48.1155 21.8854C48.2836 21.7197 48.4848 21.6368 48.7192 21.6368C48.9441 21.6368 49.1418 21.7197 49.3122 21.8854C49.4827 22.0511 49.5691 22.25 49.5715 22.482C49.5691 22.6382 49.5277 22.7814 49.4472 22.9117C49.369 23.0395 49.2661 23.1425 49.1382 23.2206C49.0104 23.2964 48.8707 23.3342 48.7192 23.3342Z"
                  fill="black"
                />
                <ellipse
                  cx="47.6245"
                  cy="42.5134"
                  rx="7.89867"
                  ry="4.87859"
                  fill="#D0D0D0"
                />
                <ellipse
                  cx="55.4069"
                  cy="49.1343"
                  rx="2.90392"
                  ry="1.74235"
                  fill="#B3B0A9"
                />
              </svg>
            </span>
          </div>
          <svg className="position-absolute top-0 start-0">
            <ellipse
              className="shadow_ellipse"
              cx="121.932"
              cy="134.084"
              rx="26.0796"
              ry="4.91552"
              fill="#B3B0A9"
              fillOpacity="0.32"
            />
          </svg>
        </span>
      </div>
    </>
  );
}

export default App;
