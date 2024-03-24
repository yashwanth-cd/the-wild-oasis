import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { redirect } from "react-router-dom";

export default function useSignup() {
  const { mutate: signup, isLoading: isSigningup } = useMutation({
    mutationFn: signupApi,

    onSuccess: () => {
      toast.success(
        "Account Successfully created, Please verify the account from user's email address"
      );
      redirect("/login");
    },

    onError: () => {
      toast.error("Sign up failed, try again!");
    },
  });

  return { signup, isSigningup };
}
