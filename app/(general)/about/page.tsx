import type { Metadata } from "next";

//adicionar metatags para la parte de SEO
export const metadata: Metadata = {
 title: 'SEO Title',
 description: 'SEO Description',
 keywords: ['About Page', 'Jose', 'información', '...'],
};

// el sufijo Page es opcional
export default function AboutPage() {
    return (
        <span className="text-7xl">AboutPage</span>
    )
}