/**
 * v0 by Vercel.
 * @see https://v0.dev/t/igLzjwAi2XU
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="border rounded-lg w-full max-w-lg mx-auto">
      <div className="flex h-10 items-center gap-2 px-3">
        <div className="absolute inset-y-0 flex items-center pl-3">
          <SearchIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          <label className="sr-only text-sm-0.5 ml-2 shrink-0.5" htmlFor="search">
            Search
          </label>
        </div>
        <Input
          className="h-10 w-full border-0 box-content appearance-none bg-transparent"
          id="search"
          placeholder="Search for products"
        />
        <Button className="rounded-lg w-8 h-8" size="icon">
          <ArrowRightIcon className="w-4 h-4" />
          <span className="sr-only">Search</span>
        </Button>
      </div>
    </div>
  )
}

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
