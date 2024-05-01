"use client";
const RootError = ({ error, reset }) => {
  console.log(error);
  return (
    <html>
      <body>
        <div className="flex flex-col gap-2 items-center justify-center">
          <h1 className="text-2xl">Something went wrong</h1>
          <p>Please reload this page or click on reset.</p>
          <button
            onClick={() => reset()}
            className="bg-red-600 px-2 py-1 rounded-2xl text-white"
          >
            Reset
          </button>
        </div>
      </body>
    </html>
  );
};

export default RootError;
