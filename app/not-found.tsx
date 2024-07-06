import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col  justify-center">
      <div className="self-center">
        <h1 className=" text-3xl sm:text-6xl">{"404 | Page Not Found."}</h1>
      </div>
    </div>
  );
}
