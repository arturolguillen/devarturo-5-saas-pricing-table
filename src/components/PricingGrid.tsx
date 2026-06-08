import plans from "@/plans";
import Plan from "./Plan";

export default function PricingGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {plans.map(plan => <Plan key={plan.id} plan={plan} />)}
        </div>
    );
}