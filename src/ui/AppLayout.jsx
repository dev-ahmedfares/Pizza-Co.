import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartOverview from "../features/order/CartOverview";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid  h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      
      <Header />
      <div className="overflow-auto">
        <main className="mx-auto max-w-3xl px-1">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
