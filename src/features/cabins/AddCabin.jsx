import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";
import CabinTable from "./CabinTable";

function AddCabin() {
  return (
    <>
      <div>
        <Modal>
          <Modal.Open opens="cabin-form">
            <Button>Add new cabin</Button>
          </Modal.Open>
          <Modal.Window name="cabin-form">
            <CreateCabinForm />
          </Modal.Window>
        </Modal>
      </div>
      <div>
        <Modal>
          <Modal.Open opens="table">
            <Button>Show tables</Button>
          </Modal.Open>
          <Modal.Window name="table">
            <CabinTable />
          </Modal.Window>
        </Modal>
      </div>
    </>
  );
}

export default AddCabin;
