import Footer from "@/components/Footer";
import FooterBrand from "@/components/FooterBrand";
import FooterCopy from "@/components/FooterCopy";
import FooterMenu from "@/components/FooterMenu";
import Hero from "@/components/Hero";
import HeroBadge from "@/components/HeroBadge";
import HeroDescription from "@/components/HeroDescription";
import HeroTitle from "@/components/HeroTitle";
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
                <Hero>
                    <HeroBadge />
                    <HeroTitle />
                    <HeroDescription />
                </Hero>
            </MainWrapper>
            <Footer>
                <FooterBrand />
                <FooterMenu />
                <FooterCopy />
            </Footer>
        </>
    );
}
