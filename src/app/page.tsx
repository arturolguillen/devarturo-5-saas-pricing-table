import Footer from "@/components/Footer";
import FooterBrand from "@/components/FooterBrand";
import FooterCopy from "@/components/FooterCopy";
import FooterMenu from "@/components/FooterMenu";
import MainWrapper from "@/components/MainWrapper";
import Topbar from "@/components/Topbar";
import TopbarCTA from "@/components/TopbarCTA";
import TopbarLogo from "@/components/TopbarLogo";
import TopbarMenu from "@/components/TopbarMenu";

export default function Home() {
    return (
        <>
            <Topbar>
                <TopbarLogo />
                <TopbarMenu />
                <TopbarCTA />
            </Topbar>
            <MainWrapper>
                <></>
            </MainWrapper>
            <Footer>
                <FooterBrand />
                <FooterMenu />
                <FooterCopy />
            </Footer>
        </>
    );
}
