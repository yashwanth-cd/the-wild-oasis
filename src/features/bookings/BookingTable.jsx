import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";
import Spinner from "../../ui/Spinner";

import useBookings from "./useBookings";

function BookingTable() {
  const { bookings, isLoading } = useBookings();
  if (isLoading) return <Spinner />;
  if (!bookings?.length) return <Empty resourceName="Bookings" />;

  /* // CLIENT-SIDE FILTERING AND SORTING
  const [searchParams] = useSearchParams();

  // Implementing the FILTERING and sorting of bookings
  const filterValue = searchParams.get("status") || "all";
  let filteredBookings;

  if (filterValue === "all") filteredBookings = bookings;

  if (filterValue === "checked-out") {
    filteredBookings = bookings.filter(
      (booking) => booking.status === "checked-out"
    );
  }

  if (filterValue === "checked-in") {
    filteredBookings = bookings.filter(
      (booking) => booking.status === "checked-in"
    );
  }

  if (filterValue === "unconfirmed") {
    filteredBookings = bookings.filter(
      (booking) => booking.status === "unconfirmed"
    );
  }

  // Implementing the SORTING of bookings
  const sortBy = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedBookings = filteredBookings.sort(
    (a, b) => a[field] - b[field] * modifier
  );

  */

  return (
    <Menus>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={bookings}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        />
      </Table>
    </Menus>
  );
}

export default BookingTable;
