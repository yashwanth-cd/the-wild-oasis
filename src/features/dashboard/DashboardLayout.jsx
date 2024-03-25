import styled from "styled-components";

import useRecentBookings from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import useRecentStays from "./useRecentStays";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

export default function DashboardLayout() {
  const { isLoading: isBookingsLoading, bookings } = useRecentBookings();
  const { isLoading: isStaysLoading, stays, confirmedStays } = useRecentStays();

  if (isBookingsLoading || isStaysLoading) return <Spinner />;
  console.log(bookings);

  return (
    <StyledDashboardLayout>
      <div>statistics</div>
      <div>todays activities</div>
      <div>chart stay duration</div>
      <div>chart of sales</div>
    </StyledDashboardLayout>
  );
}
