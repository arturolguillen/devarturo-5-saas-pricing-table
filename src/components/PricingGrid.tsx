import plans from "@/plans";
import Plan from "./Plan";

export default function PricingGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 *:md:last:col-span-2 lg:grid-cols-3 *:lg:last:col-span-1">
            {plans.map(plan => <Plan key={plan.id} plan={plan} />)}
        </div>
    );
}