import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRecoilValue } from "recoil";
import { userEmail } from "@/store/atom";
import { getOrdersByEmail } from "@/lib/orders";
import { Badge } from "@/components/ui/badge";

export default function RecentOrders() {
  const email = useRecoilValue(userEmail);
  const orders = getOrdersByEmail(email).slice(0, 5);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'bg-green-500';
      case 'in-transit': return 'bg-blue-500';
      case 'processing': return 'bg-yellow-500';
      case 'shipped': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-8">
      {orders.map((order) => (
        <div key={order.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarFallback>
              {order.id.split('-')[2]}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1 flex-1">
            <p className="text-sm font-medium leading-none">
              Order #{order.id}
            </p>
            <div className="flex items-center gap-2">
              <Badge className={getStatusColor(order.status)}>
                {order.status}
              </Badge>
              <span className="text-xs text-muted-foreground">
                {new Date(order.orderDate).toLocaleDateString()}
              </span>
            </div>
          </div>
          <div className="ml-auto font-medium">
            ₹{(order.totalAmount / 100000).toFixed(1)}L
          </div>
        </div>
      ))}
    </div>
  );
}
