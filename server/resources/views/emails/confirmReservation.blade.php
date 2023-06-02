<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @vite('resources/css/app.css')
</head>

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
            <input type="hidden" name="is_gmail" value={{ $data->is_gmail }}>
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

</html>
