import Image from "next/image"

const Card = ({
    opt: {
        flags,
        name,
        population,
        region,
        capital,
    },
}) => {
    return (
        <div className="flex flex-col w-auto h-[245px] bg-white">
            <div className="relative w-auto h-[245px]">
                <Image src={flags.png}
                className="rounded-t"
                    alt={name}
                    fill
                    quality={50} />
            </div>
            <div>
                <h5>{name}</h5>
                <p>Population: {population}</p>
                <p>Region: {region}</p>
                <p>Capital: {capital}</p>
            </div>
        </div>
    )
}

export default Card