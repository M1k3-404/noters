export default function layout({children}: {children: React.ReactNode}) {
    return (
        <div className="flex flex-col bg-customBlackBlue min-h-full w-full">
            {children}
        </div>
    )
}