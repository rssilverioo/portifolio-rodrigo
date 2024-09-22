interface ExperienceProps {
  title: string
  startDate: string
  finalDate: string
  description: string
}

const ExperienceCard = ({
  title,
  startDate,
  finalDate,
  description,
}: ExperienceProps) => {
  return (
    <>
      <div className="w-full justify-center gap-2 flex flex-col">
        <div className="capitalize flex justify-between font-light text-lg font-manrope ">
          <p>{title}</p>
          <p className="capitalize">
            {startDate} - {finalDate}
          </p>
        </div>
        <div>
          <p className=" font-light text-base text-zinc-400 font-manrope">
            {description}
          </p>
        </div>
      </div>
    </>
  )
}

export default ExperienceCard
