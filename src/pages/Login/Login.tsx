import { AiFillGoogleCircle } from 'solid-icons/ai'


export const Login = () => {
  return (
    <div class="h-full w-full flex">
        <section class="items-center bg-slate-50 flex border-r shadow-md border-sky-300 w-1/2 h-full">
        <div class="w-full text-slate-800 flex justify-evenly px-10  h-48">
        <h1 class=" font-bold text-4xl">Hi!</h1>
        </div>
        </section>
        <section class="flex w-1/2 h-full items-center justify-center">
            <div class=" h-[35rem] w-[22rem] p-5">
                <AiFillGoogleCircle />
            </div>
        </section>
    </div>
  )
}
