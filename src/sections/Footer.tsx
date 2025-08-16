import logoImage from "@/assets/images/editologo.png"
import Image from "next/image";

const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
    return (
        <section className="py-16">
            <div className="container">
                <div className="flex flex-col md:flex-row items-center md:justify-between gap-6">
                    <Image src={logoImage} alt="Edito logo">

                    </Image>
                    <div>
                        <nav className="gap-6 flex">
                            {footerLinks.map((link)=>
                            (
                                <a href={link.href} className="text-white/50 text-sm">{link.label}</a>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
}
