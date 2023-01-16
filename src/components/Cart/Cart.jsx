import { useSelector } from '../../customStore/hooks/useSelector';

export const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      {Object.entries(cart).map(([name, count]) => (
        <div>
          {name} : {count}
        </div>
      ))}
    </div>
  );
};
