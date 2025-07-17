import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import React from 'react'
import { TooltipContent, TooltipProvider } from '../ui/tooltip'
import Link from 'next/link'
import { Tooltip, TooltipTrigger } from '@radix-ui/react-tooltip'
import { cn } from '@/lib/utils'

interface Props {
    className?:string;
    iconClassName?:string;
    tooltipClassName?:string
}


const socialLink = [
    {
        title: "Youtube",
        href: "https://www.youtube.com",
        icon: <Youtube className="w-5 h-5"></Youtube>
    },
    {
        title: "Facebook",
        href: "https://www.facebook.com",
        icon: <Facebook className="w-5 h-5"></Facebook>
    },
    {
        title: "Twitter",
        href: "https://www.twitter.com",
        icon: <Twitter className="w-5 h-5"></Twitter>
    },
    {
        title: "Instagram",
        href: "https://www.instagram.com",
        icon: <Instagram className="w-5 h-5"></Instagram>
    },
    {
        title: "LinkedIn",
        href: "https://www.linkedin.com",
        icon: <Linkedin className="w-5 h-5"></Linkedin>
    }
]


const SocialMedia = ({className,iconClassName,tooltipClassName}:Props) => {
    return (
        <TooltipProvider>
            <div className={cn('flex items-center space-x-4',className)}>
                {socialLink?.map((link) => (
                    <Tooltip key={link.title}>
                        <TooltipTrigger asChild>
                            <Link 
                            className={cn('p-2 border rounded-full hover:text-white hover:border-shop_light_green',iconClassName)}
                            href={link.href}
                             >{link.icon}</Link>
                        </TooltipTrigger>
                        <TooltipContent className={cn('bg-white text-dark font-semibold',tooltipClassName)}>
                            {link?.title}
                        </TooltipContent>
                    </Tooltip>
                ))}
            </div>
        </TooltipProvider>
    )
}

export default SocialMedia