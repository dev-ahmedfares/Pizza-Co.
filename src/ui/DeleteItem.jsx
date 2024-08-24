import Button from "./Button";

function DeleteItem({ children, type, onClick }) {
  return (
    <Button type={type} onClick={onClick}>
      {children}
    </Button>
  );
}

export default DeleteItem;
