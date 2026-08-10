import ResponsiveHeroBanner from "./responsive-hero-banner";

const HeroDemo = () => {
  return (
    <ResponsiveHeroBanner
      badgeLabel="New"
      badgeText="Open Technology Ecosystem for Modern Builders"
      title="Build Beyond"
      titleLine2="The Tool"
      description="An open-source ecosystem of identity systems, cryptographic primitives, database wrappers, AI developer tools, and infrastructure — built to be connected, never repeated."
      primaryButtonText="Explore the Ecosystem"
      primaryButtonHref="#ecosystem"
      secondaryButtonText="View on GitHub"
      secondaryButtonHref="https://github.com/zenuxs-dev"
      ctaButtonText="Get Started"
      ctaButtonHref="https://zenuxs.in"
      navLinks={[
        { label: "Ecosystem", href: "#ecosystem" },
        { label: "Products", href: "/products" },
        { label: "Open Source", href: "/opensource" },
        { label: "Community", href: "/community" },
        { label: "About", href: "/about" }
      ]}
      partnersTitle="Built for developers, backed by the ecosystem"
      partners={[
        { logoUrl: "", href: "https://github.com/zenuxs-dev" },
        { logoUrl: "", href: "https://zenuxs.in" },
        { logoUrl: "", href: "#ecosystem" },
        { logoUrl: "", href: "/products" },
        { logoUrl: "", href: "/opensource" }
      ]}
    />
  );
};

export default HeroDemo;
