<style>
    @import url("https://fonts.googleapis.com/css2?family=Yellowtail&family=Poppins&display=swap");
    @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css");

    body {
        width: 100%;
        height: 100%;
        background-color: #0f0a06;
        display: flex;
        flex-direction: column;
        gap: 28px;
        padding-top: 16px;
        color: #fff;
        align-items: center;
    }

    div.width {
        width: 75%;
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .font-yellowtail {
        font-family: "Yellowtail", cursive;
    }

    .text-goldenYellow {
        color: #ed9100;
    }

    .glow {
        text-shadow: 0 0 20px rgba(237, 145, 0, 1);
    }

    .text-center {
        text-align: center;
    }

    .text-5xl {
        font-size: 3rem;
    }

    @media (min-width: 1024px) {
        .text-5xl {
            font-size: 4.5rem;
        }
    }

    .text-3xl {
        font-size: 1.875rem;
    }

    @media (min-width: 1024px) {
        .text-3xl {
            font-size: 3rem;
        }
    }

    .font-poppins {
        font-family: "Poppins", sans-serif;
    }

    @media (min-width: 1024px) {
        .lg-text-lg {
            font-size: 1.125rem;
        }
    }

    ul.flex.flex-col {
        display: flex;
        flex-direction: column;
    }

    ul.gap-4>li:not(:last-child) {
        margin-bottom: 1rem;
    }

    ul.text-xl {
        font-size: 1.25rem;
    }

    @media (min-width: 768px) {
        ul.md-text-2xl {
            font-size: 1.5rem;
        }
    }

    @media (min-width: 1024px) {
        ul.lg-text-3xl {
            font-size: 1.875rem;
        }
    }

    span.text-white {
        color: #fff;
    }

    span.text-sm {
        font-size: 0.875rem;
    }

    @media (min-width: 768px) {
        span.md-text-lg {
            font-size: 1.125rem;
        }
    }

    @media (min-width: 1024px) {

        span.md-ml-8,
        span.lg-ml-16 {
            margin-left: 2rem;
        }

        span.lg-text-2xl {
            font-size: 1.875rem;
        }
    }

    form.flex.flex-col.items-center {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input[type="hidden"] {
        display: none;
    }

    button.m-8 {
        margin: 2rem;
    }

    button.font-bold {
        font-weight: bold;
    }

    button.cursor-pointer {
        cursor: pointer;
    }

    button.hover\:underline:hover {
        text-decoration: underline;
    }

    button.focus\:outline-none:focus {
        outline: none;
    }

    div.w-full {
        width: 100%;
    }

    div.font-semibold {
        font-weight: 600;
    }

    div.text-xs {
        font-size: 0.75rem;
    }

    div.flex.justify-around {
        display: flex;
        justify-content: space-around;
    }

    div.pb-4 {
        padding-bottom: 1rem;
    }

    @media (min-width: 768px) {
        div.lg-py-4 {
            padding-top: 1rem;
            padding-bottom: 1rem;
        }

        div.md-text-lg {
            font-size: 1.125rem;
        }
    }

    button {
        background-color: transparent;
        border: none;
    }

    @media (min-width: 1024px) {
        div.lg-text-2xl {
            font-size: 1.875rem;
        }
    }
</style>

<body class="w-full h-full bg-bgBlack flex flex-col gap-28 pt-16 text-white items-center">
    <p class="font-yellowtail text-goldenYellow glow text-center text-5xl lg:text-8xl">The Golden Fork</p>
    <div class="w-3/4 flex flex-col gap-12">
        <p class="font-yellowtail text-3xl lg:text-5xl">
            Dear <span class="text-goldenYellow">{{ $data->name }}</span>
        </p>
        <p class="font-poppins lg:text-lg lg:w-3/4">
            We have just received your wished request of booking a reservation at The Golden Fork Restaurant, please
            confirm its information:
        </p>
        <ul class="font-yellowtail text-goldenYellow flex flex-col gap-4 text-xl md:text-2xl lg:text-3xl">
            <li>Reservation Date : <br class="md:hidden" /> <span
                    class="font-poppins text-white text-sm md:text-lg md:ml-8 lg:ml-16 lg:text-2xl">
                    {{ $data->reservation_date }} </span> </li>
            <li>Reservation Time : <br class="md:hidden" /> <span
                    class="font-poppins text-white text-sm md:text-lg md:ml-8 lg:ml-16 lg:text-2xl">
                    {{ $data->reservation_time }} </span> </li>
            <li>Number of People : <br class="md:hidden" /> <span
                    class="font-poppins text-white text-sm md:text-lg md:ml-8 lg:ml-16 lg:text-2xl">
                    {{ $data->number_of_people }} </span></li>
        </ul>
        <form action={{ route('reserve') }} method="post" class="flex flex-col items-center">
            @csrf
            <input type="hidden" name="name" value={{ $data->name }}>
            <input type="hidden" name="email" value={{ $data->email }}>
            <input type="hidden" name="reservation_date" value={{ $data->reservation_date }}>
            <input type="hidden" name="reservation_time" value={{ $data->reservation_time }}>
            <input type="hidden" name="number_of_people" value={{ $data->number_of_people }}>
            <button
                class="m-8 font-poppins text-goldenYellow font-bold cursor-pointer hover:underline focus:outline-none">Confirm
                My Reservation</button>
        </form>
        <div
            class="w-full font-yellowtail font-semibold text-xs glow flex justify-around pb-4 lg:py-4 md:text-lg lg:text-2xl">
            <p>
                Address:
                <br /> 123 Main Street, Rabat
            </p>
            <p>
                Phone:
                <br /> (212) 5 37 00 00 00
            </p>
            <p>
                Email:
                <br /> thegoldenforkcontact@gmail.com
            </p>
        </div>
    </div>
</body>
