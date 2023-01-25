import { fetchApi } from "@/api/fetchApi";
import Image from "next/image";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";

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
  const router = useRouter();
  return (
    <div className="min-h-screen bg-LightBackground  px-5 lg:px-14 pt-14">
      <button
        className="flex px-5 lg:px-9 py-2 shadow-header rounded mb-14"
        onClick={() => router.back()}
      >
        <AiOutlineArrowLeft className="place-self-center mr-3 text-lg" />
        Back
      </button>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative w-full lg:w-4/6 h-fit aspect-[4/3]">
          <Image
            src={flags?.png}
            className="rounded-t"
            alt={name}
            fill
            sizes="33vw"
            quality={50}
            loading="lazy"
          />
        </div>
        <div className="mt-7">
          <div className="flex flex-col lg:flex-row">
            <div>
              <h3 className="font-extrabold text-xl lg:text-2xl mb-5">{name}</h3>
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
            <div className="mt-12 lg:mt-14 lg:ml-8">
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
                    <span key={language.name}>{language.name}</span>
                  ))}
                </span>
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row mt-16 mb-10">
            <p className="lg:place-self-center">Border Countries:</p>
            <div className="flex flex-wrap ">
            
              {
              borders?.length > 0 ?
              borders?.map((border) => (
                <Link href={`/details/${border}`} key={border}>
                  <p className="font-light text-sm p-1 px-3 shadow-header m-1 mt-2 lg:mt-0 rounded">
                    {border}
                  </p>
                </Link>
                )
                )
                : 
                <p className="font-light text-sm p-1 px-6 lg:px-3 shadow-header lg:m-1 rounded ml-4  bg-red-400">no border</p>
              }
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
