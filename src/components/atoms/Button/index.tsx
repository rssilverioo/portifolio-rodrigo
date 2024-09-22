import { ButtonHTMLAttributes } from 'react'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  icon?: React.ReactNode
}
const Button = ({ children, icon, ...props }: IButtonProps) => {
  return (
    <>
      <button
        {...props}
        className="flex items-center font-manrope uppercase font-medium px-6 py-3 text-base rounded-full bg-[#D3E97A] hover:opacity-75 text-zinc-900 transition-all ease-linear "
      >
        {children}
        {icon && (
          <>
            <span className="bg-zinc-900 p-2 rounded-full ml-4 flex items-center justify-center transition-transform duration-300 transform hover:scale-105	hover:-rotate-45		">
              {icon}
            </span>
          </>
        )}
      </button>
    </>
  )
}

export default Button
