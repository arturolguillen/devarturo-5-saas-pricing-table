import Topbar from "@/components/Topbar";
import TopbarCTA from "@/components/TopbarCTA";
import TopbarLogo from "@/components/TopbarLogo";
import TopbarMenu from "@/components/TopbarMenu";

export default function Home() {
    return (
        <Topbar>
            <TopbarLogo />
            <TopbarMenu />
            <TopbarCTA />
        </Topbar>
    );
}
