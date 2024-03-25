import styled from "styled-components";

import useRecentBookings from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import useRecentStays from "./useRecentStays";
import Stats from "./Stats";
import { useCabins } from "../cabins/useCabins";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

export default function DashboardLayout() {
  const { isLoading: isBookingsLoading, bookings } = useRecentBookings();
  const {
    isLoading: isStaysLoading,
    stays,
    confirmedStays,
    numDays,
  } = useRecentStays();
  const { cabins, isLoading: iscabinsLoading } = useCabins();

  if (isBookingsLoading || isStaysLoading || iscabinsLoading)
    return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />
      <div>statistics</div>
      <div>todays activities</div>
      <div>chart stay duration</div>
      <div>chart of sales</div>
    </StyledDashboardLayout>
  );
}
