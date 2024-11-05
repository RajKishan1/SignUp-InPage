import { LoaderCircle } from "lucide-react";

const TextArea = () => {
  return (
    <div className="w-[85%] h-[30%]  mt-3 flex flex-col justify-around text-white ">
      <LoaderCircle />
      <h1 className="text-2xl font-semibold">
        Join over 25 million
        <br /> learners from around the Globe.
      </h1>
      <h3 className="text-xl text-gray-400">
        Master the languages of the web: HTML, CSS, and JavaScript. This path
        will prepare you to build basic websites and then build interactive web
        apps.
      </h3>
    </div>
  );
};
export default TextArea;
