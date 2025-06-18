import { Button } from "@school-wits/ui";
import { Loader2Icon } from "lucide-react";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { usePost } from "../../api/api-calls";
import logo from "../../assets/logo-black.png";
import { Input } from "../../components/Input/Input";
import { useAuth } from "../../contexts/AuthContext";

type Inputs = {
  email: string;
  password: string;
};

export default function SignIn() {
  const { setUser, setToken } = useAuth();
  const navigate = useNavigate();
  const { mutate, data, fetchError, isError, isPending, isSuccess } =
    usePost("auth/login");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = function (data) {
    mutate(data);
  };

  useEffect(() => {
    if (isError) {
      toast.error("Something went wrong. Please try again.");
    }
  }, [fetchError, isError]);

  useEffect(() => {
    if (isSuccess) {
      const loggedUser = data.user;
      const loggedToken = data.token;

      if (setUser) setUser(loggedUser);
      if (setToken) setToken(loggedToken);

      if (
        loggedUser.roles
          .map((role: { id: number; name: string }) => role.name.toUpperCase())
          .includes("ROLE_ADMIN")
      ) {
        localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
        localStorage.setItem("loggedToken", JSON.stringify(loggedToken));
        toast.success("Successfully signed in.");
      } else {
        toast.warning("You do not have admin privileges.");
      }

      navigate("/");
    }
  }, [data, isSuccess, navigate, setToken, setUser]);

  return (
    <div className="flex items-center justify-center h-screen bg-neutral-300">
      <div className="rounded-xl bg-neutral-200 shadow-lg">
        {/* ================= Logo ================ */}
        <div className="w-[250px] mx-auto mt-8">
          <img src={logo} alt="Logo" />
        </div>
        {/* ================ Login form ============== */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[320px] md:w-[400px] p-10"
        >
          <div className="mb-5">
            <Input
              {...register("email", { required: "Email required." })}
              name="email"
              type="email"
              label="Email"
              placeholder="Enter your email"
            />
            <p className="h-3 mt-1 text-danger">{errors.email?.message}</p>
          </div>

          <div className="mb-6">
            <Input
              {...register("password", { required: "Password rquired." })}
              name="password"
              type="password"
              label="Password"
              placeholder="Enter your password"
              autoComplete="current-password"
            />
            <p className="h-3 mt-1 text-danger">{errors.password?.message}</p>
          </div>

          <div className="mb-5">
            <Button
              variant="success"
              className="w-full h-[45px] text-base"
              type="submit"
              disabled={isPending}
            >
              {isPending ? (
                <Loader2Icon className="animate-spin scale-150" />
              ) : (
                "Sign In"
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
