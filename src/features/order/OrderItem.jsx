import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;
  
  return (
    <li className="py-3">
      <div className="flex items-center justify-between"> 
        <p>
          <span className="font-semibold text-sm">{quantity}&times;</span> {name}
          <p>{isLoadingIngredients ? 'Loading...' : ingredients.join(', ')}</p>
        </p>
        <p className="font-semibold text-sm">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
