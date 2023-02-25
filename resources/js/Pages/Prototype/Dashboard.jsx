import Browse from "@/Components/Browse";
import FeatureMovie from "@/Components/FeatureMovie";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/react";
import Flickity from "react-flickity-component";
export default function Dashboard() {
    const flicityOpt = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };

    return (
        <Authenticated>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
                <title>Dashboard</title>
            </Head>

            <div>
                <div className="font-semibold text-[22px] text-black mb-4">
                    Featured Movies
                </div>
                <Flickity
                    className="gap-[30px] __scroll-selector"
                    options={flicityOpt}
                >
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <FeatureMovie
                            key={i}
                            slug="Despicable-Me-2"
                            name="Despicable Me 2"
                            rating="4.2/5.0"
                            category="Action • Adventure"
                            thumnail={"/assets/images/featured-3.png"}
                        />
                    ))}
                </Flickity>

                <div className="mt-[50px]">
                    <div className="font-semibold text-[22px] text-black mb-4 ">
                        Browse
                    </div>
                    <Flickity
                        className="gap-[30px] __scroll-selector"
                        options={flicityOpt}
                    >
                        {[1, 2, 3, 4].map((n) => (
                            <Browse
                                key={n}
                                name="Meong Golden"
                                thumnail="/assets/images/browse-1.png"
                                category="Horror • Love"
                                slug="horror-love"
                            />
                        ))}
                    </Flickity>
                </div>
            </div>
        </Authenticated>
    );
}
