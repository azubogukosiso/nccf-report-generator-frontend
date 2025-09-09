const InputReportDetailsComponent = () => {
  return (
    <form className="w-full mb-20">
      <div className="flex items-center justify-between mb-20">
        <div>
          <label htmlFor="month" className="text-xs">
            Month:
          </label>
          <select
            id="month"
            required
            name="month"
            className="focus:!outline-none rounded-t-md bg-white p-2 w-full border-b cursor-pointer"
          >
            <option value="january">January</option>
            <option value="february">February</option>
            <option value="march">March</option>
            <option value="april">April</option>
            <option value="may">May</option>
            <option value="june">June</option>
            <option value="july">July</option>
            <option value="august">August</option>
            <option value="september">September</option>
            <option value="october">October</option>
            <option value="november">November</option>
            <option value="december">December</option>
          </select>
        </div>

        <div>
          <label htmlFor="year" className="text-xs">
            Year:
          </label>
          <select
            id="year"
            required
            name="year"
            className="focus:!outline-none rounded-t-md bg-white p-2 w-full border-b cursor-pointer"
          >
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col items-center w-full mb-5">
        <label htmlFor="password" className="w-1/2 text-xs">
          Password:
        </label>
        <input
          type="password"
          placeholder="Enter your password..."
          id="password"
          name="password"
          required
          className="focus:!outline-none rounded-t-md bg-white p-2 w-1/2 border-b"
        />
      </div>

      <div className="flex flex-col items-center w-full mb-5">
        <label htmlFor="password" className="w-1/2 text-xs">
          Password:
        </label>
        <input
          type="password"
          placeholder="Enter your password..."
          id="password"
          name="password"
          required
          className="focus:!outline-none rounded-t-md bg-white p-2 w-1/2 border-b"
        />
      </div>

      <div className="flex flex-col items-center w-full mb-5">
        <label htmlFor="password" className="w-1/2 text-xs">
          Password:
        </label>
        <input
          type="password"
          placeholder="Enter your password..."
          id="password"
          name="password"
          required
          className="focus:!outline-none rounded-t-md bg-white p-2 w-1/2 border-b"
        />
      </div>

      <div className="flex flex-col items-center w-full mb-5">
        <label htmlFor="password" className="w-1/2 text-xs">
          Password:
        </label>
        <input
          type="password"
          placeholder="Enter your password..."
          id="password"
          name="password"
          required
          className="focus:!outline-none rounded-t-md bg-white p-2 w-1/2 border-b"
        />
      </div>

      <div className="flex flex-col items-center w-full mb-5">
        <label htmlFor="password" className="w-1/2 text-xs">
          Password:
        </label>
        <input
          type="password"
          placeholder="Enter your password..."
          id="password"
          name="password"
          required
          className="focus:!outline-none rounded-t-md bg-white p-2 w-1/2 border-b"
        />
      </div>

      <div className="flex items-center mt-10 justify-evenly">
        <button className="px-3 py-2 text-white transition-colors bg-blue-800 rounded-lg cursor-pointer hover:bg-blue-900">
          Add new record
        </button>
        <button className="px-3 py-2 text-white transition-colors bg-blue-800 rounded-lg cursor-pointer hover:bg-blue-900">
          Save records
        </button>
        <button className="px-3 py-2 text-white transition-colors bg-blue-800 rounded-lg cursor-pointer hover:bg-blue-900">
          Remove record
        </button>
      </div>
    </form>
  );
};

export default InputReportDetailsComponent;
