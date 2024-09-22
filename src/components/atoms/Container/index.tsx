interface ContainerProps {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => {
  return (
    <>
      <div className="flex justify-center mx-auto flex-col max-w-7xl w-full">
        {children}
      </div>
    </>
  )
}

export default Container
