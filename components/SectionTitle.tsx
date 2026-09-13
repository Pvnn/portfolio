export function SectionTitle({ children, dark = false, className = '' }: { children: React.ReactNode; dark?: boolean; className?: string }) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <h2 className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight ${dark ? 'text-white' : 'text-black dark:text-white'}`}>
        {children}
      </h2>
    </div>
  )
}
