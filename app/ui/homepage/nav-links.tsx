'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import NoteIcon from '@mui/icons-material/Note';
import LabelIcon from '@mui/icons-material/Label';
import clsx from 'clsx';

const links = [
    {
        href: "/",
        icon: NoteIcon,
        text: "Notes",
    },

    {
        href: "/labels",
        icon: LabelIcon,
        text: "Labels"
    }
];

export default function NavLinks() {
    const pathname = usePathname();

    return (
        <>
            {links.map((link) => {
                return (
                    <Link
                        key={link.text}
                        href={link.href}
                        className={clsx(
                            "flex h-[48px] w-[360px] grow items-center justify-center gap-2 bg-transparent py-3 text-sm font-medium nav-link md:flex-none md:justify-start md:px-6 md:py-8 md:mt-4",
                            {
                                'bg-sky-100 text-blue-600': pathname === link.href,
                            },
                        )}
                    >
                        <link.icon sx={{ fontSize: 30 }} className="mx-1" />
                        <p className="hidden md:block text-xl ml-3">{link.text}</p>
                    </Link>
                );
            })}
        </>
    )
}