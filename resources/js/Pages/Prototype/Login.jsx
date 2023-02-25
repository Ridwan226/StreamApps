import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link } from "@inertiajs/react";

export default function Login() {
    return (
        <>
            <Head title="SignIn" />
            <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
                <div className="fixed top-[-50px] hidden lg:block">
                    <img
                        src="/assets/images/signup-image.png"
                        className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]"
                        alt=""
                    />
                </div>
                <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                    <div>
                        <img src="/assets/images/moonton-white.svg" alt="" />
                        <div className="my-[70px]">
                            <div className="font-semibold text-[26px] mb-3">
                                Welcome Back
                            </div>
                            <p className="text-base text-[#767676] leading-7">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>
                        <form className="w-[370px]">
                            <div className="flex flex-col gap-6">
                                <div>
                                    <InputLabel
                                        forInput="email"
                                        value={"Email Address"}
                                    />
                                    {/* <input
                                    type="email"
                                    name="email"
                                    className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                                    placeholder="Email Address"
                                /> */}
                                    <TextInput
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        varian="primary"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        forInput="password"
                                        value={"Password"}
                                    />
                                    <TextInput
                                        type="password"
                                        name="password"
                                        varian="primary"
                                        placeholder="Password"
                                    />
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                {/* <a
                                href="/"
                                className="rounded-2xl bg-alerange py-[13px] text-center"
                            >
                                <span className="text-base font-semibold">
                                    Start Watching
                                </span>
                            </a> */}
                                <Link href={route("prototype.dashboard")}>
                                    <PrimaryButton
                                        type="button"
                                        varian="primary"
                                    >
                                        <span className="text-base font-semibold">
                                            Start Watching
                                        </span>
                                    </PrimaryButton>
                                </Link>
                                <Link href={route("prototype.register")}>
                                    <PrimaryButton
                                        type="button"
                                        varian="light-outline"
                                    >
                                        <span className="text-base text-white">
                                            Create New Account
                                        </span>
                                    </PrimaryButton>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
