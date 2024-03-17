import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";

export default function useBookings() {
  const {
    data: bookings,
    isLoading,
    error,
  } = useQuery({
    queryFn: getBookings,
    queryKey: ["bookings"],
  });

  return { bookings, isLoading, error };
}
