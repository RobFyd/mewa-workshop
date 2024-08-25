import Link from 'next/link';

type Props = {
    children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
    return (
        <div className="flex">
            <div className="px-4 text-sm h-screen bg-slate-900 p-4 text-white">
                <Link href="/">Back to home</Link>
            </div>
            <div className="px-4" >{children}</div>
        </div>
    );
}