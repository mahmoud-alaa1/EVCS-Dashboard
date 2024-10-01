import LoginForm from "../featuers/authentication/LoginForm";
export default function Login() {
  return (
    <div className="h-screen flex flex-wrap">
      {/* Left side background image */}
      <div className="bg-login-hero bg-no-repeat bg-cover bg-center  flex-1"></div>

      {/* Right side login form container */}
      <div className="flex-1 bg-login-gradient gradient px-5">
        <div className="container mx-auto flex items-center justify-center h-full">
          <div className="bg-[#FFFFFFDE] p-9 rounded-3xl gap-2.5 flex flex-col w-full max-w-md">
            <p className="text-green-gradient text-[26px] ">Dashboard Login</p>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}
