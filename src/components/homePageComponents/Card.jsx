import Image from "next/image"
import Link from "next/link"

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
        <Link href={`/details/${name}`}>
            <div className="flex flex-col w-auto h-auto bg-LightBackground dark:bg-DarkElements shadow-header">
                <div className="relative w-auto h-auto aspect-[5/3]">
                    <Image src={flags.png}
                        className="rounded-t"
                        alt={name}
                        fill
                        sizes="33vw"
                        quality={50} 
                        loading="lazy"
                        />
                </div>
                <div className="px-6 py-4">
                    <h5 className="mb-3 font-extrabold">{name}</h5>
                    <p>
                        <span className="font-semibold text-sm">
                            Population:
                        </span>
                        {' ' + Intl.NumberFormat().format(population)}
                    </p>
                    <p>
                        <span className="font-semibold text-sm">
                            Region:
                        </span>
                        {' ' + region}
                    </p>
                    <p>
                        <span className="font-semibold text-sm">
                            Capital:
                        </span>
                        {' ' + capital}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default Card