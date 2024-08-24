import LinkButton from "./LinkButton";

function EmptyPage() {
  return (
    <div>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <p className="font-semibold"> Your cart is still empty. Start adding some pizzas :)</p>{" "}
    </div>
  );
}

export default EmptyPage;
