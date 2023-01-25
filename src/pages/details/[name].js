import { fetchApi } from "@/api/fetchApi";
import Image from "next/image";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";
import {useRouter} from "next/router";

const CountryDetails = ({
  CountryDetail: {
    flags,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  },
}) => {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-LightBackground  px-14 pt-14">
      <button className="flex px-9 py-2 shadow-header rounded mb-14"  onClick={() => router.back()}>
        <AiOutlineArrowLeft className="place-self-center mr-3 text-lg" />
        Back
      </button>
      <div className="grid grid-cols-2">
        <div className="relative w-4/6 h-fit aspect-[4/3]">
          <Image
            src={flags.png}
            className="rounded-t"
            alt={name}
            fill
            sizes="33vw"
            quality={50}
          />
        </div>
        <div className="mt-7">
          <div className="flex">
            <div>
              <h3 className="font-extrabold text-2xl mb-5">{name}</h3>
              <p>
                <span className="font-semibold text-sm">Native Name:</span>
                {" " + nativeName}
              </p>
              <p>
                <span className="font-semibold text-sm">Population:</span>
                {" " + population}
              </p>
              <p>
                <span className="font-semibold text-sm">Region:</span>
                {" " + region}
              </p>
              <p>
                <span className="font-semibold text-sm">Sub region:</span>
                {" " + subregion}
              </p>
              <p>
                <span className="font-semibold text-sm">Capital:</span>
                {" " + capital}
              </p>
            </div>
            <div className="mt-14">
              <p>
                <span className="font-semibold text-sm">Top Level Domain:</span>
                {" " + topLevelDomain}
              </p>
              <p>
                <span className="font-semibold text-sm">Currencies:</span>
                <span> {currencies[0].name}</span>
              </p>
              <p>
                <span className="font-semibold text-sm">Languages:</span>
                <span>
                  {" "}
                  {languages.map((language) => (
                    <span>{language.name}</span>
                  ))}
                </span>
              </p>
            </div>
          </div>

          <div className="flex mt-16">
            <p className="place-self-center">Border Countries:</p>
            <div className="flex flex-wrap ">
              {borders?.map((border) => (
                <Link href={`/details/${border}`}>
                  <p
                    className="font-light text-sp-orange2 text-sm p-1 px-3 shadow-header m-1 rounded"
                    key={border}
                  >
                    {border}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;

export async function getServerSideProps({ params: { name } }) {
  const data = await fetchApi(`${process.env.ENV_BASEURL}/name/${name}`);

  return {
    props: {
      CountryDetail: data[0],
    },
  };
}
