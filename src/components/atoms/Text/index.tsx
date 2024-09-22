interface ITextProps {
  title: string
  subtitle?: string
}

export const Text = ({ title, subtitle }: ITextProps) => {
  return (
    <>
      <h1 className="text-8xl">{title}</h1>
      <span className="text-lg font-manrope mt-2 text-zinc-400">
        {subtitle}
      </span>
    </>
  )
}

export default Text
