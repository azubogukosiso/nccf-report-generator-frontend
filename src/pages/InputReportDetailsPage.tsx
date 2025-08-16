import InputReportDetailsComponent from "../components/InputReportDetailsComponent";
import NavbarComponent from "../components/NavbarComponent";

const InputReportDetailsPage = () => {
  return (
    <>
      <NavbarComponent />
      <div className="flex items-center mb-10">
        <label
          htmlFor="my-drawer"
          className="flex items-center justify-center p-2 mr-5 text-white transition-colors bg-blue-800 rounded-lg cursor-pointer drawer-button hover:bg-blue-900"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
          >
            <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" />
          </svg>
        </label>
        <h1>Input your Report's Details</h1>
      </div>
      <div className="flex items-center justify-center mb-20">
        <InputReportDetailsComponent />
      </div>
    </>
  );
};

export default InputReportDetailsPage;
