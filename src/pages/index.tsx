import Image from 'next/image'
import { Inter } from 'next/font/google'

export default function Home() {
  return (
    <main>
      


    <header className="bg-gray-900/95">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-white" href="/">
              <span className="sr-only">Home</span>
              <div className="flex items-center">
              <svg
                className="h-8"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                  fill="currentColor"
                />
              </svg>
              <div className='text-white text-x1 ml-2'>Challenge Me</div>
              </div>
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-5 text-sm">
                <li>
                  <a
                    className="text-white transition hover:text-white/40"
                    href="/"
                  >
                    Competições
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:text-white/40"
                    href="/"
                  >
                    Dashboard
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:text-white/40"
                    href="/"
                  >
                    Histórico
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                  href="/"
                >
                  Entre
                </a>

                <div className="hidden sm:flex">
                  <a
                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-blue-600"
                    href="/"
                  >
                    Cadastre-se
                  </a>
                </div>
              </div>

              <div className="block md:hidden">
                <button
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    

    <section className="bg-gray-900 text-white">
      <div
        className="mx-auto max-w-screen-x1 px-4 py-32 lg:flex lg:h-screen lg:items-center"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h1
            className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
          >
            DESAFIE SEUS AMIGOS
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            É hora de descobrir quem realmente domina o mundo fitness.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="/"
            >
              Começe Agora
            </a>

            <a
              className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              href="/"
            >
              Saiba Mais
            </a>
          </div>
        </div>
      </div>
    </section>


    
<div id="default-carousel" className="relative w-full" data-carousel="slide">
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="data:image/jpeg;base64,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" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsFQMg1ZWIjRpD_gjakWrt4Z-Wf9pFDsGtTXxqZFwmEEzvhSDvN7lSAsbh9kg4BlFmLIk&usqp=CAUg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="data:image/png;base64,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" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    </div>
    <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>

    

    <section className="bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Milhares de pessoas já estão competindo!
          </h2>

          <p className="mt-4 text-white sm:text-xl">
            Venha fazer parte da comunidade de competições entre amigos que mais
            cresce
          </p>
        </div>

        <div className="mt-8 sm:mt-12">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex flex-col rounded-lg bg-white/90 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                Usuários
              </dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                120.154
              </dd>
            </div>

            <div className="flex flex-col rounded-lg bg-white/90 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                Competições Criadas
              </dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                1.537
              </dd>
            </div>

            <div className="flex flex-col rounded-lg bg-white/90 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                Modalidades
              </dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                48
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>                                


    <section>
      <div className="mx-auto max-w-screen-x1 bg-gray-300 px-20 py-32 lg:flex lg:h-screen lg:items-center">
        <div
          className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16"
        >
          <div
            className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right"
          >
            <h2 className="text-3xl font-bold sm:text-4xl">Personalize seus desafios!</h2>

            <p className="mt-4 text-gray-600">
              Teste a sua força e a dos seus amigos!
              A Challange Me é o campo de batalha perfeito
              para mostrar quem realmente domina o mundo fitness.
              Melhore seu condicionamento físico enquanto desafia seus amigos!
            </p>

            <a
              href="#"
              className="mt-6 inline-block rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
            >
              Baixe Agora
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="#responsive-header"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <h2 className="mt-2 font-bold">Corridas</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Quem do grupo vai correr mais em um mês?
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="#responsive-header"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <h2 className="mt-2 font-bold">Flexões</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Quem do grupo aguenta fazer mais flexões?
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="#responsive-header"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <h2 className="mt-2 font-bold">Abdominais</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Quem do grupo aguenta fazer mais abdominais?
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="#responsive-header"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <h2 className="mt-2 font-bold">Treinos</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Será que seus amigos aguentam fazer o seu treino?
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="#responsive-header"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <h2 className="mt-2 font-bold">Agachamentos</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Quem do grupo aguenta fazer mais agachamentos?
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="#responsive-header"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <h2 className="mt-2 font-bold">Pranchas</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Quem do grupo aguenta ficar mais tempo na prancha?
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>


    <section className="bg-gray-900 h-screen">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
          Comece um novo desafio com os seus amigos ainda hoje!
          </h2>

          <form
            action=""
            className="bg-gray-300 mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <p className="text-center text-lg font-medium">Crie a sua conta</p>

            <div>
              <label className="sr-only">Email</label>

              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Digite seu email"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label className="sr-only">Password</label>

              <div className="relative">
                <input
                  type="password"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Digite sua senha"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="block w-full rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white"
            >
              Entrar
            </button>

            <p className="text-center text-sm text-gray-500">
              É novo por aqui?
              <a className="underline" href="">Cadastre-se</a>
            </p>
          </form>
        </div>
      </div>
    </section>


    <footer className="bg-gray-900/95">
      <div
        className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24"
      >
        <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
          <a
            className="inline-block rounded-full bg-white p-2 text-black shadow transition hover:bg-blue-600 hover:text-white sm:p-3 lg:p-4"
            href="#"
          >
            <span className="sr-only">Back to top</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>

        <div className="lg:flex lg:items-end lg:justify-between h-10">
          <div>
            <div className="flex justify-center text-white lg:justify-start">
            <svg
                className="h-8"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                  fill="currentColor"
                />
            </svg>
            <div className='text-white text-center ml-2'>Challenge Me</div>
            </div>

            <p
              className="mx-auto mt-6 max-w-md text-center leading-relaxed text-white lg:text-left"
            >
              Unindo saúde física com diversão.
            </p>
          </div>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">

            <li>
              <a className="text-white transition hover:text-white/40" href="/">
                Competições
              </a>
            </li>

            <li>
              <a className="text-white transition hover:text-white/40" href="/">
                Dashboard
              </a>
            </li>

            <li>
              <a className="text-white transition hover:text-white/40" href="/">
                Históricos
              </a>
            </li>

          </ul>
        </div>

        <p className="mt-12 text-center text-sm h-0 text-white lg:text-right">
          Copyright &copy; 2023. Todos os direitos reservados.
        </p>
      </div>
    </footer>


    </main>
  )
}
