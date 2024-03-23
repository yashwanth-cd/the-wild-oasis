import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isLoading: isLoggingIn } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),

    onSuccess: (user) => {
      toast.success("Login was successfull");
      navigate("/dashboard");
    },

    onError: () => {
      toast.error("Provided email or password are incorrect");
    },
  });

  return { login, isLoggingIn };
}
