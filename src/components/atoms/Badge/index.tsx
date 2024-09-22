interface BadgeProps {
  title: string
}

const Badge = ({ title }: BadgeProps) => {
  return (
    <>
      <button className="flex-1 uppercase font-manrope px-5 py-3 border border-zinc-100 rounded-full transition-all ease-in hover:bg-[#D3E97A] hover:border-transparent hover:text-zinc-900">
        {title}
      </button>
    </>
  )
}

export default Badge
