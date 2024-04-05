import { MoveRight } from "lucide-react";

const Button = ({ title = "Get Started" }) => {
  return (
    <div className="w-40 rounded-full px-3 py-2 bg-white text-black  flex items-center">
      <span className="font-medium text-sm ml-2">{title}</span>
      <MoveRight className="w-4 h-4 ml-2" />
    </div>
  );
};
export default Button;
