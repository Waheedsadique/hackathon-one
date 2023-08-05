import { PortableTextBlock } from "sanity";

export type Hero={
    _id: string;
    createdAt: Date;
    heroText: string;
    heroImages:string[];
    details: PortableTextBlock[];
}