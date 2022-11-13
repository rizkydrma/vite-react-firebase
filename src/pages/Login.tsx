import { Button, Input } from "@/components";

const Login = () => {
  return (
    <div className="grid h-screen place-items-center bg-gray-900">
      <div className="flex w-96 flex-col space-y-4 rounded-lg bg-white p-5 shadow-md shadow-gray-200">
        <h1 className="text-center text-xl font-semibold text-indigo-600 ">
          Login
        </h1>

        <form className="flex flex-col space-y-4">
          <Input
            type="text"
            name="email"
            id="email"
            label="email"
            placeholder="Masukan email"
          />
          <Input
            type="password"
            name="password"
            id="password"
            label="password"
            placeholder="Masukan password"
          />
          <Button size="normal" variant="primary" type="button">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
