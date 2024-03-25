/* eslint-disable react/prop-types */
import { formatCurrency } from "../../utils/helpers";
import Stat from "./Stat";

import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";

export default function Stats({
  bookings,
  confirmedStays,
  numDays,
  cabinCount,
}) {
  // 1) Number of bookings
  const numBookings = bookings.length;

  // 2) Total sales
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  // 3) Total check ins
  const checkIns = confirmedStays.length;

  // 4) Occupancy rate
  const occupanyRate =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkIns}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupanyRate * 100) + "%"}
      />
    </>
  );
}
