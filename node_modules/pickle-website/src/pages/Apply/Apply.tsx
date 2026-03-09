import Navbar from "../../shared/Nav";

export default function Apply() {
  return (
    <>
      <div className="grid h-screen grid-cols-4">
        <div>
          <Navbar />
        </div>
        <div className="col-span-2 col-start-2 mt-10">
          <div className="self-center">
            <p className="text-4xl text-center">Apply to join here</p>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSe_HMUtPBOoqJ7qmG2IWPoy9Udy-SqMAicKJMqjIqD1AJQpEA/viewform?embedded=true"
              className="h-500 w-290"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </>
  );
}
