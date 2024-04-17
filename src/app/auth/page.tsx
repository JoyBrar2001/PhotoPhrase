"use client"

import Input from "@/components/Input";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function page() {
  const [mode, setMode] = useState<"login" | "signup">("login");

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggleMode = useCallback(() => {
    setMode((currentMode) => currentMode === "login" ? "signup" : "login");
  }, []);

  const { data, status } = useSession();

  console.log(data);
  console.log(status);

  const router = useRouter();

  if (status === "loading") {
    return (
      <MaxWidthWrapper className="h-screen w-full -mt-12 flex flex-row items-center justify-center text-center">
        <div className="p-2 bg-zinc-200 rounded-lg border-[1px] border-black/20 shadow-xl">
          <div className="bg-white p-12 rounded-lg border-[1px] border-black/20 shadow-lg">
            <h2 className="max-w-4xl text-2xl font-bold text-blue-600 uppercase mb-10 md:text-4xl">
              Hang Tight!
            </h2>
            <div className="mx-auto mb-4 flex max-w-fit justify-center items-center space-x-2 overflow-hidden rounded-full border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
              <p className="text-md font-semibold text-gray-700">We&apos;'re logging you in...</p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    )
  }
  if (status === "authenticated") {
    router.push("/dashboard");
  }

  return (
    <MaxWidthWrapper className="h-screen w-full -mt-12 flex flex-row items-center justify-between text-center">
      <div className="flex-1 px-0 max-lg:hidden">
        <div className="mx-auto mb-4 flex max-w-fit justify-center items-center space-x-2 overflow-hidden rounded-full border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <p className="text-sm font-semibold text-gray-700">Get Started with PhotoPhrase Today !</p>
        </div>

        <div className="p-2 bg-zinc-200 rounded-lg border-[1px] border-black/20 shadow-xl">
          <Image
            src='/auth-page-preview.jpg'
            alt='product preview'
            width={1364}
            height={866}
            quality={100}
            className='rounded-md bg-white p-2 shadow-2xl ring-1 ring-gray-900/10'
          />
        </div>
      </div>

      <div className="flex-1 px-12">
        <div className="p-2 bg-zinc-200 rounded-lg border-[1px] border-black/20 shadow-xl">
          <div className="bg-white p-12 rounded-lg border-[1px] border-black/20 shadow-lg">
            <h1 className="max-w-4xl text-4xl font-bold text-blue-600 uppercase mb-10 md:text-6xl">
              {mode === "login" ? "Login" : "Sign Up"}
            </h1>
            <div className="flex flex-col justify-center items-center gap-4 mb-10">
              {mode === "signup" && (
                <Input
                  label="Name"
                  onChange={(e: any) => setName(e.target.value)}
                  id="name"
                  value={name}
                />
              )}
              <Input
                label="Email"
                onChange={(e: any) => setEmail(e.target.value)}
                id="email"
                type="email"
                value={email}
              />
              <Input
                label="Password"
                onChange={(e: any) => setPassword(e.target.value)}
                id="password"
                type="password"
                value={password}
              />
            </div>

            {mode === "login" ?
              <Link
                href="/dashboard"
                className={buttonVariants({
                  size: "sm",
                  className: "w-1/2 text-lg h-full py-2",
                })}
              >
                Login
              </Link>
              :
              <Link
                href="/dashboard"
                className={buttonVariants({
                  size: "sm",
                  className: "w-1/2 text-lg h-full py-2",
                })}
              >
                Sign Up
              </Link>
            }

            <div className="flex flex-col justify-center items-center gap-2 mt-4">
              <p>Or login via</p>
              <div className="flex justify-center items-center gap-3">
                <button onClick={() => signIn('google')} className="bg-zinc-100 p-1 rounded-full border-[1px] border-zinc-300" >
                  <FcGoogle size={32} />
                </button>
                <button onClick={() => signIn('github')} className="bg-zinc-100 p-1 rounded-full border-[1px] border-zinc-300" >
                  <FaGithub size={32} />
                </button>
              </div>
            </div>

            <p className="text-zinc-600 mt-6">
              {mode === 'login' ? 'First time using PhotoPhrase ?' : 'Already have an account ?'}
              <span onClick={toggleMode} className="text-zinc-800 ml-1 hover:underline cursor-pointer">
                {mode === 'login' ? 'Create an account' : 'Login instead'}
              </span>
            </p>

          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}
