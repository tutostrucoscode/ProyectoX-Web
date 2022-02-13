import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button/Button";
import Modal from "@mui/material/Modal/Modal";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks/hooks";
import { setModal } from "../../../../redux/slice/modal";

interface Props {}

const Video = (props: Props) => {
  const modal = useAppSelector((state) => state.modal.open);
  const dispatch = useAppDispatch();

  const handleOpen = () => dispatch(setModal(true));
  const handleClose = () => dispatch(setModal(false));

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <div>
      <Modal
        open={modal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            ffff
        </Box>
      </Modal>
    </div>
  );
};

export default Video;
