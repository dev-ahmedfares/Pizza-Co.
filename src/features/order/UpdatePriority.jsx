import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

function UpdatePriority() {
    const fetcher = useFetcher()

  return (
    <div className="mt-5 text-end">
      <fetcher.Form method={"PATCH"}>
        <Button type={"primary"} >Make Priority</Button>
      </fetcher.Form>
    </div>
  );
}

export default UpdatePriority;

export async function action({ request, params }) {
    // not need request parameter here
  const updatePriority = { priority: true,};
  await updateOrder(params.orderId, updatePriority);
  
  return null;
}
