import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ArrowRight, Check, HelpCircle, Minus } from "lucide-react";

export default function page() {
  return (
    <MaxWidthWrapper className="mb-8 mt-24 text-center max-w-5xl">
      <div className="mx-auto mb-10 sm:max-w-lg">
        <h1 className="text-6xl font-bold sm:text-7xl">
          Pricing
        </h1>
        <p className="mt-5 text-gray-600 sm:text-lg">
          Whether you&apos;re just trying out our service or you need more, we&apos;ve got you covered.
        </p>
      </div>

      <div className="pt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <TooltipProvider>

          <div className="relative rounded-2xl bg-white shadow-lg border border-gray-200">
            <div className="p-5">
              <h3 className="my-3 text-center font-display text-3xl font-bold">
                Free
              </h3>
              <p className="text-gray-500">
                For small side projects.
              </p>
              <p className="my-5 font-display text-6xl font-semibold">
                $0
              </p>
              <p className="text-gray-500">
                per month
              </p>
            </div>

            <div className='flex h-20 items-center justify-center border-b border-t border-gray-200 bg-gray-50'>
              <div className='flex items-center space-x-1'>
                <p>
                  10 Images/mo included
                </p>

                <Tooltip delayDuration={300}>
                  <TooltipTrigger className='cursor-default ml-1.5'>
                    <HelpCircle className='h-4 w-4 text-zinc-500' />
                  </TooltipTrigger>
                  <TooltipContent className='w-80 p-2'>
                    How many Images you can upload per
                    month.
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>

            <ul className="my-10 space-y-5 px-8">
              <li className="flex space-x-5">
                <div className="flex-shrink-0">
                  <Check className="h-6 w-6 text-blue-500" />
                </div>
                <div className="flex items-center space-x-1">
                  <p>5 Images per day</p>
                </div>
              </li>
              <li className="flex space-x-5">
                <div className="flex-shrink-0">
                  <Check className="h-6 w-6 text-blue-500" />
                </div>
                <div className="flex items-center space-x-1">
                  <p>4MB file size limit</p>
                </div>
              </li>
              <li className="flex space-x-5">
                <div className="flex-shrink-0">
                  <Check className="h-6 w-6 text-blue-500" />
                </div>
                <div className="flex items-center space-x-1">
                  <p>Mobile-friendly interface</p>
                </div>
              </li>
              <li className="flex space-x-5">
                <div className="flex-shrink-0">
                  <Minus className="h-6 w-6 text-gray-300" />
                </div>
                <div className="flex items-center space-x-1">
                  <p>Higer-quality responses</p>
                </div>
              </li>
              <li className="flex space-x-5">
                <div className="flex-shrink-0">
                  <Minus className="h-6 w-6 text-gray-300" />
                </div>
                <div className="flex items-center space-x-1">
                  <p>Priority support</p>
                </div>
              </li>
            </ul>

            <div className="p-5">
              <Button className={buttonVariants({
                variant: "outline",
                size: "sm",
                className: "w-full text-zinc-500",
              })}>
                Upgrade now <ArrowRight className="h-5 w-5 ml-1.5" />
              </Button>
            </div>
          </div>

          <div className="relative rounded-2xl bg-white shadow-lg border-2 border-blue-600 shadow-blue-200">
            <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-3 py-2 text-sm font-medium text-white">
              Upgrade Now
            </div>

            <div className="p-5">
              <h3 className="my-3 text-center font-display text-3xl font-bold">
                Pro
              </h3>
              <p className="text-gray-500">
                For larger projects with higer needs.
              </p>
              <p className="my-5 font-display text-6xl font-semibold">
                $14
              </p>
              <p className="text-gray-500">
                per month
              </p>
            </div>

            <div className='flex h-20 items-center justify-center border-b border-t border-gray-200 bg-gray-50'>
              <div className='flex items-center space-x-1'>
                <p>
                  50 Images/mo included
                </p>

                <Tooltip delayDuration={300}>
                  <TooltipTrigger className='cursor-default ml-1.5'>
                    <HelpCircle className='h-4 w-4 text-zinc-500' />
                  </TooltipTrigger>
                  <TooltipContent className='w-80 p-2'>
                    How many Images you can upload per
                    month.
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>

            <ul className="my-10 space-y-5 px-8">
              <li className="flex space-x-5">
                <div className="flex-shrink-0">
                  <Check className="h-6 w-6 text-blue-500" />
                </div>
                <div className="flex items-center space-x-1">
                  <p>25 Images per day</p>
                </div>
              </li>
              <li className="flex space-x-5">
                <div className="flex-shrink-0">
                  <Check className="h-6 w-6 text-blue-500" />
                </div>
                <div className="flex items-center space-x-1">
                  <p>16MB file size limit</p>
                </div>
              </li>
              <li className="flex space-x-5">
                <div className="flex-shrink-0">
                  <Check className="h-6 w-6 text-blue-500" />
                </div>
                <div className="flex items-center space-x-1">
                  <p>Mobile-friendly interface</p>
                </div>
              </li>
              <li className="flex space-x-5">
                <div className="flex-shrink-0">
                  <Check className="h-6 w-6 text-blue-500" />
                </div>
                <div className="flex items-center space-x-1">
                  <p>Higer-quality responses</p>
                </div>
              </li>
              <li className="flex space-x-5">
                <div className="flex-shrink-0">
                  <Check className="h-6 w-6 text-blue-500" />
                </div>
                <div className="flex items-center space-x-1">
                  <p>Priority support</p>
                </div>
              </li>
            </ul>

            <div className="p-5">
              <Button className="w-full">
                Upgrade now <ArrowRight className="h-5 w-5 ml-1.5" />
              </Button>
            </div>

          </div>
        </TooltipProvider>
      </div>
    </MaxWidthWrapper>
  )
}