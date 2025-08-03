import { div } from "framer-motion/client";
import { HtmlHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Key(props:HtmlHTMLAttributes<HTMLDivElement>){
    const{className,children,...otherProps}=props;
    return(
        <div className={twMerge("bg-neutral-300 inline-flex items-center justify-center rounded-2xl text-xl text-neutral-900 size-14",className)}{...otherProps}>
            {children}
        </div>
    );
}